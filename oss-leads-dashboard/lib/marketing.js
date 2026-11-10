import 'server-only';
import { query } from './db';
import { TZ } from './config';
import { googlePost, serviceAccount } from './google';
import { CHANNELS, leadChannel } from './leads';

/**
 * Data for the Marketing page: Google Analytics 4, Search Console, a public
 * Google Tag Manager health check and leads by source.
 * Each section returns { status: 'ok' | 'setup' | 'error', ... } on its own,
 * so one missing key or failing API never hides the others.
 */

export const PERIODS = [7, 28, 90];
const CACHE_HOURS = 6;

export const GA4_PROPERTY_ID = (process.env.GA4_PROPERTY_ID || '').trim();
export const GSC_SITE = (process.env.GSC_SITE || '').trim();
export const GTM_ID = (process.env.GTM_ID || 'GTM-WRN3ZBSZ').trim();
export const SITE_URL = (process.env.SITE_URL || 'https://www.openyardstorage.com').trim().replace(/\/+$/, '');

// ---------- cache (Postgres, survives serverless cold starts) ----------

async function cached(key, fresh, load) {
  if (!fresh) {
    try {
      const rows = await query(
        `SELECT json, saved_at FROM cache WHERE key = $1 AND saved_at > now() - make_interval(hours => $2)`, [key, CACHE_HOURS]);
      if (rows[0]) return { ...JSON.parse(rows[0].json), cachedAt: new Date(rows[0].saved_at).toISOString() };
    } catch { /* unreadable cache entry: load again */ }
  }
  const data = await load();
  // Only successful results are cached, so fixing a setting shows up on the next load.
  if (data.status === 'ok') {
    await query(
      `INSERT INTO cache (key, json, saved_at) VALUES ($1, $2, now())
       ON CONFLICT (key) DO UPDATE SET json = EXCLUDED.json, saved_at = EXCLUDED.saved_at`,
      [key, JSON.stringify(data)]).catch(() => {});
  }
  return { ...data, cachedAt: null };
}

/** Runs a section; turns thrown errors into { status: 'error' }. */
async function section(fn) {
  try {
    return await fn();
  } catch (e) {
    const msg = String(e?.message || e);
    let hint = '';
    if (e?.status === 403) hint = 'The service account has no access yet. Add its email as a user (Viewer / Restricted is enough).';
    if (e?.status === 404) hint = 'Check the property ID / site address.';
    return { status: 'error', error: msg, hint };
  }
}

function keyProblem() {
  try {
    return serviceAccount() ? null : 'GOOGLE_SA_KEY';
  } catch (e) {
    return e.message;
  }
}

const pct = (a, b) => (b ? ((a - b) / b) * 100 : null);

// ---------- Google Analytics 4 ----------

const GA_TOTALS = ['activeUsers', 'sessions', 'screenPageViews', 'keyEvents', 'engagementRate', 'averageSessionDuration', 'newUsers'];

function gaRows(report, metricNames) {
  return (report.rows || []).map((r) => {
    const o = { label: r.dimensionValues?.[0]?.value ?? '' };
    metricNames.forEach((m, i) => { o[m] = Number(r.metricValues?.[i]?.value || 0); });
    return o;
  });
}

function gaTop(dimension, metrics, limit = 10) {
  return {
    dimensions: [{ name: dimension }],
    metrics: metrics.map((name) => ({ name })),
    orderBys: [{ metric: { metricName: metrics[0] }, desc: true }],
    limit,
  };
}

async function loadGa4(days) {
  const missing = [];
  const kp = keyProblem();
  if (kp) missing.push(kp);
  if (!GA4_PROPERTY_ID) missing.push('GA4_PROPERTY_ID');
  else if (!/^\d+$/.test(GA4_PROPERTY_ID)) missing.push('GA4_PROPERTY_ID must be the numeric property ID (GA4 Admin → Property details), not the G- measurement ID');
  if (missing.length) return { status: 'setup', missing };

  const cur = { startDate: `${days}daysAgo`, endDate: 'yesterday' };
  const prev = { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo` };
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:batchRunReports`;
  const withRange = (r) => ({ dateRanges: [cur], ...r });

  // batchRunReports takes at most 5 reports per call.
  const [a, b] = await Promise.all([
    googlePost(url, {
      requests: [
        { dateRanges: [cur, prev], metrics: GA_TOTALS.map((name) => ({ name })) },
        withRange({ dimensions: [{ name: 'date' }], metrics: [{ name: 'sessions' }, { name: 'activeUsers' }], orderBys: [{ dimension: { dimensionName: 'date' } }], limit: 400 }),
        withRange(gaTop('sessionDefaultChannelGroup', ['sessions', 'activeUsers', 'keyEvents', 'engagementRate'])),
        withRange(gaTop('pagePath', ['screenPageViews', 'activeUsers', 'averageSessionDuration'], 15)),
        withRange(gaTop('eventName', ['eventCount', 'totalUsers'], 20)),
      ],
    }),
    googlePost(url, {
      requests: [
        withRange(gaTop('deviceCategory', ['sessions', 'activeUsers'])),
        withRange(gaTop('city', ['activeUsers', 'sessions'])),
        withRange(gaTop('landingPage', ['sessions', 'keyEvents', 'engagementRate'], 15)),
        withRange(gaTop('sessionSource', ['sessions', 'keyEvents'], 15)),
      ],
    }),
  ]);
  const [rTotals, rDaily, rChannels, rPages, rEvents] = a.reports || [];
  const [rDevices, rCities, rLanding, rSources] = b.reports || [];

  // Two date ranges: GA adds a "dateRange" dimension (date_range_0 = current, date_range_1 = previous).
  const byRange = {};
  for (const r of rTotals?.rows || []) {
    const name = r.dimensionValues?.[0]?.value || 'date_range_0';
    byRange[name] = Object.fromEntries(GA_TOTALS.map((m, i) => [m, Number(r.metricValues?.[i]?.value || 0)]));
  }
  const zero = Object.fromEntries(GA_TOTALS.map((m) => [m, 0]));
  const now = byRange.date_range_0 || zero, before = byRange.date_range_1 || zero;
  const totals = Object.fromEntries(GA_TOTALS.map((m) => [m, { value: now[m], previous: before[m], change: pct(now[m], before[m]) }]));

  const daily = gaRows(rDaily || {}, ['sessions', 'activeUsers']).map((r) => ({
    date: `${r.label.slice(0, 4)}-${r.label.slice(4, 6)}-${r.label.slice(6, 8)}`, sessions: r.sessions, users: r.activeUsers,
  }));

  return {
    status: 'ok',
    propertyId: GA4_PROPERTY_ID,
    totals,
    daily,
    channels: gaRows(rChannels || {}, ['sessions', 'activeUsers', 'keyEvents', 'engagementRate']),
    pages: gaRows(rPages || {}, ['screenPageViews', 'activeUsers', 'averageSessionDuration']),
    events: gaRows(rEvents || {}, ['eventCount', 'totalUsers']),
    devices: gaRows(rDevices || {}, ['sessions', 'activeUsers']),
    cities: gaRows(rCities || {}, ['activeUsers', 'sessions']),
    landingPages: gaRows(rLanding || {}, ['sessions', 'keyEvents', 'engagementRate']),
    sources: gaRows(rSources || {}, ['sessions', 'keyEvents']),
  };
}

// ---------- Search Console ----------

const ymdUTC = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n) => { const d = new Date(); d.setUTCHours(0, 0, 0, 0); d.setUTCDate(d.getUTCDate() - n); return d; };

function gscRow(r) {
  return { key: r.keys?.[0] ?? '', clicks: r.clicks || 0, impressions: r.impressions || 0, ctr: r.ctr || 0, position: r.position || 0 };
}

/** sc-domain properties report http/https/www versions of a page separately; merge them by path. */
function mergeByPath(rows) {
  const map = new Map();
  for (const r of rows) {
    let path = r.key;
    try { const u = new URL(r.key); path = (u.pathname.replace(/\/+$/, '') || '/') + u.search; } catch { /* keep as is */ }
    const m = map.get(path) || { key: path, clicks: 0, impressions: 0, posSum: 0 };
    m.clicks += r.clicks;
    m.impressions += r.impressions;
    m.posSum += r.position * r.impressions;
    map.set(path, m);
  }
  return [...map.values()].map((m) => ({
    key: m.key, clicks: m.clicks, impressions: m.impressions,
    ctr: m.impressions ? m.clicks / m.impressions : 0,
    position: m.impressions ? m.posSum / m.impressions : 0,
  }));
}

async function loadGsc(days) {
  const missing = [];
  const kp = keyProblem();
  if (kp) missing.push(kp);
  if (!GSC_SITE) missing.push('GSC_SITE');
  if (missing.length) return { status: 'setup', missing };

  // Search Console data lags ~2-3 days.
  const end = daysAgo(3), start = daysAgo(3 + days - 1);
  const prevEnd = daysAgo(3 + days), prevStart = daysAgo(3 + days * 2 - 1);
  const range = { startDate: ymdUTC(start), endDate: ymdUTC(end) };
  const prevRange = { startDate: ymdUTC(prevStart), endDate: ymdUTC(prevEnd) };
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`;
  const q = (r, extra = {}) => googlePost(url, { ...r, dataState: 'all', ...extra }).then((d) => (d.rows || []).map(gscRow));

  const [[tot], [prevTot], daily, queries, pagesRaw, devices] = await Promise.all([
    q(range).then((r) => (r.length ? r : [gscRow({})])),
    q(prevRange).then((r) => (r.length ? r : [gscRow({})])),
    q(range, { dimensions: ['date'], rowLimit: 500 }),
    q(range, { dimensions: ['query'], rowLimit: 1000 }),
    q(range, { dimensions: ['page'], rowLimit: 1000 }),
    q(range, { dimensions: ['device'] }),
  ]);

  const metric = (k) => ({ value: tot[k], previous: prevTot[k], change: pct(tot[k], prevTot[k]) });
  const byClicks = (a, b) => b.clicks - a.clicks || b.impressions - a.impressions;
  const pages = (GSC_SITE.startsWith('sc-domain:') ? mergeByPath(pagesRaw) : pagesRaw).sort(byClicks);

  return {
    status: 'ok',
    site: GSC_SITE,
    range,
    totals: { clicks: metric('clicks'), impressions: metric('impressions'), ctr: metric('ctr'), position: metric('position') },
    daily: daily.map((r) => ({ date: r.key, clicks: r.clicks, impressions: r.impressions })).sort((x, y) => x.date.localeCompare(y.date)),
    queries: [...queries].sort(byClicks).slice(0, 50),
    pages: pages.slice(0, 20),
    devices: devices.sort(byClicks),
    // Queries already seen but not yet on top of page 1: the cheapest SEO wins.
    opportunities: queries
      .filter((r) => r.impressions >= 10 && r.position >= 4 && r.position <= 20)
      .sort((x, y) => y.impressions - x.impressions)
      .slice(0, 25),
  };
}

// ---------- Google Tag Manager health (public, no login needed) ----------

async function fetchText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000), cache: 'no-store', headers: { 'User-Agent': 'Mozilla/5.0 (compatible; OSS-Leads-Dashboard)' } });
  return { ok: res.ok, status: res.status, text: res.ok ? await res.text() : '' };
}

async function loadGtm() {
  if (!GTM_ID) return { status: 'setup', missing: ['GTM_ID'] };
  const [js, site] = await Promise.all([
    fetchText(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`),
    fetchText(SITE_URL + '/').catch((e) => ({ ok: false, status: 0, text: '', error: e.message })),
  ]);
  const uniq = (arr) => [...new Set(arr)];
  const measurementIds = uniq(js.text.match(/\bG-[A-Z0-9]{6,12}\b/g) || []);
  const adsIds = uniq(js.text.match(/\bAW-\d{6,12}\b/g) || []);
  const events = uniq([...js.text.matchAll(/"vtp_eventName":"([^"]+)"/g)].map((m) => m[1]));
  const onSite = site.ok && site.text.includes(GTM_ID);

  const issues = [];
  if (!js.ok) issues.push(js.status === 404 ? 'The container is not published (gtm.js returns 404).' : `gtm.js returned HTTP ${js.status}.`);
  if (!site.ok) issues.push(`Could not load ${SITE_URL} (HTTP ${site.status || 'error'}).`);
  else if (!onSite) issues.push(`${GTM_ID} was not found in the home page HTML.`);
  if (js.ok && !measurementIds.length) issues.push('No GA4 tag (G- ID) found in the container.');
  if (js.ok && !events.some((e) => e === 'generate_lead')) issues.push('No "generate_lead" event yet; rename the form-submit event so GA4 can count leads as a key event.');

  return {
    status: 'ok',
    gtmId: GTM_ID,
    siteUrl: SITE_URL,
    published: js.ok,
    onSite,
    measurementIds,
    adsIds,
    events,
    issues,
  };
}

// ---------- Leads by source (our own database, never cached) ----------

async function loadLeads(days) {
  const rows = await query(
    `SELECT utm_source, utm_medium, utm_campaign, gclid, referrer, landing_page, received_at >= now() - make_interval(days => $1) AS cur
     FROM leads WHERE received_at >= now() - make_interval(days => $2)`, [days, days * 2]);
  const counts = Object.fromEntries(CHANNELS.map((c) => [c, 0]));
  const campaigns = new Map();
  let total = 0, previous = 0;
  for (const r of rows) {
    if (!r.cur) { previous++; continue; }
    total++;
    counts[leadChannel(r)]++;
    if (r.utm_campaign) campaigns.set(r.utm_campaign, (campaigns.get(r.utm_campaign) || 0) + 1);
  }
  return {
    status: 'ok',
    total,
    previous,
    change: pct(total, previous),
    channels: CHANNELS.map((label) => ({ label, leads: counts[label] })).filter((c) => c.leads > 0 || c.label !== 'Not tracked'),
    campaigns: [...campaigns].map(([label, leads]) => ({ label, leads })).sort((a, b) => b.leads - a.leads).slice(0, 10),
    tz: TZ,
  };
}

/** Everything the Marketing page shows. */
export async function marketingData({ days, fresh }) {
  const [ga4, gsc, gtm, leads] = await Promise.all([
    section(() => cached(`ga4:${GA4_PROPERTY_ID}:${days}`, fresh, () => loadGa4(days))),
    section(() => cached(`gsc:${GSC_SITE}:${days}`, fresh, () => loadGsc(days))),
    section(() => cached(`gtm:${GTM_ID}`, fresh, loadGtm)),
    section(() => loadLeads(days)),
  ]);
  let serviceAccountEmail = null;
  try { serviceAccountEmail = serviceAccount()?.client_email || null; } catch { /* reported in the sections */ }
  return { days, generatedAt: new Date().toISOString(), serviceAccountEmail, ga4, gsc, gtm, leads };
}

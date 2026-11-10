'use client';
import { useCallback, useEffect, useState } from 'react';
import { Icon } from '@/lib/icons';
import { withBase } from '@/lib/base';
import Chart from '../Chart';

const PERIODS = [7, 28, 90];

// ---------- formatting ----------
const num = (n) => Math.round(n || 0).toLocaleString('en-US');
const pct1 = (n) => `${((n || 0) * 100).toFixed(1)}%`;
const dur = (s) => { s = Math.round(s || 0); return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, '0')}s`; };
const pos = (n) => (n || 0).toFixed(1);
const ago = (iso) => {
  if (!iso) return '';
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  return m < 1 ? 'just now' : m < 60 ? `${m} min ago` : `${Math.round(m / 60)} h ago`;
};
const short = (s, n = 60) => (s && s.length > n ? s.slice(0, n - 1) + '…' : s || '(not set)');

/** % change badge. `lowerIsBetter` flips the colour (e.g. search position). */
function Delta({ change, lowerIsBetter }) {
  if (change == null || !isFinite(change)) return <span className="muted">no data for the previous period</span>;
  const up = change >= 0;
  const good = lowerIsBetter ? !up : up;
  return (
    <><span className={'delta ' + (Math.abs(change) < 0.05 ? '' : good ? 'up' : 'down')}>{up ? '▲' : '▼'} {Math.abs(change).toFixed(1)}%</span> vs previous period</>
  );
}

function Kpi({ label, icon, value, change, lowerIsBetter }) {
  return (
    <div className="kpi">
      <div className="kpi-top"><span>{label}</span><span className="kpi-ic"><Icon name={icon} /></span></div>
      <div className="kpi-val">{value}</div>
      <div className="kpi-sub"><Delta change={change} lowerIsBetter={lowerIsBetter} /></div>
    </div>
  );
}

/** Small read-only table. cols: [header, key | fn(row), align?] */
function Table({ rows, cols, empty = 'No data for this period.', scroll }) {
  if (!rows?.length) return <div className="empty small">{empty}</div>;
  return (
    <div className={'table-wrap' + (scroll ? ' mk-scroll' : '')}>
      <table className="table mk-table">
        <thead><tr>{cols.map(([h, , a], i) => <th key={i} className={a === 'r' ? 'num' : ''}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {cols.map(([, k, a], j) => <td key={j} className={a === 'r' ? 'num' : 'mk-label'}>{typeof k === 'function' ? k(r) : r[k]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Horizontal bars, like the dashboard's bar lists. */
function Bars({ rows, value, label = (r) => r.label, fmt = num, empty = 'No data for this period.' }) {
  if (!rows?.length) return <div className="empty small">{empty}</div>;
  const max = Math.max(1, ...rows.map(value));
  return (
    <ul className="bars mk-bars">
      {rows.map((r, i) => (
        <li key={i}>
          <span className="bar-label">{label(r)}</span>
          <span className="bar-track"><span className="bar-fill" style={{ width: `${(value(r) / max) * 100}%`, background: 'var(--brand)' }} /></span>
          <span className="bar-val">{fmt(value(r))}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ title, sub, children, right }) {
  return (
    <section className="card">
      <div className="card-head"><div><h2>{title}</h2>{sub && <p className="muted">{sub}</p>}</div>{right}</div>
      {children}
    </section>
  );
}

function SectionError({ s, name }) {
  if (s?.status === 'error') {
    return <div className="alert alert-error"><b>{name} could not be loaded:</b> {s.error}{s.hint && <div style={{ fontWeight: 400, marginTop: 4 }}>{s.hint}</div>}</div>;
  }
  if (s?.status === 'setup') {
    return <div className="alert alert-warn">{name} is not connected yet. Missing: {s.missing.join(', ')}. See the setup checklist above.</div>;
  }
  return null;
}

const toSeries = (rows, key) => Object.fromEntries((rows || []).map((r) => [r.date, r[key]]));

// ---------- setup checklist ----------
function Setup({ data }) {
  const { ga4, gsc, serviceAccountEmail } = data;
  const needs = [ga4, gsc].some((s) => s?.status === 'setup');
  if (!needs) return null;
  const miss = (s, k) => s?.status === 'setup' && s.missing.some((m) => m.startsWith(k));
  const keyBad = [ga4, gsc].some((s) => s?.status === 'setup' && s.missing.some((m) => m.includes('GOOGLE_SA_KEY')));
  const items = [
    [!keyBad, <>Create a Google Cloud service account, enable the <b>Google Analytics Data API</b> and <b>Search Console API</b>, download its JSON key and set it (base64-encoded) as <code>GOOGLE_SA_KEY</code>.</>],
    [!miss(ga4, 'GA4_PROPERTY_ID'), <>In GA4 → Admin → Property access management, add {serviceAccountEmail ? <code>{serviceAccountEmail}</code> : 'the service-account email'} as <b>Viewer</b>, then set <code>GA4_PROPERTY_ID</code> to the numeric property ID.</>],
    [!miss(gsc, 'GSC_SITE'), <>In Search Console, add the same email as a user and set <code>GSC_SITE</code> to <code>sc-domain:openyardstorage.com</code> (or <code>https://www.openyardstorage.com/</code>).</>],
  ];
  return (
    <div className="callout callout-warn">
      <Icon name="settings" />
      <div>
        <b>Finish connecting Google</b>
        <p>Add these environment variables to the dashboard&apos;s Vercel project, then redeploy. Tag Manager and leads by source already work.</p>
        <ul className="mk-check">
          {items.map(([done, text], i) => (
            <li key={i} className={done ? 'done' : ''}><span className="mk-tick">{done ? <Icon name="check" /> : i + 1}</span><span>{text}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------- sections ----------
function Ga4({ s, days }) {
  if (s?.status !== 'ok') return <SectionError s={s} name="Google Analytics" />;
  const t = s.totals;
  return (
    <>
      <section className="kpis">
        <Kpi label="Users" icon="users" value={num(t.activeUsers.value)} change={t.activeUsers.change} />
        <Kpi label="Sessions" icon="trend" value={num(t.sessions.value)} change={t.sessions.change} />
        <Kpi label="Page views" icon="globe" value={num(t.screenPageViews.value)} change={t.screenPageViews.change} />
        <Kpi label="Key events" icon="bell" value={num(t.keyEvents.value)} change={t.keyEvents.change} />
      </section>
      <section className="kpis">
        <Kpi label="New users" icon="users" value={num(t.newUsers.value)} change={t.newUsers.change} />
        <Kpi label="Engagement rate" icon="check" value={pct1(t.engagementRate.value)} change={t.engagementRate.change} />
        <Kpi label="Avg. session duration" icon="calendar" value={dur(t.averageSessionDuration.value)} change={t.averageSessionDuration.change} />
      </section>
      <Card title="Sessions per day" sub={`Google Analytics · last ${days} days (to yesterday) · ${num(t.sessions.value)} sessions`}>
        <Chart series={toSeries(s.daily, 'sessions')} unit="session" />
      </Card>
      <div className="grid-2">
        <Card title="Traffic channels" sub="Where visits came from">
          <Table rows={s.channels} cols={[['Channel', 'label'], ['Sessions', (r) => num(r.sessions), 'r'], ['Users', (r) => num(r.activeUsers), 'r'], ['Key events', (r) => num(r.keyEvents), 'r'], ['Engaged', (r) => pct1(r.engagementRate), 'r']]} />
        </Card>
        <Card title="Devices">
          <Bars rows={s.devices} value={(r) => r.sessions} label={(r) => r.label.replace(/^\w/, (c) => c.toUpperCase())} />
        </Card>
      </div>
      <div className="grid-2">
        <Card title="Top pages" sub="Most viewed pages">
          <Table rows={s.pages} cols={[['Page', (r) => <span title={r.label}>{short(r.label, 55)}</span>], ['Views', (r) => num(r.screenPageViews), 'r'], ['Users', (r) => num(r.activeUsers), 'r'], ['Avg. time', (r) => dur(r.averageSessionDuration), 'r']]} />
        </Card>
        <Card title="Top cities">
          <Bars rows={s.cities} value={(r) => r.activeUsers} />
        </Card>
      </div>
      <div className="grid-2">
        <Card title="Landing pages" sub="First page of each visit">
          <Table rows={s.landingPages} cols={[['Landing page', (r) => <span title={r.label}>{short(r.label, 55)}</span>], ['Sessions', (r) => num(r.sessions), 'r'], ['Key events', (r) => num(r.keyEvents), 'r'], ['Engaged', (r) => pct1(r.engagementRate), 'r']]} />
        </Card>
        <Card title="Sources">
          <Table rows={s.sources} cols={[['Source', 'label'], ['Sessions', (r) => num(r.sessions), 'r'], ['Key events', (r) => num(r.keyEvents), 'r']]} />
        </Card>
      </div>
      <Card title="Events" sub="Everything GA4 recorded, including Tag Manager events">
        <Table rows={s.events} cols={[['Event', (r) => <code>{r.label}</code>], ['Count', (r) => num(r.eventCount), 'r'], ['Users', (r) => num(r.totalUsers), 'r']]} />
      </Card>
    </>
  );
}

function Leads({ s, days }) {
  if (s?.status !== 'ok') return <SectionError s={s} name="Leads by source" />;
  return (
    <div className="grid-2">
      <Card title="Leads by channel" sub={`Contact-form leads · last ${days} days · ${s.total} lead${s.total === 1 ? '' : 's'}`}
        right={<span className="kpi-sub"><Delta change={s.change} /></span>}>
        <Bars rows={s.channels} value={(r) => r.leads} empty="No leads in this period." />
        {s.channels.some((c) => c.label === 'Not tracked') && (
          <p className="hint" style={{ margin: '12px 0 0' }}>&quot;Not tracked&quot; = leads received before source tracking was added to the website.</p>
        )}
      </Card>
      <Card title="Lead campaigns" sub="utm_campaign of each lead">
        <Bars rows={s.campaigns} value={(r) => r.leads} empty="No leads with a campaign tag yet. Add utm_ tags to ad and email links to see them here." />
      </Card>
    </div>
  );
}

function Gsc({ s, days }) {
  if (s?.status !== 'ok') return <SectionError s={s} name="Search Console" />;
  const t = s.totals;
  const q = [['Query', (r) => <span title={r.key}>{short(r.key, 60)}</span>], ['Clicks', (r) => num(r.clicks), 'r'], ['Impr.', (r) => num(r.impressions), 'r'], ['CTR', (r) => pct1(r.ctr), 'r'], ['Position', (r) => pos(r.position), 'r']];
  return (
    <>
      <section className="kpis">
        <Kpi label="Clicks" icon="trend" value={num(t.clicks.value)} change={t.clicks.change} />
        <Kpi label="Impressions" icon="globe" value={num(t.impressions.value)} change={t.impressions.change} />
        <Kpi label="CTR" icon="check" value={pct1(t.ctr.value)} change={t.ctr.change} />
        <Kpi label="Avg. position" icon="chart" value={pos(t.position.value)} change={t.position.change} lowerIsBetter />
      </section>
      <Card title="Search clicks per day" sub={`Google Search · ${s.range.startDate} to ${s.range.endDate} (Search Console data is ~3 days behind)`}>
        <Chart series={toSeries(s.daily, 'clicks')} unit="click" />
      </Card>
      <div className="grid-2">
        <Card title="Top search queries" sub="Top 50 by clicks">
          <Table rows={s.queries} cols={q} scroll />
        </Card>
        <Card title="Opportunities" sub="10+ impressions at position 4–20: improve these pages to reach the top 3">
          <Table rows={s.opportunities} cols={q} scroll empty="No queries in positions 4–20 with 10+ impressions." />
        </Card>
      </div>
      <div className="grid-2">
        <Card title="Top pages in Google" sub="Top 20 by clicks">
          <Table rows={s.pages} cols={[['Page', (r) => <span title={r.key}>{short(r.key.replace(/^https?:\/\/[^/]+/, ''), 55)}</span>], ['Clicks', (r) => num(r.clicks), 'r'], ['Impr.', (r) => num(r.impressions), 'r'], ['CTR', (r) => pct1(r.ctr), 'r'], ['Position', (r) => pos(r.position), 'r']]} scroll />
        </Card>
        <Card title="Search devices">
          <Bars rows={s.devices} value={(r) => r.clicks} label={(r) => r.key.charAt(0) + r.key.slice(1).toLowerCase()} />
        </Card>
      </div>
    </>
  );
}

function Gtm({ s }) {
  if (s?.status !== 'ok') return <SectionError s={s} name="Tag Manager check" />;
  const Row = ({ ok, title, children }) => (
    <li><span className={'dot ' + (ok ? 'on' : 'err')} /><div><b>{title}</b><small>{children}</small></div></li>
  );
  return (
    <Card title="Tag Manager health" sub={`${s.gtmId} · checked from the public container and ${s.siteUrl}`} right={s.cachedAt && <span className="hint" style={{ margin: 0 }}>checked {ago(s.cachedAt)}</span>}>
      <ul className="mailboxes">
        <Row ok={s.published} title="Container published">{s.published ? 'gtm.js is live' : 'gtm.js is not available: publish the container in Tag Manager'}</Row>
        <Row ok={s.onSite} title="Installed on the website">{s.onSite ? `${s.gtmId} found on the home page` : `${s.gtmId} not found on the home page`}</Row>
        <Row ok={s.measurementIds.length > 0} title="Sends to Google Analytics">{s.measurementIds.length ? s.measurementIds.join(', ') : 'no GA4 measurement ID found'}{s.adsIds.length ? ` · Google Ads: ${s.adsIds.join(', ')}` : ''}</Row>
        <Row ok={s.events.length > 0} title={`Custom events (${s.events.length})`}>
          {s.events.length ? s.events.map((e) => <span key={e} className="chip" style={{ margin: '4px 6px 0 0', maxWidth: 'none' }}>{e}</span>) : 'none'}
        </Row>
      </ul>
      {s.issues.length > 0 && (
        <div className="alert alert-warn" style={{ marginTop: 14 }}>
          {s.issues.map((i) => <div key={i}>• {i}</div>)}
        </div>
      )}
    </Card>
  );
}

// ---------- page ----------
export default function Marketing() {
  const [days, setDays] = useState(28);
  const [state, setState] = useState({ status: 'loading' });
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async (d, fresh) => {
    if (fresh) setRefreshing(true); else setState({ status: 'loading' });
    try {
      const r = await fetch(withBase(`/api/marketing?days=${d}${fresh ? '&fresh=1' : ''}`), { cache: 'no-store' });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || r.statusText);
      setState({ status: 'ok', data });
    } catch (e) {
      setState({ status: 'error', error: e.message });
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { load(days, false); }, [days, load]);

  const data = state.data;
  const cachedAt = data && [data.ga4, data.gsc].map((s) => s?.cachedAt).filter(Boolean).sort()[0];

  return (
    <>
      <div className="mk-bar">
        <div className="mk-seg" role="tablist" aria-label="Period">
          {PERIODS.map((p) => (
            <button key={p} type="button" role="tab" aria-selected={p === days} className={p === days ? 'active' : ''} onClick={() => setDays(p)}>Last {p} days</button>
          ))}
        </div>
        <div className="mk-bar-right">
          {data && <span className="muted mk-updated">{cachedAt ? `Google data from ${ago(cachedAt)} (cached)` : `Updated ${ago(data.generatedAt)}`}</span>}
          <button className={'btn' + (refreshing ? ' mk-spin' : '')} type="button" disabled={refreshing || state.status === 'loading'} onClick={() => load(days, true)}>
            <Icon name="refresh" /><span>{refreshing ? 'Refreshing…' : 'Refresh'}</span>
          </button>
        </div>
      </div>

      {state.status === 'loading' && <div className="card"><div className="empty">Loading marketing data…</div></div>}
      {state.status === 'error' && <div className="alert alert-error">Could not load marketing data: {state.error}</div>}
      {state.status === 'ok' && (
        <>
          <Setup data={data} />
          <h3 className="mk-h">Leads by source</h3>
          <Leads s={data.leads} days={days} />
          <h3 className="mk-h">Website traffic <span className="muted">Google Analytics 4</span></h3>
          <Ga4 s={data.ga4} days={days} />
          <h3 className="mk-h">Google Search <span className="muted">Search Console</span></h3>
          <Gsc s={data.gsc} days={days} />
          <h3 className="mk-h">Tracking <span className="muted">Google Tag Manager</span></h3>
          <Gtm s={data.gtm} />
        </>
      )}
    </>
  );
}

'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '@/lib/icons';
import { withBase } from '@/lib/base';

const PERIODS = [7, 28, 90];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ---------- formatting ----------
const num = (n) => Math.round(n || 0).toLocaleString('en-US');
const pct1 = (n) => `${((n || 0) * 100).toFixed(1)}%`;
const share = (v, total) => (total ? `${+((v / total) * 100).toFixed(1)}%` : '0%');
const dur = (s) => { s = Math.round(s || 0); return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, '0')}s`; };
const pos = (n) => (n || 0).toFixed(1);
const day = (ymd) => { const [, m, d] = String(ymd).split('-').map(Number); return d && m ? `${d} ${MON[m - 1]}` : ymd; };
const ago = (iso) => {
  if (!iso) return '';
  const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  return m < 1 ? 'just now' : m < 60 ? `${m} min ago` : `${Math.round(m / 60)} h ago`;
};
const cap = (s) => String(s || '').toLowerCase().replace(/^\w/, (c) => c.toUpperCase());

// Events GA4 records on its own; everything else is a website action set up in Tag Manager.
const AUTO_EVENTS = new Set(['page_view', 'session_start', 'first_visit', 'user_engagement', 'scroll', 'form_start', 'form_submit', 'click', 'file_download', 'view_search_results', 'video_start', 'video_progress', 'video_complete']);
// The actions the OSS website sends to the dataLayer / GTM.
const SITE_ACTIONS = [
  ['generate_lead', 'Contact form leads'],
  ['click_call', 'Call clicks'],
  ['click_email', 'Email clicks'],
];

/** "▲ 12.3% vs previous 28 days". lowerIsBetter flips the colour (search position). */
function Delta({ change, days, lowerIsBetter }) {
  if (change == null || !isFinite(change)) return <span className="mk-dim">no earlier data to compare</span>;
  const up = change >= 0;
  const good = lowerIsBetter ? !up : up;
  return (
    <>
      <span className={Math.abs(change) < 0.05 ? 'mk-dim' : good ? 'mk-up' : 'mk-down'}>{up ? '▲' : '▼'} {+Math.abs(change).toFixed(1)}%</span>{' '}
      <span className="mk-dim">vs previous {days} days</span>
    </>
  );
}

function Kpi({ label, value, note, change, days, lowerIsBetter }) {
  return (
    <div className="mk-k">
      <small>{label}</small>
      <div className="mk-k-val">{value}</div>
      <em>
        {note && <span className="mk-dim">{note}</span>}
        {note && days && <br />}
        {days && <Delta change={change} days={days} lowerIsBetter={lowerIsBetter} />}
      </em>
    </div>
  );
}

function Card({ title, hint, children, className = '' }) {
  return (
    <div className={'mk-card ' + className}>
      <div className="mk-card-h"><h3>{title}</h3>{hint && <span>{hint}</span>}</div>
      {children}
    </div>
  );
}

/** Ranked list: label, value, share, with a thin bar under each label. */
function List({ rows, value, label = (r) => r.label, empty = 'No data for this period.' }) {
  if (!rows?.length) return <div className="mk-empty">{empty}</div>;
  const total = rows.reduce((a, r) => a + value(r), 0);
  return (
    <ul className="mk-list">
      {rows.map((r, i) => (
        <li key={i}>
          <div className="mk-list-row">
            <span className="mk-list-l" title={label(r)}>{label(r)}</span>
            <b>{num(value(r))}</b>
            <small>{share(value(r), total)}</small>
          </div>
          <i style={{ width: total ? `${(value(r) / total) * 100}%` : 0 }} />
        </li>
      ))}
    </ul>
  );
}

/** Table showing the first `limit` rows, with "Show all N". cols: [header, fn(row), 'r' for numbers, bold?] */
function Table({ rows, cols, limit = 8, empty = 'No data for this period.' }) {
  const [all, setAll] = useState(false);
  if (!rows?.length) return <div className="mk-empty">{empty}</div>;
  const shown = all ? rows : rows.slice(0, limit);
  return (
    <>
      <div className="mk-tw">
        <table className="mk-t">
          <thead><tr>{cols.map(([h, , a], i) => <th key={i} className={a === 'r' ? 'r' : ''}>{h}</th>)}</tr></thead>
          <tbody>
            {shown.map((r, i) => (
              <tr key={i}>
                {cols.map(([, f, a, bold], j) => <td key={j} className={(a === 'r' ? 'r' : 'l') + (bold ? ' b' : '')}>{f(r)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length > limit && (
        <button type="button" className="mk-more" onClick={() => setAll(!all)}>{all ? 'Show less' : `Show all ${rows.length}`}</button>
      )}
    </>
  );
}

/** Daily bar chart with a hover/tap tooltip. */
function Bars({ rows, value, unit }) {
  const [hover, setHover] = useState(null);
  if (!rows?.length) return <div className="mk-empty">No data for this period.</div>;
  const vals = rows.map(value);
  const max = Math.max(1, ...vals);
  const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
  const step = Math.max(1, Math.ceil(rows.length / 8));
  const h = hover ?? rows.length - 1;
  return (
    <div className="mk-bars">
      <div className="mk-bars-top">
        <b>{num(vals[h])}</b> <span>{unit}{vals[h] === 1 ? '' : 's'} · {day(rows[h].date)}{hover == null ? ' (latest day)' : ''}</span>
      </div>
      <div className="mk-bars-plot" onMouseLeave={() => setHover(null)}>
        {rows.map((r, i) => (
          <button key={i} type="button" className={'mk-col' + (i === hover ? ' on' : '')} onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)} onClick={() => setHover(i)}
            aria-label={`${day(r.date)}: ${vals[i]} ${unit}s`}>
            <span style={{ height: `${Math.max(2, (vals[i] / max) * 100)}%` }} />
          </button>
        ))}
      </div>
      <div className="mk-bars-x">
        {rows.map((r, i) => <span key={i}>{i % step === 0 || i === rows.length - 1 ? day(r.date) : ''}</span>)}
      </div>
      <div className="mk-bars-foot">Daily average <b>{avg >= 10 ? num(avg) : avg.toFixed(1)}</b></div>
    </div>
  );
}

function Status({ s }) {
  if (s?.status === 'ok') return <span className="mk-st ok">Connected</span>;
  if (s?.status === 'setup') return <span className="mk-st warn">Setup needed</span>;
  return <span className="mk-st err">Error</span>;
}

function Section({ id, icon, title, sub, s, children }) {
  return (
    <section className="mk-sec" id={id}>
      <div className="mk-sec-h">
        <span className="mk-sec-ic"><Icon name={icon} /></span>
        <div className="mk-sec-t"><h2>{title}</h2>{sub && <span>{sub}</span>}</div>
        <Status s={s} />
      </div>
      <div className="mk-sec-b">{children}</div>
    </section>
  );
}

function Problem({ s, name }) {
  if (s?.status === 'error') {
    return <div className="mk-note err"><b>{name} could not be loaded.</b> {s.error}{s.hint && <><br />{s.hint}</>}</div>;
  }
  if (s?.status === 'setup') {
    return <div className="mk-note warn"><b>{name} is not connected yet.</b> Missing: {s.missing.join(', ')}. See the setup steps above.</div>;
  }
  return null;
}

// ---------- setup checklist ----------
function Setup({ data }) {
  const { ga4, gsc, serviceAccountEmail } = data;
  if (![ga4, gsc].some((s) => s?.status === 'setup')) return null;
  const miss = (s, k) => s?.status === 'setup' && s.missing.some((m) => m.startsWith(k));
  const keyBad = [ga4, gsc].some((s) => s?.status === 'setup' && s.missing.some((m) => m.includes('GOOGLE_SA_KEY')));
  const items = [
    [!keyBad, <>Create a Google Cloud service account, enable the <b>Google Analytics Data API</b> and <b>Search Console API</b>, download its JSON key and set it (base64-encoded) as <code>GOOGLE_SA_KEY</code>.</>],
    [!miss(ga4, 'GA4_PROPERTY_ID'), <>In GA4 → Admin → Property access management, add {serviceAccountEmail ? <code>{serviceAccountEmail}</code> : 'the service-account email'} as <b>Viewer</b>, then set <code>GA4_PROPERTY_ID</code> to the numeric property ID.</>],
    [!miss(gsc, 'GSC_SITE'), <>In Search Console, add the same email as a user and set <code>GSC_SITE</code> to <code>sc-domain:openyardstorage.com</code>.</>],
  ];
  return (
    <div className="mk-setup">
      <b>Finish connecting Google</b>
      <p>Add these environment variables to the dashboard&apos;s Vercel project, then redeploy.</p>
      <ul className="mk-check">
        {items.map(([done, text], i) => (
          <li key={i} className={done ? 'done' : ''}><span className="mk-tick">{done ? <Icon name="check" /> : i + 1}</span><span>{text}</span></li>
        ))}
      </ul>
    </div>
  );
}

// ---------- sections ----------
function Leads({ s, ga4, days }) {
  const ok = s?.status === 'ok';
  const gaLeads = ga4?.status === 'ok' ? ga4.events.find((e) => e.label === 'generate_lead')?.eventCount ?? 0 : null;
  return (
    <Section id="mk-leads" icon="inbox" title="Leads by source" sub={`Contact-form leads saved in this dashboard · last ${days} days`} s={s}>
      <Problem s={s} name="Leads by source" />
      {ok && (
        <>
          <div className="mk-kpis">
            <Kpi label="Leads" value={num(s.total)} change={s.change} days={days} />
            <Kpi label="From Google Ads" value={num(s.channels.find((c) => c.label === 'Paid')?.leads)} note="gclid or cpc tag" />
            <Kpi label="From Google search" value={num(s.channels.find((c) => c.label === 'Organic')?.leads)} note="organic search" />
            <Kpi label="GA4 lead events" value={gaLeads == null ? '—' : num(gaLeads)} note="generate_lead in GA4" />
          </div>
          <div className="mk-row2">
            <Card title="Leads per day" hint="hover or tap a bar">
              <Bars rows={s.daily} value={(r) => r.leads} unit="lead" />
            </Card>
            <Card title="Leads by channel" hint="leads">
              <List rows={s.channels.filter((c) => c.leads > 0)} value={(r) => r.leads} empty="No leads in this period." />
              {s.channels.some((c) => c.label === 'Not tracked' && c.leads > 0) && (
                <p className="mk-foot">&quot;Not tracked&quot; = sent before source tracking was added to the website.</p>
              )}
            </Card>
          </div>
          {s.campaigns.length > 0 && (
            <Card title="Lead campaigns" hint="utm_campaign">
              <List rows={s.campaigns} value={(r) => r.leads} />
            </Card>
          )}
        </>
      )}
    </Section>
  );
}

function Ga4({ s, days }) {
  const ok = s?.status === 'ok';
  const t = ok && s.totals;
  const actions = ok ? s.events.filter((e) => !AUTO_EVENTS.has(e.label)) : [];
  // Older cached results have no range; fall back to the first and last day in the chart.
  const range = ok && (s.range || (s.daily?.length ? { startDate: s.daily[0].date, endDate: s.daily[s.daily.length - 1].date } : null));
  return (
    <Section id="mk-ga4" icon="chart" title="Google Analytics 4" s={s}
      sub={ok ? `Website visitors and what they do · Property ${s.propertyId}${range ? ` · ${day(range.startDate)} → ${day(range.endDate)}` : ''}` : 'Website visitors and what they do'}>
      <Problem s={s} name="Google Analytics" />
      {ok && (
        <>
          <div className="mk-kpis">
            <Kpi label="Visitors" value={num(t.activeUsers.value)} note={`${num(t.newUsers.value)} new`} change={t.activeUsers.change} days={days} />
            <Kpi label="Sessions" value={num(t.sessions.value)} note={`${pct1(t.engagementRate.value)} engaged`} change={t.sessions.change} days={days} />
            <Kpi label="Page views" value={num(t.screenPageViews.value)} note={`${t.sessions.value ? (t.screenPageViews.value / t.sessions.value).toFixed(1) : 0} per session`} change={t.screenPageViews.change} days={days} />
            <Kpi label="Avg. time on site" value={dur(t.averageSessionDuration.value)} note={`${num(t.keyEvents.value)} key events`} change={t.averageSessionDuration.change} days={days} />
          </div>
          <div className="mk-row2">
            <Card title="Sessions per day" hint="hover or tap a bar">
              <Bars rows={s.daily} value={(r) => r.sessions} unit="session" />
            </Card>
            <Card title="Where visitors come from" hint="sessions">
              <List rows={s.channels} value={(r) => r.sessions} />
            </Card>
          </div>
          <div className="mk-3">
            <Card title="Devices" hint="sessions"><List rows={s.devices} value={(r) => r.sessions} label={(r) => cap(r.label)} /></Card>
            <Card title="Top cities" hint="visitors"><List rows={s.cities} value={(r) => r.activeUsers} /></Card>
            <Card title="Top sources" hint="sessions"><List rows={s.sources} value={(r) => r.sessions} /></Card>
          </div>
          <div className="mk-row2 eq">
            <Card title="Most viewed pages">
              <Table rows={s.pages} cols={[['Page', (r) => r.label], ['Views', (r) => num(r.screenPageViews), 'r', true], ['Visitors', (r) => num(r.activeUsers), 'r']]} />
            </Card>
            <Card title="Landing pages" hint="first page of a visit">
              <Table rows={s.landingPages} cols={[['Page', (r) => r.label], ['Sessions', (r) => num(r.sessions), 'r', true], ['Engaged', (r) => pct1(r.engagementRate), 'r']]} />
            </Card>
          </div>
          <div className="mk-row2 eq">
            <Card title="Clicks & actions tracked" hint="events">
              <List rows={actions} value={(r) => r.eventCount} empty="No Tag Manager events in this period." />
            </Card>
            <Card title="Website actions" hint="sent by the site to GTM">
              <ul className="mk-kv">
                {SITE_ACTIONS.map(([ev, name]) => (
                  <li key={ev}><span>{name}<code>{ev}</code></span><b>{num(s.events.find((e) => e.label === ev)?.eventCount)}</b></li>
                ))}
              </ul>
              <p className="mk-foot">These event names were introduced with the dashboard, so counts start from that date.</p>
            </Card>
          </div>
          <Card title="All GA4 events" hint={`${s.events.length} events recorded`}>
            <Table rows={s.events} limit={6} cols={[['Event', (r) => <code>{r.label}</code>], ['Count', (r) => num(r.eventCount), 'r', true], ['Users', (r) => num(r.totalUsers), 'r']]} />
          </Card>
        </>
      )}
    </Section>
  );
}

function Gsc({ s, days }) {
  const ok = s?.status === 'ok';
  const t = ok && s.totals;
  const qcols = [['Search term', (r) => r.key], ['Clicks', (r) => num(r.clicks), 'r', true], ['Impr.', (r) => num(r.impressions), 'r'], ['CTR', (r) => pct1(r.ctr), 'r'], ['Position', (r) => pos(r.position), 'r']];
  return (
    <Section id="mk-gsc" icon="search" title="Google Search Console" s={s}
      sub={ok ? `How the site shows up in Google search · ${s.site} · ${day(s.range.startDate)} → ${day(s.range.endDate)}` : 'How the site shows up in Google search'}>
      <Problem s={s} name="Search Console" />
      {ok && (
        <>
          <div className="mk-note">Google adds new Search Console data with a 2–3 day delay, so this period ends on {day(s.range.endDate)}.</div>
          <div className="mk-kpis">
            <Kpi label="Clicks from Google" value={num(t.clicks.value)} change={t.clicks.change} days={days} />
            <Kpi label="Impressions" value={num(t.impressions.value)} note="times shown in Google" change={t.impressions.change} days={days} />
            <Kpi label="Click-through rate" value={pct1(t.ctr.value)} note="clicks ÷ impressions" change={t.ctr.change} days={days} />
            <Kpi label="Average position" value={pos(t.position.value)} note="lower is better" change={t.position.change} days={days} lowerIsBetter />
          </div>
          <div className="mk-row2">
            <Card title="Clicks from Google per day" hint="hover or tap a bar">
              <Bars rows={s.daily} value={(r) => r.clicks} unit="click" />
            </Card>
            <Card title="Devices" hint="clicks">
              <List rows={s.devices} value={(r) => r.clicks} label={(r) => cap(r.key)} />
            </Card>
          </div>
          <Card title="Top search terms" hint="what people typed in Google">
            <Table rows={s.queries} limit={10} cols={qcols} />
          </Card>
          <div className="mk-row2 eq">
            <Card title="Opportunities" hint="on page 1–2, 10+ impressions">
              <Table rows={s.opportunities} cols={qcols} empty="No search terms at position 4–20 with 10+ impressions." />
              <p className="mk-foot">Improving these pages can lift them into the top 3, where most clicks happen.</p>
            </Card>
            <Card title="Top pages in Google">
              <Table rows={s.pages} cols={[['Page', (r) => r.key.replace(/^https?:\/\/[^/]+/, '') || '/'], ['Clicks', (r) => num(r.clicks), 'r', true], ['Impr.', (r) => num(r.impressions), 'r'], ['Position', (r) => pos(r.position), 'r']]} />
            </Card>
          </div>
        </>
      )}
    </Section>
  );
}

function Gtm({ s }) {
  const ok = s?.status === 'ok';
  const Row = ({ label, children }) => <li><span>{label}</span>{children}</li>;
  const known = new Set(SITE_ACTIONS.map(([e]) => e));
  const other = ok ? s.events.filter((e) => !known.has(e)) : [];
  return (
    <Section id="mk-gtm" icon="tag" title="Google Tag Manager" s={s} sub={`Tracking setup health check · ${s?.gtmId || ''}`}>
      <Problem s={s} name="Tag Manager check" />
      {ok && (
        <>
          <div className="mk-row2">
            <Card title="Container health" hint={s.cachedAt ? `checked ${ago(s.cachedAt)}` : 'checked just now'}>
              <ul className="mk-kv">
                <Row label="Container"><b className="mk-brand">{s.gtmId}</b></Row>
                <Row label="Published"><b className={s.published ? 'mk-up' : 'mk-down'}>{s.published ? '✓ Live' : '✗ Not published'}</b></Row>
                <Row label="On the live home page"><b className={s.onSite ? 'mk-up' : 'mk-down'}>{s.onSite ? '✓ Installed' : '✗ Not found'}</b></Row>
                <Row label="Sends to GA4"><code>{s.measurementIds.join(', ') || 'none'}</code></Row>
                {s.adsIds.length > 0 && <Row label="Google Ads"><code>{s.adsIds.join(', ')}</code></Row>}
              </ul>
            </Card>
            <Card title="Events the website sends" hint="dataLayer → GTM">
              <ul className="mk-kv">
                {SITE_ACTIONS.map(([ev, name]) => {
                  const has = s.events.includes(ev);
                  return <li key={ev}><span>{name}<code>{ev}</code></span><b className={has ? 'mk-brand' : 'mk-down'}>{has ? '✓ GA4 tag' : '✗ No tag'}</b></li>;
                })}
              </ul>
              {other.length > 0 && (
                <>
                  <div className="mk-sub">Other GA4 event tags in the container</div>
                  <ul className="mk-kv">{other.map((e) => <li key={e}><span>{e}</span><b className="mk-brand">✓</b></li>)}</ul>
                </>
              )}
            </Card>
          </div>
          {s.issues.length > 0 && <div className="mk-note warn">{s.issues.map((i) => <div key={i}>• {i}</div>)}</div>}
        </>
      )}
    </Section>
  );
}

// ---------- page ----------
export default function Marketing() {
  const [days, setDays] = useState(28);
  const [state, setState] = useState({ status: 'loading' });
  const [refreshing, setRefreshing] = useState(false);
  const top = useRef(null);

  const load = useCallback(async (d, fresh) => {
    if (fresh) setRefreshing(true); else setState((s) => (s.data ? { ...s, status: 'reloading' } : { status: 'loading' }));
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
  const jump = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="mk" ref={top}>
      <div className="mk-bar">
        <div className="mk-tabs" role="tablist" aria-label="Period">
          {PERIODS.map((p) => (
            <button key={p} type="button" role="tab" aria-selected={p === days} className={p === days ? 'on' : ''} onClick={() => setDays(p)}>Last {p} days</button>
          ))}
        </div>
        <div className="mk-bar-r">
          {data && <span className="mk-at">{cachedAt ? `Updated ${ago(cachedAt)}` : `Updated ${ago(data.generatedAt)}`}</span>}
          <button className={'btn btn-sm' + (refreshing ? ' mk-spin' : '')} type="button" disabled={refreshing || state.status !== 'ok'} onClick={() => load(days, true)}>
            <Icon name="refresh" /><span>{refreshing ? 'Refreshing…' : 'Refresh'}</span>
          </button>
        </div>
      </div>

      {state.status === 'loading' && <div className="mk-card"><div className="mk-empty">Loading marketing data…</div></div>}
      {state.status === 'error' && <div className="mk-note err">Could not load marketing data: {state.error}</div>}
      {data && state.status !== 'error' && (
        <div className={state.status === 'reloading' ? 'mk-fade' : ''}>
          <nav className="mk-jump" aria-label="Jump to section">
            <button type="button" onClick={() => jump('mk-leads')}><Icon name="inbox" />Leads</button>
            <button type="button" onClick={() => jump('mk-ga4')}><Icon name="chart" />Analytics</button>
            <button type="button" onClick={() => jump('mk-gsc')}><Icon name="search" />Search Console</button>
            <button type="button" onClick={() => jump('mk-gtm')}><Icon name="tag" />Tag Manager</button>
          </nav>
          <Setup data={data} />
          <Leads s={data.leads} ga4={data.ga4} days={days} />
          <Ga4 s={data.ga4} days={days} />
          <Gsc s={data.gsc} days={days} />
          <Gtm s={data.gtm} />
        </div>
      )}
    </div>
  );
}

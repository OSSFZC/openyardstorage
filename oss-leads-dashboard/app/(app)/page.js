import Link from 'next/link';
import { query } from '@/lib/db';
import { TZ } from '@/lib/config';
import { Icon } from '@/lib/icons';
import { fmtYmd, initials, parts, timeAgo, todayYmd } from '@/lib/time';
import Chart from './Chart';

export const metadata = { title: 'Dashboard' };
export const dynamic = 'force-dynamic';

const since = (day) => `received_at >= ('${day}'::date)::timestamp AT TIME ZONE $1`;
const count = async (where, extra = []) => (await query(`SELECT count(*)::int AS c FROM leads WHERE ${where}`, [TZ, ...extra]))[0].c;
const oneLine = (s, n) => { const t = String(s || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1) + '…' : t; };

export default async function Dashboard() {
  const today = todayYmd();
  const p = parts(Date.now());
  const pad = (n) => String(n).padStart(2, '0');
  const monthStart = `${p.y}-${pad(p.m)}-01`;
  const prev = new Date(Date.UTC(p.y, p.m - 2, 1));
  const prevStart = prev.toISOString().slice(0, 10);
  const prevEnd = new Date(Math.min(Date.UTC(p.y, p.m - 2, p.d + 1), Date.UTC(p.y, p.m - 1, 1))).toISOString().slice(0, 10);
  const from30 = todayYmd(-29);

  const [total, todayN, week, thisMonth, lastMonthToDate, daily, recent] = await Promise.all([
    query('SELECT count(*)::int AS c FROM leads').then((r) => r[0].c),
    count(since(today)),
    count(since(todayYmd(-6))),
    count(since(monthStart)),
    count(`${since(prevStart)} AND received_at < ('${prevEnd}'::date)::timestamp AT TIME ZONE $1`),
    query(`SELECT to_char((received_at AT TIME ZONE $1)::date, 'YYYY-MM-DD') AS d, count(*)::int AS c
           FROM leads WHERE ${since(from30)} GROUP BY 1`, [TZ]),
    query('SELECT id, name, email, message, received_at FROM leads ORDER BY received_at DESC LIMIT 8'),
  ]);

  const series = {};
  for (let i = 29; i >= 0; i--) series[todayYmd(-i)] = 0;
  for (const r of daily) if (r.d in series) series[r.d] = r.c;
  const sum30 = Object.values(series).reduce((a, b) => a + b, 0);
  const change = lastMonthToDate ? Math.round(((thisMonth - lastMonthToDate) / lastMonthToDate) * 100) : null;

  return (
    <>
      <section className="kpis">
        <div className="kpi">
          <div className="kpi-top"><span>Total leads</span><span className="kpi-ic ic-indigo"><Icon name="inbox" /></span></div>
          <div className="kpi-val">{total.toLocaleString('en-US')}</div>
          <div className="kpi-sub">All time</div>
        </div>
        <div className="kpi">
          <div className="kpi-top"><span>This month</span><span className="kpi-ic ic-teal"><Icon name="calendar" /></span></div>
          <div className="kpi-val">{thisMonth.toLocaleString('en-US')}</div>
          <div className="kpi-sub">
            {change !== null
              ? <><span className={'delta ' + (change >= 0 ? 'up' : 'down')}>{change >= 0 ? '▲' : '▼'} {Math.abs(change)}%</span> vs same period last month</>
              : <>Since {fmtYmd(monthStart).slice(0, 6)}</>}
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-top"><span>Last 7 days</span><span className="kpi-ic ic-rose"><Icon name="bell" /></span></div>
          <div className="kpi-val">{week.toLocaleString('en-US')}</div>
          <div className="kpi-sub"><Link href={`/leads?from=${todayYmd(-6)}`}>View this week&apos;s leads →</Link></div>
        </div>
        <div className="kpi">
          <div className="kpi-top"><span>Today</span><span className="kpi-ic ic-amber"><Icon name="trend" /></span></div>
          <div className="kpi-val">{todayN.toLocaleString('en-US')}</div>
          <div className="kpi-sub"><Link href={`/leads?from=${today}`}>View today&apos;s leads →</Link></div>
        </div>
      </section>

      <section className="card">
        <div className="card-head">
          <div><h2>Leads over time</h2><p className="muted">Last 30 days · {sum30} leads</p></div>
        </div>
        <Chart series={series} />
      </section>

      <section className="card">
        <div className="card-head">
          <div><h2>Latest leads</h2><p className="muted">Most recent contact-form submissions</p></div>
          <Link className="link" href="/leads">View all</Link>
        </div>
        {recent.length === 0 ? (
          <div className="empty">
            <Icon name="inbox" />
            <p>No leads yet. Every contact-form submission from the website shows up here as soon as it is sent.</p>
          </div>
        ) : (
          <div className="recent">
            {recent.map((l) => (
              <button key={l.id} className="recent-row" data-lead={l.id} type="button">
                <span className="avatar" style={{ background: '#dc2626' }}>{initials(l.name || l.email)}</span>
                <span className="recent-main">
                  <b>{l.name || l.email || 'Unknown visitor'}</b>
                  <small>{oneLine(l.message, 110)}</small>
                </span>
                <span className="recent-side"><small>{timeAgo(l.received_at)}</small></span>
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

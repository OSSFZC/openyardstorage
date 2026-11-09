import Link from 'next/link';
import { query } from '@/lib/db';
import { leadFilters, pickFilters } from '@/lib/leads';
import { Icon } from '@/lib/icons';
import { fmtDate, fmtDateTime, fmtTime, initials } from '@/lib/time';
import { withBase } from '@/lib/base';

export const metadata = { title: 'All Leads' };
export const dynamic = 'force-dynamic';

const PER_PAGE = 25;
const oneLine = (s, n) => { const t = String(s || '').replace(/\s+/g, ' ').trim(); return t.length > n ? t.slice(0, n - 1) + '…' : t; };

export default async function LeadsPage({ searchParams }) {
  const sp = await searchParams;
  const filters = pickFilters(sp);
  const filtered = Object.keys(filters).length > 0;
  const { where, params } = leadFilters(filters);

  const [{ c: count }] = await query(`SELECT count(*)::int AS c FROM leads WHERE ${where}`, params);
  const [{ c: total }] = await query('SELECT count(*)::int AS c FROM leads');
  const pages = Math.max(1, Math.ceil(count / PER_PAGE));
  const page = Math.min(Math.max(1, parseInt(sp.page, 10) || 1), pages);
  const rows = await query(
    `SELECT id, name, email, phone, company, message, received_at FROM leads WHERE ${where}
     ORDER BY received_at DESC LIMIT ${PER_PAGE} OFFSET ${(page - 1) * PER_PAGE}`, params);

  const qs = (over) => {
    const u = new URLSearchParams();
    for (const [k, v] of Object.entries({ ...filters, ...over })) if (v !== '' && v != null) u.set(k, v);
    const s = u.toString();
    return s ? `?${s}` : '';
  };

  return (
    <div className="card">
      <form className="filters" method="get" action={withBase('/leads')}>
        <div className="field grow">
          <Icon name="search" />
          <input name="q" defaultValue={filters.q || ''} placeholder="Name, email, phone, message…" />
        </div>
        <label className="date"><span>From</span><input type="date" name="from" defaultValue={filters.from || ''} data-autosubmit /></label>
        <label className="date"><span>To</span><input type="date" name="to" defaultValue={filters.to || ''} data-autosubmit /></label>
        <button className="btn" type="submit">Apply</button>
        {filtered && <Link className="btn btn-ghost" href="/leads">Clear</Link>}
      </form>

      <div className="table-bar">
        <div className="muted"><b>{count.toLocaleString('en-US')}</b> lead{count === 1 ? '' : 's'}{filtered ? ' match your filters' : ''}</div>
        <div className="table-actions">
          {filtered && (
            <a className="btn" href={withBase(`/api/export${qs({})}`)}><Icon name="download" /><span>Export filtered ({count})</span></a>
          )}
          <a className="btn btn-primary" href={withBase('/api/export')}><Icon name="download" /><span>Download Excel report ({total.toLocaleString('en-US')})</span></a>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="empty">
          <Icon name="inbox" />
          <p>{filtered ? 'No leads match these filters.' : 'No leads yet. Contact-form submissions from the website appear here as soon as they are sent.'}</p>
        </div>
      ) : (
        <>
          <div className="table-wrap">
            <table className="table">
              <thead><tr><th>Lead</th><th>Contact</th><th className="hide-md">Message</th><th>Received</th></tr></thead>
              <tbody>
                {rows.map((l) => (
                  <tr key={l.id} data-lead={l.id}>
                    <td>
                      <div className="who">
                        <span className="avatar sm" style={{ background: '#dc2626' }}>{initials(l.name || l.email)}</span>
                        <div><b>{l.name || 'Unknown'}</b>{l.company && <small>{l.company}</small>}</div>
                      </div>
                    </td>
                    <td className="contact">
                      {l.email && <a href={`mailto:${l.email}`} data-stop>{l.email}</a>}
                      {l.phone && <small><a href={`tel:${l.phone.replace(/[^\d+]/g, '')}`} data-stop>{l.phone}</a></small>}
                    </td>
                    <td className="hide-md msg">{oneLine(l.message, 140)}</td>
                    <td className="nowrap">
                      <span title={fmtDateTime(l.received_at)}>{fmtDate(l.received_at)}</span>
                      <small>{fmtTime(l.received_at)}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pages > 1 && (
            <div className="pager">
              <span className="muted">Page {page} of {pages}</span>
              <div>
                {page > 1 && <Link className="btn" href={`/leads${qs({ page: page - 1 })}`}>← Prev</Link>}
                {page < pages && <Link className="btn" href={`/leads${qs({ page: page + 1 })}`}>Next →</Link>}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

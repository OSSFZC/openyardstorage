'use client';
import { useEffect, useState } from 'react';
import { Icon } from '@/lib/icons';
import { withBase } from '@/lib/base';

export default function LeadDrawer({ id, onClose }) {
  const [state, setState] = useState({ status: 'idle' });

  useEffect(() => {
    if (!id) return;
    let live = true;
    setState({ status: 'loading' });
    fetch(withBase(`/api/leads/${encodeURIComponent(id)}`))
      .then(async (r) => {
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || r.statusText);
        if (live) setState({ status: 'ok', lead: data });
      })
      .catch((e) => live && setState({ status: 'error', error: e.message }));
    return () => { live = false; };
  }, [id]);

  const l = state.lead;
  const tel = l?.phone ? l.phone.replace(/[^\d+]/g, '') : '';

  return (
    <div className={'drawer' + (id ? ' open' : '')} aria-hidden={!id}>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel" role="dialog" aria-modal="true">
        {state.status === 'loading' && <div className="drawer-loading">Loading…</div>}
        {state.status === 'error' && <div className="drawer-loading">Could not load lead: {state.error}</div>}
        {state.status === 'ok' && l && (
          <>
            <div className="drawer-head">
              <div className="who">
                <span className="avatar" style={{ background: '#dc2626' }}>{l.initials}</span>
                <div>
                  <h3>{l.name || 'Unknown visitor'}</h3>
                  <small>{l.receivedLong}</small>
                </div>
              </div>
              <button className="icon-btn" type="button" aria-label="Close" onClick={onClose}><Icon name="x" /></button>
            </div>
            <div className="drawer-content">
              <div className="quick">
                {l.email && (
                  <a className="btn" href={`mailto:${l.email}?subject=${encodeURIComponent('Re: ' + (l.subject || 'Your enquiry'))}`}>
                    <Icon name="mail" /><span>Reply</span>
                  </a>
                )}
                {tel && (
                  <>
                    <a className="btn" href={`tel:${tel}`}><Icon name="phone" /><span>Call</span></a>
                    <a className="btn" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${tel.replace(/^\+/, '')}`}><span>WhatsApp</span></a>
                  </>
                )}
              </div>
              <dl className="facts">
                <div><dt>Email</dt><dd>{l.email ? <a href={`mailto:${l.email}`}>{l.email}</a> : '—'}</dd></div>
                <div><dt>Phone</dt><dd>{l.phone || '—'}</dd></div>
                {l.company && <div><dt>Company</dt><dd>{l.company}</dd></div>}
                {l.service && <div><dt>Service</dt><dd>{l.service}</dd></div>}
                <div><dt>Source</dt><dd>Website contact form</dd></div>
              </dl>
              <h4>Message</h4>
              <div className="message" style={{ whiteSpace: 'pre-wrap' }}>{l.message || '—'}</div>
              {l.fields?.length > 0 && (
                <details className="fields">
                  <summary>All submitted fields ({l.fields.length})</summary>
                  <table><tbody>
                    {l.fields.map(([k, v], i) => (
                      <tr key={i}><th>{k}</th><td style={{ whiteSpace: 'pre-wrap' }}>{v}</td></tr>
                    ))}
                  </tbody></table>
                </details>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

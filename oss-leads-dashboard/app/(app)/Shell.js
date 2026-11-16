'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '@/lib/icons';
import LeadDrawer from './LeadDrawer';
import { withBase } from '@/lib/base';

const NAV = [
  ['/', 'Dashboard', 'grid'],
  ['/leads', 'All Leads', 'inbox'],
  ['/marketing', 'Marketing', 'chart'],
  ['/settings', 'Settings', 'settings'],
];

export default function Shell({ client, children }) {
  const path = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadId, setLeadId] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef();
  const title = (NAV.find(([href]) => (href === '/' ? path === '/' : path.startsWith(href))) || NAV[0])[1];

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  // Permanently delete a lead after confirming; used by the table rows and the lead panel.
  const deleteLead = useCallback(async (id, name) => {
    if (!window.confirm(`Delete the lead from ${name || 'this visitor'}?\n\nThis permanently removes it from the dashboard and can't be undone.`)) return false;
    try {
      const r = await fetch(withBase(`/api/leads/${encodeURIComponent(id)}`), { method: 'DELETE' });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || r.statusText);
      setLeadId((cur) => (String(cur) === String(id) ? null : cur));
      showToast('Lead deleted');
      router.refresh();
      return true;
    } catch (e) {
      showToast(`Could not delete: ${e.message}`);
      return false;
    }
  }, [router, showToast]);

  useEffect(() => { setMenuOpen(false); }, [path]);
  useEffect(() => { document.title = `${title} · ${client} Leads`; }, [title, client]);

  // Page-wide behaviours for server-rendered markup: open a lead, copy boxes, auto-submit filters.
  useEffect(() => {
    const onClick = (ev) => {
      const del = ev.target.closest('[data-delete]');
      if (del) { deleteLead(del.dataset.delete, del.dataset.name); return; }
      if (ev.target.closest('[data-stop]')) return;
      const row = ev.target.closest('[data-lead]');
      if (row) { setLeadId(row.dataset.lead); return; }
      const copy = ev.target.closest('[data-copy]');
      if (copy) navigator.clipboard?.writeText(copy.textContent.trim()).then(() => showToast('Copied to clipboard'));
    };
    const onChange = (ev) => { if (ev.target.matches('[data-autosubmit]')) ev.target.form?.requestSubmit(); };
    const onKey = (ev) => { if (ev.key === 'Escape') setLeadId(null); };
    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('change', onChange);
      document.removeEventListener('keydown', onKey);
    };
  }, [showToast, deleteLead]);

  return (
    <>
      <div className="app">
        <aside className={'sidebar' + (menuOpen ? ' open' : '')}>
          <Link className="brand" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src={withBase('/oss-logo.png')} alt={client} />
            <span className="brand-sub">Lead dashboard</span>
          </Link>
          <nav>
            {NAV.map(([href, label, ic]) => (
              <Link key={href} href={href} className={label === title ? 'active' : ''}>
                <Icon name={ic} /><span>{label}</span>
              </Link>
            ))}
          </nav>
          <a className="logout" href={withBase('/logout')}><Icon name="logout" /><span>Sign out</span></a>
        </aside>
        <div className="sidebar-backdrop" onClick={() => setMenuOpen(false)} />
        <main className="main">
          <header className="topbar">
            <button className="icon-btn menu-btn" type="button" aria-label="Menu" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
            <h1>{title}</h1>
          </header>
          <div className="content">{children}</div>
        </main>
      </div>
      <LeadDrawer id={leadId} onClose={() => setLeadId(null)} onDelete={deleteLead} />
      <div className={'toast' + (toast ? ' show' : '')}>{toast}</div>
    </>
  );
}

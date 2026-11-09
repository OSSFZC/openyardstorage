import { headers } from 'next/headers';
import { query } from '@/lib/db';
import { CLIENT_NAME, WEBHOOK_KEY } from '@/lib/config';
import { fmtDateTime } from '@/lib/time';
import { BASE_PATH } from '@/lib/base';

export const metadata = { title: 'Settings' };
export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const h = await headers();
  const host = h.get('x-forwarded-host') || h.get('host') || 'localhost:3001';
  const proto = h.get('x-forwarded-proto') || (host.startsWith('localhost') || host.startsWith('127.') ? 'http' : 'https');
  const hookUrl = `${proto}://${host}${BASE_PATH}/api/lead?key=${WEBHOOK_KEY || 'SET_WEBHOOK_KEY'}`;
  const [{ last }] = await query('SELECT max(received_at) AS last FROM leads');

  return (
    <div className="settings-grid">
      <div className="card guide">
        <h2>How leads arrive</h2>
        <p className="muted">Every time someone submits the contact form on the {CLIENT_NAME} website, the site saves that submission here instantly. No inbox is read.</p>
        <p><b>Last lead received:</b> {last ? fmtDateTime(last) : 'none yet'}</p>
      </div>

      <div className="card">
        <h2>Website connection</h2>
        <p className="muted">The website sends each submission to this address. Set it as <code>LEADHUB_URL</code> in the website&apos;s Vercel project (Settings → Environment Variables).</p>
        <pre className="code" data-copy>{hookUrl}</pre>
        <p className="hint">Click the box to copy.</p>
      </div>

      <div className="card">
        <h2>Login</h2>
        <p className="muted">This dashboard has one login and no sign-up. The username and password are the <code>ADMIN_USERNAME</code> and <code>ADMIN_PASSWORD</code> environment variables of this Vercel project.</p>
        <p className="hint">To change them, edit those variables in Vercel and redeploy. Everyone signed in is then signed out.</p>
      </div>
    </div>
  );
}

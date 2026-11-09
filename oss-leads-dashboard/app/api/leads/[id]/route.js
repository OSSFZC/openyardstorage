import { one } from '@/lib/db';
import { parseFields } from '@/lib/leads';
import { isSignedIn } from '@/lib/session';
import { fmtLong, initials } from '@/lib/time';

export const dynamic = 'force-dynamic';

// Read-only lead details for the side panel.
export async function GET(_req, { params }) {
  if (!(await isSignedIn())) return Response.json({ error: 'Not signed in' }, { status: 401 });
  const id = Number((await params).id);
  if (!Number.isInteger(id) || id < 1) return Response.json({ error: 'Lead not found' }, { status: 404 });

  const l = await one('SELECT * FROM leads WHERE id = $1', [id]);
  if (!l) return Response.json({ error: 'Lead not found' }, { status: 404 });

  return Response.json({
    id: l.id, name: l.name, email: l.email, phone: l.phone, company: l.company, service: l.service,
    subject: l.subject, message: l.message, fields: parseFields(l.fields),
    initials: initials(l.name || l.email), receivedLong: fmtLong(l.received_at),
  });
}

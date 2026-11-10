/**
 * Webhook the website calls for every contact-form submission.
 *   POST /api/lead?key=WEBHOOK_KEY   (JSON or form data)
 */
import { timingSafeEqual } from 'node:crypto';
import { saveLead, splitSource, toFields } from '@/lib/leads';
import { WEBHOOK_KEY } from '@/lib/config';

export const dynamic = 'force-dynamic';

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, X-Leadhub-Key' };
const json = (data, status = 200) => Response.json(data, { status, headers: CORS });

function keyOk(given) {
  if (!WEBHOOK_KEY || WEBHOOK_KEY.length < 16) return false;
  const a = Buffer.from(String(given || '')), b = Buffer.from(WEBHOOK_KEY);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}

export function GET() {
  return json({ ok: false, error: 'POST only' }, 405);
}

export async function POST(req) {
  const url = new URL(req.url);
  if (!keyOk(url.searchParams.get('key') || req.headers.get('x-leadhub-key'))) {
    return json({ ok: false, error: 'Invalid key' }, 403);
  }

  let data = {};
  const type = req.headers.get('content-type') || '';
  try {
    if (type.includes('application/json')) data = await req.json();
    else if (type.includes('form')) data = Object.fromEntries((await req.formData()).entries());
    else { const t = await req.text(); data = t ? JSON.parse(t) : {}; }
  } catch {
    return json({ ok: false, error: 'Could not read the submission' }, 400);
  }

  const { data: formData, source } = splitSource(data);
  const fields = toFields(formData);
  if (!fields.length) return json({ ok: false, error: 'No fields received' }, 422);

  const origin = req.headers.get('origin') || req.headers.get('referer') || 'webhook';
  const id = await saveLead(fields, origin, source);
  return json({ ok: true, id, duplicate: id === 0 });
}

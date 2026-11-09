/**
 * Download leads as a branded Excel report (.xlsx), ready to share with the client.
 * No query string: all leads. With q / from / to: only matching leads.
 */
import { query } from '@/lib/db';
import { leadFilters, pickFilters } from '@/lib/leads';
import { isSignedIn } from '@/lib/session';
import { CLIENT_NAME } from '@/lib/config';
import { fmtYmd, todayYmd } from '@/lib/time';
import { buildLeadsXlsx } from '@/lib/xlsx';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const isDay = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s || '');

export async function GET(req) {
  if (!(await isSignedIn())) return Response.json({ error: 'Not signed in' }, { status: 401 });

  const filters = pickFilters(Object.fromEntries(new URL(req.url).searchParams));
  const { where, params } = leadFilters(filters);
  const leads = await query(`SELECT * FROM leads WHERE ${where} ORDER BY received_at DESC`, params);

  const from = isDay(filters.from) ? filters.from : '';
  const to = isDay(filters.to) ? filters.to : '';
  let period = 'All leads';
  if (from && to) period = `Period: ${fmtYmd(from)} – ${fmtYmd(to)}`;
  else if (from) period = `Period: from ${fmtYmd(from)}`;
  else if (to) period = `Period: up to ${fmtYmd(to)}`;
  if (filters.q) period += ` (search: "${filters.q}")`;

  const file = await buildLeadsXlsx(leads, { client: CLIENT_NAME, period });
  const slug = CLIENT_NAME.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return new Response(file, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="${slug}-leads-${todayYmd()}.xlsx"`,
      'Content-Length': String(file.length),
      'Cache-Control': 'no-store',
    },
  });
}

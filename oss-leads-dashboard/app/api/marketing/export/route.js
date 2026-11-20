/**
 * Download all Marketing page data as an Excel workbook (.xlsx).
 *   GET /api/marketing/export?days=7|28|90
 * Uses the same (6-hour cached) data as the page, so the file matches what is on screen.
 */
import { isSignedIn } from '@/lib/session';
import { PERIODS, marketingData } from '@/lib/marketing';
import { CLIENT_NAME } from '@/lib/config';
import { todayYmd } from '@/lib/time';
import { buildMarketingXlsx } from '@/lib/xlsx';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 60;

export async function GET(req) {
  if (!(await isSignedIn())) return Response.json({ error: 'Not signed in' }, { status: 401 });
  const sp = new URL(req.url).searchParams;
  const days = PERIODS.includes(Number(sp.get('days'))) ? Number(sp.get('days')) : 28;

  const data = await marketingData({ days, fresh: false });
  const file = await buildMarketingXlsx(data, { client: CLIENT_NAME });
  const slug = CLIENT_NAME.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return new Response(file, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': `attachment; filename="${slug}-marketing-${days}d-${todayYmd()}.xlsx"`,
      'Content-Length': String(file.length),
      'Cache-Control': 'no-store',
    },
  });
}

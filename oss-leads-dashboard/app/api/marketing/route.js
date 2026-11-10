/**
 * Data for the Marketing page.
 *   GET /api/marketing?days=7|28|90[&fresh=1]
 * fresh=1 skips the 6-hour cache and asks Google again.
 */
import { isSignedIn } from '@/lib/session';
import { PERIODS, marketingData } from '@/lib/marketing';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET(req) {
  if (!(await isSignedIn())) return Response.json({ error: 'Not signed in' }, { status: 401 });
  const sp = new URL(req.url).searchParams;
  const days = PERIODS.includes(Number(sp.get('days'))) ? Number(sp.get('days')) : 28;
  const data = await marketingData({ days, fresh: sp.get('fresh') === '1' });
  return Response.json(data, { headers: { 'Cache-Control': 'private, no-store' } });
}

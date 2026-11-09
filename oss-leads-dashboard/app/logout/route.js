import { COOKIE } from '@/lib/auth';
import { withBase } from '@/lib/base';

export async function GET() {
  // Relative Location so the browser stays on www.openyardstorage.com/app
  // (an absolute URL built from req.url would point at the dashboard's own Vercel domain).
  const res = new Response(null, { status: 307, headers: { Location: withBase('/login') } });
  res.headers.append('Set-Cookie', `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`);
  return res;
}

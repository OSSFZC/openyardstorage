import { NextResponse } from 'next/server';
import { COOKIE, verifySessionToken } from './lib/auth';

// Redirect within the app; nextUrl.clone() keeps the /app base path.
function to(req, pathname) {
  const url = req.nextUrl.clone();
  url.pathname = pathname;
  url.search = '';
  return url;
}

// Everything except the public webhook and static files needs the login.
export async function proxy(req) {
  const { pathname } = req.nextUrl;
  const ok = await verifySessionToken(req.cookies.get(COOKIE)?.value);

  if (pathname === '/login') {
    return ok ? NextResponse.redirect(to(req, '/')) : NextResponse.next();
  }
  if (!ok) {
    if (pathname.startsWith('/api/')) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
    return NextResponse.redirect(to(req, '/login'));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/lead$|_next/|oss-logo\\.png|favicon\\.png|favicon\\.ico|robots\\.txt).*)'],
};

import 'server-only';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE, verifySessionToken } from './auth';

export async function isSignedIn() {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE)?.value);
}

/** For pages: send to /login when not signed in. */
export async function requireSession() {
  if (!(await isSignedIn())) redirect('/login');
}

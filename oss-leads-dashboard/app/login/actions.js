'use server';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE, checkCredentials, cookieOptions, createSessionToken } from '@/lib/auth';
import { withBase } from '@/lib/base';

export async function login(_prev, formData) {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '');
  await new Promise((r) => setTimeout(r, 300)); // slow down guessing
  if (!(await checkCredentials(username, password))) {
    return { error: 'Wrong username or password.', username };
  }
  (await cookies()).set(COOKIE, await createSessionToken(), cookieOptions);
  // With JavaScript the browser adds the /app base path itself; a plain form
  // post gets the Location header as-is, so it needs /app spelled out.
  const viaJavaScript = (await headers()).has('next-action');
  redirect(viaJavaScript ? '/' : withBase('/'));
}

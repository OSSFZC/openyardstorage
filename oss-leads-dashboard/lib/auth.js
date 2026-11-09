/**
 * Single-user login. The one account comes from environment variables
 * ADMIN_USERNAME and ADMIN_PASSWORD (set in Vercel). There is no sign-up.
 * Changing either value signs out every existing session.
 */
import { SignJWT, jwtVerify } from 'jose';

export const COOKIE = 'oss_leads_session';
const enc = new TextEncoder();

async function sha256(s) {
  const b = await crypto.subtle.digest('SHA-256', enc.encode(s));
  return Array.from(new Uint8Array(b), (x) => x.toString(16).padStart(2, '0')).join('');
}

function creds() {
  return { user: process.env.ADMIN_USERNAME || '', pass: process.env.ADMIN_PASSWORD || '' };
}

async function signingKey() {
  const { user, pass } = creds();
  const secret = process.env.SESSION_SECRET || `${process.env.WEBHOOK_KEY || ''}:${user}:${pass}`;
  return enc.encode(await sha256('oss-leads-session:' + secret));
}

async function credVersion() {
  const { user, pass } = creds();
  return (await sha256(`v:${user}:${pass}`)).slice(0, 16);
}

export async function checkCredentials(username, password) {
  const { user, pass } = creds();
  if (!user || !pass) return false;
  const [a, b, c, d] = await Promise.all([sha256(String(username)), sha256(user), sha256(String(password)), sha256(pass)]);
  return a === b && c === d;
}

export async function createSessionToken() {
  return new SignJWT({ u: creds().user, v: await credVersion() })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(await signingKey());
}

export async function verifySessionToken(token) {
  if (!token || !creds().user || !creds().pass) return false;
  try {
    const { payload } = await jwtVerify(token, await signingKey());
    return payload.u === creds().user && payload.v === (await credVersion());
  } catch {
    return false;
  }
}

export const cookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
};

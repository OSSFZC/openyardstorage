import 'server-only';
import { SignJWT, importPKCS8 } from 'jose';

/**
 * Google APIs with a service account (no Google SDK needed).
 * GOOGLE_SA_KEY holds the service-account JSON key, base64-encoded
 * (plain JSON also works). The account only needs read access:
 * Viewer on the GA4 property and a user on the Search Console property.
 */

const SCOPES = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/webmasters.readonly',
].join(' ');
const TOKEN_URL = 'https://oauth2.googleapis.com/token';

/** The parsed key, or null when GOOGLE_SA_KEY is empty. Throws if it is set but unreadable. */
export function serviceAccount() {
  const raw = (process.env.GOOGLE_SA_KEY || '').trim();
  if (!raw) return null;
  let key;
  try {
    key = JSON.parse(raw.startsWith('{') ? raw : Buffer.from(raw, 'base64').toString('utf8'));
  } catch {
    throw new Error('GOOGLE_SA_KEY is not valid base64-encoded JSON. Encode the downloaded key file with: base64 -i key.json');
  }
  if (!key.client_email || !key.private_key) throw new Error('GOOGLE_SA_KEY is missing client_email or private_key. Use the JSON key of a service account.');
  return key;
}

/**
 * Access token for the service account, reused until a minute before it expires.
 * Parallel callers share one sign-in request.
 */
export async function accessToken() {
  const key = serviceAccount();
  if (!key) throw new Error('GOOGLE_SA_KEY is not set');
  const cached = globalThis.__googleToken;
  if (cached && cached.email === key.client_email && cached.expires > Date.now() + 60_000) return cached.token;
  const pending = globalThis.__googleTokenPending;
  if (pending && pending.email === key.client_email) return pending.promise;
  const promise = fetchToken(key).finally(() => { globalThis.__googleTokenPending = undefined; });
  globalThis.__googleTokenPending = { email: key.client_email, promise };
  return promise;
}

async function fetchToken(key) {
  const pk = await importPKCS8(key.private_key, 'RS256');
  const assertion = await new SignJWT({ scope: SCOPES })
    .setProtectedHeader({ alg: 'RS256', typ: 'JWT', ...(key.private_key_id ? { kid: key.private_key_id } : {}) })
    .setIssuer(key.client_email)
    .setAudience(TOKEN_URL)
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(pk);

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    signal: AbortSignal.timeout(10_000),
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    throw new Error(`Google sign-in failed: ${data.error_description || data.error || res.status}`);
  }
  globalThis.__googleToken = { email: key.client_email, token: data.access_token, expires: Date.now() + (data.expires_in || 3600) * 1000 };
  return data.access_token;
}

/** POST JSON to a Google API with the service-account token. Throws with Google's own message on failure. */
export async function googlePost(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${await accessToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(20_000),
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data.error?.message || res.statusText || 'request failed';
    const err = new Error(`${res.status}: ${msg}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

import 'server-only';

/**
 * Postgres access.
 * - Live (Vercel): DATABASE_URL from the Neon integration, queried over HTTP.
 * - Local (no DATABASE_URL): an embedded Postgres (PGlite) saved in ./.data,
 *   so the dashboard runs on your PC without installing a database.
 */

const SCHEMA = `
CREATE TABLE IF NOT EXISTS leads (
  id          SERIAL PRIMARY KEY,
  uniq        TEXT NOT NULL UNIQUE,
  name        TEXT,
  email       TEXT,
  phone       TEXT,
  company     TEXT,
  service     TEXT,
  subject     TEXT,
  message     TEXT,
  fields      TEXT,
  origin      TEXT,
  body        TEXT,
  received_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS leads_received_idx ON leads (received_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);
`;

async function connect() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (url) {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(url);
    for (const stmt of SCHEMA.split(';').map((s) => s.trim()).filter(Boolean)) await sql.query(stmt);
    return { query: (text, params = []) => sql.query(text, params) };
  }
  if (process.env.VERCEL) {
    throw new Error('DATABASE_URL is not set. Connect a Neon Postgres database to this Vercel project (Storage tab).');
  }
  const { PGlite } = await import('@electric-sql/pglite');
  const { mkdir } = await import('node:fs/promises');
  await mkdir('./.data', { recursive: true });
  const pg = new PGlite('./.data/pglite');
  await pg.exec(SCHEMA);
  return { query: async (text, params = []) => (await pg.query(text, params)).rows };
}

/** Run a query; returns an array of row objects. */
export async function query(text, params = []) {
  // keep one connection per server process (also across dev hot-reloads)
  globalThis.__leadDb ??= connect().catch((e) => { globalThis.__leadDb = undefined; throw e; });
  const db = await globalThis.__leadDb;
  return db.query(text, params);
}

export async function one(text, params = []) {
  const rows = await query(text, params);
  return rows[0] ?? null;
}

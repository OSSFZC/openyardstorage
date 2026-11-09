import { BASE_PATH } from './lib/base.js';

// Sites allowed to show this dashboard under their own address (the login form
// is a Server Action, which rejects other origins). EXTRA_ALLOWED_ORIGINS is for
// local testing through the website's dev server, e.g. "localhost:5173".
const allowedOrigins = [
  'www.openyardstorage.com',
  'openyardstorage.com',
  ...(process.env.EXTRA_ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Served at openyardstorage.com/app through the website's rewrite.
  basePath: BASE_PATH,
  experimental: {
    serverActions: { allowedOrigins },
  },
  // Local-only embedded database; never bundled.
  serverExternalPackages: ['@electric-sql/pglite', 'exceljs'],
  // The Excel export reads the logo from disk.
  outputFileTracingIncludes: { '/api/export': ['./public/oss-logo.png'] },
  poweredByHeader: false,
  // This app lives inside the website's repository; don't let Next.js treat the website as the root.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

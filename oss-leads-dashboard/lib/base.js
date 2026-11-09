/**
 * The dashboard is served at https://www.openyardstorage.com/app
 * (the website's vercel.json forwards /app/* to this project).
 * next/link and Next.js redirects add this automatically; plain <a>, <img>,
 * <form action> and fetch() need withBase().
 */
export const BASE_PATH = '/app';

export const withBase = (path) => BASE_PATH + path;

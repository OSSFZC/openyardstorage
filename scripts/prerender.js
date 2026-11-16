import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faqSchemas } from "./faqSchemas.js";
import { breadcrumbSchemas } from "./breadcrumbSchemas.js";
import { localBusinessSchemas } from "./localBusinessSchema.js";
import { canonicalFor, canonicalRoutes } from "../src/data/canonicalRoutes.js";
import { pageMeta } from "../src/data/pageMeta.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.resolve(projectRoot, "../dist");
const templatePath = path.join(distDirectory, "index.html");
const template = await fs.readFile(templatePath, "utf8");

const schemaSources = [localBusinessSchemas, breadcrumbSchemas, faqSchemas];

function schemaScript(schema) {
  const json = JSON.stringify(schema).replaceAll("<", "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function canonicalTag(route) {
  const href = canonicalFor(route);
  return href ? `<link rel="canonical" href="${href}" />` : "";
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Page-specific <title> and meta description (src/data/pageMeta.js), so they are in
// the initial HTML instead of only appearing after JavaScript runs.
function withPageMeta(html, route) {
  const meta = pageMeta[route];
  if (!meta) return html;
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      "</head>",
      `<meta name="description" content="${escapeHtml(meta.description)}" /></head>`,
    );
}

function htmlForRoute(route) {
  const scripts = schemaSources
    .map((source) => source[route])
    .filter(Boolean)
    .map(schemaScript)
    .join("");

  return withPageMeta(template, route).replace(
    "</head>",
    `${canonicalTag(route)}${scripts}</head>`,
  );
}

// Blog posts live in Sanity; fetch their slugs so every post gets a canonical in its
// initial HTML. If Sanity can't be reached the build still succeeds (the page then
// gets its canonical from useMeta once it loads).
async function blogRoutes() {
  const query = encodeURIComponent('*[_type == "post" && defined(slug.current)].slug.current');
  try {
    const res = await fetch(
      `https://wlhljrl6.apicdn.sanity.io/v2023-01-01/data/query/production?query=${query}`,
      { signal: AbortSignal.timeout(10000) },
    );
    const { result } = await res.json();
    return (result || []).map((slug) => `/blogs/${slug}`);
  } catch (error) {
    console.warn(`Blog canonicals skipped (Sanity unreachable: ${error.message}).`);
    return [];
  }
}

// Schema-free shell for every route without its own prerendered page
// (vercel.json rewrites unmatched routes here instead of to the home page).
await fs.writeFile(path.join(distDirectory, "app-shell.html"), template, "utf8");

const routes = new Set([
  ...schemaSources.flatMap((source) => Object.keys(source)),
  ...canonicalRoutes,
  ...Object.keys(pageMeta),
  ...(await blogRoutes()),
]);

for (const route of routes) {
  const routeDirectory =
    route === "/"
      ? distDirectory
      : path.join(distDirectory, route.replace(/^\/+|\/+$/g, ""));

  await fs.mkdir(routeDirectory, { recursive: true });

  await fs.writeFile(
    path.join(routeDirectory, "index.html"),
    htmlForRoute(route),
    "utf8",
  );
}

console.log(`Prerendered schema and canonical tags for ${routes.size} route(s).`);

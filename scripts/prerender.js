import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faqSchemas } from "./faqSchemas.js";
import { breadcrumbSchemas } from "./breadcrumbSchemas.js";
import { localBusinessSchemas } from "./localBusinessSchema.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.resolve(projectRoot, "../dist");
const templatePath = path.join(distDirectory, "index.html");
const template = await fs.readFile(templatePath, "utf8");

const schemaSources = [localBusinessSchemas, breadcrumbSchemas, faqSchemas];

function schemaScript(schema) {
  const json = JSON.stringify(schema).replaceAll("<", "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function htmlForRoute(route) {
  const scripts = schemaSources
    .map((source) => source[route])
    .filter(Boolean)
    .map(schemaScript)
    .join("");

  return template.replace("</head>", `${scripts}</head>`);
}

// Schema-free shell for every route without its own prerendered page
// (vercel.json rewrites unmatched routes here instead of to the home page).
await fs.writeFile(path.join(distDirectory, "app-shell.html"), template, "utf8");

const routes = new Set(schemaSources.flatMap((source) => Object.keys(source)));

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

console.log(`Prerendered schema for ${routes.size} route(s).`);

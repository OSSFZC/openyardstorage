import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faqSchemas } from "./faqSchemas.js";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.resolve(projectRoot, "../dist");
const templatePath = path.join(distDirectory, "index.html");
const template = await fs.readFile(templatePath, "utf8");

function schemaScript(schema) {
  const json = JSON.stringify(schema).replaceAll("<", "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

function htmlForRoute(route) {
  const schema = faqSchemas[route];

  if (!schema) {
    return template;
  }

  return template.replace("</head>", `${schemaScript(schema)}</head>`);
}

for (const route of Object.keys(faqSchemas)) {
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

console.log(`Prerendered ${Object.keys(faqSchemas).length} FAQ route(s).`);

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const urls = readFileSync("legacy-urls.txt", "utf8")
  .split("\n").map(l => l.trim()).filter(Boolean);

function resolves(url) {
  const p = url.replace(/^\//, "");
  const candidates = [
    join(DIST, p),               // file with extension (feed.xml, robots.txt, .pdf)
    join(DIST, p, "index.html"), // directory route
    join(DIST, `${p}.html`),     // file-format route
  ];
  return candidates.some(existsSync);
}

const missing = urls.filter(u => !resolves(u));
if (missing.length) {
  console.error("❌ Legacy URL preservation FAILED. Missing:\n" + missing.join("\n"));
  process.exit(1);
}
console.log(`✅ All ${urls.length} legacy URLs preserved.`);

// Single source of truth for which teg-blue.org routes are publicly live.
//
// Single-page phase (now): only the home. To repopulate (Phase 1+), add an exact
// path to LIVE_PATHS, or a section prefix to LIVE_PREFIXES — the gate
// (middleware.js) and the sitemap (app/sitemap.js) both read from here, so a page
// goes live AND enters the sitemap from one edit. Everything not live 307-redirects
// to the home. Plan: teg-blue-vault/_plans/org/2026-06-23-org-repopulation-plan.md

const LIVE_PATHS = new Set([
  "/",
  // Phase 1 (credibility) — live 2026-06-23. Cross-links into still-gated pages were
  // neutralized on these pages so nothing dead-ends to home.
  "/about",
  "/publications",
  "/publications/validation-study", // the DOI'd study — credibility payload, links off /publications
  "/publications/architecture-paper", // the architecture working-paper — the other card in the /publications listing
  "/scientific-foundations",
  "/glossary",
  // Phase 2 (frameworks): add "/framework/" to LIVE_PREFIXES, or list F-pages here
  // Phase 3 (models + rest): "/model/...", "/ethics", "/ai-safety", "/collaborate", ...
]);

// Whole sections opened at once. Phase 2 (2026-06-23): frameworks + models unlocked
// together — they are one tightly cross-linked cluster, clean only when live as a whole.
const LIVE_PREFIXES = ["/framework/", "/model/"];

// Technical / SEO routes that are always served (never gated).
const TECH_PREFIXES = [
  "/api/",
  "/_next/",
  "/opengraph-image", // home share image — must serve through the gate
  "/tegblue8a4f2c9d7e6b5a3f.txt", // IndexNow key
  "/feed.xml",
];

function isLive(path) {
  if (path.includes(".")) return true; // dotted files: llms.txt, sitemap.xml, robots.txt…
  if (TECH_PREFIXES.some((p) => path.startsWith(p))) return true;
  if (LIVE_PATHS.has(path)) return true;
  if (LIVE_PREFIXES.some((p) => path.startsWith(p))) return true;
  return false;
}

// CommonJS so the same allowlist is read by the Next app (middleware.js + app/sitemap.js
// via webpack's CJS interop) AND the plain-node IndexNow script (scripts/indexnow-notify.js).
module.exports = { LIVE_PATHS, LIVE_PREFIXES, TECH_PREFIXES, isLive };

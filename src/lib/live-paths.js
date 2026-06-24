// Single source of truth for which teg-blue.org routes are publicly live.
//
// Single-page phase (now): only the home. To repopulate (Phase 1+), add an exact
// path to LIVE_PATHS, or a section prefix to LIVE_PREFIXES. The gate
// (middleware.js), sitemap (app/sitemap.js), legacy redirect guard
// (next.config.js), and IndexNow script all read from here, so a page goes live
// and enters search surfaces from one edit. Everything not live 307-redirects to
// the home. Plan: teg-blue-vault/_plans/org/2026-06-23-org-repopulation-plan.md

const LIVE_PATHS = new Set([
  "/",
  // Phase 1 candidates: "/about", "/publications", "/publications/validation-study",
  // "/publications/architecture-paper", "/scientific-foundations", "/glossary"
  // Phase 2 candidates: add "/framework/" to LIVE_PREFIXES, or list F-pages here
  // Phase 3 candidates: "/model/...", "/ethics", "/ai-safety", "/collaborate", ...
]);

// Whole sections opened at once. Frameworks + models are tightly cross-linked, so
// open them only when the cluster is ready to be public as a whole.
const LIVE_PREFIXES = [];

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

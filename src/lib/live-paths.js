// Single source of truth for which teg-blue.org routes are publicly live.
//
// First framework launch phase: the home and approved core framework pages are
// public. Every other page is built but PENDING REVIEW and must not be listed
// here until reviewed and approved.
// To repopulate later, add an exact path to LIVE_PATHS, or a section prefix to
// LIVE_PREFIXES. The gate (middleware.js), sitemap (app/sitemap.js), legacy
// redirect guard (next.config.js), and IndexNow script all read from here, so a
// page goes live and enters search surfaces from one edit. Everything not live
// 307-redirects to the home.

const LIVE_PATHS = new Set([
  "/",
  "/about",
  "/foundations",
  "/methodology",
  "/scientific-foundations",
  // PENDING REVIEW — do NOT re-add until reviewed:
  //   "/research-entry", "/publications",
  //   "/publications/validation-study", "/publications/architecture-paper",
  //   "/collaborate", "/emotional-technology", "/frameworks-map",
  //   "/citations", "/ethics"
  //
  // Spanish launch rule: no Spanish routes are public yet. Do not add "/es"
  // or Spanish section pages until reviewed and approved.
]);

// Whole sections opened at once. Frameworks + models are tightly cross-linked, so
// open them only when the cluster is ready to be public as a whole.
const LIVE_PREFIXES = [];

const LIVE_FILES = new Set([
  "/favicon.ico",
  "/icon.svg",
  "/llms.txt",
  "/llms-full.txt",
  "/robots.txt",
  "/sitemap.xml",
  "/teg-blue_logo_blue.png",
  "/teg-blue_logo_blue.svg",
  "/teg-blue_logo_dark_blue.png",
  "/teg-blue_logo_dark_blue.svg",
  "/teg-blue_logo_white.png",
  "/teg-blue_logo_white.svg",
  "/tegblue8a4f2c9d7e6b5a3f.txt",
]);

// Technical / SEO routes that are always served (never gated).
const TECH_PREFIXES = [
  "/api/",
  "/_next/",
  "/opengraph-image", // home share image — must serve through the gate
  "/fonts/",
];

function isLive(path) {
  if (LIVE_FILES.has(path)) return true;
  if (TECH_PREFIXES.some((p) => path.startsWith(p))) return true;
  if (LIVE_PATHS.has(path)) return true;
  if (LIVE_PREFIXES.some((p) => path.startsWith(p))) return true;
  return false;
}

// CommonJS so the same allowlist is read by the Next app (middleware.js + app/sitemap.js
// via webpack's CJS interop) AND the plain-node IndexNow script (scripts/indexnow-notify.js).
module.exports = { LIVE_PATHS, LIVE_PREFIXES, LIVE_FILES, TECH_PREFIXES, isLive };

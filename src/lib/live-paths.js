// Single source of truth for which teg-blue.org routes are publicly live.
//
// Current public surface: home plus the four Explore-menu pages. Other route
// paths may be reused later, but their page files are intentionally cleared for
// now. To repopulate a page, rebuild its content and then add its exact path
// here when it is approved for the public surface.
//
// The gate (middleware.js), sitemap (app/sitemap.js), legacy redirect guard
// (next.config.js), and IndexNow script all read from here.

const LIVE_PATHS = new Set([
  "/",
  "/about",
  "/foundations",
  "/methodology",
  "/scientific-foundations",
  "/ethics",
  "/publications",
  "/glossary",
  "/collaborate",
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

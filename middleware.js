import { NextResponse } from "next/server";
import { isLive } from "./src/lib/live-paths";

// Single-page gate (allowlist model): serve only the live routes defined in
// src/lib/live-paths.js. Everything else returns 410 Gone with
// X-Robots-Tag: noindex so search engines DROP these URLs from their index —
// the site is intentionally limited to the approved public surface while the
// rest of the platform is staged / pending review. When a route is relisted in
// live-paths.js it returns 200 and is re-indexed normally. (Previously these 307-redirected to the home,
// which is the wrong signal for de-indexing: a temporary redirect tells engines
// to KEEP the URL.)
const GONE_HTML = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Not available — TEG-Blue</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#111729;color:#cbd5e1;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;text-align:center;padding:24px}
  .box{max-width:420px}
  h1{color:#f1f5f9;font-size:20px;font-weight:600;margin:0 0 10px}
  p{font-size:14px;line-height:1.7;margin:0 0 20px}
  a{color:#00b1ff;text-decoration:none}
</style></head>
<body><div class="box">
<h1>This page isn't available</h1>
<p>This part of TEG-Blue isn't published yet. The home page has the current work.</p>
<a href="/">&rarr; Go to teg-blue.org</a>
</div></body></html>`;

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Localhost in next dev is the review surface for staged pages. Production
  // builds, including local `next start`, still use the allowlist below so
  // unpublished routes stay unavailable to crawlers.
  if (
    process.env.NODE_ENV === "development" &&
    ["localhost", "127.0.0.1", "::1"].includes(request.nextUrl.hostname)
  ) {
    return NextResponse.next();
  }

  if (isLive(path)) {
    return NextResponse.next();
  }

  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "cache-control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

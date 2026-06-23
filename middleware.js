import { NextResponse } from "next/server";
import { isLive } from "./src/lib/live-paths";

// Single-page gate (allowlist model): serve only the live routes defined in
// src/lib/live-paths.js; everything else 307-redirects to the home while the rest
// of the platform is staged. Repopulate by adding paths there — additive and safe.
export function middleware(request) {
  const path = request.nextUrl.pathname;

  if (isLive(path)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

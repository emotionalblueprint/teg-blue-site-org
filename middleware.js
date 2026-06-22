import { NextResponse } from "next/server";

const ALLOWED_PREFIXES = [
  "/api/",
  "/_next/",
  "/tegblue8a4f2c9d7e6b5a3f.txt",
  "/feed.xml",
];

function shouldShowMaintenancePage(path) {
  if (path === "/") return false;
  if (path.includes(".")) return false;
  return !ALLOWED_PREFIXES.some((prefix) => path.startsWith(prefix));
}

export function middleware(request) {
  const path = request.nextUrl.pathname;

  if (!shouldShowMaintenancePage(path)) {
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

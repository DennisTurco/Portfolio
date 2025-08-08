import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/en") || pathname.startsWith("/it")) {
    return NextResponse.next();
  }

  // Leggi cookie dalla request (non da nextUrl)
  const lang = request.cookies.get("NEXT_LOCALE")?.value || "en";

  const redirectUrl = new URL(`/${lang}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

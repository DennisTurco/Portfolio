import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Escludo asset statici
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Se il path contiene già la lingua, continuo normalmente
  if (pathname.startsWith("/en") || pathname.startsWith("/it")) {
    return NextResponse.next();
  }

  // Leggo la lingua dal cookie
  let lang = request.cookies.get("NEXT_LOCALE")?.value;

  // Se non esiste, imposto di default "en" (puoi mettere "it" se vuoi)
  if (!lang) {
    lang = "en";

    const res = NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));

    // Imposto il cookie in HTTPS-friendly mode
    res.cookies.set("NEXT_LOCALE", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 giorni
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  }

  // Redirect alla versione con lingua
  return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Applico il middleware a tutte le rotte tranne API e statiche
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

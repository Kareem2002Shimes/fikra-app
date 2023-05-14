import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get(
    process.env.NODE_ENV === "development"
      ? "next-auth.session-token"
      : "__Secure-next-auth.session-token"
  )?.value;
  if (req.nextUrl.pathname.startsWith("/auth") && !token) {
    return;
  }
  if (!token && req.url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  if (req.url.includes("/auth") && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}

export const config = { matcher: ["/dashboard/:path*", "/auth/:path*"] };

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
export default withAuth(
  async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAuth = await getToken({ req });
    const isAuthPage = pathname.startsWith("/auth");
    const protectedRoutes = ["/dashboard"];

    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return NextResponse.next();
    }
    if (!isAuth && isProtectedRoute) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = { matcher: ["/dashboard/:path*", "/auth/:path*"] };

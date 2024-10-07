import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.name;
  const role = request.cookies.get("role")?.name;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!role) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/tasks/:path*",
};

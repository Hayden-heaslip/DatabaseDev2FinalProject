import { NextResponse } from "next/server";

export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/items/:path*", "/customers/:path*", "/users/:path*", "/audit-logs/:path*"],
};

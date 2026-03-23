/**
 * Middleware Purpose:
 * Optional route protection entrypoint for redirecting unauthorized access.
 *
 * Keep middleware lightweight:
 * - Fast checks only (presence of token/basic role checks)
 * - Heavy logic belongs in API or server-side handlers
 */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/items/:path*", "/customers/:path*", "/users/:path*", "/audit-logs/:path*"],
};

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { getUserById } from "@/services/authService";
import { preflight, withCors } from "@/lib/cors";

export async function OPTIONS(req) {
  return preflight(req, ["GET", "OPTIONS"]);
}

export async function GET(req) {
  try {
    const sessionUser = await getSessionUser();
    if (!sessionUser?.userId) {
      return withCors(
        req,
        NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 }),
        ["GET", "OPTIONS"]
      );
    }

    const user = await getUserById(sessionUser.userId);
    if (!user) {
      return withCors(
        req,
        NextResponse.json({ success: false, error: "User not found" }, { status: 404 }),
        ["GET", "OPTIONS"]
      );
    }

    return withCors(req, NextResponse.json({ success: true, user }, { status: 200 }), ["GET", "OPTIONS"]);
  } catch {
    return withCors(
      req,
      NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 }),
      ["GET", "OPTIONS"]
    );
  }
}

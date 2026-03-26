import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { getUserById } from "@/services/authService";
import { preflight, withCors } from "@/lib/cors";

export async function OPTIONS(req) {
  return preflight(req, ["GET", "OPTIONS"]);
}

export async function GET(req) {
  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    return withCors(
      req,
      NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
      ["GET", "OPTIONS"]
    );
  }

  const user = await getUserById(sessionUser.userId);

  if (!user) {
    return withCors(
      req,
      NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
      ["GET", "OPTIONS"]
    );
  }

  return withCors(
    req,
    NextResponse.json({
      user: {
        userId: user.userId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    }),
    ["GET", "OPTIONS"]
  );
}
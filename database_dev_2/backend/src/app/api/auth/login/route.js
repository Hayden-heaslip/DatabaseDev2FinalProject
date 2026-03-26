import { NextResponse } from "next/server";
import { loginUser } from "@/services/authService";
import { AUTH_COOKIE_NAME, signAuthToken } from "@/lib/auth";
import { preflight, withCors } from "@/lib/cors";

export async function OPTIONS(req) {
  return preflight(req, ["POST", "OPTIONS"]);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return withCors(
        req,
        NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
        ),
        ["POST", "OPTIONS"]
      );
    }

    const user = await loginUser(email, password);

    const token = signAuthToken({
      userId: user.userId,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json(
      {
        message: "Login successful",
        user,
      },
      { status: 200 }
    );

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return withCors(req, response, ["POST", "OPTIONS"]);
  } catch (error) {
    return withCors(
      req,
      NextResponse.json(
        { message: error.message || "Login failed" },
        { status: 401 }
      ),
      ["POST", "OPTIONS"]
    );
  }
}
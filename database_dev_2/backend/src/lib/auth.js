import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "auth_token";
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

export function signAuthToken(payload, expiresIn = "24h") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export function verifyAuthToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export async function getSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    return verifyAuthToken(token);
  } catch {
    return null;
  }
}

export { AUTH_COOKIE_NAME };


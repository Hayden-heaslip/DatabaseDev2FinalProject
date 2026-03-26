import { API_BASE_URL } from "@/api/api";

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Auth API not found. Make sure backend is running on port 4000.");
    }
    throw new Error(data.message || "Login failed");
  }

  return data.user;
}

export async function logout() {
  await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function getCurrentUser() {
  const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (res.status === 401) return null;
  if (res.status === 404) return null;

  const data = await res.json();
  return data.user;
}
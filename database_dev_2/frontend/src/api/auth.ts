/** Login/logout/current user requests. */
import { apiFetch } from "@/api/api";

export type AppUser = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

type AuthResponse = {
  success: boolean;
  user?: AppUser;
  error?: string;
};

export async function login(email: string, password: string) {
  return apiFetch<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function getCurrentUser() {
  return apiFetch<AuthResponse>("/api/auth/me", {
    method: "GET",
  });
}

export async function logout() {
  return apiFetch<{ success: boolean; message?: string }>("/api/auth/logout", {
    method: "POST",
  });
}

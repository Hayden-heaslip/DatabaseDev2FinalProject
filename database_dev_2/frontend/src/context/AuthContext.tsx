"use client";

/** Logged-in user/session/role state. */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentUser, login as loginApi, logout as logoutApi } from "@/api/auth";

type AppUser = {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

type AuthContextValue = {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: AppUser | null) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        if (response.success && response.user) {
          setUser(response.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(email: string, password: string) {
    const response = await loginApi(email, password);
    if (!response.success || !response.user) {
      throw new Error(response.error || "Login failed");
    }
    setUser(response.user);
  }

  async function logout() {
    await logoutApi();
    setUser(null);
  }

  const value = useMemo(() => ({ user, loading, login, logout, setUser }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

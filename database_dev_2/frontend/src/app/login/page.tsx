"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function fillDemoUser(role: "admin" | "manager" | "employee") {
    const users = {
      admin: { email: "connor@britannicus.local", password: "Connor123!" },
      manager: { email: "luciia@britannicus.local", password: "Luciia123!" },
      employee: { email: "derek@britannicus.local", password: "Derek123!" },
    };
    setEmail(users[role].email);
    setPassword(users[role].password);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/items");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-lg border border-slate-300 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Login</h1>
        <p className="mt-1 text-sm text-slate-600">Britannicus Reading Room</p>

        <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Demo Accounts</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => fillDemoUser("admin")}
              className="rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
            >
              Connor
            </button>
            <button
              type="button"
              onClick={() => fillDemoUser("manager")}
              className="rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
            >
              Luciia
            </button>
            <button
              type="button"
              onClick={() => fillDemoUser("employee")}
              className="rounded border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-700 hover:bg-slate-100"
            >
              Derek
            </button>
          </div>
        </div>

        {error && <p className="mt-3 rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded border border-slate-300 px-3 py-2 pr-16 text-sm focus:border-slate-900 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-slate-900 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
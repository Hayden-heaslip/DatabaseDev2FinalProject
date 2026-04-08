"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ReadingRoomLogo } from "@/components/layout/ReadingRoomLogo";

export default function LoginPage() {
  const router = useRouter();
  const { login, user, loading } = useAuth();
  const [email, setEmail] = useState("connor@britannicus.local");
  const [password, setPassword] = useState("Connor123!");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/items");
    }
  }, [loading, user, router]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password);
      router.push("/items");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0f302a] text-[#f6edd7]">
      <div className="mx-auto grid min-h-screen w-full max-w-[1400px] gap-8 px-6 py-10 lg:grid-cols-[0.82fr_1.18fr]">
        <section className="order-2 relative self-center rounded-3xl border border-[#ddb85b]/35 bg-[#124138] p-7 shadow-xl shadow-black/25 md:p-8 lg:order-1">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_15%,rgba(221,184,91,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(221,184,91,0.03),transparent_40%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <ReadingRoomLogo size={60} />
              <div>
                <p className="brand-serif text-5xl font-semibold leading-none text-[#f8ebc8]">
                  Britannicus
                </p>
                <p className="mt-1.5 text-base uppercase tracking-[0.2em] text-[#ecd9a6]">
                  Reading Room
                </p>
              </div>
            </div>

            <div className="my-8 h-px w-full bg-[#ddb85b]/55" />

            <h1 className="brand-serif text-[3.2rem] leading-tight text-[#f9edce]">
              Curate inventory
              <br />
              with confidence.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#f1e1ba]">
              Built for rare books, antique maps, and periodicals. Track source,
              condition, and market pricing with a workflow designed for the Reading Room.
            </p>

            <div className="mt-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[#ddc27c]">Collection Focus</p>
              <p className="mt-2 brand-serif text-2xl text-[#f5e7c1]">
                Estate finds, dealer acquisitions, and collector consignments.
              </p>
            </div>
          </div>
        </section>

        <section className="order-1 flex items-center lg:order-2">
          <div className="w-full rounded-3xl border border-[#d8c79e] bg-[#fffaf0] p-7 shadow-xl shadow-black/35 md:p-9">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[#5f7570]">
                Staff Access Portal
              </p>
              <span className="rounded-md border border-[#d8c79e] bg-[#f7f0dd] px-2 py-1 text-xs font-semibold tracking-wide text-[#35544c]">
                BRR
              </span>
            </div>
            <h2 className="mt-2 brand-serif text-4xl text-[#173b33]">Sign In</h2>
            <p className="mt-2 text-sm text-[#556963]">
              Access inventory, customer activity, acquisitions, and pricing history.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <label className="block space-y-1">
                <span className="text-sm font-bold uppercase tracking-wide text-[#22453d]">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input mt-1 text-base"
                  autoComplete="email"
                  placeholder="connor@britannicus.local"
                />
              </label>

              <label className="block space-y-1">
                <span className="text-sm font-bold uppercase tracking-wide text-[#22453d]">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input mt-1 text-base"
                  autoComplete="current-password"
                  placeholder="Enter password"
                />
                <p className="pt-1 text-xs text-[#6d817b]">Use your assigned staff credentials.</p>
              </label>

              {error ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full px-4 py-3 text-base tracking-[0.12em] shadow-md shadow-[#0f302a]/25 hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? "SIGNING IN..." : "ENTER READING ROOM"}
              </button>

              <p className="text-center text-xs text-[#7b8f89]">
                Authorized staff only.
              </p>
            </form>
          </div>
        </section>
      </div>
      <footer className="pb-5 text-center text-xs tracking-wide text-[#dbc88d]">
        © Britannicus Reading Room — Staff Access Only
      </footer>
    </main>
  );
}

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { canAccess } from "@/lib/permissions";
import { ReadingRoomLogo } from "@/components/layout/ReadingRoomLogo";

type AppShellProps = {
  pageTitle: string;
  pageDescription?: string;
  children: ReactNode;
};

export function AppShell({ pageTitle, pageDescription, children }: AppShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  const links = [
    { href: "/items", label: "Items" },
    { href: "/customers", label: "Customers" },
    { href: "/sources", label: "Sources" },
    { href: "/acquisitions", label: "Acquisitions" },
    { href: "/sales", label: "Sales" },
    { href: "/price-history", label: "Price History" },
  ];

  const roleLinks = [
    { href: "/users", label: "Users", allowed: canAccess(user?.role, "READ_USER") },
    { href: "/audit-logs", label: "Audit Logs", allowed: canAccess(user?.role, "READ_AUDIT_LOGS") },
  ];

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <div className="w-full px-4 py-4 md:px-6 md:py-5">
        <header className="rounded-2xl border border-[#1a4b41] bg-gradient-to-r from-[#0f332d] via-[#15473d] to-[#0f332d] px-6 py-4 text-stone-100 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <ReadingRoomLogo />
              <div>
                <h1 className="brand-serif text-[2rem] font-semibold tracking-tight text-[#f1e2ba]">
                  Britannicus Reading Room
                </h1>
                <p className="mt-1 text-sm text-stone-200/95">Inventory and transaction management</p>
              </div>
            </div>
            {!loading && user ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-stone-100">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs uppercase text-stone-300">{user.role}</p>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg border border-[#d0a95b] bg-[#f6ebd2] px-3 py-1.5 text-sm font-medium text-[#173f36] transition hover:bg-[#efdeb5]"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        </header>

        <div className="mt-4 grid gap-4 lg:grid-cols-[230px_1fr]">
          <aside className="rounded-2xl border border-[#d7d2c4] bg-[#f7f3e8] p-3 shadow-sm">
            <nav className="space-y-1.5">
              {links.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition ${
                      isActive
                        ? "bg-[#18463d] text-[#f3e4bc] shadow-sm"
                        : "text-[#29443d] hover:bg-[#efe7d4] hover:text-[#153b33]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {roleLinks
                .filter((link) => link.allowed)
                .map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium tracking-wide transition ${
                        isActive
                          ? "bg-[#18463d] text-[#f3e4bc] shadow-sm"
                          : "text-[#29443d] hover:bg-[#efe7d4] hover:text-[#153b33]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
            </nav>
          </aside>

          <main className="rounded-2xl border border-[#d9d5c7] bg-[#fffdf8] p-5 shadow-sm md:p-6">
            <div className="mb-5">
              <h2 className="brand-serif text-[2.1rem] font-semibold text-[#173d35]">{pageTitle}</h2>
              {pageDescription ? <p className="mt-1 text-[#4f655f]">{pageDescription}</p> : null}
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
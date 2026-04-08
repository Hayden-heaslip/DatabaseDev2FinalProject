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

export function AppShell({
  pageTitle,
  pageDescription,
  children,
}: AppShellProps) {
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
      <div className="w-full px-4 py-6 md:px-6">
        <header className="rounded-t-2xl border border-[#1a4b41] bg-gradient-to-r from-[#103b33] via-[#15473d] to-[#103b33] px-6 py-5 text-stone-100 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <ReadingRoomLogo />
              <div>
                <h1 className="brand-serif text-3xl font-semibold tracking-tight text-[#f0dfb2]">
                  Britannicus Reading Room
                </h1>
                <p className="mt-1 text-sm text-stone-200">Inventory and transaction management</p>
              </div>
            </div>
            {!loading && user ? (
              <>
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
                    className="rounded-md border border-[#d2a93c] bg-[#f6ead0] px-3 py-1.5 text-sm font-medium text-[#163f36] hover:bg-[#f0dfb2]"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </header>

        <nav className="rounded-b-2xl border-x border-b border-[#1a4b41] bg-[#f7f4ea] px-2 py-2 shadow-sm">
          <div className="flex flex-wrap gap-1">
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide ${
                    isActive ? "bg-[#103b33] text-[#f0dfb2]" : "text-[#1f3b34] hover:bg-[#ece4cf]"
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
                    className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide ${
                      isActive ? "bg-[#103b33] text-[#f0dfb2]" : "text-[#1f3b34] hover:bg-[#ece4cf]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
          </div>
        </nav>

        <main className="mt-5 rounded-2xl border border-stone-300 bg-[#fffdf7] p-5 shadow-sm md:p-6">
          <div className="mb-5">
            <h2 className="brand-serif text-3xl font-semibold text-[#193d35]">{pageTitle}</h2>
            {pageDescription ? <p className="text-[#4b5f5a]">{pageDescription}</p> : null}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
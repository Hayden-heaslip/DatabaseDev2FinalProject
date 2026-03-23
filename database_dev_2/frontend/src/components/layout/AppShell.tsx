import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { PageHeader } from "@/components/layout/PageHeader";

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
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />

          <main className="flex-1 p-6 lg:p-8">
            <PageHeader title={pageTitle} description={pageDescription} />
            <div className="mt-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
/**
 * Page Purpose:
 * Audit log page for privileged users.
 *
 * What goes here:
 * - Action history table
 * - Filter by actor/action/date
 * - Links to affected records when relevant
 */
import { AppShell } from "@/components/layout/AppShell";

export default function AuditLogsPage() {
  return (
    <AppShell pageTitle="Audit Logs" pageDescription="Track critical system actions.">
      <p className="text-sm text-zinc-600">Audit logs table goes here.</p>
    </AppShell>
  );
}

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
import { AuditLogsTable } from "@/components/audit-logs/AuditLogsTable";

export default function AuditLogsPage() {
  return (
    <AppShell pageTitle="Audit Logs" pageDescription="Track critical system actions.">
      <AuditLogsTable />
    </AppShell>
  );
}

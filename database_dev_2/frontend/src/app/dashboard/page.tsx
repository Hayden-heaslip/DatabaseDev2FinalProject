/**
 * Page Purpose:
 * Main dashboard after login.
 *
 * What goes here:
 * - High-level summary cards
 * - Quick links to key modules
 * - Alerts/tasks requiring action
 *
 * Existing basic code preserved:
 * - This page keeps the old home message content.
 */
import { AppShell } from "@/components/layout/AppShell";

export default function DashboardPage() {
  return (
    <AppShell pageTitle="Dashboard" pageDescription="Main starting point after login.">
      <p>hello this is the home page</p>
    </AppShell>
  );
}

/**
 * Page Purpose:
 * Admin-only list for user account management.
 *
 * What goes here:
 * - User list with role/status
 * - Access to create/edit user pages
 * - Active/inactive toggle actions
 */
import { AppShell } from "@/components/layout/AppShell";
import { UsersTable } from "@/components/users/UsersTable";

export default function UsersPage() {
  return (
    <AppShell pageTitle="Users" pageDescription="Admin user and role management.">
      <UsersTable />
    </AppShell>
  );
}

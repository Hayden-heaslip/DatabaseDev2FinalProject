/**
 * Page Purpose:
 * Admin-only page to create a new user account.
 *
 * What goes here:
 * - User identity fields
 * - Role and status setup
 * - Password setup or invite flow
 */
import { AppShell } from "@/components/layout/AppShell";

export default function CreateUserPage() {
  return (
    <AppShell pageTitle="Create User" pageDescription="Add a new system user account.">
      <p className="text-sm text-zinc-600">User form (create)</p>
    </AppShell>
  );
}

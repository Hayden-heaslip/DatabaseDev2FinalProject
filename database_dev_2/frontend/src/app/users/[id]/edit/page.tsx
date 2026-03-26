/**
 * Page Purpose:
 * Admin-only page to edit user role/status details.
 *
 * What goes here:
 * - Role assignment
 * - Active/inactive status
 * - Optional password reset controls
 */
import { AppShell } from "@/components/layout/AppShell";

type EditUserPageProps = {
  params: {
    id: string;
  };
};

export default function EditUserPage({ params }: EditUserPageProps) {
  return (
    <AppShell pageTitle={`Edit User #${params.id}`} pageDescription="Update user role and status.">
      <p className="text-sm text-zinc-600">User form (edit) for #{params.id}</p>
    </AppShell>
  );
}

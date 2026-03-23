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
import { UserForm } from "@/components/users/UserForm";

type EditUserPageProps = {
  params: {
    id: string;
  };
};

export default function EditUserPage({ params }: EditUserPageProps) {
  return (
    <AppShell pageTitle={`Edit User #${params.id}`} pageDescription="Update user role and status.">
      <UserForm mode="edit" userId={params.id} />
    </AppShell>
  );
}

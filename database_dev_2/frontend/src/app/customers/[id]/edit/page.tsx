/**
 * Page Purpose:
 * Edit one customer's profile data.
 *
 * What goes here:
 * - Editable contact fields
 * - Save/cancel actions
 * - Validation and update request
 */
import { AppShell } from "@/components/layout/AppShell";

type EditCustomerPageProps = {
  params: {
    id: string;
  };
};

export default function EditCustomerPage({ params }: EditCustomerPageProps) {
  return (
    <AppShell pageTitle={`Edit Customer #${params.id}`} pageDescription="Update customer profile.">
      <p className="text-sm text-zinc-600">Customer form (edit) for #{params.id}</p>
    </AppShell>
  );
}

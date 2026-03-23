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
import { CustomerForm } from "@/components/customers/CustomerForm";

type EditCustomerPageProps = {
  params: {
    id: string;
  };
};

export default function EditCustomerPage({ params }: EditCustomerPageProps) {
  return (
    <AppShell pageTitle={`Edit Customer #${params.id}`} pageDescription="Update customer profile.">
      <CustomerForm mode="edit" customerId={params.id} />
    </AppShell>
  );
}

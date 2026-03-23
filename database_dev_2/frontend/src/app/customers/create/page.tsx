/**
 * Page Purpose:
 * Create a new customer profile.
 *
 * What goes here:
 * - Customer identity/contact form
 * - Validation and save action
 */
import { AppShell } from "@/components/layout/AppShell";
import { CustomerForm } from "@/components/customers/CustomerForm";

export default function CreateCustomerPage() {
  return (
    <AppShell pageTitle="Create Customer" pageDescription="Add a new customer profile.">
      <CustomerForm mode="create" />
    </AppShell>
  );
}

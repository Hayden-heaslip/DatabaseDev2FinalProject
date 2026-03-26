/**
 * Page Purpose:
 * Create a new customer profile.
 *
 * What goes here:
 * - Customer identity/contact form
 * - Validation and save action
 */
import { AppShell } from "@/components/layout/AppShell";

export default function CreateCustomerPage() {
  return (
    <AppShell pageTitle="Create Customer" pageDescription="Add a new customer profile.">
      <p className="text-sm text-zinc-600">Customer form (create)</p>
    </AppShell>
  );
}

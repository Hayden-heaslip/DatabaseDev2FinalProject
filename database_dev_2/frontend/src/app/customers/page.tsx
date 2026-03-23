/**
 * Page Purpose:
 * List all customers and support searching/filtering.
 *
 * What goes here:
 * - Customer list/table
 * - Search and type filters
 * - Navigation to customer details/create
 */
import { AppShell } from "@/components/layout/AppShell";
import { CustomersTable } from "@/components/customers/CustomersTable";

export default function CustomersPage() {
  return (
    <AppShell pageTitle="Customers" pageDescription="Track customers and their activity.">
      <CustomersTable />
    </AppShell>
  );
}

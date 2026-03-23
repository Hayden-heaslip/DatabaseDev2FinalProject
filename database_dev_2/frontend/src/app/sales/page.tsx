/**
 * Page Purpose:
 * List sales transactions.
 *
 * What goes here:
 * - Sales table
 * - Date/customer/item filters
 * - Link to create sale
 */
import { AppShell } from "@/components/layout/AppShell";
import { SalesTable } from "@/components/sales/SalesTable";

export default function SalesPage() {
  return (
    <AppShell pageTitle="Sales" pageDescription="Track sold items and sale details.">
      <SalesTable />
    </AppShell>
  );
}

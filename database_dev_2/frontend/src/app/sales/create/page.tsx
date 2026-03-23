/**
 * Page Purpose:
 * Record a new sale transaction.
 *
 * What goes here:
 * - Customer and item selection
 * - Sale price, discounts, tax, date/time
 * - Submit action for sale creation
 */
import { AppShell } from "@/components/layout/AppShell";
import { SaleForm } from "@/components/sales/SaleForm";

export default function CreateSalePage() {
  return (
    <AppShell pageTitle="Record Sale" pageDescription="Create a new sale transaction.">
      <SaleForm />
    </AppShell>
  );
}

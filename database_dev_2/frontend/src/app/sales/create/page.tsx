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

export default function CreateSalePage() {
  return (
    <AppShell pageTitle="Record Sale" pageDescription="Create a new sale transaction.">
      <p className="text-sm text-zinc-600">Sale form goes here.</p>
    </AppShell>
  );
}

/**
 * Page Purpose:
 * Create a new inventory item.
 *
 * What goes here:
 * - Item form fields (title, category, condition, pricing)
 * - Image upload and provenance input blocks
 * - Submit handler calling src/api/items.ts
 */
import { AppShell } from "@/components/layout/AppShell";

export default function CreateItemPage() {
  return (
    <AppShell pageTitle="Create Item" pageDescription="Add a new item to inventory.">
      <p className="text-sm text-zinc-600">Item form (create)</p>
    </AppShell>
  );
}

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
import { ItemForm } from "@/components/items/ItemForm";

export default function CreateItemPage() {
  return (
    <AppShell pageTitle="Create Item" pageDescription="Add a new item to inventory.">
      <ItemForm mode="create" />
    </AppShell>
  );
}

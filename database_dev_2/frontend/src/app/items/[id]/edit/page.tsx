/**
 * Page Purpose:
 * Edit an existing inventory item.
 *
 * What goes here:
 * - Pre-filled item form
 * - Update condition, prices, and provenance
 * - Save handler to src/api/items.ts
 */
import { AppShell } from "@/components/layout/AppShell";

type EditItemPageProps = {
  params: {
    id: string;
  };
};

export default function EditItemPage({ params }: EditItemPageProps) {
  return (
    <AppShell pageTitle={`Edit Item #${params.id}`} pageDescription="Update item details.">
      <p className="text-sm text-zinc-600">Item form (edit) for #{params.id}</p>
    </AppShell>
  );
}

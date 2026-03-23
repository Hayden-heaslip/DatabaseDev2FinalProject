/**
 * Page Purpose:
 * List and search all inventory items.
 *
 * What goes here:
 * - Table/list of all items
 * - Filters (category, condition, price)
 * - Search input and pagination controls
 * - Link to create page
 *
 * Existing basic code preserved:
 * - This page keeps the old items message content.
 */
import { AppShell } from "@/components/layout/AppShell";

export default function ItemsPage() {
  return (
    <AppShell pageTitle="Items" pageDescription="Browse and manage inventory items.">
      <p>hello this is the home page</p>
    </AppShell>
  );
}

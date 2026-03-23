/**
 * Page Purpose:
 * Show detailed information for one inventory item.
 *
 * What goes here:
 * - Full item details
 * - Market value and history summary
 * - Provenance, condition, and image gallery
 */
import { AppShell } from "@/components/layout/AppShell";
import { ItemDetails } from "@/components/items/ItemDetails";

type ItemDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function ItemDetailsPage({ params }: ItemDetailsPageProps) {
  return (
    <AppShell pageTitle={`Item #${params.id}`} pageDescription="View detailed item record.">
      <ItemDetails itemId={params.id} />
    </AppShell>
  );
}

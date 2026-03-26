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

type ItemDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function ItemDetailsPage({ params }: ItemDetailsPageProps) {
  return (
    <AppShell pageTitle={`Item #${params.id}`} pageDescription="View detailed item record.">
      <p className="text-sm text-zinc-600">Item details for #{params.id}.</p>
    </AppShell>
  );
}

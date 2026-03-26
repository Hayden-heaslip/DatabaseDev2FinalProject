/**
 * Page Purpose:
 * Show one customer's profile and activity history.
 *
 * What goes here:
 * - Contact details
 * - Purchase history and linked items
 * - Provenance notes tied to customer activity
 */
import { AppShell } from "@/components/layout/AppShell";

type CustomerDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function CustomerDetailsPage({ params }: CustomerDetailsPageProps) {
  return (
    <AppShell pageTitle={`Customer #${params.id}`} pageDescription="View customer details and history.">
      <p className="text-sm text-zinc-600">Customer details for #{params.id}.</p>
    </AppShell>
  );
}

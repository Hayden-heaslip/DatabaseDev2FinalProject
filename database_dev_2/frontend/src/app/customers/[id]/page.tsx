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
import { CustomerDetails } from "@/components/customers/CustomerDetails";

type CustomerDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function CustomerDetailsPage({ params }: CustomerDetailsPageProps) {
  return (
    <AppShell pageTitle={`Customer #${params.id}`} pageDescription="View customer details and history.">
      <CustomerDetails customerId={params.id} />
    </AppShell>
  );
}

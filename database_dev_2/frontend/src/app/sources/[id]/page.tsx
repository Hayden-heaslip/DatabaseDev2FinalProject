/**
 * Page Purpose:
 * Show one source's full details and linked transactions.
 *
 * What goes here:
 * - Contact info
 * - Source type and notes
 * - Linked acquisitions/history
 */
import { AppShell } from "@/components/layout/AppShell";
import { SourceDetails } from "@/components/sources/SourceDetails";

type SourceDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function SourceDetailsPage({ params }: SourceDetailsPageProps) {
  return (
    <AppShell pageTitle={`Source #${params.id}`} pageDescription="View source profile and activity.">
      <SourceDetails sourceId={params.id} />
    </AppShell>
  );
}

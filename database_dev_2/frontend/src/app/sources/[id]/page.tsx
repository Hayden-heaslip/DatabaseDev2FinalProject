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

type SourceDetailsPageProps = {
  params: {
    id: string;
  };
};

export default function SourceDetailsPage({ params }: SourceDetailsPageProps) {
  return (
    <AppShell pageTitle={`Source #${params.id}`} pageDescription="View source profile and activity.">
      <p className="text-sm text-zinc-600">Source details for #{params.id}.</p>
    </AppShell>
  );
}

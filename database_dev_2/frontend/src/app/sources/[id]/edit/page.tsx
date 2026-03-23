/**
 * Page Purpose:
 * Edit one source profile.
 *
 * What goes here:
 * - Editable source contact/type fields
 * - Save and cancel controls
 */
import { AppShell } from "@/components/layout/AppShell";
import { SourceForm } from "@/components/sources/SourceForm";

type EditSourcePageProps = {
  params: {
    id: string;
  };
};

export default function EditSourcePage({ params }: EditSourcePageProps) {
  return (
    <AppShell pageTitle={`Edit Source #${params.id}`} pageDescription="Update source details.">
      <SourceForm mode="edit" sourceId={params.id} />
    </AppShell>
  );
}

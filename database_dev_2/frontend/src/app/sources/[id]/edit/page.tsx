/**
 * Page Purpose:
 * Edit one source profile.
 *
 * What goes here:
 * - Editable source contact/type fields
 * - Save and cancel controls
 */
import { AppShell } from "@/components/layout/AppShell";

type EditSourcePageProps = {
  params: {
    id: string;
  };
};

export default function EditSourcePage({ params }: EditSourcePageProps) {
  return (
    <AppShell pageTitle={`Edit Source #${params.id}`} pageDescription="Update source details.">
      <p className="text-sm text-zinc-600">Source form (edit) for #{params.id}</p>
    </AppShell>
  );
}

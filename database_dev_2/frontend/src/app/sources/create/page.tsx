/**
 * Page Purpose:
 * Create a new source profile.
 *
 * What goes here:
 * - Source details form
 * - Type selection (dealer, collector, estate, individual)
 * - Save action
 */
import { AppShell } from "@/components/layout/AppShell";
import { SourceForm } from "@/components/sources/SourceForm";

export default function CreateSourcePage() {
  return (
    <AppShell pageTitle="Create Source" pageDescription="Add a new source/seller profile.">
      <SourceForm mode="create" />
    </AppShell>
  );
}

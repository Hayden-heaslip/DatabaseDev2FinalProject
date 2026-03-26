/**
 * Page Purpose:
 * List all sources (dealers, collectors, estates, individuals).
 *
 * What goes here:
 * - Source table/list
 * - Source type filtering
 * - Links to view/create/edit
 */
import { AppShell } from "@/components/layout/AppShell";

export default function SourcesPage() {
  return (
    <AppShell pageTitle="Sources" pageDescription="Manage dealers, collectors, and other sources.">
      <p className="text-sm text-zinc-600">Sources table goes here.</p>
    </AppShell>
  );
}

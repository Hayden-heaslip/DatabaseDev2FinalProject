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
import { SourcesTable } from "@/components/sources/SourcesTable";

export default function SourcesPage() {
  return (
    <AppShell pageTitle="Sources" pageDescription="Manage dealers, collectors, and other sources.">
      <SourcesTable />
    </AppShell>
  );
}

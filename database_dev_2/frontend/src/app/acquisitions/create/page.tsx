/**
 * Page Purpose:
 * Record a new acquisition transaction.
 *
 * What goes here:
 * - Source selection
 * - Item selection/details
 * - Price/date/provenance fields
 */
import { AppShell } from "@/components/layout/AppShell";

export default function CreateAcquisitionPage() {
  return (
    <AppShell pageTitle="Record Acquisition" pageDescription="Create a new acquisition record.">
      <p className="text-sm text-zinc-600">Acquisition form goes here.</p>
    </AppShell>
  );
}

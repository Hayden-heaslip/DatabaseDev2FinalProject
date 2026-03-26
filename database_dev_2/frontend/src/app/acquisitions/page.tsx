/**
 * Page Purpose:
 * List acquisition records (items purchased from sources).
 *
 * What goes here:
 * - Acquisition table
 * - Date/source filters
 * - Link to create acquisition record
 */
import { AppShell } from "@/components/layout/AppShell";

export default function AcquisitionsPage() {
  return (
    <AppShell pageTitle="Acquisitions" pageDescription="Track inventory purchases and source records.">
      <p className="text-sm text-zinc-600">Acquisitions table goes here.</p>
    </AppShell>
  );
}

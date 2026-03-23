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
import { AcquisitionsTable } from "@/components/acquisitions/AcquisitionsTable";

export default function AcquisitionsPage() {
  return (
    <AppShell pageTitle="Acquisitions" pageDescription="Track inventory purchases and source records.">
      <AcquisitionsTable />
    </AppShell>
  );
}

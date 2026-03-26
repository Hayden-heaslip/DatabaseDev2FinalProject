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

export default function CreateSourcePage() {
  return (
    <AppShell pageTitle="Create Source" pageDescription="Add a new source/seller profile.">
      <p className="text-sm text-zinc-600">Source form (create)</p>
    </AppShell>
  );
}

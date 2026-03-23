import type { ReactNode } from "react";

/** Reusable table wrapper. */
export function Table({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-lg border border-zinc-200">{children}</div>;
}

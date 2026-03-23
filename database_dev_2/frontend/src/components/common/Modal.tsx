import type { ReactNode } from "react";

/** Reusable modal shell. */
export function Modal({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-zinc-300 bg-white p-4">{children}</div>;
}

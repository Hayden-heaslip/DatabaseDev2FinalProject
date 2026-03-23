import type { ReactNode } from "react";

/** Hide/show UI based on role. */
export function ProtectedView({ allowed, children }: { allowed: boolean; children: ReactNode }) {
  if (!allowed) return null;
  return <>{children}</>;
}

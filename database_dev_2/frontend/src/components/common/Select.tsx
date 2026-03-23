import type { SelectHTMLAttributes } from "react";

/** Reusable select/dropdown UI. */
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`w-full rounded-md border border-zinc-300 px-3 py-2 text-sm ${props.className ?? ""}`}
    />
  );
}

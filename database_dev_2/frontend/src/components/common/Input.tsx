import type { InputHTMLAttributes } from "react";

/** Reusable input UI. */
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-md border border-zinc-300 px-3 py-2 text-sm ${props.className ?? ""}`}
    />
  );
}

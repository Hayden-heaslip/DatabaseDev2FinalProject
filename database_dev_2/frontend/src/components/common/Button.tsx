import type { ButtonHTMLAttributes } from "react";

/** Reusable button UI. */
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 ${props.className ?? ""}`}
    />
  );
}

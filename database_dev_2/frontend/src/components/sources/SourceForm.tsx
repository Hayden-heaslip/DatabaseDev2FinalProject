/** Form for create/edit source. */
export function SourceForm({ mode, sourceId }: { mode: "create" | "edit"; sourceId?: string }) {
  return <p className="text-sm text-zinc-600">Source form ({mode}) {sourceId ? `for #${sourceId}` : ""}</p>;
}

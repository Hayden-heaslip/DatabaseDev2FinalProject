/** Form for create/edit item. */
export function ItemForm({ mode, itemId }: { mode: "create" | "edit"; itemId?: string }) {
  return <p className="text-sm text-zinc-600">Item form ({mode}) {itemId ? `for #${itemId}` : ""}</p>;
}

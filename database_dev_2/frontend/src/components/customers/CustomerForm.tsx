/** Form for create/edit customer. */
export function CustomerForm({ mode, customerId }: { mode: "create" | "edit"; customerId?: string }) {
  return <p className="text-sm text-zinc-600">Customer form ({mode}) {customerId ? `for #${customerId}` : ""}</p>;
}

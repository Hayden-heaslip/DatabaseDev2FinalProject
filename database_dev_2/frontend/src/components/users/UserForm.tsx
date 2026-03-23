/** Admin create/edit user form. */
export function UserForm({ mode, userId }: { mode: "create" | "edit"; userId?: string }) {
  return <p className="text-sm text-zinc-600">User form ({mode}) {userId ? `for #${userId}` : ""}</p>;
}

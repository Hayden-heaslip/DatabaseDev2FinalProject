/** Central RBAC rules: who can access what. */
export function canAccess(role: string | undefined, action: string) {
  const map: Record<string, string[]> = {
    admin: ["READ_USER", "READ_AUDIT_LOGS"],
    manager: ["READ_AUDIT_LOGS"],
    employee: [],
  };

  if (!role) return false;

  return map[role]?.includes(action) || false;
}
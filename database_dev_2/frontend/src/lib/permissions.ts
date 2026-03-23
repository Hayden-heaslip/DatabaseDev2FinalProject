/** Central RBAC rules: who can access what. */
import type { RoleName } from "@/types";

const routePermissions: Record<string, RoleName[]> = {
  "/users": ["ADMIN"],
  "/users/create": ["ADMIN"],
  "/audit-logs": ["ADMIN", "MANAGER"],
};

export function canAccessRoute(role: RoleName, route: string): boolean {
  const allowedRoles = routePermissions[route];
  if (!allowedRoles) return true;
  return allowedRoles.includes(role);
}

/**
 * Role-based access control (RBAC) permissions
 */

export const PERMISSIONS = {
  admin: [
    "CREATE_ITEM",
    "READ_ITEM",
    "UPDATE_ITEM",
    "DELETE_ITEM",

    "CREATE_CUSTOMER",
    "READ_CUSTOMER",
    "UPDATE_CUSTOMER",
    "DELETE_CUSTOMER",

    "CREATE_SOURCE",
    "READ_SOURCE",
    "UPDATE_SOURCE",
    "DELETE_SOURCE",

    "CREATE_ACQUISITION",
    "READ_ACQUISITION",

    "CREATE_SALE",
    "READ_SALE",

    "CREATE_USER",
    "READ_USER",
    "UPDATE_USER",
    "DELETE_USER",

    "READ_AUDIT_LOGS",

    "READ_PRICING",
    "READ_DEALER_CONTACT",
    "READ_PROVENANCE",
    "UPDATE_PRICING",
  ],

  manager: [
    "CREATE_ITEM",
    "READ_ITEM",
    "UPDATE_ITEM",

    "CREATE_CUSTOMER",
    "READ_CUSTOMER",
    "UPDATE_CUSTOMER",

    "CREATE_SOURCE",
    "READ_SOURCE",
    "UPDATE_SOURCE",

    "CREATE_ACQUISITION",
    "READ_ACQUISITION",

    "CREATE_SALE",
    "READ_SALE",

    "READ_AUDIT_LOGS",

    "READ_PRICING",
    "READ_DEALER_CONTACT",
    "READ_PROVENANCE",
    "UPDATE_PRICING",
  ],

  employee: [
    "READ_ITEM",
    "UPDATE_ITEM",
    "READ_CUSTOMER",
    "READ_SOURCE",
    "READ_ACQUISITION",
    "READ_SALE",
  ],
};

export function normalizeRole(role) {
  return String(role || "").trim().toLowerCase();
}

export function hasPermission(role, action) {
  const normalizedRole = normalizeRole(role);
  const allowedActions = PERMISSIONS[normalizedRole] || [];

  return allowedActions.includes(action);
}

export function requirePermission(role, action) {
  if (!hasPermission(role, action)) {
    const error = new Error(`Forbidden: role "${role}" cannot perform "${action}"`);
    error.status = 403;
    throw error;
  }
}

export function canReadPricing(role) {
  return hasPermission(role, "READ_PRICING");
}

export function canReadDealerContact(role) {
  return hasPermission(role, "READ_DEALER_CONTACT");
}

export function canReadProvenance(role) {
  return hasPermission(role, "READ_PROVENANCE");
}

export function canUpdatePricing(role) {
  return hasPermission(role, "UPDATE_PRICING");
}
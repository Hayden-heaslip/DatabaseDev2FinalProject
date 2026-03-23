/**
 * Role-based access control (RBAC) permissions
 * 
 * Purpose: Centralized permission checking. Define what each role can do.
 * 
 * Roles:
 * - ADMIN: Full access to all resources and configurations
 * - MANAGER: Can create/edit items, customers, sources, view all data
 * - EMPLOYEE: Can only view data, limited create permissions
 * 
 * Permission matrix:
 * ADMIN:
 *   - All CRUD operations on all resources
 *   - User/role management
 *   - View audit logs
 *   - System configuration
 * 
 * MANAGER:
 *   - Create/Read/Update items, customers, sources
 *   - Create/Read acquisitions and sales
 *   - Cannot delete resources
 *   - Cannot manage users
 *   - Can view own audit logs
 * 
 * EMPLOYEE:
 *   - Read all resources
 *   - Cannot create/edit/delete
 *   - Limited to viewing permissions only
 * 
 * Usage:
 * if (!hasPermission(user.role, 'DELETE_ITEM')) {
 *   throw new Error('Insufficient permissions');
 * }
 */

export function hasPermission(role, action) {
  // TODO: Define permission matrix as nested object or array
  // Check if role has permission for action
  // Return true if allowed, false if denied

  const permissions = {
    ADMIN: ['CREATE_ITEM', 'READ_ITEM', 'UPDATE_ITEM', 'DELETE_ITEM',
             'CREATE_CUSTOMER', 'READ_CUSTOMER', 'UPDATE_CUSTOMER', 'DELETE_CUSTOMER',
             'CREATE_SOURCE', 'READ_SOURCE', 'UPDATE_SOURCE', 'DELETE_SOURCE',
             'CREATE_ACQUISITION', 'READ_ACQUISITION',
             'CREATE_SALE', 'READ_SALE',
             'CREATE_USER', 'READ_USER', 'UPDATE_USER', 'DELETE_USER',
             'READ_AUDIT_LOGS'],
    MANAGER: ['CREATE_ITEM', 'READ_ITEM', 'UPDATE_ITEM',
              'CREATE_CUSTOMER', 'READ_CUSTOMER', 'UPDATE_CUSTOMER',
              'CREATE_SOURCE', 'READ_SOURCE', 'UPDATE_SOURCE',
              'CREATE_ACQUISITION', 'READ_ACQUISITION',
              'CREATE_SALE', 'READ_SALE'],
    EMPLOYEE: ['READ_ITEM', 'READ_CUSTOMER', 'READ_SOURCE', 'READ_ACQUISITION', 'READ_SALE']
  };

  // TODO: Implement this check
  // return permissions[role]?.includes(action) || false;
  return true;
}

export function requirePermission(role, action) {
  // TODO: Helper to throw error if permission denied
  // if (!hasPermission(role, action)) {
  //   throw new Error(`User with role ${role} cannot ${action}`);
  // }
}


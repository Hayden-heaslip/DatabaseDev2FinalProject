/**
 * Audit logging helper
 * 
 * Purpose: Create immutable audit log records for compliance and debugging.
 * Every CREATE/UPDATE/DELETE operation should be logged.
 * 
 * What to log:
 * - action: 'CREATE_ITEM', 'UPDATE_CUSTOMER', 'DELETE_USER', 'LOGIN', etc.
 * - resourceType: 'ITEM', 'CUSTOMER', 'USER', 'SALE', etc.
 * - resourceId: ID of the resource affected
 * - userId: ID of user who performed the action
 * - changes: For UPDATE operations, object with {oldValue, newValue} for each field
 * - ipAddress: IP address of request (for security)
 * - timestamp: ISO timestamp of when action occurred
 * 
 * Usage in services:
 * await createAuditLog({
 *   action: 'CREATE_SALE',
 *   resourceType: 'SALE',
 *   resourceId: '123',
 *   userId: 'user456',
 *   changes: { customerId: newValue, itemId: newValue, quantity: newValue },
 *   ipAddress: request.ip
 * });
 */

export async function createAuditLog(logData) {
  // TODO: Extract data from logData parameter
  const {
    action,           // e.g., 'CREATE_ITEM'
    resourceType,     // e.g., 'ITEM'
    resourceId,       // ID of affected resource
    userId,           // ID of user who performed action
    changes,          // Object with field changes
    ipAddress         // Request IP
  } = logData;

  // TODO: Create audit log entry using auditLogRepository
  // const entry = await auditLogRepository.create({
  //   action,
  //   resourceType,
  //   resourceId,
  //   userId,
  //   changes,
  //   ipAddress,
  //   timestamp: new Date().toISOString()
  // });
  // return entry;

  return {
    action,
    resourceType,
    resourceId,
    userId,
    changes,
    ipAddress,
    timestamp: new Date().toISOString()
  };
}


/**
 * Data Access Layer for Audit Logs
 * 
 * Purpose: Direct database queries for audit logs using Prisma ORM.
 * Audit logs are append-only (no updates/deletes after creation).
 * 
 * Methods to implement:
 * - findMany(filters) - Get paginated audit logs with filtering by action/user/resource
 * - create(data) - Append new audit log entry (immutable records)
 * - findByUserId(userId, filters) - Get all actions by specific user
 * - findByResource(resourceType, resourceId, filters) - Get all changes to specific resource
 * - findByAction(action, filters) - Get all events of specific type (e.g., all logins)
 */
export const auditLogRepository = {
  async findMany(filters = {}) {
    // TODO: Use prisma.auditLog.findMany() with pagination, action/user/resource filtering
    // Support sorting by timestamp descending (newest first)
  },

  async create(data) {
    // TODO: Use prisma.auditLog.create({ data })
    // Immutable - never updated/deleted after creation
  },

  async findByUserId(userId, filters = {}) {
    // TODO: Use prisma.auditLog.findMany({ where: { userId }, ... })
    // Returns all activity for a user
  },

  async findByResource(resourceType, resourceId, filters = {}) {
    // TODO: Use prisma.auditLog.findMany({ where: { resourceType, resourceId }, ... })
    // Shows complete change history of one resource
  },

  async findByAction(action, filters = {}) {
    // TODO: Use prisma.auditLog.findMany({ where: { action }, ... })
    // Useful for finding all login/logout events or all deletions
  }
};


/**
 * Middleware utilities and helpers
 * 
 * Purpose: Shared middleware logic used across API routes.
 * Handles cross-cutting concerns like auth checks, logging, error handling.
 * 
 * Middleware to implement:
 * - withAuth(handler) - Verify user is authenticated (has valid JWT)
 * - withPermission(handler, role) - Verify user has required role
 * - withErrorHandler(handler) - Wrap route handler with error handling/logging
 * - validateRequest(schema)(handler) - Validate request payload against schema
 * - logRequest(handler) - Log incoming request (method, path, user, timestamp)
 */

/**
 * Wraps a handler with error handling
 * Catches any errors and returns standardized error response
 * 
 * Usage:
 * export const GET = withErrorHandler(async (request) => {
 *   const items = await itemService.listItems();
 *   return success({ items });
 * });
 */
export async function withErrorHandler(handler) {
  return async (request) => {
    try {
      return await handler(request);
    } catch (error) {
      // TODO: Log error to console/logging service
      // console.error('Request failed:', error);
      // Return appropriate status code based on error type
      return Response.json(
        { success: false, error: error.message || 'Internal server error' },
        { status: error.status || 500 }
      );
    }
  };
}

/**
 * Wraps a handler to verify user authentication
 * Extracts JWT from request header and verifies it
 * 
 * Usage:
 * export const GET = withAuth(async (request, context) => {
 *   const user = context.user; // User is already authenticated
 *   return success({ user });
 * });
 */
export async function withAuth(handler) {
  return async (request, context) => {
    // TODO: Extract JWT from Authorization header
    // Verify token using lib/auth.js
    // Add user to context
    // If not authenticated, return 401
    const user = null; // TODO: Get from token
    return handler(request, { user });
  };
}

/**
 * Wraps a handler to check user permissions
 * 
 * Usage:
 * export const DELETE = withPermission('DELETE_ITEM')(async (request, context) => {
 *   // User is verified to have DELETE_ITEM permission
 *   return success({ deleted: true });
 * });
 */
export function withPermission(requiredAction) {
  return (handler) => {
    return async (request, context) => {
      // TODO: Get user from context
      // Check if user.role has requiredAction permission using lib/permissions.js
      // If denied, return 403
      return handler(request, context);
    };
  };
}

/**
 * Wraps a handler to log request details
 * 
 * Usage:
 * export const POST = logRequest(async (request) => {
 *   // Request is automatically logged
 *   return success({ created: true });
 * });
 */
export async function logRequest(handler) {
  return async (request) => {
    // TODO: Log request details
    // console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
    return handler(request);
  };
}

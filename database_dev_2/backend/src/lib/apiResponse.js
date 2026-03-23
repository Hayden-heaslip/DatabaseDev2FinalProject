/**
 * Standard API response helpers
 * 
 * Purpose: Consistent response format across all API endpoints.
 * All endpoints should return either success() or error() responses.
 * 
 * Response format:
 * Success: { success: true, data: {...}, status: 200 }
 * Error: { success: false, error: "message", status: 400/401/403/500 }
 * 
 * Usage in routes:
 * export async function GET() {
 *   return success({ items: [...] });
 * }
 * 
 * export async function POST() {
 *   try {
 *     // do something
 *     return success({ id: 123 }, 201);
 *   } catch (error) {
 *     return error('Invalid input', 400);
 *   }
 * }
 */

export function success(data, status = 200) {
  return Response.json({ success: true, data }, { status });
}

export function error(message, status = 400) {
  return Response.json({ success: false, error: message }, { status });
}

export function unauthorized(message = 'Unauthorized') {
  return error(message, 401);
}

export function forbidden(message = 'Forbidden') {
  return error(message, 403);
}

export function notFound(message = 'Not found') {
  return error(message, 404);
}

export function serverError(message = 'Internal server error') {
  return error(message, 500);
}


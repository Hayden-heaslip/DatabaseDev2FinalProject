/**
 * Input validation for Item requests
 * 
 * Purpose: Validate and sanitize request payloads before database operations.
 * Ensures data integrity and prevents invalid records.
 * 
 * Validation rules:
 * - name: Required, string, 1-255 characters, trimmed
 * - description: Optional, string, max 1000 characters
 * - sku: Required, string, unique (check via repository), alphanumeric + dashes
 * - price: Required, number, must be >= 0, 2 decimal places max
 * - quantity: Required, number, must be >= 0, integer only
 * - category: Optional, string, predefined list (Electronics, Furniture, etc.)
 * 
 * Returns true if valid, throws validation error if invalid
 */
export function validateItemPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  const { name, description, sku, price, quantity, category } = payload;

  // TODO: Implement validation logic
  // Check required fields exist and have correct type
  // Validate string lengths, numeric ranges
  // Trim whitespace from strings
  // Return cleaned/normalized data for database insertion
  // Throw descriptive errors for each validation failure

  return true;
}

export function validateCreateItemPayload(payload) {
  // TODO: Call validateItemPayload, then check required fields for creation
  return validateItemPayload(payload);
}

export function validateUpdateItemPayload(payload) {
  // TODO: Call validateItemPayload, but make most fields optional for PATCH
  // At least one field should be present
  return validateItemPayload(payload);
}


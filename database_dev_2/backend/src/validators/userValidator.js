/**
 * Input validation for User requests
 * 
 * Validation rules:
 * - email: Required, string, valid email format, unique (case-insensitive)
 * - password: Required (for creation), string, 8+ chars, must have upper/lower/number
 * - name: Required, string, 1-255 characters
 * - role: Required, enum ['ADMIN', 'MANAGER', 'EMPLOYEE']
 * - status: Optional, enum ['ACTIVE', 'INACTIVE']
 * 
 * Returns true if valid, throws validation error if invalid
 */
export function validateUserPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  const { email, password, name, role, status } = payload;

  // TODO: Validate email format and uniqueness
  // Validate password strength if provided (8+, mixed case, numbers)
  // Validate name length
  // Validate role is one of allowed enum values
  // Validate status if provided
  // Trim string fields
  // Return cleaned/normalized data
  // Do NOT return password in response

  return true;
}

export function validateCreateUserPayload(payload) {
  // TODO: Ensure email, password, name, role are all required for creation
  return validateUserPayload(payload);
}

export function validateUpdateUserPayload(payload) {
  // TODO: Make fields optional for PATCH updates
  // If role is being changed, ensure requestor has ADMIN permission
  return validateUserPayload(payload);
}

export function validateLoginPayload(payload) {
  // TODO: Simplified validation for login
  // Require: email, password
  // Validate email format
  // Return cleaned data
  return true;
}


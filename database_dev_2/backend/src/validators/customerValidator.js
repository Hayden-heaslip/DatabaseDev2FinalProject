/**
 * Input validation for Customer requests
 * 
 * Validation rules:
 * - email: Required, string, valid email format, unique (check via repository)
 * - name: Required, string, 1-255 characters
 * - phone: Optional, string, valid phone format
 * - address: Optional, string, max 500 characters
 * - city: Optional, string, 1-100 characters
 * - country: Optional, string, 1-100 characters
 * 
 * Returns true if valid, throws validation error if invalid
 */
export function validateCustomerPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  const { email, name, phone, address, city, country } = payload;

  // TODO: Validate email format and uniqueness
  // Validate name length and format
  // Validate phone if provided (regex pattern for valid phone)
  // Trim all string fields
  // Return cleaned/normalized data

  return true;
}

export function validateCreateCustomerPayload(payload) {
  // TODO: Ensure email and name are required for creation
  return validateCustomerPayload(payload);
}

export function validateUpdateCustomerPayload(payload) {
  // TODO: Make fields optional for PATCH updates
  return validateCustomerPayload(payload);
}


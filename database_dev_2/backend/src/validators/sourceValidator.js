/**
 * Input validation for Source (Supplier) requests
 * 
 * Validation rules:
 * - name: Required, string, 1-255 characters, unique
 * - email: Optional, string, valid email format
 * - phone: Optional, string, valid phone format
 * - address: Optional, string, max 500 characters
 * - contactPerson: Optional, string, 1-255 characters
 * - status: Optional, enum ['ACTIVE', 'INACTIVE']
 * 
 * Returns true if valid, throws validation error if invalid
 */
export function validateSourcePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  const { name, email, phone, address, contactPerson, status } = payload;

  // TODO: Validate name uniqueness and length
  // Validate email format if provided
  // Validate phone if provided
  // Validate status is one of allowed values
  // Trim string fields
  // Return cleaned/normalized data

  return true;
}

export function validateCreateSourcePayload(payload) {
  // TODO: Ensure name is required for creation
  return validateSourcePayload(payload);
}

export function validateUpdateSourcePayload(payload) {
  // TODO: Make fields optional for PATCH updates
  return validateSourcePayload(payload);
}


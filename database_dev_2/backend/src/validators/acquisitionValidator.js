/**
 * Input validation for Acquisition (Purchase) requests
 * 
 * Validation rules:
 * - sourceId: Required, string, must exist in database
 * - itemId: Required, string, must exist in database
 * - quantity: Required, number, must be > 0, integer only
 * - cost: Required, number, must be >= 0 (total or per-unit)
 * - date: Required, ISO date string, cannot be in future
 * - notes: Optional, string, max 500 characters
 * 
 * Returns true if valid, throws validation error if invalid
 */
export function validateAcquisitionPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  const { sourceId, itemId, quantity, cost, date, notes } = payload;

  // TODO: Validate required fields exist
  // Validate sourceId exists via sourceRepository.findById()
  // Validate itemId exists via itemRepository.findById()
  // Validate quantity > 0 and is integer
  // Validate cost >= 0
  // Validate date is valid ISO date and not in future
  // Trim notes if provided
  // Return cleaned/normalized data

  return true;
}

export function validateCreateAcquisitionPayload(payload) {
  return validateAcquisitionPayload(payload);
}


/**
 * Input validation for Sale requests
 * 
 * Validation rules:
 * - customerId: Required, string, must exist in database
 * - itemId: Required, string, must exist in database
 * - quantity: Required, number, must be > 0, integer only, <= available stock
 * - price: Required, number, must be > 0 (per unit or total)
 * - date: Required, ISO date string, cannot be in future
 * - notes: Optional, string, max 500 characters
 * 
 * Returns true if valid, throws validation error if invalid
 */
export function validateSalePayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  const { customerId, itemId, quantity, price, date, notes } = payload;

  // TODO: Validate required fields exist
  // Validate customerId exists via customerRepository.findById()
  // Validate itemId exists via itemRepository.findById()
  // Validate quantity > 0 and is integer
  // Validate quantity <= item.quantity (stock check)
  // Validate price > 0
  // Validate date is valid ISO date and not in future
  // Trim notes if provided
  // Return cleaned/normalized data

  return true;
}

export function validateCreateSalePayload(payload) {
  return validateSalePayload(payload);
}


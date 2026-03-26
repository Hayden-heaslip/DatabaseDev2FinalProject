/**
 * Business logic layer for Items
 * 
 * Purpose: Handles all item-related business logic, coordinates between
 * repositories (database) and API routes. Contains validation, calculations,
 * and business rule enforcement.
 * 
 * Methods to implement:
 * - listItems(filters) - Get paginated, sorted, and filtered items
 * - createItem(data) - Create new item, validate constraints
 * - getItem(id) - Get single item by id
 * - updateItem(id, data) - Update item, handle inventory side effects
 * - deleteItem(id) - Delete item, check if safe to delete
 * - getLowStockItems() - Get items below minimum threshold
 * 
 * Business rules to enforce:
 * - Item SKU must be unique
 * - All prices must be positive
 * - Quantity cannot be negative
 * - Validate name/description length and format
 * - Automatically calculate total value (quantity * cost)
 */

import { itemRepository } from "../repositories/itemRepository";
export const itemService = {
  /**
   * List all items with pagination and filtering
   * @param {Object} filters - {page, limit, search, sortBy, sortOrder}
   * @returns {Promise<{items: Array, total: number}>}
   */
  async listItems(filters) {
    // 1. Get raw data from Repository
    const { items, total } = await itemRepository.findMany(filters);

    // 2. Transform into Clean JSON format
    const jsonItems = items.map(item => {
      // Handle Prisma Decimals (convert to standard numbers)
      const cost = item.acquisition_cost ? Number(item.acquisition_cost) : 0;
      const price = item.selling_price ? Number(item.selling_price) : 0;

      return {
        ...item,
        // Replace database-specific types with JS primitives
        acquisition_cost: cost,
        selling_price: price,
        acquisition_date: item.acquisition_date.toISOString().split('T')[0], // YYYY-MM-DD
        
        // Helper field for the UI to know which icon/layout to show
        item_category: item.book ? 'BOOK' : item.map ? 'MAP' : item.periodical ? 'PERIODICAL' : 'GENERAL'
      };
    });

    return { items: jsonItems, total };
  },

  /**
   * Create a new item
   * @param {Object} data - Validated item data
   * @returns {Promise<Object>} Created item
   */
  async createItem(data) {
    // TODO: Validate business rules (unique SKU, positive prices)
    // Call itemRepository.create(data)
    // Return created item
  },

  /**
   * Get single item
   * @param {string} id - Item ID
   * @returns {Promise<Object>} Item details
   */
  async getItem(id) {
    // TODO: Call itemRepository.findById(id)
    // Throw 404 if not found
    // Return item
  },

  /**
   * Update item
   * @param {string} id - Item ID
   * @param {Object} data - Updated item data
   * @returns {Promise<Object>} Updated item
   */
  async updateItem(id, data) {
    // TODO: Validate item exists first
    // Validate business rules on updated data
    // Call itemRepository.update(id, data)
    // Return updated item
  },

  /**
   * Delete item
   * @param {string} id - Item ID
   * @returns {Promise<boolean>} Success flag
   */
  async deleteItem(id) {
    // TODO: Check if item has recent transactions (acquisitions/sales)
    // Prevent deletion if associated records exist
    // Call itemRepository.delete(id)
    // Return true
  }
};


/**
 * Data Access Layer for Items
 * 
 * Purpose: Direct database queries for items using Prisma ORM.
 * All database operations go through here. Services call these methods.
 * 
 * Methods to implement:
 * - findMany(filters) - Get paginated/sorted/filtered items from database
 * - findById(id) - Get single item by id, throw if not found
 * - findBySkU(sku) - Get item by stock keeping unit (unique)
 * - create(data) - Create and return new item
 * - update(id, data) - Update item, return updated record
 * - delete(id) - Delete item from database
 * - incrementQuantity(id, amount) - Increase stock (for acquisitions)
 * - decrementQuantity(id, amount) - Decrease stock (for sales)
 * 
 * Using Prisma:
 * const item = await prisma.item.findUnique({ where: { id } });
 * const items = await prisma.item.findMany({ skip, take, where, orderBy });
 * const created = await prisma.item.create({ data });
 * const updated = await prisma.item.update({ where: { id }, data });
 * const deleted = await prisma.item.delete({ where: { id } });
 */
import { db } from '../lib/db';

export const itemRepository = {
  async findMany(filters = {}) {
    const page = Math.max(1, parseInt(filters.page) || 1);
    const limit = Math.max(1, parseInt(filters.limit) || 20);
    const skip = (page - 1) * limit;
    
    const search = (filters.search || '').trim();
    const sortBy = filters.sortBy || 'title';
    const sortOrder = (filters.sortOrder || 'asc').toLowerCase() === 'desc' ? 'desc' : 'asc';

    let where = {};
    if (search) {
      where = {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } }
        ]
      };
    }

    // This is the "Full Data" logic
    const [items, total] = await Promise.all([
      db.item.findMany({
        skip,
        take: limit,
        where,
        orderBy: { [sortBy]: sortOrder },
        include: {
          // 1. Get Book data + Author + Publisher
          book: {
            include: {
              author: true,
              publisher: true
            }
          },
          // 2. Get Map data + Cartographer + Publisher
          map: {
            include: {
              cartographer: true,
              publisher: true
            }
          },
          // 3. Get Periodical data + Publisher
          periodical: {
            include: {
              publisher: true
            }
          },
          // 4. Get History and Origin data
          price_history: true,
          provenance: true,
          acquisition: {
            include: { source: true }
          }
        }
      }),
      db.item.count({ where })
    ]);

    return { items, total };
  },

  async findById(id) {
    // TODO: Use prisma.item.findUnique({ where: { id } })
    // Throw 404 error if not found
    // Return item
  },

  async findBySkU(sku) {
    // TODO: Use prisma.item.findFirst({ where: { sku } })
    // Return item or null
  },

  async create(data) {
    // TODO: Use prisma.item.create({ data })
    // Return created item
  },

  async update(id, data) {
    // TODO: Use prisma.item.update({ where: { id }, data })
    // Return updated item
  },

  async delete(id) {
    // TODO: Use prisma.item.delete({ where: { id } })
    // Return deleted item
  },

  async incrementQuantity(id, amount) {
    // TODO: Get current quantity, add amount
    // Use prisma.item.update({ where: { id }, data: { quantity: newQty } })
  },

  async decrementQuantity(id, amount) {
    // TODO: Get current quantity, subtract amount (check >= 0)
    // Use prisma.item.update({ where: { id }, data: { quantity: newQty } })
  }
};


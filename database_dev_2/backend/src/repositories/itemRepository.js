import { db } from '../lib/db';

const includeRelations = {
  book: { include: { author: true, publisher: true } },
  map: { include: { cartographer: true, publisher: true } },
  periodical: { include: { publisher: true } },
  price_history: true,
  provenance: true,
  acquisition: { include: { source: true } }
};

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

    const [items, total] = await Promise.all([
      db.item.findMany({
        skip,
        take: limit,
        where,
        orderBy: { [sortBy]: sortOrder },
        include: includeRelations
      }),
      db.item.count({ where })
    ]);

    return { items, total };
  },

  async findById(id) {
    const item = await db.item.findUnique({
      where: { item_id: id },
      include: includeRelations
    });

    if (!item) {
      const error = new Error(`Item with id ${id} not found`);
      error.statusCode = 404;
      throw error;
    }

    return item;
  },

  async create(data) {
    return await db.item.create({ data });
  },

  async update(id, data) {
    return await db.item.update({
      where: { item_id: id },
      data,
      include: includeRelations
    });
  },

  async delete(id) {
    return await db.item.delete({
      where: { item_id: id }
    });
  }
};
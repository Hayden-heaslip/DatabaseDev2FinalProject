import { itemRepository } from "../repositories/itemRepository.js";

const toJSON = (item) => ({
  ...item,
  acquisition_cost: item.acquisition_cost ? Number(item.acquisition_cost) : 0,
  selling_price: item.selling_price ? Number(item.selling_price) : 0,
  acquisition_date: item.acquisition_date.toISOString().split('T')[0],
  item_category: item.book ? 'BOOK' : item.map ? 'MAP' : item.periodical ? 'PERIODICAL' : 'GENERAL'
});

export const itemService = {
  async listItems(filters) {
    const { items, total } = await itemRepository.findMany(filters);
    return { items: items.map(toJSON), total };
  },

  async getItem(id) {
    const item = await itemRepository.findById(id);
    return toJSON(item);
  },

  async createItem(data) {
    if (!data.title) throw Object.assign(new Error('Title is required'), { statusCode: 400 });
    if (!data.condition) throw Object.assign(new Error('Condition is required'), { statusCode: 400 });
    if (data.acquisition_cost <= 0) throw Object.assign(new Error('Acquisition cost must be positive'), { statusCode: 400 });
    if (data.selling_price <= 0) throw Object.assign(new Error('Selling price must be positive'), { statusCode: 400 });

    const item = await itemRepository.create(data);
    return toJSON(item);
  },

  async updateItem(id, data) {
    await itemRepository.findById(id);
    const updated = await itemRepository.update(id, data);
    return toJSON(updated);
  },

  async deleteItem(id) {
    await itemRepository.findById(id);
    await itemRepository.delete(id);
    return true;
  }
};
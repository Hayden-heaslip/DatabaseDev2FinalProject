import { itemService } from '@/services/itemService.js';
import { success, error } from '@/lib/apiResponse.js';

export async function GET(request, { params }) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    if (isNaN(id)) return error('Invalid item id', 400);

    const item = await itemService.getItem(id);
    return success(item);
  } catch (err) {
    return error(err.message, err.statusCode || 500);
  }
}

export async function PUT(request, { params }) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    if (isNaN(id)) return error('Invalid item id', 400);

    const body = await request.json();
    const item = await itemService.updateItem(id, body);
    return success(item);
  } catch (err) {
    return error(err.message, err.statusCode || 500);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id: rawId } = await params;
    const id = parseInt(rawId);
    if (isNaN(id)) return error('Invalid item id', 400);

    await itemService.deleteItem(id);
    return success({ message: 'Item deleted successfully' });
  } catch (err) {
    return error(err.message, err.statusCode || 500);
  }
}
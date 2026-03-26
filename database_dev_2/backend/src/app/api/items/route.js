import { itemService } from '@/services/itemService.js';
import { success, error } from '@/lib/apiResponse.js';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const sortBy = searchParams.get('sortBy') || 'title';
    const sortOrder = searchParams.get('sortOrder') || 'asc';

    const { items, total } = await itemService.listItems({ page, limit, search, sortBy, sortOrder });
    return success({ items, total });
  } catch (err) {
    return error(err.message, err.statusCode || 500);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const item = await itemService.createItem(body);
    return success(item, 201);
  } catch (err) {
    return error(err.message, err.statusCode || 500);
  }
}
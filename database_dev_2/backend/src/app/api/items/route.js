import { createPrismaClient } from "@/lib/prisma";
import { preflight, withCors } from "@/lib/cors";

export async function OPTIONS(req) {
  return preflight(req, ["GET", "POST", "OPTIONS"]);
}

export async function GET(request) {
  const prisma = createPrismaClient();
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.trim();

    const items = await prisma.item.findMany({
      where: search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      include: {
        book: true,
        map: true,
        periodical: true,
        sales: {
          select: { sales_id: true },
          take: 1,
        },
      },
      orderBy: { item_id: "desc" },
      take: 50,
    });

    const formatted = items.map((item) => ({
      itemId: item.item_id,
      title: item.title,
      category: item.book ? "Book" : item.map ? "Map" : item.periodical ? "Magazine" : "Other",
      condition: item.condition,
      askingPrice: Number(item.selling_price),
      status: item.sales.length > 0 ? "Sold" : "In Stock",
    }));

    return withCors(request, Response.json({ success: true, items: formatted }, { status: 200 }), [
      "GET",
      "POST",
      "OPTIONS",
    ]);
  } catch (error) {
    return withCors(
      request,
      Response.json({ success: false, error: error.message || "Failed to load items" }, { status: 500 }),
      ["GET", "POST", "OPTIONS"]
    );
  }
}

export async function POST(request) {
  try {
    // TODO: Extract body, validate using validateItemPayload, create via itemService
    return Response.json({ success: false, error: "Not implemented" }, { status: 501 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

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

    const customers = await prisma.customer.findMany({
      where: search
        ? {
            OR: [
              { first_name: { contains: search, mode: "insensitive" } },
              { last_name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          }
        : undefined,
      include: {
        sales: {
          select: { sales_date: true },
        },
      },
      orderBy: { customer_id: "desc" },
      take: 50,
    });

    const formatted = customers.map((customer) => {
      const lastSale = customer.sales
        .map((s) => s.sales_date)
        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

      return {
        customerId: customer.customer_id,
        name: `${customer.first_name} ${customer.last_name}`,
        email: customer.email,
        phone: customer.phone,
        purchases: customer.sales.length,
        lastPurchase: lastSale ? new Date(lastSale).toISOString() : null,
      };
    });

    return withCors(
      request,
      Response.json({ success: true, customers: formatted }, { status: 200 }),
      ["GET", "POST", "OPTIONS"]
    );
  } catch (error) {
    return withCors(
      request,
      Response.json({ success: false, error: error.message || "Failed to load customers" }, { status: 500 }),
      ["GET", "POST", "OPTIONS"]
    );
  }
}

export async function POST(request) {
  try {
    // TODO: Extract body, validate using validateCustomerPayload
    // Check permissions (MANAGER/ADMIN), call customerService.createCustomer
    // Log audit event: {action: 'CREATE_CUSTOMER', resourceId, userId}
    // Return created customer with 201 status
    return Response.json({ success: false, error: "Not implemented" }, { status: 501 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

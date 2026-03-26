import { createPrismaClient } from "@/lib/prisma";

export async function GET() {
  const prisma = createPrismaClient();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message: error?.message || "Prisma query failed",
      },
      { status: 500 }
    );
  }
}

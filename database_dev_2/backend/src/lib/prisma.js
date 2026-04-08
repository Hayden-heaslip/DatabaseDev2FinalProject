import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from '../../generated/prisma/client';

let prismaSingleton = null;

export function createPrismaClient() {
  if (prismaSingleton) {
    return prismaSingleton;
  }

  // Prefer pooled URL first because it is generally more stable across varied local networks.
  const rawConnectionString = String(process.env.DATABASE_URL || process.env.DIRECT_URL || "").trim();
  const connectionString = rawConnectionString.replace(/^["']|["']$/g, "");

  if (!connectionString) {
    throw new Error("DATABASE_URL or DIRECT_URL is missing from .env");
  }

  const pool = new Pool({
    connectionString,
    connectionTimeoutMillis: 8000,
    query_timeout: 10000,
  });
  const adapter = new PrismaPg(pool);
  prismaSingleton = new PrismaClient({ adapter });
  return prismaSingleton;
}

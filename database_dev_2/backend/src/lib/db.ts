import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../generated/prisma/client';

let _db: InstanceType<typeof PrismaClient> | null = null;

function getDb(): InstanceType<typeof PrismaClient> {
  if (!_db) {
    const connectionString = process.env.DIRECT_URL;

    if (!connectionString) {
      throw new Error('DIRECT_URL is missing from environment');
    }

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    _db = new PrismaClient({ adapter });
  }
  return _db;
}

export const db = new Proxy({} as InstanceType<typeof PrismaClient>, {
  get(_target, prop) {
    return (getDb() as any)[prop];
  },
});
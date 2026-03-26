export async function GET() {
  const db = process.env.DATABASE_URL || "";
  const direct = process.env.DIRECT_URL || "";

  return Response.json(
    {
      cwd: process.cwd(),
      hasDatabaseUrl: Boolean(db),
      hasDirectUrl: Boolean(direct),
      databasePrefix: db ? db.slice(0, 22) : null,
      directPrefix: direct ? direct.slice(0, 22) : null,
    },
    { status: 200 }
  );
}

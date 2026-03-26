# DatabaseDev2FinalProject

This repository contains two apps:

- `frontend`: Next.js UI
- `backend`: Next.js API + Prisma

The root folder is a workspace launcher (not a standalone app).

## Run

From `database_dev_2`:

```bash
npm run dev:frontend
npm run dev:backend
```

## Build / Lint

```bash
npm run build:frontend
npm run build:backend
npm run lint:frontend
npm run lint:backend
```

## Notes

- Frontend API base URL uses `NEXT_PUBLIC_API_BASE_URL`.
- Backend uses `DATABASE_URL` and `JWT_SECRET`.

/**
 * Page Purpose:
 * Landing/redirect page for the app root route.
 *
 * What goes here:
 * - Quick landing message or redirect to /login or /dashboard
 * - Very lightweight startup guidance
 *
 * What should NOT go here:
 * - Full dashboard logic
 * - Complex data fetching
 */
import Link from "next/link";

export default function RootPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        Britannicus Reading Room
      </h1>
      <p className="mt-4 max-w-xl text-zinc-600">
        Start from login or go to dashboard for development.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/login"
          className="rounded-md bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          Login
        </Link>
        <Link
          href="/dashboard"
          className="rounded-md border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}

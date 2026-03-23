/**
 * Page Purpose:
 * Login screen where users authenticate with username/email and password.
 *
 * What goes here:
 * - Login form UI
 * - Validation messaging
 * - Submit handler that calls src/api/auth.ts
 * - Redirect on successful auth
 *
 * What should NOT go here:
 * - RBAC rules (keep in src/lib/permissions.ts)
 * - Reusable auth context state (keep in src/context/AuthContext.tsx)
 */
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="mx-auto w-full max-w-md px-6 py-16">
      <h1 className="mb-4 text-2xl font-semibold text-zinc-900">Login</h1>
      <LoginForm />
    </main>
  );
}

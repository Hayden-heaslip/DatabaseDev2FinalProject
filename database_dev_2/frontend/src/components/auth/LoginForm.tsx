"use client";

/** Login form UI. */
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="space-y-3">
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        className="w-full rounded-md border border-zinc-300 px-3 py-2"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        className="w-full rounded-md border border-zinc-300 px-3 py-2"
      />
      <button type="button" className="rounded-md bg-zinc-900 px-4 py-2 text-white">
        Login
      </button>
    </form>
  );
}

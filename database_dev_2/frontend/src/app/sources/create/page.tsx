 "use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { apiFetch } from "@/api/api";

export default function CreateSourcePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Dealer");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Source name is required.");
      return;
    }

    try {
      setSaving(true);
      await apiFetch("/api/sources", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: email.trim() || undefined,
          phone: phone.trim() || undefined,
          type,
        }),
      });
      router.push("/sources");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create source");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AppShell pageTitle="Create Source" pageDescription="Add a new source/seller profile.">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Name *</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Source name" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="source@example.com"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Phone</span>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input" placeholder="416..." />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Type *</span>
          <select value={type} onChange={(e) => setType(e.target.value)} className="input">
            <option value="Dealer">Dealer</option>
            <option value="Collector">Collector</option>
            <option value="Estate">Estate</option>
            <option value="Source">Other</option>
          </select>
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <div className="flex items-center gap-3">
          <button type="submit" disabled={saving} className="btn-primary px-4 py-2 disabled:opacity-60">
            {saving ? "Saving..." : "Create Source"}
          </button>
          <button type="button" onClick={() => router.push("/sources")} className="btn-secondary px-4 py-2">
            Cancel
          </button>
        </div>
      </form>
    </AppShell>
  );
}

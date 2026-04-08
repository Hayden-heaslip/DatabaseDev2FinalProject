"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { apiFetch } from "@/api/api";

type SourceDetails = {
  sourceId: number;
  name: string;
  type: string;
  email?: string | null;
  phone?: string | null;
};

export default function EditSourcePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Dealer");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await apiFetch<{ success: boolean; source: SourceDetails }>(`/api/sources/${params.id}`);
        if (!active) return;
        setName(data.source.name || "");
        setEmail(data.source.email || "");
        setPhone(data.source.phone || "");
        setType(data.source.type || "Source");
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load source");
      } finally {
        if (active) setLoading(false);
      }
    }
    if (params?.id) load();
    return () => {
      active = false;
    };
  }, [params?.id]);

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
      await apiFetch(`/api/sources/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: trimmedName,
          email: email.trim() || undefined,
          phone: phone.trim() || undefined,
          type,
        }),
      });
      router.push(`/sources/${params.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update source");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AppShell pageTitle={`Edit Source #${params.id}`} pageDescription="Update source details.">
      {loading ? (
        <p className="text-sm text-zinc-600">Loading source...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Name *</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="input" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Phone</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Type</span>
            <select value={type} onChange={(e) => setType(e.target.value)} className="input">
              <option value="Dealer">Dealer</option>
              <option value="Collector">Collector</option>
              <option value="Estate">Estate</option>
              <option value="Source">Other</option>
            </select>
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn-primary px-4 py-2 disabled:opacity-60">
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button type="button" onClick={() => router.push(`/sources/${params.id}`)} className="btn-secondary px-4 py-2">
              Cancel
            </button>
          </div>
        </form>
      )}
    </AppShell>
  );
}

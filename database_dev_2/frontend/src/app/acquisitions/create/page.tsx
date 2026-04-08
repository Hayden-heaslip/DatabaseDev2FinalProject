"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { apiFetch } from "@/api/api";

type SourceOption = {
  sourceId: number;
  name: string;
  type: string;
};

type ItemOption = {
  itemId: number;
  title: string;
};

export default function CreateAcquisitionPage() {
  const router = useRouter();
  const [sources, setSources] = useState<SourceOption[]>([]);
  const [items, setItems] = useState<ItemOption[]>([]);
  const [sourceId, setSourceId] = useState("");
  const [itemId, setItemId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const [sourceRes, itemRes] = await Promise.all([
          apiFetch<{ success: boolean; sources: SourceOption[] }>("/api/sources"),
          apiFetch<{ success: boolean; items: ItemOption[] }>("/api/items"),
        ]);
        if (!active) return;
        setSources(sourceRes.sources || []);
        setItems(itemRes.items || []);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load options");
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const parsedSourceId = Number(sourceId);
    const parsedItemId = Number(itemId);
    if (!Number.isInteger(parsedSourceId) || parsedSourceId <= 0) {
      setError("Please select a source.");
      return;
    }
    if (!Number.isInteger(parsedItemId) || parsedItemId <= 0) {
      setError("Please select an item.");
      return;
    }

    try {
      setSaving(true);
      await apiFetch("/api/acquisitions", {
        method: "POST",
        body: JSON.stringify({ sourceId: parsedSourceId, itemId: parsedItemId }),
      });
      router.push("/acquisitions");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to record acquisition");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AppShell pageTitle="Record Acquisition" pageDescription="Create a new acquisition record.">
      {loading ? (
        <p className="text-sm text-zinc-600">Loading sources and items...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Source *</span>
            <select value={sourceId} onChange={(e) => setSourceId(e.target.value)} className="input">
              <option value="">Select source</option>
              {sources.map((source) => (
                <option key={source.sourceId} value={source.sourceId}>
                  {source.name} ({source.type})
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Item *</span>
            <select value={itemId} onChange={(e) => setItemId(e.target.value)} className="input">
              <option value="">Select item</option>
              {items.map((item) => (
                <option key={item.itemId} value={item.itemId}>
                  #{item.itemId} - {item.title}
                </option>
              ))}
            </select>
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex items-center gap-3">
            <button type="submit" disabled={saving} className="btn-primary px-4 py-2 disabled:opacity-60">
              {saving ? "Saving..." : "Record Acquisition"}
            </button>
            <button type="button" onClick={() => router.push("/acquisitions")} className="btn-secondary px-4 py-2">
              Cancel
            </button>
          </div>
        </form>
      )}
    </AppShell>
  );
}

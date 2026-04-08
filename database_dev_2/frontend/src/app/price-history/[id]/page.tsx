"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { apiFetch } from "@/api/api";

type PriceHistoryDetail = {
  priceHistoryId: number;
  itemId: number;
  title: string;
  marketValue: number;
  recordedDate: string;
  source: string;
};

export default function PriceHistoryDetailsPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [record, setRecord] = useState<PriceHistoryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const result = await apiFetch<{ success: boolean; priceHistory: PriceHistoryDetail }>(
          `/api/price-history/${params.id}`
        );
        if (active) setRecord(result.priceHistory);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load price history details");
      } finally {
        if (active) setLoading(false);
      }
    }
    if (params?.id) load();
    return () => {
      active = false;
    };
  }, [params?.id]);

  return (
    <AppShell pageTitle={`Price History #${params.id}`} pageDescription="View detailed price history record.">
      {loading ? <p className="text-sm text-zinc-600">Loading details...</p> : null}
      {!loading && error ? <p className="text-sm text-red-600">{error}</p> : null}

      {!loading && !error && record ? (
        <div className="space-y-5">
          <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 border-b border-stone-200 pb-2 text-base font-bold text-slate-900">Record Details</h2>
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <p><span className="font-medium">Price History ID:</span> {record.priceHistoryId}</p>
              <p><span className="font-medium">Item ID:</span> {record.itemId}</p>
              <p><span className="font-medium">Item Name:</span> {record.title}</p>
              <p><span className="font-medium">Market Value:</span> ${Number(record.marketValue).toFixed(2)}</p>
              <p>
                <span className="font-medium">Recorded Date:</span>{" "}
                {record.recordedDate ? new Date(record.recordedDate).toLocaleDateString("en-CA") : "-"}
              </p>
              <p><span className="font-medium">Source:</span> {record.source}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => router.push("/price-history")} className="btn-secondary px-5 py-2.5">
              Back to Price History
            </button>
          </div>
        </div>
      ) : null}
    </AppShell>
  );
}

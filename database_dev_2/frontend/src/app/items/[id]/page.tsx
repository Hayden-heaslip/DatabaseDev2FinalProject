"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { API_BASE_URL } from "@/api/api";
import { useAuth } from "@/context/AuthContext";
import { canReadPricing, canReadProvenance } from "@/lib/permissions";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE_URL}/api/items/${id}`, {
          credentials: "include",
        });

        const data = await res.json();
        setItem(data.item);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) load();
  }, [id]);

  function formatCurrency(value: unknown) {
    const amount = Number(value);
    if (!Number.isFinite(amount)) return "N/A";
    return `$${amount.toFixed(2)}`;
  }

  function formatDate(value: unknown) {
    if (!value) return "N/A";
    const date = new Date(String(value));
    if (Number.isNaN(date.getTime())) return "N/A";
    return date.toLocaleDateString();
  }

  function formatText(value: unknown) {
    if (value === null || value === undefined || value === "") return "N/A";
    return String(value);
  }

  // -----------------------------
  // LOADING
  // -----------------------------
  if (loading) {
    return (
      <AppShell pageTitle="Loading...">
        <div className="p-6 text-sm text-slate-500">Loading item...</div>
      </AppShell>
    );
  }

  // -----------------------------
  // NOT FOUND
  // -----------------------------
  if (!item) {
    return (
      <AppShell pageTitle="Item not found">
        <div className="p-6 text-red-500">Item not found</div>
      </AppShell>
    );
  }

  // -----------------------------
  // MAIN UI
  // -----------------------------
  const role = String(user?.role || "").toLowerCase();
  const showPricing = canReadPricing(role);
  const showProvenance = canReadProvenance(role);

  return (
    <AppShell pageTitle={item.title} pageDescription="Full inventory record and provenance context.">
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#d8d2c2] bg-gradient-to-r from-[#fffdf8] to-[#f7f2e7] p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl font-semibold text-[#173c35]">{item.title}</h2>
              <p className="mt-1 text-sm text-[#556a63]">Item #{item.item_id} in curated inventory</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[#d5cfbc] bg-[#f6f2e7] px-3 py-1 text-xs font-medium text-[#334d45]">
                {formatText(item.category)}
              </span>
              <span className="rounded-full border border-[#cfe0da] bg-[#edf7f4] px-3 py-1 text-xs font-medium text-[#245145]">
                {formatText(item.condition)}
              </span>
              <span className="rounded-full border border-[#ddd7c5] bg-[#fffaf0] px-3 py-1 text-xs font-medium text-[#5b4a25]">
                {formatText(item.status)}
              </span>
            </div>
          </div>
          <div className={`mt-4 grid gap-3 ${showPricing ? "md:grid-cols-3" : "md:grid-cols-1"}`}>
            {showPricing && (
              <div className="data-card p-3">
                <p className="data-label">Acquisition Cost</p>
                <p className="mt-1 text-lg font-semibold text-[#1f3f38]">{formatCurrency(item.acquisition_cost)}</p>
              </div>
            )}
            {showPricing && (
              <div className="data-card p-3">
                <p className="data-label">Current Selling Price</p>
                <p className="mt-1 text-lg font-semibold text-[#1f3f38]">{formatCurrency(item.selling_price)}</p>
              </div>
            )}
            <div className="data-card p-3">
              <p className="data-label">Date Acquired</p>
              <p className="mt-1 text-lg font-semibold text-[#1f3f38]">{formatDate(item.acquisition_date)}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => router.push("/items")} className="btn-secondary px-3 py-2 text-sm">
              Back to Items
            </button>
            <button type="button" onClick={() => router.push(`/items/${item.item_id}/edit`)} className="btn-primary px-3 py-2 text-sm">
              Edit Item
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <section className="data-card p-5">
              <h3 className="brand-serif text-xl font-semibold text-[#183f36]">Basic Information</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div>
                  <p className="data-label">Category</p>
                  <p className="data-value">{formatText(item.category)}</p>
                </div>
                <div>
                  <p className="data-label">Condition</p>
                  <p className="data-value">{formatText(item.condition)}</p>
                </div>
                <div>
                  <p className="data-label">Status</p>
                  <p className="data-value">{formatText(item.status)}</p>
                </div>
                <div>
                  <p className="data-label">Source</p>
                  <p className="data-value">{formatText(item.acquisition?.source?.name)}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="data-label">Description</p>
                  <p className="data-value">{formatText(item.description)}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="data-label">Internal Notes</p>
                  <p className="data-value">{formatText(item.note)}</p>
                </div>
              </div>
            </section>

            {item.book && (
              <section className="data-card p-5">
                <h3 className="brand-serif text-xl font-semibold text-[#183f36]">Book Details</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="data-label">Author</p>
                    <p className="data-value">{item.book.author?.name || `ID ${item.book.author_id}`}</p>
                  </div>
                  <div>
                    <p className="data-label">Publisher</p>
                    <p className="data-value">{item.book.publisher?.name || `ID ${item.book.publisher_id}`}</p>
                  </div>
                  <div>
                    <p className="data-label">Publishing Year</p>
                    <p className="data-value">{formatDate(item.book.publishing_year)}</p>
                  </div>
                  <div>
                    <p className="data-label">Edition</p>
                    <p className="data-value">{formatText(item.book.edition)}</p>
                  </div>
                  <div>
                    <p className="data-label">ISBN</p>
                    <p className="data-value">{formatText(item.book.isbn)}</p>
                  </div>
                  <div>
                    <p className="data-label">Binding Type</p>
                    <p className="data-value">{formatText(item.book.binding_type)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="data-label">Genre</p>
                    <p className="data-value">{formatText(item.book.genre)}</p>
                  </div>
                </div>
              </section>
            )}

            {item.map && (
              <section className="data-card p-5">
                <h3 className="brand-serif text-xl font-semibold text-[#183f36]">Map Details</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="data-label">Cartographer</p>
                    <p className="data-value">{formatText(item.map.cartographer?.name)}</p>
                  </div>
                  <div>
                    <p className="data-label">Publisher</p>
                    <p className="data-value">{formatText(item.map.publisher?.name)}</p>
                  </div>
                  <div>
                    <p className="data-label">Publishing Year</p>
                    <p className="data-value">{formatDate(item.map.publishing_year)}</p>
                  </div>
                  <div>
                    <p className="data-label">Map Type</p>
                    <p className="data-value">{formatText(item.map.map_type)}</p>
                  </div>
                  <div>
                    <p className="data-label">Scale</p>
                    <p className="data-value">{formatText(item.map.scale)}</p>
                  </div>
                </div>
              </section>
            )}

            {item.periodical && (
              <section className="data-card p-5">
                <h3 className="brand-serif text-xl font-semibold text-[#183f36]">Magazine Details</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="data-label">Publisher</p>
                    <p className="data-value">{formatText(item.periodical.publisher?.name)}</p>
                  </div>
                  <div>
                    <p className="data-label">Issue</p>
                    <p className="data-value">{formatText(item.periodical.issue_number)}</p>
                  </div>
                  <div>
                    <p className="data-label">Issue Date</p>
                    <p className="data-value">{formatDate(item.periodical.issue_date)}</p>
                  </div>
                  <div>
                    <p className="data-label">Subject Coverage</p>
                    <p className="data-value">{formatText(item.periodical.subject_coverage)}</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="space-y-4">
            {item.image_url && (
              <section className="data-card p-4">
                <h3 className="brand-serif text-lg font-semibold text-[#183f36]">Item Image</h3>
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="mt-3 max-h-72 w-full rounded-lg border border-slate-200 object-contain"
                />
              </section>
            )}

            {showProvenance && Array.isArray(item.provenance) && item.provenance.length > 0 && (
              <section className="data-card p-4">
                <h3 className="brand-serif text-lg font-semibold text-[#183f36]">Provenance</h3>
                <div className="mt-3 space-y-3 text-sm">
                  {item.provenance.map((entry: any) => (
                    <div key={entry.provenance_id} className="rounded-lg border border-[#e6e2d6] bg-[#fdfbf6] p-3">
                      <p className="font-medium text-[#29423c]">{entry.previous_owner}</p>
                      <p className="mt-1 text-[#5e746d]">
                        {formatDate(entry.start_date)} - {entry.end_date ? formatDate(entry.end_date) : "Present"}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {showPricing && Array.isArray(item.price_history) && item.price_history.length > 0 && (
              <section className="data-card p-4">
                <h3 className="brand-serif text-lg font-semibold text-[#183f36]">Price History</h3>
                <div className="mt-3 space-y-3 text-sm">
                  {item.price_history.map((entry: any) => (
                    <div key={entry.price_history_id} className="rounded-lg border border-[#e6e2d6] bg-[#fdfbf6] p-3">
                      <p className="font-medium text-[#29423c]">{formatCurrency(entry.market_value)}</p>
                      <p className="mt-1 text-[#5e746d]">
                        {formatDate(entry.recorded_date)} - {formatText(entry.source)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
/**
 * Page Purpose:
 * List all customers and support searching/filtering.
 *
 * What goes here:
 * - Customer list/table
 * - Search and type filters
 * - Navigation to customer details/create
 */
"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { API_BASE_URL } from "@/api/api";

type CustomerRow = {
  customerId: number;
  name: string;
  email: string | null;
  phone: string | null;
  purchases: number;
  lastPurchase: string | null;
};

export default function CustomersPage() {
  const [rows, setRows] = useState<CustomerRow[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const query = search ? `?search=${encodeURIComponent(search)}` : "";
        const res = await fetch(`${API_BASE_URL}/api/customers${query}`, { credentials: "include" });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load customers");
        if (active) setRows(data.customers ?? []);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load customers");
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [search]);

  return (
    <AppShell pageTitle="Customers" pageDescription="Track customers and their activity.">
      <section className="space-y-4">
        <div className="grid gap-3 md:grid-cols-4">
          <input
            placeholder="Search customer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <select className="rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option>All Types</option>
            <option>Casual Buyer</option>
            <option>Collector</option>
            <option>Dealer</option>
          </select>
          <input
            placeholder="Email or phone"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
            + New Customer
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th className="px-3 py-2 font-medium">Customer ID</th>
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Type</th>
                <th className="px-3 py-2 font-medium">Email</th>
                <th className="px-3 py-2 font-medium">Phone</th>
                <th className="px-3 py-2 font-medium">Purchases</th>
                <th className="px-3 py-2 font-medium">Last Purchase</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={7} className="px-3 py-10 text-center text-slate-500">
                    Loading customers...
                  </td>
                </tr>
              )}
              {!loading && error && (
                <tr>
                  <td colSpan={7} className="px-3 py-10 text-center text-red-600">
                    {error}
                  </td>
                </tr>
              )}
              {!loading && !error && rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-10 text-center text-slate-500">
                    No customers found.
                  </td>
                </tr>
              )}
              {!loading &&
                !error &&
                rows.map((row) => (
                  <tr key={row.customerId} className="border-t border-slate-100">
                    <td className="px-3 py-2 font-mono text-xs text-slate-600">{row.customerId}</td>
                    <td className="px-3 py-2">{row.name}</td>
                    <td className="px-3 py-2">Customer</td>
                    <td className="px-3 py-2">{row.email || "-"}</td>
                    <td className="px-3 py-2">{row.phone || "-"}</td>
                    <td className="px-3 py-2">{row.purchases}</td>
                    <td className="px-3 py-2">
                      {row.lastPurchase ? new Date(row.lastPurchase).toLocaleDateString("en-CA") : "-"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}

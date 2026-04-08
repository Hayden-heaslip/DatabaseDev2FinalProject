"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { apiFetch } from "@/api/api";

type RoleOption = {
  roleId: number;
  roleName: string;
};

type UserDetail = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  isActive: boolean;
};

export default function EditUserPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [roles, setRoles] = useState<RoleOption[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const [userRes, rolesRes] = await Promise.all([
          apiFetch<{ success: boolean; user: UserDetail }>(`/api/users/${params.id}`),
          apiFetch<{ success: boolean; roles: RoleOption[] }>("/api/users"),
        ]);
        if (!active) return;
        setFirstName(userRes.user.firstName || "");
        setLastName(userRes.user.lastName || "");
        setEmail(userRes.user.email || "");
        setRoleId(String(userRes.user.roleId || ""));
        setIsActive(Boolean(userRes.user.isActive));
        setRoles(rolesRes.roles || []);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load user");
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
    const parsedRoleId = Number(roleId);
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("First name, last name, and email are required.");
      return;
    }
    if (!Number.isInteger(parsedRoleId) || parsedRoleId <= 0) {
      setError("Please select a valid role.");
      return;
    }

    try {
      setSaving(true);
      await apiFetch(`/api/users/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          roleId: parsedRoleId,
          isActive,
        }),
      });
      router.push("/users");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update user");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AppShell pageTitle={`Edit User #${params?.id || ""}`} pageDescription="Update user role and status.">
      {loading ? (
        <p className="text-sm text-zinc-600">Loading user...</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">First Name *</span>
              <input className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Last Name *</span>
              <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Email *</span>
              <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Role *</span>
              <select className="input" value={roleId} onChange={(e) => setRoleId(e.target.value)}>
                <option value="">Select role</option>
                {roles.map((role) => (
                  <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 pt-7">
              <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
              <span className="text-sm">Active</span>
            </label>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="btn-primary px-4 py-2 disabled:opacity-50">
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <button type="button" onClick={() => router.push("/users")} className="btn-secondary px-4 py-2">
              Cancel
            </button>
          </div>
        </form>
      )}
    </AppShell>
  );
}

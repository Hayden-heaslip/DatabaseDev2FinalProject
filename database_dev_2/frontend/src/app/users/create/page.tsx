"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { apiFetch } from "@/api/api";

type RoleOption = {
  roleId: number;
  roleName: string;
};

export default function CreateUserPage() {
  const router = useRouter();
  const [roles, setRoles] = useState<RoleOption[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        const data = await apiFetch<{ success: boolean; roles: RoleOption[] }>("/api/users");
        if (!active) return;
        setRoles(data.roles || []);
        const managerRole = (data.roles || []).find((r) => r.roleName === "manager");
        if (managerRole) setRoleId(String(managerRole.roleId));
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load roles");
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
    const parsedRoleId = Number(roleId);
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setError("First name, last name, email, and password are required.");
      return;
    }
    if (!Number.isInteger(parsedRoleId) || parsedRoleId <= 0) {
      setError("Please select a role.");
      return;
    }

    try {
      setSaving(true);
      await apiFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          password,
          roleId: parsedRoleId,
          isActive,
        }),
      });
      router.push("/users");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create user");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AppShell pageTitle="Create User" pageDescription="Add a new system user account.">
      {loading ? (
        <p className="text-sm text-zinc-600">Loading roles...</p>
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
              <span className="mb-1 block text-sm font-medium">Password *</span>
              <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
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
              {saving ? "Creating..." : "Create User"}
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

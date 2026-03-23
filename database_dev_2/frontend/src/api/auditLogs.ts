/** Audit log API calls. */
import { apiFetch } from "@/api/api";

export async function getAuditLogs() {
  return apiFetch("/audit-logs");
}

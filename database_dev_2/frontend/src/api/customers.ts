/** Customer API calls. */
import { apiFetch } from "@/api/api";

export async function getCustomers() {
  return apiFetch("/customers");
}

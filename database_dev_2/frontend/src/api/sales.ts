/** Sale API calls. */
import { apiFetch } from "@/api/api";

export async function getSales() {
  return apiFetch("/sales");
}

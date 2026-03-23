/** Source API calls. */
import { apiFetch } from "@/api/api";

export async function getSources() {
  return apiFetch("/sources");
}

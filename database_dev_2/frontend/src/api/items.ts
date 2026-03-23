/** Item API calls. */
import { apiFetch } from "@/api/api";

export async function getItems() {
  return apiFetch("/items");
}

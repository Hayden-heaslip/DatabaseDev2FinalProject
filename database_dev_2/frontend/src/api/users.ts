/** User management API calls. */
import { apiFetch } from "@/api/api";

export async function getUsers() {
  return apiFetch("/users");
}

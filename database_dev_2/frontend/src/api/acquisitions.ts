/** Acquisition API calls. */
import { apiFetch } from "@/api/api";

export async function getAcquisitions() {
  return apiFetch("/acquisitions");
}

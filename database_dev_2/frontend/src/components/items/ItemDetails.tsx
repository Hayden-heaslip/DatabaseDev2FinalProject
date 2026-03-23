/** Display one item cleanly. */
export function ItemDetails({ itemId }: { itemId: string }) {
  return <p className="text-sm text-zinc-600">Item details for #{itemId}.</p>;
}

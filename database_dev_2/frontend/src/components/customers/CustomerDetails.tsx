/** Display one customer. */
export function CustomerDetails({ customerId }: { customerId: string }) {
  return <p className="text-sm text-zinc-600">Customer details for #{customerId}.</p>;
}

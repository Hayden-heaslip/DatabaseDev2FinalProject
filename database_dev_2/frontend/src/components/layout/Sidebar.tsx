/**
 * Component Purpose:
 * Primary sidebar navigation for authenticated pages.
 *
 * What goes here:
 * - App route links grouped by module
 * - Role-based hidden links if needed
 */
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-56 border-r border-zinc-200 p-4">
      <nav>
        <ul className="space-y-2 bg-transparent">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/items">Items</Link></li>
          <li><Link href="/customers">Customers</Link></li>
          <li><Link href="/sources">Sources</Link></li>
          <li><Link href="/acquisitions">Acquisitions</Link></li>
          <li><Link href="/sales">Sales</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><Link href="/audit-logs">Audit Logs</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

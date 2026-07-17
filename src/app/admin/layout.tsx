import type { Metadata } from "next";
import Link from "next/link";
import { logoutAdmin } from "@/actions/admin";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin Panel - JOHONGIR Portfolio",
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // Agar admin bo'lmasa, demak bu login sahifasi (middleware ruxsat bergan)
  if (!session?.user?.isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col p-4">
        <div className="text-xl font-bold tracking-tight mb-8 mt-4 px-2">
          JOHONGIR <span className="text-blue-500">Admin</span>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          <Link href="/admin" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors text-sm font-medium">
            📊 Dashboard
          </Link>
          <Link href="/admin/messages" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors text-sm font-medium">
            📬 Xabarlar
          </Link>
          <Link href="/admin/projects" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors text-sm font-medium">
            💼 Loyihalar
          </Link>
          <Link href="/" target="_blank" className="px-4 py-3 rounded-xl hover:bg-zinc-800 transition-colors text-sm font-medium">
            🌐 Saytni ko'rish
          </Link>
        </nav>
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors text-sm font-medium text-left"
          >
            🚪 Chiqish
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}

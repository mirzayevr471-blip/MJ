import type { Metadata } from "next";
import Link from "next/link";
import { logoutAdmin } from "@/actions/admin";
import { auth } from "@/lib/auth";
import { LayoutDashboard, MessageSquare, Briefcase, ExternalLink, LogOut } from "lucide-react";

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
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Sidebar */}
      <aside className="w-64 m-4 rounded-3xl glass border border-white/10 flex flex-col p-6 shadow-2xl z-10 relative">
        <div className="text-2xl font-black tracking-tight mb-10 text-center">
          JOHONGIR<span className="text-primary">.</span>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-all text-sm font-semibold group">
            <LayoutDashboard size={18} className="text-primary group-hover:scale-110 transition-transform" /> Dashboard
          </Link>
          <Link href="/admin/messages" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-all text-sm font-semibold group">
            <MessageSquare size={18} className="text-blue-400 group-hover:scale-110 transition-transform" /> Xabarlar
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-all text-sm font-semibold group">
            <Briefcase size={18} className="text-purple-400 group-hover:scale-110 transition-transform" /> Loyihalar
          </Link>
          <div className="my-4 border-t border-white/10"></div>
          <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-all text-sm font-semibold group text-white/70 hover:text-white">
            <ExternalLink size={18} className="text-green-400 group-hover:scale-110 transition-transform" /> Saytni ko'rish
          </Link>
        </nav>
        <form action={logoutAdmin} className="mt-auto">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors text-sm font-bold shadow-lg"
          >
            <LogOut size={18} /> Chiqish
          </button>
        </form>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto z-10">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

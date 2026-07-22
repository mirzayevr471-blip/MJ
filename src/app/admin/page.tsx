import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { MessageSquare, Briefcase, Mail } from "lucide-react";

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user?.isAdmin) {
    redirect("/admin/login");
  }

  const [messages, projects] = await Promise.all([
    prisma.message.count(),
    prisma.project.count(),
  ]);
  const unreadMessages = await prisma.message.count({ where: { isRead: false } });
  const recentMessages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Boshqaruv Paneli</h1>
        <p className="text-white/50 font-medium">Xush kelibsiz, {session.user.name}</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="glass border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-all shadow-xl">
          <div className="absolute -right-6 -top-6 text-blue-500/10 group-hover:text-blue-500/20 group-hover:scale-110 transition-all duration-500"><MessageSquare size={140} /></div>
          <div className="relative z-10">
            <div className="text-6xl font-black text-blue-400 mb-2">{messages}</div>
            <div className="text-white/60 font-semibold tracking-wide uppercase text-sm">Jami Xabarlar</div>
          </div>
        </div>
        
        <div className="glass border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-all shadow-xl">
          <div className="absolute -right-6 -top-6 text-red-500/10 group-hover:text-red-500/20 group-hover:scale-110 transition-all duration-500"><Mail size={140} /></div>
          <div className="relative z-10">
            <div className="text-6xl font-black text-red-400 mb-2">{unreadMessages}</div>
            <div className="text-white/60 font-semibold tracking-wide uppercase text-sm">O'qilmagan Xabarlar</div>
          </div>
        </div>
        
        <div className="glass border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-all shadow-xl">
          <div className="absolute -right-6 -top-6 text-green-500/10 group-hover:text-green-500/20 group-hover:scale-110 transition-all duration-500"><Briefcase size={140} /></div>
          <div className="relative z-10">
            <div className="text-6xl font-black text-green-400 mb-2">{projects}</div>
            <div className="text-white/60 font-semibold tracking-wide uppercase text-sm">Faol Loyihalar</div>
          </div>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">So'nggi Xabarlar</h2>
      </div>
      
      <div className="glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {recentMessages.length === 0 ? (
          <div className="p-12 text-center text-white/50 flex flex-col items-center">
            <MessageSquare size={48} className="mb-4 opacity-20" />
            <p className="font-medium">Hozircha xabarlar yo'q</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/50 bg-black/20">
                  <th className="text-left p-6 font-semibold uppercase tracking-wider text-xs">Ism</th>
                  <th className="text-left p-6 font-semibold uppercase tracking-wider text-xs">Email</th>
                  <th className="text-left p-6 font-semibold uppercase tracking-wider text-xs">Xabar</th>
                  <th className="text-left p-6 font-semibold uppercase tracking-wider text-xs">Sana</th>
                  <th className="text-left p-6 font-semibold uppercase tracking-wider text-xs">Holat</th>
                </tr>
              </thead>
              <tbody>
                {recentMessages.map((msg) => (
                  <tr key={msg.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold text-white">{msg.name}</td>
                    <td className="p-6 text-white/70">{msg.email}</td>
                    <td className="p-6 text-white/70 max-w-xs truncate">{msg.content}</td>
                    <td className="p-6 text-white/50 font-mono text-xs">
                      {new Date(msg.createdAt).toLocaleDateString("uz-UZ")}
                    </td>
                    <td className="p-6">
                      {msg.isRead ? (
                        <span className="px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs font-semibold backdrop-blur-md">O'qilgan</span>
                      ) : (
                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-xs font-semibold shadow-[0_0_10px_rgba(59,130,246,0.2)]">Yangi</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

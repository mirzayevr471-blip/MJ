import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

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
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-4xl font-bold text-blue-400">{messages}</div>
          <div className="text-zinc-400 mt-1 text-sm">Jami Xabarlar</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-4xl font-bold text-red-400">{unreadMessages}</div>
          <div className="text-zinc-400 mt-1 text-sm">O'qilmagan</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="text-4xl font-bold text-green-400">{projects}</div>
          <div className="text-zinc-400 mt-1 text-sm">Loyihalar</div>
        </div>
      </div>

      {/* Recent Messages */}
      <h2 className="text-xl font-semibold mb-4">So'nggi Xabarlar</h2>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        {recentMessages.length === 0 ? (
          <div className="p-8 text-center text-zinc-500">Hozircha xabarlar yo'q</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="text-left p-4">Ism</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Xabar</th>
                <th className="text-left p-4">Sana</th>
                <th className="text-left p-4">Holat</th>
              </tr>
            </thead>
            <tbody>
              {recentMessages.map((msg) => (
                <tr key={msg.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                  <td className="p-4 font-medium">{msg.name}</td>
                  <td className="p-4 text-zinc-400">{msg.email}</td>
                  <td className="p-4 text-zinc-400 max-w-xs truncate">{msg.content}</td>
                  <td className="p-4 text-zinc-500 text-xs">
                    {new Date(msg.createdAt).toLocaleDateString("uz-UZ")}
                  </td>
                  <td className="p-4">
                    {msg.isRead ? (
                      <span className="px-2 py-1 bg-zinc-700 text-zinc-400 rounded-full text-xs">O'qilgan</span>
                    ) : (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Yangi</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

import { prisma } from "@/lib/prisma";
import { deleteMessage, markMessageRead } from "@/actions/admin";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function MessagesPage() {
  const session = await auth();
  if (!session?.user?.isAdmin) {
    redirect("/admin/login");
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Xabarlar 📬</h1>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            Hozircha hech kim xabar yubormaganligi yo'q
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-zinc-900 border rounded-2xl p-6 ${
                msg.isRead ? "border-zinc-800" : "border-blue-500/40"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-white">{msg.name}</span>
                    {!msg.isRead && (
                      <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                        Yangi
                      </span>
                    )}
                  </div>
                  <a
                    href={`mailto:${msg.email}`}
                    className="text-sm text-blue-400 hover:underline block mb-3"
                  >
                    {msg.email}
                  </a>
                  <p className="text-zinc-300 text-sm leading-relaxed">{msg.content}</p>
                  <p className="text-zinc-600 text-xs mt-3">
                    {new Date(msg.createdAt).toLocaleString("uz-UZ")}
                  </p>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <a
                    href={`mailto:${msg.email}?subject=Re: Portfolio saytingizdan xabar`}
                    className="px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-medium transition-colors text-center"
                  >
                    ✉️ Javob
                  </a>
                  <form action={markMessageRead.bind(null, msg.id)}>
                    <button
                      type="submit"
                      className="w-full px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-xs font-medium transition-colors"
                    >
                      ✅ O'qildi
                    </button>
                  </form>
                  <form action={deleteMessage.bind(null, msg.id)}>
                    <button
                      type="submit"
                      className="w-full px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium transition-colors"
                    >
                      🗑 O'chirish
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

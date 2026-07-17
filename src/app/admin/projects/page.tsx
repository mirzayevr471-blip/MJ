import { prisma } from "@/lib/prisma";
import { deleteProject, createProject } from "@/actions/admin";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProjectsPage() {
  const session = await auth();
  if (!session?.user?.isAdmin) {
    redirect("/admin/login");
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Loyihalar 💼</h1>
      </div>

      {/* Add Project Form */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-5">➕ Yangi Loyiha Qo'shish</h2>
        <form action={createProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="title"
            required
            placeholder="Loyiha nomi"
            className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <input
            name="category"
            required
            placeholder="Kategoriya (Flutter, Python, IoT...)"
            className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <textarea
            name="description"
            required
            rows={3}
            placeholder="Loyiha tavsifi..."
            className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 md:col-span-2 resize-none"
          />
          <input
            name="tech"
            required
            placeholder="Texnologiyalar (vergul bilan, masalan: Flutter, Firebase, REST API)"
            className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <input
            name="githubUrl"
            placeholder="GitHub URL (ixtiyoriy)"
            className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <input
            name="liveUrl"
            placeholder="Live Demo URL (ixtiyoriy)"
            className="px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all"
            >
              Loyihani Saqlash
            </button>
          </div>
        </form>
      </div>

      {/* Projects List */}
      <div className="grid gap-4">
        {projects.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            Hozircha loyihalar yo'q. Yuqoridagi forma orqali qo'shing!
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(",").map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full text-xs">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <form action={deleteProject.bind(null, project.id)}>
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium transition-colors"
                >
                  🗑 O'chirish
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

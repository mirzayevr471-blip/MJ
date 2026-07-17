"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "Flutter", color: "from-blue-400 to-cyan-400", icon: "📱" },
  { name: "Python", color: "from-yellow-400 to-green-400", icon: "🐍" },
  { name: "Firebase", color: "from-orange-400 to-yellow-400", icon: "🔥" },
  { name: "Supabase", color: "from-green-400 to-emerald-400", icon: "⚡" },
  { name: "Figma", color: "from-purple-400 to-pink-400", icon: "🎨" },
  { name: "GitHub", color: "from-gray-400 to-zinc-400", icon: "🐙" },
  { name: "Docker", color: "from-blue-400 to-blue-600", icon: "🐳" },
  { name: "Linux", color: "from-orange-400 to-red-400", icon: "🐧" },
  { name: "VS Code", color: "from-blue-500 to-indigo-500", icon: "💙" },
  { name: "OpenAI", color: "from-green-400 to-teal-400", icon: "🤖" },
  { name: "Arduino", color: "from-teal-400 to-cyan-400", icon: "⚙️" },
  { name: "ESP32", color: "from-red-400 to-orange-400", icon: "📡" },
  { name: "SQLite", color: "from-blue-300 to-sky-400", icon: "🗄️" },
  { name: "REST API", color: "from-violet-400 to-purple-500", icon: "🔌" },
  { name: "GraphQL", color: "from-pink-400 to-rose-500", icon: "◉" },
  { name: "Telegram", color: "from-sky-400 to-blue-500", icon: "✈️" },
];

export default function TechStack() {
  return (
    <section className="py-24 relative bg-black/5 dark:bg-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-secondary mt-4 max-w-xl mx-auto">
            Men ishlatiydigan texnologiyalar va vositalar
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="glass px-5 py-3 rounded-xl flex items-center gap-2 cursor-default"
            >
              <span className="text-xl">{tech.icon}</span>
              <span className={`font-semibold text-sm bg-gradient-to-r ${tech.color} text-transparent bg-clip-text`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/components/LangProvider";

const projectImages = [
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
];

const projectTech = [
  ["Flutter", "Firebase", "Stripe"],
  ["React", "ESP32", "MQTT"],
  ["Python", "OpenAI", "Aiogram"],
];

const projectCategories = ["Flutter", "IoT", "Telegram Bot"];

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");

  const allLabel = t.projects.all;
  const categories = [allLabel, "Flutter", "Python", "IoT", "Telegram Bot"];

  const projects = t.projects.items.map((item: any, i: number) => ({
    ...item,
    image: projectImages[i],
    tech: projectTech[i],
    category: projectCategories[i],
  }));

  const filteredProjects = projects.filter(
    (p) => filter === "all" || filter === allLabel || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat === allLabel ? "all" : cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  (cat === allLabel && filter === "all") || filter === cat
                    ? "bg-primary text-white"
                    : "glass hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Link href="#" className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors">
                    <Code size={20} />
                  </Link>
                  <Link href="#" className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

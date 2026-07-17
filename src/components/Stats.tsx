"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LangProvider";

const statValues = [
  { value: "50+", icon: "💼" },
  { value: "30+", icon: "😊" },
  { value: "100K+", icon: "💻" },
  { value: "3+", icon: "🚀" },
  { value: "10+", icon: "📱" },
  { value: "20+", icon: "🤖" },
  { value: "40+", icon: "🎨" },
  { value: "∞", icon: "☕" },
];

function Counter({ value, label, icon, index }: { value: string; label: string; icon: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform group"
    >
      <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{icon}</div>
      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
        {value}
      </div>
      <div className="text-secondary text-sm mt-2">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const { t } = useLang();

  const stats = t.stats.items.map((item, i) => ({
    ...item,
    ...statValues[i],
  }));

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.stats.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Counter key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

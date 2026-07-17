"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LangProvider";

const testimonialAuthors = [
  { name: "Alisher Nazarov", role: "CEO", company: "TechHub Uzbekistan", rating: 5, avatar: "AN" },
  { name: "Dilnoza Yusupova", role: "Marketing Director", company: "StartUp UZ", rating: 5, avatar: "DY" },
  { name: "Bobur Mirzaev", role: "CTO", company: "IoT Solutions", rating: 5, avatar: "BM" },
];

export default function Testimonials() {
  const { t } = useLang();

  const testimonials = testimonialAuthors.map((author, i) => ({
    ...author,
    text: t.testimonials.items[i],
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
          <h2 className="text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass p-8 rounded-3xl flex flex-col gap-5 hover:-translate-y-2 transition-transform"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed flex-1">"{t.text}"</p>

              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-secondary text-sm">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

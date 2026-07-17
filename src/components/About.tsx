"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu } from "lucide-react";
import { useLang } from "@/components/LangProvider";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.about.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-foreground/80"
          >
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Smartphone size={32} />
              </div>
              <h3 className="font-semibold text-xl">{t.about.card1Title}</h3>
              <p className="text-sm text-secondary">{t.about.card1Desc}</p>
            </div>
            
            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-purple-500/10 rounded-full text-purple-500">
                <Code2 size={32} />
              </div>
              <h3 className="font-semibold text-xl">{t.about.card2Title}</h3>
              <p className="text-sm text-secondary">{t.about.card2Desc}</p>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform sm:col-span-2">
              <div className="p-4 bg-green-500/10 rounded-full text-green-500">
                <Cpu size={32} />
              </div>
              <h3 className="font-semibold text-xl">{t.about.card3Title}</h3>
              <p className="text-sm text-secondary">{t.about.card3Desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

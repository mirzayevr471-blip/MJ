"use client";

import { motion } from "framer-motion";
import { Smartphone, Code, Layout, Bot, Cpu, Server } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const icons = [
  <Smartphone key="sm" size={32} />,
  <Code key="code" size={32} />,
  <Layout key="layout" size={32} />,
  <Bot key="bot" size={32} />,
  <Cpu key="cpu" size={32} />,
  <Server key="srv" size={32} />,
];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-primary mb-6 relative z-10 group-hover:scale-110 transition-transform origin-left">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
              <p className="text-secondary relative z-10">{service.description}</p>
              
              <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                {t.services.learnMore} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

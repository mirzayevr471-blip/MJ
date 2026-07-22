"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const experienceMeta = [
  { company: "Tech Solutions Inc.", period: "2024 - Present" },
  { company: "Freelance", period: "2022 - 2024" },
  { company: "SmartHome Tech", period: "2021 - 2022" },
];

export default function Experience() {
  const { t } = useLang();

  const experiences = t.experience.items.map((item: any, i: number) => ({
    ...item,
    ...experienceMeta[i],
  }));

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.experience.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2" />
          
          {experiences.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row md:items-center justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary items-center justify-center z-10 shadow-lg shadow-primary/20">
                <Briefcase size={16} className="text-primary" />
              </div>
              
              <div className="absolute -left-[41px] md:hidden w-6 h-6 rounded-full bg-background border-4 border-primary items-center justify-center flex z-10 top-0 shadow-lg shadow-primary/20">
              </div>

              <div className="w-full md:w-5/12 glass p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                <span className="text-sm font-semibold text-primary mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-secondary font-medium mb-3">{exp.company}</h4>
                <p className="text-foreground/80 text-sm">{exp.description}</p>
              </div>
              
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

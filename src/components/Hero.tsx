"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LangProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {t.hero.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">JOHONGIR</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-medium">
            {t.hero.subtitle}
          </p>
          <p className="text-lg max-w-xl text-foreground/80">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="#projects" className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center gap-2">
              {t.hero.viewProjects} <ArrowRight size={18} />
            </Link>
            <Link href="#" className="px-6 py-3 rounded-full glass font-medium hover:bg-white/10 transition-all flex items-center gap-2">
              {t.hero.downloadResume} <Download size={18} />
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-primary/40 overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:shadow-[0_0_80px_rgba(59,130,246,0.6)] transition-shadow duration-500">
            <Image
              src="/jahongir.png"
              alt="Jahongir - Flutter & Python Developer"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

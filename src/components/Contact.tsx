"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { submitContactMessage } from "@/actions/contact";
import { useLang } from "@/components/LangProvider";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useLang();
  const c = t.contact;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const result = await submitContactMessage(formData);
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || c.errorDefault);
    }
  }

  return (
    <section id="contact" className="py-24 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{c.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">{c.subtitle}</h3>
            <p className="text-secondary">{c.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:jahongirmirzayev@gmail.com" className="text-secondary hover:text-primary transition-colors">
                    jahongirmirzayev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{c.phone}</h4>
                  <a href="tel:+998773880819" className="text-secondary hover:text-primary transition-colors">
                    +998 77 388 08 19
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full text-primary">
                  <Send size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Telegram</h4>
                  <a
                    href="https://t.me/Mirzayev_Jahongir_UZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    @Mirzayev_Jahongir_UZ
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 glass rounded-full text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{c.location}</h4>
                  <p className="text-secondary">{c.locationValue}</p>
                </div>
              </div>
            </div>

            <a
              href="https://t.me/Mirzayev_Jahongir_UZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 hover:border-blue-500/60 transition-all group"
            >
              <div className="text-2xl">✈️</div>
              <div>
                <div className="font-semibold text-blue-400">{c.telegramCta}</div>
                <div className="text-sm text-secondary">@Mirzayev_Jahongir_UZ</div>
              </div>
              <div className="ml-auto text-blue-400 group-hover:translate-x-1 transition-transform">→</div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-green-400">{c.successTitle}</h3>
                <p className="text-secondary">{c.successDesc}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  {c.successBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{c.formName}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={c.formNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{c.formEmail}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{c.formMessage}</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder={c.formMessagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? c.formSending : <>{c.formSend} <Send size={20} /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

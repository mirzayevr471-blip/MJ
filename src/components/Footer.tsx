"use client";

import { useLang } from "@/components/LangProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="border-t border-black/10 dark:border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tight mb-3">
              JOHONGIR<span className="text-primary">.</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Flutter Developer · Python Developer · UI/UX Designer · IoT Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{f.quickLinks}</h4>
            <ul className="space-y-2">
              {f.links.map((link: any) => (
                <li key={link.href}>
                  <a href={link.href} className="text-secondary hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{f.contact}</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>
                <a href="https://t.me/Mirzayev_Jahongir_UZ" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  ✈️ @Mirzayev_Jahongir_UZ
                </a>
              </li>
              <li>
                <a href="tel:+998773880819" className="hover:text-primary transition-colors">
                  📞 +998 77 388 08 19
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>{t.contact.locationValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/10 dark:border-white/10">
          <p className="text-secondary text-sm">
            © {currentYear} JOHONGIR Mirzayev. {f.rights}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 glass rounded-full text-sm hover:bg-primary hover:text-white transition-all"
          >
            {f.scrollTop}
          </button>
        </div>
      </div>
    </footer>
  );
}

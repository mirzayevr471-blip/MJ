"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Globe, User, LayoutDashboard, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import { Lang } from "@/lib/translations";
import { useSession, signOut } from "next-auth/react";

const langOptions: { value: Lang; flag: string; label: string }[] = [
  { value: "uz", flag: "🇺🇿", label: "O'zbek" },
  { value: "ru", flag: "🇷🇺", label: "Русский" },
  { value: "en", flag: "🇬🇧", label: "English" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { data: session } = useSession();

  const isAdmin = (session?.user as any)?.isAdmin;
  const isLoggedIn = !!session?.user;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const currentLang = langOptions.find((l) => l.value === lang)!;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          JOHONGIR<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">{t.nav.about}</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">{t.nav.skills}</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen((p) => !p)}
              className="flex items-center gap-2 px-3 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm font-semibold"
            >
              <Globe size={16} />
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 glass rounded-xl overflow-hidden shadow-xl border border-white/10 min-w-[140px]"
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setLang(opt.value); setLangMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/20 transition-colors ${
                        lang === opt.value ? "text-primary font-bold bg-primary/10" : ""
                      }`}
                    >
                      <span className="text-base">{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Auth buttons */}
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((p) => !p)}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:bg-white/10 transition-colors text-sm font-semibold"
              >
                {session?.user?.image ? (
                  <img src={session.user.image} className="w-5 h-5 rounded-full" alt="avatar" />
                ) : (
                  <User size={16} />
                )}
                <span className="max-w-[100px] truncate">{session?.user?.name || "Foydalanuvchi"}</span>
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 glass rounded-xl overflow-hidden shadow-xl border border-white/10 min-w-[180px]"
                  >
                    {isAdmin && (
                      <Link
                        href="/admin"
                        onClick={() => setUserMenuOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/20 transition-colors text-primary font-semibold"
                      >
                        <LayoutDashboard size={16} />
                        <span>Admin Panel</span>
                      </Link>
                    )}
                    <button
                      onClick={() => { setUserMenuOpen(false); signOut({ callbackUrl: "/" }); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-red-500/20 text-red-400 transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Chiqish</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="/admin/login"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
            >
              <User size={16} />
              <span>Kirish</span>
            </Link>
          )}
        </div>

        {/* Mobile right controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile lang switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen((p) => !p)}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors text-sm"
            >
              {currentLang.flag}
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 glass rounded-xl overflow-hidden shadow-xl border border-white/10 min-w-[130px]"
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setLang(opt.value); setLangMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/20 transition-colors ${
                        lang === opt.value ? "text-primary font-bold bg-primary/10" : ""
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile auth */}
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-primary"
                >
                  <LayoutDashboard size={20} />
                </Link>
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="p-2 rounded-full hover:bg-red-500/20 text-red-400 transition-colors"
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <Link
              href="/admin/login"
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-primary"
            >
              <User size={20} />
            </Link>
          )}

          <button
            onClick={() => setMobileMenuOpen((p) => !p)}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4 font-medium">
              {[
                { href: "#about", label: t.nav.about },
                { href: "#skills", label: t.nav.skills },
                { href: "#projects", label: t.nav.projects },
                { href: "#contact", label: t.nav.contact },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-primary font-semibold py-1"
                >
                  <LayoutDashboard size={16} />
                  Admin Panel
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

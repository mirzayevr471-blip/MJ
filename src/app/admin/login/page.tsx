"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions/auth";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (isRegistering) {
      const res = await registerUser(formData);
      if (res.error) {
        setErrorMsg(res.error);
        setIsLoading(false);
        return;
      }
      // Agar ro'yxatdan o'tish muvaffaqiyatli bo'lsa, darhol tizimga kiritamiz
      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInRes?.error) {
        setErrorMsg("Tizimga kirishda xatolik.");
      } else {
        router.push("/admin");
      }
    } else {
      // Login
      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInRes?.error) {
        setErrorMsg("Email yoki parol noto'g'ri.");
      } else {
        router.push("/admin");
      }
    }

    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white mb-2"
          >
            {isRegistering ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-sm"
          >
            {isRegistering
              ? "Yangi akkaunt yarating"
              : "Profilga kirish yoki ijtimoiy tarmoqlar orqali"}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl"
        >
          <div className="space-y-4">
            <button
              onClick={() => {
                setIsLoading(true);
                signIn("google", { callbackUrl: "/admin" });
              }}
              disabled={isLoading}
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white font-medium transition-all group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              )}
              <span>Google orqali {isLoading ? "..." : "kirish"}</span>
            </button>
            
            <button
              onClick={() => {
                setIsLoading(true);
                signIn("facebook", { callbackUrl: "/admin" }); 
              }}
              disabled={isLoading}
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/20 text-[#1877F2] font-medium transition-all group mt-4"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook orqali kirish</span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center">
             <div className="h-px bg-zinc-800 w-full" />
             <span className="px-4 text-xs text-zinc-500 bg-zinc-900/80">YOKI</span>
             <div className="h-px bg-zinc-800 w-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <AnimatePresence>
              {isRegistering && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">Ism</label>
                  <input
                    type="text"
                    name="name"
                    required={isRegistering}
                    placeholder="Ismingiz"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">Parol</label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
            </div>

            {errorMsg && (
              <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-xl text-center border border-red-500/20">
                {errorMsg}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-white text-zinc-950 font-bold transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "Kuting..." : isRegistering ? "Ro'yxatdan o'tish" : "Kirish"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500 mt-6">
            {isRegistering ? "Akkauntingiz bormi? " : "Akkauntingiz yo'qmi? "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-white hover:underline font-medium ml-1"
            >
              {isRegistering ? "Kirish" : "Ro'yxatdan o'tish"}
            </button>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-zinc-600 mt-8"
        >
          {new Date().getFullYear()} © Barcha huquqlar himoyalangan
        </motion.p>
      </motion.div>
    </div>
  );
}

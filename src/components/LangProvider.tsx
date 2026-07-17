"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Lang, translations } from "@/lib/translations";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any;
};

const LangContext = createContext<LangContextType>({
  lang: "uz",
  setLang: () => {},
  t: translations["uz"],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

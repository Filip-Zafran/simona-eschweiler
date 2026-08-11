"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Locale } from "@/lib/types";

const Context = createContext<{ locale: Locale; setLocale: (l: Locale) => void }>({ locale: "de", setLocale: () => {} });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");
  useEffect(() => { const saved = localStorage.getItem("simone-locale"); if (saved === "en") setLocaleState("en"); }, []);
  const setLocale = (l: Locale) => { setLocaleState(l); localStorage.setItem("simone-locale", l); document.documentElement.lang = l; };
  return <Context.Provider value={{ locale, setLocale }}>{children}</Context.Provider>;
}
export const useLanguage = () => useContext(Context);

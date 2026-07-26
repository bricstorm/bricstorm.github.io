import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

function detectInitialLanguage() {
  try {
    const saved = window.localStorage.getItem("bricstorm-lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch (e) {
    // localStorage indisponível (modo privado etc.) — segue com o padrão
  }
  const browserLang = (navigator.language || "pt").toLowerCase();
  return browserLang.startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage);

  useEffect(() => {
    try {
      window.localStorage.setItem("bricstorm-lang", lang);
    } catch (e) {
      // ignora se localStorage não estiver disponível
    }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  const value = {
    lang,
    setLang,
    toggleLanguage,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage precisa ser usado dentro de um LanguageProvider");
  }
  return ctx;
}

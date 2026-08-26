"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

const STORAGE_KEY = "kost59d-lang";
const DEFAULT_LANG: Lang = "id";

type Listener = () => void;
let listeners: Listener[] = [];

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(listener: Listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

/**
 * Snapshot bahasa saat ini. Dibaca via useSyncExternalStore agar aman terhadap
 * hydration mismatch: server (dan first paint client) selalu memakai
 * getServerSnapshot (DEFAULT_LANG), lalu baru sinkron ke localStorage setelahnya.
 */
function getSnapshot(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") return stored;
  } catch {
    // localStorage tidak tersedia (mis. private mode) — abaikan, tetap default.
  }
  return DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

function persistLang(next: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Diamkan jika penyimpanan gagal — bahasa tetap berubah untuk sesi ini.
  }
  emitChange();
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => persistLang(next);
  const toggleLang = () => persistLang(lang === "id" ? "en" : "id");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Shortcut hook: language state + the active translation dictionary. */
export function useTranslation() {
  const { lang, setLang, toggleLang } = useLanguage();
  return { t: translations[lang], lang, setLang, toggleLang };
}

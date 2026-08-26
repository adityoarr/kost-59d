"use client";

import { useTranslation } from "@/lib/i18n/LanguageContext";
import type { Lang } from "@/lib/i18n/translations";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

/**
 * Bar bahasa yang selalu berada di baris paling atas (di atas Header),
 * fixed di seluruh halaman. Dioptimalkan untuk layar mobile (compact, tap target cukup besar).
 */
export default function LanguageToggle() {
  const { lang, setLang, t } = useTranslation();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
      <div className="h-9 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 flex items-center justify-end px-3 gap-1.5">
        <span className="sr-only">{t.languageToggle.label}</span>
        <div
          role="group"
          aria-label={t.languageToggle.label}
          className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5"
        >
          {OPTIONS.map((opt) => {
            const isActive = lang === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLang(opt.code)}
                aria-pressed={isActive}
                className={`px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-full transition-colors duration-150 ${
                  isActive
                    ? "bg-emerald-500 text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

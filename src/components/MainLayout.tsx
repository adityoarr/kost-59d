"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from '@/components/BottomNav';
import LanguageToggle from '@/components/LanguageToggle';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { t } = useTranslation();

  // Pesan default WA (mengikuti bahasa yang aktif)
  const waMessage = encodeURIComponent(t.common.waMessageDefault);
  const waUrl = `https://wa.me/6285755125790?text=${waMessage}`;

  return (
    <div className="relative w-full max-w-md bg-white min-h-screen shadow-xl flex flex-col no-scrollbar overflow-y-auto">
      {/* Bar pilihan bahasa (EN | ID) — selalu di baris paling atas, di atas Header */}
      <LanguageToggle />

      {!isHomePage && <Header />}

      {/* Padding bottom kembali menggunakan pb-20 seperti orisinal bawaanmu.
          Padding top ditambah 36px (h-9 dari LanguageToggle) dari versi sebelumnya. */}
      <main className={`flex-1 p-4 pb-20 ${!isHomePage ? "pt-[116px]" : "pt-9"}`}>
        {children}
        <Footer/>
      </main>

      {/* Floating WhatsApp Button ditambahkan HANYA sebagai overlay */}
      <div className="fixed bottom-24 w-full max-w-md z-40 pointer-events-none px-4 flex justify-end">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-green-500/30 hover:bg-[#20ba5a] hover:-translate-y-1 active:scale-95 transition-all duration-200 flex items-center justify-center"
          aria-label={t.common.whatsappAria}
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
        </a>
      </div>

      <BottomNav />
    </div>
  );
}
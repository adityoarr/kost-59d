"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from '@/components/BottomNav';
import { MessageCircle } from 'lucide-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Pesan default WA
  const waMessage = encodeURIComponent("Halo Ibu Dina, permisi. Saya mau tanya info ketersediaan kamar di Kost Putri, apakah saat ini masih ada yang kosong?");
  const waUrl = `https://wa.me/6285755125790?text=${waMessage}`;

  return (
    <div className="relative w-full max-w-md bg-white min-h-screen shadow-xl flex flex-col no-scrollbar overflow-y-auto">
      {!isHomePage && <Header />}
      
      {/* Padding bottom kembali menggunakan pb-20 seperti orisinal bawaanmu */}
      <main className={`flex-1 p-4 pb-20 ${!isHomePage ? "pt-20" : "pt-0"}`}>
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
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
        </a>
      </div>

      <BottomNav />
    </div>
  );
}
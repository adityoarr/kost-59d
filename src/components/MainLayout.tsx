"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from '@/components/BottomNav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="relative w-full max-w-md bg-white min-h-screen shadow-xl flex flex-col no-scrollbar overflow-y-auto">
      {!isHomePage && <Header />}
      
      <main className={`flex-1 p-4 pb-20 ${!isHomePage ? "pt-20" : "pt-0"}`}>
        {children}

        <Footer/>
      </main>

      <BottomNav />
    </div>
  );
}
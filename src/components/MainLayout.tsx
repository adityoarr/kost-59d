"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from '@/components/BottomNav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="relative w-full max-w-md bg-white min-h-screen shadow-xl flex flex-col no-scrollbar overflow-y-auto">
      {!isHomePage && <Header />}
      
      <main className={`flex-1 pb-20 p-4 ${!isHomePage ? "pt-20" : "pt-4"}`}>
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
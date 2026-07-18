import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kost Putri Ibu Dina Malang | Nyaman, Aman & Strategis",
  description: "Cari kost putri strategis di Malang? Kost Putri Ibu Dina di Jl. Sumbersari IV/59D menawarkan fasilitas lengkap, aman, dan nyaman layaknya rumah sendiri. Yuk, cek sekarang!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-100 flex justify-center min-h-screen antialiased">
        <MainLayout>
            {children}
        </MainLayout>
      </body>
    </html>
  );
}

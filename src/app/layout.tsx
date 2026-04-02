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
  title: "Kost Putri 59D - Ibu Dina Nurmala Sari",
  description: "Kost Putri 59D - Ibu Dina Nurmala Sari di Jl. Sumbersari IV / 59D Kota Malang, Jawa Timur",
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

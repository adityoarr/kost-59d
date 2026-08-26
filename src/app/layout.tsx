import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dipindah dari <style>@import di homepage ke next/font agar tidak
// render-blocking (memperbaiki LCP / Core Web Vitals yang jadi sinyal ranking Google).
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://kostbudina.adityoarr.com";
const SITE_NAME = "Kost Putri Ibu Dina Malang";
const SITE_DESCRIPTION =
  "Cari kost putri strategis di Malang? Kost Putri Ibu Dina di Jl. Sumbersari IV/59D menawarkan fasilitas lengkap, aman, dan nyaman layaknya rumah sendiri. Dekat UB, UM, UIN Malang, ITN, dan UMM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kost Putri Ibu Dina Malang | Nyaman, Aman & Strategis",
    template: "%s | Kost Putri Ibu Dina Malang",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "kost putri malang",
    "kost putri sumbersari",
    "kost dekat ub",
    "kost dekat um",
    "kost dekat uin malang",
    "kost dekat itn malang",
    "kost dekat umm",
    "kost putri ibu dina",
    "kost mahasiswi malang",
  ],
  authors: [{ name: "Ibu Dina" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Kost Putri Ibu Dina Malang | Nyaman, Aman & Strategis",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg", // TODO: ganti dengan foto asli properti, 1200x630px
        width: 1200,
        height: 630,
        alt: "Kost Putri Ibu Dina Malang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kost Putri Ibu Dina Malang | Nyaman, Aman & Strategis",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  // TODO: isi dengan kode verifikasi asli dari Google Search Console
  // verification: { google: "kode-verifikasi-search-console" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Kost Putri Ibu Dina",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+6285755125790",
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sumbersari IV No. 59D",
    addressLocality: "Malang",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.955162704760403,
    longitude: 112.6091644792323,
  },
  hasMap: `https://www.google.com/maps?q=-7.955162704760403,112.6091644792323`,
  priceRange: "$$",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi 24/7", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parkir Motor", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dapur & Kompor", value: true },
    { "@type": "LocationFeatureSpecification", name: "Keamanan", value: true },
  ],
  foundingDate: "2002",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-100 flex justify-center min-h-screen antialiased">
        <LanguageProvider>
          <MainLayout>
              {children}
          </MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}

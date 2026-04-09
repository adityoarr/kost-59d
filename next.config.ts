import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 1. Menyembunyikan identitas bahwa web ini dibuat dengan Next.js
  poweredByHeader: false,

  // 2. Mencegah orang asing membaca struktur kode asli Anda
  productionBrowserSourceMaps: false,

  // 3. Membatasi dari mana gambar boleh diambil (Mencegah SSRF)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 4. Menambahkan Security Headers dasar
  async headers() {
    return [
      {
        source: '/(.*)', // Terapkan ke semua halaman web
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Mencegah web Anda "dibajak" ke dalam frame web lain
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload', // Memaksa pengunjung menggunakan koneksi aman (HTTPS)
          },
        ],
      },
    ];
  },
};

export default nextConfig;

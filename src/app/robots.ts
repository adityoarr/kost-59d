import type { MetadataRoute } from "next";

const SITE_URL = "https://kostbudina.adityoarr.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/resident"], // masih halaman placeholder, lihat metadata di resident/page.tsx
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

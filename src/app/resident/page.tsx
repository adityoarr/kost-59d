import type { Metadata } from "next";
import ResidentContent from "@/components/content/ResidentContent";

// Halaman ini masih berisi fitur placeholder ("segera hadir"),
// di-noindex dulu supaya tidak dianggap thin/duplicate content oleh Google
// sampai konten & fungsinya benar-benar selesai. Hapus block ini saat sudah live.
export const metadata: Metadata = {
  title: "Benefit & Program Alumni",
  robots: { index: false, follow: true },
  alternates: { canonical: "/resident" },
};

export default function Resident() {
  return <ResidentContent />;
}

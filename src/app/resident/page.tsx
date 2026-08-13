import type { Metadata } from "next";
import { MessageCircle, Sparkles, UserCheck } from "lucide-react";

// Halaman ini masih berisi fitur placeholder ("segera hadir"),
// di-noindex dulu supaya tidak dianggap thin/duplicate content oleh Google
// sampai konten & fungsinya benar-benar selesai. Hapus block ini saat sudah live.
export const metadata: Metadata = {
  title: "Benefit & Program Alumni",
  robots: { index: false, follow: true },
  alternates: { canonical: "/resident" },
};

export default function Resident() {
  const message = encodeURIComponent("Halo, Ibu. Masih ingat saya? Saya {isi nama kamu}");
  const whatsappUrl = `https://wa.me/6285755125790?text=${message}`;

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden font-sans text-zinc-900 bg-white">
      <main className="flex flex-1 w-full max-w-2xl mx-auto flex-col px-6 py-2 md:py-2 gap-16 box-border">
        
        {/* Section 1: Promo Benefit Umum */}
        <section className="w-full space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
              <Sparkles size={14} />
              <span>More than just a stay</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Gak cuma nge-kost aja, <br />
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Dapatkan benefit eksklusifnya!
              </span>
            </h1>
            <p className="text-zinc-600 leading-relaxed max-w-prose">
              Di sini kamu bisa dapat banyak keuntungan tambahan selain tempat tinggal yang nyaman. Penasaran? Yuk, cek sekarang!
            </p>
          </div>

          {/* Form & Tombol Benefit - Hidden Mode */}
          <div className="w-full max-w-md p-6 border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 text-center">
            <p className="text-sm font-medium text-zinc-500">
              🚀 <span className="italic">Hang tight!</span> Fitur cek benefit lagi kita racik biar makin gokil. Tungguin ya!
            </p>
            {/* Form disembunyikan sementara */}
            <form className="hidden mt-4 space-y-3">
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-zinc-200" />
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">Cek Benefit</button>
            </form>
          </div>
        </section>

        <hr className="border-zinc-200 w-full" />

        {/* Section 2: Alumni Kost Putri 59D */}
        <section className="w-full space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium">
              <UserCheck size={14} />
              <span>Special for Alumni</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Buat kamu Alumni Kost Putri 59D
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Terhitung dari angkatan 2004 sampai hari ini, ada <span className="font-semibold text-rose-500 italic underline decoration-rose-300">loyalty rewards</span> khusus buat kamu.
            </p>
          </div>

          <div className="w-full max-w-md space-y-4">
            {/* Form & Tombol Alumni - Hidden Mode */}
            <div className="w-full p-6 border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 text-center">
              <p className="text-sm font-medium text-zinc-500">
                ✨ <span className="italic">Almost there!</span> Sistem klaim reward alumni lagi otw. Sabar ya kak!
              </p>
              {/* Kontainer input disembunyikan sementara */}
              <div className="hidden space-y-3 mt-4">
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-zinc-200" />
                <button className="w-full bg-zinc-900 text-white py-3 rounded-xl">Klaim Sekarang</button>
              </div>
            </div>

            <div className="relative py-4 w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-200"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-500">Atau hubungi kami</span>
              </div>
            </div>

            <div className="space-y-4 text-center w-full">
              <p className="text-sm text-zinc-500 italic">
                Nomor lama sudah tidak aktif atau tidak terdaftar? Tenang, Ibu Kost orangnya masih sama kok.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1 active:scale-[0.98]"
              >
                <MessageCircle fill="currentColor" /> Chat Ibu Kost Langsung
              </a>
            </div>
          </div>
        </section>
      </main>     
    </div>
  );
}
import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description:
    'Chat langsung dengan Ibu Kost via WhatsApp untuk cek ketersediaan kamar, harga, dan slot parkir di Kost Putri Ibu Dina, Jl. Sumbersari IV No. 59D Malang. Respon cepat setiap hari 07.00-20.00 WIB.',
  alternates: { canonical: '/contact' },
};

const contacts = [
  {
    id: 'wa-sewa',
    icon: MessageCircle,
    label: 'Tanya Kamar & Harga',
    desc: 'Mau cek ketersediaan kamar, daftar harga, atau janjian survei? Chat aja, langsung kita balas!',
    cta: 'Chat Sekarang →',
    // Pesan: "Halo Ibu Dina, permisi. Saya mau tanya info ketersediaan kamar di Kost Putri, apakah saat ini masih ada yang kosong?"
    href: 'https://wa.me/6285755125790?text=Halo%20Ibu%20Dina%2C%20permisi.%20Saya%20mau%20tanya%20info%20ketersediaan%20kamar%20di%20Kost%20Putri%2C%20apakah%20saat%20ini%20masih%20ada%20yang%20kosong%3F',
    accent: 'from-green-500 to-emerald-500',
    badge: 'Fast Response',
    badgeColor: 'bg-green-100 text-green-700',
    iconBg: 'bg-green-50 text-green-500',
  },
  {
    id: 'wa-parkir',
    icon: Phone,
    label: 'Cek Slot Parkir',
    desc: 'Bawa motor? Yuk pastiin dulu ketersediaan slot parkir sebelum kamu fix pindahan biar aman!',
    cta: 'Tanya Parkir →',
    // Pesan: "Halo Ibu Dina, permisi. Saya calon penghuni Kost Putri, mau tanya apakah slot parkir untuk motor saat ini masih tersedia?"
    href: 'https://wa.me/6285755125790?text=Halo%20Ibu%20Dina%2C%20permisi.%20Saya%20calon%20penghuni%20Kost%20Putri%2C%20mau%20tanya%20apakah%20slot%20parkir%20untuk%20motor%20saat%20ini%20masih%20tersedia%3F',
    accent: 'from-amber-500 to-orange-500',
    badge: 'Slot Terbatas',
    badgeColor: 'bg-amber-100 text-amber-700',
    iconBg: 'bg-amber-50 text-amber-500',
  },
];

const info = [
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Jl. Sumbersari IV No. 59D, Malang',
    sub: 'Super strategis, dekat berbagai kampus',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Clock,
    label: 'Jam Operasional Chat',
    value: 'Buka Setiap Hari',
    sub: 'Respon secepat kilat di jam 07.00 – 20.00 WIB',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
];

export default function Contact() {
  return (
    <div className="px-4 py-2 space-y-6">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-violet-600 to-purple-700 p-5 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-6" />
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <span className="text-5xl opacity-30">💬</span>
        </div>
        <p className="text-xs font-semibold text-purple-200 uppercase tracking-widest mb-1">Kost Putri Ibu Dina Malang</p>
        <h1 className="text-xl font-bold leading-tight mb-1">
          Yuk, Ngobrol Dulu!<br />Kami Siap Bantu 🙌
        </h1>
        <p className="text-sm text-purple-100">
          Nggak perlu sungkan — tinggal tap, langsung terhubung via WhatsApp
        </p>
      </div>

      {/* CTA Buttons */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-violet-500 rounded-full" />
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Hubungi Kami</h2>
        </div>

        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-violet-100 active:scale-[0.98] transition-all duration-150"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.iconBg} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <p className="text-sm font-bold text-gray-800">{c.label}</p>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-snug mb-3">{c.desc}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-bold text-white bg-linear-to-r ${c.accent} px-4 py-1.5 rounded-full shadow-sm`}>
                    {c.cta}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </section>

      {/* Info Grid */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-rose-400 rounded-full" />
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Info Penting</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
          {info.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800 truncate">{item.value}</p>
                  <p className="text-[11px] text-gray-400">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social proof / trust note */}
      <div className="bg-linear-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
        <span className="text-xl">⭐</span>
        <div>
          <p className="text-sm font-semibold text-indigo-800">Jadi Hunian Favorit Sejak 2002</p>
          <p className="text-xs text-indigo-600 mt-0.5">
            Lingkungan aman, nyaman, dan strategis. Cocok banget buat kamu yang cari ketenangan ekstra di Malang!
          </p>
        </div>
      </div>

    </div>
  );
}
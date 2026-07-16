import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const contacts = [
  {
    id: 'wa-sewa',
    icon: MessageCircle,
    label: 'Tanya Kamar & Sewa',
    desc: 'Cek ketersediaan kamar, harga, atau mau survei langsung? Chat sekarang, fast response!',
    cta: 'Chat Sekarang →',
    href: 'https://wa.me/6285755125790?text=Halo%20bu%2C%20saya%20mau%20tanya%20soal%20kamar%20kost%20ya%20%F0%9F%99%8F',
    accent: 'from-green-500 to-emerald-500',
    badge: 'Fast Response',
    badgeColor: 'bg-green-100 text-green-700',
    iconBg: 'bg-green-50 text-green-500',
  },
  {
    id: 'wa-parkir',
    icon: Phone,
    label: 'Tanya Slot Parkir',
    desc: 'Slot parkir motor terbatas. Konfirmasi dulu sebelum pindahan biar nggak kehabisan ya!',
    cta: 'Tanya Parkir →',
    href: 'https://wa.me/6285755125790?text=Halo%2C%20bu.%20Apakah%20masih%20ada%20slot%20parkir%20sepeda%20motor%20%3F',
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
    sub: 'Dekat kampus, akses mudah',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Clock,
    label: 'Jam Respon',
    value: 'Setiap hari, 24/7 Non-stop',
    sub: 'WhatsApp paling cepat dibalas: 07.00 – 20.00',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
];

export default function Contact() {
  return (
    <div className="px-4 py-2 space-y-6">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-violet-600 to-purple-700 p-5 text-white">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-6" />
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <span className="text-5xl opacity-30">💬</span>
        </div>
        <p className="text-xs font-semibold text-purple-200 uppercase tracking-widest mb-1">Kost Putri</p>
        <h2 className="text-xl font-bold leading-tight mb-1">
          Yuk, Ngobrol Dulu!<br />Kami Siap Jawab 🙌
        </h2>
        <p className="text-sm text-purple-100">
          Nggak perlu ribet — tinggal tap, langsung terhubung via WhatsApp
        </p>
      </div>

      {/* CTA Buttons */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-violet-500 rounded-full" />
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Hubungi Kami</h3>
        </div>

        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md active:scale-[0.98] transition-all duration-150"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.iconBg}`}>
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
                  <span className={`inline-flex items-center gap-1 text-xs font-bold text-white bg-linear-to-r ${c.accent} px-4 py-1.5 rounded-full`}>
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
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Info Penting</h3>
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
      <div className="bg-linear-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-4 flex gap-3 items-start">
        <span className="text-xl">⭐</span>
        <div>
          <p className="text-sm font-semibold text-indigo-800">Ratusan penghuni puas sejak bertahun-tahun</p>
          <p className="text-xs text-indigo-500 mt-0.5">
            Aman, nyaman, dan strategis. Cocok banget buat mahasiswi & karyawan yang butuh hunian tenang di Malang.
          </p>
        </div>
      </div>

    </div>
  );
}

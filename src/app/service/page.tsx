import { UtensilsCrossed, CalendarDays, GraduationCap, Users, ChefHat, Clock, Star } from 'lucide-react';

const serviceTypes = [
  {
    icon: Clock,
    label: 'Catering Harian',
    desc: 'Makan enak tiap hari tanpa ribet masak sendiri',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: CalendarDays,
    label: 'Catering Mingguan',
    desc: 'Paket hemat sepekan, menu bervariasi biar gak bosen',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: Star,
    label: 'Catering Bulanan',
    desc: 'Solusi terbaik buat kamu yang pengen praktis setiap bulan',
    color: 'bg-violet-50 text-violet-500',
  },
  {
    icon: GraduationCap,
    label: 'Acara Kampus & Lainnya',
    desc: 'Seminar, gathering, wisuda? Kita siap handle cateringnya',
    color: 'bg-green-50 text-green-500',
  },
];

export default function Service() {
  return (
    <div className="px-4 py-2 space-y-6">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-orange-500 to-rose-500 p-5 text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-6 -translate-x-4" />
        <p className="text-xs font-semibold text-orange-100 uppercase tracking-widest mb-1">Kost Putri 59D</p>
        <h2 className="text-xl font-bold leading-tight mb-1">Catering Enak,<br/>Langsung ke Pintu Kamu 🍱</h2>
        <p className="text-sm text-orange-100">Gak cuma buat residen — semua orang boleh pesan!</p>
      </div>

      {/* Layanan */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-orange-500 rounded-full" />
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Pilihan Layanan</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {serviceTypes.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{s.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open for Non-Residen */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-rose-400 rounded-full" />
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Terbuka untuk Semua</h3>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
              <ChefHat className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Residen Kost 59D</p>
              <p className="text-[11px] text-gray-400">Akses mudah, pesan langsung dari kamar</p>
            </div>
            <span className="ml-auto text-[10px] bg-orange-50 text-orange-600 font-bold px-2 py-1 rounded-full">Prioritas</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Non-Residen</p>
              <p className="text-[11px] text-gray-400">Kamu juga bisa pesan, kok! Hubungi kami dulu ya</p>
            </div>
            <span className="ml-auto text-[10px] bg-rose-50 text-rose-500 font-bold px-2 py-1 rounded-full">Welcome</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Menu */}
      <div className="bg-linear-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start">
        <span className="text-xl">🔔</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">Menu & harga segera hadir!</p>
          <p className="text-xs text-amber-600 mt-0.5 leading-relaxed">
            Daftar menu lengkap dan rincian harga lagi kita siapkan. Stay tuned untuk updatenya ya — dijamin worth it! 🙌
          </p>
        </div>
      </div>

      {/* CTA Contact */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3 items-center">
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
          <UtensilsCrossed className="w-5 h-5 text-green-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">Tertarik? Yuk hubungi kami!</p>
          <p className="text-[11px] text-gray-400">Tanya menu, harga, atau jadwal pengiriman</p>
        </div>
        <span className="text-gray-300 text-lg">→</span>
      </div>
    </div>
  );
}

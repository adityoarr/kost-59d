import { Wifi, ParkingSquare, ShowerHead, Flame, Zap, Wind, Bed, BookOpen, Armchair, Package, Layers, AppWindow } from 'lucide-react';

const facilities = [
  {
    icon: Wifi,
    label: 'WiFi',
    desc: 'Internet nonstop, streaming & WFH lancar jaya',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: ParkingSquare,
    label: 'Parkir Motor',
    desc: 'Slot terbatas — hubungi penjaga kost lebih dulu ya!',
    color: 'bg-amber-50 text-amber-500',
    note: true,
  },
  {
    icon: ShowerHead,
    label: 'Kamar Mandi',
    desc: 'Kamar mandi luar bersih dan terawat',
    color: 'bg-cyan-50 text-cyan-500',
  },
  {
    icon: Flame,
    label: 'Kompor',
    desc: 'Masak sendiri, hemat pengeluaran',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Zap,
    label: 'Listrik & Air',
    desc: 'Sudah termasuk dalam biaya sewa',
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    icon: Wind,
    label: 'Area Jemur',
    desc: 'Tempat jemuran yang cukup luas',
    color: 'bg-green-50 text-green-500',
  },
];

const roomItems = [
  { icon: Bed, label: 'Kasur', desc: 'Tidur nyenyak setiap malam' },
  { icon: BookOpen, label: 'Meja Belajar', desc: 'Setup kerja & belajar yang proper' },
  { icon: Armchair, label: 'Kursi', desc: 'Nyaman buat duduk lama' },
  { icon: Package, label: 'Lemari', desc: 'Simpan barang tetap rapi' },
  { icon: Layers, label: 'Bantal', desc: 'Sudah tersedia dari awal' },
  { icon: AppWindow, label: 'Jendela', desc: 'Sirkulasi udara segar tiap hari' },
];

export default function Facility() {
  return (
    <div className="px-4 py-2 space-y-6">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-indigo-600 to-violet-600 p-5 text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-6 -translate-x-4" />
        <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">Kost Putri</p>
        <h2 className="text-xl font-bold leading-tight mb-1">Fasilitas Lengkap,<br/>Hidup Makin Nyaman 🏠</h2>
        <p className="text-sm text-indigo-100">Semua yang kamu butuhkan udah ada di sini</p>
      </div>

      {/* Fasilitas Umum */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-indigo-500 rounded-full" />
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Fasilitas Umum</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${f.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{f.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{f.desc}</p>
                </div>
                {f.note && (
                  <span className="text-[10px] bg-amber-50 text-amber-600 font-semibold px-2 py-0.5 rounded-full w-fit">
                    Slot Terbatas
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Fasilitas Kamar */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-violet-500 rounded-full" />
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Fasilitas Kamar</h3>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
          {roomItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3">
                <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-violet-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Note */}
      <a href="https://wa.me/6285755125790?text=Halo%2C%20bu.%20Apakah%20masih%20ada%20slot%20parkir%20sepeda%20motor%20%3F" target='_blank' rel='noopener noreferrer' className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start">
        <span className="text-xl">💬</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">Mau tanya soal parkir? Langsung disini</p>
          <p className="text-xs text-amber-600 mt-0.5">Slot parkir motor terbatas. Hubungi ibu/penjaga kost langsung untuk konfirmasi ketersediaan.</p>
        </div>
      </a>
    </div>
  );
}

import { Wifi, ParkingSquare, ShowerHead, Flame, Zap, Wind, Bed, BookOpen, Armchair, Package, Layers, AppWindow } from 'lucide-react';

const facilities = [
  {
    icon: Wifi,
    label: 'WiFi 24/7',
    desc: 'Koneksi ngebut! Nugas, streaming, atau WFH lancar jaya',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: ParkingSquare,
    label: 'Parkir Motor',
    desc: 'Aman dan berpagar (hubungi Ibu Kost untuk ketersediaan slot)',
    color: 'bg-amber-50 text-amber-500',
    note: true,
  },
  {
    icon: ShowerHead,
    label: 'Kamar Mandi',
    desc: 'Kamar mandi luar yang selalu dijaga kebersihannya',
    color: 'bg-cyan-50 text-cyan-500',
  },
  {
    icon: Flame,
    label: 'Dapur & Kompor',
    desc: 'Bebas masak sendiri, lumayan buat hemat budget makan!',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Zap,
    label: 'Listrik & Air',
    desc: 'All-in! Bebas pusing mikirin token atau tagihan bulanan',
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    icon: Wind,
    label: 'Area Jemur',
    desc: 'Area jemuran luas & sirkulasi bagus, pakaian cepat kering',
    color: 'bg-green-50 text-green-500',
  },
];

const roomItems = [
  { icon: Bed, label: 'Kasur Empuk', desc: 'Siap bikin istirahatmu maksimal setiap malam' },
  { icon: BookOpen, label: 'Meja Belajar', desc: 'Setup rapi yang bikin makin produktif' },
  // { icon: Armchair, label: 'Kursi', desc: 'Nyaman buat nugas atau maraton drakor' },
  { icon: Package, label: 'Lemari Pakaian', desc: 'Spasi lega untuk simpan koleksi bajumu' },
  { icon: Layers, label: 'Bantal & Guling', desc: 'Sudah komplit, tinggal bawa badan aja!' },
  { icon: AppWindow, label: 'Jendela Kamar', desc: 'Kamar anti pengap dengan pencahayaan alami' },
];

export default function Facility() {
  return (
    <div className="px-4 py-2 space-y-6">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-md">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-6 -translate-x-4" />
        <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">Kost Putri</p>
        <h2 className="text-xl font-bold leading-tight mb-1">Fasilitas Lengkap,<br/>Hidup Makin Nyaman 🏠</h2>
        <p className="text-sm text-indigo-100">Bawa koper aja, sisanya biar kami yang urus!</p>
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
              <div key={f.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:border-indigo-100 transition-colors">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${f.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{f.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{f.desc}</p>
                </div>
                {f.note && (
                  <span className="text-[10px] bg-amber-50 text-amber-600 font-semibold px-2 py-0.5 rounded-full w-fit mt-auto">
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
              <div key={item.label} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-violet-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Note */}
      <a 
        href="https://wa.me/6285755125790?text=Halo%20Ibu%20Dina%2C%20permisi.%20Saya%20calon%20penghuni%20Kost%20Putri%2C%20mau%20tanya%20apakah%20slot%20parkir%20untuk%20motor%20saat%20ini%20masih%20tersedia%3F" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start hover:shadow-md transition-shadow cursor-pointer block"
      >
        <span className="text-xl">🛵</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">Pastikan Slot Parkir Motormu</p>
          <p className="text-xs text-amber-600 mt-0.5">
            Karena slot parkir terbatas, yuk chat Ibu Kost sekarang buat mastiin ketersediaannya sebelum kamu pindahan!
          </p>
        </div>
      </a>
    </div>
  );
}
"use client";

import { Wifi, ParkingSquare, ShowerHead, Flame, Zap, Wind, Bed, BookOpen, Package, Layers, AppWindow } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

const facilityIcons = [Wifi, ParkingSquare, ShowerHead, Flame, Zap, Wind];
const facilityColors = [
  'bg-blue-50 text-blue-500',
  'bg-amber-50 text-amber-500',
  'bg-cyan-50 text-cyan-500',
  'bg-orange-50 text-orange-500',
  'bg-yellow-50 text-yellow-500',
  'bg-green-50 text-green-500',
];

const roomIcons = [Bed, BookOpen, Package, Layers, AppWindow];

export default function FacilityContent() {
  const { t } = useTranslation();
  const f = t.facility;

  const waMessage = encodeURIComponent(f.waMessageParking);
  const waHref = `https://wa.me/6285755125790?text=${waMessage}`;

  return (
    <div className="px-4 py-2 space-y-6">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-md">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-6 -translate-x-4" />
        <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-1">{f.heroEyebrow}</p>
        <h1 className="text-xl font-bold leading-tight mb-1">{f.heroTitleLine1}<br/>{f.heroTitleLine2}</h1>
        <p className="text-sm text-indigo-100">{f.heroSub}</p>
      </div>

      {/* Fasilitas Umum */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-indigo-500 rounded-full" />
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">{f.commonLabel}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {f.facilities.map((fac, i) => {
            const Icon = facilityIcons[i];
            return (
              <div key={fac.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:border-indigo-100 transition-colors">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${facilityColors[i]}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{fac.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{fac.desc}</p>
                </div>
                {'note' in fac && fac.note && (
                  <span className="text-[10px] bg-amber-50 text-amber-600 font-semibold px-2 py-0.5 rounded-full w-fit mt-auto">
                    {fac.note}
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
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">{f.roomLabel}</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
          {f.roomItems.map((item, i) => {
            const Icon = roomIcons[i];
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
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start hover:shadow-md transition-shadow cursor-pointer block"
      >
        <span className="text-xl">🛵</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">{f.parkingCtaTitle}</p>
          <p className="text-xs text-amber-600 mt-0.5">
            {f.parkingCtaDesc}
          </p>
        </div>
      </a>
    </div>
  );
}

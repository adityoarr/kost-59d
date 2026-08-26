"use client";

import { UtensilsCrossed, CalendarDays, GraduationCap, Users, ChefHat, Clock, Star } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

const forWhomIcons = [ChefHat, Users];
const forWhomIconBg = ['bg-orange-50', 'bg-rose-50'];
const forWhomIconColor = ['text-orange-500', 'text-rose-500'];
const forWhomBadgeColor = ['bg-orange-50 text-orange-600', 'bg-rose-50 text-rose-500'];

const packageIcons = [Clock, CalendarDays, Star, GraduationCap];
const packageColors = [
  'bg-orange-50 text-orange-500',
  'bg-blue-50 text-blue-500',
  'bg-violet-50 text-violet-500',
  'bg-green-50 text-green-500',
];

export default function ServiceContent() {
  const { t } = useTranslation();
  const s = t.service;

  const waMessage = encodeURIComponent(s.waMessage);
  const waHref = `https://wa.me/6285755125790?text=${waMessage}`;

  return (
    <div className="px-4 py-2 space-y-6">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-orange-500 to-rose-500 p-5 text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-6 -translate-x-4" />
        <p className="text-xs font-semibold text-orange-100 uppercase tracking-widest mb-1">{s.heroEyebrow}</p>
        <h1 className="text-xl font-bold leading-tight mb-1">{s.heroTitle}</h1>
        <p className="text-sm text-orange-100">{s.heroSub}</p>
      </div>

      {/* Open for Non-Penghuni */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-rose-400 rounded-full" />
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">{s.forWhomLabel}</h2>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          {s.forWhom.map((item, i) => {
            const Icon = forWhomIcons[i];
            return (
              <div key={item.label} className="flex items-center gap-3 px-4 py-4">
                <div className={`w-10 h-10 rounded-xl ${forWhomIconBg[i]} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${forWhomIconColor[i]}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  <p className="text-[11px] text-gray-400">{item.desc}</p>
                </div>
                <span className={`ml-auto text-[10px] font-bold px-2 py-1 rounded-full ${forWhomBadgeColor[i]}`}>{item.badge}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Layanan */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-orange-500 rounded-full" />
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">{s.packagesLabel}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {s.packages.map((pkg, i) => {
            const Icon = packageIcons[i];
            return (
              <div key={pkg.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${packageColors[i]}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{pkg.label}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{pkg.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Coming Soon Menu */}
      <div className="bg-linear-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start">
        <span className="text-xl">🔔</span>
        <div>
          <p className="text-sm font-semibold text-amber-800">{s.comingSoonTitle}</p>
          <p className="text-xs text-amber-600 mt-0.5 leading-relaxed">
            {s.comingSoonDesc}
          </p>
        </div>
      </div>

      {/* CTA Contact */}
      <a href={waHref} target='_blank' rel='noopener noreferrer' className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3 items-center">
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
          <UtensilsCrossed className="w-5 h-5 text-green-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">{s.ctaTitle}</p>
          <p className="text-[11px] text-gray-400">{s.ctaDesc}</p>
        </div>
        <span className="text-gray-300 text-lg">→</span>
      </a>
    </div>
  );
}

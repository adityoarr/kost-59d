"use client";

import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

const contactIcons = [MessageCircle, Phone];
const contactAccents = ['from-green-500 to-emerald-500', 'from-amber-500 to-orange-500'];
const contactBadgeColors = ['bg-green-100 text-green-700', 'bg-amber-100 text-amber-700'];
const contactIconBg = ['bg-green-50 text-green-500', 'bg-amber-50 text-amber-500'];

const infoIcons = [MapPin, Clock];
const infoColors = ['text-rose-500', 'text-indigo-500'];
const infoBg = ['bg-rose-50', 'bg-indigo-50'];

export default function ContactContent() {
  const { t } = useTranslation();
  const c = t.contact;

  return (
    <div className="px-4 py-2 space-y-6">

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-violet-600 to-purple-700 p-5 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-6" />
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <span className="text-5xl opacity-30">💬</span>
        </div>
        <p className="text-xs font-semibold text-purple-200 uppercase tracking-widest mb-1">{c.heroEyebrow}</p>
        <h1 className="text-xl font-bold leading-tight mb-1">
          {c.heroTitleLine1}<br />{c.heroTitleLine2}
        </h1>
        <p className="text-sm text-purple-100">
          {c.heroSub}
        </p>
      </div>

      {/* CTA Buttons */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-4 bg-violet-500 rounded-full" />
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">{c.contactLabel}</h2>
        </div>

        {c.contacts.map((item, i) => {
          const Icon = contactIcons[i];
          const waMessage = encodeURIComponent(item.waMessage);
          const href = `https://wa.me/6285755125790?text=${waMessage}`;
          return (
            <a
              key={item.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-violet-100 active:scale-[0.98] transition-all duration-150"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${contactIconBg[i]} group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <p className="text-sm font-bold text-gray-800">{item.label}</p>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${contactBadgeColors[i]}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-snug mb-3">{item.desc}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-bold text-white bg-linear-to-r ${contactAccents[i]} px-4 py-1.5 rounded-full shadow-sm`}>
                    {item.cta}
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
          <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest">{c.infoLabel}</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
          {c.info.map((item, i) => {
            const Icon = infoIcons[i];
            return (
              <div key={item.label} className="flex items-center gap-3 px-4 py-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${infoBg[i]}`}>
                  <Icon className={`w-4 h-4 ${infoColors[i]}`} />
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
          <p className="text-sm font-semibold text-indigo-800">{c.trustTitle}</p>
          <p className="text-xs text-indigo-600 mt-0.5">
            {c.trustDesc}
          </p>
        </div>
      </div>

    </div>
  );
}

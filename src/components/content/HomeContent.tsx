"use client";

import Image from "next/image";
import { MessageCircle, MapPin, GraduationCap, Coffee, ShieldCheck, Star, Wifi, Lock } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import type { TextSegment } from "@/lib/i18n/translations";

function RichParagraph({ segments, className, style }: { segments: readonly TextSegment[]; className?: string; style?: React.CSSProperties }) {
  return (
    <p className={className} style={style}>
      {segments.map((seg, i) =>
        seg.bold ? <strong key={i}>{seg.text}</strong> : <span key={i}>{seg.text}</span>
      )}
    </p>
  );
}

export default function HomeContent() {
  const { t } = useTranslation();
  const home = t.home;

  const whatsappNumber = "6285755125790";
  const message = encodeURIComponent(t.common.waMessageDefault);

  const lat = -7.955162704760403;
  const lon = 112.6091644792323;
  const zoom = 15;

  const embedUrl = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;

  const vibeIconConfig = [
    { Icon: GraduationCap, bg: '#EFF6FF', color: '#3b82f6' },
    { Icon: Coffee, bg: '#FFF7ED', color: '#f97316' },
    { Icon: Wifi, bg: '#F0FDF4', color: '#10b981' },
    { Icon: Lock, bg: '#FFF1F2', color: '#f43f5e' },
  ];

  return (
    <div className="home-content min-h-screen font-sans text-zinc-900" style={{ margin: 0, padding: 0 }}>
      {/* Font Playfair Display & DM Sans dimuat via next/font di layout.tsx
          (lihat --font-playfair & --font-dm-sans) agar tidak render-blocking */}
      <style>{`
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden;
        }

        .home-content, .home-content * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: var(--font-dm-sans), sans-serif;
          background: #FAFAF8;
        }

        h1, h2, h3 {
          font-family: var(--font-playfair), Georgia, serif;
        }

        /* Hero */
        .hero {
          position: relative;
          height: 58vh;
          width: 100vw;
          overflow: hidden;
          margin: 0;
          padding: 0;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(250,250,248,0) 40%, rgba(250,250,248,1) 100%);
        }

        .hero-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          color: #166534;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        /* Main content */
        .main {
          max-width: 560px;
          margin: 0 auto -30px;
          padding: 0 20px;
        }

        /* Title block */
        .title-block {
          text-align: center;
          padding: 28px 0 32px;
        }

        .title-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #10b981;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .title-main {
          font-size: clamp(2.4rem, 8vw, 3.4rem);
          font-weight: 800;
          line-height: 1.08;
          color: #111;
          margin-bottom: 10px;
        }

        .title-main em {
          font-style: italic;
          color: #10b981;
        }

        .title-sub {
          font-size: 14px;
          color: #888;
          font-weight: 500;
          letter-spacing: 0.06em;
        }

        /* Stars */
        .stars {
          display: flex;
          justify-content: center;
          gap: 3px;
          margin-top: 12px;
        }

        /* WA Button */
        .wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          text-decoration: none;
          border-radius: 16px;
          padding: 18px 24px;
          font-size: 16px;
          font-weight: 700;
          font-family: var(--font-dm-sans), sans-serif;
          box-shadow: 0 8px 28px rgba(22,163,74,0.32);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          margin-bottom: 8px;
        }

        .wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(22,163,74,0.4);
        }

        .wa-btn:active {
          transform: scale(0.97);
        }

        .wa-hint {
          text-align: center;
          font-size: 12px;
          color: #aaa;
          margin-bottom: 40px;
        }

        /* Section Header */
        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #10b981;
          background: #ecfdf5;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .section-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: #111;
          line-height: 1.2;
        }

        /* Map Section */
        .map-section {
          margin-bottom: 40px;
        }

        .map-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #E8E8E4;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          cursor: pointer;
        }

        .map-wrapper iframe {
          display: block;
          height: 260px;
          width: 100%;
          border: none;
          pointer-events: none;
          filter: grayscale(20%);
          transition: filter 0.3s;
        }

        .map-wrapper:hover iframe {
          filter: grayscale(0%);
        }

        .map-link-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          cursor: pointer;
        }

        .map-address {
          margin-top: 12px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        /* Nearby / Chips */
        .nearby-section {
          margin-bottom: 40px;
        }

        .nearby-intro {
          font-size: 13.5px;
          color: #666;
          margin-bottom: 14px;
          line-height: 1.6;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip {
          background: white;
          border: 1.5px solid #E4E4E0;
          border-radius: 100px;
          padding: 7px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: border-color 0.2s, background 0.2s;
        }

        .chip:hover {
          border-color: #10b981;
          background: #f0fdf4;
        }

        .chip-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Vibe Grid */
        .vibe-section {
          margin-bottom: 40px;
        }

        .vibe-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .vibe-card {
          background: white;
          border: 1.5px solid #EBEBEB;
          border-radius: 18px;
          padding: 18px;
          transition: border-color 0.2s, transform 0.2s;
        }

        .vibe-card:hover {
          border-color: #10b981;
          transform: translateY(-2px);
        }

        .vibe-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .vibe-title {
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 4px;
          color: #111;
        }

        .vibe-desc {
          font-size: 12.5px;
          color: #888;
          line-height: 1.5;
        }

        /* About Section */
        .about-section {
          margin-bottom: 20px;
        }

        .about-card {
          background: #111;
          border-radius: 24px;
          padding: 28px 24px;
          color: #F5F5F0;
          position: relative;
          overflow: hidden;
        }

        .about-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          right: 20px;
          font-family: var(--font-playfair), serif;
          font-size: 140px;
          color: rgba(255,255,255,0.06);
          line-height: 1;
          pointer-events: none;
        }

        .about-experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16,185,129,0.18);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 600;
          color: #34d399;
          margin-bottom: 16px;
        }

        .about-text {
          font-size: 15px;
          line-height: 1.75;
          color: #D4D4CC;
          position: relative;
          z-index: 1;
        }

        .about-text strong {
          color: #fff;
          font-weight: 600;
        }

        .about-owner {
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          color: #888;
          font-style: italic;
        }

        /* Amenities */
        .amenities {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .amenity-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 12px;
          color: #ccc;
          font-weight: 500;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #E0E0DC, transparent);
          margin: 36px 0;
        }
      `}</style>

      {/* 1. Hero — flush ke semua tepi */}
      <section className="hero">
        <Image
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
          alt="Interior kamar Kost Putri Ibu Dina di Malang, nyaman dan bersih"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="hero-overlay" />
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          {home.heroBadge}
        </div>
      </section>

      <main className="main">

        {/* 2. Judul */}
        <div className="title-block">
          <p className="title-eyebrow">{home.titleEyebrow}</p>
          <h1 className="title-main">
            {home.titleMain}
            <span className="sr-only">{home.titleSrOnly}</span>
          </h1>
          <p className="title-sub">{home.titleSub}</p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} style={{ width: 16, height: 16, fill: '#fbbf24', color: '#fbbf24' }} />
            ))}
          </div>
        </div>

        {/* 3. Tombol WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
        >
          <MessageCircle style={{ width: 22, height: 22 }} />
          {home.waButtonTop}
        </a>
        <p className="wa-hint">{home.waHint}</p>

        <div className="divider" />

        {/* 4. Peta */}
        <section className="map-section">
          <div className="section-header">
            <span className="section-label">{home.locationLabel}</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{home.locationTitle}</h2>

          <div className="map-wrapper">
            {/* Overlay transparan yang bisa diklik untuk buka Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-overlay"
              aria-label={home.mapAria}
            />
            <iframe
              src={embedUrl}
              allowFullScreen
              loading="lazy"
              title="Lokasi Kost Putri"
            />
          </div>

          <p className="map-address">
            <MapPin style={{ width: 14, height: 14, color: '#10b981', flexShrink: 0 }} />
            <strong>{home.address}</strong>
          </p>
        </section>

        <div className="divider" />

        {/* 5. Lokasi Strategis — Chip Pills */}
        <section className="nearby-section">
          <div className="section-header">
            <span className="section-label">{home.nearbyLabel}</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>{home.nearbyTitle}</h2>
          <p className="nearby-intro">
            {home.nearbyIntro}
          </p>
          <div className="chips">
            {home.nearbyPlaces.map((place) => (
              <span key={place} className="chip">
                <span className="chip-dot" />
                {place}
              </span>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* 6. Vibe Sekitar */}
        <section className="vibe-section">
          <div className="section-header">
            <span className="section-label">{home.vibeLabel}</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{home.vibeTitle}</h2>
          <div className="vibe-grid">
            {home.vibeCards.map((card, i) => {
              const { Icon, bg, color } = vibeIconConfig[i];
              return (
                <div className="vibe-card" key={card.title}>
                  <div className="vibe-icon" style={{ background: bg }}>
                    <Icon style={{ width: 20, height: 20, color }} />
                  </div>
                  <p className="vibe-title">{card.title}</p>
                  <p className="vibe-desc">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="divider" />

        {/* 7. Tentang Kost */}
        <section className="about-section">
          <div className="section-header">
            <ShieldCheck style={{ width: 18, height: 18, color: '#10b981' }} />
            <span className="section-label">{home.aboutLabel}</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{home.aboutTitle}</h2>

          <div className="about-card">
            <div className="about-experience-badge">
              {home.aboutBadge}
            </div>
            <RichParagraph segments={home.aboutParagraph1} className="about-text" />
            <RichParagraph segments={home.aboutParagraph2} className="about-text" style={{ marginTop: 14 }} />

            <p className="about-owner">
              {home.aboutQuote}
            </p>
          </div>
        </section>

        {/* CTA Bottom */}
        <div style={{ marginTop: 36 }}>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
          >
            <MessageCircle style={{ width: 22, height: 22 }} />
            {home.ctaBottomButton}
          </a>
          <p className="wa-hint">{home.ctaBottomHint}</p>
        </div>

      </main>
    </div>
  );
}

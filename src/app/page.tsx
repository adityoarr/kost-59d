import Image from "next/image";
import { MessageCircle, MapPin, GraduationCap, Coffee, ShieldCheck, Star, Wifi, Lock } from "lucide-react";

export default function Home() {
  const whatsappNumber = "6285755125790";
  const message = encodeURIComponent("Halo Ibu Dina, permisi. Saya mau tanya info ketersediaan kamar di Kost Putri, apakah saat ini masih ada yang kosong?");
  
  const lat = -7.955162704760403;
  const lon = 112.6091644792323;
  const zoom = 15;

  const embedUrl = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;

  const nearbyPlaces = [
    "Universitas Brawijaya",
    "Universitas Negeri Malang",
    "UIN Maulana Malik Ibrahim",
    "ITN Malang Kampus I",
    "UMM Kampus 2",
    "Matos",
    "Kafe & Tempat Ngopi",
    "Kuliner & Warung Hits",
  ];

  return (
    <div className="home-content min-h-screen font-sans text-zinc-900" style={{ margin: 0, padding: 0 }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap');

        html, body {
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden;
        }

        .home-content, .home-content * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #FAFAF8;
        }

        h1, h2, h3 {
          font-family: 'Playfair Display', Georgia, serif;
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
          font-family: 'DM Sans', sans-serif;
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
          font-family: 'Playfair Display', serif;
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
          alt="Kost Putri Interior"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="hero-overlay" />
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          Ada Kamar Kosong!
        </div>
      </section>

      <main className="main">

        {/* 2. Judul */}
        <div className="title-block">
          <p className="title-eyebrow">✦ Ladies Housing ✦</p>
          <h1 className="title-main">
            Kost Putri
          </h1>
          <p className="title-sub">Est. 2002 · Malang, Jawa Timur</p>
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
          Chat Ibu Kost Sekarang
        </a>
        <p className="wa-hint">Respon cepat · Ramah · Gak perlu sungkan 😊</p>

        <div className="divider" />

        {/* 4. Peta */}
        <section className="map-section">
          <div className="section-header">
            <span className="section-label">📍 Lokasi</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Cari Kita Gampang!</h2>

          <div className="map-wrapper">
            {/* Overlay transparan yang bisa diklik untuk buka Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-overlay"
              aria-label="Buka di Google Maps"
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
            <strong>Jl. Sumbersari IV no. 59D Kota Malang, Jawa Timur</strong>
          </p>
        </section>

        <div className="divider" />

        {/* 5. Lokasi Strategis — Chip Pills */}
        <section className="nearby-section">
          <div className="section-header">
            <span className="section-label">🗺️ Sekitar Kita</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 10 }}>Strategis Abis!</h2>
          <p className="nearby-intro">
            Gak perlu jauh-jauh keluar zona nyaman. Semuanya ada di dekat sini:
          </p>
          <div className="chips">
            {nearbyPlaces.map((place) => (
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
            <span className="section-label">✨ Vibe</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Kenapa Kamu Bakal Betah di Sini</h2>
          <div className="vibe-grid">
            <div className="vibe-card">
              <div className="vibe-icon" style={{ background: '#EFF6FF' }}>
                <GraduationCap style={{ width: 20, height: 20, color: '#3b82f6' }} />
              </div>
              <p className="vibe-title">Campus Ready</p>
              <p className="vibe-desc">5 menit ke gerbang kampus. No more telat kelas pagi gara-gara macet!</p>
            </div>
            <div className="vibe-card">
              <div className="vibe-icon" style={{ background: '#FFF7ED' }}>
                <Coffee style={{ width: 20, height: 20, color: '#f97316' }} />
              </div>
              <p className="vibe-title">Cafe Vibes</p>
              <p className="vibe-desc">Deretan kafe estetik & warmindo legend ada semua di sekitar kita.</p>
            </div>
            <div className="vibe-card">
              <div className="vibe-icon" style={{ background: '#F0FDF4' }}>
                <Wifi style={{ width: 20, height: 20, color: '#10b981' }} />
              </div>
              <p className="vibe-title">Wi-Fi</p>
              <p className="vibe-desc">Internet 24/7 non-stop.</p>
            </div>
            <div className="vibe-card">
              <div className="vibe-icon" style={{ background: '#FFF1F2' }}>
                <Lock style={{ width: 20, height: 20, color: '#f43f5e' }} />
              </div>
              <p className="vibe-title">Aman & Privat</p>
              <p className="vibe-desc">Lingkungan tenang dengan keamanan terjaga.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* 7. Tentang Kost */}
        <section className="about-section">
          <div className="section-header">
            <ShieldCheck style={{ width: 18, height: 18, color: '#10b981' }} />
            <span className="section-label">🏠 Tentang Kami</span>
          </div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>Bukan Sekadar Kost Biasa</h2>

          <div className="about-card">
            <div className="about-experience-badge">
              ⭐ Dikelola Sepenuh Hati Sejak 2002
            </div>
            <p className="about-text">
              Kost Putri bukan sekadar tempat tidur — ini adalah <strong>rumah kedua kamu</strong> selama merantau di Malang. 
              Kami paham banget kebutuhan anak kost, karena <strong>Ibu Kost sendiri pernah ngerasain jadi anak kost</strong> di masa mudanya. 
              Pengalaman itu yang bikin beliau tahu persis apa yang bikin kost itu nyaman, aman, dan bikin betah.
            </p>
            <p className="about-text" style={{ marginTop: 14 }}>
              Sudah <strong>hampir 25 tahun</strong> beliau mengelola kost ini dengan sepenuh hati — bukan cuma sewa kamar, 
              tapi ikut peduli dengan kehidupan penghuninya. Banyak yang datang sebagai mahasiswi baru, pergi sebagai 
              sarjana sukses, pekerja, dan bahkan sebagai calon pengantin. Semua punya kenangan manis dari sini.
            </p>

            {/* <div className="amenities">
              {["Wi-Fi"].map((item) => (
                <span key={item} className="amenity-pill">
                  <span>✓</span> {item}
                </span>
              ))}
            </div> */}

            <p className="about-owner">
              &quot;Saya ingin setiap penghuni merasa aman dan nyaman, seperti di rumah sendiri.&quot; — Ibu Dina N.S. - Kost Putri
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
            Tanya Kamar Kosong
          </a>
          <p className="wa-hint">Ketuk sekali, langsung nyambung ke Ibu Kost 💬</p>
        </div>

      </main>
    </div>
  );
}
"use client";

import { useState, useMemo, useEffect } from "react";

interface Yacht {
  slug: string;
  manufacturer: string;
  name: string;
  img: string;
  interior: string;
  length: string;
  guests: number;
  cabins: number;
  crew: number;
  price: number;
  tier: string;
  desc: string;
}

interface Availability {
  booked_today: boolean;
  total_bookings: number;
  next_booking: { start: string; summary: string } | null;
}

const YACHTS: Yacht[] = [
  { slug: "pink-panther", manufacturer: "Azimut", name: "60' \"Pink Panther\"", img: "/images/yacht-01.jpg", interior: "/images/yacht-09.jpg", length: "60 ft", guests: 12, cabins: 3, crew: 2, price: 1800, tier: "pink", desc: "Our flagship. 3 cabins, massive deck, premium sound." },
  { slug: "blessed-gold", manufacturer: "Azimut", name: "60' \"Blessed Gold\"", img: "/images/yacht-02.jpg", interior: "/images/yacht-04.jpg", length: "60 ft", guests: 12, cabins: 3, crew: 2, price: 1800, tier: "gold", desc: "Gold edition 60-footer. Three cabins, smoothest ride on the bay." },
  { slug: "cotton-candy", manufacturer: "Maxum", name: "50' \"Cotton Candy\"", img: "/images/yacht-03.jpg", interior: "/images/yacht-07.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink", desc: "Our most Instagram-famous yacht. Massive sun deck, 2 cabins." },
  { slug: "bad-bunny", manufacturer: "Maxum", name: "50' \"Bad Bunny\"", img: "/images/yacht-05.jpg", interior: "/images/yacht-08.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink", desc: "Reggaeton vibes. Powerful sound system, party-ready layout." },
  { slug: "hello-kitty", manufacturer: "Maxum", name: "50' \"Hello Kitty\"", img: "/images/yacht-08.jpg", interior: "/images/yacht-10.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink", desc: "Playful 50-footer. Daytime cruises and birthday parties." },
  { slug: "pink-leopard", manufacturer: "Meridian", name: "45' \"Pink Leopard\"", img: "/images/yacht-06.jpg", interior: "/images/yacht-09.jpg", length: "45 ft", guests: 8, cabins: 2, crew: 1, price: 900, tier: "pink", desc: "Intimate 45-footer. Perfect for smaller groups and sunset cruises." },
];

const TIERS: Record<string, string> = {
  pink: "PINK COLLECTION",
  gold: "GOLD COLLECTION",
};

const TRUST_BAR = [
  { icon: "📋", label: "USCG Licensed", desc: "All captains certified" },
  { icon: "🛥️", label: "6 Yachts", desc: "Largest pink fleet in Miami" },
  { icon: "⭐", label: "5-Star Rated", desc: "Hundreds of happy guests" },
  { icon: "🔒", label: "Secure Booking", desc: "Stripe payments, no hidden fees" },
];

const TESTIMONIALS = [
  { text: "Best bachelorette ever. The pink yacht was EXACTLY what we wanted. Captain was amazing and the whole experience was seamless.", author: "Jessica M.", rating: 5 },
  { text: "Booked Pink Panther for my 30th. 12 of us had the time of our lives. Already planning the next trip.", author: "Marcus D.", rating: 5 },
  { text: "No bait and switch like other companies. The yacht looked exactly like the photos. Professional crew, great vibes.", author: "Sarah K.", rating: 5 },
];

export default function Home() {
  const [sort, setSort] = useState("price-desc");
  const [filter, setFilter] = useState("all");
  const [availability, setAvailability] = useState<Record<string, Availability>>({});

  useEffect(() => {
    fetch("/availability.json")
      .then(r => r.json())
      .then(setAvailability)
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    let list = filter === "all" ? YACHTS : YACHTS.filter(y => y.tier === filter);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "length-desc") list = [...list].sort((a, b) => parseInt(b.length) - parseInt(a.length));
    else if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [sort, filter]);

  const grouped = useMemo(() => {
    const g: Record<string, Yacht[]> = {};
    filtered.forEach(y => {
      if (!g[y.tier]) g[y.tier] = [];
      g[y.tier].push(y);
    });
    return g;
  }, [filtered]);

  return (
    <main>
      <header className="site-header">
        <div className="brand">DOCKTEASE MIAMI</div>
        <div className="tagline">Luxury Watercraft — Original Pink Yacht Experience</div>
      </header>

      {/* Navigation with page links */}
      <nav className="nav-bar" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <div className="nav-links" style={{ gap: 0 }}>
            {["all", "pink", "gold"].map(t => (
              <button
                key={t}
                className={filter === t ? "active" : ""}
                onClick={() => setFilter(t)}
                aria-pressed={filter === t}
              >
                {t === "all" ? "ALL" : t === "pink" ? "PINK COLLECTION" : "GOLD COLLECTION"}
              </button>
            ))}
          </div>
          <div className="nav-sort">
            <label htmlFor="sort-select">SORT BY</label>
            <select id="sort-select" value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort yachts">
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="length-desc">LENGTH: HIGH TO LOW</option>
              <option value="name">NAME: A–Z</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Page Links Bar */}
      <div style={{ background: '#0a0a0a', borderBottom: '1px solid #1a1a1a', padding: '0 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 24, overflowX: 'auto', padding: '10px 0' }}>
          <a href="/" style={{ color: '#f472b6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap' }}>HOME</a>
          <a href="/fleet" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap' }}>FLEET</a>
          <a href="/about" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap' }}>ABOUT</a>
          <a href="/faq" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap' }}>FAQ</a>
          <a href="/contact" style={{ color: '#999', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap' }}>CONTACT</a>
        </div>
      </div>

      <div className="hero-banner">
        <h2>Give The Global Recession The Finger</h2>
        <p>Pink yachts. Gold yachts. Real-time availability. Book directly.</p>
      </div>

      {/* Trust Bar */}
      <div style={{ background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', padding: '20px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 20, padding: '0 24px' }}>
          {TRUST_BAR.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="main-container">
        {Object.keys(TIERS).map(tier => {
          const yachts = grouped[tier];
          if (!yachts || yachts.length === 0) return null;
          return (
            <section key={tier} style={{ marginBottom: 48 }} aria-labelledby={`tier-${tier}`}>
              <div className="section-header" id={`tier-${tier}`}>
                {TIERS[tier]} <span className="count">({yachts.length})</span>
              </div>
              <div className="vehicle-grid">
                {yachts.map((yacht) => {
                  const av = availability[yacht.slug];
                  const isAvailable = av && !av.booked_today;
                  return (
                    <article key={yacht.slug} className={`vehicle-card ${yacht.price >= 1500 ? "premium" : ""}`}>
                      <div className="vehicle-image">
                        <img src={yacht.img} alt={`${yacht.manufacturer} ${yacht.name}`} loading="lazy" />
                        {av && (
                          <div className={`availability-badge ${isAvailable ? "available" : "booked"}`} aria-label={isAvailable ? "Available today" : "Booked today"}>
                            {isAvailable ? "🟢 AVAILABLE" : "🔴 BOOKED"}
                          </div>
                        )}
                      </div>
                      <div className="vehicle-info">
                        <div className="manufacturer">{yacht.manufacturer}</div>
                        <h3>{yacht.name}</h3>
                        <div className="vehicle-specs">
                          <span aria-label={`Length: ${yacht.length}`}>📏 {yacht.length}</span>
                          <span aria-label={`Capacity: ${yacht.guests} guests`}>👥 {yacht.guests} guests</span>
                          <span aria-label={`${yacht.cabins} cabins`}>🛏 {yacht.cabins} cabins</span>
                          <span aria-label={`${yacht.crew} crew members`}>⚓ {yacht.crew} crew</span>
                        </div>
                        <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5, marginTop: 8 }}>{yacht.desc}</p>
                        <div className="vehicle-bottom">
                          <div className="price">
                            ${yacht.price.toLocaleString()}<small> / 4hrs</small>
                          </div>
                          <a href="/contact" className="buy-btn" aria-label={`Book ${yacht.name} from ${yacht.price} dollars`} style={{ textDecoration: 'none' }}>BOOK NOW</a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Testimonials */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }} aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 32, textAlign: 'center' }}>What Our Guests Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: 12, padding: 24 }}>
              <div style={{ color: '#fbbf24', fontSize: '1.2rem', marginBottom: 12 }}>{'★'.repeat(t.rating)}</div>
              <p style={{ color: '#ccc', lineHeight: 1.7, fontSize: '0.95rem', fontStyle: 'italic', marginBottom: 16 }}>"{t.text}"</p>
              <div style={{ color: '#f472b6', fontWeight: 600, fontSize: '0.9rem' }}>— {t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '60px 24px', background: '#111', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>Ready to Get on the Water?</h2>
        <p style={{ color: '#999', fontSize: '1.1rem', marginBottom: 24 }}>Check availability and book your yacht in minutes.</p>
        <a href="/contact" style={{ display: 'inline-block', padding: '16px 48px', background: '#f472b6', color: '#111', fontWeight: 700, fontSize: '1.1rem', borderRadius: 8, textDecoration: 'none' }}>Book Now</a>
      </section>

      <footer className="site-footer" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 8 }}>DOCKTEASE MIAMI</div>
            <p style={{ color: '#666', fontSize: '0.9rem', maxWidth: 300 }}>Original pink yacht experience. Luxury charters in Miami since 2020.</p>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <a href="/about" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
            <a href="/fleet" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Fleet</a>
            <a href="/faq" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ</a>
            <a href="/contact" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
            <a href="/terms" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Terms</a>
            <a href="/privacy" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</a>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#444', fontSize: '0.85rem', marginTop: 24, paddingTop: 24, borderTop: '1px solid #1a1a1a', maxWidth: 1100, margin: '24px auto 0' }}>
          © 2026 DOCKTEASE MIAMI — ORIGINAL PINK YACHT EXPERIENCE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}

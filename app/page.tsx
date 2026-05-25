"use client";

import { useState, useMemo, useEffect } from "react";

interface Yacht {
  slug: string;
  manufacturer: string;
  name: string;
  img: string;
  length: string;
  guests: number;
  cabins: number;
  crew: number;
  price: number;
  tier: string;
}

interface Availability {
  booked_today: boolean;
  total_bookings: number;
  next_booking: { start: string; summary: string } | null;
}

const YACHTS: Yacht[] = [
  { slug: "pink-panther", manufacturer: "Azimut", name: "60' \"Pink Panther\"", img: "/images/yacht-pink-cruising.jpg", length: "60 ft", guests: 12, cabins: 3, crew: 2, price: 1800, tier: "pink" },
  { slug: "blessed-gold", manufacturer: "Azimut", name: "60' \"Blessed Gold\"", img: "/images/yacht-front.jpg", length: "60 ft", guests: 12, cabins: 3, crew: 2, price: 1800, tier: "gold" },
  { slug: "cotton-candy", manufacturer: "Maxum", name: "50' \"Cotton Candy\"", img: "/images/yacht-pink-aerial.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink" },
  { slug: "bad-bunny", manufacturer: "Maxum", name: "50' \"Bad Bunny\"", img: "/images/yacht-pink-speed.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink" },
  { slug: "hello-kitty", manufacturer: "Maxum", name: "50' \"Hello Kitty\"", img: "/images/yacht-pink-skyline.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink" },
  { slug: "pink-leopard", manufacturer: "Meridian", name: "45' \"Pink Leopard\"", img: "/images/yacht-speed-2.jpg", length: "45 ft", guests: 8, cabins: 2, crew: 1, price: 900, tier: "pink" },
];

const TIERS: Record<string, string> = {
  pink: "PINK COLLECTION",
  gold: "GOLD COLLECTION",
};

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

      <nav className="nav-bar" role="navigation" aria-label="Yacht filters">
        <div className="nav-inner">
          <div className="nav-links">
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

      <div className="hero-banner">
        <h2>Give The Global Recession The Finger</h2>
        <p>Pink yachts. Gold yachts. Real-time availability. Book directly.</p>
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
                        <div className="vehicle-bottom">
                          <div className="price">
                            ${yacht.price.toLocaleString()}<small> / 4hrs</small>
                          </div>
                          <button className="buy-btn" aria-label={`Purchase ${yacht.name} for ${yacht.price} dollars`}>PURCHASE</button>
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

      <footer className="site-footer">
        <p>© 2026 DOCKTEASE MIAMI — ORIGINAL PINK YACHT EXPERIENCE. WE DELIVER TO YOU.</p>
      </footer>
    </main>
  );
}

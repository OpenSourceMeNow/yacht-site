"use client";

import { useState } from "react";

interface Yacht {
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

export default function Home() {
  const [sort, setSort] = useState("price-desc");
  const [filter, setFilter] = useState("all");

  const yachts: Yacht[] = [
    { manufacturer: "Azimut", name: "60' \"Pink Panther\"", img: "/images/pink-panther-60.jpg", length: "60 ft", guests: 12, cabins: 3, crew: 2, price: 1800, tier: "pink" },
    { manufacturer: "Azimut", name: "60' \"Blessed Gold\"", img: "/images/blessed-gold-60.jpg", length: "60 ft", guests: 12, cabins: 3, crew: 2, price: 1800, tier: "gold" },
    { manufacturer: "Maxum", name: "50' \"Cotton Candy\"", img: "/images/cotton-candy-50.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink" },
    { manufacturer: "Maxum", name: "50' \"Bad Bunny\"", img: "/images/pink-ii-50.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink" },
    { manufacturer: "Maxum", name: "50' \"Hello Kitty\"", img: "/images/pink-iii-50.jpg", length: "50 ft", guests: 10, cabins: 2, crew: 2, price: 1200, tier: "pink" },
    { manufacturer: "Meridian", name: "45' \"Pink Leopard\"", img: "/images/pink-i-45.jpg", length: "45 ft", guests: 8, cabins: 2, crew: 1, price: 900, tier: "pink" },
  ];

  const tiers: Record<string, string> = {
    pink: "PINK COLLECTION",
    gold: "GOLD COLLECTION",
  };

  let filtered = filter === "all" ? yachts : yachts.filter(y => y.tier === filter);

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sort === "length-desc") filtered = [...filtered].sort((a, b) => parseInt(b.length) - parseInt(a.length));
  else if (sort === "name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  const grouped = filtered.reduce((acc: Record<string, Yacht[]>, yacht) => {
    if (!acc[yacht.tier]) acc[yacht.tier] = [];
    acc[yacht.tier].push(yacht);
    return acc;
  }, {});

  const tierOrder = ["pink", "gold"];

  return (
    <main>
      <header className="site-header">
        <div className="brand">DOCKTEASE MIAMI</div>
        <div className="tagline">Luxury Watercraft — Original Pink Yacht Experience</div>
      </header>

      <nav className="nav-bar">
        <div className="nav-inner">
          <div className="nav-links">
            {["all", "pink", "gold"].map(t =>
              <a key={t} className={filter === t ? "active" : ""} onClick={() => setFilter(t)} style={{cursor:"pointer"}}>
                {t === "all" ? "ALL" : t === "pink" ? "PINK COLLECTION" : "GOLD COLLECTION"}
              </a>
            )}
          </div>
          <div className="nav-sort">
            SORT BY
            <select value={sort} onChange={e => setSort(e.target.value)}>
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
        <p>Pink yachts. Gold yachts. The boat of your dreams is one click away.</p>
      </div>

      <div className="main-container">
        {tierOrder.map(tier => {
          const yachts = grouped[tier];
          if (!yachts || yachts.length === 0) return null;
          return (
            <div key={tier} style={{ marginBottom: 48 }}>
              <div className="section-header">
                {tiers[tier]} <span className="count">({yachts.length})</span>
              </div>
              <div className="vehicle-grid">
                {yachts.map((yacht, i) => (
                  <div key={i} className="vehicle-card premium">
                    <div className="vehicle-image">
                      <img src={yacht.img} alt={yacht.name} loading="lazy" />
                    </div>
                    <div className="vehicle-info">
                      <div className="manufacturer">{yacht.manufacturer}</div>
                      <h3>{yacht.name}</h3>
                      <div className="vehicle-specs">
                        <span>📏 {yacht.length}</span>
                        <span>👥 {yacht.guests} guests</span>
                        <span>🛏 {yacht.cabins} cabins</span>
                        <span>⚓ {yacht.crew} crew</span>
                      </div>
                      <div className="vehicle-bottom">
                        <div className="price">
                          ${yacht.price.toLocaleString()}<small> / 4hrs</small>
                        </div>
                        <button className="buy-btn">PURCHASE</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <footer className="site-footer">
        <p>© 2026 DOCKTEASE MIAMI — ORIGINAL PINK YACHT EXPERIENCE. WE DELIVER TO YOU.</p>
      </footer>
    </main>
  );
}

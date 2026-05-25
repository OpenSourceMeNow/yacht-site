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
    { manufacturer: "Pershing", name: "116' GTX \"Black Diamond\"", img: "/images/pershing-116.jpg", length: "116 ft", guests: 14, cabins: 5, crew: 5, price: 12000, tier: "mega" },
    { manufacturer: "Leopard", name: "105' \"Predator\"", img: "/images/princess-100.jpg", length: "105 ft", guests: 13, cabins: 5, crew: 4, price: 9500, tier: "mega" },
    { manufacturer: "Princess", name: "100' \"Monopoly\"", img: "/images/princess-100.jpg", length: "100 ft", guests: 12, cabins: 5, crew: 4, price: 8000, tier: "mega" },
    { manufacturer: "Sunseeker", name: "96' \"Neptune\"", img: "/images/sunseeker-96.jpg", length: "96 ft", guests: 12, cabins: 4, crew: 4, price: 6500, tier: "mega" },
    { manufacturer: "Princess", name: "88' \"Freedom\"", img: "/images/hero-yacht.jpg", length: "88 ft", guests: 13, cabins: 4, crew: 3, price: 4500, tier: "large" },
    { manufacturer: "Sirena", name: "88' \"Voyager\"", img: "/images/yacht-sirena.jpg", length: "88 ft", guests: 12, cabins: 4, crew: 3, price: 4200, tier: "large" },
    { manufacturer: "Mangusta", name: "85' \"Velocé\"", img: "/images/pershing-116.jpg", length: "85 ft", guests: 10, cabins: 4, crew: 3, price: 5000, tier: "large" },
    { manufacturer: "Sunseeker", name: "82' \"Ocean Dream\"", img: "/images/sunseeker-82.jpg", length: "82 ft", guests: 10, cabins: 4, crew: 3, price: 4000, tier: "large" },
    { manufacturer: "Azimut", name: "80' \"Salt Shaker\"", img: "/images/azimut-80.jpg", length: "80 ft", guests: 10, cabins: 4, crew: 3, price: 3800, tier: "large" },
    { manufacturer: "Miami Sol", name: "80' \"High Tide\"", img: "/images/miami-sol-80.jpg", length: "80 ft", guests: 10, cabins: 3, crew: 3, price: 3500, tier: "large" },
    { manufacturer: "Lazzara", name: "75' \"Lady H\"", img: "/images/sunseeker-96.jpg", length: "75 ft", guests: 8, cabins: 3, crew: 2, price: 3200, tier: "large" },
    { manufacturer: "Sunseeker", name: "70' \"Horizon\"", img: "/images/gig-g70.jpg", length: "70 ft", guests: 8, cabins: 3, crew: 2, price: 2800, tier: "mid" },
    { manufacturer: "Riva", name: "68' \"Dolce\"", img: "/images/sunseeker-96.jpg", length: "68 ft", guests: 8, cabins: 3, crew: 2, price: 2600, tier: "mid" },
    { manufacturer: "Ferretti", name: "65' \"La Bella\"", img: "/images/sunseeker-82.jpg", length: "65 ft", guests: 8, cabins: 3, crew: 2, price: 2200, tier: "mid" },
    { manufacturer: "Princess", name: "62' \"Royal Wave\"", img: "/images/hero-yacht.jpg", length: "62 ft", guests: 8, cabins: 2, crew: 2, price: 1950, tier: "mid" },
    { manufacturer: "Azimut", name: "60' \"Wine Down\"", img: "/images/yacht-azimut.jpg", length: "60 ft", guests: 8, cabins: 2, crew: 2, price: 1800, tier: "mid" },
    { manufacturer: "Hatteras", name: "58' \"Big Game\"", img: "/images/miami-sol-80.jpg", length: "58 ft", guests: 6, cabins: 2, crew: 2, price: 1500, tier: "mid" },
    { manufacturer: "Galeon", name: "55' \"Infinity\"", img: "/images/interior-lounge.jpg", length: "55 ft", guests: 6, cabins: 2, crew: 1, price: 950, tier: "small" },
    { manufacturer: "Azimut", name: "50' \"Dolce Vita\"", img: "/images/yacht-azimut.jpg", length: "50 ft", guests: 6, cabins: 2, crew: 1, price: 850, tier: "small" },
    { manufacturer: "Sea Ray", name: "45' \"Sun Chaser\"", img: "/images/miami-vip.jpg", length: "45 ft", guests: 4, cabins: 1, crew: 1, price: 650, tier: "small" },
  ];

  const tiers: Record<string, string> = {
    mega: "MEGA YACHTS — 91′+",
    large: "LARGE YACHTS — 71′–90′",
    mid: "MID-SIZE — 56′–70′",
    small: "EXPRESS — 40′–55′",
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

  const tierOrder = ["mega", "large", "mid", "small"];

  return (
    <main>
      {/* Header */}
      <header className="site-header">
        <div className="brand">DOCKTEASE MIAMI</div>
        <div className="tagline">Luxury Watercraft — Buy A Boat Today</div>
      </header>

      {/* Nav / Sort Bar */}
      <nav className="nav-bar">
        <div className="nav-inner">
          <div className="nav-links">
            {["all", "mega", "large", "mid", "small"].map(t =>
              <a key={t} className={filter === t ? "active" : ""} onClick={() => setFilter(t)} style={{cursor:"pointer"}}>
                {t === "all" ? "ALL" : t.toUpperCase()}
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

      {/* Hero Tagline */}
      <div className="hero-banner">
        <h2>Give The Global Recession The Finger</h2>
        <p>The boat of your dreams is just one click away</p>
      </div>

      {/* Vehicle Grid */}
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
                  <div key={i} className={`vehicle-card ${yacht.price >= 4000 ? "premium" : ""}`}>
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

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2026 DOCKTEASE MIAMI — LICENSED & INSURED. WE DELIVER TO YOU.</p>
      </footer>
    </main>
  );
}

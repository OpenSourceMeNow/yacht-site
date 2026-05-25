export default function Home() {
  const yachts = [
    // MEGA (91ft+)
    {
      name: "116' Pershing GTX \"Black Diamond\"",
      img: "/images/pershing-116.jpg",
      length: "116 ft",
      guests: 14,
      cabins: 5,
      crew: 5,
      price: 12000,
      tier: "mega",
    },
    {
      name: "105' Leopard \"Predator\"",
      img: "/images/princess-100.jpg",
      length: "105 ft",
      guests: 13,
      cabins: 5,
      crew: 4,
      price: 9500,
      tier: "mega",
    },
    {
      name: "100' Princess \"Monopoly\"",
      img: "/images/princess-100.jpg",
      length: "100 ft",
      guests: 12,
      cabins: 5,
      crew: 4,
      price: 8000,
      tier: "mega",
    },
    {
      name: "96' Sunseeker \"Neptune\"",
      img: "/images/sunseeker-96.jpg",
      length: "96 ft",
      guests: 12,
      cabins: 4,
      crew: 4,
      price: 6500,
      tier: "mega",
    },

    // LARGE (71-90ft)
    {
      name: "88' Princess \"Freedom\"",
      img: "/images/hero-yacht.jpg",
      length: "88 ft",
      guests: 13,
      cabins: 4,
      crew: 3,
      price: 4500,
      tier: "large",
    },
    {
      name: "88' Sirena \"Voyager\"",
      img: "/images/yacht-sirena.jpg",
      length: "88 ft",
      guests: 12,
      cabins: 4,
      crew: 3,
      price: 4200,
      tier: "large",
    },
    {
      name: "85' Mangusta \"Velocé\"",
      img: "/images/pershing-116.jpg",
      length: "85 ft",
      guests: 10,
      cabins: 4,
      crew: 3,
      price: 5000,
      tier: "large",
    },
    {
      name: "82' Sunseeker \"Ocean Dream\"",
      img: "/images/sunseeker-82.jpg",
      length: "82 ft",
      guests: 10,
      cabins: 4,
      crew: 3,
      price: 4000,
      tier: "large",
    },
    {
      name: "80' Azimut \"Salt Shaker\"",
      img: "/images/azimut-80.jpg",
      length: "80 ft",
      guests: 10,
      cabins: 4,
      crew: 3,
      price: 3800,
      tier: "large",
    },
    {
      name: "80' Miami Sol \"High Tide\"",
      img: "/images/miami-sol-80.jpg",
      length: "80 ft",
      guests: 10,
      cabins: 3,
      crew: 3,
      price: 3500,
      tier: "large",
    },
    {
      name: "75' Lazzara \"Lady H\"",
      img: "/images/sunseeker-96.jpg",
      length: "75 ft",
      guests: 8,
      cabins: 3,
      crew: 2,
      price: 3200,
      tier: "large",
    },

    // MID (56-70ft)
    {
      name: "70' Sunseeker \"Horizon\"",
      img: "/images/gig-g70.jpg",
      length: "70 ft",
      guests: 8,
      cabins: 3,
      crew: 2,
      price: 2800,
      tier: "mid",
    },
    {
      name: "68' Riva \"Dolce\"",
      img: "/images/sunseeker-96.jpg",
      length: "68 ft",
      guests: 8,
      cabins: 3,
      crew: 2,
      price: 2600,
      tier: "mid",
    },
    {
      name: "65' Ferretti \"La Bella\"",
      img: "/images/sunseeker-82.jpg",
      length: "65 ft",
      guests: 8,
      cabins: 3,
      crew: 2,
      price: 2200,
      tier: "mid",
    },
    {
      name: "62' Princess \"Royal Wave\"",
      img: "/images/hero-yacht.jpg",
      length: "62 ft",
      guests: 8,
      cabins: 2,
      crew: 2,
      price: 1950,
      tier: "mid",
    },
    {
      name: "60' Azimut \"Wine Down\"",
      img: "/images/yacht-azimut.jpg",
      length: "60 ft",
      guests: 8,
      cabins: 2,
      crew: 2,
      price: 1800,
      tier: "mid",
    },
    {
      name: "58' Hatteras \"Big Game\"",
      img: "/images/miami-sol-80.jpg",
      length: "58 ft",
      guests: 6,
      cabins: 2,
      crew: 2,
      price: 1500,
      tier: "mid",
    },

    // SMALL (40-55ft)
    {
      name: "55' Galeon \"Infinity\"",
      img: "/images/interior-lounge.jpg",
      length: "55 ft",
      guests: 6,
      cabins: 2,
      crew: 1,
      price: 950,
      tier: "small",
    },
    {
      name: "50' Azimut \"Dolce Vita\"",
      img: "/images/yacht-azimut.jpg",
      length: "50 ft",
      guests: 6,
      cabins: 2,
      crew: 1,
      price: 850,
      tier: "small",
    },
    {
      name: "45' Sea Ray \"Sun Chaser\"",
      img: "/images/miami-vip.jpg",
      length: "45 ft",
      guests: 4,
      cabins: 1,
      crew: 1,
      price: 650,
      tier: "small",
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p style={{ color: 'var(--gta-yellow)', letterSpacing: '4px', fontSize: '0.9rem', marginBottom: '1rem' }}>
            MIAMI • LUXURY • YACHTS
          </p>
          <h1>OWN THE<br /><span className="text-yellow">WATER</span></h1>
          <p className="sub">
            20 premium yachts. Instant booking. No membership fees. Just the boat, the water, and you.
          </p>
          <a href="#fleet" className="btn-primary">VIEW FLEET</a>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat">
          <div className="num">20</div>
          <div className="label">Yachts in Fleet</div>
        </div>
        <div className="stat">
          <div className="num">1,200+</div>
          <div className="label">Charters Completed</div>
        </div>
        <div className="stat">
          <div className="num">4.9</div>
          <div className="label">Guest Rating</div>
        </div>
        <div className="stat">
          <div className="num">24/7</div>
          <div className="label">Concierge</div>
        </div>
      </div>

      {/* Fleet */}
      <section className="fleet" id="fleet">
        <h2>THE <span className="text-yellow">FLEET</span></h2>
        <p className="section-sub">20 vessels. 40 to 116 feet. Find yours.</p>

        {/* Tier sections */}
        {["mega", "large", "mid", "small"].map(tier => {
          const tierYachts = yachts.filter(y => y.tier === tier)
          if (tierYachts.length === 0) return null
          const labels: Record<string, string> = {
            mega: "MEGA YACHTS • 91′+",
            large: "LARGE YACHTS • 71′–90′",
            mid: "MID-SIZE • 56′–70′",
            small: "EXPRESS • 40′–55′",
          }
          return (
            <div key={tier} style={{ marginBottom: '4rem' }}>
              <div className="tier-header">
                <h3 className="tier-label">{labels[tier]}</h3>
              </div>
              <div className="fleet-grid">
                {tierYachts.map((yacht, i) => (
                  <div key={i} className={`yacht-card ${yacht.price >= 4000 ? 'featured' : ''}`}>
                    <img src={yacht.img} alt={yacht.name} className="yacht-img" />
                    <div className="yacht-info">
                      <h3>{yacht.name}</h3>
                      <div className="yacht-specs">
                        <div className="spec">
                          <span className="spec-icon">📏</span> {yacht.length}
                        </div>
                        <div className="spec">
                          <span className="spec-icon">👥</span> {yacht.guests} guests
                        </div>
                        <div className="spec">
                          <span className="spec-icon">🛏</span> {yacht.cabins} cabins
                        </div>
                        <div className="spec">
                          <span className="spec-icon">⚓</span> {yacht.crew} crew
                        </div>
                      </div>
                      <div className="yacht-price">
                        <div className="price">
                          ${yacht.price.toLocaleString()} <span>/ 4 hours</span>
                        </div>
                        <button className="btn-book">BOOK NOW</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* Experience */}
      <section className="experience">
        <div className="experience-grid">
          <div className="exp-card">
            <div className="exp-icon">🛥️</div>
            <h3>Premium Fleet</h3>
            <p>Every vessel maintained to the highest standard. Pershing, Sunseeker, Princess — we run the best.</p>
          </div>
          <div className="exp-card">
            <div className="exp-icon">🧑‍✈️</div>
            <h3>Licensed Crew</h3>
            <p>USCG-certified captains and professional crew on every charter. Safety first, always.</p>
          </div>
          <div className="exp-card">
            <div className="exp-icon">📅</div>
            <h3>Instant Booking</h3>
            <p>Check real-time availability and book directly. No brokers. No markups. No waiting.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 MIAMI YACHT CLUB — All rights reserved. Licensed & Insured.</p>
      </footer>
    </main>
  )
}

export const metadata = { title: 'Fleet — DockTease Miami' };

const FLEET = [
  { name: 'Pink Panther', manufacturer: 'Azimut', length: '60 ft', guests: 12, cabins: 3, crew: 2, price: 1800, desc: 'Our flagship vessel. A 60-foot Azimut wrapped in iconic pink with three cabins, spacious deck, and premium sound system. Perfect for larger groups and celebrations that demand the best.', img: '/images/yacht-01.jpg' },
  { name: 'Blessed Gold', manufacturer: 'Azimut', length: '60 ft', guests: 12, cabins: 3, crew: 2, price: 1800, desc: 'Gold edition of our premium 60-footer. Same legendary Azimut platform with a gold aesthetic. Three cabins, expansive entertaining space, and the smoothest ride on Biscayne Bay.', img: '/images/yacht-02.jpg' },
  { name: 'Cotton Candy', manufacturer: 'Maxum', length: '50 ft', guests: 10, cabins: 2, crew: 2, price: 1200, desc: 'Our most Instagram-famous yacht. A 50-foot Maxum with two cabins and a massive sun deck. This boat has hosted more bachelorettes than we can count.', img: '/images/yacht-03.jpg' },
  { name: 'Bad Bunny', manufacturer: 'Maxum', length: '50 ft', guests: 10, cabins: 2, crew: 2, price: 1200, desc: 'Reggaeton vibes on the water. Another 50-foot Maxum platform but with a darker, edgier aesthetic. Two cabins, powerful sound system, and a party-ready layout.', img: '/images/yacht-05.jpg' },
  { name: 'Hello Kitty', manufacturer: 'Maxum', length: '50 ft', guests: 10, cabins: 2, crew: 2, price: 1200, desc: 'The name says it all. Our playful 50-foot Maxum that brings the fun. Popular for daytime cruises, birthday parties, and anyone who doesn\'t take themselves too seriously.', img: '/images/yacht-08.jpg' },
  { name: 'Pink Leopard', manufacturer: 'Meridian', length: '45 ft', guests: 8, cabins: 2, crew: 1, price: 900, desc: 'Our most accessible yacht without sacrificing style. A 45-foot Meridian with leopard print accents. Perfect for smaller groups, intimate celebrations, and sunset cruises.', img: '/images/yacht-06.jpg' },
];

export default function Fleet() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8 }}>Our Fleet</h1>
      <p style={{ fontSize: '1.15rem', color: '#999', marginBottom: 40 }}>6 yachts. Pink. Gold. Ready when you are.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
        {FLEET.map(y => (
          <div key={y.name} style={{ border: '1px solid #222', borderRadius: 12, overflow: 'hidden', background: '#111' }}>
            <img src={y.img} alt={y.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
            <div style={{ padding: 20 }}>
              <div style={{ color: '#f472b6', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{y.manufacturer}</div>
              <h3 style={{ fontSize: '1.5rem', margin: '4px 0 12px' }}>{y.name}</h3>
              <div style={{ display: 'flex', gap: 16, fontSize: '0.9rem', color: '#999', marginBottom: 12 }}>
                <span>📏 {y.length}</span><span>👥 {y.guests} guests</span><span>🛏 {y.cabins} cabins</span><span>⚓ {y.crew} crew</span>
              </div>
              <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: 16 }}>{y.desc}</p>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>${y.price.toLocaleString()} <small style={{ fontSize: '0.75rem', color: '#666' }}>/ 4hrs</small></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

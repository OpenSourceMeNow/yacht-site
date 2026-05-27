export const metadata = { title: 'Fleet — 305 Yacht Charters' };

const FLEET = [
  { name: 'Bad Bunny', manufacturer: 'Maxum', length: '50 ft', guests: 10, cabins: 2, crew: 2, price: 1100, desc: 'Our most popular yacht. Pink-themed 50-footer that\'s been the backdrop for countless Miami memories. Two cabins, powerful sound system, and a spacious deck built for good times.', img: '/images/yacht-01.jpg' },
  { name: 'Ace of Spades', manufacturer: 'Maxum', length: '50 ft', guests: 10, cabins: 2, crew: 2, price: 1100, desc: 'Sleek black-and-gold 50-footer with a premium sound system and expansive deck space. Perfect for groups that want to make a statement on the water.', img: '/images/yacht-02.jpg' },
  { name: 'Hello Kitty', manufacturer: 'Maxum', length: '50 ft', guests: 10, cabins: 2, crew: 2, price: 1100, desc: 'The fun one. 50-foot Maxum that\'s ideal for birthdays, daytime cruises, and anyone who doesn\'t take themselves too seriously. Always a good vibe.', img: '/images/yacht-03.jpg' },
  { name: 'Blessed Gold', manufacturer: 'Azimut', length: '55 ft', guests: 12, cabins: 3, crew: 2, price: 1500, desc: 'Our flagship 55-foot Azimut. Three cabins, premium finishes throughout, and the smoothest ride on Biscayne Bay. This is the one for celebrations that demand the best.', img: '/images/yacht-05.jpg' },
  { name: 'Meridian', manufacturer: 'Meridian', length: '40 ft', guests: 8, cabins: 1, crew: 1, price: 900, desc: 'Our most accessible yacht without sacrificing style. A 40-foot Meridian perfect for intimate gatherings, sunset cruises, and smaller groups looking for a premium experience.', img: '/images/yacht-06.jpg' },
];

export default function Fleet() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8 }}>Our Fleet</h1>
      <p style={{ fontSize: '1.15rem', color: '#999', marginBottom: 40 }}>5 luxury yachts. Starting at $900. Ready when you are.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
        {FLEET.map(y => (
          <div key={y.name} style={{ border: '1px solid #222', borderRadius: 12, overflow: 'hidden', background: '#111' }}>
            <img src={y.img} alt={y.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
            <div style={{ padding: 20 }}>
              <div style={{ color: '#1a9cd9', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{y.manufacturer}</div>
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

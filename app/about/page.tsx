export const metadata = { title: 'About — DockTease Miami' };

export default function About() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16 }}>About DockTease Miami</h1>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#ccc', marginBottom: 24 }}>
        Miami's original pink yacht experience. We offer private luxury yacht charters
        with a fleet of six meticulously maintained vessels — from 45ft to 60ft, each
        with its own personality and vibe.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#ccc', marginBottom: 24 }}>
        Whether you're celebrating a birthday, bachelorette party, anniversary, or just
        want to give the global recession the finger — we've got you covered. Our captains
        are USCG-licensed professionals with years of experience navigating Miami's waters.
      </p>
      <h2 style={{ fontSize: '1.6rem', marginTop: 40, marginBottom: 16 }}>What Sets Us Apart</h2>
      <ul style={{ fontSize: '1.1rem', lineHeight: 2, color: '#bbb', paddingLeft: 20 }}>
        <li>Fleet of 6 themed luxury yachts — the largest pink yacht collection in Miami</li>
        <li>Real-time availability — see what's open right now, no bait-and-switch</li>
        <li>Licensed USCG captains on every charter</li>
        <li>Direct booking — no brokers, no hidden fees</li>
        <li>Original pink yacht experience since 2020</li>
      </ul>
      <h2 style={{ fontSize: '1.6rem', marginTop: 40, marginBottom: 16 }}>Our Promise</h2>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#ccc' }}>
        Every charter includes captain, fuel for standard Miami routes, cooler with ice
        and water, Bluetooth sound system, and all required safety equipment. You bring
        the vibes — we handle the rest.
      </p>
    </main>
  );
}

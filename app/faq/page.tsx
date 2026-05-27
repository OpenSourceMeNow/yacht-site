export const metadata = { title: 'FAQ — 305 Yacht Charters' };

const FAQ = [
  { q: 'What\'s included in the price?', a: 'Every charter includes a licensed USCG captain, fuel for standard Miami routes, cooler with ice and water, Bluetooth sound system, and all required safety equipment. Food, drinks, and special requests are separate.' },
  { q: 'How do I book?', a: 'Browse our fleet, pick your yacht, and contact us via WhatsApp or the contact form. We\'ll confirm availability, send you an invoice for the 50% deposit, and lock in your date. Final balance is due 7 days before your charter.' },
  { q: 'What\'s the cancellation policy?', a: '50% refund if canceled 7 or more days before your charter. Within 7 days, payments are non-refundable. If we cancel due to unsafe weather, we\'ll reschedule at no cost.' },
  { q: 'Can we bring our own food and drinks?', a: 'Absolutely. Bring whatever you want — food, drinks, decorations. We provide the cooler, ice, and water to start you off.' },
  { q: 'Is there a bathroom on board?', a: 'Yes, all our yachts have a bathroom (head) on board.' },
  { q: 'What happens in bad weather?', a: 'Safety first. If there\'s a small craft advisory, lightning, or sustained winds over 30 mph, we\'ll reschedule your charter at no charge. A little rain won\'t stop us — Miami weather changes fast.' },
  { q: 'Do you allow swimming?', a: 'Yes! We can anchor at sandbars or calm spots for swimming. Just let your captain know.' },
  { q: 'Can we play our own music?', a: 'Yes. All yachts have Bluetooth sound systems — connect your phone and you\'re the DJ.' },
  { q: 'What\'s the maximum capacity?', a: 'Varies by yacht — 8 guests on Meridian (40ft), 10 on our 50ft Maxums, and 12 on Blessed Gold (55ft). This includes everyone on board except crew.' },
  { q: 'Where do we depart from?', a: 'We operate out of Miami marinas and can deliver the yacht to your preferred pickup location. Details confirmed at booking.' },
];

export default function FAQPage() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8 }}>Frequently Asked Questions</h1>
      <p style={{ fontSize: '1.15rem', color: '#999', marginBottom: 40 }}>Everything you need to know before you book.</p>
      {FAQ.map((item, i) => (
        <details key={i} style={{ borderBottom: '1px solid #222', padding: '20px 0', cursor: 'pointer' }}>
          <summary style={{ fontSize: '1.15rem', fontWeight: 600, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {item.q}
            <span style={{ fontSize: '1.3rem', color: '#1a9cd9', marginLeft: 16 }}>+</span>
          </summary>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#bbb', marginTop: 12 }}>{item.a}</p>
        </details>
      ))}
    </main>
  );
}

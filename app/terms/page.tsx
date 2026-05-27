export const metadata = { title: 'Terms — DockTease Miami' };

export default function Terms() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', lineHeight: 1.8, color: '#ccc' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: 24 }}>Terms & Conditions</h1>
      <p style={{ marginBottom: 16 }}>Last updated: May 2026</p>

      <h2 style={{ fontSize: '1.4rem', color: '#fff', marginTop: 32, marginBottom: 12 }}>1. Booking & Payment</h2>
      <p>A 50% deposit is required to secure your booking. The remaining balance is due 7 days before your charter date. All payments are processed through Stripe and accepted via credit card, debit card, Apple Pay, and Google Pay.</p>

      <h2 style={{ fontSize: '1.4rem', color: '#fff', marginTop: 32, marginBottom: 12 }}>2. Cancellation Policy</h2>
      <p>50% refund if canceled 7 or more days before the charter date. Cancellations within 7 days are non-refundable. DockTease Miami reserves the right to cancel any charter due to unsafe weather conditions, in which case a full refund or reschedule will be offered.</p>

      <h2 style={{ fontSize: '1.4rem', color: '#fff', marginTop: 32, marginBottom: 12 }}>3. Weather Policy</h2>
      <p>Safety is our priority. If conditions include a small craft advisory, lightning, or sustained winds exceeding 30 mph, the charter will be rescheduled at no additional cost. Light rain does not constitute unsafe weather.</p>

      <h2 style={{ fontSize: '1.4rem', color: '#fff', marginTop: 32, marginBottom: 12 }}>4. Conduct</h2>
      <p>The captain has final authority on all matters regarding safety and conduct. Intoxicated, disruptive, or unsafe behavior may result in early termination of the charter with no refund. Illegal substances and weapons are strictly prohibited.</p>

      <h2 style={{ fontSize: '1.4rem', color: '#fff', marginTop: 32, marginBottom: 12 }}>5. Liability & Damages</h2>
      <p>Clients are responsible for any damage to the vessel or equipment caused by passengers beyond normal wear and tear. DockTease Miami is not liable for personal injuries resulting from failure to follow crew instructions or reckless behavior.</p>

      <h2 style={{ fontSize: '1.4rem', color: '#fff', marginTop: 32, marginBottom: 12 }}>6. Contact</h2>
      <p>For any questions about these terms, contact us at +1 (321) 221-5973 or via WhatsApp.</p>
    </main>
  );
}

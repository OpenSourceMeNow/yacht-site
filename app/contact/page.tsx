export const metadata = { title: 'Contact — DockTease Miami' };

export default function Contact() {
  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '60px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8 }}>Contact Us</h1>
      <p style={{ fontSize: '1.15rem', color: '#999', marginBottom: 32 }}>Ready to book? Have a question? Reach out.</p>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, fontSize: '1.1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>📱</span>
          <a href="tel:+13212215973" style={{ color: '#f472b6', textDecoration: 'none', fontWeight: 600 }}>+1 (321) 221-5973</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, fontSize: '1.1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>💬</span>
          <a href="https://wa.me/13212215973" target="_blank" rel="noopener" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>Chat on WhatsApp</a>
        </div>
      </div>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          style={{
            padding: '14px 16px',
            fontSize: '1rem',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: 8,
            color: 'white',
            outline: 'none',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          style={{
            padding: '14px 16px',
            fontSize: '1rem',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: 8,
            color: 'white',
            outline: 'none',
          }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your phone (optional)"
          style={{
            padding: '14px 16px',
            fontSize: '1rem',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: 8,
            color: 'white',
            outline: 'none',
          }}
        />
        <textarea
          name="message"
          placeholder="Tell us what you're looking for — date, yacht, number of guests..."
          rows={5}
          required
          style={{
            padding: '14px 16px',
            fontSize: '1rem',
            background: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: 8,
            color: 'white',
            outline: 'none',
            resize: 'vertical',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '14px 32px',
            fontSize: '1.1rem',
            fontWeight: 700,
            background: '#f472b6',
            color: '#111',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </main>
  );
}

// CTA + Footer

function CTA() {
  return (
    <section id="contact" style={{ padding: '140px 0 120px', background: 'var(--ink)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      {/* Faint giant mark behind */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', opacity: 0.05, pointerEvents: 'none' }}
        width="900"
        height="900"
        viewBox="0 0 32 32"
      >
        <circle cx="16" cy="16" r="15.5" stroke="#F4EDDE" strokeWidth="0.35" fill="none" />
        <circle cx="16" cy="16" r="11" stroke="#F4EDDE" strokeWidth="0.3" fill="none" />
        <circle cx="16" cy="16" r="6" stroke="#F4EDDE" strokeWidth="0.25" fill="none" />
        <circle cx="16" cy="16" r="2.6" fill="#B8472A" />
      </svg>

      {/* Soft accent glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-15%', bottom: '-15%',
        width: 700, height: 700,
        background: 'radial-gradient(closest-side, rgba(184,71,42,0.18), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: '20ch', margin: '0 auto 32px' }}>
          <span className="section-label" style={{ color: '#C9C0B0' }}>10 · Start a project</span>
        </div>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(56px, 9.5vw, 144px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            margin: '0 auto 32px',
            textAlign: 'center',
            maxWidth: '18ch',
            fontWeight: 360,
          }}
        >
          Let's build the site your <span className="serif-italic" style={{ color: 'var(--accent-soft)' }}>audience</span> deserves.
        </h2>
        <p style={{ fontSize: 19, color: '#C9C0B0', textAlign: 'center', maxWidth: '54ch', margin: '0 auto 48px', lineHeight: 1.55 }}>
          45-minute discovery call. No slide deck. No sales script. Just an honest conversation about
          whether we're the right studio for what you're trying to build.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <a
            href={NC_WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn btn-arrow"
            style={{ background: '#25D366', color: '#0B3D2E', padding: '18px 28px', fontSize: 15, border: '1px solid #25D366', display: 'inline-flex', alignItems: 'center', gap: 10 }}
          >
            <WhatsAppGlyph size={16} color="#0B3D2E" />
            Get in touch on WhatsApp
          </a>
          <a
            href={NC_WA_SCHEDULE_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn btn-arrow"
            style={{ background: 'transparent', color: 'var(--paper)', border: '1px solid #3a342c', padding: '18px 28px', fontSize: 15 }}
          >
            Schedule a meeting
          </a>
          <a
            href={`mailto:${NC_EMAIL}`}
            className="btn"
            style={{ background: 'var(--paper)', color: 'var(--ink)', padding: '18px 28px', fontSize: 15 }}
          >
            Email instead
          </a>
        </div>

        {/* Direct contact strip */}
        <div style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72, alignItems: 'center' }}>
          <a
            href="mailto:codes.bhaskar@gmail.com"
            className="mono"
            style={{
              fontSize: 13,
              letterSpacing: '0.06em',
              color: '#E8E1CE',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M2 4 L8 9 L14 4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
            </svg>
            codes.bhaskar@gmail.com
          </a>
          <span style={{ color: '#3a342c' }}>·</span>
          <a
            href="tel:+917906654584"
            className="mono"
            style={{
              fontSize: 13,
              letterSpacing: '0.06em',
              color: '#E8E1CE',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 2.5 L5.5 2.5 L6.8 5 L5 6 C5.5 8 7 9.5 9 10 L10 8.2 L13 9.5 L13 11.5 C13 12.3 12.3 13 11.5 13 C6 13 3 10 3 4.5 C3 3.7 3 2.5 3.5 2.5 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
            </svg>
            +91 79066 54584
          </a>
        </div>

        <div
          className="cta-meta"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: '#2a241d',
            border: '1px solid #2a241d',
            borderRadius: 18,
            overflow: 'hidden',
            maxWidth: 960,
            margin: '0 auto',
          }}
        >
          {[
            { l: 'Currently open for', v: '3 projects · Q3 2026' },
            { l: 'Response time', v: 'Same business day' },
            { l: 'Based in / serving', v: 'Dehradun · worldwide' },
          ].map((m, i) => (
            <div key={i} style={{ background: 'var(--ink)', padding: '24px 26px' }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A8175', marginBottom: 8 }}>
                {m.l}
              </div>
              <div className="serif" style={{ fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 380 }}>{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .cta-meta { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: '#C9C0B0', borderTop: '1px solid #2a241d', padding: '48px 0 36px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 36,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <NorthcraftMark size={28} color="#F4EDDE" />
              <span className="serif" style={{ fontSize: 24, color: 'var(--paper)', letterSpacing: '-0.02em', fontWeight: 380 }}>Northcraft</span>
            </div>
            <p style={{ fontSize: 14, color: '#8A8175', maxWidth: '34ch', lineHeight: 1.6, margin: '0 0 18px 0' }}>
              A four-person studio building bespoke websites for creators and service-led businesses. Conversion-first, calmly. Plans from ₹8,000.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="mailto:codes.bhaskar@gmail.com" style={{ fontSize: 13, color: '#E8E1CE', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
                codes.bhaskar@gmail.com
              </a>
              <a href="tel:+917906654584" style={{ fontSize: 13, color: '#E8E1CE', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em' }}>
                +91 79066 54584
              </a>
            </div>
          </div>

          <FooterCol title="Studio" links={[
            ['Selected work', '#work'],
            ['Our approach', '#approach'],
            ['The team', '#team'],
          ]} />
          <FooterCol title="Services" links={[
            ['Pricing', '#pricing'],
            ['FAQ', '#faq'],
            ['Get in touch (WhatsApp)', NC_WA_LINK],
          ]} />
          <FooterCol title="Contact" links={[
            ['WhatsApp Bhaskar', NC_WA_LINK],
            ['Email', `mailto:${NC_EMAIL}`],
            ['Phone', `tel:+${NC_PHONE}`],
          ]} />
        </div>

        <div
          style={{
            paddingTop: 24,
            borderTop: '1px solid #2a241d',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 14,
            alignItems: 'center',
          }}
        >
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A8175' }}>
            © 2026 Northcraft Studio · made in Dehradun, IN
          </span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A8175', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2F4A2A' }} />
            currently accepting projects
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F4EDDE', marginBottom: 16 }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} style={{ fontSize: 14, color: '#C9C0B0', transition: 'color .2s ease' }}
               onMouseEnter={e => e.currentTarget.style.color = '#FAF7EE'}
               onMouseLeave={e => e.currentTarget.style.color = '#C9C0B0'}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { CTA, Footer });

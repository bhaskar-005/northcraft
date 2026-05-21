'use client';

import { useEffect, useState } from 'react';
import { NorthcraftMark, BrowserFrame } from './atoms';
import { NC_WA_LINK, NC_WA_SCHEDULE_LINK } from './contact';
import { track } from './analytics';
import { HeroCircles } from './hero-circles';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(244,240,230,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 36px',
        }}
      >
        <a href="#top" aria-label="Northcraft Studio home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <NorthcraftMark size={26} />
          <span className="serif" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
            Northcraft
          </span>
          <span
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginLeft: 4,
              borderLeft: '1px solid var(--line)',
              paddingLeft: 10,
            }}
          >
            studio
          </span>
        </a>
        <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links">
          {[
            ['Work', '#work'],
            ['Approach', '#approach'],
            ['Team', '#team'],
            ['Pricing', '#pricing'],
            ['FAQ', '#faq'],
          ].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: 14, color: 'var(--ink-2)', position: 'relative' }} className="nav-a">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={NC_WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-arrow"
          style={{ padding: '10px 18px', fontSize: 14 }}
          onClick={() => track('cta_click', { id: 'nav_wa', label: 'Get in touch', location: 'nav' })}
        >
          Get in touch
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
          style={{
            display: 'none',
            background: 'transparent', border: '1px solid var(--line)',
            borderRadius: 10, padding: '8px 10px',
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d={mobileOpen ? "M2 2 L16 12 M16 2 L2 12" : "M2 3 H16 M2 7 H16 M2 11 H16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu" style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)', padding: '14px 22px 22px' }}>
          {[
            ['Work', '#work'],
            ['Approach', '#approach'],
            ['Team', '#team'],
            ['Pricing', '#pricing'],
            ['FAQ', '#faq'],
            ['Contact', '#contact'],
          ].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid var(--line-soft)', fontSize: 17 }} className="serif">{l}</a>
          ))}
        </div>
      )}
      <style>{`
        .nav-a::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 1px;
          background: var(--accent); transform: scaleX(0); transform-origin: left;
          transition: transform .25s cubic-bezier(.2,.7,.3,1);
        }
        .nav-a:hover { color: var(--ink); }
        .nav-a:hover::after { transform: scaleX(1); }
        @media (max-width: 920px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: inline-flex !important; align-items: center; justify-content: center; }
          header .btn { display: none; }
        }
      `}</style>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" style={{ position: 'relative', paddingTop: 56, paddingBottom: 96, overflow: 'hidden' }}>
      <HeroCircles />

      <div className="container" style={{ position: 'relative' }}>
        <div
          className="rise"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            marginBottom: 64,
            flexWrap: 'wrap',
          }}
        >
          <span className="eyebrow">Open for 3 projects · Q3 2026</span>
          <span className="mono" style={{ fontSize: 11.5, color: 'var(--muted)', letterSpacing: '0.04em' }}>
            est. 2022 · Dehradun, IN · working worldwide
          </span>
        </div>

        <h1
          className="serif rise"
          style={{
            fontSize: 'clamp(56px, 10vw, 140px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            margin: 0,
            maxWidth: '15ch',
            fontWeight: 360,
          }}
        >
          Websites that turn{' '}
          <span className="serif-italic" style={{ color: 'var(--accent)' }}>visitors</span>{' '}
          into <span style={{ whiteSpace: 'nowrap' }}>customers.</span>
        </h1>

        <div
          className="hero-grid rise"
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 56,
            alignItems: 'end',
            animationDelay: '.1s',
          }}
        >
          <p style={{ fontSize: 19.5, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '54ch', margin: 0 }}>
            A four-person studio building bespoke landing pages, product sites and full MVPs —
            for anyone with something worth building. No templates, no bloat.{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Pricing is scoped to your project.</strong>
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            <a
              href={NC_WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-arrow"
              onClick={() => track('cta_click', { id: 'hero_wa', label: 'Get in touch', location: 'hero' })}
            >
              Get in touch
            </a>
            <a
              href={NC_WA_SCHEDULE_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-arrow"
              onClick={() => track('cta_click', { id: 'hero_schedule', label: 'Schedule a meeting', location: 'hero' })}
            >
              Schedule a meeting
            </a>
          </div>
        </div>

        <div
          className="rise"
          style={{
            marginTop: 80,
            position: 'relative',
            animationDelay: '.2s',
          }}
        >
          <BrowserFrame url="codingknowledge.in" aspect="16/8">
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <video
                src="/coding-knowledge/video.mp4"
                autoPlay muted loop playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 40%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: 18, left: 18,
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(12,12,14,0.68)', backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 999, padding: '6px 14px',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.2)', animation: 'pulse 2s ease-in-out infinite', flexShrink: 0 }} />
                <span style={{ fontSize: 10.5, fontFamily: 'JetBrains Mono', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e8e4dc' }}>
                  Recent work · codingknowledge.in
                </span>
              </div>
            </div>
          </BrowserFrame>

          <div
            className="hero-stats"
            style={{
              position: 'absolute',
              left: 28,
              bottom: -32,
              background: 'var(--ink)',
              color: 'var(--paper)',
              padding: '20px 26px',
              borderRadius: 16,
              display: 'flex',
              gap: 32,
              alignItems: 'center',
              boxShadow: '0 30px 70px -20px rgba(20,17,13,0.4)',
              border: '1px solid #2a241d',
            }}
          >
            <div>
              <div className="serif" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>3.4×</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9C0B0', marginTop: 6 }}>
                avg. conversion lift
              </div>
            </div>
            <div style={{ width: 1, height: 40, background: '#3a342c' }} />
            <div>
              <div className="serif" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>18 days</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9C0B0', marginTop: 6 }}>
                typical turnaround
              </div>
            </div>
            <div style={{ width: 1, height: 40, background: '#3a342c' }} />
            <div>
              <div className="serif" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>100<span style={{ fontSize: 18 }}>%</span></div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9C0B0', marginTop: 6 }}>
                custom built, zero templates
              </div>
            </div>
          </div>

          <a
            href="tel:+917906654584"
            className="hero-chip"
            style={{
              position: 'absolute',
              right: 24,
              top: 24,
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 999,
              padding: '8px 14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: 'var(--shadow-card)',
              textDecoration: 'none',
              color: 'var(--ink)',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2F4A2A', boxShadow: '0 0 0 4px rgba(47,74,42,0.12)' }} />
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
              +91 79066 54584
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .hero-stats {
            position: static !important;
            margin-top: 20px !important;
            flex-wrap: wrap;
            gap: 20px !important;
            padding: 16px 18px !important;
          }
          .hero-chip { display: none !important; }
        }
      `}</style>
    </section>
  );
}

export function Marquee() {
  const items = [
    'Bespoke landing pages',
    'Brand systems',
    'Product sites',
    'E-commerce',
    'Startup MVPs',
    'Booking + lead capture',
    'SEO foundations',
    'Conversion-first design',
    'Custom pricing',
  ];
  const row = [...items, ...items];
  return (
    <div
      style={{
        marginTop: 56,
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--bg-2)',
        overflow: 'hidden',
        padding: '22px 0',
      }}
    >
      <div className="marquee-track" style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap', width: 'max-content' }}>
        {row.map((it, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 24,
            }}
          >
            <span className="serif-italic" style={{ fontSize: 24, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{it}</span>
            <span style={{ color: 'var(--accent)', fontSize: 14 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

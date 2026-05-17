'use client';

import { useState } from 'react';
import { Check, WhatsAppGlyph } from './atoms';
import { NC_WA_LINK, NC_EMAIL, NC_PHONE_TEL, NC_PHONE_DISPLAY } from './contact';

const TIERS = [
  {
    name: 'Starter',
    sub: 'For a focused, fast launch',
    price: '₹8,000',
    note: 'one-time · delivered in 10 days',
    highlight: false,
    inc: [
      '3 to 4 pages (home, about, services, contact)',
      'Mobile-first responsive design',
      'On-page SEO + meta tags',
      'Connected to your domain + email',
      '1 round of revisions',
      'Basic analytics setup',
    ],
    bestFor: 'Best for small businesses, coaches, a single offer',
  },
  {
    name: 'Studio',
    sub: 'For service businesses + product sites',
    price: '₹30,000',
    note: 'one-time · delivered in 18 days',
    highlight: true,
    inc: [
      'Up to 8 pages with custom layouts',
      'Audience research + offer brief',
      'Custom design system + brand polish',
      'Full SEO stack: schema, sitemap, content briefs',
      'Analytics + heatmap setup',
      'Booking / lead capture integrations',
      '21 days of free iteration',
    ],
    bestFor: 'Best for service businesses, agencies, B2B',
  },
  {
    name: 'SaaS MVP',
    sub: 'Full product, end to end',
    price: '₹50,000',
    note: 'one-time · v1 in 25 to 30 days',
    highlight: false,
    inc: [
      'Complete SaaS MVP, end to end',
      'Auth, dashboard, payments, core flows',
      'Marketing site + product surface together',
      'Database + backend wired up',
      'Stripe / Razorpay billing ready',
      'Deploy + go-live support',
      '30 days of free iteration',
    ],
    bestFor: 'Best for founders launching a real product',
  },
];

export function Pricing() {
  return (
    <section id="pricing" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">08 · Plans</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: '16ch',
              fontWeight: 360,
            }}
          >
            Honest pricing. <span className="serif-italic" style={{ color: 'var(--accent)' }}>Pick</span> your plan.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', maxWidth: '38ch', margin: 0, lineHeight: 1.6 }}>
            Three flat-fee plans for most use cases. Building something larger?
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}> Talk to us</strong> and we will scope it together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="pricing-grid">
          {TIERS.map((t) => (
            <article
              key={t.name}
              style={{
                background: t.highlight ? 'var(--ink)' : 'var(--paper)',
                color: t.highlight ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid ' + (t.highlight ? 'var(--ink)' : 'var(--line)'),
                borderRadius: 24,
                padding: 32,
                position: 'relative',
                boxShadow: t.highlight ? '0 30px 80px -30px rgba(20,17,13,0.4)' : 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                transform: t.highlight ? 'translateY(-8px)' : 'none',
              }}
              className="pricing-card"
            >
              {t.highlight && (
                <span
                  className="mono"
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-soft)',
                    background: 'rgba(232,201,181,0.1)',
                    border: '1px solid rgba(232,201,181,0.18)',
                    padding: '5px 12px',
                    borderRadius: 999,
                  }}
                >
                  most popular
                </span>
              )}
              <h3 className="serif" style={{ fontSize: 38, lineHeight: 1, margin: '0 0 8px 0', letterSpacing: '-0.025em', fontWeight: 360 }}>
                {t.name}
              </h3>
              <p style={{ fontSize: 13.5, color: t.highlight ? '#C9C0B0' : 'var(--ink-3)', margin: '0 0 26px 0' }}>
                {t.sub}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                <span className="serif" style={{ fontSize: 52, letterSpacing: '-0.03em', lineHeight: 1, fontWeight: 360 }}>{t.price}</span>
              </div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: t.highlight ? '#8A8175' : 'var(--muted)', marginBottom: 26 }}>
                {t.note}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, marginBottom: 30 }}>
                {t.inc.map((line, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: t.highlight ? '#E8E1CE' : 'var(--ink-2)' }}>
                    <span style={{ marginTop: 4, flexShrink: 0 }}><Check color={t.highlight ? '#E8C9B5' : '#2F4A2A'} /></span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: t.highlight ? '#8A8175' : 'var(--muted)', marginBottom: 16 }}>
                  {t.bestFor}
                </div>
                <a
                  href={NC_WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-arrow"
                  style={{
                    background: t.highlight ? 'var(--paper)' : 'var(--ink)',
                    color: t.highlight ? 'var(--ink)' : 'var(--paper)',
                    width: '100%',
                  }}
                >
                  Start with {t.name}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            padding: 26,
            background: 'var(--paper)',
            border: '1px dashed var(--line)',
            borderRadius: 18,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 22,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
              Need something bigger?
            </div>
            <div className="serif" style={{ fontSize: 22, color: 'var(--ink-2)', maxWidth: '52ch', letterSpacing: '-0.015em', lineHeight: 1.35, fontWeight: 380 }}>
              For custom builds beyond ₹50,000, multi-product surfaces, or longer engagements: talk to us. We will quote it together after a quick call.
            </div>
          </div>
          <a href={NC_WA_LINK} target="_blank" rel="noreferrer" className="btn btn-primary btn-arrow">Talk to us</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-card { transform: none !important; }
        }
      `}</style>
    </section>
  );
}

const FAQS = [
  {
    q: 'Why not just use a Webflow / Framer template?',
    a: 'Sometimes a template is the right call and we will tell you that on the discovery call. But templates are built for the average of everyone. The real difference is research: understanding how your audience monetises, then designing UI, UX and SEO around that. Whether the underlying tooling is custom code, a template, or a page builder is a means to an end.',
  },
  {
    q: 'How is this different from hiring a freelancer?',
    a: 'You get four specialists instead of one generalist juggling twelve clients. A designer, a developer, an SEO strategist and a producer, for less than the cost of one senior freelancer in most cities. We take one project at a time, so we are actually present for yours.',
  },
  {
    q: 'Do you work with creators / influencers?',
    a: 'It is half of what we do. If you have between 10k and 500k followers and have never built a real product surface, we are probably the best ROI you can make this year.',
  },
  {
    q: 'What if I don’t have brand assets or copy yet?',
    a: 'Most of our clients do not. We write the copy, design the brand, and ship the site. You bring the audience and the offer; we bring everything else.',
  },
  {
    q: 'How long does a project actually take?',
    a: 'Starter: 10 days. Studio: 18 days. SaaS MVP: 25 to 30 days. We have shipped a v1 in 5 days when a launch demanded it, but it costs more and we will only do it if your offer is already locked.',
  },
  {
    q: 'Do you do ongoing maintenance?',
    a: 'Yes. Every project ships with 14 to 30 days of free iteration after launch. After that we offer a flat care plan from ₹3,000 per month, scaling up by plan.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 72, alignItems: 'flex-start' }} className="faq-grid">
          <div style={{ position: 'sticky', top: 100 }}>
            <span className="section-label" style={{ display: 'block', marginBottom: 14 }}>09 · Common questions</span>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.6vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', margin: 0, maxWidth: '14ch', fontWeight: 360 }}>
              Honest answers to <span className="serif-italic" style={{ color: 'var(--accent)' }}>real</span> questions.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 26, maxWidth: '40ch', lineHeight: 1.6 }}>
              Still curious? Reply to any of our emails. Bhaskar reads and answers every one personally, usually within a day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22, alignItems: 'flex-start' }}>
              <a
                href={NC_WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-arrow"
                style={{ background: '#25D366', color: '#0B3D2E', border: '1px solid #25D366', display: 'inline-flex', alignItems: 'center', gap: 10 }}
              >
                <WhatsAppGlyph size={14} color="#0B3D2E" />
                Chat on WhatsApp
              </a>
              <a href={`mailto:${NC_EMAIL}`} className="btn btn-ghost btn-arrow">
                {NC_EMAIL}
              </a>
              <a href={`tel:${NC_PHONE_TEL}`} className="btn btn-ghost btn-arrow">
                {NC_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 0,
                      padding: '24px 4px',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                      color: 'var(--ink)',
                    }}
                  >
                    <span className="serif" style={{ fontSize: 23, lineHeight: 1.25, letterSpacing: '-0.02em', fontWeight: 380 }}>
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 32, height: 32, borderRadius: '50%',
                        border: '1px solid var(--line)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--accent)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform .25s cubic-bezier(.2,.7,.3,1), background .25s ease',
                        background: isOpen ? 'rgba(184,71,42,0.08)' : 'transparent',
                        flexShrink: 0,
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 18,
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows .35s cubic-bezier(.2,.7,.3,1)',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ fontSize: 16, color: 'var(--ink-2)', margin: '0 0 24px 0', maxWidth: '62ch', lineHeight: 1.65 }}>
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .faq-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}

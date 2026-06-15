'use client';

import { useState } from 'react';
import { Check, WhatsAppGlyph } from './atoms';
import { NC_WA_LINK, NC_EMAIL, NC_PHONE_TEL, NC_PHONE_DISPLAY, NC_CONTACT_FORM } from './contact';
import { track } from './analytics';

const TIERS = [
  {
    name: 'Landing Page',
    sub: 'For a focused, fast launch',
    badge: 'Starts from $75 / ₹6K',
    note: 'custom quote · delivered in 1–3 days',
    highlight: false,
    inc: [
      '3 to 4 pages (home, about, services, contact)',
      'Mobile-first responsive design',
      'On-page SEO + meta tags',
      'Connected to your domain + email',
      '2 rounds of revisions',
      'Basic analytics setup',
    ],
    bestFor: 'Best for small businesses, freelancers, a single offer',
  },
  {
    name: 'Full Website',
    sub: 'For businesses that need more',
    badge: 'From $299 / ₹25K',
    note: 'custom quote · delivered in ~18 days',
    highlight: true,
    inc: [
      'Up to 8 pages with custom layouts',
      'Competitor research + offer brief',
      'Custom design system + brand polish',
      'Full SEO stack: schema, sitemap, content briefs',
      'Analytics + heatmap setup',
      'Booking / lead capture integrations',
      '21 days of free iteration',
    ],
    bestFor: 'Best for service businesses, agencies, growing teams',
  },
  {
    name: 'Product MVP',
    sub: 'Full product, end to end',
    badge: 'From $600 / ₹50K',
    note: 'custom quote · v1 in 25–30 days',
    highlight: false,
    inc: [
      'Complete product MVP, end to end',
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
          <span className="section-label">08 · What we build</span>
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
            What we build. <span className="serif-italic" style={{ color: 'var(--accent)' }}>Priced</span> for you.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', maxWidth: '40ch', margin: 0, lineHeight: 1.6 }}>
            Every project is scoped individually — you only pay for what you actually need.
            Prices shown are starting points in both <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>USD ($) and INR (₹)</strong>.{' '}
            Start with a free 45-min call and we will give you a straight quote.
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
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.06em',
                    color: t.highlight ? 'var(--accent-soft)' : 'var(--accent)',
                    background: t.highlight ? 'rgba(232,201,181,0.1)' : 'rgba(184,71,42,0.08)',
                    border: `1px solid ${t.highlight ? 'rgba(232,201,181,0.2)' : 'rgba(184,71,42,0.18)'}`,
                    padding: '6px 14px',
                    borderRadius: 999,
                  }}
                >
                  {t.badge}
                </span>
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
                  onClick={() => track('pricing_start', { tier: t.name, location: 'pricing' })}
                  style={{
                    background: t.highlight ? 'var(--paper)' : 'var(--ink)',
                    color: t.highlight ? 'var(--ink)' : 'var(--paper)',
                    width: '100%',
                  }}
                >
                  Discuss this project
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            padding: '34px 40px',
            background: 'var(--ink)',
            border: '1px solid rgba(232,201,181,0.12)',
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 28,
            flexWrap: 'wrap',
            boxShadow: '0 24px 64px -24px rgba(20,17,13,0.45)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(184,71,42,0.14) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent-soft)', marginBottom: 10, opacity: 0.85 }}>
              Not sure which fits you?
            </div>
            <div className="serif" style={{ fontSize: 24, color: '#E8E1CE', maxWidth: '52ch', letterSpacing: '-0.018em', lineHeight: 1.32, fontWeight: 380 }}>
              Tell us what you are building and we will scope it honestly.{' '}
              <span style={{ color: '#C9C0B0' }}>No sales pressure — just a straight conversation about what makes sense.</span>
            </div>
          </div>
          <a
            href={NC_WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn btn-arrow"
            onClick={() => track('cta_click', { id: 'pricing_custom', label: 'Talk to us', location: 'pricing' })}
            style={{ background: 'var(--paper)', color: 'var(--ink)', flexShrink: 0, position: 'relative' }}
          >
            Talk to us
          </a>
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
    q: 'Who do you work with?',
    a: 'Anyone with something worth building online. Small business owners, startup founders, freelancers, consultants, coaches, local businesses, creators — if you need a landing page, product site or MVP built right, we are the right studio. Many of our clients have never worked with a web studio before. That is fine. We handle everything.',
  },
  {
    q: 'Why not just use a Webflow / Framer template?',
    a: 'Sometimes a template is the right call and we will tell you that on the discovery call. But templates are built for the average of everyone. The real difference is research: understanding how your customers decide to buy, then designing UI, UX and SEO around that. Whether the underlying tooling is custom code, a template, or a page builder is a means to an end.',
  },
  {
    q: 'How is this different from hiring a freelancer?',
    a: 'You get four specialists instead of one generalist juggling twelve clients. A designer, a developer, an SEO strategist and a producer. We take one project at a time, so we are actually present for yours — not sending updates once a week from across five other jobs.',
  },
  {
    q: "What if I don't have brand assets or copy yet?",
    a: 'Most of our clients do not. We write the copy, design the brand, and ship the site. You bring the idea and the offer; we bring everything else.',
  },
  {
    q: 'How long does a project actually take?',
    a: 'Landing page: 1 to 3 days. Full website: ~18 days. Product MVP: 25 to 30 days. We have shipped a v1 in 5 days when a launch demanded it, but we will only do that if the offer is already fully locked.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We work with clients worldwide. Prices are quoted in both USD and INR. If you are outside India and do not use WhatsApp, use our contact form to reach us — we reply the same business day.',
  },
  {
    q: 'Do you do ongoing maintenance?',
    a: 'Yes. Every project ships with 14 to 30 days of free iteration after launch. After that we offer a flat care plan — scope and pricing discussed on the discovery call.',
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
                onClick={() => track('cta_click', { id: 'faq_wa', label: 'Chat on WhatsApp', location: 'faq' })}
                style={{ background: '#25D366', color: '#0B3D2E', border: '1px solid #25D366', display: 'inline-flex', alignItems: 'center', gap: 10 }}
              >
                <WhatsAppGlyph size={14} color="#0B3D2E" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${NC_EMAIL}`}
                className="btn btn-ghost btn-arrow"
                onClick={() => track('cta_click', { id: 'faq_email', label: 'Email', location: 'faq' })}
              >
                {NC_EMAIL}
              </a>
              <a
                href={`tel:${NC_PHONE_TEL}`}
                className="btn btn-ghost btn-arrow"
                onClick={() => track('cta_click', { id: 'faq_phone', label: 'Phone', location: 'faq' })}
              >
                {NC_PHONE_DISPLAY}
              </a>
              <a
                href={NC_CONTACT_FORM}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-arrow"
                onClick={() => track('cta_click', { id: 'faq_form', label: 'Contact form', location: 'faq' })}
              >
                Contact form (no WhatsApp?)
              </a>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
                  <button
                    onClick={() => {
                      const next = isOpen ? -1 : i;
                      setOpen(next);
                      if (!isOpen) track('faq_open', { q_index: i });
                    }}
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

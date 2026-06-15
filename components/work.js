'use client';

import { useRef, useState } from 'react';
import { NC_WA_LINK } from './contact';
import { track } from './analytics';

const PROJECTS = [
  {
    n: '01',
    name: 'Coding Knowledge',
    url: 'codingknowledge.in',
    href: 'https://codingknowledge.in/',
    igHref: 'https://www.instagram.com/codingknowledge/',
    igHandle: '@codingknowledge',
    logoSrc: '/images/coding-knowledge.jpeg',
    igFollowers: '600K+',
    tag: 'Creator platform · Education and Community',
    partnerBadge: 'Partner · Harish Bhatt',
    status: 'live',
    layout: 'creator',
    summary:
      'The full product surface for a 600K-follower programming creator on Instagram. Eight services living under one roof: blogs, notes, resume reviews, ebooks, curated tools, project libraries, daily job updates and a multi-channel community across Instagram, Telegram and WhatsApp. This is where audience converts into revenue.',
    role: ['Web', 'Information architecture', 'SEO', 'Funnel design'],
    stats: [
      { a: '600K+', b: 'Instagram followers behind it' },
      { a: '8', b: 'live services on the site' },
      { a: '3', b: 'community channels (IG / TG / WA)' },
    ],
    services: [
      { label: 'Ebooks', paid: true },
      { label: 'Notes', paid: true },
      { label: 'Courses', paid: true },
      { label: 'Resume Review', paid: true },
      { label: 'Blogs', paid: false },
      { label: 'Community', paid: false },
      { label: 'Hire Me', paid: false },
      { label: 'Job Updates', paid: false },
    ],
    earnings:
      'The creator monetises directly through the site via paid offers, community membership and resource sales to a 600K+ audience built on Instagram.',
    heroVideo: '/coding-knowledge/video.mp4',
    screens: [
      { label: 'Home', src: '/coding-knowledge/landing.png' },
      { label: 'Ebooks', src: '/coding-knowledge/ebooks.png' },
      { label: 'Blogs', src: '/coding-knowledge/blogs.png' },
      { label: 'Resume Review', src: '/coding-knowledge/resume-review.png' },
      { label: 'Tools', src: '/coding-knowledge/tools.png' },
    ],
  },
  {
    n: '02',
    name: 'MessageUp',
    url: 'messageup.shop',
    href: 'https://messageup.shop/',
    playStoreHref:
      'https://play.google.com/store/apps/details?id=com.bhaskar005.msg_up_moble&hl=en_IN',
    tag: 'Consumer app · D2C marketplace',
    status: 'live',
    layout: 'phone',
    summary:
      'A consumer marketplace that connects buyers with nearby shops. Browse stores, chat with merchants, place orders, all from one Android app. We built the brand, the marketing site and the Play Store presence end to end.',
    role: ['Brand', 'Web', 'App design', 'Play Store presence'],
    stats: [
      { a: '4.6★', b: 'Play Store rating' },
      { a: 'Android', b: 'native, live on Google Play' },
      { a: '5', b: 'core flows shipped' },
    ],
    founder: {
      name: 'Rahul Fulara',
      role: 'Founder, MessageUp',
      avatar: '/images/rahul.png',
      quote:
        'Blinkit removed all the shopkeepers and built their own warehouses. We did the opposite. MessageUp is built for the shopkeepers, so they keep their shop, get online, and reach the customers who already trust them.',
    },
    coreFeatures: [
      { icon: 'range', label: 'Delivery range', d: 'Shops set a radius. Only buyers inside it see them.' },
      { icon: 'status', label: 'Live shop status', d: 'Open, closed or busy, visible before you message.' },
      { icon: 'chat', label: 'Direct chat', d: 'Buyers and shops talk one to one inside the app.' },
      { icon: 'shop', label: 'Shop pages', d: 'Photos, products and map location for every shop.' },
    ],
    phoneShots: [
      { src: '/messageup/landingpage_phone.png', label: 'Browse' },
      { src: '/messageup/shoppage.png', label: 'Shop page' },
      { src: '/messageup/shoppage1.png', label: 'Products' },
      { src: '/messageup/shoppage3.png', label: 'Catalog' },
      { src: '/messageup/chackout.png', label: 'Checkout' },
    ],
    phoneVideos: [
      { src: '/messageup/video.mp4', label: 'App tour' },
      { src: '/messageup/video2.mp4', label: 'Live demo' },
    ],
  },
  {
    n: '03',
    name: 'Bizvaarta',
    url: 'bizvaarta.com',
    href: 'https://bizvaarta.com/',
    tag: 'SaaS · WhatsApp marketing platform',
    status: 'live',
    layout: 'longpage',
    summary:
      'A WhatsApp marketing and engagement platform built on top of the Meta Business API. We designed the conversion-first marketing site: explains the product, drives signups, shows the real chatbot flow and the AI lead classification engine inside.',
    role: ['Web', 'Conversion design', 'SEO', 'Marketing UI'],
    stats: [
      { a: 'Meta', b: 'official WhatsApp Business API' },
      { a: 'B2B', b: 'SaaS for SMBs and agencies' },
    ],
    screens: [
      { src: '/bizzvarta/ss1.png', label: 'Long-form landing' },
      { src: '/bizzvarta/ss2.png', label: 'AI chatbot section' },
    ],
  },
  {
    n: '04',
    name: 'Chronists',
    url: 'chronists.com',
    href: 'https://chronists.com/',
    tag: 'AI · Journaling product',
    status: 'dev',
    layout: 'darkdesktop',
    devNote: 'In active development. We are building this right now.',
    summary:
      'An AI-powered journaling app launching soon. The pitch: a calmer, more considered way to reflect. Features include an AI coach that helps reframe stuck thoughts, seed prompts to get past the blank page, and end-to-end encrypted private journals. Currently collecting waitlist signups.',
    role: ['Product brand', 'Web', 'Copy', 'Onboarding UX'],
    stats: [
      { a: 'Soon', b: 'launching this quarter' },
      { a: 'AI', b: 'reflection coach inside' },
    ],
    screens: [
      { src: '/chronists/hero.png', label: 'Waitlist hero' },
      { src: '/chronists/s2.png', label: 'Features overview' },
    ],
  },
];

export function Work() {
  return (
    <section id="work" style={{ padding: '120px 0 120px', background: 'var(--bg)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">04 · Selected work</span>
          <span
            className="mono"
            style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            2024 to 2025
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 32,
            marginBottom: 72,
            flexWrap: 'wrap',
          }}
        >
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(44px, 6.4vw, 84px)',
              lineHeight: 0.96,
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: '16ch',
              fontWeight: 360,
            }}
          >
            A few recent builds. Every project, a different{' '}
            <span className="serif-italic" style={{ color: 'var(--accent)' }}>challenge</span>.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', maxWidth: '36ch', margin: 0, lineHeight: 1.6 }}>
            A 600K-creator platform, a consumer app, a WhatsApp SaaS, and an AI product in development.
            Same standard across all of them.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 56 }}>
          {PROJECTS.map((p) => (
            <ProjectCase key={p.n} project={p} />
          ))}
        </div>

        <div style={{ marginTop: 72, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={NC_WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-arrow"
            onClick={() => track('cta_click', { id: 'work_start', label: 'Start a project like one of these', location: 'work' })}
          >
            Start a project like one of these
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCase({ project: p }) {
  const isDev = p.status === 'dev';
  const isHero = p.layout === 'creator';
  const borderColor = isDev ? '#2a241d' : isHero ? 'var(--accent)' : 'var(--line)';
  const cardShadow = isHero
    ? '0 1px 0 rgba(0,0,0,0.04), 0 40px 90px -30px rgba(184,71,42,0.22)'
    : isDev
    ? '0 1px 0 rgba(0,0,0,0.04), 0 30px 70px -30px rgba(20,17,13,0.45)'
    : '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px -28px rgba(20,17,13,0.12)';

  return (
    <article
      style={{
        background: isDev ? '#14110D' : 'var(--paper)',
        border: `1px solid ${borderColor}`,
        borderRadius: 28,
        overflow: 'hidden',
        boxShadow: cardShadow,
        position: 'relative',
      }}
      aria-labelledby={`project-${p.n}`}
    >
      {isDev && (
        <div
          style={{
            background: 'linear-gradient(90deg,#1f1b15,#14110D)',
            color: 'var(--paper)',
            padding: '11px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            borderBottom: '1px solid #2a241d',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#E8C9B5',
              boxShadow: '0 0 0 3px rgba(232,201,181,0.18)',
              animation: 'pulse 2.4s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          <span
            className="mono"
            style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E8C9B5' }}
          >
            {p.devNote}
          </span>
        </div>
      )}

      <CaseHeader p={p} isDev={isDev} />
      {isHero && <CreatorHeroBar p={p} />}
      {p.layout === 'phone' && <PhoneDualPlatformBar p={p} />}

      {p.layout === 'creator' && <MediaCreator p={p} />}
      {p.layout === 'phone' && <MediaPhone p={p} />}
      {p.layout === 'longpage' && <MediaLongPage p={p} />}
      {p.layout === 'darkdesktop' && <MediaDarkDesktop p={p} />}

      {p.founder && <FounderQuoteBar p={p} />}
      {p.coreFeatures && <CoreFeatures p={p} />}

      <CaseMeta p={p} isDev={isDev} />

      <style>{`
        @media (max-width: 880px) {
          .case-meta-grid { grid-template-columns: 1fr !important; gap: 22px !important; }
          .creator-hero-grid { grid-template-columns: 1fr !important; }
          .creator-hero-stats { border-left: 0 !important; border-top: 1px solid var(--line-soft) !important; padding-left: 0 !important; padding-top: 18px !important; margin-top: 4px !important; }
          .ck-services-grid { grid-template-columns: 1fr !important; }
          .case-pad { padding: 16px !important; }
          .case-head { padding: 12px 16px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .case-meta-grid { padding: 22px 18px !important; }
        }
        @media (max-width: 640px) {
          .phone-row { padding: 20px 0 24px !important; }
          .case-pad { padding: 12px !important; }
        }
        @keyframes scrollLong {
          0%   { transform: translateY(0); }
          45%  { transform: translateY(calc(-100% + 360px)); }
          55%  { transform: translateY(calc(-100% + 360px)); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </article>
  );
}

function CaseHeader({ p, isDev }) {
  return (
    <div
      className="case-head"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 32px',
        borderBottom: isDev ? '1px solid #2a241d' : '1px solid var(--line-soft)',
        background: isDev
          ? 'linear-gradient(180deg,#1a1814,#14110D)'
          : 'linear-gradient(180deg, var(--paper), var(--bg-2))',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', minWidth: 0 }}>
        <span
          className="mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: isDev ? '#E8C9B5' : 'var(--accent)',
            flexShrink: 0,
          }}
        >
          Case {p.n}
        </span>
        <span style={{ color: isDev ? '#3a342c' : 'var(--line)', fontSize: 12, flexShrink: 0 }}>·</span>
        <span
          style={{
            fontSize: 13,
            color: isDev ? '#8A8175' : 'var(--ink-3)',
            letterSpacing: '0.01em',
            lineHeight: 1.2,
          }}
        >
          {p.tag}
        </span>
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        {p.partnerBadge && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              background: 'rgba(184,71,42,0.08)',
              border: '1px solid rgba(184,71,42,0.22)',
              borderRadius: 999,
              padding: '5px 13px',
              fontSize: 11,
              color: 'var(--accent)',
              letterSpacing: '0.08em',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', opacity: 0.75, flexShrink: 0 }} />
            {p.partnerBadge}
          </div>
        )}
        {p.playStoreHref && (
          <a
            href={p.playStoreHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => track('outbound_click', { project: p.name, target: 'playstore', location: 'case_header' })}
            style={{
              fontSize: 12.5,
              fontWeight: 500,
              color: '#2F4A2A',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              background: 'rgba(47,74,42,0.10)',
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid rgba(47,74,42,0.22)',
              textDecoration: 'none',
            }}
          >
            Google Play ↗
          </a>
        )}
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            onClick={() => track('outbound_click', { project: p.name, target: p.status === 'dev' ? 'waitlist' : 'website', location: 'case_header' })}
            style={{
              fontSize: 12.5,
              fontWeight: 500,
              color: isDev ? '#F4EDDE' : 'var(--ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: isDev ? '#1a1814' : 'var(--paper)',
              padding: '6px 14px',
              borderRadius: 999,
              border: `1px solid ${isDev ? '#2a241d' : 'var(--line)'}`,
              textDecoration: 'none',
            }}
          >
            {p.status === 'dev' ? 'See waitlist' : `Visit ${p.url}`} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}

function CreatorHeroBar({ p }) {
  return (
    <div
      className="creator-hero-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 0,
        background: 'linear-gradient(135deg, #FAF7EE 0%, #F4EAD8 100%)',
        borderBottom: '1px solid var(--line-soft)',
        padding: '28px 32px',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
        <a
          href={p.igHref}
          target="_blank"
          rel="noreferrer"
          title={`Visit ${p.igHandle} on Instagram`}
          style={{
            display: 'block',
            width: 76,
            height: 76,
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, #B8472A 0%, #E8C9B5 50%, #8C3318 100%)',
            padding: 3,
            flexShrink: 0,
            boxShadow: '0 10px 26px -8px rgba(184,71,42,0.4)',
          }}
        >
          <img
            src={p.logoSrc}
            alt={`${p.name} logo`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              border: '3px solid var(--paper)',
              background: 'var(--paper)',
            }}
          />
        </a>
        <div>
          <div
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 8,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(184,71,42,0.08)',
              border: '1px solid rgba(184,71,42,0.2)',
              padding: '3px 10px',
              borderRadius: 999,
            }}
          >
            Co-Founder & AI/ML Engineer
          </div>
          <div
            className="serif"
            style={{
              fontSize: 'clamp(26px, 3vw, 36px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              fontWeight: 380,
              marginBottom: 6,
              marginTop: 8,
            }}
          >
            <span className="serif-italic" style={{ color: 'var(--accent)' }}>
              {p.igFollowers}
            </span>{' '}
            followers on Instagram.
          </div>
          <a
            href={p.igHref}
            target="_blank"
            rel="noreferrer"
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              borderBottom: '1px dashed var(--ink-3)',
              paddingBottom: 1,
            }}
          >
            {p.igHandle} on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div
        className="creator-hero-stats"
        style={{
          borderLeft: '1px solid var(--line)',
          paddingLeft: 28,
          marginLeft: 12,
          display: 'grid',
          gap: 10,
        }}
      >
        <div
          className="mono"
          style={{
            fontSize: 10.5,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          Built in-house · our studio
        </div>
        <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: '38ch' }}>
          Harish Bhatt is our Co-Founder. Coding Knowledge is his creator brand —{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>designed, built and run by this studio</strong>.{' '}
          600K+ audience, eight services, all converting on one site.
        </div>
      </div>
    </div>
  );
}

function MediaCreator({ p }) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(p.screens.length - 1, i));
    setActive(clamped);
    const el = scrollRef.current;
    if (el) {
      const card = el.children[clamped];
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <div className="case-pad" style={{ padding: '28px 32px 24px', background: '#EDE3CC' }}>
      {p.heroVideo && (
        <div
          style={{
            marginBottom: 18,
            borderRadius: 18,
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '16/9',
            background: '#0c0c0e',
            boxShadow: '0 30px 60px -25px rgba(20,17,13,0.35), 0 0 0 1px rgba(20,17,13,0.06)',
          }}
        >
          <video
            src={p.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(8,8,10,0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 999,
              padding: '6px 14px',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 0 3px rgba(74,222,128,0.22)',
                animation: 'pulse 2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 10.5,
                fontFamily: 'JetBrains Mono',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ddd8d0',
              }}
            >
              {p.url} · live
            </span>
          </div>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            style={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              background: 'rgba(8,8,10,0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 999,
              padding: '6px 14px',
              color: '#ddd8d0',
              fontSize: 10.5,
              fontFamily: 'JetBrains Mono',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            Visit ↗
          </a>
        </div>
      )}

      <div
        ref={scrollRef}
        className="snap-x no-scrollbar"
        style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', borderRadius: 14 }}
      >
        {p.screens.map((s, i) => (
          <div key={i} className="snap-start" style={{ flex: '0 0 100%', paddingRight: 0 }}>
            <DesktopShot src={s.src} label={s.label} aspect="16/10" />
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 14,
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', flex: 1, overflowX: 'auto' }} className="no-scrollbar">
          {p.screens.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: i === active ? 'var(--ink)' : 'transparent',
                color: i === active ? 'var(--paper)' : 'var(--ink-2)',
                border: `1px solid ${i === active ? 'var(--ink)' : 'var(--line)'}`,
                borderRadius: 999,
                padding: '6px 13px',
                fontSize: 12,
                fontWeight: 500,
                whiteSpace: 'nowrap',
                transition: 'all .18s ease',
                cursor: 'pointer',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <NavArrows active={active} count={p.screens.length} goTo={goTo} />
      </div>
    </div>
  );
}

function MediaPhone({ p }) {
  const items = [
    { type: 'shot', src: p.phoneShots[0].src, label: p.phoneShots[0].label },
    { type: 'shot', src: p.phoneShots[1].src, label: p.phoneShots[1].label },
    { type: 'video', src: p.phoneVideos[0].src, label: p.phoneVideos[0].label },
    { type: 'shot', src: p.phoneShots[2].src, label: p.phoneShots[2].label },
    { type: 'video', src: p.phoneVideos[1].src, label: p.phoneVideos[1].label },
    { type: 'shot', src: p.phoneShots[3].src, label: p.phoneShots[3].label },
    { type: 'shot', src: p.phoneShots[4].src, label: p.phoneShots[4].label },
  ];

  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    setActive(clamped);
    const el = scrollRef.current;
    if (el) {
      const card = el.children[clamped];
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <div
      className="phone-row"
      style={{
        padding: '44px 18px 32px',
        background: 'linear-gradient(180deg, #1a1814 0%, #14110D 60%, #1a1814 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M40 0 H0 V40' stroke='%23E8C9B5' stroke-width='0.4' fill='none' opacity='0.18'/></svg>\")",
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div
        ref={scrollRef}
        className="no-scrollbar"
        style={{
          display: 'flex',
          gap: 18,
          overflowX: 'auto',
          padding: '6px 14px 24px',
          scrollSnapType: 'x mandatory',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {items.map((it, i) => (
          <figure
            key={i}
            className="snap-start"
            style={{
              margin: 0,
              flex: '0 0 220px',
              scrollSnapAlign: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '10/ 19',
                borderRadius: 10,
                overflow: 'hidden',
                background: '#000',
                position: 'relative',
                boxShadow: '0 22px 48px -10px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              {it.type === 'video' ? (
                <video
                  src={it.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
              )}
              {it.type === 'video' && (
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(8,8,10,0.65)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: 999,
                    padding: '4px 10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', animation: 'pulse 1.4s ease-in-out infinite' }} />
                  <span
                    className="mono"
                    style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff' }}
                  >
                    live
                  </span>
                </div>
              )}
            </div>
            <figcaption
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#8A8175',
                textAlign: 'center',
                marginTop: 12,
              }}
            >
              {it.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          marginTop: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <DarkArrow direction="prev" disabled={active === 0} onClick={() => goTo(active - 1)} />
        <span
          className="mono"
          style={{
            fontSize: 10.5,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#C9C0B0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.2)' }} />
          5 real screens · 2 live demos
        </span>
        <DarkArrow direction="next" disabled={active === items.length - 1} onClick={() => goTo(active + 1)} />
      </div>
    </div>
  );
}

function DarkArrow({ direction, disabled, onClick }) {
  const isNext = direction === 'next';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isNext ? 'Next' : 'Previous'}
      style={{
        width: 38,
        height: 38,
        borderRadius: 999,
        border: '1px solid rgba(232,201,181,0.25)',
        background: 'rgba(255,255,255,0.05)',
        color: '#F4EDDE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background .18s ease',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d={isNext ? 'M6 4 L10 8 L6 12' : 'M10 4 L6 8 L10 12'}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function PhoneDualPlatformBar({ p }) {
  return (
    <div
      className="dual-bar"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        background: 'linear-gradient(135deg, #FAF7EE 0%, #F0E6D4 100%)',
        borderBottom: '1px solid var(--line-soft)',
        position: 'relative',
      }}
    >
      <a
        href={p.playStoreHref}
        target="_blank"
        rel="noreferrer"
        className="dual-tile"
        onClick={() => track('outbound_click', { project: p.name, target: 'playstore', location: 'dual_bar' })}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '22px 28px',
          borderRight: '1px solid var(--line-soft)',
          color: 'var(--ink)',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: '#FAF7EE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 8px 22px -6px rgba(20,17,13,0.18), 0 0 0 1px rgba(20,17,13,0.06)',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gp-blue" x1="0" y1="0" x2="14" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#00A0FF" />
                <stop offset="1" stopColor="#00E3FF" />
              </linearGradient>
              <linearGradient id="gp-yellow" x1="13" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FFE000" />
                <stop offset="1" stopColor="#FFBD00" />
              </linearGradient>
              <linearGradient id="gp-red" x1="3" y1="22" x2="17" y2="13" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FF3A44" />
                <stop offset="1" stopColor="#C31162" />
              </linearGradient>
              <linearGradient id="gp-green" x1="3" y1="2" x2="17" y2="11" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#32A071" />
                <stop offset="1" stopColor="#00863F" />
              </linearGradient>
            </defs>
            <path fill="url(#gp-blue)"   d="M3.3 1.6c-.2.2-.3.5-.3.9v19c0 .4.1.7.3.9l10.2-10.4L3.3 1.6z" />
            <path fill="url(#gp-yellow)" d="m17 15.4-3.5-3.4 3.5-3.4 4.2 2.4c1.1.6 1.1 2.4 0 3l-4.2 2.4z" />
            <path fill="url(#gp-red)"    d="M13.5 12 3.3 22.4c.4.4 1 .4 1.6.1l12.1-7.1L13.5 12z" />
            <path fill="url(#gp-green)"  d="M13.5 12 17 8.6 4.9 1.5c-.6-.3-1.2-.3-1.6.1L13.5 12z" />
          </svg>
        </div>
        <div style={{ minWidth: 0 }}>
          {/* <div
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 4,
            }}
          >
            We built the app
          </div> */}
          <div
            className="serif"
            style={{ fontSize: 20, lineHeight: 1.15, fontWeight: 400, color: 'var(--ink)', marginBottom: 3 }}
          >
            Android · Google Play
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.04em' }}>
            4.6★ rating · live ↗
          </div>
        </div>
      </a>

      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className="dual-tile"
        onClick={() => track('outbound_click', { project: p.name, target: 'website', location: 'dual_bar' })}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '22px 28px',
          color: 'var(--ink)',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: 'linear-gradient(135deg,#B8472A,#8C3318)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 8px 22px -6px rgba(184,71,42,0.45)',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="#FAF7EE" strokeWidth="1.6" />
            <path d="M3 12 H21 M12 3 C15 6 15 18 12 21 M12 3 C9 6 9 18 12 21" stroke="#FAF7EE" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ minWidth: 0 }}>
          {/* <div
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 4,
            }}
          >
            We built the website
          </div> */}
          <div
            className="serif"
            style={{ fontSize: 20, lineHeight: 1.15, fontWeight: 400, color: 'var(--ink)', marginBottom: 3 }}
          >
            {p.url}
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.04em' }}>
            Website · live ↗
          </div>
        </div>
      </a>

      <style>{`
        .dual-tile { transition: background .2s ease; }
        .dual-tile:hover { background: rgba(184,71,42,0.05); }
        @media (max-width: 720px) {
          .dual-bar { grid-template-columns: 1fr !important; }
          .dual-bar .dual-tile { border-right: 0 !important; border-bottom: 1px solid var(--line-soft); }
          .dual-bar .dual-tile:last-child { border-bottom: 0; }
        }
      `}</style>
    </div>
  );
}

function FounderQuoteBar({ p }) {
  const f = p.founder;
  return (
    <div
      className="founder-bar"
      style={{
        padding: '28px 32px',
        background: 'linear-gradient(180deg,#1f1b15,#14110D)',
        color: '#F4EDDE',
        borderTop: '1px solid #2a241d',
        borderBottom: '1px solid #2a241d',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 22,
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, minWidth: 96 }}>
        <div
          style={{
            width: 68,
            height: 68,
            borderRadius: '50%',
            padding: 2,
            background: 'linear-gradient(135deg,#B8472A 0%, #E8C9B5 50%, #8C3318 100%)',
            boxShadow: '0 8px 20px -6px rgba(184,71,42,0.4)',
          }}
        >
          <img
            src={f.avatar}
            alt={f.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              border: '3px solid #14110D',
              background: '#14110D',
            }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="serif" style={{ fontSize: 13.5, lineHeight: 1.1, color: '#F4EDDE', fontWeight: 400 }}>
            {f.name}
          </div>
          <div
            style={{
              fontSize: 11,
              color: '#8A8175',
              marginTop: 3,
              letterSpacing: '0.01em',
            }}
          >
            {f.role}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            fontSize: 11,
            color: '#8A8175',
            letterSpacing: '0.04em',
            marginBottom: 10,
          }}
        >
          The motto behind MessageUp
        </div>
        <blockquote
          className="serif"
          style={{
            margin: 0,
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            lineHeight: 1.6,
            letterSpacing: '-0.005em',
            color: '#C9C0B0',
            fontWeight: 380,
            maxWidth: '62ch',
          }}
        >
          &ldquo;{f.quote}&rdquo;
        </blockquote>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .founder-bar { grid-template-columns: 1fr !important; padding: 22px 18px !important; gap: 16px !important; }
          .founder-bar > div:first-child { flex-direction: row !important; align-items: center !important; text-align: left !important; gap: 14px !important; min-width: 0 !important; }
          .founder-bar > div:first-child > div:last-child { text-align: left !important; }
        }
      `}</style>
    </div>
  );
}

function CoreFeatures({ p }) {
  const icons = {
    range: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      </svg>
    ),
    status: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      </svg>
    ),
    chat: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5 H20 V16 H13 L8 20 V16 H4 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    shop: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 9 L5 4 H19 L20 9 V20 H4 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4 9 H20" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  };

  return (
    <div
      className="core-features-bar"
      style={{
        padding: '20px 32px',
        background: 'var(--bg-2)',
        borderBottom: '1px solid var(--line-soft)',
      }}
    >
      <span
        className="mono"
        style={{
          fontSize: 9.5,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          display: 'block',
          marginBottom: 14,
        }}
      >
        Core features
      </span>
      <div
        className="core-features-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px 20px',
        }}
      >
        {p.coreFeatures.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, display: 'inline-flex' }}>
              {icons[f.icon]}
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', fontWeight: 500, lineHeight: 1.15 }}>
                {f.label}
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.4, marginTop: 2 }}>
                {f.d}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 980px) {
          .core-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .core-features-bar { padding: 16px !important; }
          .core-features-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px 14px !important; }
        }
        @media (max-width: 400px) {
          .core-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function MediaLongPage({ p }) {
  return (
    <div className="case-pad" style={{ padding: '28px 32px 24px', background: '#EFE9D8' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 18,
          alignItems: 'stretch',
        }}
        className="bizz-grid"
      >
        <div
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid var(--line)',
            boxShadow: '0 30px 60px -25px rgba(20,17,13,0.18), 0 0 0 1px rgba(20,17,13,0.04)',
            height: 460,
          }}
        >
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <img
              src={p.screens[0].src}
              alt={p.screens[0].label}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                animation: 'scrollLong 24s ease-in-out infinite',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 38,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0))',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              background: 'linear-gradient(0deg, rgba(255,255,255,0.92), rgba(255,255,255,0))',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 14,
              left: 14,
              right: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 10.5,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--ink-2)',
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid var(--line)',
                padding: '4px 10px',
                borderRadius: 999,
              }}
            >
              {p.url} · long-form landing
            </span>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{
                fontSize: 10.5,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#2A7A27',
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(42,122,39,0.3)',
                padding: '4px 12px',
                borderRadius: 999,
              }}
            >
              Open live ↗
            </a>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid var(--line)',
            boxShadow: '0 30px 60px -25px rgba(20,17,13,0.14), 0 0 0 1px rgba(20,17,13,0.04)',
            height: 460,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid var(--line-soft)',
              background: 'linear-gradient(180deg,#F4EFE2,#EDE5CC)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              Inside the product
            </span>
            <span
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              {p.screens[1].label}
            </span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'flex-start' }}>
            <img
              src={p.screens[1].src}
              alt={p.screens[1].label}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .bizz-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function MediaDarkDesktop({ p }) {
  return (
    <div className="case-pad" style={{ padding: '32px 32px 28px', background: '#14110D' }}>
      <div style={{ display: 'grid', gap: 18 }}>
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            background: '#0a0a0c',
            border: '1px solid #2a241d',
            boxShadow: '0 40px 90px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,201,181,0.04)',
          }}
        >
          <img
            src={p.screens[0].src}
            alt={p.screens[0].label}
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            background: '#0a0a0c',
            border: '1px solid #2a241d',
            boxShadow: '0 40px 90px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,201,181,0.04)',
          }}
        >
          <img
            src={p.screens[1].src}
            alt={p.screens[1].label}
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
}

function DesktopShot({ src, label, aspect = '16/10', dark = false }) {
  return (
    <figure
      style={{
        margin: 0,
        borderRadius: 14,
        overflow: 'hidden',
        background: dark ? '#0f0d0a' : '#fff',
        border: `1px solid ${dark ? '#2a241d' : 'var(--line)'}`,
        boxShadow:
          '0 1px 0 rgba(0,0,0,0.04), 0 30px 80px -28px rgba(20,17,13,0.18), 0 0 0 1px rgba(20,17,13,0.04)',
        position: 'relative',
        width: '100%',
      }}
    >
      <div style={{ aspectRatio: aspect, width: '100%', position: 'relative', overflow: 'hidden' }}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid var(--line)',
            borderRadius: 999,
            padding: '4px 12px',
            fontSize: 10.5,
            fontFamily: 'JetBrains Mono',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
          }}
        >
          {label}
        </div>
      </div>
    </figure>
  );
}

function NavArrows({ active, count, goTo }) {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      {[false, true].map((isNext) => {
        const disabled = isNext ? active === count - 1 : active === 0;
        return (
          <button
            key={isNext ? 'n' : 'p'}
            onClick={() => goTo(active + (isNext ? 1 : -1))}
            disabled={disabled}
            aria-label={isNext ? 'Next screenshot' : 'Previous screenshot'}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              border: '1px solid var(--line)',
              background: 'var(--paper)',
              color: 'var(--ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: disabled ? 0.35 : 1,
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d={isNext ? 'M6 4 L10 8 L6 12' : 'M10 4 L6 8 L10 12'}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

function CaseMeta({ p, isDev }) {
  return (
    <div
      className="case-meta-grid"
      style={{
        padding: '36px 36px 36px',
        borderTop: isDev ? '1px solid #2a241d' : '1px solid var(--line-soft)',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 40,
        alignItems: 'start',
        background: isDev ? '#14110D' : 'transparent',
      }}
    >
      <div>
        <h3
          id={`project-${p.n}`}
          className="serif"
          style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            lineHeight: 0.98,
            letterSpacing: '-0.025em',
            margin: '0 0 14px 0',
            fontWeight: 360,
            color: isDev ? '#F4EDDE' : 'var(--ink)',
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: isDev ? '#C9C0B0' : 'var(--ink-2)',
            margin: 0,
            maxWidth: '60ch',
          }}
        >
          {p.summary}
        </p>

        {p.services && (
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                What&apos;s live on the platform
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 9.5,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#2A7A27',
                  background: 'rgba(42,122,39,0.09)',
                  border: '1px solid rgba(42,122,39,0.22)',
                  borderRadius: 999,
                  padding: '2px 8px',
                }}
              >
                {p.services.filter((s) => s.paid).length} paid · {p.services.filter((s) => !s.paid).length} free
              </span>
            </div>
            <div
              className="ck-services-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}
            >
              {p.services.map((s) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: s.paid ? 'rgba(42,122,39,0.14)' : 'rgba(42,122,39,0.06)',
                      color: '#2A7A27',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 11,
                      fontWeight: 700,
                      border: '1px solid rgba(42,122,39,0.24)',
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <span style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.2 }}>{s.label}</span>
                    {s.paid && (
                      <span
                        className="mono"
                        style={{
                          display: 'block',
                          fontSize: 9,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: '#2A7A27',
                          marginTop: 1,
                        }}
                      >
                        paid
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {p.earnings && (
          <div
            style={{
              marginTop: 22,
              padding: '14px 16px',
              background: 'var(--bg-2)',
              border: '1px solid var(--line)',
              borderRadius: 14,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 9,
                background: 'rgba(47,74,42,0.14)',
                color: '#2F4A2A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontFamily: 'Fraunces, serif',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              ₹
            </div>
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 4,
                }}
              >
                How it earns
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{p.earnings}</div>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {p.role.map((r) => (
            <span
              key={r}
              className="tag"
              style={
                isDev
                  ? {
                      background: 'transparent',
                      color: '#C9C0B0',
                      borderColor: '#3a342c',
                    }
                  : undefined
              }
            >
              {r}
            </span>
          ))}
        </div>

        {p.stats && (
          <div
            style={{
              borderTop: isDev ? '1px solid #2a241d' : '1px solid var(--line-soft)',
              paddingTop: 18,
              display: 'grid',
              gap: 14,
            }}
          >
            {p.stats.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span
                  className="serif"
                  style={{
                    fontSize: 28,
                    lineHeight: 1,
                    color: i === 0 ? (isDev ? '#E8C9B5' : 'var(--accent)') : isDev ? '#F4EDDE' : 'var(--ink)',
                    letterSpacing: '-0.02em',
                    fontWeight: 380,
                    flexShrink: 0,
                  }}
                >
                  {s.a}
                </span>
                <span
                  style={{
                    fontSize: 12.5,
                    color: isDev ? '#8A8175' : 'var(--muted)',
                    lineHeight: 1.35,
                  }}
                >
                  {s.b}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

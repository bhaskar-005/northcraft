// Selected work: 4 real projects. Drop your own screenshots in each ProjectImage slot.

const PROJECTS = [
  {
    n: '01',
    name: 'Coding Knowledge',
    url: 'codingknowledge.in',
    href: 'https://codingknowledge.in/',
    igHref: 'https://www.instagram.com/codingknowledge/',
    logoSrc: 'https://www.codingknowledge.in/logo.png',
    igFollowers: '607K',
    tag: 'Creator platform · Education and Community',
    status: 'live',
    summary:
      'The full product surface for a 607K-follower programming creator on Instagram. Eight services living under one roof: blogs, notes, resume reviews, ebooks, curated tools, project libraries, daily job updates and a multi-channel community across Instagram, Telegram and WhatsApp. The site is where audience converts into revenue.',
    role: ['Web', 'Information architecture', 'SEO', 'Funnel design'],
    stats: [
      { a: '607K', b: 'Instagram following' },
      { a: '8+', b: 'services running live on site' },
      { a: '3', b: 'community channels (IG, Telegram, WhatsApp)' },
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
    earnings: 'The creator monetises directly through the site via paid offers, community membership and resource sales to a 600K+ audience built on Instagram.',
    heroVideo: '/public/coding-knowledge/video.mp4',
    screens: [
      { label: 'Home', src: '/public/coding-knowledge/landing.png', tone: 'cream' },
      { label: 'Ebooks', src: '/public/coding-knowledge/ebooks.png', tone: 'sand' },
      { label: 'Blogs', src: '/public/coding-knowledge/blogs.png', tone: 'cream' },
      { label: 'Resume Review', src: '/public/coding-knowledge/resume-review.png', tone: 'sand' },
      { label: 'Tools', src: '/public/coding-knowledge/tools.png', tone: 'cream' },
    ],
  },
  {
    n: '02',
    name: 'MessageUp',
    url: 'messageup.shop',
    href: 'https://messageup.shop/',
    playStoreHref: 'https://play.google.com/store/apps/details?id=com.bhaskar005.msg_up_moble&hl=en_IN',
    tag: 'Consumer app · D2C + Android',
    status: 'live',
    summary:
      'Direct-to-consumer messaging app for Android. We designed the marketing site and the Play Store presence end to end: brand identity, conversion-first landing page and onboarding flows. One inbox, every message, zero noise.',
    role: ['Brand', 'Web', 'App store presence', 'SEO'],
    stats: [
      { a: '4.6★', b: 'Play Store rating' },
      { a: 'Android', b: 'native app on Google Play' },
    ],
    screens: [
      { label: 'Landing page', src: '/public/messageup/landingpage.png', tone: 'cream' },
      { label: 'Shop', src: '/public/messageup/shoppage.png', tone: 'sand' },
      { label: 'Checkout', src: '/public/messageup/chackout.png', tone: 'cream' },
    ],
    phoneVideos: [
      { label: 'App demo', src: '/public/messageup/video.mp4' },
      { label: 'App in action', src: '/public/messageup/video2.mp4' },
    ],
  },
  {
    n: '03',
    name: 'Bizvaarta',
    url: 'bizvaarta.com',
    href: 'https://bizvaarta.com/',
    tag: 'B2B · Business news platform',
    status: 'live',
    summary:
      'A Hindi-language business news platform covering markets, policy and founders. We rebuilt the information architecture, type system and SEO scaffolding so it reads like a magazine and ranks like a newsroom.',
    role: ['IA', 'Type system', 'Editorial UI', 'SEO'],
    stats: [
      { a: 'B2B', b: 'business and finance news' },
      { a: 'Hindi', b: 'language, nationwide readership' },
    ],
    screens: [
      { label: 'Front page', tone: 'sand' },
      { label: 'Article reader', tone: 'cream' },
      { label: 'Category page', tone: 'sand' },
    ],
  },
  {
    n: '04',
    name: 'Chronists',
    url: 'chronists.com',
    href: 'https://chronists.com/',
    tag: 'AI · Journaling product',
    status: 'dev',
    devNote: 'In active development. We are building this right now.',
    summary:
      'An AI-powered journaling app launching soon. The pitch: a calmer, more considered way to reflect. Features include an AI coach that helps reframe stuck thoughts, seed prompts to get past the blank page, and end-to-end encrypted private journals. Currently collecting waitlist signups.',
    role: ['Product brand', 'Web', 'Copy', 'Onboarding UX'],
    screens: [
      { label: 'Hero', tone: 'ink' },
      { label: 'Features', tone: 'cream' },
      { label: 'Waitlist page', tone: 'ink' },
    ],
  },
];

function Work() {
  return (
    <section id="work" style={{ padding: '120px 0 120px', background: 'var(--bg)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">04 · Selected work</span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
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
              maxWidth: '14ch',
              fontWeight: 360,
            }}
          >
            Four projects. Four different <span className="serif-italic" style={{ color: 'var(--accent)' }}>challenges</span>.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', maxWidth: '36ch', margin: 0, lineHeight: 1.6 }}>
            A creator platform, a consumer app, a news platform and an AI product in development.
            Same standard across all of them.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 48 }}>
          {PROJECTS.map((p) => (
            <ProjectCase key={p.n} project={p} />
          ))}
        </div>

        <div style={{ marginTop: 72, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href={NC_WA_LINK} target="_blank" rel="noreferrer" className="btn btn-primary btn-arrow">
            Start a project like one of these
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCase({ project: p }) {
  const [active, setActive] = React.useState(0);
  const scrollRef = React.useRef(null);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(p.screens.length - 1, i));
    setActive(clamped);
    const el = scrollRef.current;
    if (el) {
      const card = el.children[clamped];
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const isDev = p.status === 'dev';
  const borderColor = isDev ? '#8A8175' : p.n === '01' ? 'var(--accent)' : 'var(--line)';
  const glowStyle = p.n === '01'
    ? '0 30px 80px -30px rgba(184,71,42,0.18)'
    : isDev
    ? '0 8px 24px -12px rgba(20,17,13,0.08)'
    : 'var(--shadow-card)';

  return (
    <article
      style={{
        background: 'var(--paper)',
        border: `1px solid ${borderColor}`,
        borderRadius: 28,
        overflow: 'hidden',
        boxShadow: glowStyle,
        position: 'relative',
      }}
      aria-labelledby={`project-${p.n}`}
    >
      {/* "In development" banner */}
      {isDev && (
        <div style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '10px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#E8C9B5', animation: 'pulse 2.4s ease-in-out infinite', flexShrink: 0 }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9C0B0' }}>
            {p.devNote}
          </span>
        </div>
      )}

      {/* Top meta strip */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 32px',
          borderBottom: '1px solid var(--line-soft)',
          background: 'linear-gradient(180deg, var(--paper), var(--bg-2))',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          {/* Creator profile pic (only Coding Knowledge) */}
          {p.logoSrc && (
            <a
              href={p.igHref}
              target="_blank"
              rel="noreferrer"
              title={`Visit @codingknowledge on Instagram (${p.igFollowers} followers)`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 10px 4px 4px',
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: 999,
                textDecoration: 'none',
                transition: 'box-shadow .2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <img
                src={p.logoSrc}
                alt="Coding Knowledge logo"
                style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', display: 'block', border: '1px solid var(--line)' }}
                loading="lazy"
              />
              <div>
                <div className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-2)', lineHeight: 1 }}>
                  @codingknowledge
                </div>
                <div className="mono" style={{ fontSize: 8.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 2, lineHeight: 1 }}>
                  {p.igFollowers} on Instagram ↗
                </div>
              </div>
            </a>
          )}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Case {p.n}
            </span>
            <span className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {p.tag}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Play Store badge for MessageUp */}
          {p.playStoreHref && (
            <a
              href={p.playStoreHref}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{
                fontSize: 10.5,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#2F4A2A',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(47,74,42,0.10)',
                padding: '5px 12px',
                borderRadius: 999,
                border: '1px solid rgba(47,74,42,0.2)',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#2F4A2A" aria-hidden="true">
                <path d="M3.18 23.76 c-.34-.2-.53-.56-.53-.96 V1.2c0-.4.19-.76.53-.96l12.43 11.76L3.18 23.76zm13.31-11.33 L4.12.8l10.67 6.15-5.24 5.4 6.94 0zM4.12 23.2l12.31-6.67-6.94-.01 5.24-5.4L4.12 23.2zm14.34-9.84-2.1-1.21.01-2.3 2.09-1.21c.34.53.54 1.15.54 1.86 0 .71-.2 1.33-.54 1.86z"/>
              </svg>
              Google Play ↗
            </a>
          )}
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--paper)',
                padding: '6px 14px',
                borderRadius: 999,
                border: '1px solid var(--line)',
              }}
            >
              {isDev ? 'See waitlist' : `Visit ${p.url}`} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Media showcase */}
      <div style={{ padding: '24px 24px 20px', background: isDev ? '#14110D' : '#eee8d8' }}>

        {/* CK: cinematic hero video — clean full-bleed, no browser chrome */}
        {p.heroVideo && (
          <div style={{ marginBottom: 16, borderRadius: 14, overflow: 'hidden', position: 'relative', aspectRatio: '16/9', background: '#0c0c0e', flexShrink: 0 }}>
            <video
              src={p.heroVideo}
              autoPlay muted loop playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.48) 0%, transparent 38%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(8,8,10,0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999, padding: '5px 13px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 0 3px rgba(74,222,128,0.2)', animation: 'pulse 2s ease-in-out infinite', flexShrink: 0 }} />
              <span style={{ fontSize: 10.5, fontFamily: 'JetBrains Mono', letterSpacing: '0.11em', textTransform: 'uppercase', color: '#ddd8d0' }}>{p.url} · live</span>
            </div>
            <a href={p.href} target="_blank" rel="noreferrer" style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(8,8,10,0.65)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999, padding: '5px 13px', color: '#ddd8d0', fontSize: 10.5, fontFamily: 'JetBrains Mono', letterSpacing: '0.11em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
              Visit ↗
            </a>
          </div>
        )}

        {/* MessageUp: screenshots left + phones right */}
        {p.phoneVideos ? (
          <div className="media-split-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, alignItems: 'center' }}>
            <div>
              <div ref={scrollRef} className="snap-x no-scrollbar" style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
                {p.screens.map((s, i) => (
                  <div key={i} className="snap-start" style={{ flex: '0 0 100%' }}>
                    <BrowserFrame url={`${p.url}${i ? '/' + s.label.toLowerCase().replace(/\s+/g, '-') : ''}`} aspect="16/10" dark={isDev}>
                      <ProjectImage label={s.label} src={s.src} tone={s.tone} index={i} dark={isDev} />
                    </BrowserFrame>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10, alignItems: 'center' }}>
                {p.screens.map((s, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{ flex: 1, padding: '6px 4px', borderRadius: 8, border: '1px solid ' + (i === active ? 'var(--ink)' : 'var(--line)'), background: i === active ? 'var(--ink)' : 'transparent', color: i === active ? 'var(--paper)' : 'var(--ink-2)', fontSize: 12, fontWeight: 500, cursor: 'pointer', transition: 'all .18s ease', whiteSpace: 'nowrap' }}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', padding: '12px 0' }}>
              {p.phoneVideos.map((v, idx) => (
                <PhoneFrame key={v.src} src={v.src} label={v.label} tilt={idx === 0 ? -4 : 4} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div ref={scrollRef} className="snap-x no-scrollbar" style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
              {p.screens.map((s, i) => (
                <div key={i} className="snap-start" style={{ flex: '0 0 100%' }}>
                  <BrowserFrame url={p.href ? `${p.url}${i ? '/' + s.label.toLowerCase().replace(/\s+/g, '-') : ''}` : `screenshot-${String(i + 1).padStart(2, '0')}`} aspect="16/10" dark={isDev}>
                    <ProjectImage label={s.label} src={s.src} tone={s.tone} index={i} dark={isDev} />
                  </BrowserFrame>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, gap: 10, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 5, alignItems: 'center', flex: 1, overflowX: 'auto' }} className="no-scrollbar">
                {p.screens.map((s, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{ background: i === active ? (isDev ? 'var(--paper)' : 'var(--ink)') : 'transparent', color: i === active ? (isDev ? 'var(--ink)' : 'var(--paper)') : (isDev ? '#8A8175' : 'var(--ink-2)'), border: '1px solid ' + (i === active ? (isDev ? 'var(--paper)' : 'var(--ink)') : (isDev ? '#3a342c' : 'var(--line)')), borderRadius: 999, padding: '6px 13px', fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap', transition: 'all .18s ease', cursor: 'pointer' }}>
                    {s.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 5 }}>
                {[false, true].map((isNext) => (
                  <button key={isNext ? 'n' : 'p'} onClick={() => goTo(active + (isNext ? 1 : -1))} disabled={isNext ? active === p.screens.length - 1 : active === 0} style={{ width: 34, height: 34, borderRadius: 999, border: '1px solid ' + (isDev ? '#3a342c' : 'var(--line)'), background: isDev ? '#1a1814' : 'var(--paper)', color: isDev ? '#C9C0B0' : 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: (isNext ? active === p.screens.length - 1 : active === 0) ? 0.35 : 1, cursor: (isNext ? active === p.screens.length - 1 : active === 0) ? 'not-allowed' : 'pointer' }}>
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d={isNext ? 'M6 4 L10 8 L6 12' : 'M10 4 L6 8 L10 12'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Meta */}
      <div style={{
        padding: '32px 36px',
        borderTop: '1px solid var(--line-soft)',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 36,
        alignItems: 'start',
      }} className="case-meta-grid">
        <div>
          <h3
            id={`project-${p.n}`}
            className="serif"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              margin: '0 0 14px 0',
              fontWeight: 360,
            }}
          >
            {p.name}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '60ch' }}>
            {p.summary}
          </p>

          {/* Services checklist (Coding Knowledge only) */}
          {p.services && (
            <div style={{ marginTop: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  What's live on the platform
                </span>
                <span className="mono" style={{ fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2A7A27', background: 'rgba(42,122,39,0.09)', border: '1px solid rgba(42,122,39,0.18)', borderRadius: 999, padding: '2px 8px' }}>
                  {p.services.filter(s => s.paid).length} paid · {p.services.filter(s => !s.paid).length} free
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 24px' }}>
                {p.services.map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span style={{
                      width: 19, height: 19, borderRadius: '50%',
                      background: s.paid ? 'rgba(42,122,39,0.13)' : 'rgba(42,122,39,0.07)',
                      color: '#2A7A27',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontSize: 11, fontWeight: 700,
                      border: '1px solid rgba(42,122,39,0.22)',
                    }}>✓</span>
                    <div>
                      <span style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.2 }}>{s.label}</span>
                      {s.paid && (
                        <span className="mono" style={{ display: 'block', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2A7A27', marginTop: 1 }}>
                          paid
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust callout */}
              <div style={{
                marginTop: 18,
                padding: '13px 16px',
                background: 'rgba(42,122,39,0.05)',
                border: '1px solid rgba(42,122,39,0.18)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 11,
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: '#2A7A27', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: 12, fontWeight: 700, marginTop: 1,
                }}>✓</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>This creator chose us.</strong>{' '}
                  With {p.igFollowers} followers and an audience ready to buy, they trusted us to build the platform where all of it converts — ebooks, notes, courses, resume reviews, and more. It's live, earning, and growing.
                </div>
              </div>
            </div>
          )}

          {/* Earnings note */}
          {p.earnings && (
            <div style={{
              marginTop: 20,
              padding: '12px 14px',
              background: 'var(--bg-2)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: 8,
                background: 'rgba(47,74,42,0.12)',
                color: '#2F4A2A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                fontFamily: 'Fraunces, serif',
                fontSize: 13,
                fontWeight: 600,
              }}>₹</div>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 4 }}>
                  How it earns
                </div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                  {p.earnings}
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {p.role.map((r) => (
              <span key={r} className="tag">{r}</span>
            ))}
          </div>

          {p.stats && (
            <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 16, display: 'grid', gap: 12 }}>
              {p.stats.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span className="serif" style={{ fontSize: 28, lineHeight: 1, color: i === 0 ? 'var(--accent)' : 'var(--ink)', letterSpacing: '-0.02em', fontWeight: 380, minWidth: 72 }}>
                    {s.a}
                  </span>
                  <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    {s.b}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .case-meta-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .media-split-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}

// Renders a real screenshot when src is provided, otherwise shows a placeholder.
function ProjectImage({ label, src, tone = 'cream', index = 0, dark = false }) {
  if (src) {
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }
  const bgMap = {
    cream: 'linear-gradient(135deg, #F4F0E6 0%, #EDE7D8 100%)',
    sand:  'linear-gradient(135deg, #EDE7D8 0%, #E2C9B0 100%)',
    ink:   'linear-gradient(135deg, #2A2620 0%, #14110D 100%)',
  };
  const cardBg   = dark ? '#1a1814' : 'var(--paper)';
  const cardBdr  = dark ? '#2a241d' : 'var(--line)';
  const accentTx = dark ? '#E8C9B5' : 'var(--accent)';
  const mainTx   = dark ? '#F4EDDE'  : 'var(--ink)';
  const mutedTx  = dark ? '#8A8175'  : 'var(--muted)';
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: bgMap[tone] || bgMap.cream,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 0 L40 40 M40 0 L0 40' stroke='%23DDD4BF' stroke-width='0.3' fill='none'/></svg>\")",
        opacity: dark ? 0.15 : 0.35,
      }} />
      <div style={{
        position: 'relative',
        textAlign: 'center',
        padding: '20px 28px',
        background: cardBg,
        border: `1px solid ${cardBdr}`,
        borderRadius: 14,
        boxShadow: '0 8px 24px -12px rgba(20,17,13,0.08)',
        maxWidth: '70%',
      }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentTx, marginBottom: 6 }}>
          ↳ image {String(index + 1).padStart(2, '0')}
        </div>
        <div className="serif" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', letterSpacing: '-0.02em', color: mainTx, fontWeight: 380 }}>
          {label}
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: mutedTx, marginTop: 8 }}>
          drop screenshot here
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ src, label, tilt = 0 }) {
  const PW = 148;        // total phone width px
  const SW = PW - 18;    // screen width (body padding 9px each side)
  const SH = Math.round(SW * 19.5 / 9); // screen height from 9:19.5 ratio

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flexShrink: 0 }}>
      <div
        style={{
          width: PW,
          transform: `rotate(${tilt}deg)`,
          transition: 'transform .3s cubic-bezier(.2,.7,.3,1)',
          filter: 'drop-shadow(0 28px 44px rgba(0,0,0,0.5))',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) translateY(-8px)'}
        onMouseLeave={e => e.currentTarget.style.transform = `rotate(${tilt}deg)`}
      >
        <div style={{
          width: PW,
          background: 'linear-gradient(155deg, #2e2e32 0%, #1a1a1e 55%, #111114 100%)',
          borderRadius: 36,
          padding: '10px 9px 13px',
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.09)',
        }}>
          {/* Power */}
          <div style={{ position: 'absolute', right: -2, top: 64, width: 2.5, height: 36, background: '#3c3c40', borderRadius: '0 2px 2px 0' }} />
          {/* Volume */}
          <div style={{ position: 'absolute', left: -2, top: 52, width: 2.5, height: 22, background: '#3c3c40', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', left: -2, top: 80, width: 2.5, height: 22, background: '#3c3c40', borderRadius: '2px 0 0 2px' }} />
          {/* Dynamic island */}
          <div style={{ width: 64, height: 18, background: '#000', borderRadius: 18, margin: '0 auto 8px' }} />
          {/* Screen — explicit px, never clipped */}
          <div style={{ width: SW, height: SH, borderRadius: 22, overflow: 'hidden', background: '#000', margin: '0 auto', display: 'block' }}>
            <video
              src={src}
              autoPlay muted loop playsInline
              style={{ width: SW, height: SH, objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Home bar */}
          <div style={{ width: 64, height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2, margin: '8px auto 0' }} />
        </div>
      </div>
      <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center' }}>
        {label}
      </span>
    </div>
  );
}

Object.assign(window, { Work });

// Process + Team + Testimonial

function Process() {
  const steps = [
    {
      n: '01',
      t: 'Discovery call',
      d: '45 minutes. We map your audience, the offer they’re actually paying for, and the one number this site needs to move.',
      meta: 'free · no commitment',
      tasks: ['Audience mapping', 'Offer audit', 'Goal alignment'],
    },
    {
      n: '02',
      t: 'Strategy brief',
      d: 'A short, written document: your audience, your wedge, your visual direction, and the funnel before the funnel even exists.',
      meta: 'day 1 to 3',
      tasks: ['Competitor teardown', 'Keyword research', 'Visual direction'],
    },
    {
      n: '03',
      t: 'Design + build',
      d: 'Built in the open. You see real progress every 48 hours in a private staging URL. No surprises, no big-reveal anxiety.',
      meta: 'day 4 to 16',
      tasks: ['Custom-built, no builders', '48-hour updates', 'Mobile-first'],
    },
    {
      n: '04',
      t: 'Launch + iterate',
      d: 'We ship, instrument, and watch the first 100 visitors with you. Two free iteration rounds in the 14 days after launch.',
      meta: 'day 17 onward',
      tasks: ['Analytics setup', 'First 100 visitors', '14d free iteration'],
    },
  ];
  return (
    <section id="approach-process" style={{ padding: '120px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">05 · How we work</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
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
            Four weeks. Four steps. <span className="serif-italic" style={{ color: 'var(--accent)' }}>Zero</span> surprises.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', maxWidth: '36ch', margin: 0, lineHeight: 1.55 }}>
            The same process every project. Documented, predictable, calm. Two iteration rounds are baked in. No expensive change orders.
          </p>
        </div>

        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 18,
            position: 'relative',
          }}
        >
          {/* Connecting line */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: 38,
            left: '12%',
            right: '12%',
            height: 1,
            background: 'repeating-linear-gradient(90deg, var(--line) 0 8px, transparent 8px 14px)',
            zIndex: 0,
          }} className="process-line" />

          {steps.map((s, i) => (
            <article
              key={s.n}
              className="lift"
              style={{
                background: 'var(--paper)',
                padding: '28px 26px',
                position: 'relative',
                borderRadius: 18,
                border: '1px solid var(--line)',
                zIndex: 1,
              }}
            >
              {/* Step number node */}
              <div
                style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--ink)', color: 'var(--paper)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 380,
                  letterSpacing: '-0.02em',
                  marginBottom: 22,
                  position: 'relative',
                  boxShadow: '0 8px 24px -8px rgba(20,17,13,0.3)',
                }}
              >
                {s.n}
                <span style={{
                  position: 'absolute', inset: -5,
                  borderRadius: '50%',
                  border: '1px dashed var(--line)',
                }} />
              </div>

              <div style={{ marginBottom: 14 }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', background: 'rgba(184,71,42,0.08)', padding: '4px 10px', borderRadius: 999, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  {s.meta}
                </span>
              </div>
              <h3 className="serif" style={{ fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 12px 0', fontWeight: 380 }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 14.5, color: 'var(--ink-2)', margin: '0 0 18px 0', lineHeight: 1.55 }}>
                {s.d}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                {s.tasks.map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-3)' }}>
                    <Check size={12} color="#2F4A2A" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const TEAM = [
  { name: 'Bhaskar Bhandari', role: 'Founder & Software Engineer',     initials: 'BB', tone: 'a', location: 'Dehradun, IN' },
  { name: 'Harish',     role: 'UI / UX & Graphic Design', initials: 'H', tone: 'c', location: 'Dehradun, IN' },
  { name: 'Nikhil',           role: 'Software Engineer',        initials: 'N', tone: 'b', location: 'Remote · India' },
  { name: 'Rahul Fulara',     role: 'Market Research & SEO',    initials: 'RF', tone: 'd', location: 'Almora, IN' },
];

function Team() {
  return (
    <section id="team" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">06 · The studio</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: '14ch',
              fontWeight: 360,
            }}
          >
            Four humans. <span className="serif-italic" style={{ color: 'var(--accent)' }}>One</span> project at a time.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', maxWidth: '34ch', margin: 0, lineHeight: 1.55 }}>
            No account managers. No interns. You talk to the people doing the work, every single day.
          </p>
        </div>

        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 18,
          }}
        >
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="lift"
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: 16,
                padding: '22px 22px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                minHeight: 180,
              }}
            >
              <TeamAvatar initials={m.initials} tone={m.tone} size={52} />
              <div>
                <h3 className="serif" style={{ fontSize: 19, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '0 0 4px 0', fontWeight: 400 }}>
                  {m.name}
                </h3>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                  {m.role}
                </div>
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 9.5,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginTop: 'auto',
                  paddingTop: 10,
                  borderTop: '1px solid var(--line-soft)',
                }}
              >
                {m.location}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Testimonial() {
  const items = [
    {
      q: 'They cared more about my conversion rate than I did. The site outperforms my old funnel in week one. I just wish I had hired them a year earlier.',
      a: 'Founder, consumer product',
      stat: '+212% paid sign-ups',
      initials: 'AK',
      tone: 'a',
    },
    {
      q: 'I have worked with three agencies before this. Northcraft is the only one that asked me about my audience before showing me a colour palette.',
      a: 'Creator, education niche',
      stat: '38% capture rate',
      initials: 'PR',
      tone: 'c',
    },
    {
      q: 'Fast, considered, and the SEO foundation finally let us rank for the queries we always lost to bigger publications.',
      a: 'Editor, content platform',
      stat: '+218% organic',
      initials: 'SM',
      tone: 'b',
    },
  ];
  const toneColors = {
    a: '#B8472A',
    c: '#8C3318',
    b: '#5C544A',
  };
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">07 · What clients say</span>
        </div>
        <h2 className="serif" style={{ fontSize: 'clamp(36px, 5.4vw, 68px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '0 0 56px 0', maxWidth: '22ch', fontWeight: 360 }}>
          Three projects, three words: <span className="serif-italic" style={{ color: 'var(--accent)' }}>quietly</span>, deeply, finished.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonial-grid">
          {items.map((it, i) => (
            <figure
              key={i}
              className="lift"
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: 30,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 320,
                position: 'relative',
              }}
            >
              {/* Big decorative quote */}
              <div className="serif" aria-hidden="true" style={{ position: 'absolute', top: 14, right: 22, fontSize: 80, lineHeight: 0.8, color: 'var(--accent)', opacity: 0.15, fontStyle: 'italic' }}>
                "
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 18 }}>
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} />)}
                </div>
                <blockquote className="serif" style={{ fontSize: 21, lineHeight: 1.3, letterSpacing: '-0.015em', margin: 0, color: 'var(--ink)', fontWeight: 380 }}>
                  "{it.q}"
                </blockquote>
              </div>
              <figcaption style={{ marginTop: 24, borderTop: '1px solid var(--line-soft)', paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: toneColors[it.tone],
                    color: '#FAF7EE',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Fraunces, serif', fontSize: 14, fontStyle: 'italic',
                  }}>
                    {it.initials}
                  </div>
                  <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase', maxWidth: '20ch' }}>
                    {it.a}
                  </span>
                </div>
                <span className="mono" style={{ fontSize: 10.5, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  {it.stat}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Process, Team, Testimonial });

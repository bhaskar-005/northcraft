// "Others vs Us" comparison + The Opportunity section

function Compare() {
  const others = [
    'Recycled $9 templates everyone has already seen',
    'A page builder bloated with 4MB of unused CSS',
    'No keyword research. Just guessed headlines',
    'Mobile is "responsive" but the CTA is below the fold',
    'No SEO foundations. Google never indexes the page',
    'Hand-off and ghost. Bugs become your problem',
    'You wait 4 to 6 weeks to see a v1',
  ];
  const us = [
    'We research your competitors: what is working in your market',
    'UI/UX designed specifically to help you monetise your audience',
    'Headlines and offers built around real audience signals, not guesses',
    'Mobile-first, conversion-first. The CTA is always within reach',
    'Schema, sitemap, meta and content briefs on day one',
    '14 days of free iteration after launch, then a flat care plan',
    'v1 lands in 10 to 18 days. Progress every 48 hours',
  ];
  return (
    <section id="approach" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
          <span className="section-label">02 · The honest comparison</span>
        </div>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(40px, 6vw, 76px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            margin: '0 0 18px 0',
            maxWidth: '22ch',
            fontWeight: 360,
          }}
        >
          Most web designers hand you a template with your logo on it. We <span className="serif-italic" style={{ color: 'var(--accent)' }}>research</span> first.
        </h2>
        <p style={{ fontSize: 18.5, color: 'var(--ink-2)', maxWidth: '64ch', margin: '0 0 64px 0', lineHeight: 1.6 }}>
          Before we touch a pixel, we study your competitors: what is already working in your market,
          how your audience decides to buy, and where the best UI/UX opportunity is. Then we build
          the site around that. That is the difference between a site that looks good and one that does something.
        </p>

        <div
          className="compare-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            alignItems: 'stretch',
          }}
        >
          {/* Others */}
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 24,
              padding: 36,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                The usual route
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--accent)',
                  background: 'rgba(184,71,42,0.08)',
                  border: '1px solid rgba(184,71,42,0.18)',
                  padding: '4px 10px',
                  borderRadius: 999,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                avoid
              </span>
            </div>
            <h3 className="serif" style={{ fontSize: 34, margin: '0 0 6px 0', color: 'var(--ink-3)', letterSpacing: '-0.02em', fontWeight: 380 }}>
              Design-first, research-never
            </h3>
            <p className="mono" style={{ fontSize: 11.5, color: 'var(--muted)', margin: '0 0 26px 0', letterSpacing: '0.04em' }}>
              ~ ₹15,000 to ₹40,000 · 4 to 6 weeks · one designer juggling 12 clients
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
              {others.map((t, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 4, flexShrink: 0 }}><Cross color="#B8472A" /></span>
                  <span style={{ color: 'var(--ink-3)', fontSize: 15.5, textDecoration: 'line-through', textDecorationColor: 'rgba(184,71,42,0.4)', textDecorationThickness: 1 }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: 28,
                border: '1px dashed var(--line)',
                borderRadius: 12,
                padding: 16,
                background: 'var(--bg-2)',
              }}
            >
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                what they ship  →
              </div>
              <FailingScoreReport />
            </div>
          </div>

          {/* Us */}
          <div
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              borderRadius: 24,
              padding: 36,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lift)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9C0B0' }}>
                The Northcraft way
              </span>
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: 'var(--accent-soft)',
                  background: 'rgba(232,201,181,0.1)',
                  border: '1px solid rgba(232,201,181,0.2)',
                  padding: '4px 10px',
                  borderRadius: 999,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                recommended
              </span>
            </div>
            <h3 className="serif" style={{ fontSize: 34, margin: '0 0 6px 0', letterSpacing: '-0.02em', fontWeight: 380 }}>
              Research, then build for monetisation
            </h3>
            <p className="mono" style={{ fontSize: 11.5, color: '#C9C0B0', margin: '0 0 26px 0', letterSpacing: '0.04em' }}>
              from ₹8,000 · 10 to 18 days · 4 specialists, one project at a time
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
              {us.map((t, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 4, flexShrink: 0 }}><Check color="#E8C9B5" /></span>
                  <span style={{ fontSize: 15.5, color: '#F4EDDE' }}>{t}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: 28,
                border: '1px solid #2a241d',
                borderRadius: 12,
                padding: 16,
                background: '#0f0d0a',
              }}
            >
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8a8175', marginBottom: 10 }}>
                what we ship  →
              </div>
              <WinningScoreReport />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const DASH      = "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";
const DASH_MONO = "'Roboto Mono','Courier New',Consolas,monospace";

// Failing audit card — minimal, mobile-friendly
function FailingScoreReport() {
  const rows = [
    { l: 'SEO',         v: 59, color: '#DC2626' },
    { l: 'Performance', v: 32, color: '#DC2626' },
    { l: 'Design / UX', v: 24, color: '#DC2626' },
    { l: 'Conversion',  v: 38, color: '#D97706' },
  ];
  return (
    <AuditCard
      url="your-brand.com"
      score={30}
      scoreColor="#DC2626"
      statusText="8 issues found"
      statusColor="#DC2626"
      statusBg="#FEF2F2"
      rows={rows}
      chartTrend="down"
      chartTone="red"
      chartLabel="Sales last 30 days"
      chartDelta="↓ 18%"
      chartDeltaColor="#DC2626"
    />
  );
}

// Winning audit card — same skeleton, all green
function WinningScoreReport() {
  const rows = [
    { l: 'SEO',         v: 98,  color: '#16A34A' },
    { l: 'Performance', v: 99,  color: '#16A34A' },
    { l: 'Design / UX', v: 96,  color: '#16A34A' },
    { l: 'Conversion',  v: 100, color: '#16A34A' },
  ];
  return (
    <AuditCard
      url="your-brand.com"
      score={96}
      scoreColor="#16A34A"
      statusText="All checks passed"
      statusColor="#16A34A"
      statusBg="#F0FDF4"
      rows={rows}
      chartTrend="up"
      chartTone="green"
      chartLabel="Sales last 30 days"
      chartDelta="↑ 142%"
      chartDeltaColor="#16A34A"
    />
  );
}

// Shared card shell — clean, readable, mobile-safe
function AuditCard({ url, score, scoreColor, statusText, statusColor, statusBg, rows, chartTrend, chartTone, chartLabel, chartDelta, chartDeltaColor }) {
  return (
    <div style={{
      fontFamily: DASH,
      background: '#fff',
      border: '1px solid #E2E8F0',
      borderRadius: 12,
      overflow: 'hidden',
      color: '#1E293B',
    }}>
      {/* Toolbar */}
      <div style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => (
            <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block', flexShrink: 0 }} />
          ))}
        </div>
        <div style={{ flex: 1, background: '#EEF2F7', borderRadius: 5, padding: '4px 10px', fontFamily: DASH_MONO, fontSize: 10, color: '#64748B' }}>
          {url}
        </div>
      </div>

      <div style={{ padding: '14px 16px' }}>
        {/* Score + status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            border: `3px solid ${scoreColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: DASH_MONO, fontSize: 14, fontWeight: 800, color: scoreColor,
            flexShrink: 0,
          }}>
            {score}
          </div>
          <div style={{
            fontSize: 11.5, fontWeight: 600, color: statusColor,
            background: statusBg,
            padding: '4px 10px',
            borderRadius: 999,
            letterSpacing: '0.01em',
          }}>
            {statusText}
          </div>
        </div>

        {/* Score rows */}
        <div style={{ display: 'grid', gap: 10 }}>
          {rows.map(r => (
            <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: '0 0 84px', fontSize: 11.5, color: '#475569', fontWeight: 500 }}>
                {r.l}
              </div>
              <div style={{ flex: 1, height: 7, background: '#F1F5F9', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${Math.max(2, r.v)}%`, height: '100%', background: r.color, borderRadius: 999 }} />
              </div>
              <div style={{ flex: '0 0 42px', textAlign: 'right', fontFamily: DASH_MONO, fontSize: 11, fontWeight: 700, color: r.color }}>
                {r.v}
              </div>
            </div>
          ))}
        </div>

        {/* Traffic chart */}
        <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 7 }}>
            <div style={{ fontFamily: DASH_MONO, fontSize: 9, fontWeight: 600, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {chartLabel}
            </div>
            <div style={{ fontFamily: DASH_MONO, fontSize: 11, fontWeight: 700, color: chartDeltaColor }}>
              {chartDelta}
            </div>
          </div>
          <MiniLineChart trend={chartTrend} tone={chartTone} height={38} />
        </div>
      </div>
    </div>
  );
}

function MiniLineChart({ trend = 'up', tone = 'green', height = 44 }) {
  const upPoints   = [4, 8, 6, 12, 10, 18, 16, 24, 28, 34, 32, 40];
  const downPoints = [34, 32, 28, 30, 24, 26, 20, 22, 16, 14, 10, 8];
  const data = trend === 'up' ? upPoints : downPoints;
  const max = Math.max(...data);
  const w = 220, h = height;
  const step = w / (data.length - 1);
  const path = data
    .map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (val / max) * (h - 4) - 2}`)
    .join(' ');
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  const fill = tone === 'green' ? 'rgba(47,74,42,0.10)' : 'rgba(184,71,42,0.10)';
  const stroke = tone === 'green' ? '#2F4A2A' : '#B8472A';
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" aria-hidden="true">
      <path d={area} fill={fill} />
      <path d={path} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <circle
        cx={w}
        cy={h - (data[data.length - 1] / max) * (h - 4) - 2}
        r="3"
        fill={stroke}
      />
    </svg>
  );
}

function MissedOpportunity() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', left: '-20%', top: '-30%',
        width: 800, height: 800,
        background: 'radial-gradient(closest-side, rgba(184,71,42,0.12), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
          <span className="section-label" style={{ color: '#C9C0B0' }}>03 · The opportunity</span>
        </div>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(40px, 6.5vw, 92px)',
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            margin: '0 0 40px 0',
            maxWidth: '18ch',
            fontWeight: 360,
          }}
        >
          Your audience is already paying. <span className="serif-italic" style={{ color: 'var(--accent-soft)' }}>Someone else.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }} className="missed-grid">
          <div>
            <p style={{ fontSize: 19.5, lineHeight: 1.6, color: '#E8E1CE', maxWidth: '54ch' }}>
              Creators in your niche are quietly building 7-figure businesses off their following:
              cohorts, paid newsletters, mini-products, coaching slots. The thing they all have in
              common? A <span className="serif-italic" style={{ color: 'var(--accent-soft)' }}>real website</span> doing
              the heavy lifting. Not a linktree. Not an Instagram bio.
            </p>
            <p style={{ fontSize: 19.5, lineHeight: 1.6, color: '#E8E1CE', maxWidth: '54ch', marginTop: 22 }}>
              Every month you point your audience at a generic link, you are quietly handing that
              attention back to the platform. We help you take it home.
            </p>

            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="missed-stats">
              <Stat n="₹0" l="Earnings if you only post on social" tone="dim" />
              <Stat n="₹3 to 8L" l="Avg. monthly from a well-built page" tone="accent" />
              <Stat n="12 mo." l="Compounding before SEO pays itself back" tone="dim" />
            </div>
          </div>

          {/* Opportunity card */}
          <div
            style={{
              background: '#1a1814',
              border: '1px solid #2a241d',
              borderRadius: 24,
              padding: 28,
              position: 'relative',
              boxShadow: '0 30px 80px -30px rgba(0,0,0,0.5)',
            }}
          >
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A8175', marginBottom: 18 }}>
              The math, in plain numbers
            </div>
            <div className="serif" style={{ fontSize: 'clamp(28px,3.4vw,38px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#F4EDDE', fontWeight: 380, marginBottom: 18 }}>
              A creator with <span className="serif-italic" style={{ color: 'var(--accent-soft)' }}>25k</span> followers and no website makes brand-deal money.
              <br />
              The same creator <span className="serif-italic" style={{ color: 'var(--accent-soft)' }}>with</span> a real product surface compounds into a business.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <MiniStat label="Email capture" value="38%" />
              <MiniStat label="Repeat buyers" value="46%" />
              <MiniStat label="Avg. order lift" value="3.2×" />
              <MiniStat label="Lead to call" value="3.6×" />
            </div>
            <div
              className="mono"
              style={{
                marginTop: 20,
                fontSize: 10.5,
                color: '#8A8175',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                paddingTop: 16,
                borderTop: '1px solid #2a241d',
              }}
            >
              ↳ if you are between 10k and 500k followers, this is what you are leaving on the table.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .missed-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .missed-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Stat({ n, l, tone }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 44, lineHeight: 1, color: tone === 'accent' ? 'var(--accent-soft)' : '#F4EDDE', letterSpacing: '-0.02em', fontWeight: 360 }}>
        {n}
      </div>
      <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A8175', marginTop: 10, maxWidth: '22ch' }}>
        {l}
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div style={{ background: '#0f0d0a', padding: '12px 14px', borderRadius: 10, border: '1px solid #2a241d' }}>
      <div className="mono" style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8A8175' }}>{label}</div>
      <div className="serif" style={{ fontSize: 24, marginTop: 4, letterSpacing: '-0.02em' }}>{value}</div>
    </div>
  );
}

Object.assign(window, { Compare, MissedOpportunity });

'use client';

import { motion } from 'framer-motion';

const STATIC = [600, 500, 400, 300, 200, 110, 42];
const PULSE  = [90, 180, 285, 395];

const CTA_RINGS = [480, 370, 270, 175, 90];

export function HeroCircles() {
  return (
    <>
      <style>{`
        @keyframes radarPulse {
          0%   { transform: scale(1);    opacity: 0.13; }
          100% { transform: scale(1.26); opacity: 0;    }
        }
        .hc-pulse {
          animation: radarPulse 3.8s cubic-bezier(0.12, 0, 0.72, 1) infinite;
          transform-origin: center center;
        }
        @media (max-width: 640px) {
          .hc-root { width: 360px !important; height: 360px !important; right: -20% !important; top: -4% !important; }
        }
      `}</style>

      <div
        className="hc-root"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-7%',
          top: '-12%',
          width: 700,
          height: 700,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* ── Static rings ── */}
        {STATIC.map((d, i) => (
          <div
            key={d}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: d,
              height: d,
              marginTop: -d / 2,
              marginLeft: -d / 2,
              borderRadius: '50%',
              border: `${Math.max(0.4, 1.15 - i * 0.12)}px solid #14110D`,
              opacity: 0.028 + (STATIC.length - i) * 0.004,
            }}
          />
        ))}

        {/* ── Slowly rotating dashed ring (CW) ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 250,
            height: 250,
            marginTop: -125,
            marginLeft: -125,
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px dashed rgba(20,17,13,0.08)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* ── Counter-rotating accent ring (CCW, accent colour) ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 420,
            height: 420,
            marginTop: -210,
            marginLeft: -210,
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px dashed rgba(184,71,42,0.07)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 95, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* ── Radar / sonar pulse rings ── */}
        {PULSE.map((d, i) => (
          <div
            key={`p-${d}`}
            className="hc-pulse"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: d,
              height: d,
              marginTop: -d / 2,
              marginLeft: -d / 2,
              borderRadius: '50%',
              border: '1px solid rgba(20,17,13,0.11)',
              animationDelay: `${-(i * 0.95)}s`,
            }}
          />
        ))}

        {/* ── Pulsing center dot ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 8,
            height: 8,
            marginTop: -4,
            marginLeft: -4,
          }}
        >
          <motion.div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#B8472A',
            }}
            animate={{ scale: [1, 1.9, 1], opacity: [0.28, 0.55, 0.28] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* ── Faint inner halo ring (cross-fade) ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 60,
            height: 60,
            marginTop: -30,
            marginLeft: -30,
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px solid rgba(184,71,42,0.22)',
            }}
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          />
        </div>
      </div>
    </>
  );
}

export function CTACircles() {
  return (
    <>
      <style>{`
        @keyframes ctaPulse {
          0%   { transform: scale(1.18); opacity: 0; }
          100% { transform: scale(1);    opacity: 0.07; }
        }
        .cta-ring {
          animation: ctaPulse 4.2s cubic-bezier(0.25, 0.1, 0.4, 1) infinite;
          transform-origin: center center;
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 560,
          height: 560,
          pointerEvents: 'none',
        }}
      >
        {/* Static rings */}
        {CTA_RINGS.map((d, i) => (
          <div
            key={d}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: d,
              height: d,
              marginTop: -d / 2,
              marginLeft: -d / 2,
              borderRadius: '50%',
              border: `${Math.max(0.4, 1 - i * 0.12)}px solid #F4EDDE`,
              opacity: 0.025 + i * 0.006,
            }}
          />
        ))}

        {/* Inward-pulling rings */}
        {CTA_RINGS.slice(1).map((d, i) => (
          <div
            key={`ci-${d}`}
            className="cta-ring"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: d,
              height: d,
              marginTop: -d / 2,
              marginLeft: -d / 2,
              borderRadius: '50%',
              border: '1px solid rgba(244,237,222,0.12)',
              animationDelay: `${-(i * 1.05)}s`,
            }}
          />
        ))}

        {/* Slowly rotating dashed outer ring */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 480,
            height: 480,
            marginTop: -240,
            marginLeft: -240,
          }}
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px dashed rgba(244,237,222,0.07)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Accent center dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 10,
            height: 10,
            marginTop: -5,
            marginLeft: -5,
          }}
        >
          <motion.div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#B8472A',
            }}
            animate={{ scale: [1, 1.7, 1], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </>
  );
}

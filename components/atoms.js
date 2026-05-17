'use client';

import { useState } from 'react';
import {
  NC_PHONE_DISPLAY,
  NC_WA_LINK,
  NC_WA_TEXT,
  NC_DOMAIN,
} from './contact';
import { track } from './analytics';

export const NorthcraftMark = ({ size = 28, color }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="15" stroke={color || 'currentColor'} strokeWidth="1.25" />
    <path d="M16 5.5 V26.5 M5.5 16 H26.5" stroke={color || 'currentColor'} strokeWidth="1" opacity="0.3" />
    <path d="M9 9 L23 23 M23 9 L9 23" stroke={color || 'currentColor'} strokeWidth="0.75" opacity="0.18" />
    <circle cx="16" cy="16" r="2.6" fill={color || 'currentColor'} />
  </svg>
);

export const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = ({ size = 14, color = '#2F4A2A' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8.5 L6.5 12 L13 4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Cross = ({ size = 14, color = '#B8472A' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4 L12 12 M12 4 L4 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Star = ({ size = 14, color = '#B8472A' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} aria-hidden="true">
    <path d="M8 1 L9.8 5.8 L15 6.2 L11 9.5 L12.3 14.5 L8 11.8 L3.7 14.5 L5 9.5 L1 6.2 L6.2 5.8 Z" />
  </svg>
);

export function BrowserFrame({ url = NC_DOMAIN, aspect = '16/10', children, dark = false, accent = '#B8472A' }) {
  return (
    <div
      className="chrome"
      style={{
        background: dark ? '#0f0d0a' : 'var(--paper)',
        borderColor: dark ? '#2a241d' : 'var(--line)',
      }}
    >
      <div
        className="chrome-bar"
        style={{
          background: dark ? 'linear-gradient(180deg,#1a1814,#14110D)' : 'linear-gradient(180deg,#F0EADA,#E8E1CE)',
          borderBottomColor: dark ? '#2a241d' : 'var(--line)',
        }}
      >
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <div
          className="chrome-url"
          style={{
            background: dark ? '#1a1814' : 'var(--paper)',
            borderColor: dark ? '#2a241d' : 'var(--line)',
            color: dark ? '#C9C0B0' : 'var(--ink-3)',
          }}
        >
          <span style={{ color: accent }}>Recent work</span>&nbsp; {url}
        </div>
        <span
          className="mono"
          style={{
            fontSize: 10,
            color: dark ? '#8A8175' : 'var(--muted)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            paddingLeft: 6,
          }}
        >
          live
        </span>
      </div>
      <div style={{ aspectRatio: aspect, position: 'relative', background: dark ? '#0f0d0a' : 'var(--paper)' }}>
        {children}
      </div>
    </div>
  );
}

export function TeamAvatar({ initials, tone = 'a', size = 56, children }) {
  const tones = {
    a: 'linear-gradient(135deg,#E2C9B0,#B8472A)',
    b: 'linear-gradient(135deg,#C8B89A,#5C544A)',
    c: 'linear-gradient(135deg,#E8C9B5,#8C3318)',
    d: 'linear-gradient(135deg,#BFB298,#2F4A2A)',
  };
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: tones[tone] || tones.a,
        color: '#1A1814',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Fraunces, serif',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: size * 0.42,
        letterSpacing: '-0.02em',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 0 rgba(20,17,13,0.06)',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      {children || initials}
    </div>
  );
}

export function WhatsAppGlyph({ size = 22, color = '#0B3D2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.83 9.83 0 0 0-2.91-7.01zM12.04 20.15h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.18-.48-.3z"/>
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            right: 22,
            bottom: 92,
            zIndex: 60,
            width: 'min(320px, calc(100vw - 44px))',
            background: 'var(--paper)',
            border: '1px solid var(--line)',
            borderRadius: 18,
            boxShadow: '0 20px 60px -20px rgba(20,17,13,0.25), 0 2px 0 rgba(20,17,13,0.04)',
            overflow: 'hidden',
            animation: 'rise .25s cubic-bezier(.2,.7,.3,1) both',
          }}
        >
          <div style={{
            background: '#075E54',
            color: '#F4EDDE',
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: '#128C7E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 16,
            }}>
              B
            </div>
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 16, lineHeight: 1.1, fontWeight: 400 }}>Bhaskar</div>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A8D8C7', marginTop: 2 }}>
                Northcraft Studio
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat preview"
              style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: 0, color: '#F4EDDE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div style={{
            padding: '16px 16px 14px',
            background: 'linear-gradient(180deg, #EDE7D8, #F4F0E6)',
          }}>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55, marginBottom: 12 }}>
              Hey, thanks for stopping by. Tap below and we will pick this up on WhatsApp.
              Typical reply: within an hour during the day.
            </div>
            <div style={{
              background: '#DCF8C6',
              padding: '10px 12px',
              borderRadius: 12,
              borderTopRightRadius: 4,
              fontSize: 13,
              color: '#14110D',
              maxWidth: '85%',
              marginLeft: 'auto',
              lineHeight: 1.45,
            }}>
              {NC_WA_TEXT}
            </div>
            <a
              href={NC_WA_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                track('cta_click', { id: 'wa_floating_send', label: 'Send on WhatsApp', location: 'floating_wa' });
                setOpen(false);
              }}
              style={{
                marginTop: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: '#25D366',
                color: '#0B3D2E',
                padding: '12px 16px',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: '-0.005em',
              }}
            >
              <WhatsAppGlyph size={16} color="#0B3D2E" />
              Send on WhatsApp
            </a>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center', marginTop: 10 }}>
              {NC_PHONE_DISPLAY}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          if (!open) track('wa_floating_open');
          setOpen(o => !o);
        }}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
        aria-expanded={open}
        style={{
          position: 'fixed',
          right: 22,
          bottom: 22,
          zIndex: 60,
          width: 60, height: 60, borderRadius: '50%',
          background: '#25D366',
          border: 0,
          color: '#0B3D2E',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 14px 40px -10px rgba(37,211,102,0.6), 0 2px 0 rgba(0,0,0,0.04)',
          cursor: 'pointer',
          transition: 'transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
      >
        <WhatsAppGlyph size={26} color="#0B3D2E" />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: -6,
            borderRadius: '50%',
            border: '2px solid rgba(37,211,102,0.5)',
            animation: 'wa-pulse 2.2s ease-out infinite',
            pointerEvents: 'none',
          }}
        />
      </button>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(0.85); opacity: 0.7; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
      `}</style>
    </>
  );
}

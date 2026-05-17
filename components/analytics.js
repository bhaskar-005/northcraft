'use client';

import { useEffect } from 'react';

// Tiny safe wrapper around gtag. No-op if GA hasn't loaded yet (afterInteractive
// strategy means there's a brief window where gtag is undefined; we just drop
// those events instead of queueing — the cost is one missed click vs. extra code).
export function track(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

// Drop this in once at the page root. It:
//  1. Fires `section_view` the first time each <section id="..."> scrolls into view
//     → tells you where users actually reach (drop-off funnel).
//  2. Fires `scroll_depth` at 25 / 50 / 75 / 100% of page height.
export function AnalyticsObserver() {
  useEffect(() => {
    // Section view tracking
    const sections = document.querySelectorAll('section[id]');
    const seenSections = new Set();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !seenSections.has(e.target.id)) {
            seenSections.add(e.target.id);
            track('section_view', { section: e.target.id });
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    // Scroll depth tracking
    const milestones = [25, 50, 75, 100];
    const reached = new Set();
    const onScroll = () => {
      const doc = document.documentElement;
      const height = doc.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const pct = Math.round(((window.scrollY) / height) * 100);
      milestones.forEach((m) => {
        if (pct >= m && !reached.has(m)) {
          reached.add(m);
          track('scroll_depth', { percent: m });
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}

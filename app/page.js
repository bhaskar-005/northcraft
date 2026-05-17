import { Nav, Hero, Marquee } from '@/components/nav-hero';
import { Compare, MissedOpportunity } from '@/components/compare-fomo';
import { Work } from '@/components/work';
import { Process, Team, Testimonial } from '@/components/process-team';
import { Pricing, FAQ } from '@/components/pricing-faq';
import { CTA, Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/atoms';
import { AnalyticsObserver } from '@/components/analytics';

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Compare />
      <MissedOpportunity />
      <Work />
      <Process />
      <Team />
      <Testimonial />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <AnalyticsObserver />
    </>
  );
}

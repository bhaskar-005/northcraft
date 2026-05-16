// Root app: composes all sections in order.

function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

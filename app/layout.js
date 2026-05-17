import './globals.css';

export const metadata = {
  metadataBase: new URL('https://northcraft.chronists.com/'),
  title: 'Northcraft Studio: Bespoke websites that convert audience into income',
  description:
    'Northcraft is a four-person studio in Dehradun, IN. Custom websites for creators, coaches and service-led businesses. Plans start at ₹8,000. Average 3.4× conversion lift.',
  authors: [{ name: 'Northcraft Studio' }],
  keywords: [
    'web design studio India',
    'custom landing pages',
    'creator websites',
    'affordable web design',
    'conversion rate optimization',
    'SEO',
    'Dehradun web designers',
    'Bhaskar Bhandari',
    'Northcraft Studio',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Northcraft Studio',
    title: 'Northcraft Studio: Bespoke websites that convert audience into income',
    description:
      'A four-person studio building conversion-first websites for creators, coaches and service-led businesses. Plans from ₹8,000. 18-day turnaround.',
    url: 'https://northcraft.chronists.com/',
    locale: 'en_US',
    images: [
      {
        url: 'https://northcraft.chronists.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Northcraft Studio: bespoke websites for creators and service businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northcraft Studio: Bespoke websites that convert audience into income',
    description:
      'Four-person studio. Custom sites from ₹8,000. 18-day turnaround. 3.4× average conversion lift.',
    images: ['https://northcraft.chronists.com/og.jpg'],
    creator: '@northcraftstudio',
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2314110D'/%3E%3Ccircle cx='16' cy='16' r='10' fill='none' stroke='%23F4F0E6' stroke-width='1.5'/%3E%3Ccircle cx='16' cy='16' r='2.6' fill='%23B8472A'/%3E%3C/svg%3E",
    apple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%2314110D'/%3E%3Ccircle cx='16' cy='16' r='10' fill='none' stroke='%23F4F0E6' stroke-width='1.5'/%3E%3Ccircle cx='16' cy='16' r='2.6' fill='%23B8472A'/%3E%3C/svg%3E",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F0E6' },
    { media: '(prefers-color-scheme: dark)', color: '#14110D' },
  ],
  colorScheme: 'light',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://northcraft.chronists.com/#org',
      name: 'Northcraft Studio',
      url: 'https://northcraft.chronists.com/',
      logo: 'https://northcraft.chronists.com/og.jpg',
      description:
        'Four-person web design studio building bespoke landing pages and product sites for creators, coaches and service-led businesses.',
      foundingDate: '2022',
      founder: { '@type': 'Person', name: 'Bhaskar Bhandari' },
      address: { '@type': 'PostalAddress', addressLocality: 'Dehradun', addressCountry: 'IN' },
      email: 'codes.bhaskar@gmail.com',
      telephone: '+91-7906654584',
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://northcraft.chronists.com/#site',
      url: 'https://northcraft.chronists.com/',
      name: 'Northcraft Studio',
      publisher: { '@id': 'https://northcraft.chronists.com/#org' },
      inLanguage: 'en',
    },
    {
      '@type': 'ProfessionalService',
      name: 'Northcraft Studio',
      image: 'https://northcraft.chronists.com/og.jpg',
      priceRange: '₹8,000 to ₹50,000',
      telephone: '+91-7906654584',
      email: 'codes.bhaskar@gmail.com',
      areaServed: 'Worldwide',
      address: { '@type': 'PostalAddress', addressLocality: 'Dehradun', addressCountry: 'IN' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#top"
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
        >
          Skip to content
        </a>
        <main id="root">{children}</main>
      </body>
    </html>
  );
}

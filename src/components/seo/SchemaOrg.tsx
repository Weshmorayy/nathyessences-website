import { siteConfig } from '@/config/site';

interface SchemaOrgProps {
  type?: 'Store' | 'LocalBusiness' | 'Organization';
}

export function SchemaOrg({ type = 'Store' }: SchemaOrgProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Store', 'LocalBusiness'],
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legal.companyName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo.transparent}`,
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: 'Abidjan',
      addressCountry: siteConfig.contact.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.3600,
      longitude: -4.0083,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    sameAs: siteConfig.socials.map((s) => s.url),
    priceRange: 'FCFA',
    currenciesAccepted: 'XOF',
    paymentAccepted: 'Wave, Orange Money, Moov Money, MTN, Espèces',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {siteConfig.faq.items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

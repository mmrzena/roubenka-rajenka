import { Dictionary } from '@/i18n/types'
import { CONTACT_PHONE, SITE_NAME, SITE_URL } from '@/lib/site'

export default function StructuredData({ dict }: { dict: Dictionary }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE_URL}#lodging`,
    name: SITE_NAME,
    description: dict.meta.description,
    url: dict.locale === 'cs' ? SITE_URL : `${SITE_URL}/en`,
    telephone: CONTACT_PHONE,
    image: [
      `${SITE_URL}/images/web/hero.jpg`,
      `${SITE_URL}/images/web/svetnice.jpg`,
      `${SITE_URL}/images/web/loznice-1.jpg`,
      `${SITE_URL}/images/web/zahrada.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kněžnice',
      addressRegion: 'Královéhradecký kraj',
      addressCountry: 'CZ',
    },
    checkinTime: '16:00',
    checkoutTime: '10:00',
    numberOfRooms: 2,
    petsAllowed: true,
    priceRange: '6 000 – 30 000 Kč',
    amenityFeature: dict.cottage.amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

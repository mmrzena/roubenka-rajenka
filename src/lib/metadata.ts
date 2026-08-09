import type { Metadata } from 'next'
import { Dictionary } from '@/i18n/types'
import { SITE_NAME, SITE_URL } from './site'

export function buildMetadata(dict: Dictionary): Metadata {
  const path = dict.locale === 'cs' ? '/' : '/en'
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: {
        cs: '/',
        en: '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: dict.locale === 'cs' ? SITE_URL : `${SITE_URL}/en`,
      siteName: SITE_NAME,
      locale: dict.locale === 'cs' ? 'cs_CZ' : 'en_GB',
      type: 'website',
      images: [
        {
          url: '/images/web/hero.jpg',
          width: 1800,
          height: 1350,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/images/web/hero.jpg'],
    },
  }
}

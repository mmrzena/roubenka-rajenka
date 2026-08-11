export type Locale = 'cs' | 'en'

export interface Dictionary {
  locale: Locale
  meta: {
    title: string
    description: string
  }
  nav: {
    cottage: string
    story: string
    gallery: string
    surroundings: string
    pricing: string
    contact: string
    cta: string
    switchLabel: string
    switchHref: string
    switchLang: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    imageAlt: string
    facts: string[]
  }
  cottage: {
    title: string
    imageAlt: string
    paragraphs: string[]
    amenitiesTitle: string
    amenities: string[]
    facts: { label: string; value: string }[]
  }
  story: {
    title: string
    paragraphs: string[]
  }
  gallery: {
    title: string
    prevLabel: string
    nextLabel: string
    openLabel: string
    closeLabel: string
    photos: { src: string; label: string; alt: string }[]
  }
  surroundings: {
    title: string
    lead: string
    distanceNote: string
    groups: {
      title: string
      places: { name: string; distance: string; description: string }[]
    }[]
  }
  pricing: {
    title: string
    seasonsHead: { season: string; week: string; weekend: string }
    seasons: { label: string; dates: string; week: string; weekend: string }[]
    holidaysTitle: string
    holidays: { label: string; value: string; detail: string }[]
    holidaysNote: string
    includesTitle: string
    includes: string
    feesTitle: string
    fees: string[]
    checkTitle: string
    check: string
    cancellationTitle: string
    cancellation: string[]
  }
  contact: {
    title: string
    lead: string
    emailLabel: string
    phoneLabel: string
    addressLabel: string
    calendarTitle: string
    mapLink: string
  }
  form: {
    name: string
    email: string
    phone: string
    phoneOptional: string
    arrival: string
    departure: string
    guests: string
    guestsOptions: { value: string; label: string }[]
    message: string
    messagePlaceholder: string
    submit: string
    sending: string
    success: string
    successDetail: string
    error: string
  }
  theme: {
    toNight: string
    toDay: string
  }
  footer: {
    tagline: string
    rights: string
  }
  notFound: {
    title: string
    body: string
    back: string
  }
}

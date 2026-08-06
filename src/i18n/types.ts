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
    standInNote: string
    facts: string[]
  }
  cottage: {
    eyebrow: string
    title: string
    paragraphs: string[]
    amenitiesTitle: string
    amenities: string[]
    factsTitle: string
    facts: { label: string; value: string }[]
  }
  story: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  gallery: {
    eyebrow: string
    title: string
    note: string
    interiorAlt: string
    interiorLabel: string
    placeholders: string[]
    comingSoon: string
  }
  surroundings: {
    eyebrow: string
    title: string
    lead: string
    distanceNote: string
    places: { name: string; distance: string; description: string }[]
  }
  pricing: {
    eyebrow: string
    title: string
    note: string
    rows: { label: string; value: string; detail?: string }[]
    includes: string
  }
  contact: {
    eyebrow: string
    title: string
    lead: string
    emailLabel: string
    phoneLabel: string
    addressLabel: string
    mapTitle: string
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

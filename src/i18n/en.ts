import { Dictionary } from './types'

export const en: Dictionary = {
  locale: 'en',
  meta: {
    title: 'Roubenka Rajenka – timbered cottage in Bohemian Paradise, near Jičín',
    description:
      'Rent a traditional Czech log cottage in Kněžnice, at the foot of the Prachov Rocks. Sleeps up to 8, garden, the quiet side of Bohemian Paradise. Ask about your dates.',
  },
  nav: {
    cottage: 'The cottage',
    story: 'Story',
    gallery: 'Gallery',
    surroundings: 'Around',
    pricing: 'Rates',
    contact: 'Contact',
    cta: 'Send an inquiry',
    switchLabel: 'Česky',
    switchHref: '/',
    switchLang: 'cs',
  },
  hero: {
    eyebrow: 'Kněžnice · Bohemian Paradise',
    title: 'Roubenka Rajenka',
    lead: 'An honest timbered cottage on the edge of Bohemian Paradise, ten minutes from Jičín and a short walk from the Prachov Rocks. Old beams, a wood stove, and a garden that smells of firewood in the evening.',
    ctaPrimary: 'Send an inquiry',
    ctaSecondary: 'See the cottage',
    imageAlt: 'Illustration of the cottage at dusk with the porch light on',
    standInNote: 'Illustration – photo coming soon.',
    facts: ['sleeps up to 8', '2 bedrooms', 'garden with seating', 'parking at the house'],
  },
  cottage: {
    eyebrow: 'The cottage',
    title: 'A roubenka the way it should be',
    paragraphs: [
      'Rajenka is a traditional log cottage with white chinking, arched windows and a weathered charm, carefully restored for comfortable year-round stays. Inside you will find the original beams, herringbone parquet floors, and green-framed windows that let the garden look in.',
      'The cottage comfortably hosts two families or a group of friends. Downstairs is a shared living room with a long dining table and a fully equipped kitchen; upstairs are two bedrooms. A fold-out sofa handles the overflow when more of you arrive.',
    ],
    amenitiesTitle: 'What you will find',
    amenities: [
      'Fully equipped kitchen',
      'Dining table seating 8',
      'Wood-burning stove',
      'Garden with outdoor seating',
      'Parking right at the house',
      'Wi-Fi',
      'Bed linen and towels included',
      'Equipment for small children',
    ],
    factsTitle: 'At a glance',
    facts: [
      { label: 'Capacity', value: 'up to 8 guests' },
      { label: 'Bedrooms', value: '2 + fold-out sofa' },
      { label: 'Location', value: 'Kněžnice, 10 km from Jičín' },
      { label: 'Season', value: 'open all year' },
    ],
  },
  story: {
    eyebrow: 'Story',
    title: 'A house that remembers',
    paragraphs: [
      'The cottage has stood in Kněžnice for over a hundred years. Local carpenters built it from pine the way houses were always built in the foothills of Bohemian Paradise – log walls, white-limed joints, and a roof set against the north wind.',
      'When we took it over, we brought it back to life piece by piece: the beams got a fresh coat, the windows got their green back, and the long table returned to the living room, where the whole house gathers.',
      'The name Rajenka comes from the land it stands on. “Ráj” means paradise in Czech – and it is within sight. Step out of the gate and walk to the rocks.',
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Have a look inside',
    note: 'We are adding photos gradually – more are coming soon.',
    interiorAlt: 'Illustration of the living room with a long dining table and green windows',
    interiorLabel: 'Living room',
    placeholders: ['Bedroom', 'Kitchen', 'Bathroom', 'Garden', 'Around the house'],
    comingSoon: 'photo coming soon',
  },
  surroundings: {
    eyebrow: 'Around',
    title: 'Bohemian Paradise on your doorstep',
    lead: 'Kněžnice sits right below the Prachov Rocks, halfway between Jičín and Turnov. Most trips start at the cottage gate – on foot, by bike, or a few minutes by car.',
    distanceNote: 'Distances are approximate, measured from the cottage.',
    places: [
      {
        name: 'Prachov Rocks',
        distance: '4 km',
        description:
          'A sandstone rock city with lookouts and marked loops for all ages. The edge of the rocks is within walking distance.',
      },
      {
        name: 'Jičín',
        distance: '10 km',
        description:
          'A storybook town – chateau, arcaded square, restaurants and the Kníže swimming lake.',
      },
      {
        name: 'Trosky Castle',
        distance: '16 km',
        description:
          'The icon of Bohemian Paradise: two towers on volcanic plugs with a view of the whole region.',
      },
      {
        name: 'Hrubá Skála',
        distance: '17 km',
        description:
          'A chateau on a cliff and the Hruboskalsko rock city, the heart of the Golden Trail.',
      },
      {
        name: 'Turnov & Malá Skála',
        distance: '20 km',
        description:
          'The Jizera river, canoe rentals and riverside pubs – perfect for a summer afternoon.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Rates',
    title: 'What a stay costs',
    note: 'Prices are indicative – we will send you an exact quote based on your dates and group size.',
    rows: [
      {
        label: 'Night, off season',
        value: 'from CZK 3,500',
        detail: 'whole cottage, 2-night minimum',
      },
      { label: 'Night, high season', value: 'from CZK 4,500', detail: 'summer and holidays' },
      { label: 'Week', value: 'from CZK 22,000', detail: 'Saturday to Saturday' },
    ],
    includes: 'Bed linen, towels, firewood and parking are included. Refundable deposit CZK 5,000.',
  },
  contact: {
    eyebrow: 'Contact & booking',
    title: 'Ask about your dates',
    lead: 'Send us your dates and group size and we will get back to you with availability and a price. Every booking is confirmed personally – no bots.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    mapTitle: 'Map – Kněžnice, Jičín district',
    mapLink: 'Open the map',
  },
  form: {
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    phoneOptional: 'optional',
    arrival: 'Arrival',
    departure: 'Departure',
    guests: 'Guests',
    guestsOptions: [
      { value: '1', label: '1 guest' },
      { value: '2', label: '2 guests' },
      { value: '3', label: '3 guests' },
      { value: '4', label: '4 guests' },
      { value: '5', label: '5 guests' },
      { value: '6', label: '6 guests' },
      { value: '7', label: '7 guests' },
      { value: '8', label: '8 guests' },
    ],
    message: 'Message',
    messagePlaceholder: 'Who is coming, anything you want to ask…',
    submit: 'Send inquiry',
    sending: 'Sending…',
    success: 'Thank you, your inquiry is on its way.',
    successDetail:
      'We will get back to you shortly to confirm the dates. A copy went to your email.',
    error: 'The inquiry could not be sent. Please try again, or email us directly.',
  },
  footer: {
    tagline: 'A timbered cottage below the Prachov Rocks',
    rights: 'Roubenka Rajenka, Kněžnice',
  },
  notFound: {
    title: 'Page not found',
    body: 'Nothing here – try starting from the home page.',
    back: 'Back to home',
  },
}

import { Dictionary } from '@/i18n/types'
import { IMAGES } from '@/lib/site'
import ArchFrame from './ArchFrame'
import SectionHeading from './SectionHeading'

function PlaceholderTile({ label, comingSoon }: { label: string; comingSoon: string }) {
  return (
    <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 bg-sage-mist">
      <svg viewBox="0 0 40 48" className="h-12 w-10 text-sage" aria-hidden="true">
        <path
          d="M4 20 Q4 4 20 4 Q36 4 36 20 L36 44 L4 44 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <line x1="20" y1="8" x2="20" y2="44" stroke="currentColor" strokeWidth="2" />
        <line x1="5" y1="26" x2="35" y2="26" stroke="currentColor" strokeWidth="2" />
      </svg>
      <p className="font-display text-lg text-timber">{label}</p>
      <p className="text-sm text-timber-faded">{comingSoon}</p>
    </div>
  )
}

export default function GallerySection({ dict }: { dict: Dictionary }) {
  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading eyebrow={dict.gallery.eyebrow} title={dict.gallery.title} />

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        <ArchFrame>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.interior}
            alt={dict.gallery.interiorAlt}
            className="aspect-[4/5] w-full object-cover"
          />
        </ArchFrame>
        {dict.gallery.placeholders.map((label) => (
          <ArchFrame key={label}>
            <PlaceholderTile label={label} comingSoon={dict.gallery.comingSoon} />
          </ArchFrame>
        ))}
      </div>

      <p className="mt-6 text-sm text-timber-faded">{dict.gallery.note}</p>
    </section>
  )
}

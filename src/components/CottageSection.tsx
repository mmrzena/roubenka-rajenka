import { Dictionary } from '@/i18n/types'
import { IMAGES } from '@/lib/site'
import ArchFrame from './ArchFrame'
import SectionHeading from './SectionHeading'

export default function CottageSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="chalupa" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading eyebrow={dict.cottage.eyebrow} title={dict.cottage.title} />

      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div>
          <div className="space-y-5 text-lg leading-relaxed text-timber-soft">
            {dict.cottage.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mb-4 mt-10 font-display text-xl font-medium text-timber">
            {dict.cottage.amenitiesTitle}
          </h3>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {dict.cottage.amenities.map((amenity) => (
              <li key={amenity} className="flex items-center gap-3 text-timber-soft">
                <span aria-hidden="true" className="h-1.5 w-4 shrink-0 rounded-sm bg-sage" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit">
          <ArchFrame>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.cottage}
              alt={dict.cottage.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </ArchFrame>
          <div className="mt-6 rounded-lg border border-sage/40 bg-sage-mist p-6">
            <h3 className="mb-5 font-display text-xl font-medium text-timber">
              {dict.cottage.factsTitle}
            </h3>
            <dl className="space-y-4">
              {dict.cottage.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 text-lg text-timber">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}

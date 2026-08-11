import { Dictionary } from '@/i18n/types'
import { IMAGES } from '@/lib/site'
import CottagePhoto from './CottagePhoto'
import SectionHeading from './SectionHeading'

export default function CottageSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="chalupa" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading title={dict.cottage.title} />

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
          <CottagePhoto
            src={IMAGES.cottage}
            alt={dict.cottage.imageAlt}
            openLabel={dict.gallery.openLabel}
            closeLabel={dict.gallery.closeLabel}
          />
          <div className="mt-6 bg-sage-mist p-6">
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

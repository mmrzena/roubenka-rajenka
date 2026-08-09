import { Dictionary } from '@/i18n/types'
import SectionHeading from './SectionHeading'

export default function SurroundingsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="okoli" className="bg-sage-mist/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading eyebrow={dict.surroundings.eyebrow} title={dict.surroundings.title} />
        <p className="mb-10 max-w-2xl text-lg text-timber-soft">{dict.surroundings.lead}</p>

        <div className="space-y-12">
          {dict.surroundings.groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-display text-2xl font-medium text-timber">{group.title}</h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.places.map((place) => (
                  <article
                    key={place.name}
                    className="rounded-lg border border-sage/30 bg-chalk p-6 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(43,32,24,0.25)]"
                  >
                    <div className="mb-3 flex items-baseline justify-between gap-3">
                      <h4 className="font-display text-xl font-medium text-timber">{place.name}</h4>
                      <span className="shrink-0 rounded-full bg-sage px-2.5 py-0.5 text-xs font-bold text-chalk">
                        {place.distance}
                      </span>
                    </div>
                    <p className="text-timber-soft">{place.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-timber-faded">{dict.surroundings.distanceNote}</p>
      </div>
    </section>
  )
}

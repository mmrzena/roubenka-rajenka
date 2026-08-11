import { Dictionary } from '@/i18n/types'
import SectionHeading from './SectionHeading'

export default function SurroundingsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="okoli" className="bg-sage-mist/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading title={dict.surroundings.title} />
        <p className="mb-12 max-w-2xl text-lg text-timber-soft">{dict.surroundings.lead}</p>

        <div className="space-y-4">
          {dict.surroundings.groups.map((group, groupIndex) => (
            <details key={group.title} className="group" open={groupIndex === 0}>
              <summary className="signpost-slat flex cursor-pointer list-none items-center gap-3 bg-night py-3 pl-4 pr-14 transition-colors hover:bg-night-soft [&::-webkit-details-marker]:hidden">
                <h3 className="flex-1 font-display text-xl font-medium text-parchment">
                  {group.title}
                </h3>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-amber-glow transition-transform group-open:rotate-180"
                >
                  <path
                    d="M3 6l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <ul className="grid gap-x-10 gap-y-5 px-1 pb-6 pt-5 sm:grid-cols-2">
                {group.places.map((place) => (
                  <li key={place.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium text-timber">{place.name}</span>
                      <span className="shrink-0 font-semibold text-sage-dark">
                        {place.distance}
                      </span>
                    </div>
                    <p className="mt-1 text-[15px] leading-relaxed text-timber-soft">
                      {place.description}
                    </p>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <p className="mt-10 text-sm text-timber-faded">{dict.surroundings.distanceNote}</p>
      </div>
    </section>
  )
}

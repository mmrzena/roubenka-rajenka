import { Dictionary } from '@/i18n/types'
import SectionHeading from './SectionHeading'

export default function PricingSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="cenik" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading eyebrow={dict.pricing.eyebrow} title={dict.pricing.title} />

      <div className="max-w-2xl">
        <dl className="divide-y divide-timber/10 border-y border-timber/10">
          {dict.pricing.rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 py-5">
              <div>
                <dt className="text-lg text-timber">{row.label}</dt>
                {row.detail && <p className="mt-0.5 text-sm text-timber-faded">{row.detail}</p>}
              </div>
              <dd className="shrink-0 font-display text-2xl font-medium text-terracotta">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-timber-soft">{dict.pricing.includes}</p>
        <p className="mt-3 text-sm text-timber-faded">{dict.pricing.note}</p>
      </div>
    </section>
  )
}

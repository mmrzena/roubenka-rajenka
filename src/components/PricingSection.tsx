import { Dictionary } from '@/i18n/types'
import SectionHeading from './SectionHeading'

export default function PricingSection({ dict }: { dict: Dictionary }) {
  const { pricing } = dict

  return (
    <section id="cenik" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading title={pricing.title} />

      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-timber/20 text-left">
                <th className="py-3 pr-4 text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {pricing.seasonsHead.season}
                </th>
                <th className="py-3 pr-4 text-right text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {pricing.seasonsHead.week}
                </th>
                <th className="py-3 text-right text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {pricing.seasonsHead.weekend}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-timber/10">
              {pricing.seasons.map((season) => (
                <tr key={season.label}>
                  <td className="py-4 pr-4">
                    <p className="text-lg text-timber">{season.label}</p>
                    <p className="mt-0.5 text-sm text-timber-faded">{season.dates}</p>
                  </td>
                  <td className="py-4 pr-4 text-right font-display text-xl font-medium text-terracotta">
                    {season.week}
                  </td>
                  <td className="py-4 text-right font-display text-xl font-medium text-terracotta">
                    {season.weekend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="mb-3 mt-10 font-display text-xl font-medium text-timber">
            {pricing.holidaysTitle}
          </h3>
          <dl className="divide-y divide-timber/10 border-y border-timber/10">
            {pricing.holidays.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-4">
                <div>
                  <dt className="text-lg text-timber">{row.label}</dt>
                  <p className="mt-0.5 text-sm text-timber-faded">{row.detail}</p>
                </div>
                <dd className="shrink-0 font-display text-xl font-medium text-terracotta">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-timber-faded">{pricing.holidaysNote}</p>

          <h3 className="mb-4 mt-10 font-display text-xl font-medium text-timber">
            {pricing.shortStaysTitle}
          </h3>
          <dl className="flex flex-wrap gap-x-10 gap-y-5">
            {pricing.shortStays.map((stay) => (
              <div key={stay.nights}>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {stay.nights}
                </dt>
                <dd className="mt-1 font-display text-xl font-medium text-terracotta">
                  {stay.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-timber-faded">{pricing.shortStaysNote}</p>
        </div>

        <aside className="h-fit space-y-8 bg-sage-mist p-6">
          <div>
            <h3 className="mb-2 font-display text-xl font-medium text-timber">
              {pricing.includesTitle}
            </h3>
            <p className="text-timber-soft">{pricing.includes}</p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-medium text-timber">
              {pricing.feesTitle}
            </h3>
            <ul className="space-y-2.5">
              {pricing.fees.map((fee) => (
                <li key={fee} className="flex gap-3 text-timber-soft">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-4 shrink-0 bg-sage" />
                  {fee}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-display text-xl font-medium text-timber">
              {pricing.checkTitle}
            </h3>
            <p className="text-timber-soft">{pricing.check}</p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-medium text-timber">
              {pricing.cancellationTitle}
            </h3>
            <ul className="space-y-2.5">
              {pricing.cancellation.map((item) => (
                <li key={item} className="flex gap-3 text-timber-soft">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-4 shrink-0 bg-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

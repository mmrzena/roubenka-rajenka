import { Dictionary } from '@/i18n/types'
import { IMAGES } from '@/lib/site'
import ArchFrame from './ArchFrame'

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="max-w-3xl animate-fade-up">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-sage-dark">
          {dict.hero.eyebrow}
        </p>
        <h1 className="font-display text-5xl font-semibold text-timber sm:text-6xl">
          {dict.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-timber-soft">{dict.hero.lead}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#kontakt"
            className="rounded-full bg-terracotta px-6 py-3 font-medium text-chalk transition-colors hover:bg-terracotta-dark"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a
            href="#chalupa"
            className="rounded-full border border-timber/25 px-6 py-3 font-medium text-timber transition-colors hover:border-sage hover:text-sage-dark"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {dict.hero.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2 text-sm text-timber-faded">
              <span aria-hidden="true" className="h-1.5 w-4 rounded-sm bg-sage" />
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 animate-fade-up-delayed md:mt-14">
        <ArchFrame>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.hero}
            alt={dict.hero.imageAlt}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
          />
        </ArchFrame>
      </div>
    </section>
  )
}

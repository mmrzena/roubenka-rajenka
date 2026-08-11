import { Dictionary } from '@/i18n/types'

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="grid md:h-[calc(100svh-66px)] md:min-h-[560px] md:grid-cols-2">
      <div className="flex items-center px-4 py-14 sm:px-6 md:py-10 md:pl-[max(1.5rem,calc((100vw-72rem)/2))] md:pr-12">
        <div className="animate-fade-up">
          <p className="mb-5 font-medium text-timber-faded">{dict.hero.eyebrow}</p>
          <h1 className="font-display text-5xl font-semibold text-timber sm:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-timber-soft">{dict.hero.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#kontakt"
              className="btn-cut bg-terracotta px-6 py-3 font-medium text-chalk transition-colors hover:bg-terracotta-dark"
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#chalupa"
              className="py-3 font-medium text-timber underline decoration-sage decoration-2 underline-offset-[6px] transition-colors hover:text-sage-dark"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {dict.hero.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 text-sm text-timber-faded">
                <span aria-hidden="true" className="h-1.5 w-4 shrink-0 bg-sage" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="animate-fade-up-delayed relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/web/hero-wide.jpg"
          alt={dict.hero.imageAlt}
          className="aspect-[4/3] w-full object-cover object-left md:absolute md:inset-0 md:h-full md:aspect-auto"
        />
      </div>
    </section>
  )
}

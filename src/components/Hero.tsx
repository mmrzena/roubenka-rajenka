import { Dictionary } from '@/i18n/types'
import { IMAGES } from '@/lib/site'
import ArchFrame from './ArchFrame'

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
      <div className="animate-fade-up">
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

      <figure className="animate-fade-up-delayed relative">
        <ArchFrame>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.hero}
            alt={dict.hero.imageAlt}
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
          />
        </ArchFrame>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.illustration}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-8 -left-3 w-28 -rotate-6 rounded-md border-4 border-chalk bg-chalk shadow-[0_10px_30px_-10px_rgba(43,32,24,0.45)] transition-transform duration-300 ease-out hover:-rotate-2 hover:scale-105 sm:-left-6 sm:w-36"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-4 h-48 w-44">
          <span className="firefly" style={{ left: '30%', top: '62%' }} />
          <span
            className="firefly"
            style={{ left: '55%', top: '70%', animationDelay: '1.4s', ['--drift-x' as string]: '-16px' }}
          />
          <span
            className="firefly"
            style={{ left: '14%', top: '52%', animationDelay: '2.6s', animationDuration: '6.5s' }}
          />
          <span
            className="firefly"
            style={{ left: '70%', top: '48%', animationDelay: '3.8s', ['--drift-x' as string]: '-24px', animationDuration: '7s' }}
          />
          <span
            className="firefly"
            style={{ left: '44%', top: '40%', animationDelay: '5s', ['--drift-x' as string]: '20px' }}
          />
        </div>
      </figure>
    </section>
  )
}

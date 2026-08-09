import Link from 'next/link'
import { Dictionary } from '@/i18n/types'
import { SITE_NAME } from '@/lib/site'
import LogoMark from './LogoMark'

export default function Navigation({ dict }: { dict: Dictionary }) {
  const links = [
    { href: '#chalupa', label: dict.nav.cottage },
    { href: '#pribeh', label: dict.nav.story },
    { href: '#galerie', label: dict.nav.gallery },
    { href: '#okoli', label: dict.nav.surroundings },
    { href: '#cenik', label: dict.nav.pricing },
    { href: '#kontakt', label: dict.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 bg-chalk/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <LogoMark className="h-7 w-7" />
          <span className="font-display text-lg font-semibold text-timber">{SITE_NAME}</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-timber-soft transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={dict.nav.switchHref}
            lang={dict.nav.switchLang}
            className="rounded-full border border-timber/20 px-3 py-1.5 text-sm font-medium text-timber-soft transition-colors hover:border-sage hover:text-sage-dark"
          >
            {dict.nav.switchLabel}
          </Link>
          <a
            href="#kontakt"
            className="hidden rounded-full bg-terracotta px-4 py-1.5 text-sm font-medium text-chalk transition-colors hover:bg-terracotta-dark sm:block"
          >
            {dict.nav.cta}
          </a>
        </div>
      </nav>
      <div aria-hidden="true" className="stripe-divider-thin" />
    </header>
  )
}

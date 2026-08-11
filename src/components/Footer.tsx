import Link from 'next/link'
import { Dictionary } from '@/i18n/types'
import { SITE_NAME } from '@/lib/site'
import StripeDivider from './StripeDivider'

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-night">
      <StripeDivider />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="font-display text-lg font-medium text-parchment">{SITE_NAME}</p>
          <p className="text-sm text-parchment/70">{dict.footer.tagline}</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-parchment/70">
          <Link
            href={dict.nav.switchHref}
            lang={dict.nav.switchLang}
            className="underline-offset-4 transition-colors hover:text-amber-glow hover:underline"
          >
            {dict.nav.switchLabel}
          </Link>
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

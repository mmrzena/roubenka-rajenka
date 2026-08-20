'use client'

import { useEffect, useId, useState } from 'react'

export type NavLink = {
  href: string
  label: string
}

export default function MobileMenu({
  links,
  cta,
  openLabel,
  closeLabel,
}: {
  links: NavLink[]
  cta: string
  openLabel: string
  closeLabel: string
}) {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center border border-timber/20 text-timber"
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <div
        id={menuId}
        className={`absolute left-0 right-0 top-full bg-chalk px-4 py-5 shadow-[0_18px_34px_rgb(var(--c-ink)/0.18)] sm:px-6 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-semibold text-timber transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="btn-cut mt-5 inline-flex w-fit bg-terracotta px-4 py-2 text-sm font-medium text-on-terracotta transition-colors [--cut:8px] hover:bg-terracotta-dark sm:hidden"
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  )
}

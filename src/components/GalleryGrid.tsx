'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Dictionary } from '@/i18n/types'

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 ${direction === 'left' ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function gridSrc(src: string) {
  return src.replace('/web/', '/web/grid/')
}

// Every third row leads with a double-size tile, which keeps the 4-column
// grid gap-free only while the count between features stays at 9
const FEATURE_EVERY = 9

export default function GalleryGrid({ gallery }: { gallery: Dictionary['gallery'] }) {
  const { photos } = gallery
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([])
  const lastOpenedFrom = useRef<number | null>(null)

  const goTo = useCallback(
    (next: number) => {
      setOpenIndex(((next % photos.length) + photos.length) % photos.length)
    },
    [photos.length],
  )

  const close = useCallback(() => {
    setOpenIndex(null)
    const from = lastOpenedFrom.current
    if (from !== null) tileRefs.current[from]?.focus()
  }, [])

  const isOpen = openIndex !== null

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') goTo(openIndex - 1)
      if (event.key === 'ArrowRight') goTo(openIndex + 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, openIndex, goTo, close])

  useEffect(() => {
    if (openIndex === null) return
    const neighbours = [openIndex + 1, openIndex - 1 + photos.length].map((i) => i % photos.length)
    neighbours.forEach((i) => {
      const img = new Image()
      img.src = photos[i].src
    })
  }, [openIndex, photos])

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || openIndex === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) > 40) goTo(delta < 0 ? openIndex + 1 : openIndex - 1)
  }

  const current = openIndex === null ? null : { index: openIndex, photo: photos[openIndex] }

  return (
    <>
      <ul className="grid grid-flow-row-dense grid-cols-2 gap-2.5 sm:grid-cols-4">
        {photos.map((item, i) => {
          const feature = i % FEATURE_EVERY === 0
          return (
            <li key={item.src} className={feature ? 'col-span-2 row-span-2' : ''}>
              <button
                ref={(el) => {
                  tileRefs.current[i] = el
                }}
                type="button"
                onClick={() => {
                  lastOpenedFrom.current = i
                  setOpenIndex(i)
                }}
                className="group relative block h-full w-full cursor-zoom-in overflow-hidden bg-chalk-dark"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={gridSrc(item.src)}
                  alt={item.alt}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent px-3 pb-2.5 pt-8 text-left text-sm font-medium text-parchment opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {current &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.photo.label}
            className="animate-lightbox-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-night/95 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) close()
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.photo.src}
              src={current.photo.src}
              alt={current.photo.alt}
              className="animate-slide-fade max-h-[86vh] max-w-full object-contain"
            />
            <p className="mt-4 text-parchment">
              <span className="font-display text-lg">{current.photo.label}</span>
              <span className="ml-3 text-sm text-parchment/70">
                {current.index + 1} / {photos.length}
              </span>
            </p>

            <button
              type="button"
              onClick={close}
              aria-label={gallery.closeLabel}
              className="absolute right-4 top-4 rounded-full bg-parchment/15 p-2.5 text-parchment transition-colors hover:bg-parchment/30"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(current.index - 1)}
              aria-label={gallery.prevLabel}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-parchment/15 p-2.5 text-parchment transition-colors hover:bg-parchment/30"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(current.index + 1)}
              aria-label={gallery.nextLabel}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-parchment/15 p-2.5 text-parchment transition-colors hover:bg-parchment/30"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>,
          document.body,
        )}
    </>
  )
}

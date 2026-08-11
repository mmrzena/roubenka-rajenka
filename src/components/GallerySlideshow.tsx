'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Dictionary } from '@/i18n/types'
import PhotoFrame from './PhotoFrame'

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

function thumbSrc(src: string) {
  return src.replace('/web/', '/web/thumbs/')
}

export default function GallerySlideshow({ gallery }: { gallery: Dictionary['gallery'] }) {
  const { photos } = gallery
  const [index, setIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const stripRef = useRef<HTMLDivElement | null>(null)
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([])

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % photos.length) + photos.length) % photos.length)
    },
    [photos.length],
  )

  useEffect(() => {
    if (!fullscreen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFullscreen(false)
      if (event.key === 'ArrowLeft') goTo(index - 1)
      if (event.key === 'ArrowRight') goTo(index + 1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [fullscreen, index, goTo])

  useEffect(() => {
    const neighbours = [index + 1, index - 1 + photos.length].map((i) => i % photos.length)
    neighbours.forEach((i) => {
      const img = new Image()
      img.src = photos[i].src
    })
    const strip = stripRef.current
    const thumb = thumbRefs.current[index]
    if (strip && thumb) {
      strip.scrollTo({
        left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
        behavior: 'smooth',
      })
    }
  }, [index, photos])

  const photo = photos[index]

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
  }
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) > 40) goTo(delta < 0 ? index + 1 : index - 1)
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={gallery.title}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') goTo(index - 1)
        if (event.key === 'ArrowRight') goTo(index + 1)
      }}
    >
      <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <PhotoFrame>
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            aria-label={gallery.openLabel}
            className="block w-full cursor-zoom-in"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="animate-slide-fade aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04] sm:aspect-[3/2]"
            />
          </button>
        </PhotoFrame>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label={gallery.prevLabel}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-chalk/85 p-2.5 text-timber shadow-md transition-colors hover:bg-chalk hover:text-terracotta"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label={gallery.nextLabel}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-chalk/85 p-2.5 text-timber shadow-md transition-colors hover:bg-chalk hover:text-terracotta"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <p className="mt-3 text-center text-timber-soft" aria-live="polite">
        <span className="font-display text-lg text-timber">{photo.label}</span>
        <span className="ml-3 text-sm text-timber-faded">
          {index + 1} / {photos.length}
        </span>
      </p>

      <div ref={stripRef} className="relative mt-5 flex gap-3 overflow-x-auto pb-2">
        {photos.map((thumb, i) => (
          <button
            key={thumb.src}
            ref={(el) => {
              thumbRefs.current[i] = el
            }}
            type="button"
            onClick={() => goTo(i)}
            aria-label={thumb.label}
            aria-current={i === index}
            className={`shrink-0 overflow-hidden transition-all ${
              i === index
                ? 'ring-[3px] ring-sage'
                : 'opacity-70 ring-1 ring-timber/15 hover:opacity-100'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbSrc(thumb.src)}
              alt=""
              loading="lazy"
              className="aspect-[4/3] h-16 object-cover sm:h-20"
            />
          </button>
        ))}
      </div>

      {fullscreen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={photo.label}
            className="animate-lightbox-in fixed inset-0 z-50 flex flex-col items-center justify-center bg-timber/95 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setFullscreen(false)
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="animate-slide-fade max-h-[86vh] max-w-full object-contain"
            />
            <p className="mt-4 text-chalk">
              <span className="font-display text-lg">{photo.label}</span>
              <span className="ml-3 text-sm text-chalk/70">
                {index + 1} / {photos.length}
              </span>
            </p>

            <button
              type="button"
              onClick={() => setFullscreen(false)}
              aria-label={gallery.closeLabel}
              className="absolute right-4 top-4 rounded-full bg-chalk/15 p-2.5 text-chalk transition-colors hover:bg-chalk/30"
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
              onClick={() => goTo(index - 1)}
              aria-label={gallery.prevLabel}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-chalk/15 p-2.5 text-chalk transition-colors hover:bg-chalk/30"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={gallery.nextLabel}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-chalk/15 p-2.5 text-chalk transition-colors hover:bg-chalk/30"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>,
          document.body,
        )}
    </div>
  )
}

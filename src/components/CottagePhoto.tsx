'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PhotoFrame from './PhotoFrame'

export default function CottagePhoto({
  src,
  alt,
  openLabel,
  closeLabel,
}: {
  src: string
  alt: string
  openLabel: string
  closeLabel: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <PhotoFrame>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={openLabel}
          className="block w-full cursor-zoom-in"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
          />
        </button>
      </PhotoFrame>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="animate-lightbox-in fixed inset-0 z-50 flex items-center justify-center bg-timber/95 p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false)
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="max-h-[90vh] max-w-full object-contain" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
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
          </div>,
          document.body,
        )}
    </>
  )
}

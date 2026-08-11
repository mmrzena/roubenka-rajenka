'use client'

import { useEffect, useState } from 'react'
import { useDusk } from './DuskProvider'

const RAYS = [
  [45.6, 4.0, 47.4, 4.0],
  [43.67, 8.67, 44.94, 9.94],
  [39.0, 10.6, 39.0, 12.4],
  [34.33, 8.67, 33.06, 9.94],
  [32.4, 4.0, 30.6, 4.0],
  [34.33, -0.67, 33.06, -1.94],
  [39.0, -2.6, 39.0, -4.4],
  [43.67, -0.67, 44.94, -1.94],
]

function Body({ up, children }: { up: boolean; children: React.ReactNode }) {
  const state = up ? ' is-up' : ''
  return (
    <g className={`logo-drift${state}`}>
      <g className={`logo-lift${state}`}>{children}</g>
    </g>
  )
}

export default function LogoMark({
  className = 'h-8 w-8',
  toNight,
  toDay,
}: {
  className?: string
  toNight: string
  toDay: string
}) {
  const { dusk, toggle } = useDusk()
  const [risen, setRisen] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setRisen(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <svg viewBox="0 -6 48 38" aria-hidden="true" className="block h-full w-full">
        <defs>
          <clipPath id="logo-sky">
            <path d="M-8 -40 H54 V12.6 H30 L16 2 L2 12.6 H-8 Z" />
          </clipPath>
          <mask id="logo-crescent">
            <circle cx="39" cy="4" r="5.2" fill="#fff" />
            <circle cx="36.4" cy="1.9" r="4.6" fill="#000" />
          </mask>
        </defs>

        <g clipPath="url(#logo-sky)">
          <Body up={risen && !dusk}>
            <g fill="rgb(var(--c-amber))">
              <circle cx="39" cy="4" r="5.2" />
              <g stroke="rgb(var(--c-amber))" strokeWidth="1.1" strokeLinecap="round">
                {RAYS.map(([x1, y1, x2, y2]) => (
                  <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
                ))}
              </g>
            </g>
          </Body>

          <Body up={risen && dusk}>
            <g fill="rgb(var(--c-parchment))">
              <circle cx="39" cy="4" r="5.2" mask="url(#logo-crescent)" />
              <circle cx="31.6" cy="-1.6" r="0.7" opacity="0.85" />
              <circle cx="45.6" cy="11.2" r="0.55" opacity="0.7" />
            </g>
          </Body>
        </g>

        <path d="M16 2 L30 12 L2 12 Z" fill="rgb(var(--c-terracotta))" />
        <g fill="rgb(var(--c-ink))">
          <rect x="4" y="13" width="24" height="4" rx="1" />
          <rect x="4" y="19" width="24" height="4" rx="1" />
          <rect x="4" y="25" width="24" height="4" rx="1" />
        </g>
      </svg>

      <button
        type="button"
        onClick={toggle}
        aria-label={dusk ? toDay : toNight}
        aria-pressed={dusk}
        className="absolute inset-0 h-full w-full"
      />
    </span>
  )
}

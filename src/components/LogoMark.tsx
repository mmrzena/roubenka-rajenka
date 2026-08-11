'use client'

import { useEffect, useRef, useState } from 'react'

const BEAMS = [
  { y: 13, out: -26 },
  { y: 19, out: 26 },
  { y: 25, out: -26 },
]

const PULLS_BEFORE_COLLAPSE = BEAMS.length
const FALL_MS = 900
const REBUILD_MS = 800

export default function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  const [pulled, setPulled] = useState<number[]>([])
  const [falling, setFalling] = useState(false)
  const [locked, setLocked] = useState(false)
  const [buildId, setBuildId] = useState(0)
  const timers = useRef<number[]>([])

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])

  function pull(index: number) {
    if (locked || pulled.includes(index)) return

    const next = [...pulled, index]
    if (next.length < PULLS_BEFORE_COLLAPSE) {
      setPulled(next)
      return
    }

    setLocked(true)
    setPulled(BEAMS.map((_, i) => i))
    setFalling(true)
    timers.current.push(
      window.setTimeout(() => {
        setFalling(false)
        setPulled([])
        setBuildId((id) => id + 1)
      }, FALL_MS),
    )
    timers.current.push(window.setTimeout(() => setLocked(false), FALL_MS + REBUILD_MS))
  }

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <clipPath id="logo-wall">
          <rect x="2" y="12" width="28" height="18" />
        </clipPath>
      </defs>

      <g key={buildId}>
        <g clipPath="url(#logo-wall)" fill="#2B2018">
          {BEAMS.map((beam, i) => (
            <rect
              key={beam.y}
              className={`logo-beam logo-beam-${BEAMS.length - i}`}
              x="4"
              y={beam.y}
              width="24"
              height="4"
              rx="1"
              style={pulled.includes(i) ? { transform: `translateX(${beam.out}px)` } : undefined}
            />
          ))}
        </g>
        <path
          className={falling ? 'logo-roof logo-roof-fall' : 'logo-roof'}
          d="M16 2 L30 12 L2 12 Z"
          fill="#B0502C"
        />
      </g>

      {BEAMS.map((beam, i) => (
        <rect
          key={`pull-${beam.y}`}
          x="2"
          y={beam.y - 1}
          width="28"
          height="6"
          fill="transparent"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            pull(i)
          }}
        />
      ))}
    </svg>
  )
}

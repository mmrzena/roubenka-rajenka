'use client'

import { useDusk } from './DuskProvider'

// Sun and moon both sit at 640,150 r=46 in the 800×1000 viewBox of the two
// illustrations, so one hit area serves both
const BODY = { left: '80%', top: '15%', width: '13%', height: '10.4%' }

export default function DuskIllustration({
  day,
  night,
  toNight,
  toDay,
}: {
  day: string
  night: string
  toNight: string
  toDay: string
}) {
  const { dusk, toggle } = useDusk()

  return (
    <div className="relative -rotate-2 border-8 border-parchment bg-parchment shadow-[0_16px_50px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out hover:rotate-0 hover:scale-[1.03]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={day}
        alt=""
        aria-hidden="true"
        className={`block w-full transition-opacity duration-700 ease-out ${dusk ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={night}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 block w-full transition-opacity duration-700 ease-out ${
          dusk ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={dusk ? toDay : toNight}
        aria-pressed={dusk}
        style={BODY}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
    </div>
  )
}

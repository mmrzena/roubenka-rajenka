'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { isDuskAtCottage } from '@/lib/sun'

const RECHECK_MS = 5 * 60 * 1000

const DuskContext = createContext<{ dusk: boolean; toggle: () => void }>({
  dusk: false,
  toggle: () => {},
})

export function useDusk() {
  return useContext(DuskContext)
}

/* The server has no clock the visitor cares about, so it renders day and the
   sun is read here instead. Landing before the first paint is what keeps an
   evening visit from fading in from day. */
const useBeforePaint = typeof window === 'undefined' ? useEffect : useLayoutEffect

export default function DuskProvider({ children }: { children: React.ReactNode }) {
  const [sunIsDown, setSunIsDown] = useState(false)
  const [chosen, setChosen] = useState<boolean | null>(null)

  const dusk = chosen ?? sunIsDown

  useBeforePaint(() => {
    if (chosen !== null) return

    const follow = () => setSunIsDown(isDuskAtCottage(new Date()))
    follow()

    const id = setInterval(follow, RECHECK_MS)
    return () => clearInterval(id)
  }, [chosen])

  useBeforePaint(() => {
    const root = document.documentElement
    if (dusk) root.setAttribute('data-dusk', '')
    else root.removeAttribute('data-dusk')
  }, [dusk])

  const toggle = useCallback(() => setChosen(!dusk), [dusk])

  const value = useMemo(() => ({ dusk, toggle }), [dusk, toggle])

  return <DuskContext.Provider value={value}>{children}</DuskContext.Provider>
}

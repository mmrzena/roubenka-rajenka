'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const DuskContext = createContext<{ dusk: boolean; toggle: () => void }>({
  dusk: false,
  toggle: () => {},
})

export function useDusk() {
  return useContext(DuskContext)
}

export default function DuskProvider({ children }: { children: React.ReactNode }) {
  const [dusk, setDusk] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dusk) root.setAttribute('data-dusk', '')
    else root.removeAttribute('data-dusk')
  }, [dusk])

  const value = useMemo(() => ({ dusk, toggle: () => setDusk((on) => !on) }), [dusk])

  return <DuskContext.Provider value={value}>{children}</DuskContext.Provider>
}

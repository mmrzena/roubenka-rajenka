'use client'

import { Locale } from '@/i18n/types'
import { ECHALUPY_CALENDAR_ID, SITE_URL } from '@/lib/site'
import { useDusk } from './DuskProvider'

/* The widget is a third-party iframe, so nothing in globals.css can reach it —
   its colours travel in the query string and are hex without the #. Keep these
   in step with the palette there by hand.

   Arrival and departure days are drawn as a diagonal gradient between the free
   and occupied fills but take their digit colour from obsazenoText alone, so
   that one colour has to stay legible on both fills. That is why the occupied
   fills are light enough for dark digits rather than being the full-strength
   terracotta: C37A5D is that terracotta mixed a quarter of the way to
   parchment, the one step where dark digits and the tile edge both hold up. */
const DAY = {
  pozadi: 'FAF7F0',
  kalendarPozadi: 'FAF7F0',
  kalendarText: '2B2018',
  ramecek: 'F0EADC',
  mesicPozadi: 'F0EADC',
  mesicText: '2B2018',
  dnyPozadi: 'FAF7F0',
  dnyText: '4A3A2C',
  volnoPozadi: 'C8CCB6',
  volnoText: '1A1208',
  obsazenoPozadi: 'C37A5D',
  obsazenoText: '1A1208',
  castecnePozadi: 'E5A33F',
  castecneText: '1A1208',
  neaktivniDnyPozadi: 'FAF7F0',
  neaktivniDnyText: '7A6A58',
  legendaText: '4A3A2C',
}

const DUSK = {
  pozadi: '161929',
  kalendarPozadi: '282E48',
  kalendarText: 'EEE8DB',
  ramecek: '404B76',
  mesicPozadi: '404B76',
  mesicText: 'EEE8DB',
  dnyPozadi: '282E48',
  dnyText: 'CEC6B8',
  volnoPozadi: 'A9B18C',
  volnoText: '161929',
  obsazenoPozadi: 'E08A5F',
  obsazenoText: '1A1208',
  castecnePozadi: 'F0B860',
  castecneText: '1A1208',
  neaktivniDnyPozadi: '282E48',
  neaktivniDnyText: '989084',
  legendaText: 'CEC6B8',
}

export default function AvailabilityCalendar({ locale, title }: { locale: Locale; title: string }) {
  const { dusk } = useDusk()

  const layout = {
    id: ECHALUPY_CALENDAR_ID,
    pocetMesicu: '6',
    jazyk: locale === 'cs' ? 'cz' : 'en',
    jednotky: 'ne',
  }

  const src =
    'https://obsazenost.e-chalupy.cz/kalendar.php?' +
    new URLSearchParams({
      ...layout,
      legenda: 'ano',
      velikost: '1',
      fontFamily: 'Karla',
      extCss: `${SITE_URL}/api/calendar?${new URLSearchParams(layout).toString()}`,
      ...(dusk ? DUSK : DAY),
    }).toString()

  return <iframe src={src} title={title} loading="lazy" className="block h-80 w-full bg-chalk" />
}

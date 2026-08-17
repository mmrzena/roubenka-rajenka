import { NextRequest } from 'next/server'

const UPSTREAM = 'https://obsazenost.e-chalupy.cz/kalendar.php'

/* The widget takes an extCss stylesheet but marks a day only free, occupied or
   adjacent-month, so nothing in CSS can say "elapsed". The layout it renders is
   read here to turn today's date into the grid coordinates of the days already
   behind us, which CSS can address. */
const FADE = '{opacity:.28;background-image:none;cursor:default}'

const LAYOUT_PARAMS = [
  'id',
  'pocetMesicu',
  'jazyk',
  'jednotky',
  'ctvrtleti',
  'vybraneMesice',
  'idJednotky',
]

const MONTH_TABLE = /<TABLE class='month[\s\S]*?<\/TABLE>/gi
const TABLE_ROW = /<TR[^>]*>([\s\S]*?)<\/TR>/gi
const ROW_CELL = /<TD([^>]*)>([\s\S]*?)<\/TD>/gi

function todayInPrague(language: string | null) {
  const now = new Date()
  const options = { timeZone: 'Europe/Prague' } as const

  return {
    day: Number(new Intl.DateTimeFormat('en-CA', { ...options, day: '2-digit' }).format(now)),
    heading:
      new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'cs-CZ', {
        ...options,
        month: 'long',
      }).format(now) +
      ' ' +
      new Intl.DateTimeFormat('en-CA', { ...options, year: 'numeric' }).format(now),
  }
}

/* The month is found by its heading rather than by position: fading the wrong
   table would tell guests that free days are gone. */
function pastDaySelectors(html: string, today: ReturnType<typeof todayInPrague>) {
  const months = html.match(MONTH_TABLE) ?? []
  const month = months.findIndex(
    (table) =>
      /month-name'>([^<]+)/.exec(table)?.[1].trim().toLowerCase() === today.heading.toLowerCase(),
  )
  if (month === -1) return []

  const selectors: string[] = []

  Array.from(months[month].matchAll(TABLE_ROW)).forEach((row, rowIndex) => {
    let column = 0

    for (const [, attributes, contents] of Array.from(row[1].matchAll(ROW_CELL))) {
      column += 1

      const day = Number(contents.trim())
      const classes = /class='([^']*)'/.exec(attributes)?.[1] ?? ''
      if (!day || classes.includes('day-shdw') || day >= today.day) continue

      selectors.push(
        `#obal table.month:nth-of-type(${month + 1}) tr:nth-child(${rowIndex + 1}) td:nth-child(${column})`,
      )
    }
  })

  return selectors
}

export async function GET(request: NextRequest) {
  const params = new URLSearchParams()
  for (const key of LAYOUT_PARAMS) {
    const value = request.nextUrl.searchParams.get(key)
    if (value) params.set(key, value)
  }

  const css = (body: string) =>
    new Response(body, {
      headers: {
        'content-type': 'text/css; charset=utf-8',
        'cache-control': 'public, max-age=900',
      },
    })

  let html: string
  try {
    const response = await fetch(`${UPSTREAM}?${params.toString()}`, { cache: 'no-store' })
    if (!response.ok) throw new Error(`e-chalupy responded ${response.status}`)
    html = await response.text()
  } catch {
    return css('')
  }

  const selectors = pastDaySelectors(html, todayInPrague(params.get('jazyk')))

  return css(selectors.length ? `${selectors.join(',')}${FADE}` : '')
}

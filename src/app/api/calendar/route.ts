import { NextRequest } from 'next/server'

const UPSTREAM = 'https://obsazenost.e-chalupy.cz/kalendar.php'

/* The widget marks a day free, occupied or adjacent-month and nothing else, so
   yesterday looks as bookable as tomorrow. Serving its markup from our own
   origin is the only way to reach those cells: cross-origin CSS cannot. */
const PAST_STYLE =
  '<style>.month td.day-past{opacity:.28;cursor:default}' +
  '.month td.day-past.z,.month td.day-past.k{background-image:none}</style>'

const PARAM_ALLOWLIST = new Set([
  'id',
  'pocetMesicu',
  'legenda',
  'jednotky',
  'velikost',
  'jazyk',
  'fontFamily',
  'pozadi',
  'kalendarPozadi',
  'kalendarText',
  'ramecek',
  'mesicPozadi',
  'mesicText',
  'dnyPozadi',
  'dnyText',
  'volnoPozadi',
  'volnoText',
  'obsazenoPozadi',
  'obsazenoText',
  'castecnePozadi',
  'castecneText',
  'neaktivniDnyPozadi',
  'neaktivniDnyText',
  'legendaText',
])

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

/* Only the first month table is touched, and only once its heading proves it is
   the month we are standing in — fading a future month would tell guests that
   free days are gone. */
function fadePastDays(html: string, { day: today, heading }: ReturnType<typeof todayInPrague>) {
  const start = html.indexOf("<TABLE class='month")
  const end = html.indexOf('</TABLE>', start)
  if (start === -1 || end === -1) return html

  const month = /month-name'>([^<]+)/.exec(html.slice(start, end))
  if (month?.[1].trim().toLowerCase() !== heading.toLowerCase()) return html

  const faded = html
    .slice(start, end)
    .replace(/<TD class='([^']*)'([^>]*)>(\d+)<\/TD>/g, (cell, classes, rest, day) =>
      classes.includes('day-shdw') || Number(day) >= today
        ? cell
        : `<TD class='${classes} day-past'${rest}>${day}</TD>`,
    )

  return html.slice(0, start) + faded + html.slice(end)
}

export async function GET(request: NextRequest) {
  const params = new URLSearchParams()
  request.nextUrl.searchParams.forEach((value, key) => {
    if (PARAM_ALLOWLIST.has(key)) params.set(key, value)
  })

  const upstream = `${UPSTREAM}?${params.toString()}`

  let html: string
  try {
    const response = await fetch(upstream, { cache: 'no-store' })
    if (!response.ok) throw new Error(`e-chalupy responded ${response.status}`)
    html = await response.text()
  } catch {
    /* An unstyled calendar beats an empty box. */
    return Response.redirect(upstream, 302)
  }

  html = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace('</head>', `${PAST_STYLE}</head>`)

  return new Response(fadePastDays(html, todayInPrague(params.get('jazyk'))), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=900',
    },
  })
}

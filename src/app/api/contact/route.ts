import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '@/lib/site'

type ApiLocale = 'cs' | 'en'

const errorCopy = {
  cs: {
    invalidRequest: 'Neplatný požadavek',
    tooFast: 'Poptávku se nepodařilo odeslat. Zkuste to prosím znovu.',
    tooMany: 'Příliš mnoho požadavků. Zkuste to prosím později.',
    sendFailed: 'Nepodařilo se odeslat email',
    generic: 'Nastala chyba při zpracování požadavku',
    nameTooShort: 'Jméno musí mít alespoň 2 znaky',
    invalidEmail: 'Neplatná emailová adresa',
    missingArrival: 'Vyplňte prosím datum příjezdu',
    missingDeparture: 'Vyplňte prosím datum odjezdu',
    missingGuests: 'Vyplňte prosím počet hostů',
    departureBeforeArrival: 'Datum odjezdu musí být po příjezdu',
  },
  en: {
    invalidRequest: 'Invalid request',
    tooFast: 'The inquiry could not be sent. Please try again.',
    tooMany: 'Too many requests. Please try again later.',
    sendFailed: 'The email could not be sent',
    generic: 'Something went wrong while processing the request',
    nameTooShort: 'Name must be at least 2 characters',
    invalidEmail: 'Invalid email address',
    missingArrival: 'Please fill in the arrival date',
    missingDeparture: 'Please fill in the departure date',
    missingGuests: 'Please fill in the number of guests',
    departureBeforeArrival: 'Departure must be after arrival',
  },
}

function getRecipientEmail(): string {
  return process.env.EMAIL_DEFAULT || CONTACT_EMAIL
}

function getSenderEmail(): string {
  return process.env.EMAIL_FROM || process.env.EMAIL_USER || 'web@roubenkarajenka.cz'
}

function getSenderAddress(): string {
  return `"${SITE_NAME}" <${getSenderEmail()}>`
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildContactSchema(t: (typeof errorCopy)[ApiLocale]) {
  return z
    .object({
      name: z.string().min(2, t.nameTooShort),
      email: z.string().email(t.invalidEmail),
      phone: z.string().optional().or(z.literal('')),
      arrival: z.string().min(1, t.missingArrival),
      departure: z.string().min(1, t.missingDeparture),
      guests: z.string().min(1, t.missingGuests),
      message: z.string().optional().or(z.literal('')),
      locale: z.enum(['cs', 'en']).default('cs'),
      website: z.string().optional().or(z.literal('')),
      startedAt: z.string().min(1, t.invalidRequest),
    })
    .superRefine((data, ctx) => {
      if (data.website && data.website.trim().length > 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t.invalidRequest,
          path: ['website'],
        })
      }
      if (data.arrival && data.departure && data.departure <= data.arrival) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t.departureBeforeArrival,
          path: ['departure'],
        })
      }
    })
}

const MIN_FORM_FILL_TIME_MS = 10_000
const MAX_FUTURE_SKEW_MS = 5 * 60 * 1000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_PER_IP = 5
const RATE_LIMIT_EMAIL_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX_PER_EMAIL = 3

type RateLimitState = {
  count: number
  resetAt: number
}

const ipRateLimit = new Map<string, RateLimitState>()
const emailRateLimit = new Map<string, RateLimitState>()

function checkRateLimit(
  map: Map<string, RateLimitState>,
  key: string,
  limit: number,
  windowMs: number,
  now: number,
) {
  const entry = map.get(key)
  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, resetAt: now + windowMs }
  }
  if (entry.count >= limit) {
    return { allowed: false, resetAt: entry.resetAt }
  }
  entry.count += 1
  return { allowed: true, resetAt: entry.resetAt }
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown'
  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp.trim()
  return 'unknown'
}

type InquiryData = z.infer<ReturnType<typeof buildContactSchema>>

function ownerEmailText(data: InquiryData): string {
  return `
Nová poptávka ubytování z webu

Jméno: ${data.name}
Email: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ''}
Termín: ${data.arrival} – ${data.departure}
Počet hostů: ${data.guests}
Jazyk formuláře: ${data.locale}

Zpráva:
${data.message || '(bez zprávy)'}
  `
}

function ownerEmailHtml(data: InquiryData): string {
  return `
    <h2>Nová poptávka ubytování z webu</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(data.phone)}</p>` : ''}
    <p><strong>Termín:</strong> ${escapeHtml(data.arrival)} – ${escapeHtml(data.departure)}</p>
    <p><strong>Počet hostů:</strong> ${escapeHtml(data.guests)}</p>
    <p><strong>Jazyk formuláře:</strong> ${data.locale}</p>
    <p><strong>Zpráva:</strong></p>
    <p>${escapeHtml(data.message || '(bez zprávy)').replace(/\n/g, '<br>')}</p>
  `
}

const confirmationCopy = {
  cs: {
    subject: 'Potvrzení přijetí poptávky – Roubenka Rajenka',
    heading: 'Děkujeme za vaši poptávku',
    body: 'přijali jsme vaši poptávku ubytování a co nejdříve se vám ozveme s potvrzením volného termínu a cenou.',
    summary: 'Shrnutí poptávky:',
    dates: 'Termín',
    guests: 'Počet hostů',
    message: 'Zpráva',
    greeting: 'Dobrý den',
  },
  en: {
    subject: 'Inquiry received – Roubenka Rajenka',
    heading: 'Thank you for your inquiry',
    body: 'we have received your accommodation inquiry and will get back to you shortly with availability and a price.',
    summary: 'Inquiry summary:',
    dates: 'Dates',
    guests: 'Guests',
    message: 'Message',
    greeting: 'Hello',
  },
}

function confirmationHtml(data: InquiryData): string {
  const t = confirmationCopy[data.locale]
  return `
    <h2>${t.heading}</h2>
    <p>${t.greeting} ${escapeHtml(data.name)},</p>
    <p>${t.body}</p>
    <h3>${t.summary}</h3>
    <p><strong>${t.dates}:</strong> ${escapeHtml(data.arrival)} – ${escapeHtml(data.departure)}</p>
    <p><strong>${t.guests}:</strong> ${escapeHtml(data.guests)}</p>
    ${data.message ? `<p><strong>${t.message}:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>` : ''}
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
    <p style="font-size: 14px; color: #6b7280;">
      <strong>${SITE_NAME}</strong><br>
      Kněžnice, okres Jičín<br>
      Email: ${getRecipientEmail()}<br>
      Web: <a href="${SITE_URL}">${SITE_URL.replace('https://', '')}</a>
    </p>
  `
}

function confirmationText(data: InquiryData): string {
  const t = confirmationCopy[data.locale]
  return `
${t.heading}

${t.greeting} ${data.name},

${t.body}

${t.summary}
${t.dates}: ${data.arrival} – ${data.departure}
${t.guests}: ${data.guests}
${data.message ? `${t.message}: ${data.message}` : ''}

---
${SITE_NAME}
Kněžnice, okres Jičín
Email: ${getRecipientEmail()}
Web: ${SITE_URL.replace('https://', '')}
  `
}

function logEmail(data: InquiryData, recipientEmail: string) {
  console.log('\n=============== EMAIL TO OWNER (DEV MODE) ===============')
  console.log('From:', getSenderAddress())
  console.log('To:', recipientEmail)
  console.log('Reply-To:', data.email)
  console.log('Subject:', `Poptávka ubytování – ${data.name} (${data.arrival} – ${data.departure})`)
  console.log(ownerEmailText(data))
  console.log('==========================================================\n')

  console.log('\n========== CONFIRMATION EMAIL TO GUEST (DEV MODE) ========')
  console.log('From:', getSenderAddress())
  console.log('To:', data.email)
  console.log('Subject:', confirmationCopy[data.locale].subject)
  console.log(confirmationText(data))
  console.log('==========================================================\n')
}

export async function POST(request: NextRequest) {
  let locale: ApiLocale = 'cs'
  try {
    const body = await request.json()
    if (body && body.locale === 'en') {
      locale = 'en'
    }
    const t = errorCopy[locale]

    const validatedData = buildContactSchema(t).parse(body)

    const now = Date.now()
    const startedAtMs = Number(validatedData.startedAt)
    if (!Number.isFinite(startedAtMs)) {
      return NextResponse.json({ error: t.invalidRequest }, { status: 400 })
    }
    const elapsedMs = now - startedAtMs
    if (elapsedMs < -MAX_FUTURE_SKEW_MS) {
      return NextResponse.json({ error: t.invalidRequest }, { status: 400 })
    }
    if (elapsedMs >= 0 && elapsedMs < MIN_FORM_FILL_TIME_MS) {
      return NextResponse.json({ error: t.tooFast }, { status: 400 })
    }

    const clientIp = getClientIp(request)
    if (clientIp !== 'unknown') {
      const ipLimit = checkRateLimit(
        ipRateLimit,
        clientIp,
        RATE_LIMIT_MAX_PER_IP,
        RATE_LIMIT_WINDOW_MS,
        now,
      )
      if (!ipLimit.allowed) {
        return NextResponse.json(
          { error: t.tooMany },
          {
            status: 429,
            headers: {
              'Retry-After': Math.ceil((ipLimit.resetAt - now) / 1000).toString(),
            },
          },
        )
      }
    }

    const emailKey = validatedData.email.trim().toLowerCase()
    const emailLimit = checkRateLimit(
      emailRateLimit,
      emailKey,
      RATE_LIMIT_MAX_PER_EMAIL,
      RATE_LIMIT_EMAIL_WINDOW_MS,
      now,
    )
    if (!emailLimit.allowed) {
      return NextResponse.json(
        { error: t.tooMany },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((emailLimit.resetAt - now) / 1000).toString(),
          },
        },
      )
    }

    const useMockEmail =
      !process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD

    if (!useMockEmail && !process.env.EMAIL_DEFAULT) {
      console.error(
        'EMAIL_DEFAULT is not set; refusing to send inquiries to the placeholder address',
      )
      return NextResponse.json({ error: t.generic }, { status: 500 })
    }

    const recipientEmail = getRecipientEmail()

    if (useMockEmail) {
      logEmail(validatedData, recipientEmail)
    } else {
      try {
        const smtpPort = Number(process.env.EMAIL_PORT ?? 587)
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        })

        await transporter.sendMail({
          from: getSenderAddress(),
          to: recipientEmail,
          replyTo: validatedData.email,
          subject: `Poptávka ubytování – ${validatedData.name} (${validatedData.arrival} – ${validatedData.departure})`,
          html: ownerEmailHtml(validatedData),
          text: ownerEmailText(validatedData),
        })

        await transporter.sendMail({
          from: getSenderAddress(),
          to: validatedData.email,
          replyTo: recipientEmail,
          subject: confirmationCopy[validatedData.locale].subject,
          html: confirmationHtml(validatedData),
          text: confirmationText(validatedData),
        })
      } catch (emailError) {
        console.error('Email error:', emailError)
        return NextResponse.json({ error: t.sendFailed }, { status: 500 })
      }
    }

    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    const t = errorCopy[locale]
    if (error instanceof z.ZodError) {
      const message = error.errors.map((err) => err.message).join('; ')
      return NextResponse.json({ error: message, details: error.issues }, { status: 400 })
    }

    console.error('Unexpected error:', error)
    return NextResponse.json({ error: t.generic }, { status: 500 })
  }
}

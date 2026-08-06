# Roubenka Rajenka

Marketing one-pager for a timbered cottage (roubenka) in Kněžnice, Český ráj.
Czech at `/`, English at `/en`. Built with Next.js App Router, Tailwind CSS and
nodemailer, deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Without SMTP env vars the inquiry form logs emails to the console instead of
sending them (dev mode). See `PLACEHOLDERS.md` for the env vars and for every
placeholder value that must be replaced before launch.

## Structure

- `src/i18n/cs.ts`, `src/i18n/en.ts` — all copy, one typed dictionary per language
- `src/lib/site.ts` — domain, contact details, image paths, map URLs
- `src/components/LandingPage.tsx` — section order of the one-pager
- `src/app/api/contact/route.ts` — inquiry form endpoint (zod validation,
  honeypot, fill-time check, rate limiting, owner + guest confirmation emails)

## Planned: availability calendar

Launch is deliberately calendar-free — the inquiry form is the availability
check. When a calendar arrives later, it slots into `ContactSection.tsx` in the
right-hand column above the map, replacing nothing.

## Known limitations (inherited from the reference implementation)

- Rate limiting uses in-memory Maps, which reset per serverless instance on
  Vercel — it is best-effort, not a guarantee.
- The minimum fill-time check trusts the client-supplied `startedAt` value, so
  it deters naive bots only. The honeypot field is the second line of defense.

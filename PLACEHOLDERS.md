# Placeholders to replace before launch

Every invented or unconfirmed value on the site, in one place. Tick them off as you
replace them. Copy lives in `src/i18n/cs.ts` and `src/i18n/en.ts` (always change both);
site-wide constants live in `src/lib/site.ts`.

## Resolved 2026-08-09 from the owner's text and photos

- [x] Capacity — 8 guests in 2 attic bedrooms (4 beds each) + baby cot. No fold-out sofa.
- [x] Amenities — real list (Dolce Gusto, fireplace, smart TV, washing machine, pool,
      trampoline, playground, pergola, gas grill, fire pit).
- [x] Story — real history (pine, local carpenters, 100+ years, hipped roof, low doorways).
- [x] Distances — owner's own numbers, incl. corrected Jičín 6,5 km and Trosky 8 km.
- [x] Prices — full price list (seasons, weekends, holidays), fees, deposit, check-in/out,
      cancellation policy.
- [x] Phone — +420 776 323 586 (from the owner's text).
- [x] Photos — hero + 12 gallery photos live in `public/images/web/` (optimized copies).
      The raw originals (`public/images/image*.jpeg`, ~194 MB) are gitignored — keep them
      backed up elsewhere; only the optimized copies are committed.

## Still to confirm with the owner

- [ ] **Email** — `info@roubenkarajenka.cz` is invented (`src/lib/site.ts` → `CONTACT_EMAIL`)
- [ ] **Exact address / house number** if you want it shown (`ADDRESS`, `MAP_EMBED_URL`).
      Photo image00002 suggests house no. 40 — confirm before publishing.
- [ ] **"Mimo sezónu" months** — the price list defines summer (1.5.–30.9.) and winter
      (1.12.–31.3.); the site labels the rest (April, October, November) as off season.
      Confirm that reading.

## Domain

- [ ] `roubenkarajenka.cz` is assumed, not bought. Check availability and buy it, or
      change `SITE_URL` in `src/lib/site.ts` (one line — metadata, sitemap and emails
      all derive from it).

## Email sending (Vercel env vars)

The form logs to console until SMTP is configured. Set in Vercel:

- [ ] `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASSWORD`
      (`EMAIL_PORT=465` switches to implicit TLS automatically; other ports use STARTTLS)
- [ ] `EMAIL_DEFAULT` — where inquiries arrive. Required once SMTP is configured:
      the API refuses to send to the placeholder address.
- [ ] `EMAIL_FROM` — sender address shown to guests

## Later

- [ ] Availability calendar — deliberately skipped at launch. It slots into the
      right-hand column of `ContactSection.tsx`, above the map.
- [ ] Photo lightbox / full gallery — 24 more owner photos are available locally
      (bedrooms details, garden, stairs) if a bigger gallery is ever wanted.

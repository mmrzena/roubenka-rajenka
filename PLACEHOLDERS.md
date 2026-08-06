# Placeholders to replace before launch

Every invented or unconfirmed value on the site, in one place. Tick them off as you
replace them. Copy lives in `src/i18n/cs.ts` and `src/i18n/en.ts` (always change both);
site-wide constants live in `src/lib/site.ts`.

## Facts to confirm

- [ ] **Capacity** — site says "up to 8 guests, 2 bedrooms + fold-out sofa". You said
      "I think 8" — confirm the real bed count. (`cs.ts`/`en.ts`: `hero.facts`, `cottage`)
- [ ] **Distances** — Prachovské skály 4 km, Jičín 10 km, Trosky 16 km, Hrubá Skála 17 km,
      Turnov/Malá Skála 20 km are estimates from Kněžnice. Verify against a map.
      (`surroundings.places`)
- [ ] **Amenities** — the 8 listed items (kitchen, wood stove, Wi-Fi, child equipment, …)
      are plausible guesses. Confirm each. (`cottage.amenities`)
- [ ] **Story** — the history section ("over a hundred years", "local carpenters",
      name origin) is invented. Replace with the real story. (`story.paragraphs`)

## Prices (all invented)

- [ ] Night off season: from 3 500 Kč
- [ ] Night high season: from 4 500 Kč
- [ ] Week: from 22 000 Kč
- [ ] Deposit: 5 000 Kč, 2-night minimum, Saturday-to-Saturday weeks
      (`pricing` in both dictionaries)

## Contact (all invented)

- [ ] Email `info@roubenkarajenka.cz` (`src/lib/site.ts` → `CONTACT_EMAIL`)
- [ ] Phone `+420 777 123 456` (`CONTACT_PHONE` + `CONTACT_PHONE_HREF`)
- [ ] Exact address / house number if you want it shown (`ADDRESS`, `MAP_EMBED_URL`)

## Domain

- [ ] `roubenkarajenka.cz` is assumed, not bought. Check availability and buy it, or
      change `SITE_URL` in `src/lib/site.ts` (one line — metadata, sitemap and emails
      all derive from it).

## Images

- [ ] **Hero** — `public/images/hero.svg` is an illustration. Save the real dusk photo
      as `public/images/hero.jpg` and update `IMAGES.hero` in `src/lib/site.ts`.
- [ ] **Interior** — same for `public/images/interior.svg` → the dining-room photo.
- [ ] **Gallery** — 5 tiles (bedroom, kitchen, bathroom, garden, around the house) are
      styled placeholders in `GallerySection.tsx`. Swap for real photos when shot.

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

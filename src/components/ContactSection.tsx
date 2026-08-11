import Script from 'next/script'
import { Dictionary } from '@/i18n/types'
import {
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  ECHALUPY_CALENDAR_ID,
  MAP_LINK,
} from '@/lib/site'
import InquiryForm from './InquiryForm'
import SectionHeading from './SectionHeading'

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const calendarSrc =
    'https://obsazenost.e-chalupy.cz/kalendar.php?' +
    new URLSearchParams({
      id: ECHALUPY_CALENDAR_ID,
      pocetMesicu: '4',
      legenda: 'ano',
      jednotky: 'ne',
      velikost: '1',
      pozadi: 'FAF7F0',
      jazyk: dict.locale === 'cs' ? 'cz' : 'en',
    }).toString()

  return (
    <section id="kontakt" className="bg-chalk-dark/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <SectionHeading title={dict.contact.title} />
            <p className="mb-12 max-w-2xl text-lg text-timber-soft">{dict.contact.lead}</p>
            <InquiryForm dict={dict} />
          </div>

          <div className="space-y-8">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {dict.contact.emailLabel}
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-lg text-timber underline-offset-4 hover:text-terracotta hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {dict.contact.phoneLabel}
                </dt>
                <dd className="mt-1">
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="text-lg text-timber underline-offset-4 hover:text-terracotta hover:underline"
                  >
                    {CONTACT_PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-sage-dark">
                  {dict.contact.addressLabel}
                </dt>
                <dd className="mt-1 text-lg text-timber">{ADDRESS}</dd>
              </div>
            </dl>

            <div>
              <h3 className="mb-3 font-display text-xl font-medium text-timber">
                {dict.contact.calendarTitle}
              </h3>
              <Script src="https://obsazenost.e-chalupy.cz/resize.js" strategy="lazyOnload" />
              <iframe
                src={calendarSrc}
                title={dict.contact.calendarTitle}
                loading="lazy"
                id="echalupy-kalendar"
                height={340}
                className="block w-full bg-chalk"
              />
            </div>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="signpost-slat flex items-center justify-between gap-3 bg-night py-3 pl-4 pr-12 font-medium text-parchment transition-colors hover:bg-night-soft"
            >
              {dict.contact.mapLink}
              <span aria-hidden="true" className="font-semibold text-amber-glow">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

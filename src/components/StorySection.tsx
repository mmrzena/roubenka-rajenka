import { Dictionary } from '@/i18n/types'
import { IMAGES } from '@/lib/site'
import SectionHeading from './SectionHeading'
import StripeDivider from './StripeDivider'

export default function StorySection({ dict }: { dict: Dictionary }) {
  return (
    <>
      <StripeDivider />
      <section id="pribeh" className="bg-timber">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[3fr_2fr] md:items-center md:py-24">
          <div>
            <SectionHeading eyebrow={dict.story.eyebrow} title={dict.story.title} onDark />
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-chalk-dark/90">
              {dict.story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-52 max-w-full sm:w-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.illustration}
              alt=""
              aria-hidden="true"
              className="-rotate-2 rounded-sm border-8 border-chalk bg-chalk shadow-[0_16px_50px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out hover:rotate-0 hover:scale-[1.03]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute -inset-10">
              <span className="firefly" style={{ left: '18%', top: '68%' }} />
              <span
                className="firefly"
                style={{
                  left: '78%',
                  top: '74%',
                  animationDelay: '1.8s',
                  ['--drift-x' as string]: '-18px',
                }}
              />
              <span
                className="firefly"
                style={{ left: '8%', top: '42%', animationDelay: '3.2s', animationDuration: '7s' }}
              />
              <span
                className="firefly"
                style={{
                  left: '88%',
                  top: '38%',
                  animationDelay: '4.4s',
                  ['--drift-x' as string]: '-22px',
                  animationDuration: '6.2s',
                }}
              />
              <span
                className="firefly"
                style={{
                  left: '50%',
                  top: '80%',
                  animationDelay: '5.6s',
                  ['--drift-x' as string]: '16px',
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <StripeDivider />
    </>
  )
}

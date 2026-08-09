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

          <div className="mx-auto w-52 max-w-full sm:w-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.illustration}
              alt=""
              aria-hidden="true"
              className="-rotate-2 rounded-sm border-8 border-chalk bg-chalk shadow-[0_16px_50px_-12px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>
      <StripeDivider />
    </>
  )
}

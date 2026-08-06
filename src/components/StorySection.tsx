import { Dictionary } from '@/i18n/types'
import SectionHeading from './SectionHeading'
import StripeDivider from './StripeDivider'

export default function StorySection({ dict }: { dict: Dictionary }) {
  return (
    <>
      <StripeDivider />
      <section id="pribeh" className="bg-timber">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading eyebrow={dict.story.eyebrow} title={dict.story.title} onDark />
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-chalk-dark/90">
            {dict.story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <StripeDivider />
    </>
  )
}

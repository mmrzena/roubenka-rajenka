import { Dictionary } from '@/i18n/types'
import GallerySlideshow from './GallerySlideshow'
import SectionHeading from './SectionHeading'

export default function GallerySection({ dict }: { dict: Dictionary }) {
  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading title={dict.gallery.title} />
      <div className="mx-auto max-w-4xl">
        <GallerySlideshow gallery={dict.gallery} />
      </div>
    </section>
  )
}

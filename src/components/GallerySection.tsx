import { Dictionary } from '@/i18n/types'
import GalleryGrid from './GalleryGrid'
import SectionHeading from './SectionHeading'

export default function GallerySection({ dict }: { dict: Dictionary }) {
  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading title={dict.gallery.title} />
      <GalleryGrid gallery={dict.gallery} />
    </section>
  )
}

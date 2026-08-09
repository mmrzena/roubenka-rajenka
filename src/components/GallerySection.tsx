import { Dictionary } from '@/i18n/types'
import ArchFrame from './ArchFrame'
import SectionHeading from './SectionHeading'

export default function GallerySection({ dict }: { dict: Dictionary }) {
  return (
    <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionHeading eyebrow={dict.gallery.eyebrow} title={dict.gallery.title} />

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {dict.gallery.photos.map((photo) => (
          <figure key={photo.src}>
            <ArchFrame>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </ArchFrame>
            <figcaption className="mt-2 text-center text-sm text-timber-faded">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

import type { Content } from "@prismicio/client"
import type { SliceComponentProps } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
    >
      {slice.items.map(({ image }, index) => (
        <PrismicNextImage
          key={index}
          field={image}
          priority={index < 5}
          className="aspect-[4/3] rounded-sm bg-muted object-cover p-6 shadow-md shadow-secondary/20 transition-all hover:-translate-y-1 hover:shadow-lg"
        />
      ))}
    </section>
  )
}

export default Gallery

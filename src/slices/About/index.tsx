import { type Content, asText } from "@prismicio/client"
import type { SliceComponentProps } from "@prismicio/react"

import { PrismicNextImage } from "@prismicio/next"
import SectionTitle from "@/components/SectionTitle"
import Heading3 from "@/components/Heading3"
import Text from "@/components/Text"

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="about"
    >
      <SectionTitle
        heading={slice.primary.heading}
        subheading={slice.primary.subheading}
        description={slice.primary.description}
      />

      <div className="mt-12 flex flex-col gap-8 lg:flex-row">
        <PrismicNextImage
          field={slice.primary.image}
          className="aspect-[4/3] max-w-80 rounded-sm object-cover shadow-md shadow-secondary/20 lg:max-w-full"
        />
        <div className="max-w-[65ch] space-y-4">
          <Heading3>{slice.primary.title}</Heading3>
          {slice.items.map(({ about_paragraph }, index) => (
            <Text key={index} size="base">
              {about_paragraph}
            </Text>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

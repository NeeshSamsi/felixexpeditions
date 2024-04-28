import { type Content } from "@prismicio/client"
import { type SliceComponentProps } from "@prismicio/react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import SectionTitle from "@/components/SectionTitle"
import Icon from "@/components/Icon"
import Heading3 from "@/components/Heading3"
import Text from "@/components/Text"

/**
 * Props for `Feature`.
 */
export type FeatureProps = SliceComponentProps<Content.FeatureSlice>

/**
 * Component for "Feature" Slices.
 */
const Feature = ({ slice }: FeatureProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionTitle
        subheading={slice.primary.sub_heading}
        heading={slice.primary.heading}
        description={slice.primary.description}
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
        {slice.items.map(({ icon, title, description }, index) => (
          <div key={index} className="space-y-3">
            <Heading3 className="flex items-center gap-4 ">
              <Icon
                name={icon as keyof typeof dynamicIconImports}
                className="size-7 2xl:size-8"
              />
              <span>{title}</span>
            </Heading3>
            <Text size="base" className="max-w-[45ch] font-light">
              {description}
            </Text>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feature

import { type Content } from "@prismicio/client"
import { type SliceComponentProps } from "@prismicio/react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import SectionTitle from "@/components/SectionTitle"
import Icon from "@/components/Icon"

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
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
        {slice.items.map(({ icon, title, description }, index) => (
          <div key={index} className="space-y-3">
            <h3 className="flex items-center gap-4 text-xl font-medium lg:text-2xl 2xl:text-3xl">
              <Icon
                name={icon as keyof typeof dynamicIconImports}
                className="size-7 2xl:size-8"
              />
              <span>{title}</span>
            </h3>
            <p className="max-w-[45ch] text-base font-light lg:text-lg 2xl:text-xl">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feature

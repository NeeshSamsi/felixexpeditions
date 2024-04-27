import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

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
      Placeholder component for feature (variation: {slice.variation}) Slices
    </section>
  )
}

export default Feature

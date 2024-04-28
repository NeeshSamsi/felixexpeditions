import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Trips`.
 */
export type TripsProps = SliceComponentProps<Content.TripsSlice>

/**
 * Component for "Trips" Slices.
 */
const Trips = ({ slice }: TripsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trips (variation: {slice.variation}) Slices
    </section>
  )
}

export default Trips

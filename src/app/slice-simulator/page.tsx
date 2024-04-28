import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator"
import { SliceZone } from "@prismicio/react"

import { components } from "../../slices"

export default function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const slices = getSlices(searchParams.state)

  // container mx-auto px-8 font-sans text-foreground bg-background

  return (
    <div>
      <SliceSimulator background="#FDF8E2" className="container mx-auto px-8">
        <SliceZone slices={slices} components={components} />
      </SliceSimulator>
    </div>
  )
}

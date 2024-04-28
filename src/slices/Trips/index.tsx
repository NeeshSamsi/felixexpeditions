import type { ReactNode } from "react"
import { asDate, type Content } from "@prismicio/client"
import { type SliceComponentProps } from "@prismicio/react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import { createClient } from "@/prismicio"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { formatDate } from "@/lib/utils"

import SectionTitle from "@/components/SectionTitle"
import Heading3 from "@/components/Heading3"
import Icon from "@/components/Icon"
import Text from "@/components/Text"
import { Button } from "@/components/ui/button"

/**
 * Props for `Trips`.
 */
export type TripsProps = SliceComponentProps<Content.TripsSlice>

/**
 * Component for "Trips" Slices.
 */
const Trips = async ({ slice }: TripsProps): Promise<JSX.Element> => {
  const client = createClient()

  const trips = await client.getAllByType("trip")

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionTitle
        subheading={slice.primary.subheading}
        heading={slice.primary.heading}
        description={slice.primary.description}
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {trips.map(
          (
            {
              data: {
                image,
                name,
                fromDate,
                toDate,
                duration,
                cta,
                brochure_pdf,
              },
            },
            index,
          ) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 rounded-sm bg-muted p-6 shadow-md shadow-secondary/20 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="space-y-6">
                <PrismicNextImage
                  field={image}
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />

                <div className="space-y-3">
                  <Heading3>{name}</Heading3>
                  <Info icon="calendar-range">
                    <Text size="base">
                      {formatDate(asDate(fromDate)!, "medium")} -{" "}
                      {formatDate(asDate(toDate)!, "medium")}
                    </Text>
                  </Info>
                  <Info icon="clock">
                    <Text size="base">{duration}</Text>
                  </Info>
                </div>
              </div>

              <Button asChild variant={index > 0 ? "secondary" : "default"}>
                <PrismicNextLink
                  field={brochure_pdf}
                  target="_blank"
                  className="group flex items-center gap-2 text-lg font-medium 2xl:text-xl"
                >
                  <span>{cta}</span>
                  <Icon
                    name="arrow-up-right"
                    className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:size-6"
                  />
                </PrismicNextLink>
              </Button>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

function Info({
  children,
  icon,
}: {
  children: ReactNode
  icon: keyof typeof dynamicIconImports
}): JSX.Element {
  return (
    <div className="flex items-center gap-3 text-secondary">
      <Icon name={icon} className="size-6" strokeWidth={1.5} />
      {children}
    </div>
  )
}

export default Trips

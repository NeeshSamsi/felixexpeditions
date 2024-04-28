import Icon from "@/components/Icon"
import { Button } from "@/components/ui/button"
import { Content, asText } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import Link from "next/link"

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto text-center sm:max-w-[80%]">
        <h1 className="text-lg font-medium uppercase text-primary md:text-xl lg:text-2xl 2xl:text-3xl">
          {asText(slice.primary.subheading)}
        </h1>
        <p className="mt-2 text-balance text-4xl font-medium md:text-5xl lg:text-6xl 2xl:text-7xl">
          {asText(slice.primary.heading)}
        </p>
        <p className="mt-4 text-balance text-lg lg:text-xl 2xl:text-2xl">
          {slice.primary.description}
        </p>
        <Button asChild className="mt-6">
          <Link
            href={slice.primary.ctaLink!}
            className="group flex items-center gap-4 text-lg font-medium lg:text-xl 2xl:text-2xl"
          >
            <span>{slice.primary.ctaText}</span>
            <Icon
              name="move-right"
              className="size-8 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default CallToAction

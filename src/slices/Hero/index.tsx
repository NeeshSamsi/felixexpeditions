import { type Content, asText } from "@prismicio/client"
import { type SliceComponentProps } from "@prismicio/react"
import { cn } from "@/lib/utils"

import Link from "next/link"
import { PrismicNextImage } from "@prismicio/next"
import { Button } from "@/components/ui/button"
import Icon from "@/components/Icon"
import ContactForm from "@/components/ContactForm"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <main
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("", {
        "flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12":
          slice.variation === "withImage",
        "flex flex-col gap-8 lg:flex-row lg:gap-12":
          slice.variation === "contactForm",
        "": slice.variation === "withImageBottom",
      })}
    >
      <div className="sm:max-w-[60%]">
        <h1 className="text-lg font-medium uppercase text-primary md:text-xl lg:text-2xl 2xl:text-3xl">
          {asText(slice.primary.subheading)}
        </h1>
        <p className="mt-2 text-balance text-4xl font-medium md:text-5xl lg:text-6xl 2xl:text-7xl">
          {asText(slice.primary.heading)}
        </p>
        <p className="mt-4 text-balance text-lg lg:text-xl 2xl:text-2xl">
          {asText(slice.primary.text)}
        </p>

        {slice.variation === "withImage" && (
          <Button asChild className="mt-6">
            <Link
              href={slice.primary.cta_link!}
              className="group flex items-center gap-4 text-base font-medium lg:text-lg 2xl:text-xl"
            >
              <span>{slice.primary.cta_label}</span>
              <Icon
                name="move-right"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        )}

        {slice.variation === "contactForm" && <ContactForm />}
      </div>

      {slice.variation === "withImage" && (
        <PrismicNextImage
          field={slice.primary.image}
          className="h-full object-cover sm:max-w-[60%] lg:max-w-xl xl:max-w-2xl"
        />
      )}
      {slice.variation === "contactForm" && (
        <PrismicNextImage
          field={slice.primary.image}
          className="h-full rounded-sm object-cover shadow-md shadow-secondary/20 sm:max-w-[60%] lg:max-w-xl xl:max-w-2xl"
        />
      )}

      {slice.variation === "withImageBottom" && (
        <div className="mt-4 grid gap-4 md:mt-8 md:grid-cols-[2fr,1fr] md:gap-8">
          <PrismicNextImage
            field={slice.primary.image_left}
            className="h-56 rounded-sm object-cover shadow-md shadow-secondary/20 lg:h-72 xl:h-96"
          />
          <PrismicNextImage
            field={slice.primary.image_right}
            className="h-56 rounded-sm object-cover shadow-md shadow-secondary/20 lg:h-72 xl:h-96"
          />
        </div>
      )}
    </main>
  )
}

export default Hero

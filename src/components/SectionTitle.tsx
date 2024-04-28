import {
  type KeyTextField,
  type RichTextField,
  asText,
} from "@prismicio/client"

type Props = {
  subheading: RichTextField
  heading: RichTextField
  description?: KeyTextField
}

export default function SectionTitle({
  subheading,
  heading,
  description,
}: Props) {
  return (
    <>
      <h2 className="text-base font-medium uppercase text-primary md:text-lg 2xl:text-xl">
        {asText(subheading)}
      </h2>
      <p className="mt-2 text-balance text-2xl font-medium md:text-3xl lg:text-4xl 2xl:text-5xl">
        {asText(heading)}
      </p>
      {description && (
        <p className="mt-4 text-balance text-lg lg:text-xl 2xl:text-2xl">
          {description}
        </p>
      )}
    </>
  )
}

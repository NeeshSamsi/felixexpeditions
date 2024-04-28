import {
  type KeyTextField,
  type RichTextField,
  asText,
} from "@prismicio/client"
import Text from "./Text"

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
        <Text size="lg" className="mt-4 max-w-[65ch] text-balance font-light">
          {description}
        </Text>
      )}
    </>
  )
}

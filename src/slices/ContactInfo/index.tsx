import type { ReactNode } from "react"
import type { Content, KeyTextField } from "@prismicio/client"
import type { SliceComponentProps } from "@prismicio/react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

import { createClient } from "@/prismicio"
import Icon from "@/components/Icon"
import Text from "@/components/Text"

/**
 * Props for `ContactInfo`.
 */
export type ContactInfoProps = SliceComponentProps<Content.ContactInfoSlice>

/**
 * Component for "ContactInfo" Slices.
 */
const ContactInfo = async ({
  slice,
}: ContactInfoProps): Promise<JSX.Element> => {
  const client = createClient()

  const {
    data: { emails, phone_numbers, offices },
  } = await client.getSingle("site_settings")

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-wrap justify-between gap-6 bg-muted px-8 py-6 shadow-md shadow-secondary/20 md:gap-8"
    >
      <Info icon="mail" title={slice.primary.emails_heading}>
        <div className="space-y-2">
          {emails.map(({ email_address }, index) => (
            <Text
              key={index}
              size="base"
              className="underline-offset-4 hover:underline"
            >
              <a href={`mailto:${email_address}`}>{email_address}</a>
            </Text>
          ))}
        </div>
      </Info>
      <Info icon="phone-call" title={slice.primary.numbers_heading}>
        <div className="space-y-2">
          {phone_numbers.map(({ phone_number }, index) => (
            <Text
              key={index}
              size="base"
              className="underline-offset-4 hover:underline"
            >
              <a href={`tel:${phone_number}`}>{phone_number}</a>
            </Text>
          ))}
        </div>
      </Info>
      <Info icon="map-pin" title={slice.primary.offices_heading}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:gap-x-6 md:gap-y-2">
          {offices.map(({ office }, index) => (
            <Text key={index} size="base">
              {office}
            </Text>
          ))}
        </div>
      </Info>
    </section>
  )
}

function Info({
  icon,
  title,
  children,
}: {
  icon: keyof typeof dynamicIconImports
  title: KeyTextField
  children: ReactNode
}) {
  return (
    <div className="space-y-3 md:space-y-6">
      <h2 className="flex items-center gap-3 text-xl font-medium md:text-2xl lg:text-3xl 2xl:text-4xl">
        <Icon name={icon} className="size-6 md:size-8 2xl:size-9" />
        {title}
      </h2>
      {children}
    </div>
  )
}

export default ContactInfo

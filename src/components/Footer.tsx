import { createClient } from "@/prismicio"
import Image from "next/image"

import logo from "@public/logo-vertical.png"
import { PrismicNextLink } from "@prismicio/next"
import Icon from "./Icon"
import NavLink from "./NavLink"
import MailingListForm from "./MailingListForm"

export default async function Footer() {
  const client = createClient()

  const {
    data: { footer, mailing_list, navigation_links },
  } = await client.getSingle("site_settings")

  if (!footer[0]) throw new Error("No Footer Data in Site Settings.")
  if (!mailing_list[0])
    throw new Error("No Mailing List Data in Site Settings.")

  const {
    footer_description,
    instagram_profile,
    linkedin_profile,
    twitter_profile,
  } = footer[0]

  const { heading, sub_heading, call_to_action } = mailing_list[0]

  return (
    <footer>
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-8">
        <div className="flex max-w-32 flex-col items-center gap-4 lg:max-w-40 2xl:max-w-48">
          <Image
            src={logo}
            alt="Felix Expeditions Logo"
            className="object-cover"
          />
          <p className="text-center text-lg leading-tight lg:text-xl">
            {footer_description}
          </p>

          <div className="flex items-center gap-4">
            <PrismicNextLink
              field={instagram_profile}
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Icon name="instagram" strokeWidth={1.5} />
            </PrismicNextLink>
            <PrismicNextLink
              field={linkedin_profile}
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Icon name="linkedin" strokeWidth={1.5} />
            </PrismicNextLink>
            <PrismicNextLink
              field={twitter_profile}
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Icon name="twitter" strokeWidth={1.5} />
            </PrismicNextLink>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xl font-bold xl:text-2xl">{heading}</p>
            <p className="text-lg font-light xl:text-xl">{sub_heading}</p>
          </div>

          <MailingListForm cta={call_to_action} />
        </div>

        <div className="space-y-4 text-xl 2xl:text-2xl">
          <p className="font-bold">Pages:</p>
          <ul className="space-y-4">
            {navigation_links.map(({ label, path }, index) => (
              <NavLink key={index} label={label} path={path} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

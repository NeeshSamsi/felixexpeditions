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
    data: {
      footer_description,
      instagram,
      linkedin,
      twitter,
      mailing_list_heading,
      mailing_list_sub_heading,
      mailing_list_call_to_action,
      navigation_links,
    },
  } = await client.getSingle("site_settings")

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
              field={instagram}
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Icon name="instagram" strokeWidth={1.5} />
            </PrismicNextLink>
            <PrismicNextLink
              field={linkedin}
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Icon name="linkedin" strokeWidth={1.5} />
            </PrismicNextLink>
            <PrismicNextLink
              field={twitter}
              className="rounded-full p-2 transition-colors hover:bg-muted"
            >
              <Icon name="twitter" strokeWidth={1.5} />
            </PrismicNextLink>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xl font-bold xl:text-2xl">
              {mailing_list_heading}
            </p>
            <p className="text-lg font-light xl:text-xl">
              {mailing_list_sub_heading}
            </p>
          </div>

          <MailingListForm cta={mailing_list_call_to_action} />
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

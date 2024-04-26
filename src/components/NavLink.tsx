"use client"

import type { KeyTextField, LinkField } from "@prismicio/client"
import { asLink } from "@prismicio/client"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { PrismicNextLink } from "@prismicio/next"

type Props = {
  label: KeyTextField
  path: LinkField
}

export default function NavLink({ label, path }: Props) {
  const pathname = usePathname()

  return (
    <li>
      <PrismicNextLink
        field={path}
        className={cn("transition-colors hover:text-primary", {
          "font-medium text-primary hover:text-primary/80":
            asLink(path) === pathname,
        })}
        aria-current={asLink(path) === pathname ? "page" : undefined}
      >
        {label}
      </PrismicNextLink>
    </li>
  )
}

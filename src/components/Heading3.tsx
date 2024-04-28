import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
}

export default function Heading3({ children, className }: Props) {
  return (
    <h3
      className={cn("text-xl font-medium lg:text-2xl 2xl:text-3xl", className)}
    >
      {children}
    </h3>
  )
}

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  size: "base" | "lg"
  className?: string
}

export default function Text({ children, size, className }: Props) {
  return (
    <p
      className={cn(className, {
        "text-base lg:text-lg 2xl:text-xl": size === "base",
        "text-lg lg:text-xl 2xl:text-2xl": size === "lg",
      })}
    >
      {children}
    </p>
  )
}

import type { Metadata } from "next"
import { Alegreya_Sans } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"

const alegreya = Alegreya_Sans({
  weight: ["300", "400", "500", "700"],
  variable: "--font-alegreya",
})

export const metadata: Metadata = {
  title: "Felix Expeditions",
  description: "Unforgettable Driving Expeditions Across India.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          alegreya.className,
          "bg-background text-foreground font-sans",
        )}
      >
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Alegreya_Sans } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"
import { createClient } from "@/prismicio"
import NavBar from "@/components/NavBar"

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-alegreya",
})

export const metadata: Metadata = {
  title: "Felix Expeditions",
  description: "Unforgettable Driving Expeditions Across India.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const client = createClient()

  const {
    data: { navigation_links },
  } = await client.getSingle("site_settings")

  return (
    <html lang="en">
      <body
        className={cn(
          alegreya.variable,
          "container mx-auto bg-background px-8 font-sans text-foreground",
        )}
      >
        <NavBar navigation_links={navigation_links} />
        {children}
      </body>
    </html>
  )
}

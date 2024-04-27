"use client"

import type { Content } from "@prismicio/client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@public/logo-horizontal.png"
import banner from "@public/nav-banner.jpg"

import NavLink from "./NavLink"
import { Squash as Hamburger } from "hamburger-react"
import { AnimatePresence, motion } from "framer-motion"

type Props = {
  navigation_links: Content.SiteSettingsDocumentData["navigation_links"]
}

export default function NavBar({ navigation_links }: Props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky inset-0 z-10 flex items-center justify-between gap-16 bg-background/80 py-6 backdrop-blur-sm">
        <Link href="/">
          <span className="sr-only">Home</span>
          <Image
            src={logo}
            alt="Felix Expeditions Logo"
            priority
            className="max-w-36 object-cover md:max-w-44 lg:max-w-52 xl:max-w-64"
          />
        </Link>

        <Image
          src={banner}
          alt="Felix Expeditions Banner - The Journey is the Destination"
          priority
          placeholder="blur"
          className="hidden object-cover xl:block xl:max-w-md"
        />

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 text-xl md:flex xl:text-2xl">
          {navigation_links.map(({ label, path }, index) => (
            <NavLink key={index} label={label} path={path} />
          ))}
        </ul>

        <div className="block md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            label="Show menu"
            distance="sm"
            rounded
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-0 h-screen w-screen bg-background text-center text-xl md:hidden"
          >
            <ul className="mt-32 grid gap-4">
              {navigation_links.map(({ label, path }, index) => (
                <NavLink key={index} label={label} path={path} />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

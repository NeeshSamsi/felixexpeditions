import type { MetadataRoute } from "next"
import { createClient } from "@/prismicio"

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  const pages = await client.getAllByType("page")

  return pages.map((page) => {
    if (page.uid === "home") {
      return {
        url: "/",
        lastModified: new Date(),
      }
    } else {
      return {
        url: `/${page.uid}`,
        lastModified: new Date(),
      }
    }
  })
}

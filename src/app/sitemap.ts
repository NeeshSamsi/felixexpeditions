import type { MetadataRoute } from "next"
import { createClient } from "@/prismicio"
import { url } from "@/lib/config"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  const pages = await client.getAllByType("page")

  return pages.map((page) => {
    if (page.uid === "home") {
      return {
        url,
        lastModified: new Date(),
      }
    } else {
      return {
        url: `${url}/${page.uid}`,
        lastModified: new Date(),
      }
    }
  })
}

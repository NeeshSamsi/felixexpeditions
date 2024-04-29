import type { MetadataRoute } from "next"
import { url } from "@/lib/config"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    sitemap: `${url}/sitemap.xml`,
  }
}

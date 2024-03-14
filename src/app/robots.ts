import { MetadataRoute } from "next"

export function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "http://localhost:3000/sitemap.xml",
  }
}

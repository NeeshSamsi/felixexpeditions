import type { MetadataRoute } from "next"

export const robots: MetadataRoute.Robots = {
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: "/api",
  },
}

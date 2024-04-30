/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  async rewrites() {
    return [
      {
        source: "/script.js",
        destination: "https://analytics.eu.umami.is/script.js",
      },
    ]
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

module.exports = nextConfig

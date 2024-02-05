/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**'
      }
    ]
  }
}

module.exports = nextConfig
"netflix-clone-v-shef.vercel.app"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //   domains: ['ipfs.io', 'ipfs.infura.io'],
  // }
}
module.exports = nextConfig
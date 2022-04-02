/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com'], //remove cdn-cons-png, it's used as mock for now
  },
}

module.exports = nextConfig

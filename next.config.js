/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV !== 'production' ? '' : '/waterlifepro_web',
  assetPrefix: process.env.NODE_ENV !== 'production' ? '/' : '/waterlifepro_web/',
}

module.exports = nextConfig

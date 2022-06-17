/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['dev-m.mrblue.com', 'dev-img.mrblue.com'],
  },
}

module.exports = nextConfig

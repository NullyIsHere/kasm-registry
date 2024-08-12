/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Asheer KasmReg',
    description: 'Asheer Kasm Registry.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasmreg.altex.page/',
    contactUrl: 'https://altex.page/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

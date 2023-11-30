/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
      },
      assetPrefix: './',
}

module.exports = nextConfig

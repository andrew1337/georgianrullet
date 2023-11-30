/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
  assetPrefix = `/georgianrullet/`
  basePath = `/georgianrullet`
}

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    output: 'export',
    distDir: 'out',
    reactStrictMode: true
}

module.exports = nextConfig

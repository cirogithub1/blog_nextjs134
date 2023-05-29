/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['mongoose'],
  // experimental: {
  //   serverComponentsExternalPackages: ['mongoose'],
  // },
  // serverComponentsExternalPackages: ["mongoose"],
	webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}

module.exports = nextConfig
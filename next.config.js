/** @type {import('next').NextConfig} */
const nextConfig = {
  serverComponentsExternalPackages: ["mongoose"],
	webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}

module.exports = nextConfig
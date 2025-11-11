/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        http: false,
        https: false,
        stream: false,
        crypto: require.resolve('crypto-browserify'),
        zlib: require.resolve('browserify-zlib'),
      }
    }
    return config
  }
}

module.exports = nextConfig

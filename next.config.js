const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
withBundleAnalyzer({})

const production = process.env.NODE_ENV === 'production'

const url = production
  ? 'https://sneaker24.vercel.app'
  : 'http://localhost:3000'

module.exports = {
  images: {
    domains: ['images.stockx.com', 'stockx.imgix.net'],
  },
  url,
}

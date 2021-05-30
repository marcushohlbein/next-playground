const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
withBundleAnalyzer({})

module.exports = {
  images: {
    domains: ['images.stockx.com', 'stockx.imgix.net'],
  },
}

const path = require('path')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
    },
  },
  devServer: {
    port: 4001,
    open: false,
  },
}

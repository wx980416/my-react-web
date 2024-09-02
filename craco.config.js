const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
    },
  },
  devServer: {
    port: 3100,
    open: false,
  },
}

// vue.config.js
module.exports = {
  publicPath: '/shueny/',

  chainWebpack: (config) => {
    // Inline small images (< 8kb) as base64 to reduce HTTP requests
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 8192 }))

    // Preload only critical chunks, prefetch non-critical ones
    config.plugin('preload').tap((options) => {
      options[0].include = 'initial'
      return options
    })
    config.plugin('prefetch').tap((options) => {
      options[0].include = 'asyncChunks'
      return options
    })
  },

  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 6,
        cacheGroups: {
          // Separate Vue core from other vendors
          vue: {
            name: 'chunk-vue',
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
            priority: 20,
            chunks: 'initial'
          },
          // Separate Bootstrap (largest CSS dependency)
          bootstrap: {
            name: 'chunk-bootstrap',
            test: /[\\/]node_modules[\\/](bootstrap|bootstrap-vue|jquery|popper\.js)[\\/]/,
            priority: 15,
            chunks: 'initial'
          },
          // Separate FontAwesome icons
          fontawesome: {
            name: 'chunk-fontawesome',
            test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
            priority: 15,
            chunks: 'initial'
          },
          // All other vendor deps
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial',
            reuseExistingChunk: true
          },
          // Common code shared between chunks
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    }
  }
}

'use strict'

module.exports = {
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    },
    resolve: {
      symlinks: false, 
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import url('https://static.gabia.com/fonts/icons/v1.0.1/style.css');`
      }
    }
  },
}

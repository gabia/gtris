'use strict'

module.exports = {
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    },
    resolve: {
      symlinks: false, 
    }
  }
}

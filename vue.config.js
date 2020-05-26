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
        prependData: `
          @import "@/assets/sass/base/_defineColors.scss";
          @import "@/assets/sass/mixins/_clearfix.scss";
          @import "@/assets/sass/mixins/_truncate.scss";
          @import url(https://static.gabia.com/fonts/icons/v1.0.1/style.css);
          `
      }
    },
    sourceMap: true
  },
}

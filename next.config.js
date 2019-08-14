// next.config.js
const debug = process.env.NODE_ENV !== "production";
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/about': { page: '/about'},
          '/tvpage': { page: '/tvpage'},
          '/DandDpage': { page: '/DandDpage'},
          '/providerData': { page: '/providerData'},
          '/test': {page: '/test'},
        };
      }
});
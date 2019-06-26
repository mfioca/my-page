// next.config.js
const debug = process.env.NODE_ENV !== "production";
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/about': { page: '/about'},
          '/tvpage': { page: '/tvpage'},
          '/DandD_page': { page: '/DandD_page'},
          '/test': {page: '/test'},
        };
      }

}) 


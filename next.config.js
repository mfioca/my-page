// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/about': { page: '/about'},
          '/tvpage': { page: '/tvpage'},
          '/DandD_page': { page: '/DandD_page'},
          '/test': {page: '/test'}
        };
      }

}) 


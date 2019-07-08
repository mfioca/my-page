webpackHotUpdate("static\\development\\pages\\tvtest.js",{

/***/ "./pages/tvtest/tvmaze_detail.js":
/*!***************************************!*\
  !*** ./pages/tvtest/tvmaze_detail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _no_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no_image */ "./pages/tvtest/no_image.js");
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\tvtest\\tvmaze_detail.js";



var TVMazeDetail = function TVMazeDetail(_ref) {
  var serie = _ref.serie;

  if (!serie) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Enter Search");
  }

  var genreList = serie.show.genres.map(function (genre) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: genre,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, genre);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serie-detail col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, serie.show.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Language: ", serie.show.language), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Schedule: ", serie.show.schedule.days), serie.show.summary.replace(/<\/?[a-z]+>/gi, ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "genre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, genreList)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: serie.show.image ? serie.show.image.medium : _no_image__WEBPACK_IMPORTED_MODULE_1__["default"],
    className: "img-fluid",
    alt: serie.show.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TVMazeDetail);

/***/ })

})
//# sourceMappingURL=tvtest.js.6694f60c9229e67d1e8b.hot-update.js.map
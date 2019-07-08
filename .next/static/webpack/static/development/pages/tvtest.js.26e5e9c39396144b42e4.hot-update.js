webpackHotUpdate("static\\development\\pages\\tvtest.js",{

/***/ "./pages/tvtest.js":
/*!*************************!*\
  !*** ./pages/tvtest.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _tvtest_async_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tvtest/async_get */ "./pages/tvtest/async_get.js");
/* harmony import */ var _tvtest_search_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tvtest/search_bar */ "./pages/tvtest/search_bar.js");
/* harmony import */ var _tvtest_tvmaze_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tvtest/tvmaze_list */ "./pages/tvtest/tvmaze_list.js");
/* harmony import */ var _tvtest_tvmaze_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tvtest/tvmaze_detail */ "./pages/tvtest/tvmaze_detail.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\tvtest.js";








var ROOT_URL = 'http://api.tvmaze.com';

var TvTestApp =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TvTestApp, _Component);

  function TvTestApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TvTestApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TvTestApp).call(this, props));
    _this.state = {
      series: [],
      selectedSerie: null
    };

    _this.serieSearch('girls');

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TvTestApp, [{
    key: "serieSearch",
    value: function serieSearch(query) {
      var _this2 = this;

      Object(_tvtest_async_get__WEBPACK_IMPORTED_MODULE_8__["default"])("".concat(ROOT_URL, "/search/shows?q=").concat(query)).then(function (series) {
        _this2.setState({
          series: series,
          selectedSerie: series[0]
        });
      }, function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var videoSearch = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.debounce(function (query) {
        _this3.serieSearch(query);
      }, 300);

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "trying to create a searchable page like my tvpage"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tvtest_search_bar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onSearchQueryChanged: videoSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tvtest_tvmaze_detail__WEBPACK_IMPORTED_MODULE_11__["default"], {
        serie: this.state.selectedSerie,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_tvtest_tvmaze_list__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onSerieSelect: function onSerieSelect(selectedSerie) {
          return _this3.setState({
            selectedSerie: selectedSerie
          });
        },
        series: this.state.series,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })));
    }
  }]);

  return TvTestApp;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (TvTestApp);

/***/ })

})
//# sourceMappingURL=tvtest.js.26e5e9c39396144b42e4.hot-update.js.map
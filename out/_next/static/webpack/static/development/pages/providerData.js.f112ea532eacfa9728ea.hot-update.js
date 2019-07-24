webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/providerData.js":
/*!*******************************!*\
  !*** ./pages/providerData.js ***!
  \*******************************/
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
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/style.css */ "./components/style.css");
/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _provider_data_providerimport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider_data/providerimport.js */ "./pages/provider_data/providerimport.js");





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js";





var data = __webpack_require__(/*! ./provider_data/provider.json */ "./pages/provider_data/provider.json");

function Providerinfo(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
    className: "Provider-info-table ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Provider Totals")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Total Transportation Providers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Central Region Providers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "SouthWest Region:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, " ", data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "East Region:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'East';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'East';
  }).length)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Level of Service Totals"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Level of Service Totals:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, data.filter(function (data) {
    return data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, data.filter(function (data) {
    return data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, data.filter(function (data) {
    return data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Central:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "SouthWest:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "East:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.Stretcher === 'Yes';
  }).length)))));
}

var ProviderData =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProviderData, _Component);

  function ProviderData() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProviderData);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProviderData).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProviderData, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "this is data imported from a local json file. It will recreate a tracking spreadsheet I created at one of my jobs."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "I used react-table dependency to build the data table. Altering formatting to match my spreadsheet."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Things to do:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "see if you can change react-tables css for custom styling"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "double check json file for consistency"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Providerinfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_provider_data_providerimport_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }));
    }
  }]);

  return ProviderData;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.f112ea532eacfa9728ea.hot-update.js.map
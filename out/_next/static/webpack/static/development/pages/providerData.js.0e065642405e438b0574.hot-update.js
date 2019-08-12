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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customComponents */ "./pages/customComponents.js");
/* harmony import */ var _provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider_data/providerImport.js */ "./pages/provider_data/providerImport.js");





var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\providerData.js";






var data = __webpack_require__(/*! ./provider_data/provider.json */ "./pages/provider_data/provider.json");

var TableFilter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TableFilter, _React$Component);

  function TableFilter() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableFilter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TableFilter).call(this, props));
    var key1 = _this.props.Condition1;
    var key1value = _this.props.Condition1Value;
    var key2 = _this.props.Condition2;
    var key2value = _this.props.Condition2Value;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TableFilter, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return TableFilter;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // {data.filter(data => data.Type === 'Provider').length}: 
// filters the json based on items with values and totals up 
//the number of listed items with that data value.  example above:
//count the number of entries with the data "Type" of 'Provider'  
//function Providerinfo() {


var Providerinfo =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Providerinfo, _React$Component2);

  function Providerinfo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Providerinfo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Providerinfo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Providerinfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "text-center p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Provider Totals"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        striped: true,
        bordered: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Total Transportation Providers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, data.length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Central Region Providers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "SouthWest Region:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, " ", data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "East Region:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'East';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'East';
      }).length))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "text-center p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Level of Service Totals"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        striped: true,
        bordered: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        colspan: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "All Regions")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colspan: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, data.filter(function (data) {
        return data.Amb === 'Yes';
      }).length))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, data.filter(function (data) {
        return data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, data.filter(function (data) {
        return data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        colspan: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Central")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        colspan: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "SouthWest")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        colspan: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "East")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.Stretcher === 'Yes';
      }).length)))))));
    }
  }]);

  return Providerinfo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function ProviderData() {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["JumbonoImage"], {
    Title: "Provider List",
    Caption1: "this is data imported from a local json file. It will recreate a tracking\r spreadsheet I created at one of my jobs.",
    Caption2: "I used react-table dependency to build the data table. Altering formatting\r to match my spreadsheet.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Providerinfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.0e065642405e438b0574.hot-update.js.map
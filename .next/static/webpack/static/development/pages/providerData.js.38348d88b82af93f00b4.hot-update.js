webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/providerData.js":
/*!*******************************!*\
  !*** ./pages/providerData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customComponents */ "./pages/customComponents.js");
/* harmony import */ var _provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider_data/providerImport.js */ "./pages/provider_data/providerImport.js");
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js";







var data = __webpack_require__(/*! ./provider_data/provider.json */ "./pages/provider_data/provider.json");

function Providerinfo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "text-center p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Provider Totals"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Total Transportation Providers:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data.length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Central Region Providers:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "SouthWest Region:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, " ", data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "East Region:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'East';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2227138735",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'East';
  }).length))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2227138735",
    __self: this
  }, "td.jsx-2227138735:nth-child(odd){text-align:right;}.jsx-2227138735,td.jsx-2227138735:nth-child(even){text-align:center;widtH:70px;}th.jsx-2227138735{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRW9DLEFBR2tELEFBR0MsQUFNdkIsY0FBQyxHQVJBLENBR2UsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmtcXERlc2t0b3BcXG5ld3Rlc3RcXG15LXBhZ2VcXHBhZ2VzXFxwcm92aWRlckRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCB7IEN1c3RvbUp1bWJvIH0gZnJvbSAnLi9jdXN0b21Db21wb25lbnRzJ1xyXG5pbXBvcnQgUHJvdmlkZXJMaXN0IGZyb20gJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlckltcG9ydC5qcydcclxuXHJcblxyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlci5qc29uJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJpbmZvKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTJcIj48Yj48dT5Qcm92aWRlciBUb3RhbHM8L3U+PC9iPjwvaDQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFRyYW5zcG9ydGF0aW9uIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YS5sZW5ndGh9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnVm9sdW50ZWVyIERyaXZlcicpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2VudHJhbCBSZWdpb24gUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICkubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNvdXRoV2VzdCBSZWdpb246PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicgJiYgZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICkubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnVm9sdW50ZWVyIERyaXZlcicgJiYgZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVhc3QgUmVnaW9uOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICkubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0SDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTJcIj48Yj48dT5MZXZlbCBvZiBTZXJ2aWNlIFRvdGFsczwvdT48L2I+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPkFsbCBSZWdpb25zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+Q2VudHJhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyAmJiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPlNvdXRoV2VzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyAmJiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgJiYgZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkVhc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcgJiYgZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JyAmJiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0SDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJEYXRhKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q3VzdG9tSnVtYm9cclxuICAgICAgICAgICAgICAgIFRpdGxlPVwiUHJvdmlkZXIgTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBJbWdVcmw9XCJub2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIENhcHRpb24xU3R5bGU9J2xlYWQgdGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMT1cInRoaXMgaXMgZGF0YSBpbXBvcnRlZCBmcm9tIGEgbG9jYWwganNvbiBmaWxlLiBJdCB3aWxsIHJlY3JlYXRlIGEgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWRzaGVldCBJIGNyZWF0ZWQgYXQgb25lIG9mIG15IGpvYnMuXCJcclxuICAgICAgICAgICAgICAgIENhcHRpb24yU3R5bGU9J3RleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjI9XCJJIHVzZWQgcmVhY3QtdGFibGUgZGVwZW5kZW5jeSB0byBidWlsZCB0aGUgZGF0YSB0YWJsZS4gQWx0ZXJpbmcgZm9ybWF0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRvIG1hdGNoIG15IHNwcmVhZHNoZWV0LlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXJpbmZvIC8+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEwXCIgY2xhc3NOYW1lPVwibWItM1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXJMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApOyBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJEYXRhOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js */"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "text-center p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Level of Service Totals"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    colspan: "2",
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "All Regions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, data.filter(function (data) {
    return data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, data.filter(function (data) {
    return data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, data.filter(function (data) {
    return data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    colspan: "2",
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Central")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    colspan: "2",
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "SouthWest")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    colSpan: "2",
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "East")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-2247566475",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.Stretcher === 'Yes';
  }).length))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2247566475",
    __self: this
  }, ".jsx-2247566475{text-align:center;widtH:70px;}th.jsx-2247566475{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSm9DLEFBR21ELEFBTXZCLGNBQUMsSUFMZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgUm93LCBDb2wsIFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IHsgQ3VzdG9tSnVtYm8gfSBmcm9tICcuL2N1c3RvbUNvbXBvbmVudHMnXHJcbmltcG9ydCBQcm92aWRlckxpc3QgZnJvbSAnLi9wcm92aWRlcl9kYXRhL3Byb3ZpZGVySW1wb3J0LmpzJ1xyXG5cclxuXHJcbnZhciBkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL3Byb3ZpZGVyLmpzb24nKTtcclxuXHJcblxyXG5mdW5jdGlvbiBQcm92aWRlcmluZm8oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMlwiPjxiPjx1PlByb3ZpZGVyIFRvdGFsczwvdT48L2I+PC9oND4gXHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgVHJhbnNwb3J0YXRpb24gUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLmxlbmd0aH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DZW50cmFsIFJlZ2lvbiBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFuc3BvcnRhdGlvbiBDb21wYW5pZXM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInICYmIGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U291dGhXZXN0IFJlZ2lvbjo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWFzdCBSZWdpb246PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFuc3BvcnRhdGlvbiBDb21wYW5pZXM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInICYmIGRhdGEuUmVnaW9uID09PSAnRWFzdCcgKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnRWFzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQ6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRIOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ2g6IGNlbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMlwiPjxiPjx1PkxldmVsIG9mIFNlcnZpY2UgVG90YWxzPC91PjwvYj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+QWxsIFJlZ2lvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5DZW50cmFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyAmJiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICYmIGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+U291dGhXZXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICYmIGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyAmJiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+RWFzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcgJiYgZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JyAmJiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRIOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ2g6IGNlbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQcm92aWRlckRhdGEoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDdXN0b21KdW1ib1xyXG4gICAgICAgICAgICAgICAgVGl0bGU9XCJQcm92aWRlciBMaXN0XCJcclxuICAgICAgICAgICAgICAgIEltZ1VybD1cIm5vaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjFTdHlsZT0nbGVhZCB0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgIENhcHRpb24xPVwidGhpcyBpcyBkYXRhIGltcG9ydGVkIGZyb20gYSBsb2NhbCBqc29uIGZpbGUuIEl0IHdpbGwgcmVjcmVhdGUgYSB0cmFja2luZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0IEkgY3JlYXRlZCBhdCBvbmUgb2YgbXkgam9icy5cIlxyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjJTdHlsZT0ndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMj1cIkkgdXNlZCByZWFjdC10YWJsZSBkZXBlbmRlbmN5IHRvIGJ1aWxkIHRoZSBkYXRhIHRhYmxlLiBBbHRlcmluZyBmb3JtYXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgdG8gbWF0Y2ggbXkgc3ByZWFkc2hlZXQuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQcm92aWRlcmluZm8gLz5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTBcIiBjbGFzc05hbWU9XCJtYi0zXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm92aWRlckxpc3QgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlckRhdGE7Il19 */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js */")))));
}

function ProviderData() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_4__["CustomJumbo"], {
    Title: "Provider List",
    ImgUrl: "noimage",
    Caption1Style: "lead text-center",
    Caption1: "this is data imported from a local json file. It will recreate a tracking\r spreadsheet I created at one of my jobs.",
    Caption2Style: "text-center",
    Caption2: "I used react-table dependency to build the data table. Altering formatting\r to match my spreadsheet.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Providerinfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "10",
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.38348d88b82af93f00b4.hot-update.js.map
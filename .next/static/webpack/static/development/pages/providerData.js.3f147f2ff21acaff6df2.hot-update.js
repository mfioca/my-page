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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customComponents */ "./pages/customComponents.js");
/* harmony import */ var _provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./provider_data/providerImport.js */ "./pages/provider_data/providerImport.js");





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js";







var data = __webpack_require__(/*! ./provider_data/provider.json */ "./pages/provider_data/provider.json");

function eatshit(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children);
} // {data.filter(data => data.Type === 'Provider').length}: 
// filters the json based on items with values and totals up 
//the number of listed items with that data value.  example above:
//count the number of entries with the data "Type" of 'Provider'  
//function Providerinfo() {


var Providerinfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Providerinfo, _React$Component);

  function Providerinfo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Providerinfo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Providerinfo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Providerinfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Provider Totals"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        bordered: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Total Transportation Providers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, data.length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Central Region Providers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "SouthWest Region:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "East Region:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'East';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'East';
      }).length))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3055403691",
        __self: this
      }, "td.jsx-3055403691:nth-child(odd){text-align:right;}.jsx-3055403691,td.jsx-3055403691:nth-child(even){text-align:center;widtH:70px;}th.jsx-3055403691{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRndDLEFBR3NELEFBR0MsQUFNdkIsY0FBQyxHQVJBLENBR2UsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmtcXERlc2t0b3BcXG5ld3Rlc3RcXG15LXBhZ2VcXHBhZ2VzXFxwcm92aWRlckRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIFRhYmxlIH0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IHsgQ3VzdG9tSnVtYm99IGZyb20gJy4vY3VzdG9tQ29tcG9uZW50cydcclxuaW1wb3J0IFByb3ZpZGVyTGlzdCBmcm9tICcuL3Byb3ZpZGVyX2RhdGEvcHJvdmlkZXJJbXBvcnQuanMnXHJcblxyXG5cclxudmFyIGRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvcHJvdmlkZXIuanNvbicpO1xyXG5cclxuZnVuY3Rpb24gZWF0c2hpdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC90ZD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4vLyB7ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicpLmxlbmd0aH06IFxyXG4vLyBmaWx0ZXJzIHRoZSBqc29uIGJhc2VkIG9uIGl0ZW1zIHdpdGggdmFsdWVzIGFuZCB0b3RhbHMgdXAgXHJcbi8vdGhlIG51bWJlciBvZiBsaXN0ZWQgaXRlbXMgd2l0aCB0aGF0IGRhdGEgdmFsdWUuICBleGFtcGxlIGFib3ZlOlxyXG4vL2NvdW50IHRoZSBudW1iZXIgb2YgZW50cmllcyB3aXRoIHRoZSBkYXRhIFwiVHlwZVwiIG9mICdQcm92aWRlcicgIFxyXG5cclxuLy9mdW5jdGlvbiBQcm92aWRlcmluZm8oKSB7XHJcbmNsYXNzIFByb3ZpZGVyaW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMlwiPjxiPjx1PlByb3ZpZGVyIFRvdGFsczwvdT48L2I+PC9oND4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFRyYW5zcG9ydGF0aW9uIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e2RhdGEubGVuZ3RofTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFuc3BvcnRhdGlvbiBDb21wYW5pZXM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnVm9sdW50ZWVyIERyaXZlcicpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2VudHJhbCBSZWdpb24gUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInICYmIGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNvdXRoV2VzdCBSZWdpb246PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFuc3BvcnRhdGlvbiBDb21wYW5pZXM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnVm9sdW50ZWVyIERyaXZlcicgJiYgZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVhc3QgUmVnaW9uOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInICYmIGRhdGEuUmVnaW9uID09PSAnRWFzdCcgKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZDpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQ6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0SDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnaDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInB4LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtMlwiPjxiPjx1PkxldmVsIG9mIFNlcnZpY2UgVG90YWxzPC91PjwvYj48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPkFsbCBSZWdpb25zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+Q2VudHJhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICYmIGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICYmIGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPlNvdXRoV2VzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgJiYgZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyAmJiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPkVhc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JyAmJiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JyAmJiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JyAmJiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0SDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnaDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQcm92aWRlckRhdGEoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDdXN0b21KdW1ib1xyXG4gICAgICAgICAgICAgICAgVGl0bGU9XCJQcm92aWRlciBMaXN0XCJcclxuICAgICAgICAgICAgICAgIEltZ1VybD1cIm5vaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjFTdHlsZT0nbGVhZCB0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgIENhcHRpb24xPVwidGhpcyBpcyBkYXRhIGltcG9ydGVkIGZyb20gYSBsb2NhbCBqc29uIGZpbGUuIEl0IHdpbGwgcmVjcmVhdGUgYSB0cmFja2luZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcmVhZHNoZWV0IEkgY3JlYXRlZCBhdCBvbmUgb2YgbXkgam9icy5cIlxyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjJTdHlsZT0ndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMj1cIkkgdXNlZCByZWFjdC10YWJsZSBkZXBlbmRlbmN5IHRvIGJ1aWxkIHRoZSBkYXRhIHRhYmxlLiBBbHRlcmluZyBmb3JtYXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgdG8gbWF0Y2ggbXkgc3ByZWFkc2hlZXQuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKlByb3ZpZGVyaW5mbyBsaXN0ZWQgYWJvdmUqL31cclxuICAgICAgICAgICAgPFByb3ZpZGVyaW5mbyAvPlxyXG4gICAgICAgICAgICB7LypwdWxsZWQgaW4gZnJvbSBwcm92aWRlcmltcG9ydC5qcyovfVxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMFwiIGNsYXNzTmFtZT1cIm1iLTNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb3ZpZGVyTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyRGF0YTsiXX0= */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js */"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Level of Service Totals"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        bordered: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "All Regions")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, data.filter(function (data) {
        return data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, data.filter(function (data) {
        return data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, data.filter(function (data) {
        return data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Central")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "SouthWest")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "East")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.Stretcher === 'Yes';
      }).length))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1821849195",
        __self: this
      }, ".jsx-1821849195{text-align:center;widtH:70px;}th.jsx-1821849195{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxS3dDLEFBR3VELEFBTXZCLGNBQUMsSUFMZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgeyBDdXN0b21KdW1ib30gZnJvbSAnLi9jdXN0b21Db21wb25lbnRzJ1xyXG5pbXBvcnQgUHJvdmlkZXJMaXN0IGZyb20gJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlckltcG9ydC5qcydcclxuXHJcblxyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlci5qc29uJyk7XHJcblxyXG5mdW5jdGlvbiBlYXRzaGl0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L3RkPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbi8vIHtkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJykubGVuZ3RofTogXHJcbi8vIGZpbHRlcnMgdGhlIGpzb24gYmFzZWQgb24gaXRlbXMgd2l0aCB2YWx1ZXMgYW5kIHRvdGFscyB1cCBcclxuLy90aGUgbnVtYmVyIG9mIGxpc3RlZCBpdGVtcyB3aXRoIHRoYXQgZGF0YSB2YWx1ZS4gIGV4YW1wbGUgYWJvdmU6XHJcbi8vY291bnQgdGhlIG51bWJlciBvZiBlbnRyaWVzIHdpdGggdGhlIGRhdGEgXCJUeXBlXCIgb2YgJ1Byb3ZpZGVyJyAgXHJcblxyXG4vL2Z1bmN0aW9uIFByb3ZpZGVyaW5mbygpIHtcclxuY2xhc3MgUHJvdmlkZXJpbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInB4LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0yXCI+PGI+PHU+UHJvdmlkZXIgVG90YWxzPC91PjwvYj48L2g0PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgVHJhbnNwb3J0YXRpb24gUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YS5sZW5ndGh9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DZW50cmFsIFJlZ2lvbiBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicgJiYgZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyApLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U291dGhXZXN0IFJlZ2lvbjo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInICYmIGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyApLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWFzdCBSZWdpb246PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicgJiYgZGF0YS5SZWdpb24gPT09ICdFYXN0JyApLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnRWFzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRIOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0yXCI+PGI+PHU+TGV2ZWwgb2YgU2VydmljZSBUb3RhbHM8L3U+PC9iPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+QWxsIFJlZ2lvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5DZW50cmFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+U291dGhXZXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyAmJiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICYmIGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+RWFzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRIOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb3ZpZGVyRGF0YSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEN1c3RvbUp1bWJvXHJcbiAgICAgICAgICAgICAgICBUaXRsZT1cIlByb3ZpZGVyIExpc3RcIlxyXG4gICAgICAgICAgICAgICAgSW1nVXJsPVwibm9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMVN0eWxlPSdsZWFkIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjE9XCJ0aGlzIGlzIGRhdGEgaW1wb3J0ZWQgZnJvbSBhIGxvY2FsIGpzb24gZmlsZS4gSXQgd2lsbCByZWNyZWF0ZSBhIHRyYWNraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkc2hlZXQgSSBjcmVhdGVkIGF0IG9uZSBvZiBteSBqb2JzLlwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMlN0eWxlPSd0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgIENhcHRpb24yPVwiSSB1c2VkIHJlYWN0LXRhYmxlIGRlcGVuZGVuY3kgdG8gYnVpbGQgdGhlIGRhdGEgdGFibGUuIEFsdGVyaW5nIGZvcm1hdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB0byBtYXRjaCBteSBzcHJlYWRzaGVldC5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qUHJvdmlkZXJpbmZvIGxpc3RlZCBhYm92ZSovfVxyXG4gICAgICAgICAgICA8UHJvdmlkZXJpbmZvIC8+XHJcbiAgICAgICAgICAgIHsvKnB1bGxlZCBpbiBmcm9tIHByb3ZpZGVyaW1wb3J0LmpzKi99XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEwXCIgY2xhc3NOYW1lPVwibWItM1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXJMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApOyBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJEYXRhOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js */")))));
    }
  }]);

  return Providerinfo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function ProviderData() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CustomJumbo"], {
    Title: "Provider List",
    ImgUrl: "noimage",
    Caption1Style: "lead text-center",
    Caption1: "this is data imported from a local json file. It will recreate a tracking\r spreadsheet I created at one of my jobs.",
    Caption2Style: "text-center",
    Caption2: "I used react-table dependency to build the data table. Altering formatting\r to match my spreadsheet.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Providerinfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: "10",
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.3f147f2ff21acaff6df2.hot-update.js.map
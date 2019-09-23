webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/provider_data/prividerCompliance.js":
/*!***************************************************!*\
  !*** ./pages/provider_data/prividerCompliance.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\prividerCompliance.js";




var data2 = __webpack_require__(/*! ./generated.json */ "./pages/provider_data/generated.json");

var pizza = __webpack_require__(/*! ./drivers.json */ "./pages/provider_data/drivers.json");

var DateCheck =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DateCheck, _React$Component);

  function DateCheck() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DateCheck);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(DateCheck).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DateCheck, [{
    key: "render",
    value: function render() {
      var date = this.props.Date;

      if (date < "2019-09-22") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "bg-danger text-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, date);
      } else if (date < "2019-10-22" && date > "2019-09-22") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "bg-warning text-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, date);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, date);
      }
    }
  }]);

  return DateCheck;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Example =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Example, _React$Component2);

  function Example(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Example);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Example).call(this, props));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
    _this.state = {
      dropdownOpen: false,
      value: 'PROFLEX'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          dropdownOpen: !prevState.dropdownOpen
        };
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var test = data2.filter(function (data2) {
        return data2.company === _this2.state.value;
      });
      var test2 = test[0];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ml-5 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mt-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Provider Compliance Report"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "mt-2 mb-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Report Date: 9/22/2019"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Provider List"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        modifiers: {
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: function fn(data) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data, {
                styles: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.styles, {
                  overflow: 'auto',
                  maxHeight: 200
                })
              });
            }
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, data2.sort(function (a, b) {
        var One = a.company.toUpperCase();
        var Two = b.company.toUpperCase();
        return One < Two ? -1 : One > Two ? 1 : 0;
      }).map(function (TP) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
          className: "Btn",
          key: TP.company,
          onClick: _this2.handleChange,
          value: TP.company,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, TP.company);
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Provider: ", this.state.value), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "email: ", test2.email, ", "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "phone: ", test2.phone, ", "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "address: ", test2.address, ", ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Insurance:"), test2.insurance.map(function (insurance) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "ml-5",
          key: insurance.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, insurance.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, insurance.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, insurance.end));
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Drivers:"), test2.drivers.map(function (driver) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          xs: "auto",
          className: "p-0",
          key: driver.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, driver.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "License State: ", driver.license.state)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, "License Exp: \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
          Date: driver.license.exp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          className: "justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "Training:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
          bordered: true,
          className: "w-75",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Company:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "Exp date"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, driver.training.map(function (tr) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: tr.type,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, "Type: ", tr.type, ": "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, tr.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
            Date: tr.end,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          })));
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, "Screening:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
          bordered: true,
          className: "w-75",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, "Exp date"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, driver.screenings.map(function (scr) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: scr.type,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, scr.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
            Date: scr.end,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          })));
        }))))));
      })));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=providerData.js.58ad5e61faddb3700aa0.hot-update.js.map
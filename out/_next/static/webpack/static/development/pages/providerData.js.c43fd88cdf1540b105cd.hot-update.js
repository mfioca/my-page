webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/provider_data/prividerCompliance.js":
/*!***************************************************!*\
  !*** ./pages/provider_data/prividerCompliance.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\prividerCompliance.js";





var data2 = __webpack_require__(/*! ./Compliance.json */ "./pages/provider_data/Compliance.json");

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

function ProviderDropdown() {
  var _this = this;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
    modifiers: {
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: function fn(data) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data, {
            styles: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data.styles, {
              overflow: 'auto',
              maxHeight: 200
            })
          });
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
      onClick: _this.selectProvider,
      value: TP.company,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, TP.company);
  }));
}

var Example =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Example, _React$Component2);

  function Example(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Example);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Example).call(this, props));
    _this2.state = {
      dropdownOpen: false,
      value: 'ACCEL',
      activeTab: '1'
    };
    _this2.selectTab = _this2.selectTab.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2));
    _this2.selectProvider = _this2.selectProvider.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2));
    _this2.clickDropdown = _this2.clickDropdown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2));
    _this2.ProviderDropdown = ProviderDropdown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Example, [{
    key: "clickDropdown",
    value: function clickDropdown() {
      this.setState(function (prevState) {
        return {
          dropdownOpen: !prevState.dropdownOpen
        };
      });
    }
  }, {
    key: "selectProvider",
    value: function selectProvider(e) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "selectTab",
    value: function selectTab(tab) {
      if (this.state.actiTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var test = data2.filter(function (data2) {
        return data2.company === _this3.state.value;
      });
      var test2 = test[0];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mt-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Provider Compliance Report"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "mt-2 mb-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Report Date: 9/22/2019"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Dates in ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bg-warning text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Yellow"), "\xA0 are about to expire."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Dates in  ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bg-danger text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Red"), "\xA0need immediate attention."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.clickDropdown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Provider List"), this.ProviderDropdown()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-5 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "pt-4 pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Provider: ", this.state.value), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Address:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-3 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, test2.address1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-3 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, test2.address2)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Contact info:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-2 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Phone:"), " ", test2.phone), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-2 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Email:"), " ", test2.email))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "pt-4 pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Insurance:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        xs: "auto",
        className: "p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, test2.insurance.map(function (insurance) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          className: "ml-5",
          key: insurance.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "Type: ", insurance.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "Company: ", insurance.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "Exp Date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
          Date: insurance.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        })));
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        tabs: true,
        className: "mr-5 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this3.selectTab('1');
        },
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Drivers")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this3.selectTab('2');
        },
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Vehicles"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabContent"], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Drivers:"), test2.drivers.map(function (driver) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          xs: "auto",
          className: "p-0",
          key: driver.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, driver.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, "License State: ", driver.license.state)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "License Exp: \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
          Date: driver.license.exp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          className: "ml-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          className: "justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, "Training:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
          bordered: true,
          className: "w-75",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          className: "bg-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, "Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, "Company:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, "Exp date"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, driver.training.map(function (tr) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: tr.type,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }, "Type: ", tr.type, ": "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, tr.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
            Date: tr.end,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          })));
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, "Screening:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
          bordered: true,
          className: "w-75",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          className: "bg-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, "Exp date"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, driver.screenings.map(function (scr) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
            key: scr.type,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          }, scr.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
            Date: scr.end,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          })));
        }))))));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Vehicles"), test2.vehicles.map(function (vehicle) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          xs: "auto",
          className: "p-0",
          key: vehicle.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, "Number: ", vehicle.number)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, "Vehicle brand: ", vehicle.brand)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, "Vehicle type: ", vehicle.type)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 text-center mx-5 pt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, "Year: ", vehicle.year))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          className: "justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 m-3 ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, "Registration: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, vehicle.reg)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, "Exp date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
          Date: vehicle.regexp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 m-3 ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, "Inspection:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, "Exp date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateCheck, {
          Date: vehicle.inspection.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }))))));
      }))))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=providerData.js.c43fd88cdf1540b105cd.hot-update.js.map
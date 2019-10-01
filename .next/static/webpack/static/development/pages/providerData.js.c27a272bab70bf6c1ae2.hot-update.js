webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/provider_data/prividerCompliance.js":
/*!***************************************************!*\
  !*** ./pages/provider_data/prividerCompliance.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customComponents */ "./pages/customComponents.js");
/* harmony import */ var _providerStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providerStats */ "./pages/provider_data/providerStats.js");
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../jsxstyles */ "./pages/jsxstyles.js");







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\prividerCompliance.js";







var tpdata = __webpack_require__(/*! ./company.json */ "./pages/provider_data/company.json");

var vehdata = __webpack_require__(/*! ./vehicle.json */ "./pages/provider_data/vehicle.json");

var drdata = __webpack_require__(/*! ./driver.json */ "./pages/provider_data/driver.json");

function ProviderDropdown() {
  var _this = this;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
    modifiers: {
      setMaxHeight: {
        enabled: true,
        order: 890,
        fn: function fn(data) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, data, {
            styles: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, data.styles, {
              overflow: 'auto',
              maxHeight: 200,
              textAlign: 'center',
              marginLeft: '-15px'
            })
          });
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, tpdata.map(function (TP) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      className: "Btn",
      key: TP.company,
      onClick: _this.selectProvider,
      value: TP.company,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, TP.company);
  }));
}

var ProviderCompliance =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProviderCompliance, _React$Component);

  function ProviderCompliance(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProviderCompliance);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProviderCompliance).call(this, props));
    _this2.state = {
      dropdownOpen: false,
      value: 'ACCEL',
      activeTab: '1'
    };
    _this2.selectTab = _this2.selectTab.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.selectProvider = _this2.selectProvider.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.clickDropdown = _this2.clickDropdown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.ProviderDropdown = ProviderDropdown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProviderCompliance, [{
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

      var tpfilter = tpdata.filter(function (tpdata) {
        return tpdata.company === _this3.state.value;
      });
      var tp = tpfilter[0];
      var drfilter = drdata.filter(function (drdata) {
        return drdata.company === _this3.state.value;
      });
      var vehfilter = vehdata.filter(function (vehdata) {
        return vehdata.company === _this3.state.value;
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mt-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Provider Compliance Report"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "my-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Report Date: 9/22/2019"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_providerStats__WEBPACK_IMPORTED_MODULE_11__["ComplianceTable"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "mt-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Compliance by Provider"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.clickDropdown,
        className: "d-flex ml-5 my-5 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Provider List"), this.ProviderDropdown()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Dates in ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bg-warning text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Yellow"), "\xA0 are about to expire."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Dates in  ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "bg-danger text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Red"), "\xA0need immediate attention.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-5 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "bg-light shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "pt-4 pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Provider:"), " ", this.state.value), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Address:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-3 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, tp.address1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-3 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, tp.address2)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "mr-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Contact info:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-2 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Phone:"), " ", tp.phone), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-2 my-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Email:"), " ", tp.email))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "pt-4 pl-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Insurance:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        xs: "auto",
        className: "p-0 mr-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Type: ", tp.gl.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Company: ", tp.gl.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Exp Date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
        Date: tp.gl.end,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Type: ", tp.veh.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Company: ", tp.veh.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Exp Date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
        Date: tp.veh.end,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Type: ", tp.wc.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Company: ", tp.wc.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Exp Date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
        Date: tp.wc.end,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        tabs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
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
          lineNumber: 150
        },
        __self: this
      }, "Drivers")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
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
          lineNumber: 158
        },
        __self: this
      }, "Vehicles"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabContent"], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Drivers:"), drfilter.map(function (driver) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: driver.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["TplistHeaderRow"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, driver.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "License State: ", driver.license.state)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, "License Exp: \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.license.exp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          className: "ml-5 my-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
          bordered: true,
          className: "w-75 shadow-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          className: "bg-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, "Training"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "Company"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Exp date"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, driver.firstaid.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, driver.firstaid.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.firstaid.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, driver.cpr.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, driver.cpr.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.cpr.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, driver.defdriv.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, driver.defdriv.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.defdriv.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, driver.pass.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, driver.pass.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.pass.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        })))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
          bordered: true,
          className: "w-75 shadow-sm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          className: "bg-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, "Screening"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, "Exp date"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, driver.drugscreen.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.drugscreen.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, driver.background.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.background.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, driver.mvr.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: driver.mvr.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }))))))));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["TabPane"], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Vehicles:"), vehfilter.map(function (vehicle) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: vehicle.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["TplistHeaderRow"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, "Number: ", vehicle.number)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, "Vehicle brand: ", vehicle.brand)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, "Vehicle type: ", vehicle.type)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_12__["TplistHeader"].Value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, "Year: ", vehicle.year))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          className: "ml-5 my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 m-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, "Registration State: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, vehicle.registration.state)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, "Exp date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: vehicle.registration.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-inline-block h-25 m-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, "Inspection:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, "Exp date: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
          Date: vehicle.inspection.end,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }))))));
      }))))));
    }
  }]);

  return ProviderCompliance;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProviderCompliance);

/***/ })

})
//# sourceMappingURL=providerData.js.c27a272bab70bf6c1ae2.hot-update.js.map
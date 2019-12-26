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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _components_customComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/customComponents */ "./components/customComponents.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _provider_data_networkTable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider_data/networkTable.js */ "./pages/provider_data/networkTable.js");
/* harmony import */ var _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/jsxstyles */ "./components/jsxstyles.js");







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var tpdata = __webpack_require__(/*! ./provider_data/company.json */ "./pages/provider_data/company.json");

var vehdata = __webpack_require__(/*! ./provider_data/vehicle.json */ "./pages/provider_data/vehicle.json");

var drdata = __webpack_require__(/*! ./provider_data/driver.json */ "./pages/provider_data/driver.json");

var networkdata = __webpack_require__(/*! ./provider_data/network.json */ "./pages/provider_data/network.json");
/* ***************************** 
*   Components for class       * 
*******************************/


function ProviderDropdown() {
  var _this = this;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownMenu"], {
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
      lineNumber: 22
    },
    __self: this
  }, tpdata.map(function (TP) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      className: "Btn",
      key: TP.company,
      onClick: _this.selectProvider,
      value: TP.company,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, TP.company);
  }));
}

function CompanyTab(props) {
  var TP = props.Data;
  return __jsx("div", {
    className: "bg-light shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    className: "pt-4 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Provider:"), " ", TP.company), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Address:")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, TP.address1), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, TP.address2)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Contact info:")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Phone:"), " ", TP.phone), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Email:"), " ", TP.email))), __jsx("p", {
    className: "pt-4 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Insurance:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    className: " ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Type:"), " ", TP.gl.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Company:"), " ", TP.gl.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
    Date: TP.gl.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Type:"), " ", TP.veh.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Company:"), " ", TP.veh.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
    Date: TP.veh.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Type:"), " ", TP.wc.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Company:"), " ", TP.wc.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
    Date: TP.wc.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })))));
}

function DriverTab(props) {
  var Driver = props.Data;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, Driver.map(function (driver) {
    return __jsx("div", {
      key: driver.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["TplistHeaderRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, driver.name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "License State: ", driver.license.state)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "License Exp: \xA0", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.license.exp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      className: "ml-5 my-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
      bordered: true,
      className: "w-75 shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("tr", {
      className: "bg-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Training"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Company"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Exp date"))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, driver.firstaid.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, driver.firstaid.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.firstaid.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, driver.cpr.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, driver.cpr.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.cpr.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, driver.defdriv.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, driver.defdriv.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.defdriv.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, driver.pass.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, driver.pass.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.pass.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
      bordered: true,
      className: "w-75 shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("tr", {
      className: "bg-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Screening"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Exp date"))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, driver.drugscreen.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.drugscreen.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, driver.background.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.background.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, driver.mvr.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.mvr.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }))))))));
  }));
}

function VehicleTab(props) {
  var Vehicle = props.Data;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, Vehicle.map(function (vehicle) {
    return __jsx("div", {
      key: vehicle.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["TplistHeaderRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Number: ", vehicle.number)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Vehicle brand: ", vehicle.brand)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Vehicle type: ", vehicle.type)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Year: ", vehicle.year))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      className: "ml-5 my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, __jsx("div", {
      className: "d-inline-block h-25 m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "Registration State:\xA0", __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, vehicle.registration.state)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, "Exp date: ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: vehicle.registration.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx("div", {
      className: "d-inline-block h-25 m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Inspection:"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Exp date: ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: vehicle.inspection.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }))))));
  }));
}

function Networkinfo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("h1", {
    className: "mt-5 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Network Summary"), __jsx("h3", {
    className: "mt-2 mb-5 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Report Date: 09/22/2019"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "px-5 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("tbody", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "All Regions")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Total Providers:"), __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, networkdata.length)), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Amb",
    Value1: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "WCHR",
    Value1: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Stretcher",
    Value1: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Central")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, "Total Providers:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "Central",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "Central",
    Filter2: "Amb",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "Central",
    Filter2: "WCHR",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "Central",
    Filter2: "Stretcher",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "4100854192",
    __self: this
  }, ".jsx-4100854192{text-align:center;width:70px;}th.jsx-4100854192{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5VG9DLEFBR21ELEFBS3ZCLGNBQUMsSUFKZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgQ3VzdG9tSnVtYm8sIEN1c3RvbVRhYnMsIERhdGVDaGVjaywgVHBsaXN0SGVhZGVyUm93LCBJbmZvRmllbGQsIE5ldHdvcmtEYXRhRmlsdGVyLFxyXG4gICAgQ29tcGxEYXRhRmlsdGVyLCBQZXJjZW50Q2FsYyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tQ29tcG9uZW50cydcclxuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgXHJcbiAgICBSb3csIENvbCwgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgTmV0d29ya0xpc3QgZnJvbSAnLi9wcm92aWRlcl9kYXRhL25ldHdvcmtUYWJsZS5qcydcclxuaW1wb3J0IHsgVHBsaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9qc3hzdHlsZXMnXHJcblxyXG5cclxudmFyIHRwZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9jb21wYW55Lmpzb24nKTtcclxudmFyIHZlaGRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvdmVoaWNsZS5qc29uJyk7XHJcbnZhciBkcmRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvZHJpdmVyLmpzb24nKTtcclxudmFyIG5ldHdvcmtkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL25ldHdvcmsuanNvbicpO1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBDb21wb25lbnRzIGZvciBjbGFzcyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJEcm9wZG93bigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERyb3Bkb3duTWVudVxyXG4gICAgICAgICAgICBtb2RpZmllcnM9e3tcclxuICAgICAgICAgICAgICAgIHNldE1heEhlaWdodDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDg5MCxcclxuICAgICAgICAgICAgICAgICAgICBmbjogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEuc3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAwICAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJy0xNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0cGRhdGEubWFwKFRQID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJCdG5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtUUC5jb21wYW55fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1RQLmNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7VFAuY29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbXBhbnlUYWIocHJvcHMpIHtcclxuICAgIGxldCBUUCA9IHByb3BzLkRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTQgcGwtNFwiPjxiPlByb3ZpZGVyOjwvYj4ge1RQLmNvbXBhbnl9PC9wPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxiPkFkZHJlc3M6PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPntUUC5hZGRyZXNzMX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPntUUC5hZGRyZXNzMn08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+PGI+Q29udGFjdCBpbmZvOjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5QaG9uZTo8L2I+IHtUUC5waG9uZX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkVtYWlsOjwvYj4ge1RQLmVtYWlsfTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC00IHBsLTRcIj48Yj5JbnN1cmFuY2U6PC9iPjwvcD5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCIgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPlR5cGU6PC9iPiB7VFAuZ2wudHlwZX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkNvbXBhbnk6PC9iPiB7VFAuZ2wuY29tcGFueX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkV4cCBEYXRlOjwvYj4gPERhdGVDaGVjayBEYXRlPXtUUC5nbC5lbmR9IC8+PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+VHlwZTo8L2I+IHtUUC52ZWgudHlwZX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkNvbXBhbnk6PC9iPiB7VFAudmVoLmNvbXBhbnl9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FeHAgRGF0ZTo8L2I+IDxEYXRlQ2hlY2sgRGF0ZT17VFAudmVoLmVuZH0gLz48L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5UeXBlOjwvYj4ge1RQLndjLnR5cGV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5Db21wYW55OjwvYj4ge1RQLndjLmNvbXBhbnl9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FeHAgRGF0ZTo8L2I+IDxEYXRlQ2hlY2sgRGF0ZT17VFAud2MuZW5kfSAvPjwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+ICBcclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcml2ZXJUYWIocHJvcHMpIHtcclxuICAgIGxldCBEcml2ZXIgPSBwcm9wcy5EYXRhO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge0RyaXZlci5tYXAoZHJpdmVyID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkcml2ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcGxpc3RIZWFkZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e1RwbGlzdC5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2RyaXZlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1RwbGlzdC5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGljZW5zZSBTdGF0ZToge2RyaXZlci5saWNlbnNlLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PkxpY2Vuc2UgRXhwOiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5saWNlbnNlLmV4cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcGxpc3RIZWFkZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtbC01IG15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJlZCBjbGFzc05hbWU9XCJ3LTc1IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHJhaW5pbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBhbnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cCBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZmlyc3RhaWQudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZmlyc3RhaWQuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmZpcnN0YWlkLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmNwci50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5jcHIuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmNwci5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5kZWZkcml2LnR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmRlZmRyaXYuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmRlZmRyaXYuZW5kfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIucGFzcy50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5wYXNzLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5wYXNzLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGJvcmRlcmVkIGNsYXNzTmFtZT1cInctNzUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TY3JlZW5pbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cCBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZHJ1Z3NjcmVlbi50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIuZHJ1Z3NjcmVlbi5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5iYWNrZ3JvdW5kLnR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5iYWNrZ3JvdW5kLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLm12ci50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIubXZyLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVmVoaWNsZVRhYihwcm9wcykge1xyXG4gICAgbGV0IFZlaGljbGUgPSBwcm9wcy5EYXRhO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtWZWhpY2xlLm1hcCh2ZWhpY2xlID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2ZWhpY2xlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk51bWJlcjoge3ZlaGljbGUubnVtYmVyfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1RwbGlzdC5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVoaWNsZSBicmFuZDoge3ZlaGljbGUuYnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1RwbGlzdC5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVoaWNsZSB0eXBlOiB7dmVoaWNsZS50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllYXI6IHt2ZWhpY2xlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWwtNSBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGgtMjUgbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJlZ2lzdHJhdGlvbiBTdGF0ZTombmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dmVoaWNsZS5yZWdpc3RyYXRpb24uc3RhdGV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cCBkYXRlOiA8RGF0ZUNoZWNrIERhdGU9e3ZlaGljbGUucmVnaXN0cmF0aW9uLmVuZH0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBoLTI1IG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5JbnNwZWN0aW9uOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwIGRhdGU6IDxEYXRlQ2hlY2sgRGF0ZT17dmVoaWNsZS5pbnNwZWN0aW9uLmVuZH0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOZXR3b3JraW5mbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIj5OZXR3b3JrIFN1bW1hcnk8L2gxPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMiBtYi01IHRleHQtY2VudGVyXCI+UmVwb3J0IERhdGU6IDA5LzIyLzIwMTk8L2gzPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01IHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkFsbCBSZWdpb25zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntuZXR3b3JrZGF0YS5sZW5ndGh9PC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnQW1iJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnU3RyZXRjaGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkNlbnRyYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0NlbnRyYWwnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdDZW50cmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdBbWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnQ2VudHJhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0NlbnRyYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ1N0cmV0Y2hlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01IHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlNvdXRoV2VzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdBbWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdXQ0hSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdTdHJldGNoZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+RWFzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnRWFzdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0Vhc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ0FtYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdFYXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdXQ0hSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnRWFzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnU3RyZXRjaGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcGxpYW5jZVRhYmxlKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gdHBkYXRhLmZpbHRlcih0cGRhdGEgPT4gdHBkYXRhLmNvbXBhbnkpLmxlbmd0aDtcclxuICAgIGNvbnN0IGRyaXZlcnMgPSBkcmRhdGEuZmlsdGVyKGRyZGF0YSA9PiBkcmRhdGEuaWQpLmxlbmd0aDtcclxuICAgIGNvbnN0IHZlaGljbGVzID0gdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLmlkKS5sZW5ndGg7XHJcbiAgICBjb25zdCByZXBvcnRkYXRlID0gXCIyMDE5LTA5LTIyXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNVwiPkNvbXBsaWFuY2UgU3VtbWFyeTwvaDI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5JbnN1cmFuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIFByb3ZpZGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm92aWRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkV4cGlyZWQgR0wgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2dsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBHTCBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdnbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7cHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FeHBpcmVkIFZlaGljbGUgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3ZlaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZSBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICd2ZWgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3djJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3RwZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnd2MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlZlaGljbGVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBWZWhpY2xlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2ZWhpY2xlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBSZWdpc3RyYXRpb25zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgTm9uLUNvbXBsaWFudCBSZWdpc3RyYXRpb25zOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBJbnNwZWN0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3ZlaGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2luc3BlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JSBOb24tQ29tcGxpYW50IEluc3BlY3Rpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt2ZWhkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdpbnNwZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TnVtYmVyIG9mIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhkYXRhID0+IHZlaGRhdGEucmVnZXhwIDwgcmVwb3J0ZGF0ZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLnJlZ2V4cCA8IHJlcG9ydGRhdGUgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIHZlaGljbGVzICogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyAnJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJpdmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPk51bWJlciBvZiBEcml2ZXJzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRyaXZlciBDb21wbGlhbmNlIENhdGFnb3JpZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBFeHBpcmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+JSBOb24tQ29tcGxpYW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxpY2Vuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2xpY2Vuc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZXhwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdsaWNlbnNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2V4cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RHJ1ZyBTY3JlZW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2RydWdzY3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkcnVnc2NyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWNrZ3JvdW5kIENoZWNrPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdiYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TVZSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZpcnN0IEFpZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZmlyc3RhaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdmaXJzdGFpZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q1BSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRlZmVuc2l2ZSBEcml2aW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkZWZkcml2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZGVmZHJpdidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGFzc2VuZ2VyIFNlbnNpdGl2aXR5IChQQVNTKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncGFzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3Bhc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPk51bWJlciBvZiBOb24tQ29tcGxpYW50IERyaXZlcnM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maWx0ZXIoZHJkYXRhID0+IGRyZGF0YS5saWNlbnNlLmV4cCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmZpcnN0YWlkLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5kZWZkcml2LmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLnBhc3MuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5iYWNrZ3JvdW5kLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLm12ci5lbmQgPCByZXBvcnRkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5QZXJjZW50IE5vbi1Db21wbGlhbnQgRHJpdmVyczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZHJkYXRhLmZpbHRlcihkcmRhdGEgPT4gZHJkYXRhLmxpY2Vuc2UuZXhwIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maXJzdGFpZC5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmRlZmRyaXYuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5wYXNzLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmJhY2tncm91bmQuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5tdnIuZW5kIDwgcmVwb3J0ZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGgpIC8gZHJpdmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICogMTAwKSArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKiogXHJcbiogICBNYWluIENsYXNzICAgICAgICogXHJcbioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNsYXNzIFByb3ZpZGVyQ29tcGxpYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0FDQ0VMJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UHJvdmlkZXIgPSB0aGlzLnNlbGVjdFByb3ZpZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGlja0Ryb3Bkb3duID0gdGhpcy5jbGlja0Ryb3Bkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5Qcm92aWRlckRyb3Bkb3duID0gUHJvdmlkZXJEcm9wZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY2xpY2tEcm9wZG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICBkcm9wZG93bk9wZW46ICFwcmV2U3RhdGUuZHJvcGRvd25PcGVuXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFByb3ZpZGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRwZmlsdGVyID0gdHBkYXRhLmZpbHRlcih0cGRhdGEgPT4gdHBkYXRhLmNvbXBhbnkgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHRwID0gdHBmaWx0ZXJbMF07XHJcbiAgICAgICAgY29uc3QgZHJmaWx0ZXIgPSBkcmRhdGEuZmlsdGVyKGRyZGF0YSA9PiBkcmRhdGEuY29tcGFueSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmVoZmlsdGVyID0gdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLmNvbXBhbnkgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlByb3ZpZGVyIENvbXBsaWFuY2UgUmVwb3J0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UmVwb3J0IERhdGU6IDkvMjIvMjAxOTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb21wbGlhbmNlVGFibGUgLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0zIHRleHQtY2VudGVyXCI+Q29tcGxpYW5jZSBieSBQcm92aWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duT3Blbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLmNsaWNrRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IG1sLTUgbXktNSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2FyZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGVyIExpc3RcclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLlByb3ZpZGVyRHJvcGRvd24oKX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbWwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5EYXRlcyBpbiA8c3BhbiBjbGFzc05hbWU9XCJiZy13YXJuaW5nIHRleHQtd2hpdGVcIj5ZZWxsb3c8L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZSBhYm91dCB0byBleHBpcmUuPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItNVwiPkRhdGVzIGluICA8c3BhbiBjbGFzc05hbWU9XCJiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7bmVlZCBpbW1lZGlhdGUgYXR0ZW50aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBhbnlUYWIgRGF0YSA9IHt0cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjFOYW1lID0gJ0RyaXZlcnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWIyTmFtZSA9ICdWZWhpY2xlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjFDb250ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcml2ZXJUYWIgRGF0YSA9IHtkcmZpbHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjJDb250ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZWhpY2xlVGFiIERhdGEgPSB7dmVoZmlsdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKiogXHJcbiogICBEaXNwbGF5cyBQYWdlICAgICogXHJcbioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5mdW5jdGlvbiBQcm92aWRlckRhdGEoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q3VzdG9tSnVtYm9cclxuICAgICAgICAgICAgICAgIFRpdGxlPVwiUHJvdmlkZXIgTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBJbWdVcmw9XCJub2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIENhcHRpb24xU3R5bGU9J2xlYWQgdGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMT1cInRoaXMgaXMgZGF0YSBpbXBvcnRlZCBmcm9tIGxvY2FsIGpzb24gZmlsZXMuIEl0IHdpbGwgcmVjcmVhdGUgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWRzaGVldHMgSSBjcmVhdGVkIGF0IG9uZSBvZiBteSBwcmV2aW91cyBqb2JzLlwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMlN0eWxlPSd0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgIENhcHRpb24yPVwiQWxsIGluZm9ybWF0aW9uIGhhcyBiZWVuIHJhbmRvbWx5IGdlbmVyYXRlZCBmcm9tIGEgSlNPTiBHZW5lcmF0b3IgdG9vbCBcclxuICAgICAgICAgICAgICAgIGZvdW5kIG9ubGluZS4gVGhpcyBpbmNsdWRlcyBuYW1lcywgZW1haWxzLCBwaG9uZSBudW1iZXJzLCBhZGRyZXNzZXMgYW5kIGRhdGVzLlwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Q3VzdG9tVGFic1xyXG4gICAgICAgICAgICAgICAgVGFiMU5hbWUgPSAnTmV0d29yaydcclxuICAgICAgICAgICAgICAgIFRhYjJOYW1lID0gJ0NvbXBsaWFuY2UnXHJcbiAgICAgICAgICAgICAgICBUYWIxQ29udGVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV0d29ya2luZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ldHdvcmtMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUYWIyQ29udGVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXJDb21wbGlhbmNlIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlckRhdGE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Mark\\\\Desktop\\\\newtest\\\\my-page\\\\pages\\\\providerData.js */"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "px-5 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("tbody", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, "SouthWest")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Total Providers:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "SouthWest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "SouthWest",
    Filter2: "Amb",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "SouthWest",
    Filter2: "WCHR",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "SouthWest",
    Filter2: "Stretcher",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, "East")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Total Providers:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "East",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "East",
    Filter2: "Amb",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "East",
    Filter2: "WCHR",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "East",
    Filter2: "Stretcher",
    Value2: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "4100854192",
    __self: this
  }, ".jsx-4100854192{text-align:center;width:70px;}th.jsx-4100854192{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyWm9DLEFBR21ELEFBS3ZCLGNBQUMsSUFKZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgQ3VzdG9tSnVtYm8sIEN1c3RvbVRhYnMsIERhdGVDaGVjaywgVHBsaXN0SGVhZGVyUm93LCBJbmZvRmllbGQsIE5ldHdvcmtEYXRhRmlsdGVyLFxyXG4gICAgQ29tcGxEYXRhRmlsdGVyLCBQZXJjZW50Q2FsYyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tQ29tcG9uZW50cydcclxuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgXHJcbiAgICBSb3csIENvbCwgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgTmV0d29ya0xpc3QgZnJvbSAnLi9wcm92aWRlcl9kYXRhL25ldHdvcmtUYWJsZS5qcydcclxuaW1wb3J0IHsgVHBsaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9qc3hzdHlsZXMnXHJcblxyXG5cclxudmFyIHRwZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9jb21wYW55Lmpzb24nKTtcclxudmFyIHZlaGRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvdmVoaWNsZS5qc29uJyk7XHJcbnZhciBkcmRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvZHJpdmVyLmpzb24nKTtcclxudmFyIG5ldHdvcmtkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL25ldHdvcmsuanNvbicpO1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBDb21wb25lbnRzIGZvciBjbGFzcyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJEcm9wZG93bigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERyb3Bkb3duTWVudVxyXG4gICAgICAgICAgICBtb2RpZmllcnM9e3tcclxuICAgICAgICAgICAgICAgIHNldE1heEhlaWdodDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDg5MCxcclxuICAgICAgICAgICAgICAgICAgICBmbjogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEuc3R5bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogMjAwICAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJy0xNXB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0cGRhdGEubWFwKFRQID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJCdG5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtUUC5jb21wYW55fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1RQLmNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7VFAuY29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbXBhbnlUYWIocHJvcHMpIHtcclxuICAgIGxldCBUUCA9IHByb3BzLkRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTQgcGwtNFwiPjxiPlByb3ZpZGVyOjwvYj4ge1RQLmNvbXBhbnl9PC9wPlxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxiPkFkZHJlc3M6PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPntUUC5hZGRyZXNzMX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPntUUC5hZGRyZXNzMn08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yXCI+PGI+Q29udGFjdCBpbmZvOjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5QaG9uZTo8L2I+IHtUUC5waG9uZX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkVtYWlsOjwvYj4ge1RQLmVtYWlsfTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC00IHBsLTRcIj48Yj5JbnN1cmFuY2U6PC9iPjwvcD5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCIgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPlR5cGU6PC9iPiB7VFAuZ2wudHlwZX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkNvbXBhbnk6PC9iPiB7VFAuZ2wuY29tcGFueX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkV4cCBEYXRlOjwvYj4gPERhdGVDaGVjayBEYXRlPXtUUC5nbC5lbmR9IC8+PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+VHlwZTo8L2I+IHtUUC52ZWgudHlwZX08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPkNvbXBhbnk6PC9iPiB7VFAudmVoLmNvbXBhbnl9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FeHAgRGF0ZTo8L2I+IDxEYXRlQ2hlY2sgRGF0ZT17VFAudmVoLmVuZH0gLz48L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5UeXBlOjwvYj4ge1RQLndjLnR5cGV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5Db21wYW55OjwvYj4ge1RQLndjLmNvbXBhbnl9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FeHAgRGF0ZTo8L2I+IDxEYXRlQ2hlY2sgRGF0ZT17VFAud2MuZW5kfSAvPjwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+ICBcclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcml2ZXJUYWIocHJvcHMpIHtcclxuICAgIGxldCBEcml2ZXIgPSBwcm9wcy5EYXRhO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge0RyaXZlci5tYXAoZHJpdmVyID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkcml2ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcGxpc3RIZWFkZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e1RwbGlzdC5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2RyaXZlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1RwbGlzdC5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGljZW5zZSBTdGF0ZToge2RyaXZlci5saWNlbnNlLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PkxpY2Vuc2UgRXhwOiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5saWNlbnNlLmV4cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcGxpc3RIZWFkZXJSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtbC01IG15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJlZCBjbGFzc05hbWU9XCJ3LTc1IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHJhaW5pbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNvbXBhbnk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cCBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZmlyc3RhaWQudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZmlyc3RhaWQuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmZpcnN0YWlkLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmNwci50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5jcHIuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmNwci5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5kZWZkcml2LnR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmRlZmRyaXYuY29tcGFueX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmRlZmRyaXYuZW5kfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIucGFzcy50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5wYXNzLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5wYXNzLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGJvcmRlcmVkIGNsYXNzTmFtZT1cInctNzUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TY3JlZW5pbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cCBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZHJ1Z3NjcmVlbi50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIuZHJ1Z3NjcmVlbi5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5iYWNrZ3JvdW5kLnR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5iYWNrZ3JvdW5kLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLm12ci50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIubXZyLmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVmVoaWNsZVRhYihwcm9wcykge1xyXG4gICAgbGV0IFZlaGljbGUgPSBwcm9wcy5EYXRhO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtWZWhpY2xlLm1hcCh2ZWhpY2xlID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2ZWhpY2xlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk51bWJlcjoge3ZlaGljbGUubnVtYmVyfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1RwbGlzdC5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVoaWNsZSBicmFuZDoge3ZlaGljbGUuYnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e1RwbGlzdC5WYWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVoaWNsZSB0eXBlOiB7dmVoaWNsZS50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllYXI6IHt2ZWhpY2xlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWwtNSBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGgtMjUgbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlJlZ2lzdHJhdGlvbiBTdGF0ZTombmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dmVoaWNsZS5yZWdpc3RyYXRpb24uc3RhdGV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cCBkYXRlOiA8RGF0ZUNoZWNrIERhdGU9e3ZlaGljbGUucmVnaXN0cmF0aW9uLmVuZH0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBoLTI1IG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5JbnNwZWN0aW9uOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwIGRhdGU6IDxEYXRlQ2hlY2sgRGF0ZT17dmVoaWNsZS5pbnNwZWN0aW9uLmVuZH0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOZXR3b3JraW5mbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIj5OZXR3b3JrIFN1bW1hcnk8L2gxPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMiBtYi01IHRleHQtY2VudGVyXCI+UmVwb3J0IERhdGU6IDA5LzIyLzIwMTk8L2gzPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01IHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkFsbCBSZWdpb25zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntuZXR3b3JrZGF0YS5sZW5ndGh9PC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnQW1iJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnU3RyZXRjaGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkNlbnRyYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0NlbnRyYWwnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdDZW50cmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdBbWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnQ2VudHJhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0NlbnRyYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ1N0cmV0Y2hlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01IHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPlNvdXRoV2VzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdBbWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdXQ0hSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnU291dGhXZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdTdHJldGNoZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+RWFzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnRWFzdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0Vhc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ0FtYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdFYXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdXQ0hSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnRWFzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnU3RyZXRjaGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj4gIFxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcGxpYW5jZVRhYmxlKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gdHBkYXRhLmZpbHRlcih0cGRhdGEgPT4gdHBkYXRhLmNvbXBhbnkpLmxlbmd0aDtcclxuICAgIGNvbnN0IGRyaXZlcnMgPSBkcmRhdGEuZmlsdGVyKGRyZGF0YSA9PiBkcmRhdGEuaWQpLmxlbmd0aDtcclxuICAgIGNvbnN0IHZlaGljbGVzID0gdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLmlkKS5sZW5ndGg7XHJcbiAgICBjb25zdCByZXBvcnRkYXRlID0gXCIyMDE5LTA5LTIyXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNVwiPkNvbXBsaWFuY2UgU3VtbWFyeTwvaDI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5JbnN1cmFuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIFByb3ZpZGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm92aWRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkV4cGlyZWQgR0wgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2dsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBHTCBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdnbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7cHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FeHBpcmVkIFZlaGljbGUgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3ZlaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZSBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICd2ZWgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3djJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3RwZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnd2MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlZlaGljbGVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBWZWhpY2xlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2ZWhpY2xlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBSZWdpc3RyYXRpb25zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgTm9uLUNvbXBsaWFudCBSZWdpc3RyYXRpb25zOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBJbnNwZWN0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3ZlaGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2luc3BlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JSBOb24tQ29tcGxpYW50IEluc3BlY3Rpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt2ZWhkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdpbnNwZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TnVtYmVyIG9mIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhkYXRhID0+IHZlaGRhdGEucmVnZXhwIDwgcmVwb3J0ZGF0ZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLnJlZ2V4cCA8IHJlcG9ydGRhdGUgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIHZlaGljbGVzICogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyAnJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJpdmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPk51bWJlciBvZiBEcml2ZXJzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRyaXZlciBDb21wbGlhbmNlIENhdGFnb3JpZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBFeHBpcmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+JSBOb24tQ29tcGxpYW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxpY2Vuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2xpY2Vuc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZXhwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdsaWNlbnNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2V4cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RHJ1ZyBTY3JlZW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2RydWdzY3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkcnVnc2NyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWNrZ3JvdW5kIENoZWNrPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdiYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TVZSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZpcnN0IEFpZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZmlyc3RhaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdmaXJzdGFpZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q1BSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRlZmVuc2l2ZSBEcml2aW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkZWZkcml2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZGVmZHJpdidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGFzc2VuZ2VyIFNlbnNpdGl2aXR5IChQQVNTKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncGFzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3Bhc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPk51bWJlciBvZiBOb24tQ29tcGxpYW50IERyaXZlcnM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maWx0ZXIoZHJkYXRhID0+IGRyZGF0YS5saWNlbnNlLmV4cCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmZpcnN0YWlkLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5kZWZkcml2LmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLnBhc3MuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5iYWNrZ3JvdW5kLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLm12ci5lbmQgPCByZXBvcnRkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5QZXJjZW50IE5vbi1Db21wbGlhbnQgRHJpdmVyczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZHJkYXRhLmZpbHRlcihkcmRhdGEgPT4gZHJkYXRhLmxpY2Vuc2UuZXhwIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maXJzdGFpZC5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmRlZmRyaXYuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5wYXNzLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmJhY2tncm91bmQuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5tdnIuZW5kIDwgcmVwb3J0ZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGgpIC8gZHJpdmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICogMTAwKSArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKiogXHJcbiogICBNYWluIENsYXNzICAgICAgICogXHJcbioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmNsYXNzIFByb3ZpZGVyQ29tcGxpYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcm9wZG93bk9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0FDQ0VMJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UHJvdmlkZXIgPSB0aGlzLnNlbGVjdFByb3ZpZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGlja0Ryb3Bkb3duID0gdGhpcy5jbGlja0Ryb3Bkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5Qcm92aWRlckRyb3Bkb3duID0gUHJvdmlkZXJEcm9wZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY2xpY2tEcm9wZG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICBkcm9wZG93bk9wZW46ICFwcmV2U3RhdGUuZHJvcGRvd25PcGVuXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFByb3ZpZGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRwZmlsdGVyID0gdHBkYXRhLmZpbHRlcih0cGRhdGEgPT4gdHBkYXRhLmNvbXBhbnkgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHRwID0gdHBmaWx0ZXJbMF07XHJcbiAgICAgICAgY29uc3QgZHJmaWx0ZXIgPSBkcmRhdGEuZmlsdGVyKGRyZGF0YSA9PiBkcmRhdGEuY29tcGFueSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdmVoZmlsdGVyID0gdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLmNvbXBhbnkgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlByb3ZpZGVyIENvbXBsaWFuY2UgUmVwb3J0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UmVwb3J0IERhdGU6IDkvMjIvMjAxOTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb21wbGlhbmNlVGFibGUgLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0zIHRleHQtY2VudGVyXCI+Q29tcGxpYW5jZSBieSBQcm92aWRlcjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaXNPcGVuPXt0aGlzLnN0YXRlLmRyb3Bkb3duT3Blbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLmNsaWNrRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IG1sLTUgbXktNSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2FyZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3ZpZGVyIExpc3RcclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLlByb3ZpZGVyRHJvcGRvd24oKX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbWwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5EYXRlcyBpbiA8c3BhbiBjbGFzc05hbWU9XCJiZy13YXJuaW5nIHRleHQtd2hpdGVcIj5ZZWxsb3c8L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZSBhYm91dCB0byBleHBpcmUuPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItNVwiPkRhdGVzIGluICA8c3BhbiBjbGFzc05hbWU9XCJiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7bmVlZCBpbW1lZGlhdGUgYXR0ZW50aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBhbnlUYWIgRGF0YSA9IHt0cH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRhYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjFOYW1lID0gJ0RyaXZlcnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWIyTmFtZSA9ICdWZWhpY2xlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjFDb250ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcml2ZXJUYWIgRGF0YSA9IHtkcmZpbHRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjJDb250ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZWhpY2xlVGFiIERhdGEgPSB7dmVoZmlsdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKiogXHJcbiogICBEaXNwbGF5cyBQYWdlICAgICogXHJcbioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5mdW5jdGlvbiBQcm92aWRlckRhdGEoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q3VzdG9tSnVtYm9cclxuICAgICAgICAgICAgICAgIFRpdGxlPVwiUHJvdmlkZXIgTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBJbWdVcmw9XCJub2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIENhcHRpb24xU3R5bGU9J2xlYWQgdGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMT1cInRoaXMgaXMgZGF0YSBpbXBvcnRlZCBmcm9tIGxvY2FsIGpzb24gZmlsZXMuIEl0IHdpbGwgcmVjcmVhdGUgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWRzaGVldHMgSSBjcmVhdGVkIGF0IG9uZSBvZiBteSBwcmV2aW91cyBqb2JzLlwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMlN0eWxlPSd0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgIENhcHRpb24yPVwiQWxsIGluZm9ybWF0aW9uIGhhcyBiZWVuIHJhbmRvbWx5IGdlbmVyYXRlZCBmcm9tIGEgSlNPTiBHZW5lcmF0b3IgdG9vbCBcclxuICAgICAgICAgICAgICAgIGZvdW5kIG9ubGluZS4gVGhpcyBpbmNsdWRlcyBuYW1lcywgZW1haWxzLCBwaG9uZSBudW1iZXJzLCBhZGRyZXNzZXMgYW5kIGRhdGVzLlwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Q3VzdG9tVGFic1xyXG4gICAgICAgICAgICAgICAgVGFiMU5hbWUgPSAnTmV0d29yaydcclxuICAgICAgICAgICAgICAgIFRhYjJOYW1lID0gJ0NvbXBsaWFuY2UnXHJcbiAgICAgICAgICAgICAgICBUYWIxQ29udGVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV0d29ya2luZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ldHdvcmtMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBUYWIyQ29udGVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXJDb21wbGlhbmNlIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlckRhdGE7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Mark\\\\Desktop\\\\newtest\\\\my-page\\\\pages\\\\providerData.js */")))));
}

function ComplianceTable() {
  var providers = tpdata.filter(function (tpdata) {
    return tpdata.company;
  }).length;
  var drivers = drdata.filter(function (drdata) {
    return drdata.id;
  }).length;
  var vehicles = vehdata.filter(function (vehdata) {
    return vehdata.id;
  }).length;
  var reportdate = "2019-09-22";
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, __jsx("h2", {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, "Compliance Summary"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, "Insurance")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "Number of Providers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, providers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "Expired GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: tpdata,
    Filter1: "gl",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: this
  }, "% non-compliant GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: tpdata,
    Filter1: "gl",
    Filter1child: "end",
    Value1: reportdate,
    Divider: providers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, "Expired Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: tpdata,
    Filter1: "veh",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, "% non-compliant Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: tpdata,
    Filter1: "veh",
    Filter1child: "end",
    Value1: reportdate,
    Divider: providers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, "Expired Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: tpdata,
    Filter1: "wc",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, "% non-compliant Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: tpdata,
    Filter1: "wc",
    Filter1child: "end",
    Value1: reportdate,
    Divider: providers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, "Vehicles")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, "Number of Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, vehicles)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, "Expired Registrations"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: vehdata,
    Filter1: "registration",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, "% Non-Compliant Registrations:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: vehdata,
    Filter1: "registration",
    Filter1child: "end",
    Value1: reportdate,
    Divider: vehicles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, "Expired Inspections"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: vehdata,
    Filter1: "inspection",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }, "% Non-Compliant Inspection:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: vehdata,
    Filter1: "inspection",
    Filter1child: "end",
    Value1: reportdate,
    Divider: vehicles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, "Number of non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583
    },
    __self: this
  }, "% non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, Math.floor(vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length / vehicles * 100) + '%'))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, __jsx("th", {
    colSpan: "3",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, "Drivers")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }, "Number of Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, drivers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }, "Driver Compliance Catagories"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, "Total Expired"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  }, "% Non-Compliant")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, "License"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "license",
    Filter1child: "exp",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "license",
    Filter1child: "exp",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }, "Drug Screen"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "drugscreen",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "drugscreen",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }, "Background Check"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "background",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "background",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: this
  }, "MVR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "mvr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "mvr",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }, "First Aid"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "firstaid",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "firstaid",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714
    },
    __self: this
  }, "CPR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "cpr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "cpr",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }, "Defensive Driving"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "defdriv",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "defdriv",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754
    },
    __self: this
  }, "Passenger Sensitivity (PASS)"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "pass",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["PercentCalc"], {
    Info: drdata,
    Filter1: "pass",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774
    },
    __self: this
  }, "Number of Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: this
  }, drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790
    },
    __self: this
  }, "Percent Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }, Math.floor(drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length / drivers * 100) + '%')))))));
}
/* ******************* 
*   Main Class       * 
*********************/


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
      value: 'ACCEL'
    };
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
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 848
        },
        __self: this
      }, __jsx("div", {
        className: "my-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 849
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 850
        },
        __self: this
      }, "Provider Compliance Report"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851
        },
        __self: this
      }, "Report Date: 9/22/2019")), __jsx(ComplianceTable, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        __self: this
      }), __jsx("h1", {
        className: "mt-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        },
        __self: this
      }, "Compliance by Provider"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.clickDropdown,
        className: "d-flex ml-5 my-5 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        __self: this
      }, "Provider List"), this.ProviderDropdown()), __jsx("div", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        __self: this
      }, "Dates in ", __jsx("span", {
        className: "bg-warning text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        __self: this
      }, "Yellow"), "\xA0 are about to expire."), __jsx("h5", {
        className: "mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867
        },
        __self: this
      }, "Dates in  ", __jsx("span", {
        className: "bg-danger text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867
        },
        __self: this
      }, "Red"), "\xA0need immediate attention.")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871
        },
        __self: this
      }, __jsx(CompanyTab, {
        Data: tp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        __self: this
      }), __jsx("div", {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["CustomTabs"], {
        Tab1Name: "Drivers",
        Tab2Name: "Vehicles",
        Tab1Content: __jsx(DriverTab, {
          Data: drfilter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 878
          },
          __self: this
        }),
        Tab2Content: __jsx(VehicleTab, {
          Data: vehfilter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 881
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        __self: this
      }))));
    }
  }]);

  return ProviderCompliance;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);
/* ******************* 
*   Displays Page    * 
*********************/


function ProviderData() {
  return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["CustomJumbo"], {
    Title: "Provider List",
    ImgUrl: "noimage",
    Caption1Style: "lead text-center",
    Caption1: "this is data imported from local json files. It will recreate tracking\r spreadsheets I created at one of my previous jobs.",
    Caption2Style: "text-center",
    Caption2: "All information has been randomly generated from a JSON Generator tool \r found online. This includes names, emails, phone numbers, addresses and dates.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903
    },
    __self: this
  }), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["CustomTabs"], {
    Tab1Name: "Network",
    Tab2Name: "Compliance",
    Tab1Content: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918
      },
      __self: this
    }, __jsx(Networkinfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919
      },
      __self: this
    }), __jsx(_provider_data_networkTable_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920
      },
      __self: this
    })),
    Tab2Content: __jsx(ProviderCompliance, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.80f550cf524633c50594.hot-update.js.map
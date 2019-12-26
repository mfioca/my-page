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




 //import ComplianceTable from './provider_data/providerStats.js'
//import Networkinfo from './provider_data/NetworkInfo.js'



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
      lineNumber: 24
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
        lineNumber: 45
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
      lineNumber: 62
    },
    __self: this
  }, __jsx("p", {
    className: "pt-4 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Provider:"), " ", TP.company), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Address:")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, TP.address1), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, TP.address2)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("p", {
    className: "ml-2",
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
  }, "Contact info:")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Phone:"), " ", TP.phone), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Email:"), " ", TP.email))), __jsx("p", {
    className: "pt-4 pl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Insurance:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    className: " ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
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
  }, "Type:"), " ", TP.gl.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Company:"), " ", TP.gl.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
    Date: TP.gl.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
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
  }, "Type:"), " ", TP.veh.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Company:"), " ", TP.veh.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
    Date: TP.veh.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
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
  }, "Type:"), " ", TP.wc.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Company:"), " ", TP.wc.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
    Date: TP.wc.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))));
}

function DriverTab(props) {
  var Driver = props.Data;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, Driver.map(function (driver) {
    return __jsx("div", {
      key: driver.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["TplistHeaderRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, driver.name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "License State: ", driver.license.state)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "License Exp: \xA0", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.license.exp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      className: "ml-5 my-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
      bordered: true,
      className: "w-75 shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("tr", {
      className: "bg-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Training"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Company"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Exp date"))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, driver.firstaid.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, driver.firstaid.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.firstaid.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, driver.cpr.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, driver.cpr.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.cpr.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, driver.defdriv.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, driver.defdriv.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.defdriv.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, driver.pass.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, driver.pass.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.pass.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
      bordered: true,
      className: "w-75 shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("tr", {
      className: "bg-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Screening"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Exp date"))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, driver.drugscreen.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.drugscreen.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, driver.background.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.background.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, driver.mvr.type), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: driver.mvr.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
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
      lineNumber: 189
    },
    __self: this
  }, Vehicle.map(function (vehicle) {
    return __jsx("div", {
      key: vehicle.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["TplistHeaderRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Number: ", vehicle.number)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Vehicle brand: ", vehicle.brand)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "Vehicle type: ", vehicle.type)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_13__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Year: ", vehicle.year))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
      className: "ml-5 my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("div", {
      className: "d-inline-block h-25 m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Registration State:\xA0", __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, vehicle.registration.state)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Exp date: ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: vehicle.registration.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("div", {
      className: "d-inline-block h-25 m-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "Inspection:"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "Exp date: ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["DateCheck"], {
      Date: vehicle.inspection.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }))))));
  }));
}

function Networkinfo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("h1", {
    className: "mt-5 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Network Summary"), __jsx("h3", {
    className: "mt-2 mb-5 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Report Date: 09/22/2019"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "px-5 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("tbody", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "All Regions")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Total Providers:"), __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, networkdata.length)), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Amb",
    Value1: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "WCHR",
    Value1: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Stretcher",
    Value1: "Yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Central")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "Total Providers:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "Central",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
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
      lineNumber: 286
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
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
      lineNumber: 296
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
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
      lineNumber: 306
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "4100854192",
    __self: this
  }, ".jsx-4100854192{text-align:center;width:70px;}th.jsx-4100854192{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyVG9DLEFBR21ELEFBS3ZCLGNBQUMsSUFKZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgQ3VzdG9tSnVtYm8sIEN1c3RvbVRhYnMsIERhdGVDaGVjaywgVHBsaXN0SGVhZGVyUm93LCBJbmZvRmllbGQsIE5ldHdvcmtEYXRhRmlsdGVyLFxyXG4gICAgQ29tcGxEYXRhRmlsdGVyLCBQZXJjZW50Q2FsYyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tQ29tcG9uZW50cydcclxuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgXHJcbiAgICBSb3csIENvbCwgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgTmV0d29ya0xpc3QgZnJvbSAnLi9wcm92aWRlcl9kYXRhL25ldHdvcmtUYWJsZS5qcydcclxuLy9pbXBvcnQgQ29tcGxpYW5jZVRhYmxlIGZyb20gJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlclN0YXRzLmpzJ1xyXG4vL2ltcG9ydCBOZXR3b3JraW5mbyBmcm9tICcuL3Byb3ZpZGVyX2RhdGEvTmV0d29ya0luZm8uanMnXHJcbmltcG9ydCB7IFRwbGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvanN4c3R5bGVzJ1xyXG5cclxuXHJcbnZhciB0cGRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvY29tcGFueS5qc29uJyk7XHJcbnZhciB2ZWhkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL3ZlaGljbGUuanNvbicpO1xyXG52YXIgZHJkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL2RyaXZlci5qc29uJyk7XHJcbnZhciBuZXR3b3JrZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9uZXR3b3JrLmpzb24nKTtcclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxyXG4qICAgQ29tcG9uZW50cyBmb3IgY2xhc3MgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIFByb3ZpZGVyRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnVcclxuICAgICAgICAgICAgbW9kaWZpZXJzPXt7XHJcbiAgICAgICAgICAgICAgICBzZXRNYXhIZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiA4OTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm46IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLnN0eWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIwMCAgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICctMTVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dHBkYXRhLm1hcChUUCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQnRuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17VFAuY29tcGFueX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0UHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtUUC5jb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1RQLmNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21wYW55VGFiKHByb3BzKSB7XHJcbiAgICBsZXQgVFAgPSBwcm9wcy5EYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHNoYWRvd1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC00IHBsLTRcIj48Yj5Qcm92aWRlcjo8L2I+IHtUUC5jb21wYW55fTwvcD5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48Yj5BZGRyZXNzOjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD57VFAuYWRkcmVzczF9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD57VFAuYWRkcmVzczJ9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPjxiPkNvbnRhY3QgaW5mbzo8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+UGhvbmU6PC9iPiB7VFAucGhvbmV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FbWFpbDo8L2I+IHtUUC5lbWFpbH08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtNCBwbC00XCI+PGI+SW5zdXJhbmNlOjwvYj48L3A+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5UeXBlOjwvYj4ge1RQLmdsLnR5cGV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5Db21wYW55OjwvYj4ge1RQLmdsLmNvbXBhbnl9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FeHAgRGF0ZTo8L2I+IDxEYXRlQ2hlY2sgRGF0ZT17VFAuZ2wuZW5kfSAvPjwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPlR5cGU6PC9iPiB7VFAudmVoLnR5cGV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5Db21wYW55OjwvYj4ge1RQLnZlaC5jb21wYW55fTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+RXhwIERhdGU6PC9iPiA8RGF0ZUNoZWNrIERhdGU9e1RQLnZlaC5lbmR9IC8+PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+VHlwZTo8L2I+IHtUUC53Yy50eXBlfTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+Q29tcGFueTo8L2I+IHtUUC53Yy5jb21wYW55fTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+RXhwIERhdGU6PC9iPiA8RGF0ZUNoZWNrIERhdGU9e1RQLndjLmVuZH0gLz48L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAgXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRHJpdmVyVGFiKHByb3BzKSB7XHJcbiAgICBsZXQgRHJpdmVyID0gcHJvcHMuRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtEcml2ZXIubWFwKGRyaXZlciA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZHJpdmVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntkcml2ZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpY2Vuc2UgU3RhdGU6IHtkcml2ZXIubGljZW5zZS5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e1RwbGlzdC5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17VHBsaXN0LlZhbHVlfT5MaWNlbnNlIEV4cDogJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDaGVjayBEYXRlPXtkcml2ZXIubGljZW5zZS5leHB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWwtNSBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYm9yZGVyZWQgY2xhc3NOYW1lPVwidy03NSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRyYWluaW5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wYW55PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHAgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmZpcnN0YWlkLnR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmZpcnN0YWlkLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5maXJzdGFpZC5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5jcHIudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuY3ByLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5jcHIuZW5kfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZGVmZHJpdi50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5kZWZkcml2LmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5kZWZkcml2LmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLnBhc3MudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIucGFzcy5jb21wYW55fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIucGFzcy5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJlZCBjbGFzc05hbWU9XCJ3LTc1IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2NyZWVuaW5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHAgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmRydWdzY3JlZW4udHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmRydWdzY3JlZW4uZW5kfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuYmFja2dyb3VuZC50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIuYmFja2dyb3VuZC5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5tdnIudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLm12ci5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZlaGljbGVUYWIocHJvcHMpIHtcclxuICAgIGxldCBWZWhpY2xlID0gcHJvcHMuRGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7VmVoaWNsZS5tYXAodmVoaWNsZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dmVoaWNsZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRwbGlzdEhlYWRlclJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5OdW1iZXI6IHt2ZWhpY2xlLm51bWJlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlaGljbGUgYnJhbmQ6IHt2ZWhpY2xlLmJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlaGljbGUgdHlwZToge3ZlaGljbGUudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e1RwbGlzdC5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17VHBsaXN0LlZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZZWFyOiB7dmVoaWNsZS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RwbGlzdEhlYWRlclJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1sLTUgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBoLTI1IG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5SZWdpc3RyYXRpb24gU3RhdGU6Jm5ic3A7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3ZlaGljbGUucmVnaXN0cmF0aW9uLnN0YXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHAgZGF0ZTogPERhdGVDaGVjayBEYXRlPXt2ZWhpY2xlLnJlZ2lzdHJhdGlvbi5lbmR9IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgaC0yNSBtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SW5zcGVjdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cCBkYXRlOiA8RGF0ZUNoZWNrIERhdGU9e3ZlaGljbGUuaW5zcGVjdGlvbi5lbmR9IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTmV0d29ya2luZm8oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC01IHRleHQtY2VudGVyXCI+TmV0d29yayBTdW1tYXJ5PC9oMT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTIgbWItNSB0ZXh0LWNlbnRlclwiPlJlcG9ydCBEYXRlOiAwOS8yMi8yMDE5PC9oMz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNSBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5BbGwgUmVnaW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57bmV0d29ya2RhdGEubGVuZ3RofTwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ0FtYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1dDSFInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1N0cmV0Y2hlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5DZW50cmFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdDZW50cmFsJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnQ2VudHJhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnQW1iJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0NlbnRyYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ1dDSFInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdDZW50cmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdTdHJldGNoZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnaDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNSBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5Tb3V0aFdlc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnQW1iJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnU3RyZXRjaGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkVhc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0Vhc3QnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdFYXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdBbWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnRWFzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0Vhc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ1N0cmV0Y2hlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnaDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ29tcGxpYW5jZVRhYmxlKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gdHBkYXRhLmZpbHRlcih0cGRhdGEgPT4gdHBkYXRhLmNvbXBhbnkpLmxlbmd0aDtcclxuICAgIGNvbnN0IGRyaXZlcnMgPSBkcmRhdGEuZmlsdGVyKGRyZGF0YSA9PiBkcmRhdGEuaWQpLmxlbmd0aDtcclxuICAgIGNvbnN0IHZlaGljbGVzID0gdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLmlkKS5sZW5ndGg7XHJcbiAgICBjb25zdCByZXBvcnRkYXRlID0gXCIyMDE5LTA5LTIyXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNVwiPkNvbXBsaWFuY2UgU3VtbWFyeTwvaDI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5JbnN1cmFuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIFByb3ZpZGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm92aWRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkV4cGlyZWQgR0wgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2dsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBHTCBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdnbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7cHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FeHBpcmVkIFZlaGljbGUgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3ZlaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZSBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICd2ZWgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3djJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3RwZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnd2MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlZlaGljbGVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBWZWhpY2xlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2ZWhpY2xlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBSZWdpc3RyYXRpb25zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgTm9uLUNvbXBsaWFudCBSZWdpc3RyYXRpb25zOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBJbnNwZWN0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3ZlaGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2luc3BlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JSBOb24tQ29tcGxpYW50IEluc3BlY3Rpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt2ZWhkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdpbnNwZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TnVtYmVyIG9mIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhkYXRhID0+IHZlaGRhdGEucmVnZXhwIDwgcmVwb3J0ZGF0ZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLnJlZ2V4cCA8IHJlcG9ydGRhdGUgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIHZlaGljbGVzICogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyAnJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJpdmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPk51bWJlciBvZiBEcml2ZXJzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRyaXZlciBDb21wbGlhbmNlIENhdGFnb3JpZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBFeHBpcmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+JSBOb24tQ29tcGxpYW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxpY2Vuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2xpY2Vuc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZXhwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdsaWNlbnNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2V4cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RHJ1ZyBTY3JlZW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2RydWdzY3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkcnVnc2NyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWNrZ3JvdW5kIENoZWNrPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdiYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TVZSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZpcnN0IEFpZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZmlyc3RhaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdmaXJzdGFpZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q1BSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRlZmVuc2l2ZSBEcml2aW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkZWZkcml2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZGVmZHJpdidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGFzc2VuZ2VyIFNlbnNpdGl2aXR5IChQQVNTKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncGFzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3Bhc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPk51bWJlciBvZiBOb24tQ29tcGxpYW50IERyaXZlcnM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maWx0ZXIoZHJkYXRhID0+IGRyZGF0YS5saWNlbnNlLmV4cCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmZpcnN0YWlkLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5kZWZkcml2LmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLnBhc3MuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5iYWNrZ3JvdW5kLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLm12ci5lbmQgPCByZXBvcnRkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5QZXJjZW50IE5vbi1Db21wbGlhbnQgRHJpdmVyczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZHJkYXRhLmZpbHRlcihkcmRhdGEgPT4gZHJkYXRhLmxpY2Vuc2UuZXhwIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maXJzdGFpZC5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmRlZmRyaXYuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5wYXNzLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmJhY2tncm91bmQuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5tdnIuZW5kIDwgcmVwb3J0ZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGgpIC8gZHJpdmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICogMTAwKSArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKiBcclxuKiAgIE1haW4gQ2xhc3MgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuY2xhc3MgUHJvdmlkZXJDb21wbGlhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnQUNDRUwnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQcm92aWRlciA9IHRoaXMuc2VsZWN0UHJvdmlkZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsaWNrRHJvcGRvd24gPSB0aGlzLmNsaWNrRHJvcGRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLlByb3ZpZGVyRHJvcGRvd24gPSBQcm92aWRlckRyb3Bkb3duLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjbGlja0Ryb3Bkb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duT3BlbjogIXByZXZTdGF0ZS5kcm9wZG93bk9wZW5cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0UHJvdmlkZXIoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdHBmaWx0ZXIgPSB0cGRhdGEuZmlsdGVyKHRwZGF0YSA9PiB0cGRhdGEuY29tcGFueSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdHAgPSB0cGZpbHRlclswXTtcclxuICAgICAgICBjb25zdCBkcmZpbHRlciA9IGRyZGF0YS5maWx0ZXIoZHJkYXRhID0+IGRyZGF0YS5jb21wYW55ID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2ZWhmaWx0ZXIgPSB2ZWhkYXRhLmZpbHRlcih2ZWhkYXRhID0+IHZlaGRhdGEuY29tcGFueSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+UHJvdmlkZXIgQ29tcGxpYW5jZSBSZXBvcnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZXBvcnQgRGF0ZTogOS8yMi8yMDE5PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBsaWFuY2VUYWJsZSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXJcIj5Db21wbGlhbmNlIGJ5IFByb3ZpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBpc09wZW49e3RoaXMuc3RhdGUuZHJvcGRvd25PcGVufSBcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMuY2xpY2tEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggbWwtNSBteS01IGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXIgTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuUHJvdmlkZXJEcm9wZG93bigpfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkRhdGVzIGluIDxzcGFuIGNsYXNzTmFtZT1cImJnLXdhcm5pbmcgdGV4dC13aGl0ZVwiPlllbGxvdzwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJlIGFib3V0IHRvIGV4cGlyZS48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi01XCI+RGF0ZXMgaW4gIDxzcGFuIGNsYXNzTmFtZT1cImJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+UmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtuZWVkIGltbWVkaWF0ZSBhdHRlbnRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueVRhYiBEYXRhID0ge3RwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiMU5hbWUgPSAnRHJpdmVycydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjJOYW1lID0gJ1ZlaGljbGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiMUNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyaXZlclRhYiBEYXRhID0ge2RyZmlsdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiMkNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlaGljbGVUYWIgRGF0YSA9IHt2ZWhmaWx0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJEYXRhKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEN1c3RvbUp1bWJvXHJcbiAgICAgICAgICAgICAgICBUaXRsZT1cIlByb3ZpZGVyIExpc3RcIlxyXG4gICAgICAgICAgICAgICAgSW1nVXJsPVwibm9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMVN0eWxlPSdsZWFkIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjE9XCJ0aGlzIGlzIGRhdGEgaW1wb3J0ZWQgZnJvbSBsb2NhbCBqc29uIGZpbGVzLiBJdCB3aWxsIHJlY3JlYXRlIHRyYWNraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRzIEkgY3JlYXRlZCBhdCBvbmUgb2YgbXkgcHJldmlvdXMgam9icy5cIlxyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjJTdHlsZT0ndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMj1cIkFsbCBpbmZvcm1hdGlvbiBoYXMgYmVlbiByYW5kb21seSBnZW5lcmF0ZWQgZnJvbSBhIEpTT04gR2VuZXJhdG9yIHRvb2wgXHJcbiAgICAgICAgICAgICAgICBmb3VuZCBvbmxpbmUuIFRoaXMgaW5jbHVkZXMgbmFtZXMsIGVtYWlscywgcGhvbmUgbnVtYmVycywgYWRkcmVzc2VzIGFuZCBkYXRlcy5cIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEN1c3RvbVRhYnNcclxuICAgICAgICAgICAgICAgIFRhYjFOYW1lID0gJ05ldHdvcmsnXHJcbiAgICAgICAgICAgICAgICBUYWIyTmFtZSA9ICdDb21wbGlhbmNlJ1xyXG4gICAgICAgICAgICAgICAgVGFiMUNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ldHdvcmtpbmZvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXR3b3JrTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgVGFiMkNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb3ZpZGVyQ29tcGxpYW5jZSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJEYXRhOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Mark\\\\Desktop\\\\newtest\\\\my-page\\\\pages\\\\providerData.js */"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    className: "px-5 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("tbody", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "SouthWest")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, "Total Providers:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "SouthWest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
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
      lineNumber: 344
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
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
      lineNumber: 354
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
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
      lineNumber: 364
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "East")), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, __jsx("th", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "Total Providers:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["NetworkDataFilter"], {
    Info: networkdata,
    Filter1: "Region",
    Value1: "East",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Providers with Ambulatory:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
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
      lineNumber: 385
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "Providers with Wheelchair:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
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
      lineNumber: 395
    },
    __self: this
  }))), __jsx("tr", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, "Providers with Stretcher:"), __jsx("td", {
    className: "jsx-4100854192",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
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
      lineNumber: 405
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "4100854192",
    __self: this
  }, ".jsx-4100854192{text-align:center;width:70px;}th.jsx-4100854192{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Wm9DLEFBR21ELEFBS3ZCLGNBQUMsSUFKZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgQ3VzdG9tSnVtYm8sIEN1c3RvbVRhYnMsIERhdGVDaGVjaywgVHBsaXN0SGVhZGVyUm93LCBJbmZvRmllbGQsIE5ldHdvcmtEYXRhRmlsdGVyLFxyXG4gICAgQ29tcGxEYXRhRmlsdGVyLCBQZXJjZW50Q2FsYyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9tQ29tcG9uZW50cydcclxuaW1wb3J0IHsgRHJvcGRvd24sIERyb3Bkb3duVG9nZ2xlLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbSwgXHJcbiAgICBSb3csIENvbCwgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgTmV0d29ya0xpc3QgZnJvbSAnLi9wcm92aWRlcl9kYXRhL25ldHdvcmtUYWJsZS5qcydcclxuLy9pbXBvcnQgQ29tcGxpYW5jZVRhYmxlIGZyb20gJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlclN0YXRzLmpzJ1xyXG4vL2ltcG9ydCBOZXR3b3JraW5mbyBmcm9tICcuL3Byb3ZpZGVyX2RhdGEvTmV0d29ya0luZm8uanMnXHJcbmltcG9ydCB7IFRwbGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvanN4c3R5bGVzJ1xyXG5cclxuXHJcbnZhciB0cGRhdGEgPSByZXF1aXJlKCcuL3Byb3ZpZGVyX2RhdGEvY29tcGFueS5qc29uJyk7XHJcbnZhciB2ZWhkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL3ZlaGljbGUuanNvbicpO1xyXG52YXIgZHJkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL2RyaXZlci5qc29uJyk7XHJcbnZhciBuZXR3b3JrZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9uZXR3b3JrLmpzb24nKTtcclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxyXG4qICAgQ29tcG9uZW50cyBmb3IgY2xhc3MgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIFByb3ZpZGVyRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnVcclxuICAgICAgICAgICAgbW9kaWZpZXJzPXt7XHJcbiAgICAgICAgICAgICAgICBzZXRNYXhIZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiA4OTAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm46IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLnN0eWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDIwMCAgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICctMTVweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dHBkYXRhLm1hcChUUCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQnRuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17VFAuY29tcGFueX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0UHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtUUC5jb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1RQLmNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21wYW55VGFiKHByb3BzKSB7XHJcbiAgICBsZXQgVFAgPSBwcm9wcy5EYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0IHNoYWRvd1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC00IHBsLTRcIj48Yj5Qcm92aWRlcjo8L2I+IHtUUC5jb21wYW55fTwvcD5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48Yj5BZGRyZXNzOjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD57VFAuYWRkcmVzczF9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD57VFAuYWRkcmVzczJ9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtMlwiPjxiPkNvbnRhY3QgaW5mbzo8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+UGhvbmU6PC9iPiB7VFAucGhvbmV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FbWFpbDo8L2I+IHtUUC5lbWFpbH08L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtNCBwbC00XCI+PGI+SW5zdXJhbmNlOjwvYj48L3A+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5UeXBlOjwvYj4ge1RQLmdsLnR5cGV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5Db21wYW55OjwvYj4ge1RQLmdsLmNvbXBhbnl9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5FeHAgRGF0ZTo8L2I+IDxEYXRlQ2hlY2sgRGF0ZT17VFAuZ2wuZW5kfSAvPjwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5mb0ZpZWxkPjxiPlR5cGU6PC9iPiB7VFAudmVoLnR5cGV9PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm9GaWVsZD48Yj5Db21wYW55OjwvYj4ge1RQLnZlaC5jb21wYW55fTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+RXhwIERhdGU6PC9iPiA8RGF0ZUNoZWNrIERhdGU9e1RQLnZlaC5lbmR9IC8+PC9JbmZvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+VHlwZTo8L2I+IHtUUC53Yy50eXBlfTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+Q29tcGFueTo8L2I+IHtUUC53Yy5jb21wYW55fTwvSW5mb0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvRmllbGQ+PGI+RXhwIERhdGU6PC9iPiA8RGF0ZUNoZWNrIERhdGU9e1RQLndjLmVuZH0gLz48L0luZm9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPiAgXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRHJpdmVyVGFiKHByb3BzKSB7XHJcbiAgICBsZXQgRHJpdmVyID0gcHJvcHMuRGF0YTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtEcml2ZXIubWFwKGRyaXZlciA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZHJpdmVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXtUcGxpc3QuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntkcml2ZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpY2Vuc2UgU3RhdGU6IHtkcml2ZXIubGljZW5zZS5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e1RwbGlzdC5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17VHBsaXN0LlZhbHVlfT5MaWNlbnNlIEV4cDogJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDaGVjayBEYXRlPXtkcml2ZXIubGljZW5zZS5leHB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHBsaXN0SGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibWwtNSBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYm9yZGVyZWQgY2xhc3NOYW1lPVwidy03NSBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRyYWluaW5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db21wYW55PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHAgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmZpcnN0YWlkLnR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmZpcnN0YWlkLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5maXJzdGFpZC5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5jcHIudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuY3ByLmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5jcHIuZW5kfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuZGVmZHJpdi50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5kZWZkcml2LmNvbXBhbnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RGF0ZUNoZWNrIERhdGU9e2RyaXZlci5kZWZkcml2LmVuZH0vPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLnBhc3MudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIucGFzcy5jb21wYW55fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIucGFzcy5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJlZCBjbGFzc05hbWU9XCJ3LTc1IHNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2NyZWVuaW5nPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHAgZGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZHJpdmVyLmRydWdzY3JlZW4udHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLmRydWdzY3JlZW4uZW5kfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkcml2ZXIuYmFja2dyb3VuZC50eXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PERhdGVDaGVjayBEYXRlPXtkcml2ZXIuYmFja2dyb3VuZC5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlci5tdnIudHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEYXRlQ2hlY2sgRGF0ZT17ZHJpdmVyLm12ci5lbmR9Lz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZlaGljbGVUYWIocHJvcHMpIHtcclxuICAgIGxldCBWZWhpY2xlID0gcHJvcHMuRGF0YTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7VmVoaWNsZS5tYXAodmVoaWNsZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dmVoaWNsZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRwbGlzdEhlYWRlclJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5OdW1iZXI6IHt2ZWhpY2xlLm51bWJlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlaGljbGUgYnJhbmQ6IHt2ZWhpY2xlLmJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17VHBsaXN0LlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuVmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlaGljbGUgdHlwZToge3ZlaGljbGUudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e1RwbGlzdC5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17VHBsaXN0LlZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZZWFyOiB7dmVoaWNsZS55ZWFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1RwbGlzdEhlYWRlclJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1sLTUgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBoLTI1IG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5SZWdpc3RyYXRpb24gU3RhdGU6Jm5ic3A7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3ZlaGljbGUucmVnaXN0cmF0aW9uLnN0YXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FeHAgZGF0ZTogPERhdGVDaGVjayBEYXRlPXt2ZWhpY2xlLnJlZ2lzdHJhdGlvbi5lbmR9IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgaC0yNSBtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SW5zcGVjdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cCBkYXRlOiA8RGF0ZUNoZWNrIERhdGU9e3ZlaGljbGUuaW5zcGVjdGlvbi5lbmR9IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTmV0d29ya2luZm8oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC01IHRleHQtY2VudGVyXCI+TmV0d29yayBTdW1tYXJ5PC9oMT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTIgbWItNSB0ZXh0LWNlbnRlclwiPlJlcG9ydCBEYXRlOiAwOS8yMi8yMDE5PC9oMz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNSBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5BbGwgUmVnaW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57bmV0d29ya2RhdGEubGVuZ3RofTwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ0FtYidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1dDSFInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1N0cmV0Y2hlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5DZW50cmFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdDZW50cmFsJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnQ2VudHJhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnQW1iJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0NlbnRyYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ1dDSFInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdDZW50cmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdTdHJldGNoZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnaDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNSBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwic2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj5Tb3V0aFdlc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnQW1iJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ1NvdXRoV2VzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnU3RyZXRjaGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUyID0gJ1llcycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiMlwiPkVhc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0Vhc3QnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48TmV0d29ya0RhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7bmV0d29ya2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ1JlZ2lvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9ICdFYXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMiA9ICdBbWInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTIgPSAnWWVzJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PE5ldHdvcmtEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge25ldHdvcmtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdSZWdpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSAnRWFzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjIgPSAnV0NIUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxOZXR3b3JrRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtuZXR3b3JrZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnUmVnaW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0gJ0Vhc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIyID0gJ1N0cmV0Y2hlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMiA9ICdZZXMnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnaDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ29tcGxpYW5jZVRhYmxlKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gdHBkYXRhLmZpbHRlcih0cGRhdGEgPT4gdHBkYXRhLmNvbXBhbnkpLmxlbmd0aDtcclxuICAgIGNvbnN0IGRyaXZlcnMgPSBkcmRhdGEuZmlsdGVyKGRyZGF0YSA9PiBkcmRhdGEuaWQpLmxlbmd0aDtcclxuICAgIGNvbnN0IHZlaGljbGVzID0gdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLmlkKS5sZW5ndGg7XHJcbiAgICBjb25zdCByZXBvcnRkYXRlID0gXCIyMDE5LTA5LTIyXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNVwiPkNvbXBsaWFuY2UgU3VtbWFyeTwvaDI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5JbnN1cmFuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIFByb3ZpZGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm92aWRlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkV4cGlyZWQgR0wgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2dsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBHTCBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdnbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7cHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5FeHBpcmVkIFZlaGljbGUgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3ZlaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZSBwb2xpY2llczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dHBkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICd2ZWgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt0cGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3djJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgbm9uLWNvbXBsaWFudCBXb3JrZXJzIENvbXAgcG9saWNpZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3RwZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnd2MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge3Byb3ZpZGVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlZlaGljbGVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBWZWhpY2xlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2ZWhpY2xlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBSZWdpc3RyYXRpb25zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPiUgTm9uLUNvbXBsaWFudCBSZWdpc3RyYXRpb25zOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7dmVoZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RXhwaXJlZCBJbnNwZWN0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge3ZlaGRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2luc3BlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JSBOb24tQ29tcGxpYW50IEluc3BlY3Rpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHt2ZWhkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdpbnNwZWN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHt2ZWhpY2xlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TnVtYmVyIG9mIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhkYXRhID0+IHZlaGRhdGEucmVnZXhwIDwgcmVwb3J0ZGF0ZSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj4lIG5vbi1jb21wbGlhbnQgVmVoaWNsZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5maWx0ZXIodmVoZGF0YSA9PiB2ZWhkYXRhLnJlZ2V4cCA8IHJlcG9ydGRhdGUgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoZGF0YS5pbnNwZWN0aW9uLmVuZCA8IHJlcG9ydGRhdGUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAvIHZlaGljbGVzICogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyAnJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIiBjbGFzc05hbWU9XCJzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJpdmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPk51bWJlciBvZiBEcml2ZXJzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RyaXZlcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRyaXZlciBDb21wbGlhbmNlIENhdGFnb3JpZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBFeHBpcmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+JSBOb24tQ29tcGxpYW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxpY2Vuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2xpY2Vuc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZXhwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdsaWNlbnNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2V4cCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RHJ1ZyBTY3JlZW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBsRGF0YUZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ2RydWdzY3JlZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkcnVnc2NyZWVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGl2aWRlciA9IHtkcml2ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYWNrZ3JvdW5kIENoZWNrPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdiYWNrZ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnYmFja2dyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TVZSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdtdnInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkZpcnN0IEFpZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZmlyc3RhaWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdmaXJzdGFpZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q1BSPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyY2VudENhbGNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdjcHInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRlZmVuc2l2ZSBEcml2aW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wbERhdGFGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm8gPSB7ZHJkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMSA9ICdkZWZkcml2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyMWNoaWxkID0gJ2VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbHVlMSA9IHtyZXBvcnRkYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmNlbnRDYWxjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAnZGVmZHJpdidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpdmlkZXIgPSB7ZHJpdmVyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UGFzc2VuZ2VyIFNlbnNpdGl2aXR5IChQQVNTKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGxEYXRhRmlsdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvID0ge2RyZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjEgPSAncGFzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlcjFjaGlsZCA9ICdlbmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZTEgPSB7cmVwb3J0ZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJjZW50Q2FsY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5mbyA9IHtkcmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxID0gJ3Bhc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIxY2hpbGQgPSAnZW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsdWUxID0ge3JlcG9ydGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyID0ge2RyaXZlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCIyXCIgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPk51bWJlciBvZiBOb24tQ29tcGxpYW50IERyaXZlcnM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maWx0ZXIoZHJkYXRhID0+IGRyZGF0YS5saWNlbnNlLmV4cCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmZpcnN0YWlkLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5kZWZkcml2LmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLnBhc3MuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5iYWNrZ3JvdW5kLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLm12ci5lbmQgPCByZXBvcnRkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5QZXJjZW50IE5vbi1Db21wbGlhbnQgRHJpdmVyczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZHJkYXRhLmZpbHRlcihkcmRhdGEgPT4gZHJkYXRhLmxpY2Vuc2UuZXhwIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5maXJzdGFpZC5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmNwci5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmRlZmRyaXYuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5wYXNzLmVuZCA8IHJlcG9ydGRhdGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmRhdGEuZHJ1Z3NjcmVlbi5lbmQgPCByZXBvcnRkYXRlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJkYXRhLmJhY2tncm91bmQuZW5kIDwgcmVwb3J0ZGF0ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyZGF0YS5tdnIuZW5kIDwgcmVwb3J0ZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGgpIC8gZHJpdmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICogMTAwKSArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKiBcclxuKiAgIE1haW4gQ2xhc3MgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuY2xhc3MgUHJvdmlkZXJDb21wbGlhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duT3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnQUNDRUwnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQcm92aWRlciA9IHRoaXMuc2VsZWN0UHJvdmlkZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsaWNrRHJvcGRvd24gPSB0aGlzLmNsaWNrRHJvcGRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLlByb3ZpZGVyRHJvcGRvd24gPSBQcm92aWRlckRyb3Bkb3duLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjbGlja0Ryb3Bkb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duT3BlbjogIXByZXZTdGF0ZS5kcm9wZG93bk9wZW5cclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0UHJvdmlkZXIoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdHBmaWx0ZXIgPSB0cGRhdGEuZmlsdGVyKHRwZGF0YSA9PiB0cGRhdGEuY29tcGFueSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgdHAgPSB0cGZpbHRlclswXTtcclxuICAgICAgICBjb25zdCBkcmZpbHRlciA9IGRyZGF0YS5maWx0ZXIoZHJkYXRhID0+IGRyZGF0YS5jb21wYW55ID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICBjb25zdCB2ZWhmaWx0ZXIgPSB2ZWhkYXRhLmZpbHRlcih2ZWhkYXRhID0+IHZlaGRhdGEuY29tcGFueSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+UHJvdmlkZXIgQ29tcGxpYW5jZSBSZXBvcnQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZXBvcnQgRGF0ZTogOS8yMi8yMDE5PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENvbXBsaWFuY2VUYWJsZSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTMgdGV4dC1jZW50ZXJcIj5Db21wbGlhbmNlIGJ5IFByb3ZpZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBpc09wZW49e3RoaXMuc3RhdGUuZHJvcGRvd25PcGVufSBcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMuY2xpY2tEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggbWwtNSBteS01IGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjYXJldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXIgTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuUHJvdmlkZXJEcm9wZG93bigpfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkRhdGVzIGluIDxzcGFuIGNsYXNzTmFtZT1cImJnLXdhcm5pbmcgdGV4dC13aGl0ZVwiPlllbGxvdzwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJlIGFib3V0IHRvIGV4cGlyZS48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi01XCI+RGF0ZXMgaW4gIDxzcGFuIGNsYXNzTmFtZT1cImJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+UmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtuZWVkIGltbWVkaWF0ZSBhdHRlbnRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcGFueVRhYiBEYXRhID0ge3RwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tVGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiMU5hbWUgPSAnRHJpdmVycydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYjJOYW1lID0gJ1ZlaGljbGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiMUNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyaXZlclRhYiBEYXRhID0ge2RyZmlsdGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiMkNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlaGljbGVUYWIgRGF0YSA9IHt2ZWhmaWx0ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJEYXRhKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEN1c3RvbUp1bWJvXHJcbiAgICAgICAgICAgICAgICBUaXRsZT1cIlByb3ZpZGVyIExpc3RcIlxyXG4gICAgICAgICAgICAgICAgSW1nVXJsPVwibm9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMVN0eWxlPSdsZWFkIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjE9XCJ0aGlzIGlzIGRhdGEgaW1wb3J0ZWQgZnJvbSBsb2NhbCBqc29uIGZpbGVzLiBJdCB3aWxsIHJlY3JlYXRlIHRyYWNraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkc2hlZXRzIEkgY3JlYXRlZCBhdCBvbmUgb2YgbXkgcHJldmlvdXMgam9icy5cIlxyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjJTdHlsZT0ndGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMj1cIkFsbCBpbmZvcm1hdGlvbiBoYXMgYmVlbiByYW5kb21seSBnZW5lcmF0ZWQgZnJvbSBhIEpTT04gR2VuZXJhdG9yIHRvb2wgXHJcbiAgICAgICAgICAgICAgICBmb3VuZCBvbmxpbmUuIFRoaXMgaW5jbHVkZXMgbmFtZXMsIGVtYWlscywgcGhvbmUgbnVtYmVycywgYWRkcmVzc2VzIGFuZCBkYXRlcy5cIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEN1c3RvbVRhYnNcclxuICAgICAgICAgICAgICAgIFRhYjFOYW1lID0gJ05ldHdvcmsnXHJcbiAgICAgICAgICAgICAgICBUYWIyTmFtZSA9ICdDb21wbGlhbmNlJ1xyXG4gICAgICAgICAgICAgICAgVGFiMUNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ldHdvcmtpbmZvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXR3b3JrTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgVGFiMkNvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb3ZpZGVyQ29tcGxpYW5jZSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJEYXRhOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Mark\\\\Desktop\\\\newtest\\\\my-page\\\\pages\\\\providerData.js */")))));
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
      lineNumber: 440
    },
    __self: this
  }, __jsx("h2", {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "Compliance Summary"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, "Insurance")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, "Number of Providers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, providers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, "Expired GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: tpdata,
    Filter1: "gl",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, "% non-compliant GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
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
      lineNumber: 467
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, "Expired Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: tpdata,
    Filter1: "veh",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, "% non-compliant Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
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
      lineNumber: 490
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, "Expired Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: tpdata,
    Filter1: "wc",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, "% non-compliant Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
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
      lineNumber: 513
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, "Vehicles")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, "Number of Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, vehicles)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, "Expired Registrations"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: vehdata,
    Filter1: "registration",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, "% Non-Compliant Registrations:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
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
      lineNumber: 543
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "Expired Inspections"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: vehdata,
    Filter1: "inspection",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, "% Non-Compliant Inspection:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
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
      lineNumber: 566
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }, "Number of non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }, vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "% non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, Math.floor(vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length / vehicles * 100) + '%'))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }, __jsx("th", {
    colSpan: "3",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, "Drivers")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }, "Number of Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, drivers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, "Driver Compliance Catagories"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614
    },
    __self: this
  }, "Total Expired"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, "% Non-Compliant")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  }, "License"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "license",
    Filter1child: "exp",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
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
      lineNumber: 628
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }, "Drug Screen"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "drugscreen",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
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
      lineNumber: 648
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, "Background Check"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "background",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
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
      lineNumber: 668
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, "MVR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "mvr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
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
      lineNumber: 688
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }, "First Aid"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "firstaid",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
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
      lineNumber: 708
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718
    },
    __self: this
  }, "CPR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "cpr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
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
      lineNumber: 728
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738
    },
    __self: this
  }, "Defensive Driving"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "defdriv",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747
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
      lineNumber: 748
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  }, "Passenger Sensitivity (PASS)"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["ComplDataFilter"], {
    Info: drdata,
    Filter1: "pass",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
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
      lineNumber: 768
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }, "Number of Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }, "Percent Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
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
          lineNumber: 854
        },
        __self: this
      }, __jsx("div", {
        className: "my-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856
        },
        __self: this
      }, "Provider Compliance Report"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857
        },
        __self: this
      }, "Report Date: 9/22/2019")), __jsx(ComplianceTable, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 859
        },
        __self: this
      }), __jsx("h1", {
        className: "mt-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 860
        },
        __self: this
      }, "Compliance by Provider"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.clickDropdown,
        className: "d-flex ml-5 my-5 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 861
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        __self: this
      }, "Provider List"), this.ProviderDropdown()), __jsx("div", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 870
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871
        },
        __self: this
      }, "Dates in ", __jsx("span", {
        className: "bg-warning text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871
        },
        __self: this
      }, "Yellow"), "\xA0 are about to expire."), __jsx("h5", {
        className: "mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, "Dates in  ", __jsx("span", {
        className: "bg-danger text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, "Red"), "\xA0need immediate attention.")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 877
        },
        __self: this
      }, __jsx(CompanyTab, {
        Data: tp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 878
        },
        __self: this
      }), __jsx("div", {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["CustomTabs"], {
        Tab1Name: "Drivers",
        Tab2Name: "Vehicles",
        Tab1Content: __jsx(DriverTab, {
          Data: drfilter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 884
          },
          __self: this
        }),
        Tab2Content: __jsx(VehicleTab, {
          Data: vehfilter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 887
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        __self: this
      }))));
    }
  }]);

  return ProviderCompliance;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

function ProviderData() {
  return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918
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
      lineNumber: 919
    },
    __self: this
  }), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_10__["CustomTabs"], {
    Tab1Name: "Network",
    Tab2Name: "Compliance",
    Tab1Content: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934
      },
      __self: this
    }, __jsx(Networkinfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }), __jsx(_provider_data_networkTable_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    })),
    Tab2Content: __jsx(ProviderCompliance, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.adb62390aeb5ea87cb66.hot-update.js.map
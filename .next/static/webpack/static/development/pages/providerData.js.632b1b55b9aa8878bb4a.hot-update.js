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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _components_customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/customComponents */ "./components/customComponents.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _provider_data_networkTable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./provider_data/networkTable.js */ "./pages/provider_data/networkTable.js");
/* harmony import */ var _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/jsxstyles */ "./components/jsxstyles.js");







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




 //import ComplianceTable from './provider_data/providerStats.js'
//import Networkinfo from './provider_data/NetworkInfo.js'



var tpdata = __webpack_require__(/*! ./provider_data/company.json */ "./pages/provider_data/company.json");

var vehdata = __webpack_require__(/*! ./provider_data/vehicle.json */ "./pages/provider_data/vehicle.json");

var drdata = __webpack_require__(/*! ./provider_data/driver.json */ "./pages/provider_data/driver.json");
/* ***************************** 
*   Components for class       * 
*******************************/


function ProviderDropdown() {
  var _this = this;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["DropdownMenu"], {
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
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
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
  }, "Provider:"), " ", TP.company), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
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
  }, "Address:")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, TP.address1), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, TP.address2)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
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
  }, "Contact info:")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Phone:"), " ", TP.phone), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Insurance:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: " ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    className: "ml-2 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Type:"), " ", TP.gl.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Company:"), " ", TP.gl.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
    Date: TP.gl.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Type:"), " ", TP.veh.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Company:"), " ", TP.veh.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
    Date: TP.veh.end,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Type:"), " ", TP.wc.type), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Company:"), " ", TP.wc.company), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["InfoField"], {
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
  }, "Exp Date:"), " ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["TplistHeaderRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
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
    }, driver.name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "License State: ", driver.license.state)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "License Exp: \xA0", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
      Date: driver.license.exp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
      className: "ml-5 my-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
      Date: driver.pass.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
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
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["TplistHeaderRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
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
    }, "Number: ", vehicle.number)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Vehicle brand: ", vehicle.brand)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Vehicle type: ", vehicle.type)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx("p", {
      style: _components_jsxstyles__WEBPACK_IMPORTED_MODULE_12__["Tplist"].Value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Year: ", vehicle.year))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
      className: "ml-5 my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
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
    }, "Exp date: ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
      Date: vehicle.registration.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
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
    }, "Exp date: ", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["DateCheck"], {
      Date: vehicle.inspection.end,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }))))));
  }));
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
          lineNumber: 266
        },
        __self: this
      }, __jsx("div", {
        className: "my-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Provider Compliance Report"), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Report Date: 9/22/2019")), __jsx(ComplianceTable, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), __jsx("h1", {
        className: "mt-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Compliance by Provider"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.clickDropdown,
        className: "d-flex ml-5 my-5 justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["DropdownToggle"], {
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Provider List"), this.ProviderDropdown()), __jsx("div", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Dates in ", __jsx("span", {
        className: "bg-warning text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Yellow"), "\xA0 are about to expire."), __jsx("h5", {
        className: "mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Dates in  ", __jsx("span", {
        className: "bg-danger text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Red"), "\xA0need immediate attention.")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, __jsx(CompanyTab, {
        Data: tp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), __jsx("div", {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CustomTabs"], {
        Tab1Name: "Drivers",
        Tab2Name: "Vehicles",
        Tab1Content: __jsx(DriverTab, {
          Data: drfilter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }),
        Tab2Content: __jsx(VehicleTab, {
          Data: vehfilter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }))));
    }
  }]);

  return ProviderCompliance;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function ProviderData() {
  return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CustomJumbo"], {
    Title: "Provider List",
    ImgUrl: "noimage",
    Caption1Style: "lead text-center",
    Caption1: "this is data imported from local json files. It will recreate tracking\r spreadsheets I created at one of my previous jobs.",
    Caption2Style: "text-center",
    Caption2: "All information has been randomly generated from a JSON Generator tool \r found online. This includes names, emails, phone numbers, addresses and dates.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CustomTabs"], {
    Tab1Name: "Network",
    Tab2Name: "Compliance",
    Tab1Content: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, __jsx(_provider_data_networkTable_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    })),
    Tab2Content: __jsx(ProviderCompliance, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ })

})
//# sourceMappingURL=providerData.js.632b1b55b9aa8878bb4a.hot-update.js.map
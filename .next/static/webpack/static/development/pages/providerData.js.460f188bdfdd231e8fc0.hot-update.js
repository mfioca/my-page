webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/provider_data/ComplianceTable.js":
/*!************************************************!*\
  !*** ./pages/provider_data/ComplianceTable.js ***!
  \************************************************/
/*! exports provided: ComplDataFilter, PercentCalc, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplDataFilter", function() { return ComplDataFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentCalc", function() { return PercentCalc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\ComplianceTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var tpdata = __webpack_require__(/*! ./company.json */ "./pages/provider_data/company.json");

var vehdata = __webpack_require__(/*! ./vehicle.json */ "./pages/provider_data/vehicle.json");

var drdata = __webpack_require__(/*! ./driver.json */ "./pages/provider_data/driver.json");

function ComplDataFilter(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, Data.filter(function (Data) {
    return Data[Fone][Fonekey] < Vone;
  }).length);
}
function PercentCalc(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  var Divider = props.Divider;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, Math.floor(Data.filter(function (Data) {
    return Data[Fone][Fonekey] < Vone;
  }).length / Divider * 100) + '%');
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
      lineNumber: 47
    },
    __self: this
  }, __jsx("h2", {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Compliance Summary"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Insurance")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Number of Providers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, providers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Expired GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: tpdata,
    Filter1: "gl",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "% non-compliant GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: tpdata,
    Filter1: "gl",
    Filter1child: "end",
    Value1: reportdate,
    Divider: providers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Expired Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: tpdata,
    Filter1: "veh",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "% non-compliant Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: tpdata,
    Filter1: "veh",
    Filter1child: "end",
    Value1: reportdate,
    Divider: providers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Expired Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: tpdata,
    Filter1: "wc",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "% non-compliant Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: tpdata,
    Filter1: "wc",
    Filter1child: "end",
    Value1: reportdate,
    Divider: providers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Vehicles")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Number of Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, vehicles)), __jsx("tr", {
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
  }, "Expired Registrations"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: vehdata,
    Filter1: "registration",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "% Non-Compliant Registrations:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: vehdata,
    Filter1: "registration",
    Filter1child: "end",
    Value1: reportdate,
    Divider: vehicles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Expired Inspections"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: vehdata,
    Filter1: "inspection",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "% Non-Compliant Inspection:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: vehdata,
    Filter1: "inspection",
    Filter1child: "end",
    Value1: reportdate,
    Divider: vehicles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Number of non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "% non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, Math.floor(vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length / vehicles * 100) + '%'))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("th", {
    colSpan: "3",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Drivers")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "Number of Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, drivers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Driver Compliance Catagories"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Total Expired"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "% Non-Compliant")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "License"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "license",
    Filter1child: "exp",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "license",
    Filter1child: "exp",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Drug Screen"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "drugscreen",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "drugscreen",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Background Check"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "background",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "background",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "MVR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "mvr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "mvr",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "First Aid"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "firstaid",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "firstaid",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "CPR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "cpr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "cpr",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "Defensive Driving"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "defdriv",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "defdriv",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Passenger Sensitivity (PASS)"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "pass",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, __jsx(PercentCalc, {
    Info: drdata,
    Filter1: "pass",
    Filter1child: "end",
    Value1: reportdate,
    Divider: drivers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "Number of Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, "Percent Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, Math.floor(drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length / drivers * 100) + '%')))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ComplianceTable);

/***/ })

})
//# sourceMappingURL=providerData.js.460f188bdfdd231e8fc0.hot-update.js.map
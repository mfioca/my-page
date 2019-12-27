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

var networkdata = __webpack_require__(/*! ./network.json */ "./pages/provider_data/network.json"); //////////////////////////////////////////////////////////


function ComplDataFilter(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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
      lineNumber: 32
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
      lineNumber: 51
    },
    __self: this
  }, __jsx("h2", {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Compliance Summary"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Insurance")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Number of Providers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, providers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Expired GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: tpdata,
    Filter1: "gl",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "% non-compliant GL policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
      lineNumber: 78
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Expired Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: tpdata,
    Filter1: "veh",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "% non-compliant Vehicle policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
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
      lineNumber: 101
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Expired Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: tpdata,
    Filter1: "wc",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "% non-compliant Workers Comp policies"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
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
      lineNumber: 124
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("th", {
    colSpan: "2",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Vehicles")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Number of Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, vehicles)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Expired Registrations"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: vehdata,
    Filter1: "registration",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "% Non-Compliant Registrations:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
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
      lineNumber: 154
    },
    __self: this
  }))), __jsx("tr", {
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
  }, "Expired Inspections"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: vehdata,
    Filter1: "inspection",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "% Non-Compliant Inspection:"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
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
      lineNumber: 177
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Number of non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "% non-compliant Vehicles"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, Math.floor(vehdata.filter(function (vehdata) {
    return vehdata.regexp < reportdate || vehdata.inspection.end < reportdate;
  }).length / vehicles * 100) + '%'))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    bordered: true,
    size: "sm",
    className: "shadow-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("th", {
    colSpan: "3",
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Drivers")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Number of Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, drivers)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Driver Compliance Catagories"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Total Expired"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "% Non-Compliant")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "License"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "license",
    Filter1child: "exp",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
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
      lineNumber: 239
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Drug Screen"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "drugscreen",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
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
      lineNumber: 259
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Background Check"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "background",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
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
      lineNumber: 279
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "MVR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "mvr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
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
      lineNumber: 299
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "First Aid"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "firstaid",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
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
      lineNumber: 319
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "CPR"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "cpr",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
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
      lineNumber: 339
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, "Defensive Driving"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "defdriv",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
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
      lineNumber: 359
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "Passenger Sensitivity (PASS)"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx(ComplDataFilter, {
    Info: drdata,
    Filter1: "pass",
    Filter1child: "end",
    Value1: reportdate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  })), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
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
      lineNumber: 379
    },
    __self: this
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "Number of Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, __jsx("td", {
    colSpan: "2",
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, "Percent Non-Compliant Drivers"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, Math.floor(drdata.filter(function (drdata) {
    return drdata.license.exp < reportdate || drdata.firstaid.end < reportdate || drdata.cpr.end < reportdate || drdata.defdriv.end < reportdate || drdata.pass.end < reportdate || drdata.drugscreen.end < reportdate || drdata.background.end < reportdate || drdata.mvr.end < reportdate;
  }).length / drivers * 100) + '%')))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ComplianceTable);

/***/ })

})
//# sourceMappingURL=providerData.js.2f5302a48bf490eeaf49.hot-update.js.map
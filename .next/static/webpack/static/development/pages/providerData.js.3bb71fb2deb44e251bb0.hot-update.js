webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/provider_data/networkTable.js":
/*!*********************************************!*\
  !*** ./pages/provider_data/networkTable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\networkTable.js";




var networkdata = __webpack_require__(/*! ./network.json */ "./pages/provider_data/network.json");
/*counts number of Region types there are in the json
const uniqueNames = new Set(data.map(item => item.Region)).size;
*/
//Function for case insensitivity allowing for more flexibility on filter results based
//on user input.


function filterCaseInsensitive(filter, row) {
  var id = filter.pivotId || filter.id;
  return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
} //creates dropdown list for each table column listing available selection options for 
//each json listing.  Example: Region - Central, Southwest, East


var customFilter = function customFilter(_ref) {
  var fieldName = _ref.fieldName,
      filter = _ref.filter,
      _onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    style: {
      width: "100%"
    },
    value: filter ? filter.value : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Show All"), networkdata.sort(function (a, b) {
    var One = a[fieldName];
    var Two = b[fieldName];
    return One < Two ? -1 : One > Two ? 1 : 0;
  }).map(function (item) {
    return item[fieldName];
  }).filter(function (item, i, s) {
    return s.lastIndexOf(item) == i;
  }).map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: value,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, value);
  }));
};

var NetworkList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NetworkList, _Component);

  function NetworkList(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NetworkList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NetworkList).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NetworkList, [{
    key: "render",
    value: function render() {
      return networkdata ? this.renderData(networkdata) : this.renderLoading();
    }
  }, {
    key: "renderData",
    value: function renderData(networkdata) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "Provider-table -striped -highlight center shadow-sm mb-5",
        data: networkdata,
        defaultPageSize: 20,
        style: {
          height: "800px"
        } //sets filtering options in react-table for no dropdown option.  Calls the filtercaseinsensitive
        //function as mentioned above
        ,
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          return filterCaseInsensitive(filter, row);
        },
        columns: [{
          Header: "Provider",
          columns: [{
            Header: "Name",
            id: "Name",
            accessor: function accessor(d) {
              return d.Name;
            },
            width: 140,
            //*sorting method to allow for listing of numerical order listed in the name
            sortMethod: function sortMethod(a, b) {
              if (a.length === b.length) {
                return a > b ? 1 : -1;
              }

              return a.length > b.length ? 1 : -1;
            }
          }, {
            Header: "Address",
            id: "Address",
            accessor: function accessor(d) {
              return d.Address;
            },
            width: 300,
            size: 2,
            style: {
              whiteSpace: 'unset',
              fontSize: '14px'
            }
          }, {
            Header: "Phone",
            id: "Phone",
            accessor: function accessor(d) {
              return d.Phone;
            },
            width: 150
          }, {
            Header: "Email",
            id: "Email",
            accessor: function accessor(d) {
              return d.Email;
            },
            width: 220,
            style: {
              fontSize: '14px'
            }
          }]
        }, {
          Header: "Provider Info",
          columns: [{
            Header: "Region",
            id: "Region",
            width: 110,
            style: {
              'textAlign': 'center'
            },
            accessor: function accessor(d) {
              return d.Region;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref2) {
              var filter = _ref2.filter,
                  onChange = _ref2.onChange;
              return customFilter({
                fieldName: 'Region',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "County",
            id: "County",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            accessor: function accessor(d) {
              return d.County;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref3) {
              var filter = _ref3.filter,
                  onChange = _ref3.onChange;
              return customFilter({
                fieldName: 'County',
                filter: filter,
                onChange: onChange
              });
            }
          }]
        }, {
          Header: "Level of Service",
          columns: [{
            Header: "Ambulatory",
            accessor: "Amb",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref4) {
              var filter = _ref4.filter,
                  onChange = _ref4.onChange;
              return customFilter({
                fieldName: 'Amb',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Wheelchair",
            id: "WCHR",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            accessor: function accessor(d) {
              return d.WCHR;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref5) {
              var filter = _ref5.filter,
                  onChange = _ref5.onChange;
              return customFilter({
                fieldName: 'WCHR',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Stretcher",
            id: "Stretcher",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            accessor: function accessor(d) {
              return d.Stretcher;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref6) {
              var filter = _ref6.filter,
                  onChange = _ref6.onChange;
              return customFilter({
                fieldName: 'Stretcher',
                filter: filter,
                onChange: onChange
              });
            }
          }]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, function (state, makeTable, instance) {
        var recordsInfoText = "";
        var filtered = state.filtered,
            pageRows = state.pageRows,
            pageSize = state.pageSize,
            sortedData = state.sortedData,
            page = state.page;

        if (sortedData && sortedData.length > 0) {
          var isFiltered = filtered.length > 0;
          var totalRecords = sortedData.length;
          var recordsCountFrom = page * pageSize + 1;
          var recordsCountTo = recordsCountFrom + pageRows.length - 1;
          if (isFiltered) recordsInfoText = "".concat(totalRecords, " filtered Providers");else recordsInfoText = "".concat(recordsCountFrom, "-").concat(recordsCountTo, " of ").concat(totalRecords, " records");
        } else recordsInfoText = "No records";

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "main-grid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "records-info h3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, recordsInfoText)), makeTable());
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Loading...");
    }
  }]);

  return NetworkList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NetworkList);

/***/ })

})
//# sourceMappingURL=providerData.js.3bb71fb2deb44e251bb0.hot-update.js.map
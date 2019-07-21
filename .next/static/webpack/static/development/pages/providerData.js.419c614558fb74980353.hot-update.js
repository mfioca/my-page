webpackHotUpdate("static\\development\\pages\\providerData.js",{

/***/ "./pages/provider_data/providerimport.js":
/*!***********************************************!*\
  !*** ./pages/provider_data/providerimport.js ***!
  \***********************************************/
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
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Filter */ "./pages/provider_data/Filter.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sort */ "./pages/provider_data/sort.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\providerimport.js";






var data = __webpack_require__(/*! ./provider.json */ "./pages/provider_data/provider.json");

function filterCaseInsensitive(filter, row) {
  var id = filter.pivotId || filter.id;
  return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
}

var ProviderList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProviderList, _Component);

  function ProviderList(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProviderList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProviderList).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProviderList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fetch("/provider.json").then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return data ? this.renderData(data) : this.renderLoading();
    }
  }, {
    key: "renderData",
    value: function renderData(data) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "Provider-table",
        data: data,
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          return filterCaseInsensitive(filter, row);
        },
        columns: [{
          Header: "Provider",
          columns: [{
            Header: "Name",
            accessor: "Name",
            sortMethod: function sortMethod(a, b) {
              if (a.length === b.length) {
                return a > b ? 1 : -1;
              }

              return a.length > b.length ? 1 : -1;
            }
          }]
        }, {
          Header: "Provider Info",
          columns: [{
            Header: "Type",
            id: "Type",
            accessor: function accessor(d) {
              return d.Type;
            }
          }, {
            Header: "Region",
            id: "Region",
            accessor: function accessor(d) {
              return d.Region;
            }
          }, {
            Header: "County",
            id: "County",
            accessor: function accessor(d) {
              return d.County;
            }
          }]
        }, {
          Header: "Level of Service",
          columns: [{
            Header: "Ambulatory",
            accessor: "Amb"
          }, {
            Header: "Wheelchair",
            id: "WCHR",
            accessor: function accessor(d) {
              return d.WCHR;
            }
          }, {
            Header: "Stretcher",
            id: "Stretcher",
            accessor: function accessor(d) {
              return d.Stretcher;
            }
          }]
        }],
        defaultPageSize: 20,
        style: {
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room

        } //className= "Provider-table"
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Loading...");
    }
  }]);

  return ProviderList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProviderList);
/* codxe used while working on generating page
render () {
   
    const  {sorter}  = this.state;
 
     if (data && data.length > 0) {
       if (Array.isArray(sorter) && sorter.length) {
         data.sort(createSorter(...sorter));
       }
     }
 
     return (
       
       <div>
                   
         {
           data.map(item => (
             <div key={item.id}>
               <span>{item.id}</span>&nbsp;&nbsp;
               
               <span><a href={`mailto:${item.email}`}>{item.name}</a></span>;&nbsp; 
               <span>{item.company}</span>
             </div>
           ))
         }
       </div>
       
     );
   } 
   }


export default List;*/

/***/ })

})
//# sourceMappingURL=providerData.js.419c614558fb74980353.hot-update.js.map
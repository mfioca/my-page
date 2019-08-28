webpackHotUpdate("static\\development\\pages\\tvpost.js",{

/***/ "./pages/tvpost.js":
/*!*************************!*\
  !*** ./pages/tvpost.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _tv_info_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tv_info/MyLayout */ "./pages/tv_info/MyLayout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jsxstyles */ "./pages/jsxstyles.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\tvpost.js";








var noimage = '/static/images/no-img.png';

var Test =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Test, _React$Component);

  function Test() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Test);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Test).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Test, [{
    key: "render",
    value: function render() {
      var id = context.query.id; //pules tvmaze api json based on selected show on the search page.

      var res = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()("https://api.tvmaze.com/shows/".concat(id, "?embed[]=episodes&embed[]=cast&embed[]=seasons"));
      var show = res.json();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "test ", show.name));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var tvPost = function tvPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "the below content has been imported from", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://www.tvmaze.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "TVmaze.com")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tv_info_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Test, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "h3 m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Type:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, props.show.type ? props.show.type : 'no data')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Premiered:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.show.premiered ? props.show.premiered : 'no data')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "status:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.show.status ? props.show.status : 'no data')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Rating:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.show.rating.average)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Genre:"), " \xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.show.genres.map(function (genres) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      key: props.show.genres,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, genres, " \xA0");
  })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
    sm: {
      size: 'auto',
      offset: 1
    },
    className: "mr-5 mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: props.show.image ? props.show.image.medium : noimage,
    alt: "no image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Summary:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Link:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: props.show.url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.show.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.show.name ? props.show.name : 'null')))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Cast:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, props.show._embedded.cast.map(function (cast) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      key: cast.person.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
      className: "m-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardTitle"], {
      className: "m-4 text-center",
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_13__["TvTitle"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, cast.person.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardImg"], {
      className: "p-2",
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_13__["TvImage"],
      src: cast.character.image === null && cast.person.image.medium || cast.character.image.medium,
      alt: "castimage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "text-center my-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_13__["TvCast"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "As:", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
      className: "ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, cast.character.name)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      className: "btn-dark mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      className: "btn-dark w-100",
      href: cast.person.url,
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Actor page"))));
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Episodes:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "-striped -highlight",
    data: props.show._embedded.episodes,
    defaultPageSize: 20,
    style: {
      height: "600px",
      fontSize: "14px"
    },
    filterable: true,
    defaultFilterMethod: function defaultFilterMethod(filter, row) {
      return String(row[filter.id]) === filter.value;
    },
    columns: [{
      Header: "Season",
      id: "season",
      accessor: function accessor(d) {
        return d.season;
      },
      width: 110,
      style: {
        'textAlign': 'center'
      },
      Filter: function Filter(_ref) {
        var filter = _ref.filter,
            _onChange = _ref.onChange;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
          onChange: function onChange(event) {
            return _onChange(event.target.value);
          },
          style: {
            width: "100%"
          },
          value: filter ? filter.value : '',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, "Show All"), props.show._embedded.episodes.map(function (item) {
          return item.season;
        }).filter(function (item, i, s) {
          return s.lastIndexOf(item) == i;
        }).map(function (value) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            key: value,
            value: value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, value);
        }));
      }
    }, {
      Header: "Episode #",
      accessor: "number",
      width: 80,
      style: {
        'textAlign': 'center'
      }
    }, {
      Header: "Name",
      id: "name",
      accessor: function accessor(d) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: d.url,
          target: "_blank",
          rel: "noopener noreferrer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, d.name);
      },
      minWidth: 70,
      style: {
        'whiteSpace': 'unset',
        'textAlign': 'center'
      }
    }, {
      Header: "Air Date",
      id: "airdate",
      accessor: function accessor(d) {
        return d.airdate;
      },
      minWidth: 90,
      style: {
        'whiteSpace': 'unset',
        'textAlign': 'center'
      }
    }, {
      Header: "Summary",
      id: "summary",
      accessor: function accessor(d) {
        return d.summary != null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, d.summary.replace(/<[/]?p>/g, ''));
      },
      style: {
        'whiteSpace': 'unset'
      }
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })))));
};

tvPost.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, show;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id; //pules tvmaze api json based on selected show on the search page.

            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()("https://api.tvmaze.com/shows/".concat(id, "?embed[]=episodes&embed[]=cast&embed[]=seasons"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;
            console.log(show);
            console.log("Fetched show: ".concat(show.name));
            return _context.abrupt("return", {
              show: show
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (tvPost);

/***/ })

})
//# sourceMappingURL=tvpost.js.69dcb4df966b5f773f96.hot-update.js.map
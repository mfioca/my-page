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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customComponents */ "./pages/customComponents.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\tvpost.js";







var noimage = '/static/images/no-img.png';

var tvPost = function tvPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "the below content has been imported from", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.tvmaze.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "TVmaze.com")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvMazePage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h3 m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    borderless: true,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Type:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.show.type ? props.show.type : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Premiered:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.show.premiered ? props.show.premiered : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Status:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.show.status ? props.show.status : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Rating:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.show.rating.average ? props.show.rating.average : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Genre:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, props.show.genres.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, value, " \xA0");
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Seasons"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, props.show._embedded.seasons.filter(function (seasons) {
    return seasons.number;
  }).length))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: {
      size: 'auto',
      offset: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-center mr-5 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.show.image ? props.show.image.medium : noimage,
    alt: "no image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Summary:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Link:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["NewTabLink"], {
    Link: props.show.url,
    Title: props.show.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, props.show.name ? props.show.name : 'null')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["CustomTabs"], {
    Tab1Name: "Cast",
    Tab2Name: "Episodes",
    Tab1Content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["LeftFlexWrapDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, props.show._embedded.cast.map(function (cast) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "p-3",
        key: cast.person.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["TvMazeCard"], {
        CardStyle: {
          height: '570px'
        },
        Title: cast.person.name,
        ImgSrc: cast.person.image === null && noimage || cast.character.image === null && cast.person.image.medium || cast.character.image.medium,
        ImgAlt: "castimage",
        SubTitle: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, "As: \xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, cast.character.name)),
        Link: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["NewTabLink"], {
          Style: "btn btn-dark w-100 mt-3",
          Link: cast.person.url,
          Title: "Actor Page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "Actor Page"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }));
    }))
    /*end of Tab1Content*/
    ,
    Tab2Content:
    /*React Table for Episode List */
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        maxWidth: 110,
        style: {
          'textAlign': 'center'
        },
        //Dropdown list to filter table based on number
        //of seasons
        Filter: function Filter(_ref) {
          var filter = _ref.filter,
              _onChange = _ref.onChange;
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
            onChange: function onChange(event) {
              return _onChange(event.target.value);
            },
            style: {
              width: "100%"
            },
            value: filter ? filter.value : '',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, "Show All"), props.show._embedded.episodes.map(function (item) {
            return item.season;
          }).filter(function (item, i, s) {
            return s.lastIndexOf(item) == i;
          }).map(function (value) {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
              key: value,
              value: value,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            }, value);
          }));
        }
      }, {
        Header: "Episode #",
        accessor: "number",
        maxWidth: 80,
        style: {
          'textAlign': 'center'
        }
      }, {
        Header: "Name",
        id: "name",
        accessor: function accessor(d) {
          return (//Converts Episode Name into a link to the TvMaze 
            //page for that episode
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["NewTabLink"], {
              Link: d.url,
              Title: "Episode Link",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188
              },
              __self: this
            }, d.name)
          );
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
        maxWidth: 120,
        style: {
          'whiteSpace': 'unset',
          'textAlign': 'center'
        }
      }, {
        Header: "Summary",
        id: "summary",
        accessor: function accessor(d) {
          return d.summary != null && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
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
        lineNumber: 134
      },
      __self: this
    })
    /*End of Tab2Content*/
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))));
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("https://api.tvmaze.com/shows/".concat(id, "?embed[]=episodes&embed[]=cast&embed[]=seasons"));

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
/*
<Card style={{height: '570px'}} className="m-2">
                    <CardTitle 
                      className="m-4 text-center" 
                      style={TvpageStyle.Title} >
                        {cast.person.name}
                    </CardTitle>
                    <CardBody>
                        <CardImg 
                          className="d-flex justify-content-center" 
                          style={TvpageStyle.Image} 
                          src={
                            cast.person.image === null && noimage ||
                            cast.character.image === null && cast.person.image.medium ||
                            cast.character.image.medium
                          } 
                          alt="castimage" 
                        />
                      <CardSubtitle className="text-center my-2">
                        <h4 style={TvpageStyle.Cast}>As: &nbsp;
                          <small>{cast.character.name}</small>
                        </h4>
                      </CardSubtitle>
                    </CardBody>
                      <NewTabLink
                        Style="btn btn-dark w-100 mt-3"
                        Link={cast.person.url}
                        Title="Actor Page">
                          Actor Page
                      </NewTabLink>
                  </Card>
*/

/***/ })

})
//# sourceMappingURL=tvpost.js.ae657dcce47630fb01de.hot-update.js.map
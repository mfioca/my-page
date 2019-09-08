webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/customComponents.js":
/*!***********************************!*\
  !*** ./pages/customComponents.js ***!
  \***********************************/
/*! exports provided: TvPostInfoLabel, TvPostInfoValue, NewTabLink, HomeCard, CustomJumbo, AboutMedia, ThreeColumnCard, DataFilter, CharacterSheet, AttackSection, NameForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoLabel", function() { return TvPostInfoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoValue", function() { return TvPostInfoValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTabLink", function() { return NewTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return HomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomJumbo", function() { return CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMedia", function() { return AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilter", function() { return DataFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackSection", function() { return AttackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameForm", function() { return NameForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jsxstyles */ "./pages/jsxstyles.js");





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js";


/* **************** 
*   Imports       * 
******************/



/* *********************************
*   Export styled components       * 
***********************************/

function TvPostInfoLabel(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: "h2 text-left w-25 m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.children);
}
function TvPostInfoValue(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: "text-left m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.children));
}
function NewTabLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    className: props.Style,
    href: props.Link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.children);
}
/* *********************** 
*   Export Classes       * 
**************************/
//used in home page

var HomeCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeCard, _React$Component);

  function HomeCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["HomeCardStyle"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["HomeCardTitleStyle"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["CardImageStyle"],
        src: this.props.Image,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        style: {
          height: '80px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.Description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "w-100 p-0 m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NewTabLink, {
        Style: "btn btn-dark w-100 p-2",
        Link: this.props.Link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, this.props.ButtonTitle)))));
    }
  }]);

  return HomeCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
; //used in Resumeview and providerdata

var CustomJumbo =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomJumbo, _React$Component2);

  function CustomJumbo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomJumbo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomJumbo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomJumbo, [{
    key: "render",
    value: function render() {
      if (this.props.ImgUrl === "noimage") {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, this.props.Caption2));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "container-fluid text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["HomeImage"],
          alt: "avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, this.props.Caption2, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), this.props.Caption3));
      }
    }
  }]);

  return CustomJumbo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //used in about page

var AboutMedia =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutMedia, _React$Component3);

  function AboutMedia() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutMedia);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutMedia).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutMedia, [{
    key: "render",
    value: function render() {
      if (this.props.Align === "Right") {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "py-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, this.props.Description)))));
      }

      if (this.props.Align === "Left") {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "py-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, this.props.Description)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //used in resume for experience section

var ThreeColumnCard =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ThreeColumnCard, _React$Component4);

  function ThreeColumnCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ThreeColumnCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ThreeColumnCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ThreeColumnCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, this.props.Description1)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, this.props.Description2)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //used in providerdata

var DataFilter =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DataFilter, _React$Component5);

  function DataFilter() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DataFilter);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DataFilter).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DataFilter, [{
    key: "render",
    value: function render() {
      var Fone = this.props.Filter1;
      var Vone = this.props.Value1;
      var Ftwo = this.props.Filter2;
      var Vtwo = this.props.Value2;
      var Data = this.props.Info;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, Data.filter(function (Data) {
        return Data[Fone] === Vone && Data[Ftwo] === Vtwo;
      }).length);
    }
  }]);

  return DataFilter;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //D and D application

var CharacterSheet =
/*#__PURE__*/
function (_React$Component6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CharacterSheet, _React$Component6);

  function CharacterSheet() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CharacterSheet);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CharacterSheet).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CharacterSheet, [{
    key: "render",
    value: function render() {
      function DandDTableLabel(props) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          className: "text-muted text-left h4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, props.children);
      }

      function DandDTableValue(props) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
          className: "text-white text-left h4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, props.children);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        borderless: true,
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, this.props.Strength)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, " ", this.props.Constitution)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, " ", this.props.Dexterity)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, this.props.Hitpoints != "Dead" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, this.props.Hitpoints) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, this.props.Hitpoints)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, " ", this.props.Damage))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["DandDAvatar"],
        src: this.props.ImgUrl,
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      })))));
    }
  }]);

  return CharacterSheet;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // D and D application

var AttackSection =
/*#__PURE__*/
function (_React$Component7) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AttackSection, _React$Component7);

  function AttackSection() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttackSection);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AttackSection).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSection, [{
    key: "render",
    value: function render() {
      var Result = this.props.DidHit;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark",
        style: {
          height: '440px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["thumbnail"],
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "AC-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, this.props.AC)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["thumbnail"],
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "HitAdj-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, this.props.HitAdj)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1953405926",
        __self: this
      }, ".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOFNnQyxBQUcrQyxBQU1BLGtCQUxULEFBTUQsUUFDRSxDQU5BLFNBT3NCLENBTkEsd0dBT3BDLENBTkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEZXNrdG9wXFxuZXd0ZXN0XFxteS1wYWdlXFxwYWdlc1xcY3VzdG9tQ29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKioqKioqKioqKioqKiogXHJcbiogICBJbXBvcnRzICAgICAgICogXHJcbioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgXHJcbiAgICBDYXJkLCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ2FyZFN1YnRpdGxlLCBcclxuICAgIFJvdywgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgQnV0dG9uLCBUYWJsZSwgSnVtYm90cm9uIFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5pbXBvcnQgeyBBYm91dEltZywgQ2FyZEltYWdlU3R5bGUsIEhvbWVJbWFnZSwgSG9tZUNhcmRTdHlsZSwgSG9tZUNhcmRUaXRsZVN0eWxlLCBcclxuICAgIERhbmREQXZhdGFyLCB0aHVtYm5haWwgXHJcbn0gZnJvbSAnLi9qc3hzdHlsZXMnXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAgIEV4cG9ydCBzdHlsZWQgY29tcG9uZW50cyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUdlBvc3RJbmZvTGFiZWwocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJoMiB0ZXh0LWxlZnQgdy0yNSBtLTAgcC0yXCI+e3Byb3BzLmNoaWxkcmVufTwvdGQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHZQb3N0SW5mb1ZhbHVlKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdCBtLTAgcC0yXCI+PHNtYWxsPntwcm9wcy5jaGlsZHJlbn08L3NtYWxsPjwvdGQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdUYWJMaW5rKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwcm9wcy5TdHlsZX1cclxuICAgICAgICAgICAgaHJlZj17cHJvcHMuTGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBFeHBvcnQgQ2xhc3NlcyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2VcclxuZXhwb3J0IGNsYXNzIEhvbWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17SG9tZUNhcmRTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17SG9tZUNhcmRUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy5UaXRsZX08L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyB0b3Agc3R5bGU9e0NhcmRJbWFnZVN0eWxlfSBzcmM9e3RoaXMucHJvcHMuSW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU3VidGl0bGU+e3RoaXMucHJvcHMuU3VidGl0bGV9PC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dCBzdHlsZT17e2hlaWdodDogJzgwcHgnfX0+e3RoaXMucHJvcHMuRGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3VGFiTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0eWxlPVwiYnRuIGJ0bi1kYXJrIHctMTAwIHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGluaz17dGhpcy5wcm9wcy5MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05ld1RhYkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy91c2VkIGluIFJlc3VtZXZpZXcgYW5kIHByb3ZpZGVyZGF0YVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSnVtYm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkltZ1VybCA9PT0gXCJub2ltYWdlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zIHRleHQtY2VudGVyXCI+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMVN0eWxlfT57dGhpcy5wcm9wcy5DYXB0aW9uMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMyB0ZXh0LWNlbnRlclwiPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvYXZhdGFyLmpwZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0hvbWVJbWFnZX0gYWx0PVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjFTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjJ9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5DYXB0aW9uM31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBhYm91dCBwYWdlXHJcbmV4cG9ydCBjbGFzcyBBYm91dE1lZGlhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkFsaWduID09PSBcIlJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0Fib3V0SW1nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTVcIj48aDE+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkFsaWduID09PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01XCI+PGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgc3R5bGU9e0Fib3V0SW1nfSBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy91c2VkIGluIHJlc3VtZSBmb3IgZXhwZXJpZW5jZSBzZWN0aW9uXHJcbmV4cG9ydCBjbGFzcyBUaHJlZUNvbHVtbkNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DbGFzc30+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPjxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9uMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb24zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJkYXRhXHJcbmV4cG9ydCBjbGFzcyBEYXRhRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgRm9uZSA9IHRoaXMucHJvcHMuRmlsdGVyMTtcclxuICAgICAgICBsZXQgVm9uZSA9IHRoaXMucHJvcHMuVmFsdWUxO1xyXG4gICAgICAgIGxldCBGdHdvID0gdGhpcy5wcm9wcy5GaWx0ZXIyO1xyXG4gICAgICAgIGxldCBWdHdvID0gdGhpcy5wcm9wcy5WYWx1ZTI7XHJcbiAgICAgICAgbGV0IERhdGEgPSB0aGlzLnByb3BzLkluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+e0RhdGEuZmlsdGVyKERhdGEgPT4gRGF0YVtGb25lXSA9PT0gVm9uZSAmJiBEYXRhW0Z0d29dID09PSBWdHdvKS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4vL0QgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBmdW5jdGlvbiBEYW5kRFRhYmxlTGFiZWwocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtbGVmdCBoNFwiPntwcm9wcy5jaGlsZHJlbn08L3RkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gRGFuZERUYWJsZVZhbHVlKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxlZnQgaDRcIj57cHJvcHMuY2hpbGRyZW59PC90ZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXt7IHNpemU6ICdhdXRvJywgb2Zmc2V0OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYm9yZGVybGVzcyAgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPlN0cmVuZ3RoOjwvRGFuZERUYWJsZUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZVZhbHVlPnt0aGlzLnByb3BzLlN0cmVuZ3RofTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkNvbnN0aXR1dGlvbjo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT4ge3RoaXMucHJvcHMuQ29uc3RpdHV0aW9ufTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkRleHRlcml0eTo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT4ge3RoaXMucHJvcHMuRGV4dGVyaXR5fTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkhpdHBvaW50czo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhpdHBvaW50cyAhPSBcIkRlYWRcIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zcGFuPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5EYW1hZ2UgcGVyIEhpdDo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT4ge3RoaXMucHJvcHMuRGFtYWdlfTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17eyBzaXplOiAnYXV0bycsIG9mZnNldDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzdHlsZT17RGFuZERBdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJoZXJvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEIGFuZCBEIGFwcGxpY2F0aW9uXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2tTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgUmVzdWx0ID0gdGhpcy5wcm9wcy5EaWRIaXQ7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya1wiIHN0eWxlPXt7aGVpZ2h0OiAnNDQwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RodW1ibmFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvYWNpY29uLnBuZ1wiIGFsdD1cInNoaWVsZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkFDLUljb24tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5BQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aHVtYm5haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9oaXRhZGp1c3QucG5nXCIgYWx0PVwiaWNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiSGl0QWRqLUljb24tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSGl0QWRqfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5BQy1JY29uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IaXRBZGotSWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgb25DbGljaz17dGhpcy5wcm9wcy5BdHRhY2tSb2xsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuUm9sbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QXR0YWNrIFJlc3VsdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjayByb2xsOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuUm9sbCA9PT0gJ0NyaXQgU3RyaWtlJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Sb2xsfSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Sb2xsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1Jlc3VsdCA9PT0gXCJIaXRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxlcnQtc3VjY2VzcyB3LTEwMCB0ZXh0LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmVzdWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxlcnQtZGFuZ2VyIHctMTAwIHRleHQtY2VudGVyIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgTmFtZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWItMiBtci1zbS0yIG1iLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibXItc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuTmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9QcmV2ZW50IGVudGVyIGtleSBzdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAxMyAvKiBFbnRlciAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLk5hbWVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT4gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js */")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex justify-content-center my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.props.AttackRoll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, this.props.RollTitle)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Attack Result:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "mt-2 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "attack roll:", this.props.Roll === 'Crit Strike' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger font-italic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, this.props.Roll, "!") || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, this.props.Roll))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "my-2 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, Result === "Hit" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "alert-success w-100 text-center mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, Result) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "alert-danger w-100 text-center mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, Result)));
    }
  }]);

  return AttackSection;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //D and D application

var NameForm =
/*#__PURE__*/
function (_React$Component8) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NameForm, _React$Component8);

  function NameForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NameForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NameForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NameForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        className: "mb-2 mr-sm-2 mb-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        className: "mr-sm-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.props.value,
        onChange: this.props.NameChange //Prevent enter key submit
        ,
        onKeyPress: function onKeyPress(event) {
          if (event.which === 13
          /* Enter */
          ) {
              event.preventDefault();
            }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "mb-2",
        onClick: this.props.NameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Change Name"));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.6fa549086c675df51ba5.hot-update.js.map
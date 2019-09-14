webpackHotUpdate("static\\development\\pages\\DandDpage.js",{

/***/ "./pages/customComponents.js":
/*!***********************************!*\
  !*** ./pages/customComponents.js ***!
  \***********************************/
/*! exports provided: CenterFlexWrapDiv, LeftFlexWrapDiv, TvPostInfoLabel, NewTabLink, TvPostInfoValue, HomeCard, CustomJumbo, AboutMedia, ThreeColumnCard, DataFilter, CharacterSheet, AttackSection, NameForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterFlexWrapDiv", function() { return CenterFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftFlexWrapDiv", function() { return LeftFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoLabel", function() { return TvPostInfoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTabLink", function() { return NewTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoValue", function() { return TvPostInfoValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return HomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomJumbo", function() { return CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMedia", function() { return AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilter", function() { return DataFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackSection", function() { return AttackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameForm", function() { return NameForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jsxstyles */ "./pages/jsxstyles.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js";


/* **************** 
*   Imports       * 
******************/



/* *********************************
*   Export styled components       * 
***********************************/
//used in tvpage, home page, attacksim

function CenterFlexWrapDiv(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.children);
} //used in tvpost

function LeftFlexWrapDiv(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.children);
}
function TvPostInfoLabel(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
    className: "h2 text-left w-25 m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.children);
}
function NewTabLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    className: props.Style,
    href: props.Link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, props.children);
}
function TvPostInfoValue(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
    className: "text-left m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, props.children));
}
/* *********************** 
*   Export Classes       * 
**************************/
//used in home page

var HomeCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HomeCard, _React$Component);

  function HomeCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["HomeCardStyle"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["HomeCardTitleStyle"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
        top: true,
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["CardImageStyle"],
        src: this.props.Image,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
        style: {
          height: '80px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.props.Description), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "w-100 p-0 m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NewTabLink, {
        Style: "btn btn-dark w-100 p-2",
        Link: this.props.Link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.props.ButtonTitle)))));
    }
  }]);

  return HomeCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
; //used in Resumeview and providerdata

var CustomJumbo =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomJumbo, _React$Component2);

  function CustomJumbo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CustomJumbo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomJumbo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CustomJumbo, [{
    key: "render",
    value: function render() {
      if (this.props.ImgUrl === "noimage") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, this.props.Caption2));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "container-fluid text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["HomeImage"],
          alt: "avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, this.props.Caption2, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }), this.props.Caption3));
      }
    }
  }]);

  return CustomJumbo;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //used in about page

var AboutMedia =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AboutMedia, _React$Component3);

  function AboutMedia() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AboutMedia);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutMedia).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AboutMedia, [{
    key: "render",
    value: function render() {
      if (this.props.Align === "Right") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "py-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, this.props.Description)))));
      }

      if (this.props.Align === "Left") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "py-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, this.props.Description)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //used in resume for experience section

var ThreeColumnCard =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ThreeColumnCard, _React$Component4);

  function ThreeColumnCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ThreeColumnCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ThreeColumnCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ThreeColumnCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, this.props.Description1)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, this.props.Description2)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //used in providerdata

var DataFilter =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DataFilter, _React$Component5);

  function DataFilter() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DataFilter);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DataFilter).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DataFilter, [{
    key: "render",
    value: function render() {
      var Fone = this.props.Filter1;
      var Vone = this.props.Value1;
      var Ftwo = this.props.Filter2;
      var Vtwo = this.props.Value2;
      var Data = this.props.Info;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, Data.filter(function (Data) {
        return Data[Fone] === Vone && Data[Ftwo] === Vtwo;
      }).length);
    }
  }]);

  return DataFilter;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //D and D application

var CharacterSheet =
/*#__PURE__*/
function (_React$Component6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CharacterSheet, _React$Component6);

  function CharacterSheet() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CharacterSheet);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CharacterSheet).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CharacterSheet, [{
    key: "render",
    value: function render() {
      function DandDTableLabel(props) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "text-muted text-left h4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, props.children);
      }

      function DandDTableValue(props) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "text-white text-left h4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, props.children);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        borderless: true,
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, this.props.Strength)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, " ", this.props.Constitution)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, " ", this.props.Dexterity)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, this.props.Hitpoints != "Dead" && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, this.props.Hitpoints) || react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-danger h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, this.props.Hitpoints)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, " ", this.props.Damage))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: {
          size: 'auto',
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-center ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["DandDAvatar"],
        src: this.props.ImgUrl,
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      })))));
    }
  }]);

  return CharacterSheet;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // D and D application

var AttackSection =
/*#__PURE__*/
function (_React$Component7) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSection, _React$Component7);

  function AttackSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AttackSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AttackSection).call(this, props));
    _this.RollResult = _this.RollResult.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.AttackBanner = _this.AttackBanner.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.AttackButton = _this.AttackButton.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AttackSection, [{
    key: "RollResult",
    value: function RollResult() {
      if (this.props.Roll === 'Crit Strike') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-danger font-italic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        }, this.props.Roll, "!");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, this.props.Roll);
      }
    }
  }, {
    key: "AttackBanner",
    value: function AttackBanner() {
      var Result = this.props.DidHit;

      if (Result === "Hit") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
          className: "alert alert-success py-2 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          },
          __self: this
        }, Result);
      }

      if (Result === "Miss") {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
          className: "alert alert-danger py-2 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, Result);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
          className: "text-white text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, "(Attack Result displayed here)");
      }
    }
  }, {
    key: "AttackButton",
    value: function AttackButton() {
      if (this.props.AttackTurn === true) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onMouseDown: this.props.AttackRoll,
          onMouseUp: this.props.NextTurn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, this.props.AttackRoll, this.props.RollTitle);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
          className: "text-white px-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, "Not your turn");
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["thumbnail"],
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "AC-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, this.props.AC)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_9__["thumbnail"],
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "HitAdj-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, this.props.HitAdj)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1953405926",
        __self: this
      }, ".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeVhnQyxBQUcrQyxBQU1BLGtCQUxULEFBTUQsUUFDRSxDQU5BLFNBT3NCLENBTkEsd0dBT3BDLENBTkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEZXNrdG9wXFxuZXd0ZXN0XFxteS1wYWdlXFxwYWdlc1xcY3VzdG9tQ29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKioqKioqKioqKioqKiogXHJcbiogICBJbXBvcnRzICAgICAgICogXHJcbioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgXHJcbiAgICBDYXJkLCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQ2FyZFN1YnRpdGxlLCBcclxuICAgIFJvdywgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgQnV0dG9uLCBDb2xsYXBzZSwgVGFibGUsIEp1bWJvdHJvbiBcclxufSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuaW1wb3J0IHsgQWJvdXRJbWcsIENhcmRJbWFnZVN0eWxlLCBIb21lSW1hZ2UsIEhvbWVDYXJkU3R5bGUsIEhvbWVDYXJkVGl0bGVTdHlsZSwgXHJcbiAgICBEYW5kREF2YXRhciwgdGh1bWJuYWlsIFxyXG59IGZyb20gJy4vanN4c3R5bGVzJ1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogICBFeHBvcnQgc3R5bGVkIGNvbXBvbmVudHMgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL3VzZWQgaW4gdHZwYWdlLCBob21lIHBhZ2UsIGF0dGFja3NpbVxyXG5leHBvcnQgZnVuY3Rpb24gQ2VudGVyRmxleFdyYXBEaXYocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gdHZwb3N0XHJcbmV4cG9ydCBmdW5jdGlvbiBMZWZ0RmxleFdyYXBEaXYocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1sZWZ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUdlBvc3RJbmZvTGFiZWwocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8dGQgY2xhc3NOYW1lPVwiaDIgdGV4dC1sZWZ0IHctMjUgbS0wIHAtMlwiPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvdGQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmV3VGFiTGluayhwcm9wcyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17cHJvcHMuU3R5bGV9XHJcbiAgICAgICAgICAgIGhyZWY9e3Byb3BzLkxpbmt9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIFxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLlRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2E+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHZQb3N0SW5mb1ZhbHVlKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbGVmdCBtLTAgcC0yXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbD57cHJvcHMuY2hpbGRyZW59PC9zbWFsbD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgKTtcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBFeHBvcnQgQ2xhc3NlcyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2VcclxuZXhwb3J0IGNsYXNzIEhvbWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17SG9tZUNhcmRTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17SG9tZUNhcmRUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy5UaXRsZX08L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyB0b3Agc3R5bGU9e0NhcmRJbWFnZVN0eWxlfSBzcmM9e3RoaXMucHJvcHMuSW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU3VidGl0bGU+e3RoaXMucHJvcHMuU3VidGl0bGV9PC9DYXJkU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dCBzdHlsZT17e2hlaWdodDogJzgwcHgnfX0+e3RoaXMucHJvcHMuRGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEwMCBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3VGFiTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0eWxlPVwiYnRuIGJ0bi1kYXJrIHctMTAwIHAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGluaz17dGhpcy5wcm9wcy5MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05ld1RhYkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy91c2VkIGluIFJlc3VtZXZpZXcgYW5kIHByb3ZpZGVyZGF0YVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSnVtYm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkltZ1VybCA9PT0gXCJub2ltYWdlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zIHRleHQtY2VudGVyXCI+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMVN0eWxlfT57dGhpcy5wcm9wcy5DYXB0aW9uMX08L3A+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMyB0ZXh0LWNlbnRlclwiPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvYXZhdGFyLmpwZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0hvbWVJbWFnZX0gYWx0PVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjFTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjJ9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5DYXB0aW9uM31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBhYm91dCBwYWdlXHJcbmV4cG9ydCBjbGFzcyBBYm91dE1lZGlhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkFsaWduID09PSBcIlJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0Fib3V0SW1nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTVcIj48aDE+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkFsaWduID09PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01XCI+PGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgc3R5bGU9e0Fib3V0SW1nfSBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy91c2VkIGluIHJlc3VtZSBmb3IgZXhwZXJpZW5jZSBzZWN0aW9uXHJcbmV4cG9ydCBjbGFzcyBUaHJlZUNvbHVtbkNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DbGFzc30+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPjxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9uMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb24zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJkYXRhXHJcbmV4cG9ydCBjbGFzcyBEYXRhRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgRm9uZSA9IHRoaXMucHJvcHMuRmlsdGVyMTtcclxuICAgICAgICBsZXQgVm9uZSA9IHRoaXMucHJvcHMuVmFsdWUxO1xyXG4gICAgICAgIGxldCBGdHdvID0gdGhpcy5wcm9wcy5GaWx0ZXIyO1xyXG4gICAgICAgIGxldCBWdHdvID0gdGhpcy5wcm9wcy5WYWx1ZTI7XHJcbiAgICAgICAgbGV0IERhdGEgPSB0aGlzLnByb3BzLkluZm87XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+e0RhdGEuZmlsdGVyKERhdGEgPT4gRGF0YVtGb25lXSA9PT0gVm9uZSAmJiBEYXRhW0Z0d29dID09PSBWdHdvKS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4vL0QgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBmdW5jdGlvbiBEYW5kRFRhYmxlTGFiZWwocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtbGVmdCBoNFwiPntwcm9wcy5jaGlsZHJlbn08L3RkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gRGFuZERUYWJsZVZhbHVlKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxlZnQgaDRcIj57cHJvcHMuY2hpbGRyZW59PC90ZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXt7IHNpemU6ICdhdXRvJywgb2Zmc2V0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgYm9yZGVybGVzcyAgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPlN0cmVuZ3RoOjwvRGFuZERUYWJsZUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZVZhbHVlPnt0aGlzLnByb3BzLlN0cmVuZ3RofTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkNvbnN0aXR1dGlvbjo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT4ge3RoaXMucHJvcHMuQ29uc3RpdHV0aW9ufTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkRleHRlcml0eTo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT4ge3RoaXMucHJvcHMuRGV4dGVyaXR5fTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkhpdHBvaW50czo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhpdHBvaW50cyAhPSBcIkRlYWRcIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zcGFuPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5EYW1hZ2UgcGVyIEhpdDo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT4ge3RoaXMucHJvcHMuRGFtYWdlfTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17eyBzaXplOiAnYXV0bycsIG9mZnNldDogMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgIHN0eWxlPXtEYW5kREF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEIGFuZCBEIGFwcGxpY2F0aW9uXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2tTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuUm9sbFJlc3VsdCA9IHRoaXMuUm9sbFJlc3VsdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuQXR0YWNrQmFubmVyID0gdGhpcy5BdHRhY2tCYW5uZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLkF0dGFja0J1dHRvbiA9IHRoaXMuQXR0YWNrQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFJvbGxSZXN1bHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuUm9sbCA9PT0gJ0NyaXQgU3RyaWtlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Sb2xsfSFcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuUm9sbH08L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEF0dGFja0Jhbm5lcigpIHtcclxuICAgICAgICBjb25zdCBSZXN1bHQgPSB0aGlzLnByb3BzLkRpZEhpdDtcclxuICAgICAgICBpZiAoUmVzdWx0ID09PSBcIkhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2VzcyBweS0yIHRleHQtY2VudGVyXCI+e1Jlc3VsdH08L2gyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gaWYgKFJlc3VsdCA9PT0gXCJNaXNzXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXIgcHktMiB0ZXh0LWNlbnRlclwiPntSZXN1bHR9PC9oMj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj4oQXR0YWNrIFJlc3VsdCBkaXNwbGF5ZWQgaGVyZSk8L2g2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQXR0YWNrQnV0dG9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkF0dGFja1R1cm4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLkF0dGFja1JvbGx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcCA9IHt0aGlzLnByb3BzLk5leHRUdXJufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQXR0YWNrUm9sbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuUm9sbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHgtMlwiPk5vdCB5b3VyIHR1cm48L2g0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RodW1ibmFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvYWNpY29uLnBuZ1wiIGFsdD1cInNoaWVsZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkFDLUljb24tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5BQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aHVtYm5haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9oaXRhZGp1c3QucG5nXCIgYWx0PVwiaWNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiSGl0QWRqLUljb24tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSGl0QWRqfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5BQy1JY29uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IaXRBZGotSWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuQXR0YWNrQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5BdHRhY2sgUmVzdWx0OjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrIHJvbGw6ICZuYnNwOyB7dGhpcy5Sb2xsUmVzdWx0KCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLkF0dGFja0Jhbm5lcigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgTmFtZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtjb2xsYXBzZTogZmFsc2V9O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtjb2xsYXBzZTogIXN0YXRlLmNvbGxhcHNlfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybSA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iLTIgbXItc20tMiBtYi1zbS0yIGQtZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2UgTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLk5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUHJldmVudCBlbnRlciBrZXkgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMgLyogRW50ZXIgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuTmFtZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybT4gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js */")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex justify-content-center my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, this.AttackButton()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "Attack Result:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "mt-2 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, "attack roll: \xA0 ", this.RollResult())), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, this.AttackBanner()));
    }
  }]);

  return AttackSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //D and D application

var NameForm =
/*#__PURE__*/
function (_React$Component8) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NameForm, _React$Component8);

  function NameForm(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NameForm);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NameForm).call(this, props));
    _this2.state = {
      collapse: false
    };
    _this2.toggle = _this2.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NameForm, [{
    key: "toggle",
    value: function toggle() {
      this.setState(function (state) {
        return {
          collapse: !state.collapse
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
        className: "mb-2 mr-sm-2 mb-sm-2 d-flex flex-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "btn text-white",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, "Change Name:"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        isOpen: this.state.collapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
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
          lineNumber: 438
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: this.props.NameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Submit"))))));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/***/ })

})
//# sourceMappingURL=DandDpage.js.82a37568dca4366da7bb.hot-update.js.map
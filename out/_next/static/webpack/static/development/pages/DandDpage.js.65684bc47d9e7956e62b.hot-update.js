webpackHotUpdate("static\\development\\pages\\DandDpage.js",{

/***/ "./pages/customComponents.js":
/*!***********************************!*\
  !*** ./pages/customComponents.js ***!
  \***********************************/
/*! exports provided: CustomJumbo, AboutMedia, SingleListCard, ThreeColumnCard, HomeCard, CharacterSheet, AttackSection, NameForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomJumbo", function() { return CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMedia", function() { return AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleListCard", function() { return SingleListCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return HomeCard; });
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
/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/style.css */ "./components/style.css");
/* harmony import */ var _components_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_style_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\customComponents.js";


/* **************** 
*   Imports       * 
******************/




/* *********************** 
*   Export Classes       * 
**************************/
//used in Resumeview and providerdata

var CustomJumbo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomJumbo, _React$Component);

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
            lineNumber: 18
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, this.props.Caption2));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "container-fluid text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["HomeImage"],
          alt: "avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, this.props.Caption2, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
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
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutMedia, _React$Component2);

  function AboutMedia() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutMedia);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutMedia).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutMedia, [{
    key: "render",
    value: function render() {
      if (this.props.Align === "Right") {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, this.props.Description))))));
      }

      if (this.props.Align === "Left") {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, this.props.Description))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //used in about page for resume

var SingleListCard =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleListCard, _React$Component3);

  function SingleListCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleListCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleListCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleListCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "Text-Left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, this.props.Item1), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.props.Item2), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.props.Item3), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.props.Item4))))));
    }
  }]);

  return SingleListCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
; //used in resume for experience section

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
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.props.Description1)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.props.Description2)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); //used in home page

var HomeCard =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeCard, _React$Component5);

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
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardImg"], {
        top: true,
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["CardImageStyle"],
        src: this.props.Image,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, this.props.Description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        href: this.props.Link,
        className: "btn-dark",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, this.props.ButtonTitle))));
    }
  }]);

  return HomeCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
; //D and D application

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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
        borderless: true,
        className: " ml-4 p-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, " ", this.props.Strength)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, " ", this.props.Constitution)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, " ", this.props.Dexterity)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, " ", this.props.Hitpoints)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, " ", this.props.Damage))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-right mr-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["DandDAvatar"],
        src: this.props.ImgUrl,
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "my-4 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["thumbnail"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-2658400804",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, this.props.AC, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2658400804",
        __self: this
      }, "h4.jsx-2658400804{position:absolute;top:35px;left:46px;-webkit-transform:translate(-10%,-20%);-ms-transform:translate(-10%,-20%);transform:translate(-10%,-20%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRG9jdW1lbnRzXFxnaXRodWJcXG15LXBhZ2VcXHBhZ2VzXFxjdXN0b21Db21wb25lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJPZ0QsQUFHMkQsa0JBQ1QsU0FDQyxVQUNzQix5R0FDcEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEb2N1bWVudHNcXGdpdGh1YlxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqKioqKioqKioqKioqIFxyXG4qICAgSW1wb3J0cyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQsIENhcmRJbWcsIENhcmRUZXh0LCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBDYXJkU3VidGl0bGUsIFJvdywgQ29sLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBCdXR0b24sIFRhYmxlLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQge0Fib3V0SW1nLCBDYXJkSW1hZ2VTdHlsZSwgSG9tZUltYWdlLCBEYW5kREF2YXRhciwgdGh1bWJuYWlsIH0gZnJvbSAnLi9qc3hzdHlsZXMnXHJcbmltcG9ydCBjc3MgZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZS5jc3MnXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqIFxyXG4qICAgRXhwb3J0IENsYXNzZXMgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL3VzZWQgaW4gUmVzdW1ldmlldyBhbmQgcHJvdmlkZXJkYXRhXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21KdW1ibyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuSW1nVXJsID09PSBcIm5vaW1hZ2VcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTMgdGV4dC1jZW50ZXJcIj57dGhpcy5wcm9wcy5UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNhcHRpb24xU3R5bGV9Pnt0aGlzLnByb3BzLkNhcHRpb24xfTwvcD5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMlN0eWxlfT57dGhpcy5wcm9wcy5DYXB0aW9uMn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zIHRleHQtY2VudGVyXCI+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hdmF0YXIuanBnXCIgc3R5bGU9e0hvbWVJbWFnZX0gYWx0PVwiYXZhdGFyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNhcHRpb24xU3R5bGV9Pnt0aGlzLnByb3BzLkNhcHRpb24xfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+e3RoaXMucHJvcHMuQ2FwdGlvbjJ9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQ2FwdGlvbjN9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gYWJvdXQgcGFnZVxyXG5leHBvcnQgY2xhc3MgQWJvdXRNZWRpYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5BbGlnbiA9PT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nIHN0eWxlPXtBYm91dEltZ30gc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwibXQtNVwiPjxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5BbGlnbiA9PT0gXCJMZWZ0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTVcIj48aDE+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgc3R5bGU9e0Fib3V0SW1nfSBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gYWJvdXQgcGFnZSBmb3IgcmVzdW1lXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVMaXN0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiVGV4dC1MZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlPnt0aGlzLnByb3BzLlN1YnRpdGxlfTwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByb3BzLkl0ZW0xfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByb3BzLkl0ZW0yfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByb3BzLkl0ZW0zfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByb3BzLkl0ZW00fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy91c2VkIGluIHJlc3VtZSBmb3IgZXhwZXJpZW5jZSBzZWN0aW9uXHJcbmV4cG9ydCBjbGFzcyBUaHJlZUNvbHVtbkNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+PGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9uMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb24zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2VcclxuZXhwb3J0IGNsYXNzIEhvbWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3RoaXMucHJvcHMuVGl0bGV9PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgdG9wIHN0eWxlPXtDYXJkSW1hZ2VTdHlsZX0gc3JjPXt0aGlzLnByb3BzLkltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlPnt0aGlzLnByb3BzLlN1YnRpdGxlfTwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt0aGlzLnByb3BzLkxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5CdXR0b25UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL0QgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJsZXNzICBjbGFzc05hbWU9XCIgbWwtNCBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgIHRleHQtbGVmdCBoNFwiPlN0cmVuZ3RoOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlICB0ZXh0LWxlZnQgaDRcIj4geyB0aGlzLnByb3BzLlN0cmVuZ3RoIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCAgdGV4dC1sZWZ0IGg0XCI+Q29uc3RpdHV0aW9uOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlICB0ZXh0LWxlZnQgaDRcIj4geyB0aGlzLnByb3BzLkNvbnN0aXR1dGlvbiB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgIHRleHQtbGVmdCBoNFwiPkRleHRlcml0eTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSAgdGV4dC1sZWZ0IGg0XCI+IHsgdGhpcy5wcm9wcy5EZXh0ZXJpdHkgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkICB0ZXh0LWxlZnQgaDRcIj5IaXRwb2ludHM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgIHRleHQtbGVmdCBoNFwiPiB7IHRoaXMucHJvcHMuSGl0cG9pbnRzIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCAgdGV4dC1sZWZ0IGg0XCI+RGFtYWdlIHBlciBIaXQ6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgIHRleHQtbGVmdCBoNFwiPiB7IHRoaXMucHJvcHMuRGFtYWdlIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IG1yLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3R5bGU9e0RhbmREQXZhdGFyfSBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBhbHQ9XCJoZXJvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEQgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIEF0dGFja1NlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm15LTQgbXgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aHVtYm5haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2FjaWNvbi5wbmdcIiBhbHQ9XCJzaGllbGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLkFDIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgLTIwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RodW1ibmFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2hpdGFkanVzdC5wbmdcIiBhbHQ9XCJpY29uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJIaXRBZGotSWNvbi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuSGl0QWRqIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMCUsIC0yMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBvbkNsaWNrPXsgdGhpcy5wcm9wcy5BdHRhY2tSb2xsIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5Sb2xsVGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QXR0YWNrIFJlc3VsdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhbGVydC1zdWNjZXNzIHctMTAwIHRleHQtY2VudGVyIG15LTVcIj57IHRoaXMucHJvcHMuRGlkSGl0IH08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgTmFtZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtci0zXCI+TmFtZTo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy52YWx1ZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMucHJvcHMuTmFtZUNoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ByZXZlbnQgZW50ZXIga2V5IHN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMgLyogRW50ZXIgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJtbC01IFwiIG9uQ2xpY2s9eyB0aGlzLnByb3BzLk5hbWVTdWJtaXQgfT5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\customComponents.js */"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        className: "my-4 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["thumbnail"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "HitAdj-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, this.props.HitAdj)))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex justify-content-center my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: this.props.AttackRoll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, this.props.RollTitle)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Attack Result:")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "alert-success w-100 text-center my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, this.props.DidHit)));
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
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
          lineNumber: 292
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "button",
        className: "ml-5 ",
        onClick: this.props.NameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Submit"))));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ })

})
//# sourceMappingURL=DandDpage.js.65684bc47d9e7956e62b.hot-update.js.map
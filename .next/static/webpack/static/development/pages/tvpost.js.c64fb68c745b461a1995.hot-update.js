webpackHotUpdate("static\\development\\pages\\tvpost.js",{

/***/ "./pages/customComponents.js":
/*!***********************************!*\
  !*** ./pages/customComponents.js ***!
  \***********************************/
/*! exports provided: NewTabLink, CenterFlexWrapDiv, LeftFlexWrapDiv, TvMazeHeader, TvMazePage, TvPostInfoLabel, TvPostInfoValue, TplistHeaderRow, NetworkDataFilter, ComplDataFilter, PercentCalc, DateCheck, TvMazeCard, CustomTabs, HomeCard, CustomJumbo, AboutMedia, ThreeColumnCard, CharacterSheet, AttackSection, AttackStatusDisplay, NameForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTabLink", function() { return NewTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterFlexWrapDiv", function() { return CenterFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftFlexWrapDiv", function() { return LeftFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvMazeHeader", function() { return TvMazeHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvMazePage", function() { return TvMazePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoLabel", function() { return TvPostInfoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoValue", function() { return TvPostInfoValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TplistHeaderRow", function() { return TplistHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDataFilter", function() { return NetworkDataFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplDataFilter", function() { return ComplDataFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentCalc", function() { return PercentCalc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCheck", function() { return DateCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvMazeCard", function() { return TvMazeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTabs", function() { return CustomTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return HomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomJumbo", function() { return CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMedia", function() { return AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackSection", function() { return AttackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackStatusDisplay", function() { return AttackStatusDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameForm", function() { return NameForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jsxstyles */ "./pages/jsxstyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js";


/* **************** 
*   Imports       * 
******************/





/* *********************************
*   Export styled components       * 
***********************************/

function NewTabLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
    className: props.Style,
    href: props.Link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.children);
} //used in home page, attacksim

function CenterFlexWrapDiv(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.children);
} //used in tvpost, tvpage

function LeftFlexWrapDiv(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, props.children);
}
function TvMazeHeader() {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/tvpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TvpageStyle"].Link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Search Page")));
}
function TvMazePage(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TvpageStyle"].Layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TvMazeHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), props.children);
}
function TvPostInfoLabel(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "h2 text-left w-25 m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, props.children);
}
function TvPostInfoValue(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "text-left m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, props.children));
} //used in provider compliance

function TplistHeaderRow(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: "p-0 bg-secondary text-white rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, props.children);
}
/* *********************** 
*   Export functions     * 
**************************/
//used in providerstats

function NetworkDataFilter(props) {
  var Fone = props.Filter1;
  var Vone = props.Value1;
  var Ftwo = props.Filter2;
  var Vtwo = props.Value2;
  var Data = props.Info;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, Data.filter(function (Data) {
    return Data[Fone] === Vone && Data[Ftwo] === Vtwo;
  }).length);
} //used in providerstats

function ComplDataFilter(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, Data.filter(function (Data) {
    return Data[Fone][Fonekey] < Vone;
  }).length);
} //used in providerstats

function PercentCalc(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  var Divider = props.Divider;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, Math.floor(Data.filter(function (Data) {
    return Data[Fone][Fonekey] < Vone;
  }).length / Divider * 100) + '%');
} //used in providerCompliance

function DateCheck(props) {
  var date = props.Date;

  if (date < "2019-09-22") {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: "bg-danger text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, date);
  } else if (date < "2019-10-22" && date > "2019-09-22") {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: "bg-warning text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, date);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, date);
  }
} //used in TvPage and TVPost

function TvMazeCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
    style: props.CardStyle,
    className: props.CardClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
    className: "m-4 text-center",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TvpageStyle"].Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, props.Title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
    className: props.ImgClass,
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TvpageStyle"].Image,
    src: props.ImgSrc,
    alt: props.ImgAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
    className: "text-center my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TvpageStyle"].Cast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, props.SubTitle))), props.Link);
} //used in ProviderCompliance, providerData and TVpost

function CustomTabs(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('1'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
    tabs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
      active: activeTab === '1'
    }),
    onClick: function onClick() {
      toggle('1');
    },
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["Pointer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, props.Tab1Name)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
      active: activeTab === '2'
    }),
    onClick: function onClick() {
      toggle('2');
    },
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["Pointer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, props.Tab2Name))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["TabContent"], {
    activeTab: activeTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tabId: "1",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TabStyle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, props.Tab1Content), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tabId: "2",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["TabStyle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, props.Tab2Content)));
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["HomeCardStyle"].Card,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["HomeCardStyle"].Title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
        top: true,
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["ImageStyles"].HomeCard,
        src: this.props.Image,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardText"], {
        style: {
          height: '80px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, this.props.Description), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "w-100 p-0 m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NewTabLink, {
        Style: "btn btn-dark w-100 p-2",
        Link: this.props.Link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, this.props.ButtonTitle)))));
    }
  }]);

  return HomeCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //used in Resumeview, about page and providerdata

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
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, this.props.Caption2));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "container-fluid text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["ImageStyles"].HomeAvatar,
          alt: "avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, this.props.Caption2, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }), this.props.Caption3));
      }
    }
  }]);

  return CustomJumbo;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //used in about page

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
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "py-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["ImageStyles"].About,
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, this.props.Description)))));
      }

      if (this.props.Align === "Left") {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "py-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }, this.props.Description)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["ImageStyles"].About,
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //used in resume for experience section

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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, this.props.Description1)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, this.props.Description2)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //D and D application

var CharacterSheet =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CharacterSheet, _React$Component5);

  function CharacterSheet() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CharacterSheet);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CharacterSheet).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CharacterSheet, [{
    key: "render",
    value: function render() {
      function DandDTableLabel(props) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "text-muted text-left h4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          },
          __self: this
        }, props.children);
      }

      function DandDTableValue(props) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "text-white text-left h4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 423
          },
          __self: this
        }, props.children);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        borderless: true,
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, this.props.Strength)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, this.props.Constitution)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, this.props.Dexterity)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, this.props.Hitpoints != "Dead" && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, this.props.Hitpoints) || react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-danger h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, this.props.Hitpoints)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(DandDTableValue, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, this.props.Damage))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: {
          size: 'auto',
          offset: 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["DandDStyle"].Avatar,
        src: this.props.ImgUrl,
        alt: "Avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      })))));
    }
  }]);

  return CharacterSheet;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // D and D application

var AttackSection =
/*#__PURE__*/
function (_React$Component6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSection, _React$Component6);

  function AttackSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AttackSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AttackSection).call(this, props));
    _this.RollResult = _this.RollResult.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.AttackBanner = _this.AttackBanner.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.AttackButton = _this.AttackButton.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  } //Shows attack roll number with special display for
  //crit scrike (natural 20 on roll)


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AttackSection, [{
    key: "RollResult",
    value: function RollResult() {
      if (this.props.Roll === 'Crit Strike') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "text-danger font-italic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 493
          },
          __self: this
        }, "Critical Strike!");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 499
          },
          __self: this
        }, this.props.Roll);
      }
    } //shows attack result of hit/miss or place holder for
    //result display.

  }, {
    key: "AttackBanner",
    value: function AttackBanner() {
      var Result = this.props.DidHit;

      if (Result === "Hit") {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "alert alert-success py-2 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 510
          },
          __self: this
        }, "Hit!");
      }

      if (Result === "Miss") {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "alert alert-danger py-2 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 514
          },
          __self: this
        }, "Miss");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
          className: "text-white text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          __self: this
        }, "(Attack Result displayed here)");
      }
    }
    /*Function to display attack button based on initiative roll and attack turn. Pulls
    AttackTurn functon and Attackroll functions from either herofunctions.js or monsterfunctions.js
    as itentified in props */

  }, {
    key: "AttackButton",
    value: function AttackButton() {
      if (this.props.AttackTurn === true) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          onMouseDown: this.props.AttackRoll,
          onMouseUp: this.props.NextTurn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 531
          },
          __self: this
        }, this.props.RollTitle);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          className: "text-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 540
          },
          __self: this
        }, "Not your turn");
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["DandDStyle"].thumbnail,
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "AC-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, this.props.AC)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_11__["DandDStyle"].thumbnail,
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1953405926",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "HitAdj-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, this.props.HitAdj)))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1953405926",
        __self: this
      }, ".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd2pCZ0MsQUFHK0MsQUFNQSxrQkFMVCxBQU1ELFFBQ0UsQ0FOQSxTQU9zQixDQU5BLHdHQU9wQyxDQU5BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqKioqKioqKioqKioqIFxyXG4qICAgSW1wb3J0cyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgQ2FyZCwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRTdWJ0aXRsZSwgXHJcbiAgICBSb3csIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIEJ1dHRvbiwgQ29sbGFwc2UsIFxyXG4gICAgVGFibGUsIEp1bWJvdHJvbiwgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rXHJcbn0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgeyBIb21lQ2FyZFN0eWxlLCBEYW5kRFN0eWxlLCBJbWFnZVN0eWxlcywgVHZwYWdlU3R5bGUsIFBvaW50ZXIsIFRhYlN0eWxlXHJcbn0gZnJvbSAnLi9qc3hzdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAgIEV4cG9ydCBzdHlsZWQgY29tcG9uZW50cyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdUYWJMaW5rKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwcm9wcy5TdHlsZX1cclxuICAgICAgICAgICAgaHJlZj17cHJvcHMuTGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYT5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2UsIGF0dGFja3NpbVxyXG5leHBvcnQgZnVuY3Rpb24gQ2VudGVyRmxleFdyYXBEaXYocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gdHZwb3N0LCB0dnBhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIExlZnRGbGV4V3JhcERpdihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWxlZnRcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFR2TWF6ZUhlYWRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90dnBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtUdnBhZ2VTdHlsZS5MaW5rfT5TZWFyY2ggUGFnZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHZNYXplUGFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtUdnBhZ2VTdHlsZS5MYXlvdXR9PlxyXG4gICAgICAgICAgICA8VHZNYXplSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFR2UG9zdEluZm9MYWJlbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDx0ZCBjbGFzc05hbWU9XCJoMiB0ZXh0LWxlZnQgdy0yNSBtLTAgcC0yXCI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC90ZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUdlBvc3RJbmZvVmFsdWUocHJvcHMpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG0tMCBwLTJcIj5cclxuICAgICAgICAgICAgPHNtYWxsPntwcm9wcy5jaGlsZHJlbn08L3NtYWxsPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXIgY29tcGxpYW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gVHBsaXN0SGVhZGVyUm93IChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMCBiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBFeHBvcnQgZnVuY3Rpb25zICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vdXNlZCBpbiBwcm92aWRlcnN0YXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXR3b3JrRGF0YUZpbHRlcihwcm9wcykge1xyXG4gICAgbGV0IEZvbmUgPSBwcm9wcy5GaWx0ZXIxO1xyXG4gICAgbGV0IFZvbmUgPSBwcm9wcy5WYWx1ZTE7XHJcbiAgICBsZXQgRnR3byA9IHByb3BzLkZpbHRlcjI7XHJcbiAgICBsZXQgVnR3byA9IHByb3BzLlZhbHVlMjtcclxuICAgIGxldCBEYXRhID0gcHJvcHMuSW5mbztcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj57RGF0YS5maWx0ZXIoRGF0YSA9PiBEYXRhW0ZvbmVdID09PSBWb25lICYmIERhdGFbRnR3b10gPT09IFZ0d28pLmxlbmd0aH08L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJzdGF0c1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tcGxEYXRhRmlsdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBEYXRhID0gcHJvcHMuSW5mb1xyXG4gICAgY29uc3QgRm9uZSA9IHByb3BzLkZpbHRlcjE7XHJcbiAgICBjb25zdCBGb25la2V5ID0gcHJvcHMuRmlsdGVyMWNoaWxkO1xyXG4gICAgY29uc3QgVm9uZSA9IHByb3BzLlZhbHVlMTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuPntEYXRhLmZpbHRlcihEYXRhID0+IERhdGFbRm9uZV1bRm9uZWtleV0gPCBWb25lKS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJzdGF0c1xyXG5leHBvcnQgZnVuY3Rpb24gUGVyY2VudENhbGMocHJvcHMpIHtcclxuICAgIGNvbnN0IERhdGEgPSBwcm9wcy5JbmZvXHJcbiAgICBjb25zdCBGb25lID0gcHJvcHMuRmlsdGVyMTtcclxuICAgIGNvbnN0IEZvbmVrZXkgPSBwcm9wcy5GaWx0ZXIxY2hpbGQ7XHJcbiAgICBjb25zdCBWb25lID0gcHJvcHMuVmFsdWUxO1xyXG4gICAgY29uc3QgRGl2aWRlciA9IHByb3BzLkRpdmlkZXI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGEuZmlsdGVyKERhdGEgPT4gRGF0YVtGb25lXVtGb25la2V5XSA8IFZvbmUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICkgLyBEaXZpZGVyICogMTAwXHJcbiAgICAgICAgICAgICAgICApICsgJyUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vdXNlZCBpbiBwcm92aWRlckNvbXBsaWFuY2VcclxuZXhwb3J0IGZ1bmN0aW9uIERhdGVDaGVjayhwcm9wcykge1xyXG4gICAgdmFyIGRhdGUgPSBwcm9wcy5EYXRlO1xyXG4gICAgXHJcbiAgICBpZiAoZGF0ZSA8IFwiMjAxOS0wOS0yMlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZGFuZ2VyIHRleHQtd2hpdGVcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChkYXRlIDwgXCIyMDE5LTEwLTIyXCIgJiYgZGF0ZSA+IFwiMjAxOS0wOS0yMlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctd2FybmluZyB0ZXh0LXdoaXRlXCI+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbi8vdXNlZCBpbiBUdlBhZ2UgYW5kIFRWUG9zdFxyXG5leHBvcnQgZnVuY3Rpb24gVHZNYXplQ2FyZChwcm9wcykge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXtwcm9wcy5DYXJkU3R5bGV9IGNsYXNzTmFtZT17cHJvcHMuQ2FyZENsYXNzTmFtZX0+XHJcbiAgICAgICAgPENhcmRUaXRsZSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibS00IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e1R2cGFnZVN0eWxlLlRpdGxlfT5cclxuICAgICAgICAgICAge3Byb3BzLlRpdGxlfVxyXG4gICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgPENhcmRJbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLkltZ0NsYXNzfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtUdnBhZ2VTdHlsZS5JbWFnZX0gXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLkltZ1NyY30gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb3BzLkltZ0FsdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17VHZwYWdlU3R5bGUuQ2FzdH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuU3ViVGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIHtwcm9wcy5MaW5rfVxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBQcm92aWRlckNvbXBsaWFuY2UsIHByb3ZpZGVyRGF0YSBhbmQgVFZwb3N0XHJcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21UYWJzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJzEnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9nZ2xlID0gdGFiID0+IHtcclxuICAgICAgICBpZihhY3RpdmVUYWIgIT09IHRhYikgc2V0QWN0aXZlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicz5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMScgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcxJyk7IH19IHN0eWxlPXtQb2ludGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjFOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMicgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcyJyk7IH19IHN0eWxlPXtQb2ludGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifT5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMVwiIHN0eWxlPXtUYWJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjFDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiSWQ9XCIyXCIgc3R5bGU9e1RhYlN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuVGFiMkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBFeHBvcnQgQ2xhc3NlcyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2VcclxuZXhwb3J0IGNsYXNzIEhvbWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17SG9tZUNhcmRTdHlsZS5DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXtIb21lQ2FyZFN0eWxlLlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgdG9wIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17SW1hZ2VTdHlsZXMuSG9tZUNhcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuSW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlPnt0aGlzLnByb3BzLlN1YnRpdGxlfTwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQgc3R5bGU9e3toZWlnaHQ6ICc4MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy0xMDAgcC0wIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1RhYkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHlsZT1cImJ0biBidG4tZGFyayB3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbms9e3RoaXMucHJvcHMuTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkJ1dHRvblRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXdUYWJMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy91c2VkIGluIFJlc3VtZXZpZXcsIGFib3V0IHBhZ2UgYW5kIHByb3ZpZGVyZGF0YVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSnVtYm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkltZ1VybCA9PT0gXCJub2ltYWdlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQ2FwdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkNhcHRpb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTMgdGV4dC1jZW50ZXJcIj57dGhpcy5wcm9wcy5UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2F2YXRhci5qcGdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtJbWFnZVN0eWxlcy5Ib21lQXZhdGFyfSBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQ2FwdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkNhcHRpb24yfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5DYXB0aW9uM31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBhYm91dCBwYWdlXHJcbmV4cG9ydCBjbGFzcyBBYm91dE1lZGlhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5BbGlnbiA9PT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0ltYWdlU3R5bGVzLkFib3V0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkFsaWduID09PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17SW1hZ2VTdHlsZXMuQWJvdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiByZXN1bWUgZm9yIGV4cGVyaWVuY2Ugc2VjdGlvblxyXG5leHBvcnQgY2xhc3MgVGhyZWVDb2x1bW5DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+PGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb24xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9uMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbjN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIERhbmREVGFibGVMYWJlbChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1sZWZ0IGg0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIERhbmREVGFibGVWYWx1ZShwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZWZ0IGg0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17eyBzaXplOiAnYXV0bycsIG9mZnNldDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGJvcmRlcmxlc3MgIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5TdHJlbmd0aDo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT57dGhpcy5wcm9wcy5TdHJlbmd0aH08L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5Db25zdGl0dXRpb246PC9EYW5kRFRhYmxlTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlVmFsdWU+e3RoaXMucHJvcHMuQ29uc3RpdHV0aW9ufTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkRleHRlcml0eTo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT57dGhpcy5wcm9wcy5EZXh0ZXJpdHl9PC9EYW5kRFRhYmxlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlTGFiZWw+SGl0cG9pbnRzOjwvRGFuZERUYWJsZUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSGl0cG9pbnRzICE9IFwiRGVhZFwiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLkhpdHBvaW50c308L3NwYW4+IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnt0aGlzLnByb3BzLkhpdHBvaW50c308L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkRhbWFnZSBwZXIgSGl0OjwvRGFuZERUYWJsZUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZVZhbHVlPnt0aGlzLnByb3BzLkRhbWFnZX08L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209e3sgc2l6ZTogJ2F1dG8nLCBvZmZzZXQ6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nICBzdHlsZT17RGFuZERTdHlsZS5BdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5JbWdVcmx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEIGFuZCBEIGFwcGxpY2F0aW9uXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2tTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuUm9sbFJlc3VsdCA9IHRoaXMuUm9sbFJlc3VsdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuQXR0YWNrQmFubmVyID0gdGhpcy5BdHRhY2tCYW5uZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLkF0dGFja0J1dHRvbiA9IHRoaXMuQXR0YWNrQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vU2hvd3MgYXR0YWNrIHJvbGwgbnVtYmVyIHdpdGggc3BlY2lhbCBkaXNwbGF5IGZvclxyXG4gICAgLy9jcml0IHNjcmlrZSAobmF0dXJhbCAyMCBvbiByb2xsKVxyXG4gICAgUm9sbFJlc3VsdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5Sb2xsID09PSAnQ3JpdCBTdHJpa2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciBmb250LWl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyaXRpY2FsIFN0cmlrZSFcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuUm9sbH08L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vc2hvd3MgYXR0YWNrIHJlc3VsdCBvZiBoaXQvbWlzcyBvciBwbGFjZSBob2xkZXIgZm9yXHJcbiAgICAvL3Jlc3VsdCBkaXNwbGF5LlxyXG4gICAgQXR0YWNrQmFubmVyKCkge1xyXG4gICAgICAgIGNvbnN0IFJlc3VsdCA9IHRoaXMucHJvcHMuRGlkSGl0O1xyXG4gICAgICAgIGlmIChSZXN1bHQgPT09IFwiSGl0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzIHB5LTIgdGV4dC1jZW50ZXJcIj5IaXQhPC9oMj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGlmIChSZXN1bHQgPT09IFwiTWlzc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIHB5LTIgdGV4dC1jZW50ZXJcIj5NaXNzPC9oMj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAoQXR0YWNrIFJlc3VsdCBkaXNwbGF5ZWQgaGVyZSlcclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKkZ1bmN0aW9uIHRvIGRpc3BsYXkgYXR0YWNrIGJ1dHRvbiBiYXNlZCBvbiBpbml0aWF0aXZlIHJvbGwgYW5kIGF0dGFjayB0dXJuLiBQdWxsc1xyXG4gICAgQXR0YWNrVHVybiBmdW5jdG9uIGFuZCBBdHRhY2tyb2xsIGZ1bmN0aW9ucyBmcm9tIGVpdGhlciBoZXJvZnVuY3Rpb25zLmpzIG9yIG1vbnN0ZXJmdW5jdGlvbnMuanNcclxuICAgIGFzIGl0ZW50aWZpZWQgaW4gcHJvcHMgKi9cclxuICAgIEF0dGFja0J1dHRvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5BdHRhY2tUdXJuID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uICBcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5BdHRhY2tSb2xsfSBcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXAgPSB7dGhpcy5wcm9wcy5OZXh0VHVybn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Sb2xsVGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPk5vdCB5b3VyIHR1cm48L2g0PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJteS00IG14LTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17RGFuZERTdHlsZS50aHVtYm5haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2FjaWNvbi5wbmdcIiBhbHQ9XCJzaGllbGRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJBQy1JY29uLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQUN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm15LTQgbXgtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17RGFuZERTdHlsZS50aHVtYm5haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9oaXRhZGp1c3QucG5nXCIgYWx0PVwiaWNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiSGl0QWRqLUljb24tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSGl0QWRqfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5BQy1JY29uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5IaXRBZGotSWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuQXR0YWNrQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5BdHRhY2sgUmVzdWx0OjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrIHJvbGw6ICZuYnNwOyB7dGhpcy5Sb2xsUmVzdWx0KCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLkF0dGFja0Jhbm5lcigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBEYW5kRCBwYWdlIHRvIGRpc3BsYXkgTmFtZSxJbml0aWF0aXZlIGFuZCBIUCBzdGF0dXMgZm9yIGhlcm8gYW5kIFxyXG4vL21vbnN0ZXIuXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2tTdGF0dXNEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPnt0aGlzLnByb3BzLk5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5pbmlhdGl2ZTo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Jbml0aWF0aXZlICE9IFwiU2Vjb25kXCIgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkluaXRpYXRpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiB8fCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkluaXRpYXRpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5IaXQgUG9pbnRzOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5IUCAhPSBcIkRlYWRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5IUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSFB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgTmFtZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtjb2xsYXBzZTogZmFsc2V9O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtjb2xsYXBzZTogIXN0YXRlLmNvbGxhcHNlfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybSA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iLTIgbXItc20tMiBtYi1zbS0yIGQtZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2xsYXBzZT8gJ0hpZGUnIDogJ0NoYW5nZSBOYW1lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLk5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUHJldmVudCBlbnRlciBrZXkgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMTMgLyogRW50ZXIgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuTmFtZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybT4gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js */")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex justify-content-center my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, this.AttackButton()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, "Attack Result:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "mt-2 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, "attack roll: \xA0 ", this.RollResult())), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, this.AttackBanner()));
    }
  }]);

  return AttackSection;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //used in DandD page to display Name,Initiative and HP status for hero and 
//monster.

var AttackStatusDisplay =
/*#__PURE__*/
function (_React$Component7) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackStatusDisplay, _React$Component7);

  function AttackStatusDisplay() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AttackStatusDisplay);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AttackStatusDisplay).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AttackStatusDisplay, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, this.props.Name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "text-center pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        },
        __self: this
      }, "iniative:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, this.props.Initiative != "Second" && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613
        },
        __self: this
      }, this.props.Initiative) || react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616
        },
        __self: this
      }, this.props.Initiative))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        },
        __self: this
      }, "Hit Points:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        },
        __self: this
      }, this.props.HP != "Dead" && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        __self: this
      }, this.props.HP) || react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629
        },
        __self: this
      }, this.props.HP)))));
    }
  }]);

  return AttackStatusDisplay;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //D and D application

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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        className: "mb-2 mr-sm-2 mb-sm-2 d-flex flex-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "btn text-white",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
        },
        __self: this
      }, this.state.collapse ? 'Hide' : 'Change Name'))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Collapse"], {
        isOpen: this.state.collapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "d-flex flex-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        maxLength: "20",
        value: this.props.Value,
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
          lineNumber: 669
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "m-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: this.props.NameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        __self: this
      }, "Submit"))))));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/***/ }),

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
            lineNumber: 117
          },
          __self: this
        }, cast.character.name)),
        Link: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_7__["NewTabLink"], {
          Style: "btn btn-dark w-100 mt-3",
          Link: cast.person.url,
          Title: "Actor Page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
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
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
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
                lineNumber: 167
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
                lineNumber: 189
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
              lineNumber: 209
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
        lineNumber: 135
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
//# sourceMappingURL=tvpost.js.c64fb68c745b461a1995.hot-update.js.map
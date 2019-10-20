webpackHotUpdate("static\\development\\pages\\tvpost.js",{

/***/ "./pages/customComponents.js":
/*!***********************************!*\
  !*** ./pages/customComponents.js ***!
  \***********************************/
/*! exports provided: NewTabLink, CenterFlexWrapDiv, LeftFlexWrapDiv, TvMazeHeader, TvMazePage, TvPostInfoLabel, TvPostInfoValue, TplistHeaderRow, NetworkDataFilter, ComplDataFilter, PercentCalc, DateCheck, CustomCard, CustomTabs, HomeCard, CustomJumbo, AboutMedia, ThreeColumnCard, CharacterSheet, AttackSection, AttackStatusDisplay, NameForm */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCard", function() { return CustomCard; });
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

function CustomCard(props) {
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
    style: props.ImgStyle,
    src: props.ImgSrc,
    alt: props.ImgAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardSubtitle"], {
    className: props.SubTitleClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    style: props.SubTitleStyle,
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
      }, ".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd2pCZ0MsQUFHK0MsQUFNQSxrQkFMVCxBQU1ELFFBQ0UsQ0FOQSxTQU9zQixDQU5BLHdHQU9wQyxDQU5BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGN1c3RvbUNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqKioqKioqKioqKioqKioqIFxyXG4qICAgSW1wb3J0cyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgQ2FyZCwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIENhcmRTdWJ0aXRsZSwgXHJcbiAgICBSb3csIENvbCwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIEJ1dHRvbiwgQ29sbGFwc2UsIFxyXG4gICAgVGFibGUsIEp1bWJvdHJvbiwgVGFiQ29udGVudCwgVGFiUGFuZSwgTmF2LCBOYXZJdGVtLCBOYXZMaW5rXHJcbn0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgeyBIb21lQ2FyZFN0eWxlLCBEYW5kRFN0eWxlLCBJbWFnZVN0eWxlcywgVHZwYWdlU3R5bGUsIFBvaW50ZXIsIFRhYlN0eWxlXHJcbn0gZnJvbSAnLi9qc3hzdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAgIEV4cG9ydCBzdHlsZWQgY29tcG9uZW50cyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdUYWJMaW5rKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwcm9wcy5TdHlsZX1cclxuICAgICAgICAgICAgaHJlZj17cHJvcHMuTGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYT5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2UsIGF0dGFja3NpbVxyXG5leHBvcnQgZnVuY3Rpb24gQ2VudGVyRmxleFdyYXBEaXYocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gdHZwb3N0LCB0dnBhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIExlZnRGbGV4V3JhcERpdihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWxlZnRcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFR2TWF6ZUhlYWRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90dnBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtUdnBhZ2VTdHlsZS5MaW5rfT5TZWFyY2ggUGFnZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHZNYXplUGFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtUdnBhZ2VTdHlsZS5MYXlvdXR9PlxyXG4gICAgICAgICAgICA8VHZNYXplSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFR2UG9zdEluZm9MYWJlbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDx0ZCBjbGFzc05hbWU9XCJoMiB0ZXh0LWxlZnQgdy0yNSBtLTAgcC0yXCI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC90ZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUdlBvc3RJbmZvVmFsdWUocHJvcHMpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG0tMCBwLTJcIj5cclxuICAgICAgICAgICAgPHNtYWxsPntwcm9wcy5jaGlsZHJlbn08L3NtYWxsPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXIgY29tcGxpYW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gVHBsaXN0SGVhZGVyUm93IChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMCBiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBFeHBvcnQgZnVuY3Rpb25zICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vdXNlZCBpbiBwcm92aWRlcnN0YXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXR3b3JrRGF0YUZpbHRlcihwcm9wcykge1xyXG4gICAgbGV0IEZvbmUgPSBwcm9wcy5GaWx0ZXIxO1xyXG4gICAgbGV0IFZvbmUgPSBwcm9wcy5WYWx1ZTE7XHJcbiAgICBsZXQgRnR3byA9IHByb3BzLkZpbHRlcjI7XHJcbiAgICBsZXQgVnR3byA9IHByb3BzLlZhbHVlMjtcclxuICAgIGxldCBEYXRhID0gcHJvcHMuSW5mbztcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj57RGF0YS5maWx0ZXIoRGF0YSA9PiBEYXRhW0ZvbmVdID09PSBWb25lICYmIERhdGFbRnR3b10gPT09IFZ0d28pLmxlbmd0aH08L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJzdGF0c1xyXG5leHBvcnQgZnVuY3Rpb24gQ29tcGxEYXRhRmlsdGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBEYXRhID0gcHJvcHMuSW5mb1xyXG4gICAgY29uc3QgRm9uZSA9IHByb3BzLkZpbHRlcjE7XHJcbiAgICBjb25zdCBGb25la2V5ID0gcHJvcHMuRmlsdGVyMWNoaWxkO1xyXG4gICAgY29uc3QgVm9uZSA9IHByb3BzLlZhbHVlMTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuPntEYXRhLmZpbHRlcihEYXRhID0+IERhdGFbRm9uZV1bRm9uZWtleV0gPCBWb25lKS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJzdGF0c1xyXG5leHBvcnQgZnVuY3Rpb24gUGVyY2VudENhbGMocHJvcHMpIHtcclxuICAgIGNvbnN0IERhdGEgPSBwcm9wcy5JbmZvXHJcbiAgICBjb25zdCBGb25lID0gcHJvcHMuRmlsdGVyMTtcclxuICAgIGNvbnN0IEZvbmVrZXkgPSBwcm9wcy5GaWx0ZXIxY2hpbGQ7XHJcbiAgICBjb25zdCBWb25lID0gcHJvcHMuVmFsdWUxO1xyXG4gICAgY29uc3QgRGl2aWRlciA9IHByb3BzLkRpdmlkZXI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGEuZmlsdGVyKERhdGEgPT4gRGF0YVtGb25lXVtGb25la2V5XSA8IFZvbmUpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICkgLyBEaXZpZGVyICogMTAwXHJcbiAgICAgICAgICAgICAgICApICsgJyUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vdXNlZCBpbiBwcm92aWRlckNvbXBsaWFuY2VcclxuZXhwb3J0IGZ1bmN0aW9uIERhdGVDaGVjayhwcm9wcykge1xyXG4gICAgdmFyIGRhdGUgPSBwcm9wcy5EYXRlO1xyXG4gICAgXHJcbiAgICBpZiAoZGF0ZSA8IFwiMjAxOS0wOS0yMlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZGFuZ2VyIHRleHQtd2hpdGVcIj57ZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmIChkYXRlIDwgXCIyMDE5LTEwLTIyXCIgJiYgZGF0ZSA+IFwiMjAxOS0wOS0yMlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctd2FybmluZyB0ZXh0LXdoaXRlXCI+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbi8vdXNlZCBpbiBUdlBhZ2UgYW5kIFRWUG9zdFxyXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tQ2FyZChwcm9wcykge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXtwcm9wcy5DYXJkU3R5bGV9IGNsYXNzTmFtZT17cHJvcHMuQ2FyZENsYXNzTmFtZX0+XHJcbiAgICAgICAgPENhcmRUaXRsZSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibS00IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e1R2cGFnZVN0eWxlLlRpdGxlfT5cclxuICAgICAgICAgICAge3Byb3BzLlRpdGxlfVxyXG4gICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgPENhcmRJbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLkltZ0NsYXNzfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtwcm9wcy5JbWdTdHlsZX0gXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLkltZ1NyY30gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb3BzLkltZ0FsdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRTdWJ0aXRsZSBjbGFzc05hbWU9e3Byb3BzLlN1YlRpdGxlQ2xhc3N9PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3Byb3BzLlN1YlRpdGxlU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLlN1YlRpdGxlfVxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICB7cHJvcHMuTGlua31cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL3VzZWQgaW4gUHJvdmlkZXJDb21wbGlhbmNlLCBwcm92aWRlckRhdGEgYW5kIFRWcG9zdFxyXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tVGFicyhwcm9wcykge1xyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCcxJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZ2dsZSA9IHRhYiA9PiB7XHJcbiAgICAgICAgaWYoYWN0aXZlVGFiICE9PSB0YWIpIHNldEFjdGl2ZVRhYih0YWIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2IHRhYnM+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzEnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMScpOyB9fSBzdHlsZT17UG9pbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5UYWIxTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6IGFjdGl2ZVRhYiA9PT0gJzInIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZSgnMicpOyB9fSBzdHlsZT17UG9pbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5UYWIyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8VGFiQ29udGVudCBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWJJZD1cIjFcIiBzdHlsZT17VGFiU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5UYWIxQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMlwiIHN0eWxlPXtUYWJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjJDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqIFxyXG4qICAgRXhwb3J0IENsYXNzZXMgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL3VzZWQgaW4gaG9tZSBwYWdlXHJcbmV4cG9ydCBjbGFzcyBIb21lQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e0hvbWVDYXJkU3R5bGUuQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17SG9tZUNhcmRTdHlsZS5UaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLlRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nIHRvcCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0ltYWdlU3R5bGVzLkhvbWVDYXJkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTdWJ0aXRsZT57dGhpcy5wcm9wcy5TdWJ0aXRsZX08L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0IHN0eWxlPXt7aGVpZ2h0OiAnODBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctMTAwIHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdUYWJMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3R5bGU9XCJidG4gYnRuLWRhcmsgdy0xMDAgcC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rPXt0aGlzLnByb3BzLkxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5CdXR0b25UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV3VGFiTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBSZXN1bWV2aWV3LCBhYm91dCBwYWdlIGFuZCBwcm92aWRlcmRhdGFcclxuZXhwb3J0IGNsYXNzIEN1c3RvbUp1bWJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5JbWdVcmwgPT09IFwibm9pbWFnZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjFTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkNhcHRpb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNhcHRpb24yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5DYXB0aW9uMn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zIHRleHQtY2VudGVyXCI+e3RoaXMucHJvcHMuVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hdmF0YXIuanBnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17SW1hZ2VTdHlsZXMuSG9tZUF2YXRhcn0gYWx0PVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjFTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkNhcHRpb24xfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNhcHRpb24yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5DYXB0aW9uMn08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQ2FwdGlvbjN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gYWJvdXQgcGFnZVxyXG5leHBvcnQgY2xhc3MgQWJvdXRNZWRpYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuQWxpZ24gPT09IFwiUmlnaHRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtJbWFnZVN0eWxlcy5BYm91dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5JbWdVcmx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5BbGlnbiA9PT0gXCJMZWZ0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DbGFzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwibXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0ltYWdlU3R5bGVzLkFib3V0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gcmVzdW1lIGZvciBleHBlcmllbmNlIHNlY3Rpb25cclxuZXhwb3J0IGNsYXNzIFRocmVlQ29sdW1uQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktM1wiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPjxoMT57dGhpcy5wcm9wcy5UaXRsZX08L2gxPjwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9uMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb24zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0QgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBmdW5jdGlvbiBEYW5kRFRhYmxlTGFiZWwocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtbGVmdCBoNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBEYW5kRFRhYmxlVmFsdWUocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGVmdCBoNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209e3sgc2l6ZTogJ2F1dG8nLCBvZmZzZXQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJsZXNzICBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlTGFiZWw+U3RyZW5ndGg6PC9EYW5kRFRhYmxlTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlVmFsdWU+e3RoaXMucHJvcHMuU3RyZW5ndGh9PC9EYW5kRFRhYmxlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlTGFiZWw+Q29uc3RpdHV0aW9uOjwvRGFuZERUYWJsZUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZVZhbHVlPnt0aGlzLnByb3BzLkNvbnN0aXR1dGlvbn08L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5EZXh0ZXJpdHk6PC9EYW5kRFRhYmxlTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlVmFsdWU+e3RoaXMucHJvcHMuRGV4dGVyaXR5fTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkhpdHBvaW50czo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhpdHBvaW50cyAhPSBcIkRlYWRcIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zcGFuPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5EYW1hZ2UgcGVyIEhpdDo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT57dGhpcy5wcm9wcy5EYW1hZ2V9PC9EYW5kRFRhYmxlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXt7IHNpemU6ICdhdXRvJywgb2Zmc2V0OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3R5bGU9e0RhbmREU3R5bGUuQXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgQXR0YWNrU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLlJvbGxSZXN1bHQgPSB0aGlzLlJvbGxSZXN1bHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLkF0dGFja0Jhbm5lciA9IHRoaXMuQXR0YWNrQmFubmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5BdHRhY2tCdXR0b24gPSB0aGlzLkF0dGFja0J1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL1Nob3dzIGF0dGFjayByb2xsIG51bWJlciB3aXRoIHNwZWNpYWwgZGlzcGxheSBmb3JcclxuICAgIC8vY3JpdCBzY3Jpa2UgKG5hdHVyYWwgMjAgb24gcm9sbClcclxuICAgIFJvbGxSZXN1bHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuUm9sbCA9PT0gJ0NyaXQgU3RyaWtlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcml0aWNhbCBTdHJpa2UhXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLlJvbGx9PC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3Nob3dzIGF0dGFjayByZXN1bHQgb2YgaGl0L21pc3Mgb3IgcGxhY2UgaG9sZGVyIGZvclxyXG4gICAgLy9yZXN1bHQgZGlzcGxheS5cclxuICAgIEF0dGFja0Jhbm5lcigpIHtcclxuICAgICAgICBjb25zdCBSZXN1bHQgPSB0aGlzLnByb3BzLkRpZEhpdDtcclxuICAgICAgICBpZiAoUmVzdWx0ID09PSBcIkhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2VzcyBweS0yIHRleHQtY2VudGVyXCI+SGl0ITwvaDI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBpZiAoUmVzdWx0ID09PSBcIk1pc3NcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBweS0yIHRleHQtY2VudGVyXCI+TWlzczwvaDI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKEF0dGFjayBSZXN1bHQgZGlzcGxheWVkIGhlcmUpXHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLypGdW5jdGlvbiB0byBkaXNwbGF5IGF0dGFjayBidXR0b24gYmFzZWQgb24gaW5pdGlhdGl2ZSByb2xsIGFuZCBhdHRhY2sgdHVybi4gUHVsbHNcclxuICAgIEF0dGFja1R1cm4gZnVuY3RvbiBhbmQgQXR0YWNrcm9sbCBmdW5jdGlvbnMgZnJvbSBlaXRoZXIgaGVyb2Z1bmN0aW9ucy5qcyBvciBtb25zdGVyZnVuY3Rpb25zLmpzXHJcbiAgICBhcyBpdGVudGlmaWVkIGluIHByb3BzICovXHJcbiAgICBBdHRhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuQXR0YWNrVHVybiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMuQXR0YWNrUm9sbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwID0ge3RoaXMucHJvcHMuTmV4dFR1cm59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuUm9sbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Ob3QgeW91ciB0dXJuPC9oND5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e0RhbmREU3R5bGUudGh1bWJuYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hY2ljb24ucG5nXCIgYWx0PVwic2hpZWxkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiQUMtSWNvbi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkFDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJteS00IG14LTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e0RhbmREU3R5bGUudGh1bWJuYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaGl0YWRqdXN0LnBuZ1wiIGFsdD1cImljb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkhpdEFkai1JY29uLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhpdEFkan1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQUMtSWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGl0QWRqLUljb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLkF0dGFja0J1dHRvbigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QXR0YWNrIFJlc3VsdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjayByb2xsOiAmbmJzcDsge3RoaXMuUm9sbFJlc3VsdCgpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5BdHRhY2tCYW5uZXIoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gRGFuZEQgcGFnZSB0byBkaXNwbGF5IE5hbWUsSW5pdGlhdGl2ZSBhbmQgSFAgc3RhdHVzIGZvciBoZXJvIGFuZCBcclxuLy9tb25zdGVyLlxyXG5leHBvcnQgY2xhc3MgQXR0YWNrU3RhdHVzRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj57dGhpcy5wcm9wcy5OYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+aW5pYXRpdmU6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSW5pdGlhdGl2ZSAhPSBcIlNlY29uZFwiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Jbml0aWF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gfHwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Jbml0aWF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SGl0IFBvaW50czo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSFAgIT0gXCJEZWFkXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSFB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0QgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIE5hbWVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Y29sbGFwc2U6IGZhbHNlfTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7Y29sbGFwc2U6ICFzdGF0ZS5jb2xsYXBzZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm0gPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYi0yIG1yLXNtLTIgbWItc20tMiBkLWZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gdGV4dC13aGl0ZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sbGFwc2U/ICdIaWRlJyA6ICdDaGFuZ2UgTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLlZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5OYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1ByZXZlbnQgZW50ZXIga2V5IHN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzIC8qIEVudGVyICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLk5hbWVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0+IFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\customComponents.js */")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsxstyles */ "./pages/jsxstyles.js");
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customComponents */ "./pages/customComponents.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\tvpost.js";








var noimage = '/static/images/no-img.png';

var tvPost = function tvPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "the below content has been imported from", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.tvmaze.com",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "TVmaze.com")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvMazePage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h3 m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.show.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    borderless: true,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Type:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.show.type ? props.show.type : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Premiered:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.show.premiered ? props.show.premiered : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Status:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.show.status ? props.show.status : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Rating:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, props.show.rating.average ? props.show.rating.average : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Genre:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.show.genres.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, value, " \xA0");
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Seasons"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-center mr-5 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.show.image ? props.show.image.medium : noimage,
    alt: "no image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Summary:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Link:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["NewTabLink"], {
    Link: props.show.url,
    Title: props.show.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, props.show.name ? props.show.name : 'null')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["CustomTabs"], {
    Tab1Name: "Cast",
    Tab2Name: "Episodes",
    Tab1Content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["LeftFlexWrapDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, props.show._embedded.cast.map(function (cast) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "p-3",
        key: cast.person.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["CustomCard"], {
        CardStyle: {
          height: '570px'
        },
        Title: cast.person.name,
        ImgStyle: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["TvpageStyle"].Image,
        ImgSrc: cast.person.image === null && noimage || cast.character.image === null && cast.person.image.medium || cast.character.image.medium,
        ImgAlt: "castimage",
        SubTitleClass: "text-center my-2",
        SubTitleStyle: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["TvpageStyle"].Cast,
        SubTitle: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, "As: \xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, cast.character.name)),
        Link: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["NewTabLink"], {
          Style: "btn btn-dark w-100 mt-3",
          Link: cast.person.url,
          Title: "Actor Page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "Actor Page"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
              lineNumber: 161
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
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
                lineNumber: 171
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
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_8__["NewTabLink"], {
              Link: d.url,
              Title: "Episode Link",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
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
              lineNumber: 213
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
        lineNumber: 139
      },
      __self: this
    })
    /*End of Tab2Content*/
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://api.tvmaze.com/shows/".concat(id, "?embed[]=episodes&embed[]=cast&embed[]=seasons"));

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
//# sourceMappingURL=tvpost.js.3ff3171425072a9bbff1.hot-update.js.map
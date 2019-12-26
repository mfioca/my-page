module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      color: "dark",
      dark: true,
      expand: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
      onClick: this.toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      navbar: true,
      className: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      href: "https://www.linkedin.com/in/mark-fioca/",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "LinkedIn")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      href: "https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "DeviantArt")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      href: "https://github.com/mfioca/my-page",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      className: "ml-auto h4",
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      href: "mailto: mark@fioca.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Email")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      color: "dark",
      className: "h4",
      dark: true,
      expand: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
      onClick: this.toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "ml-auto",
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "About")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
      nav: true,
      inNavbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
      nav: true,
      caret: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Projects"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
      right: true,
      className: "bg-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-dark w-100",
      href: "/tvpage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "TvMaze"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-dark w-100",
      href: "/DandDpage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "DandD"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "btn-dark w-100",
      href: "/providerData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Provider List"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/customComponents.js":
/*!****************************************!*\
  !*** ./components/customComponents.js ***!
  \****************************************/
/*! exports provided: BackgroundDanger, BackgroundWarning, NewTabLink, CenterFlexWrapDiv, LeftFlexWrapDiv, TvMazeHeader, TvMazePage, TvPostInfoLabel, TvPostInfoValue, TplistHeaderRow, InfoField, NetworkDataFilter, ComplDataFilter, PercentCalc, DateCheck, TvMazeCard, CustomTabs, HomeCard, CustomJumbo, AboutMedia, ThreeColumnCard, CharacterSheet, AttackSection, AttackStatusDisplay, NameForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundDanger", function() { return BackgroundDanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundWarning", function() { return BackgroundWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTabLink", function() { return NewTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterFlexWrapDiv", function() { return CenterFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftFlexWrapDiv", function() { return LeftFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvMazeHeader", function() { return TvMazeHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvMazePage", function() { return TvMazePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoLabel", function() { return TvPostInfoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoValue", function() { return TvPostInfoValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TplistHeaderRow", function() { return TplistHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoField", function() { return InfoField; });
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsxstyles */ "./components/jsxstyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\customComponents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* **************** 
*   Imports       * 
******************/





/* *********************************
*   Export styled components       * 
***********************************/

function BackgroundDanger(props) {
  return __jsx("span", {
    className: "bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.children);
}
function BackgroundWarning(props) {
  return __jsx("span", {
    className: "bg-warning text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.children);
}
function NewTabLink(props) {
  return __jsx("a", {
    className: props.Style,
    href: props.Link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.children);
} //used in home page, attacksim

function CenterFlexWrapDiv(props) {
  return __jsx("div", {
    className: "d-flex flex-wrap justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, props.children);
} //used in tvpost, tvpage

function LeftFlexWrapDiv(props) {
  return __jsx("div", {
    className: "d-flex flex-wrap justify-content-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, props.children);
}
function TvMazeHeader() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/tvpage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TvpageStyle"].Link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Search Page")));
}
function TvMazePage(props) {
  return __jsx("div", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TvpageStyle"].Layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(TvMazeHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), props.children);
}
function TvPostInfoLabel(props) {
  return __jsx("td", {
    className: "h2 text-left w-25 m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, props.children);
}
function TvPostInfoValue(props) {
  return __jsx("td", {
    className: "text-left m-0 p-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, props.children));
} //used in provider compliance

function TplistHeaderRow(props) {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "p-0 bg-secondary text-white rounded-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, props.children);
} //used in providercompliance

function InfoField(props) {
  return __jsx("p", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["Tplist"].Info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, props.children);
}
/* *********************** 
*   Export functions     * 
**************************/
//used in providerstats

function NetworkDataFilter(props) {
  let Fone = props.Filter1;
  let Vone = props.Value1;
  let Ftwo = props.Filter2;
  let Vtwo = props.Value2;
  let Data = props.Info;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, Data.filter(Data => Data[Fone] === Vone && Data[Ftwo] === Vtwo).length);
} //used in providerstats

function ComplDataFilter(props) {
  const Data = props.Info;
  const Fone = props.Filter1;
  const Fonekey = props.Filter1child;
  const Vone = props.Value1;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, Data.filter(Data => Data[Fone][Fonekey] < Vone).length);
} //used in providerstats

function PercentCalc(props) {
  const Data = props.Info;
  const Fone = props.Filter1;
  const Fonekey = props.Filter1child;
  const Vone = props.Value1;
  const Divider = props.Divider;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, Math.floor(Data.filter(Data => Data[Fone][Fonekey] < Vone).length / Divider * 100) + '%');
} //used in providerCompliance

function DateCheck(props) {
  var date = props.Date;

  if (date < "2019-09-22") {
    return __jsx(BackgroundDanger, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, date);
  } else if (date < "2019-10-22" && date > "2019-09-22") {
    return __jsx(BackgroundWarning, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, date);
  } else {
    return __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, date);
  }
} //used in TvPage and TVPost

function TvMazeCard(props) {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: props.CardStyle,
    className: props.CardClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    className: "m-4 text-center",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TvpageStyle"].Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, props.Title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
    className: props.ImgClass,
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TvpageStyle"].Image,
    src: props.ImgSrc,
    alt: props.ImgAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
    className: "text-center my-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("h4", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TvpageStyle"].Cast,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, props.SubTitle)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, props.Description)), props.Link);
} //used in ProviderCompliance, providerData and TVpost

function CustomTabs(props) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    tabs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: activeTab === '1'
    }),
    onClick: () => {
      toggle('1');
    },
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["Pointer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, props.Tab1Name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: activeTab === '2'
    }),
    onClick: () => {
      toggle('2');
    },
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["Pointer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, props.Tab2Name))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    activeTab: activeTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "1",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TabStyle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, props.Tab1Content), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "2",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["TabStyle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, props.Tab2Content)));
}
/* *********************** 
*   Export Classes       * 
**************************/
//used in home page

class HomeCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["HomeCardStyle"].Card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["HomeCardStyle"].Title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, this.props.Title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
      top: true,
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["ImageStyles"].HomeCard,
      src: this.props.Image,
      alt: "Card image cap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, this.props.Subtitle), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      style: {
        height: '80px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, this.props.Description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "w-100 p-0 m-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, __jsx(NewTabLink, {
      Style: "btn btn-dark w-100 p-2",
      Link: this.props.Link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, this.props.ButtonTitle)))));
  }

} //used in Resumeview, about page and providerdata

class CustomJumbo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    if (this.props.ImgUrl === "noimage") {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, __jsx("h1", {
        className: "display-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, this.props.Title), __jsx("p", {
        className: this.props.Caption1Style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, this.props.Caption1), __jsx("hr", {
        className: "my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }), __jsx("p", {
        className: this.props.Caption2Style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, this.props.Caption2));
    } else {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, __jsx("h1", {
        className: "display-3 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, this.props.Title), __jsx("div", {
        className: "container-fluid text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, __jsx("img", {
        src: "../static/images/avatar.jpg",
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["ImageStyles"].HomeAvatar,
        alt: "avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      })), __jsx("p", {
        className: this.props.Caption1Style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, this.props.Caption1), __jsx("hr", {
        className: "my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), __jsx("p", {
        className: this.props.Caption2Style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, this.props.Caption2, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }), this.props.Caption3));
    }
  }

} //used in about page

class AboutMedia extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    if (this.props.Align === "Right") {
      return __jsx("div", {
        className: "py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["ImageStyles"].About,
        src: this.props.ImgUrl,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        className: "mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, this.props.Title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, this.props.Description)))));
    }

    if (this.props.Align === "Left") {
      return __jsx("div", {
        className: "py-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        className: "mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, this.props.Title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, this.props.Description)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["ImageStyles"].About,
        src: this.props.ImgUrl,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      })))));
    }

    ;
  }

} //used in resume for experience section

class ThreeColumnCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "py-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: this.props.Class,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, this.props.Title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "text-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, this.props.Description1)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, this.props.Description2)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, this.props.Description3)))))));
  }

} //D and D application

class CharacterSheet extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    function DandDTableLabel(props) {
      return __jsx("td", {
        className: "text-muted text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, props.children);
    }

    function DandDTableValue(props) {
      return __jsx("td", {
        style: {
          width: '100px'
        },
        className: "text-white text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, props.children);
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: {
        size: 'auto',
        offset: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      borderless: true,
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }, __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }, __jsx(DandDTableLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    }, "Strength:"), __jsx(DandDTableValue, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461
      },
      __self: this
    }, this.props.Strength)), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, __jsx(DandDTableLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, "Constitution:"), __jsx(DandDTableValue, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, this.props.Constitution)), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, __jsx(DandDTableLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }, "Dexterity:"), __jsx(DandDTableValue, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }, this.props.Dexterity)), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: this
    }, __jsx(DandDTableLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    }, "Hitpoints:"), __jsx(DandDTableValue, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      },
      __self: this
    }, this.props.Hitpoints != "Dead" && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475
      },
      __self: this
    }, this.props.Hitpoints) || __jsx("span", {
      className: "text-danger h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }, __jsx("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }, this.props.Hitpoints)))), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482
      },
      __self: this
    }, __jsx(DandDTableLabel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }, "Damage per Hit:"), __jsx(DandDTableValue, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484
      },
      __self: this
    }, this.props.Damage))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: {
        size: 'auto',
        offset: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, __jsx("div", {
      className: "text-center ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, __jsx("img", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["DandDStyle"].Avatar,
      src: this.props.ImgUrl,
      alt: "Avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    })))));
  }

} // D and D application

class AttackSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.RollResult = this.RollResult.bind(this);
    this.AttackBanner = this.AttackBanner.bind(this);
    this.AttackButton = this.AttackButton.bind(this);
  } //Shows attack roll number with special display for
  //crit scrike (natural 20 on roll)


  RollResult() {
    if (this.props.Roll === 'Crit Strike') {
      return __jsx("span", {
        className: "text-danger font-italic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, "Critical Strike!");
    } else {
      return __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, this.props.Roll);
    }
  } //shows attack result of hit/miss or place holder for
  //result display.


  AttackBanner() {
    const Result = this.props.DidHit;

    if (Result === "Hit") {
      return __jsx("h2", {
        className: "alert alert-success py-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, "Hit!");
    }

    if (Result === "Miss") {
      return __jsx("h2", {
        className: "alert alert-danger py-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      }, "Miss");
    } else {
      return __jsx("h6", {
        className: "text-white text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, "(Attack Result displayed here)");
    }
  }
  /*Function to display attack button based on initiative roll and attack turn. Pulls
  AttackTurn functon and Attackroll functions from either herofunctions.js or monsterfunctions.js
  as itentified in props */


  AttackButton() {
    if (this.props.AttackTurn === true) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onMouseDown: this.props.AttackRoll,
        onMouseUp: this.props.NextTurn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        },
        __self: this
      }, this.props.RollTitle);
    } else {
      return __jsx("h4", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, "Not your turn");
    }

    ;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      className: "my-4 mx-5 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573
      },
      __self: this
    }, __jsx("div", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["DandDStyle"].thumbnail,
      className: "jsx-1953405926",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574
      },
      __self: this
    }, __jsx("img", {
      src: "../static/images/acicon.png",
      alt: "shield",
      className: "jsx-1953405926",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1953405926",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-1953405926" + " " + "AC-Icon-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577
      },
      __self: this
    }, this.props.AC)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      className: "my-4 mx-5 d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583
      },
      __self: this
    }, __jsx("div", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__["DandDStyle"].thumbnail,
      className: "jsx-1953405926",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    }, __jsx("img", {
      src: "../static/images/hitadjust.png",
      alt: "icon",
      className: "jsx-1953405926",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-1953405926",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-1953405926" + " " + "HitAdj-Icon-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587
      },
      __self: this
    }, this.props.HitAdj)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1953405926",
      __self: this
    }, ".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxcY29tcG9uZW50c1xcY3VzdG9tQ29tcG9uZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnbEJnQyxBQUcrQyxBQU1BLGtCQUxULEFBTUQsUUFDRSxDQU5BLFNBT3NCLENBTkEsd0dBT3BDLENBTkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEZXNrdG9wXFxuZXd0ZXN0XFxteS1wYWdlXFxjb21wb25lbnRzXFxjdXN0b21Db21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKioqKioqKioqKioqKioqKiBcclxuKiAgIEltcG9ydHMgICAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIENhcmQsIENhcmRJbWcsIENhcmRUZXh0LCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBDYXJkU3VidGl0bGUsIFxyXG4gICAgUm93LCBDb2wsIEZvcm0sIExhYmVsLCBJbnB1dCwgQnV0dG9uLCBDb2xsYXBzZSwgXHJcbiAgICBUYWJsZSwgSnVtYm90cm9uLCBUYWJDb250ZW50LCBUYWJQYW5lLCBOYXYsIE5hdkl0ZW0sIE5hdkxpbmtcclxufSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCB7IEhvbWVDYXJkU3R5bGUsIERhbmREU3R5bGUsIEltYWdlU3R5bGVzLCBUdnBhZ2VTdHlsZSwgUG9pbnRlciwgVGFiU3R5bGUsXHJcbiAgICBUcGxpc3QgfSBmcm9tICcuL2pzeHN0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICAgRXhwb3J0IHN0eWxlZCBjb21wb25lbnRzICAgICAgICogXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2tncm91bmREYW5nZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZGFuZ2VyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWNrZ3JvdW5kV2FybmluZyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy13YXJuaW5nIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdUYWJMaW5rKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwcm9wcy5TdHlsZX1cclxuICAgICAgICAgICAgaHJlZj17cHJvcHMuTGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMuVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvYT5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2UsIGF0dGFja3NpbVxyXG5leHBvcnQgZnVuY3Rpb24gQ2VudGVyRmxleFdyYXBEaXYocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gdHZwb3N0LCB0dnBhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIExlZnRGbGV4V3JhcERpdihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWxlZnRcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFR2TWF6ZUhlYWRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90dnBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXtUdnBhZ2VTdHlsZS5MaW5rfT5TZWFyY2ggUGFnZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHZNYXplUGFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtUdnBhZ2VTdHlsZS5MYXlvdXR9PlxyXG4gICAgICAgICAgICA8VHZNYXplSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFR2UG9zdEluZm9MYWJlbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDx0ZCBjbGFzc05hbWU9XCJoMiB0ZXh0LWxlZnQgdy0yNSBtLTAgcC0yXCI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC90ZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUdlBvc3RJbmZvVmFsdWUocHJvcHMpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG0tMCBwLTJcIj5cclxuICAgICAgICAgICAgPHNtYWxsPntwcm9wcy5jaGlsZHJlbn08L3NtYWxsPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXIgY29tcGxpYW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gVHBsaXN0SGVhZGVyUm93IChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInAtMCBiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufVxyXG5cclxuLy91c2VkIGluIHByb3ZpZGVyY29tcGxpYW5jZVxyXG5leHBvcnQgZnVuY3Rpb24gSW5mb0ZpZWxkKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwIHN0eWxlPXtUcGxpc3QuSW5mb30+e3Byb3BzLmNoaWxkcmVufTwvcD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKioqIFxyXG4qICAgRXhwb3J0IGZ1bmN0aW9ucyAgICAgKiBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJzdGF0c1xyXG5leHBvcnQgZnVuY3Rpb24gTmV0d29ya0RhdGFGaWx0ZXIocHJvcHMpIHtcclxuICAgIGxldCBGb25lID0gcHJvcHMuRmlsdGVyMTtcclxuICAgIGxldCBWb25lID0gcHJvcHMuVmFsdWUxO1xyXG4gICAgbGV0IEZ0d28gPSBwcm9wcy5GaWx0ZXIyO1xyXG4gICAgbGV0IFZ0d28gPSBwcm9wcy5WYWx1ZTI7XHJcbiAgICBsZXQgRGF0YSA9IHByb3BzLkluZm87XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+e0RhdGEuZmlsdGVyKERhdGEgPT4gRGF0YVtGb25lXSA9PT0gVm9uZSAmJiBEYXRhW0Z0d29dID09PSBWdHdvKS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgKTtcclxufVxyXG5cclxuLy91c2VkIGluIHByb3ZpZGVyc3RhdHNcclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBsRGF0YUZpbHRlcihwcm9wcykge1xyXG4gICAgY29uc3QgRGF0YSA9IHByb3BzLkluZm9cclxuICAgIGNvbnN0IEZvbmUgPSBwcm9wcy5GaWx0ZXIxO1xyXG4gICAgY29uc3QgRm9uZWtleSA9IHByb3BzLkZpbHRlcjFjaGlsZDtcclxuICAgIGNvbnN0IFZvbmUgPSBwcm9wcy5WYWx1ZTE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3Bhbj57RGF0YS5maWx0ZXIoRGF0YSA9PiBEYXRhW0ZvbmVdW0ZvbmVrZXldIDwgVm9uZSkubGVuZ3RofTwvc3Bhbj5cclxuICAgIClcclxufVxyXG5cclxuLy91c2VkIGluIHByb3ZpZGVyc3RhdHNcclxuZXhwb3J0IGZ1bmN0aW9uIFBlcmNlbnRDYWxjKHByb3BzKSB7XHJcbiAgICBjb25zdCBEYXRhID0gcHJvcHMuSW5mb1xyXG4gICAgY29uc3QgRm9uZSA9IHByb3BzLkZpbHRlcjE7XHJcbiAgICBjb25zdCBGb25la2V5ID0gcHJvcHMuRmlsdGVyMWNoaWxkO1xyXG4gICAgY29uc3QgVm9uZSA9IHByb3BzLlZhbHVlMTtcclxuICAgIGNvbnN0IERpdmlkZXIgPSBwcm9wcy5EaXZpZGVyO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhLmZpbHRlcihEYXRhID0+IERhdGFbRm9uZV1bRm9uZWtleV0gPCBWb25lKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICApIC8gRGl2aWRlciAqIDEwMFxyXG4gICAgICAgICAgICAgICAgKSArICclJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3VzZWQgaW4gcHJvdmlkZXJDb21wbGlhbmNlXHJcbmV4cG9ydCBmdW5jdGlvbiBEYXRlQ2hlY2socHJvcHMpIHtcclxuICAgIHZhciBkYXRlID0gcHJvcHMuRGF0ZTtcclxuICAgIFxyXG4gICAgaWYgKGRhdGUgPCBcIjIwMTktMDktMjJcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kRGFuZ2VyPntkYXRlfTwvQmFja2dyb3VuZERhbmdlcj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKGRhdGUgPCBcIjIwMTktMTAtMjJcIiAmJiBkYXRlID4gXCIyMDE5LTA5LTIyXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZFdhcm5pbmc+e2RhdGV9PC9CYWNrZ3JvdW5kV2FybmluZz5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG4vL3VzZWQgaW4gVHZQYWdlIGFuZCBUVlBvc3RcclxuZXhwb3J0IGZ1bmN0aW9uIFR2TWF6ZUNhcmQocHJvcHMpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q2FyZCBzdHlsZT17cHJvcHMuQ2FyZFN0eWxlfSBjbGFzc05hbWU9e3Byb3BzLkNhcmRDbGFzc05hbWV9PlxyXG4gICAgICAgIDxDYXJkVGl0bGUgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tNCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXtUdnBhZ2VTdHlsZS5UaXRsZX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5UaXRsZX1cclxuICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDxDYXJkSW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5JbWdDbGFzc30gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17VHZwYWdlU3R5bGUuSW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5JbWdTcmN9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9wcy5JbWdBbHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkU3VidGl0bGUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktMlwiPlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e1R2cGFnZVN0eWxlLkNhc3R9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLlN1YlRpdGxlfVxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cclxuICAgICAgICAgICAgPENhcmRUZXh0Pntwcm9wcy5EZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxyXG4gICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIHtwcm9wcy5MaW5rfVxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBQcm92aWRlckNvbXBsaWFuY2UsIHByb3ZpZGVyRGF0YSBhbmQgVFZwb3N0XHJcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21UYWJzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJzEnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9nZ2xlID0gdGFiID0+IHtcclxuICAgICAgICBpZihhY3RpdmVUYWIgIT09IHRhYikgc2V0QWN0aXZlVGFiKHRhYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXYgdGFicz5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMScgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcxJyk7IH19IHN0eWxlPXtQb2ludGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjFOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogYWN0aXZlVGFiID09PSAnMicgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgdG9nZ2xlKCcyJyk7IH19IHN0eWxlPXtQb2ludGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxUYWJDb250ZW50IGFjdGl2ZVRhYj17YWN0aXZlVGFifT5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYklkPVwiMVwiIHN0eWxlPXtUYWJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLlRhYjFDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiSWQ9XCIyXCIgc3R5bGU9e1RhYlN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuVGFiMkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgIDwvVGFiQ29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiogICBFeHBvcnQgQ2xhc3NlcyAgICAgICAqIFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vdXNlZCBpbiBob21lIHBhZ2VcclxuZXhwb3J0IGNsYXNzIEhvbWVDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17SG9tZUNhcmRTdHlsZS5DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXtIb21lQ2FyZFN0eWxlLlRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgdG9wIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17SW1hZ2VTdHlsZXMuSG9tZUNhcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuSW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlPnt0aGlzLnByb3BzLlN1YnRpdGxlfTwvQ2FyZFN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQgc3R5bGU9e3toZWlnaHQ6ICc4MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy0xMDAgcC0wIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1RhYkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHlsZT1cImJ0biBidG4tZGFyayB3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbms9e3RoaXMucHJvcHMuTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkJ1dHRvblRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXdUYWJMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy91c2VkIGluIFJlc3VtZXZpZXcsIGFib3V0IHBhZ2UgYW5kIHByb3ZpZGVyZGF0YVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSnVtYm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkltZ1VybCA9PT0gXCJub2ltYWdlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQ2FwdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkNhcHRpb24yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTMgdGV4dC1jZW50ZXJcIj57dGhpcy5wcm9wcy5UaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2F2YXRhci5qcGdcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtJbWFnZVN0eWxlcy5Ib21lQXZhdGFyfSBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5DYXB0aW9uMVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuQ2FwdGlvbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2FwdGlvbjJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkNhcHRpb24yfTxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5DYXB0aW9uM31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiBhYm91dCBwYWdlXHJcbmV4cG9ydCBjbGFzcyBBYm91dE1lZGlhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5BbGlnbiA9PT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0ltYWdlU3R5bGVzLkFib3V0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLkltZ1VybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLkFsaWduID09PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLkNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17SW1hZ2VTdHlsZXMuQWJvdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdXNlZCBpbiByZXN1bWUgZm9yIGV4cGVyaWVuY2Ugc2VjdGlvblxyXG5leHBvcnQgY2xhc3MgVGhyZWVDb2x1bW5DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+PGgxPnt0aGlzLnByb3BzLlRpdGxlfTwvaDE+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRGVzY3JpcHRpb24xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkRlc2NyaXB0aW9uMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5EZXNjcmlwdGlvbjN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIERhbmREVGFibGVMYWJlbChwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1sZWZ0IGg0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIERhbmREVGFibGVWYWx1ZShwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcxMDBweCd9fSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGVmdCBoNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209e3sgc2l6ZTogJ2F1dG8nLCBvZmZzZXQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBib3JkZXJsZXNzICBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlTGFiZWw+U3RyZW5ndGg6PC9EYW5kRFRhYmxlTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlVmFsdWU+e3RoaXMucHJvcHMuU3RyZW5ndGh9PC9EYW5kRFRhYmxlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlTGFiZWw+Q29uc3RpdHV0aW9uOjwvRGFuZERUYWJsZUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZVZhbHVlPnt0aGlzLnByb3BzLkNvbnN0aXR1dGlvbn08L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5EZXh0ZXJpdHk6PC9EYW5kRFRhYmxlTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYW5kRFRhYmxlVmFsdWU+e3RoaXMucHJvcHMuRGV4dGVyaXR5fTwvRGFuZERUYWJsZVZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuZERUYWJsZUxhYmVsPkhpdHBvaW50czo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhpdHBvaW50cyAhPSBcIkRlYWRcIiAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zcGFuPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyIGg1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5wcm9wcy5IaXRwb2ludHN9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhbmREVGFibGVWYWx1ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVMYWJlbD5EYW1hZ2UgcGVyIEhpdDo8L0RhbmREVGFibGVMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhbmREVGFibGVWYWx1ZT57dGhpcy5wcm9wcy5EYW1hZ2V9PC9EYW5kRFRhYmxlVmFsdWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+ICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXt7IHNpemU6ICdhdXRvJywgb2Zmc2V0OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAgc3R5bGU9e0RhbmREU3R5bGUuQXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuSW1nVXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRCBhbmQgRCBhcHBsaWNhdGlvblxyXG5leHBvcnQgY2xhc3MgQXR0YWNrU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLlJvbGxSZXN1bHQgPSB0aGlzLlJvbGxSZXN1bHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLkF0dGFja0Jhbm5lciA9IHRoaXMuQXR0YWNrQmFubmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5BdHRhY2tCdXR0b24gPSB0aGlzLkF0dGFja0J1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL1Nob3dzIGF0dGFjayByb2xsIG51bWJlciB3aXRoIHNwZWNpYWwgZGlzcGxheSBmb3JcclxuICAgIC8vY3JpdCBzY3Jpa2UgKG5hdHVyYWwgMjAgb24gcm9sbClcclxuICAgIFJvbGxSZXN1bHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuUm9sbCA9PT0gJ0NyaXQgU3RyaWtlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgZm9udC1pdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcml0aWNhbCBTdHJpa2UhXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLlJvbGx9PC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3Nob3dzIGF0dGFjayByZXN1bHQgb2YgaGl0L21pc3Mgb3IgcGxhY2UgaG9sZGVyIGZvclxyXG4gICAgLy9yZXN1bHQgZGlzcGxheS5cclxuICAgIEF0dGFja0Jhbm5lcigpIHtcclxuICAgICAgICBjb25zdCBSZXN1bHQgPSB0aGlzLnByb3BzLkRpZEhpdDtcclxuICAgICAgICBpZiAoUmVzdWx0ID09PSBcIkhpdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2VzcyBweS0yIHRleHQtY2VudGVyXCI+SGl0ITwvaDI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBpZiAoUmVzdWx0ID09PSBcIk1pc3NcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBweS0yIHRleHQtY2VudGVyXCI+TWlzczwvaDI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKEF0dGFjayBSZXN1bHQgZGlzcGxheWVkIGhlcmUpXHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLypGdW5jdGlvbiB0byBkaXNwbGF5IGF0dGFjayBidXR0b24gYmFzZWQgb24gaW5pdGlhdGl2ZSByb2xsIGFuZCBhdHRhY2sgdHVybi4gUHVsbHNcclxuICAgIEF0dGFja1R1cm4gZnVuY3RvbiBhbmQgQXR0YWNrcm9sbCBmdW5jdGlvbnMgZnJvbSBlaXRoZXIgaGVyb2Z1bmN0aW9ucy5qcyBvciBtb25zdGVyZnVuY3Rpb25zLmpzXHJcbiAgICBhcyBpdGVudGlmaWVkIGluIHByb3BzICovXHJcbiAgICBBdHRhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuQXR0YWNrVHVybiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMuQXR0YWNrUm9sbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwID0ge3RoaXMucHJvcHMuTmV4dFR1cm59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuUm9sbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Ob3QgeW91ciB0dXJuPC9oND5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXktNCBteC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e0RhbmREU3R5bGUudGh1bWJuYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hY2ljb24ucG5nXCIgYWx0PVwic2hpZWxkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiQUMtSWNvbi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkFDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJteS00IG14LTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e0RhbmREU3R5bGUudGh1bWJuYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaGl0YWRqdXN0LnBuZ1wiIGFsdD1cImljb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkhpdEFkai1JY29uLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhpdEFkan1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuQUMtSWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuSGl0QWRqLUljb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLkF0dGFja0J1dHRvbigpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+QXR0YWNrIFJlc3VsdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjayByb2xsOiAmbmJzcDsge3RoaXMuUm9sbFJlc3VsdCgpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5BdHRhY2tCYW5uZXIoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VzZWQgaW4gRGFuZEQgcGFnZSB0byBkaXNwbGF5IE5hbWUsSW5pdGlhdGl2ZSBhbmQgSFAgc3RhdHVzIGZvciBoZXJvIGFuZCBcclxuLy9tb25zdGVyLlxyXG5leHBvcnQgY2xhc3MgQXR0YWNrU3RhdHVzRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj57dGhpcy5wcm9wcy5OYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+aW5pYXRpdmU6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSW5pdGlhdGl2ZSAhPSBcIlNlY29uZFwiICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Jbml0aWF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gfHwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Jbml0aWF0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SGl0IFBvaW50czo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSFAgIT0gXCJEZWFkXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuSFB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkhQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0QgYW5kIEQgYXBwbGljYXRpb25cclxuZXhwb3J0IGNsYXNzIE5hbWVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Y29sbGFwc2U6IGZhbHNlfTtcclxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7Y29sbGFwc2U6ICFzdGF0ZS5jb2xsYXBzZX0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sbGFwc2U/ICdIaWRlJyA6ICdDaGFuZ2UgTmFtZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJteC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5WYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5OYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vUHJldmVudCBlbnRlciBrZXkgc3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzIC8qIEVudGVyICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1zbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLk5hbWVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Mark\\\\Desktop\\\\newtest\\\\my-page\\\\components\\\\customComponents.js */")), __jsx("div", {
      className: "d-flex justify-content-center my-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609
      },
      __self: this
    }, this.AttackButton()), __jsx("div", {
      className: "text-center text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, "Attack Result:"), __jsx("p", {
      className: "mt-2 p-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, "attack roll: \xA0 ", this.RollResult())), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617
      },
      __self: this
    }, this.AttackBanner()));
  }

} //used in DandD page to display Name,Initiative and HP status for hero and 
//monster.

class AttackStatusDisplay extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    }, __jsx("h4", {
      className: "text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631
      },
      __self: this
    }, this.props.Name), __jsx("div", {
      className: "text-center pt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
      },
      __self: this
    }, __jsx("div", {
      className: "p-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }, "iniative:"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }, this.props.Initiative != "Second" && __jsx("span", {
      className: "text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637
      },
      __self: this
    }, this.props.Initiative) || __jsx("span", {
      className: "text-warning",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640
      },
      __self: this
    }, this.props.Initiative))), __jsx("div", {
      className: "p-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647
      },
      __self: this
    }, "Hit Points:"), __jsx("h4", {
      className: "text-center mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648
      },
      __self: this
    }, this.props.HP != "Dead" && __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650
      },
      __self: this
    }, this.props.HP) || __jsx("span", {
      className: "text-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653
      },
      __self: this
    }, this.props.HP)))));
  }

} //D and D application

class NameForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      collapse: !state.collapse
    }));
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681
      },
      __self: this
    }, this.state.collapse ? 'Hide' : 'Change Name')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapse,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      inline: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      className: "mx-sm-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689
      },
      __self: this
    }, "Name:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      maxLength: "20",
      value: this.props.Value,
      onChange: this.props.NameChange //Prevent enter key submit
      ,
      onKeyPress: event => {
        if (event.which === 13
        /* Enter */
        ) {
            event.preventDefault();
          }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "ml-sm-2",
      onClick: this.props.NameSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704
      },
      __self: this
    }, "Submit")))));
  }

}

/***/ }),

/***/ "./components/jsxstyles.js":
/*!*********************************!*\
  !*** ./components/jsxstyles.js ***!
  \*********************************/
/*! exports provided: Pointer, TabStyle, HomeCardStyle, ImageStyles, TvpageStyle, DandDStyle, Tplist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pointer", function() { return Pointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStyle", function() { return TabStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardStyle", function() { return HomeCardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStyles", function() { return ImageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvpageStyle", function() { return TvpageStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DandDStyle", function() { return DandDStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tplist", function() { return Tplist; });
/* **************** 
*   Styles       * 
******************/
const Pointer = {
  cursor: 'pointer'
};
const TabStyle = {
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
  marginBottom: '20px'
};
const HomeCardStyle = {
  Card: {
    width: '300px',
    height: '400px',
    marginRight: '50px',
    marginLeft: '50px',
    textAlign: 'center'
  },
  Title: {
    marginTop: '10px'
  }
};
const ImageStyles = {
  HomeCard: {
    maxWidth: '150px',
    maxHeight: '150px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  HomeAvatar: {
    borderRadius: '50%',
    width: '20%',
    height: 'auto'
  },
  About: {
    width: '300px',
    height: '300px',
    padding: '5px'
  }
};
const TvpageStyle = {
  Image: {
    display: 'flex',
    height: '300px',
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '10px'
  },
  Title: {
    height: '20px',
    width: '200px',
    margin: 4,
    wordWwrap: 'break-word'
  },
  Cast: {
    maxHeight: '20px',
    width: '200px',
    margin: 4,
    wordWwrap: 'break-word',
    maxFontSize: '1vw'
  },
  Layout: {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    backgroundColor: 'white'
  },
  Link: {
    marginRight: 15,
    fontSize: 20
  }
};
const DandDStyle = {
  thumbnail: {
    position: 'relative',
    align: 'center'
  },
  Avatar: {
    height: '300px',
    width: 'auto'
  } //used in provider compliance drivers and
  //vehicles lists

};
const Tplist = {
  Title: {
    textAlign: 'center',
    marginTop: '10px'
  },
  Value: {
    paddingTop: '10px'
  },
  Info: {
    marginLeft: '25px',
    marginTop: '0px',
    marginBottom: '0px'
  }
};

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Bodystyle = {
  minHeight: '100vh',
  maxWidth: '98%',
  marginRight: 'auto',
  marginLeft: 'auto'
};
function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    style: Bodystyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var assign = __webpack_require__(/*! object-assign */ "object-assign");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "react-is");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-table/react-table.css":
/*!**************************************************!*\
  !*** ./node_modules/react-table/react-table.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/tvpost.js":
/*!*************************!*\
  !*** ./pages/tvpost.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_customComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/customComponents */ "./components/customComponents.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\tvpost.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const noimage = '/static/images/no-img.png';

const tvPost = props => {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "the below content has been imported from", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["NewTabLink"], {
    Link: "https://www.tvmaze.com",
    Title: "TVMaze link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "TVmaze.com")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvMazePage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "h3 m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, props.show.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    borderless: true,
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Type:"), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, props.show.type ? props.show.type : 'no data')), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Premiered:"), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, props.show.premiered ? props.show.premiered : 'no data')), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Status:"), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, props.show.status ? props.show.status : 'no data')), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Rating:"), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, props.show.rating.average ? props.show.rating.average : 'no data')), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Genre:"), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, props.show.genres.map((value, index) => {
    return __jsx("span", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, value, " \xA0");
  }))), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Seasons:"), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvPostInfoValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, props.show._embedded.seasons.filter(seasons => seasons.number).length))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: {
      size: 'auto',
      offset: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "text-center mr-5 mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("img", {
    src: props.show.image ? props.show.image.medium : noimage,
    alt: "no image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Summary:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "m-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Link:", __jsx("small", {
    className: "ml-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["NewTabLink"], {
    Link: props.show.url,
    Title: props.show.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, props.show.name ? props.show.name : 'null')))), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["CustomTabs"], {
    Tab1Name: "Cast",
    Tab2Name: "Episodes",
    Tab1Content: __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["LeftFlexWrapDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, props.show._embedded.cast.map(cast => __jsx("div", {
      className: "p-3",
      key: cast.person.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["TvMazeCard"], {
      CardStyle: {
        height: '570px'
      },
      Title: cast.person.name,
      ImgSrc: cast.person.image === null && noimage || cast.character.image === null && cast.person.image.medium || cast.character.image.medium,
      ImgAlt: "castimage",
      SubTitle: __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: undefined
      }, "As: \xA0", __jsx("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: undefined
      }, cast.character.name)),
      Link: __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["NewTabLink"], {
        Style: "btn btn-dark w-100 mt-3",
        Link: cast.person.url,
        Title: "Actor Page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: undefined
      }, "Actor Page"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }))))
    /*end of Tab1Content*/
    ,
    Tab2Content:
    /*React Table for Episode List */
    __jsx(react_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "-striped -highlight",
      data: props.show._embedded.episodes,
      defaultPageSize: 20,
      style: {
        height: "600px",
        fontSize: "14px"
      },
      filterable: true,
      defaultFilterMethod: (filter, row) => String(row[filter.id]) === filter.value,
      columns: [{
        Header: "Season",
        id: "season",
        accessor: d => d.season,
        maxWidth: 110,
        style: {
          'textAlign': 'center'
        },
        //Dropdown list to filter table based on number
        //of seasons
        Filter: ({
          filter,
          onChange
        }) => {
          return __jsx("select", {
            onChange: event => onChange(event.target.value),
            style: {
              width: "100%"
            },
            value: filter ? filter.value : '',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: undefined
          }, __jsx("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: undefined
          }, "Show All"), props.show._embedded.episodes.map(item => item.season).filter((item, i, s) => s.lastIndexOf(item) == i).map(function (value) {
            return __jsx("option", {
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
        accessor: d => //Converts Episode Name into a link to the TvMaze 
        //page for that episode
        __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__["NewTabLink"], {
          Link: d.url,
          Title: "Episode Link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: undefined
        }, d.name),
        minWidth: 70,
        style: {
          'whiteSpace': 'unset',
          'textAlign': 'center'
        }
      }, {
        Header: "Air Date",
        id: "airdate",
        accessor: d => d.airdate,
        maxWidth: 120,
        style: {
          'whiteSpace': 'unset',
          'textAlign': 'center'
        }
      }, {
        Header: "Summary",
        id: "summary",
        accessor: d => d.summary != null && __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          __self: undefined
        }, d.summary.replace(/<[/]?p>/g, '')),
        style: {
          'whiteSpace': 'unset'
        }
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    })
    /*End of Tab2Content*/
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }))));
};

tvPost.getInitialProps = async function (context) {
  const {
    id
  } = context.query; //pules tvmaze api json based on selected show on the search page.

  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=seasons`);
  const show = await res.json();
  console.log(show);
  console.log(`Fetched show: ${show.name}`);
  return {
    show
  };
};

/* harmony default export */ __webpack_exports__["default"] = (tvPost);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/tvpost.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mark\Desktop\newtest\my-page\pages\tvpost.js */"./pages/tvpost.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=tvpost.js.map
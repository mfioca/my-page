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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\Footer.js";


function FooterLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "Footer-nav center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "".concat(props.id),
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title));
}

var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FooterLink, {
        id: "https://www.linkedin.com/in/mark-fioca/",
        title: "LinkedIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FooterLink, {
        id: "https://www.deviantart.com/franknmullet",
        title: "Deviantart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FooterLink, {
        id: "https://github.com/mfioca/my-page",
        title: "Git-Hub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "mailto: mark@fioca.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Send Email")))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\Header.js";

var activeprofile = '';

function NavLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "Navbar center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "".concat(props.id),
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title));
}

var Headerdropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Headerdropdown, _React$Component);

  function Headerdropdown(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Headerdropdown);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Headerdropdown).call(this, props));
    _this.state = {
      showList: false
    };
    _this.showList = _this.showList.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Headerdropdown, [{
    key: "showList",
    value: function showList() {
      this.setState(function (prevState) {
        return {
          showList: !prevState.showList
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "Dropdown pointer",
        onClick: this.showList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Projects")), this.state.showList && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "DropdownMenu",
        onMouseLeave: this.showList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "Dropdown-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "Dropdown-list_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLink, {
        id: "/tvpage",
        title: "TvMaze",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "Dropdown-list_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLink, {
        id: "/DandDpage",
        title: "D and D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "Dropdown-list_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLink, {
        id: "/ProviderData",
        title: "Provider List",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), activeprofile === 'Guest' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "Dropdown-list_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLink, {
        id: "/test",
        title: "Test",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })))));
    }
  }]);

  return Headerdropdown;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component2);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLink, {
        id: "/",
        title: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NavLink, {
        id: "/about",
        title: "About",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Headerdropdown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/images/google.png",
        alt: "google",
        height: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        action: "http://google.com/search",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "q",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Google Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\components\\layout.js";




function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/style.css":
/*!******************************!*\
  !*** ./components/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/DandD/attacksim.js":
/*!**********************************!*\
  !*** ./pages/DandD/attacksim.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _herofunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./herofunctions */ "./pages/DandD/herofunctions.js");
/* harmony import */ var _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monsterfunctions */ "./pages/DandD/monsterfunctions.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\attacksim.js";



/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
  this.setState({
    heroroll: Math.floor(Math.random() * 20 + 1)
  });

  if (this.state.heroroll >= this.state.monsterAc + this.state.heroHitAdj) {
    this.setState({
      herodidhit: 'Hit'
    });

    if (this.state.monsterHp - this.state.heroDmg <= 0) {
      this.setState({
        monsterHp: 'Dead'
      });
    } else {
      this.setState({
        monsterHp: this.state.monsterHp - this.state.heroDmg
      });
    }
  } else {
    this.setState({
      herodidhit: 'Miss'
    });
  }

  ;
}

;
/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */

function monsterattackroll() {
  this.setState({
    monsterroll: Math.floor(Math.random() * 20 + 1)
  });

  if (this.state.monsterroll >= this.state.heroAc + this.state.monsterHitAdj) {
    this.setState({
      monsterdidhit: 'Hit'
    });

    if (this.state.heroHp - this.state.monsterDmg <= 0) {
      this.setState({
        heroHp: 'Dead'
      });
    } else {
      this.setState({
        heroHp: this.state.heroHp - this.state.monsterDmg
      });
    }
  } else {
    this.setState({
      monsterdidhit: 'Miss'
    });
  }

  ;
}

;

var AttackSim =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSim, _React$Component);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AttackSim).call(this, props));
    _this.heroinitiative = 0;
    _this.monsterinitiative = 0;
    _this.state = {
      herostats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      herobase: {
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      monsterstats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      monsterbase: {
        Name: '',
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      heroHp: 0,
      heroAc: 0,
      heroDmg: 0,
      heroHitAdj: 0,
      heroName: '',
      heroinitiative: 0,
      heroroll: 0,
      herodidhit: '',
      monsterHp: 0,
      monsterAc: 0,
      monsterDmg: 0,
      monsterHitAdj: 0,
      monsterName: '',
      monsterinitiative: 0,
      monsterroll: 0,
      monsterdidhit: ''
    };
    _this.setherostats = _this.setherostats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroConstAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroacAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroacAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroDmgAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroHitAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setMonsterstats = _this.setMonsterstats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterConstAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsteracAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsteracAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterDmgAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterHitAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroattackroll = heroattackroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterattackroll = monsterattackroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSim, [{
    key: "setherostats",
    value: function setherostats() {
      for (var key in this.state.herostats) {
        this.state.herostats[key] = Math.floor(Math.random() * 20 + 1);
      }

      ;
      this.setState({
        heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
        heroAc: this.state.herobase.ArmorClass + this.SetheroacAdj(),
        heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
        heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj()
      });
    }
  }, {
    key: "setMonsterstats",
    value: function setMonsterstats() {
      for (var key in this.state.monsterstats) {
        this.state.monsterstats[key] = Math.floor(Math.random() * 20 + 1);
      }

      ;
      this.setState({
        monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
        monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
        monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
        monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj()
      });
    }
  }, {
    key: "heroNameChange",
    value: function heroNameChange(event) {
      this.setState({
        heroName: event.target.value
      });
    }
  }, {
    key: "monsterNameChange",
    value: function monsterNameChange(event) {
      this.setState({
        monsterName: event.target.value
      });
    }
  }, {
    key: "rollforiniative",
    value: function rollforiniative() {
      this.Heroinitiative = Math.floor(Math.random() * 10 + 1);
      this.Monsterinitiative = Math.floor(Math.random() * 10 + 1);

      if (this.Heroinitiative < this.Monsterinitiative) {
        this.setState({
          heroinitiative: 'First',
          monsterinitiative: 'Second'
        });
      } else if (this.Heroinitiative > this.Monsterinitiative) {
        this.setState({
          monsterinitiative: 'First',
          heroinitiative: 'Second'
        });
      } else {
        this.setState({
          heroinitiative: 'ReRoll',
          monsterinitiative: 'ReRoll'
        });
      }

      ;
      this.setState({
        herodidhit: '',
        monsterdidhit: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "DandD_character Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Name: "), this.state.heroName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, " ", this.state.herostats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, " ", this.state.herostats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, " ", this.state.herostats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, " ", this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Damage per hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, " ", this.state.heroDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Hero Float-right",
        src: "../static/images/hero.png",
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setherostats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.heroNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Name: "), this.state.monsterName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, " ", this.state.monsterstats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, " ", this.state.monsterstats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, " ", this.state.monsterstats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, " ", this.state.monsterHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, " ", this.state.monsterDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Monster Float-right",
        src: "../static/images/monster.png",
        alt: "monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setMonsterstats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.monsterNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, this.state.heroAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, this.state.heroHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattackroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Hero Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, this.state.herodidhit)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Initiative DandD_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.rollforiniative,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Roll for iniative")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Heroinitiative center Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "Hero ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, this.state.heroinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monsterinitiative center Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Monster initiative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, this.state.monsterinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroHP-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/herohp.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HeroHP-text Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterHP-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/monsterhp.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "MonsterHP-text Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, this.state.monsterHp))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, this.state.monsterAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, this.state.monsterHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.monsterattackroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Monster Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, this.state.monsterdidhit)));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AttackSim);

/***/ }),

/***/ "./pages/DandD/hero.js":
/*!*****************************!*\
  !*** ./pages/DandD/hero.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _herofunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./herofunctions */ "./pages/DandD/herofunctions.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js";




 //import { HeroadjStats } from './attacksim';

var Hero =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).call(this, props));
    _this.state = {
      herostats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      herobase: {
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      heroHp: 0,
      heroAc: 0,
      heroDmg: 0,
      heroHitAdj: 0,
      heroName: ''
    };
    _this.setherostats = _this.setherostats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroConstAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroacAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroacAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroDmgAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroHitAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "setherostats",
    value: function setherostats() {
      for (var key in this.state.herostats) {
        this.state.herostats[key] = Math.floor(Math.random() * 20 + 1);
      }

      ; //calls functions in hero_functions to adjust stats in
      //heroadjstats variable in the attacksim.js

      this.setState({
        heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
        heroAC: this.state.herobase.ArmorClass + this.SetheroacAdj(),
        heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
        heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj()
      });
    }
  }, {
    key: "heroNameChange",
    value: function heroNameChange(event) {
      this.setState({
        heroName: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Name: "), this.state.heroName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", this.state.herostats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, " ", this.state.herostats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " ", this.state.herostats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, " ", this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Damage per hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " ", this.state.heroDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Hero Float-right",
        src: "../static/images/hero.png",
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setherostats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.heroNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })))));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/*
var newHero = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 50,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};


class Hero extends React.Component {
    constructor(props) {
        super(props);
        //sets states for stats in the new hero object
        this.state = {
            str: newHero.Str,
            const: newHero.Const,
            dext: newHero.Dext,
            hp: HeroadjStats.HeroHp,
            dmg: HeroadjStats.HeroDmg,
            name: '',
        };
        this.setherostats = this.setherostats.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setherostats() {
        for (let key in newHero) {
            newHero[key] = Math.floor((Math.random() * 20) + 1);
        } 
        //random number between 1-20 to set stats
        newHero.Str = Math.floor((Math.random() * 20) + 1);
        newHero.Const = Math.floor((Math.random() * 20) + 1);
        newHero.Dext = Math.floor((Math.random() * 20) + 1);
        //calls functions in hero_functions to adjust stats in
        //heroadjstats variable in the attacksim.js
        HeroadjStats.HeroHp = (newHero.BaseHitPoints) + (SetConstAdj());
        HeroadjStats.HeroAc = (newHero.BaseArmorClass) + (setacAdj());
        HeroadjStats.HeroDmg = (newHero.BaseDamage) + (setDmgAdj());
        HeroadjStats.HeroHitAdj = (newHero.BaseHitAdj) + (setHitAdj());
        //sets new state for each variable 
        this.setState({
            str: newHero.Str,
            const: newHero.Const,
            dext: newHero.Dext,
            hp: HeroadjStats.HeroHp,
            dmg: HeroadjStats.HeroDmg
        });
    }
    //displays name as entered into the name field. currently is
    //a live event rather than on submit event.
    handleChange(event) {
        this.setState({Name: event.target.value});
        event.preventDefault();
    }

    handleSubmit() {
        this.setState(prevState => ({
            showNameForm: !prevState.showNameForm
        }));
    }

    

    render() {
        return (
            <div className="Hero">
                <div className="HeroBox">
                    <div>
                        <p><b>Name:</b> { this.state.Name }</p>
                        <table className="DandDstat_table">
                            <tr>
                                <td>Strength:</td>
                                <td> { this.state.str }</td>
                            </tr>
                            <tr>
                                <td>Constitution:</td>
                                <td> { this.state.const }</td>
                            </tr>
                            <tr>
                                <td>Dexterity:</td>
                                <td> { this.state.dext }</td>
                            </tr>
                            <tr>
                                <td>Hitpoints:</td>
                                <td> { this.state.hp }</td>
                            </tr>
                            <tr>
                                <td>Base Damage:</td>
                                <td> { this.state.dmg }</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <img className="DnD_Hero Float-right" src="../static/images/hero.png" alt="hero"/> 
                    </div>
                </div>
                <div className="Stats-roll align-center">
                    <button onClick={ this.setherostats }>Set Attrubutes</button>
                </div>
                <div>
                    <form>
                        <label>
                            Name: 
                            <input 
                                type="text"
                                maxLength="20"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <button onClick = {this.handleChange}>Submit</button>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}
*/


/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./pages/DandD/herofunctions.js":
/*!**************************************!*\
  !*** ./pages/DandD/herofunctions.js ***!
  \**************************************/
/*! exports provided: SetheroConstAdj, SetheroacAdj, SetheroDmgAdj, SetheroHitAdj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroConstAdj", function() { return SetheroConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroacAdj", function() { return SetheroacAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroDmgAdj", function() { return SetheroDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroHitAdj", function() { return SetheroHitAdj; });
//sets hero hitpoints based on constitution stat number.
function SetheroConstAdj() {
  if (this.state.herostats.Const == 1) {
    return -3;
  }

  if (this.state.herostats.Const == 2 || this.state.herostats.Const == 3) {
    return -2;
  }

  if (this.state.herostats.Const >= 4 && this.state.herostats.Const <= 6) {
    return -1;
  }

  if (this.state.herostats.Const >= 7 && this.state.herostats.Const <= 14) {
    return 0;
  }

  if (this.state.herostats.Const == 15) {
    return 1;
  }

  if (this.state.herostats.Const == 16) {
    return 2;
  }

  if (this.state.herostats.Const == 17) {
    return 3;
  }

  if (this.state.herostats.Const == 18) {
    return 4;
  }

  if (this.state.herostats.Const == 19) {
    return 5;
  }

  if (this.state.herostats.Const == 20) {
    return 6;
  }
}
;
function SetheroacAdj() {
  if (this.state.herostats.Dext == 1 || this.state.herostats.Dext == 2) {
    return -5;
  }

  if (this.state.herostats.Dext == 3) {
    return -4;
  }

  if (this.state.herostats.Dext == 4) {
    return -3;
  }

  if (this.state.herostats.Dext == 5) {
    return -2;
  }

  if (this.state.herostats.Dext == 6) {
    return -1;
  }

  if (this.state.herostats.Dext >= 7 && this.state.herostats.Dext <= 14) {
    return 0;
  }

  if (this.state.herostats.Dext == 15) {
    return 1;
  }

  if (this.state.herostats.Dext == 16) {
    return 2;
  }

  if (this.state.herostats.Dext == 17) {
    return 3;
  }

  if (this.state.herostats.Dext == 18 || this.state.herostats.Dext == 19) {
    return 4;
  }

  if (this.state.herostats.Dext == 20) {
    return 5;
  }
}
function SetheroDmgAdj() {
  if (this.state.herostats.Str == 1) {
    return -4;
  }

  if (this.state.herostats.Str == 2 || this.state.herostats.Str == 3) {
    return -3;
  }

  if (this.state.herostats.Str == 4 || this.state.herostats.Str == 5) {
    return -2;
  }

  if (this.state.herostats.Str == 6 || this.state.herostats.Str == 7) {
    return -1;
  }

  if (this.state.herostats.Str >= 8 && this.state.herostats.Str <= 16) {
    return 0;
  }

  if (this.state.herostats.Str == 17) {
    return 1;
  }

  if (this.state.herostats.Str == 18) {
    return 2;
  }

  if (this.state.herostats.Str == 19) {
    return 3;
  }

  if (this.state.herostats.Str == 20) {
    return 4;
  }
}
function SetheroHitAdj() {
  if (this.state.herostats.Str == 1) {
    return -4;
  }

  if (this.state.herostats.Str == 2 || this.state.herostats.Str == 3) {
    return -3;
  }

  if (this.state.herostats.Str == 4 || this.state.herostats.Str == 5) {
    return -2;
  }

  if (this.state.herostats.Str == 6 || this.state.herostats.Str == 7) {
    return -1;
  }

  if (this.state.herostats.Str >= 8 && this.state.herostats.Str <= 16) {
    return 0;
  }

  if (this.state.herostats.Str == 17) {
    return 1;
  }

  if (this.state.herostats.Str == 18) {
    return 2;
  }

  if (this.state.herostats.Str == 19) {
    return 3;
  }

  if (this.state.herostats.Str == 20) {
    return 4;
  }
}
/*
export function SetConstAdj() {
    if (newHero.Const == 1) {
        return -3;
    }
    if (newHero.Const == 2 || newHero.Const == 3) {
        return -2;
    }
    if (newHero.Const >= 4 && newHero.Const <= 6) {
        return -1;
    }
    if (newHero.Const >= 7 && newHero.Const <= 14) {
        return 0;
    }
    if (newHero.Const == 15) {
        return 1;
    }
    if (newHero.Const == 16) {
        return 2;
    }
    if (newHero.Const == 17) {
        return 3;
    }
    if (newHero.Const == 18) {
        return 4;
    }
    if (newHero.Const == 19) {
        return 5;
    }
    if (newHero.Const == 20) {
        return 6;
    }
} 

//sets hero hit adjustment based on strength stat number.
export function setHitAdj() {
    if (newHero.Str == 1) {
        return -4;
    }
    if (newHero.Str == 2 || newHero.Str == 3) {
        return -3;
    }
    if (newHero.Str == 4 || newHero.Str == 5) {
        return -2;
    }
    if (newHero.Str == 6 || newHero.Str == 7) {
        return -1;
    }
    if (newHero.Str >= 8 && newHero.Str <= 16) {
        return 0;
    }
    if (newHero.Str == 17 ) {
        return 1;
    }
    if (newHero.Str == 18 ) {
        return 2;
    }
    if (newHero.Str == 19 ) {
        return 3;
    }
    if (newHero.Str == 20 ) {
        return 4;
    }
}

//sets hero damage adjustment based on strength stat number.
export function setDmgAdj() {
    if (newHero.Str == 1) {
        return -4;
    }
    if (newHero.Str == 2 || newHero.Str == 3) {
        return -3;
    }
    if (newHero.Str == 4 || newHero.Str == 5) {
        return -2;
    }
    if (newHero.Str == 6 || newHero.Str == 7) {
        return -1;
    }
    if (newHero.Str >= 8 && newHero.Str <= 16) {
        return 0;
    }
    if (newHero.Str == 17 ) {
        return 1;
    }
    if (newHero.Str == 18 ) {
        return 2;
    }
    if (newHero.Str == 19 ) {
        return 3;
    }
    if (newHero.Str == 20 ) {
        return 4;
    }
}

//sets hero armor class based on dexterity stat number.
export function setacAdj() {
    if (newHero.Dext == 1 || newHero.Dext == 2) {
        return -5;
    }
    if (newHero.Dext == 3) {
        return -4;
    }
    if (newHero.Dext == 4) {
        return -3;
    }
    if (newHero.Dext == 5) {
        return -2;
    }
    if (newHero.Dext == 6) {
        return -1;
    }
    if (newHero.Dext >= 7 && newHero.Dext <= 14) {
        return 0;
    }
    if (newHero.Dext == 15) {
        return 1;
    }
    if (newHero.Dext == 16) {
        return 2;
    }
    if (newHero.Dext == 17) {
        return 3;
    }
    if (newHero.Dext == 18 || newHero.Dext == 19) {
        return 4;
    }
    if (newHero.Dext == 20) {
        return 5;
    }
} */

/***/ }),

/***/ "./pages/DandD/monster.js":
/*!********************************!*\
  !*** ./pages/DandD/monster.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _monsterfunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monsterfunctions */ "./pages/DandD/monsterfunctions.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\monster.js";




 //import { MonsteradjStats } from './attacksim';
//export { newMonster }

/*
var newMonster = {
    Str: 0,
    Const: 0,
    Dext: 0,
    BaseHitPoints: 50,
    BaseArmorClass: 10,
    BaseDamage: 10,
    BaseHitAdj: 0
};  */

var Monster =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Monster, _React$Component);

  function Monster(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Monster);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Monster).call(this, props));
    _this.state = {
      monsterstats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      monsterbase: {
        Name: '',
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      monsterHp: 0,
      monsterAc: 0,
      monsterDmg: 0,
      monsterHitAdj: 0,
      monsterName: ''
    };
    _this.setMonsterstats = _this.setMonsterstats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterConstAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["SetmonsterConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsteracAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["SetmonsteracAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterDmgAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["SetmonsterDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterHitAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["SetmonsterHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Monster, [{
    key: "setMonsterstats",
    value: function setMonsterstats() {
      for (var key in this.state.monsterstats) {
        this.state.monsterstats[key] = Math.floor(Math.random() * 20 + 1);
      }

      ;
      this.setState({
        monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
        monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
        monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
        monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj()
      });
    } //displays name as entered into the name field. currently is
    //a live event rather than on submit event.

  }, {
    key: "monsterNameChange",
    value: function monsterNameChange(event) {
      this.setState({
        monsterName: event.target.value
      });
    }
    /*
    setMonsterstats() {
        //random number 1-20 to set newmonster stats
        newMonster.Str = Math.floor((Math.random() * 20) + 1);
        newMonster.Const = Math.floor((Math.random() * 20) + 1);
        newMonster.Dext = Math.floor((Math.random() * 20) + 1);
        //calls the adjusted functions in monster_functions to set adjusted monster
        //stats in the attacksim.js
        MonsteradjStats.MonsterHp = (newMonster.BaseHitPoints) + (SetConstAdj());
        MonsteradjStats.MonsterAc = (newMonster.BaseArmorClass) + (setacAdj());
        MonsteradjStats.MonsterDmg = (newMonster.BaseDamage) + (setDmgAdj());
        MonsteradjStats.MonsterHitAdj = (newMonster.BaseHitAdj) + (setHitAdj());
        //sets new state for each variable
        this.setState({
            str: newMonster.Str,
            const: newMonster.Const,
            dext: newMonster.Dext,
            hp: MonsteradjStats.MonsterHp,
            dmg: MonsteradjStats.MonsterDmg
        });
    } */

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Name: "), this.state.monsterName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, " ", this.state.monsterstats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, " ", this.state.monsterstats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " ", this.state.monsterstats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, " ", this.state.monsterHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, " ", this.state.monsterDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Monster Float-right",
        src: "../static/images/monster.png",
        alt: "monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setMonsterstats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.monsterNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })))));
    }
  }]);

  return Monster;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Monster);

/***/ }),

/***/ "./pages/DandD/monsterfunctions.js":
/*!*****************************************!*\
  !*** ./pages/DandD/monsterfunctions.js ***!
  \*****************************************/
/*! exports provided: SetmonsterConstAdj, SetmonsteracAdj, SetmonsterDmgAdj, SetmonsterHitAdj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterConstAdj", function() { return SetmonsterConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsteracAdj", function() { return SetmonsteracAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterDmgAdj", function() { return SetmonsterDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterHitAdj", function() { return SetmonsterHitAdj; });
//sets monster hit adjustment based on strength stat number.
function SetmonsterConstAdj() {
  if (this.state.monsterstats.Const == 1) {
    return -3;
  }

  if (this.state.monsterstats.Const == 2 || this.state.monsterstats.Const == 3) {
    return -2;
  }

  if (this.state.monsterstats.Const >= 4 && this.state.monsterstats.Const <= 6) {
    return -1;
  }

  if (this.state.monsterstats.Const >= 7 && this.state.monsterstats.Const <= 14) {
    return 0;
  }

  if (this.state.monsterstats.Const == 15) {
    return 1;
  }

  if (this.state.monsterstats.Const == 16) {
    return 2;
  }

  if (this.state.monsterstats.Const == 17) {
    return 3;
  }

  if (this.state.monsterstats.Const == 18) {
    return 4;
  }

  if (this.state.monsterstats.Const == 19) {
    return 5;
  }

  if (this.state.monsterstats.Const == 20) {
    return 6;
  }
}
;
function SetmonsteracAdj() {
  if (this.state.monsterstats.Dext == 1 || this.state.monsterstats.Dext == 2) {
    return -5;
  }

  if (this.state.monsterstats.Dext == 3) {
    return -4;
  }

  if (this.state.monsterstats.Dext == 4) {
    return -3;
  }

  if (this.state.monsterstats.Dext == 5) {
    return -2;
  }

  if (this.state.monsterstats.Dext == 6) {
    return -1;
  }

  if (this.state.monsterstats.Dext >= 7 && this.state.monsterstats.Dext <= 14) {
    return 0;
  }

  if (this.state.monsterstats.Dext == 15) {
    return 1;
  }

  if (this.state.monsterstats.Dext == 16) {
    return 2;
  }

  if (this.state.monsterstats.Dext == 17) {
    return 3;
  }

  if (this.state.monsterstats.Dext == 18 || this.state.monsterstats.Dext == 19) {
    return 4;
  }

  if (this.state.monsterstats.Dext == 20) {
    return 5;
  }
}
function SetmonsterDmgAdj() {
  if (this.state.monsterstats.Str == 1) {
    return -4;
  }

  if (this.state.monsterstats.Str == 2 || this.state.monsterstats.Str == 3) {
    return -3;
  }

  if (this.state.monsterstats.Str == 4 || this.state.monsterstats.Str == 5) {
    return -2;
  }

  if (this.state.monsterstats.Str == 6 || this.state.monsterstats.Str == 7) {
    return -1;
  }

  if (this.state.monsterstats.Str >= 8 && this.state.monsterstats.Str <= 16) {
    return 0;
  }

  if (this.state.monsterstats.Str == 17) {
    return 1;
  }

  if (this.state.monsterstats.Str == 18) {
    return 2;
  }

  if (this.state.monsterstats.Str == 19) {
    return 3;
  }

  if (this.state.monsterstats.Str == 20) {
    return 4;
  }
}
function SetmonsterHitAdj() {
  if (this.state.monsterstats.Str == 1) {
    return -4;
  }

  if (this.state.monsterstats.Str == 2 || this.state.monsterstats.Str == 3) {
    return -3;
  }

  if (this.state.monsterstats.Str == 4 || this.state.monsterstats.Str == 5) {
    return -2;
  }

  if (this.state.monsterstats.Str == 6 || this.state.monsterstats.Str == 7) {
    return -1;
  }

  if (this.state.monsterstats.Str >= 8 && this.state.monsterstats.Str <= 16) {
    return 0;
  }

  if (this.state.monsterstats.Str == 17) {
    return 1;
  }

  if (this.state.monsterstats.Str == 18) {
    return 2;
  }

  if (this.state.monsterstats.Str == 19) {
    return 3;
  }

  if (this.state.monsterstats.Str == 20) {
    return 4;
  }
}
/*
export function setHitAdj() {
    if (newMonster.Str == 1) {
        return -4;
    }
    if (newMonster.Str == 2 || newMonster.Str == 3) {
        return -3;
    }
    if (newMonster.Str == 4 || newMonster.Str == 5) {
        return -2;
    }
    if (newMonster.Str == 6 || newMonster.Str == 7) {
        return -1;
    }
    if (newMonster.Str >= 8 && newMonster.Str <= 16) {
        return 0;
    }
    if (newMonster.Str == 17 ) {
        return 1;
    }
    if (newMonster.Str == 18 ) {
        return 2;
    }
    if (newMonster.Str == 19 ) {
        return 3;
    }
    if (newMonster.Str == 20 ) {
        return 4;
    }
}

//sets monster damage adjustment based on strength stat number.
export function setDmgAdj() {
    if (newMonster.Str == 1) {
        return -4;
    }
    if (newMonster.Str == 2 || newMonster.Str == 3) {
        return -3;
    }
    if (newMonster.Str == 4 || newMonster.Str == 5) {
        return -2;
    }
    if (newMonster.Str == 6 || newMonster.Str == 7) {
        return -1;
    }
    if (newMonster.Str >= 8 && newMonster.Str <= 16) {
        return 0;
    }
    if (newMonster.Str == 17 ) {
        return 1;
    }
    if (newMonster.Str == 18 ) {
        return 2;
    }
    if (newMonster.Str == 19 ) {
        return 3;
    }
    if (newMonster.Str == 20 ) {
        return 4;
    }
}

//sets monster armor class based on dexterity stat number.
export function setacAdj() {
    if (newMonster.Dext == 1 || newMonster.Dext == 2) {
        return -5;
    }
    if (newMonster.Dext == 3) {
        return -4;
    }
    if (newMonster.Dext == 4) {
        return -3;
    }
    if (newMonster.Dext == 5) {
        return -2;
    }
    if (newMonster.Dext == 6) {
        return -1;
    }
    if (newMonster.Dext >= 7 && newMonster.Dext <= 14) {
        return 0;
    }
    if (newMonster.Dext == 15) {
        return 1;
    }
    if (newMonster.Dext == 16) {
        return 2;
    }
    if (newMonster.Dext == 17) {
        return 3;
    }
    if (newMonster.Dext == 18 || newMonster.Dext == 19) {
        return 4;
    }
    if (newMonster.Dext == 20) {
        return 5;
    }
}

//sets monster hitpoints based on constitution stat number.
export function SetConstAdj() {
    if (newMonster.Const == 1) {
        return -3;
    }
    if (newMonster.Const == 2 || newMonster.Const == 3) {
        return -2;
    }
    if (newMonster.Const >= 4 && newMonster.Const <= 6) {
        return -1;
    }
    if (newMonster.Const >= 7 && newMonster.Const <= 14) {
        return 0;
    }
    if (newMonster.Const == 15) {
        return 1;
    }
    if (newMonster.Const == 16) {
        return 2;
    }
    if (newMonster.Const == 17) {
        return 3;
    }
    if (newMonster.Const == 18) {
        return 4;
    }
    if (newMonster.Const == 19) {
        return 5;
    }
    if (newMonster.Const == 20) {
        return 6;
    }
} */

/***/ }),

/***/ "./pages/DandDpage.js":
/*!****************************!*\
  !*** ./pages/DandDpage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _DandD_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DandD/hero */ "./pages/DandD/hero.js");
/* harmony import */ var _DandD_monster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DandD/monster */ "./pages/DandD/monster.js");
/* harmony import */ var _DandD_attacksim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DandD/attacksim */ "./pages/DandD/attacksim.js");





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandDpage.js";






var DandD =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DandD, _Component);

  function DandD() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DandD);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DandD).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DandD, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Dungeons and Dragons attack simulation"), "Calculations are based on SE 2 rules from late 80's and early 90's."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Instructions:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Press the \"Set Attributes\" buttons for both Hero and Monster."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Press the \"Roll for Initiative\" button to see who attacks first."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Follow the instructions and press the \"Roll for Attack\" buttons."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "After each round, repeat by rolling for Initiative and continue attacking until a character dies."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Attack-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DandD_attacksim__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })));
    }
  }]);

  return DandD;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DandD);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/DandDpage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mark\Desktop\newtest\my-page\pages\DandDpage.js */"./pages/DandDpage.js");


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

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=DandDpage.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/*! exports provided: MonsteradjStats, HeroadjStats, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsteradjStats", function() { return MonsteradjStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroadjStats", function() { return HeroadjStats; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\attacksim.js";



var MonsteradjStats = {
  MonsterHp: 0,
  MonsterAc: 0,
  MonsterDmg: 0,
  MonsterHitAdj: 0
};
var HeroadjStats = {
  HeroHp: 0,
  HeroAc: 0,
  HeroDmg: 0,
  HeroHitAdj: 0
};
var Heroroll = 0;
var Monsterroll = 0;
var Herodidhit = " ";
var Monsterdidhit = " ";
/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
  if (Heroroll >= MonsteradjStats.MonsterAc + HeroadjStats.HeroHitAdj) {
    Herodidhit = "HIT";
    MonsteradjStats.MonsterHp = MonsteradjStats.MonsterHp - 10;

    if (MonsteradjStats.MonsterHp <= 0) {
      MonsteradjStats.MonsterHp = "Dead";
    }
  } else {
    Herodidhit = "MISS";
  }

  ;
}
/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */


function Monsterattackroll() {
  if (Monsterroll >= HeroadjStats.HeroAc + MonsteradjStats.MonsterHitAdj) {
    Monsterdidhit = "HIT";
    HeroadjStats.HeroHp = HeroadjStats.HeroHp - 10;

    if (HeroadjStats.HeroHp <= 0) {
      HeroadjStats.HeroHp = "Dead";
    }
  } else {
    Monsterdidhit = "MISS";
  }

  ;
}

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
    _this.heroattack = _this.heroattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.Monsterattack = _this.Monsterattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.refresh = _this.refresh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }
  /*hero attack roll, radomly generates number between 1 to 20.  Then
  calls the hero attack roll function to determine successful attack.*/


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSim, [{
    key: "heroattack",
    value: function heroattack() {
      Heroroll = Math.floor(Math.random() * 20 + 1);
      heroattackroll();
      this.forceUpdate();
    }
    /*monster attack roll, randomly generates number between 1 to 20.  Then 
    calls the monster attack roll function to determine successful attack. */

  }, {
    key: "Monsterattack",
    value: function Monsterattack() {
      Monsterroll = Math.floor(Math.random() * 20 + 1);
      Monsterattackroll();
      this.forceUpdate();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.forceUpdate();
    }
    /*initiative role to determine if hero or monster attacks first.  sets 
    variable for initiative to determine first attack.  Who ever has lower 
    number goes first, on equal role, alerts that a reroll is necessary. */

  }, {
    key: "rollforiniative",
    value: function rollforiniative() {
      this.heroinitiative = Math.floor(Math.random() * 10 + 1);
      this.monsterinitiative = Math.floor(Math.random() * 10 + 1);

      if (this.heroinitiative < this.monsterinitiative) {
        this.heroinitiative = "First";
        this.monsterinitiative = "Second";
      } else if (this.heroinitiative > this.monsterinitiative) {
        this.monsterinitiative = "First";
        this.heroinitiative = "Second";
      } else {
        this.heroinitiative = "ReRoll";
        this.monsterinitiative = "ReRoll";
      }

      Herodidhit = " ";
      Monsterdidhit = " ";
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, HeroadjStats.HeroAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, HeroadjStats.HeroHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Hero Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, Herodidhit)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "StatRefresh DandD_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.refresh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Refresh stats")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Initiative DandD_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.rollforiniative,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Roll for iniative")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Heroinitiative center Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Hero ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, this.heroinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monsterinitiative center Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Monster initiative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, this.monsterinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroHP-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/herohp.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HeroHP-text Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, HeroadjStats.HeroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterHP-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/monsterhp.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "MonsterHP-text Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, MonsteradjStats.MonsterHp))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, MonsteradjStats.MonsterAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, MonsteradjStats.MonsterHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.Monsterattack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Monster Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, Monsterdidhit)));
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
/*! exports provided: newHero, Hero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newHero", function() { return newHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _herofunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./herofunctions */ "./pages/DandD/herofunctions.js");
/* harmony import */ var _attacksim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attacksim */ "./pages/DandD/attacksim.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js";








var newHero = {
  Str: 0,
  Const: 0,
  Dext: 0,
  BaseHitPoints: 50,
  BaseArmorClass: 10,
  BaseDamage: 10,
  BaseHitAdj: 0
};

var Hero =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).call(this, props)); //sets states for stats in the new hero object

    _this.state = {
      str: newHero.Str,
      const: newHero.Const,
      dext: newHero.Dext,
      hp: _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHp,
      dmg: _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroDmg,
      name: ''
    };
    _this.setherostats = _this.setherostats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "setherostats",
    value: function setherostats() {
      //random number between 1-20 to set stats
      newHero.Str = Math.floor(Math.random() * 20 + 1);
      newHero.Const = Math.floor(Math.random() * 20 + 1);
      newHero.Dext = Math.floor(Math.random() * 20 + 1); //calls functions in hero_functions to adjust stats in
      //heroadjstats variable in the attacksim.js

      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHp = newHero.BaseHitPoints + Object(_herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetConstAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroAc = newHero.BaseArmorClass + Object(_herofunctions__WEBPACK_IMPORTED_MODULE_7__["setacAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroDmg = newHero.BaseDamage + Object(_herofunctions__WEBPACK_IMPORTED_MODULE_7__["setDmgAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHitAdj = newHero.BaseHitAdj + Object(_herofunctions__WEBPACK_IMPORTED_MODULE_7__["setHitAdj"])(); //sets new state for each variable

      this.setState({
        str: newHero.Str,
        const: newHero.Const,
        dext: newHero.Dext,
        hp: _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHp,
        dmg: _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroDmg
      });
    } //displays name as entered into the name field. currently is
    //a live event rather than on submit event.

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        Name: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      this.setState(function (prevState) {
        return {
          showNameForm: !prevState.showNameForm
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Name:"), " ", this.state.Name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, " ", this.state.str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, " ", this.state.const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, " ", this.state.dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, " ", this.state.hp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, " ", this.state.dmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Hero Float-right",
        src: "../static/images/hero.png",
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setherostats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })))));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./pages/DandD/herofunctions.js":
/*!**************************************!*\
  !*** ./pages/DandD/herofunctions.js ***!
  \**************************************/
/*! exports provided: SetConstAdj, setHitAdj, setDmgAdj, setacAdj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConstAdj", function() { return SetConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHitAdj", function() { return setHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDmgAdj", function() { return setDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setacAdj", function() { return setacAdj; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./pages/DandD/hero.js");
 //sets hero hitpoints based on constitution stat number.

function SetConstAdj() {
  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 1) {
    return -3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 2 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 3) {
    return -2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const >= 4 && _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const <= 6) {
    return -1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const >= 7 && _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const <= 14) {
    return 0;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 15) {
    return 1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 16) {
    return 2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 17) {
    return 3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 18) {
    return 4;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 19) {
    return 5;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Const == 20) {
    return 6;
  }
} //sets hero hit adjustment based on strength stat number.

function setHitAdj() {
  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 1) {
    return -4;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 2 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 3) {
    return -3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 4 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 5) {
    return -2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 6 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 7) {
    return -1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str >= 8 && _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str <= 16) {
    return 0;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 17) {
    return 1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 18) {
    return 2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 19) {
    return 3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 20) {
    return 4;
  }
} //sets hero damage adjustment based on strength stat number.

function setDmgAdj() {
  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 1) {
    return -4;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 2 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 3) {
    return -3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 4 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 5) {
    return -2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 6 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 7) {
    return -1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str >= 8 && _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str <= 16) {
    return 0;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 17) {
    return 1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 18) {
    return 2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 19) {
    return 3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Str == 20) {
    return 4;
  }
} //sets hero armor class based on dexterity stat number.

function setacAdj() {
  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 1 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 2) {
    return -5;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 3) {
    return -4;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 4) {
    return -3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 5) {
    return -2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 6) {
    return -1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext >= 7 && _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext <= 14) {
    return 0;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 15) {
    return 1;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 16) {
    return 2;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 17) {
    return 3;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 18 || _hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 19) {
    return 4;
  }

  if (_hero__WEBPACK_IMPORTED_MODULE_0__["newHero"].Dext == 20) {
    return 5;
  }
}

/***/ }),

/***/ "./pages/DandD/monster.js":
/*!********************************!*\
  !*** ./pages/DandD/monster.js ***!
  \********************************/
/*! exports provided: newMonster, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMonster", function() { return newMonster; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _monsterfunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monsterfunctions */ "./pages/DandD/monsterfunctions.js");
/* harmony import */ var _attacksim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attacksim */ "./pages/DandD/attacksim.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\monster.js";







var newMonster = {
  Str: 0,
  Const: 0,
  Dext: 0,
  BaseHitPoints: 50,
  BaseArmorClass: 10,
  BaseDamage: 10,
  BaseHitAdj: 0
};

var Monster =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Monster, _React$Component);

  function Monster(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Monster);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Monster).call(this, props)); //sets states for stats in the new monster object

    _this.state = {
      str: newMonster.Str,
      const: newMonster.Const,
      dext: newMonster.Dext,
      hp: _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterHp,
      dmg: _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterDmg,
      Name: ''
    };
    _this.setMonsterstats = _this.setMonsterstats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  } //displays name as entered into the name field. currently is
  //a live event rather than on submit event.


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Monster, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        Name: event.target.value
      });
    }
  }, {
    key: "setMonsterstats",
    value: function setMonsterstats() {
      //random number 1-20 to set newmonster stats
      newMonster.Str = Math.floor(Math.random() * 20 + 1);
      newMonster.Const = Math.floor(Math.random() * 20 + 1);
      newMonster.Dext = Math.floor(Math.random() * 20 + 1); //calls the adjusted functions in monster_functions to set adjusted monster
      //stats in the attacksim.js

      _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterHp = newMonster.BaseHitPoints + Object(_monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["SetConstAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterAc = newMonster.BaseArmorClass + Object(_monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["setacAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterDmg = newMonster.BaseDamage + Object(_monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["setDmgAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterHitAdj = newMonster.BaseHitAdj + Object(_monsterfunctions__WEBPACK_IMPORTED_MODULE_7__["setHitAdj"])(); //sets new state for each variable

      this.setState({
        str: newMonster.Str,
        const: newMonster.Const,
        dext: newMonster.Dext,
        hp: _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterHp,
        dmg: _attacksim__WEBPACK_IMPORTED_MODULE_8__["MonsteradjStats"].MonsterDmg
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Name: "), this.state.Name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, " ", this.state.str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, " ", this.state.const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, " ", this.state.dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, " ", this.state.hp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, " ", this.state.dmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Monster Float-right",
        src: "../static/images/monster.png",
        alt: "monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setMonsterstats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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
/*! exports provided: setHitAdj, setDmgAdj, setacAdj, SetConstAdj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHitAdj", function() { return setHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDmgAdj", function() { return setDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setacAdj", function() { return setacAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConstAdj", function() { return SetConstAdj; });
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster */ "./pages/DandD/monster.js");
 //sets hero hit adjustment based on strength stat number.

function setHitAdj() {
  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 1) {
    return -4;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 2 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 3) {
    return -3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 4 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 5) {
    return -2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 6 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 7) {
    return -1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str >= 8 && _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str <= 16) {
    return 0;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 17) {
    return 1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 18) {
    return 2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 19) {
    return 3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 20) {
    return 4;
  }
} //sets hero damage adjustment based on strength stat number.

function setDmgAdj() {
  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 1) {
    return -4;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 2 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 3) {
    return -3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 4 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 5) {
    return -2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 6 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 7) {
    return -1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str >= 8 && _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str <= 16) {
    return 0;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 17) {
    return 1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 18) {
    return 2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 19) {
    return 3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Str == 20) {
    return 4;
  }
} //sets hero armor class based on dexterity stat number.

function setacAdj() {
  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 1 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 2) {
    return -5;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 3) {
    return -4;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 4) {
    return -3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 5) {
    return -2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 6) {
    return -1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext >= 7 && _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext <= 14) {
    return 0;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 15) {
    return 1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 16) {
    return 2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 17) {
    return 3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 18 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 19) {
    return 4;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Dext == 20) {
    return 5;
  }
} //sets hero hitpoints based on constitution stat number.

function SetConstAdj() {
  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 1) {
    return -3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 2 || _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 3) {
    return -2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const >= 4 && _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const <= 6) {
    return -1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const >= 7 && _monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const <= 14) {
    return 0;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 15) {
    return 1;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 16) {
    return 2;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 17) {
    return 3;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 18) {
    return 4;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 19) {
    return 5;
  }

  if (_monster__WEBPACK_IMPORTED_MODULE_0__["newMonster"].Const == 20) {
    return 6;
  }
}

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
      }, "Press the \"Refresh Stats\" button."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Press the \"Roll for Initiative\" button to see who attacks first."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Follow the instructions and press the \"Roll for Attack\" buttons."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "After each round, repeat by rolling for Initiative and continue attacking until a character dies."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "DandD_character Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DandD_hero__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DandD_monster__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Attack-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DandD_attacksim__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })));
    }
  }]);

  return DandD;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DandD);

/***/ }),

/***/ 7:
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
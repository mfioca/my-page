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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./node_modules/react-table/react-table.css":
/*!**************************************************!*\
  !*** ./node_modules/react-table/react-table.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/providerData.js":
/*!*******************************!*\
  !*** ./pages/providerData.js ***!
  \*******************************/
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
/* harmony import */ var _provider_data_providerimport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider_data/providerimport.js */ "./pages/provider_data/providerimport.js");





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\providerData.js";




var data = __webpack_require__(/*! ./provider_data/provider.json */ "./pages/provider_data/provider.json");

function Providerinfo() {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "Provider-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "center Fsize-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Provider Totals"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
    className: "Provider-info-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Total Transportation Providers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, data.length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Central Region Providers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'Central';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "SouthWest Region:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, " ", data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'SouthWest';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "East Region:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Provider' && data.Region === 'East';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, data.filter(function (data) {
    return data.Type === 'Volunteer Driver' && data.Region === 'East';
  }).length)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "center Fsize-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Level of Service Totals"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
    className: "Provider-info-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "All Regions:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, data.filter(function (data) {
    return data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, data.filter(function (data) {
    return data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, data.filter(function (data) {
    return data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Central:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'Central' && data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "SouthWest:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'SouthWest' && data.Stretcher === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "East:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.Amb === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.WCHR === 'Yes';
  }).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, data.filter(function (data) {
    return data.Region === 'East' && data.Stretcher === 'Yes';
  }).length)))));
}

var ProviderData =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProviderData, _Component);

  function ProviderData() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProviderData);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProviderData).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProviderData, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "this is data imported from a local json file. It will recreate a tracking spreadsheet I created at one of my jobs."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "I used react-table dependency to build the data table. Altering formatting to match my spreadsheet. ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Providerinfo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_provider_data_providerimport_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }));
    }
  }]);

  return ProviderData;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProviderData);

/***/ }),

/***/ "./pages/provider_data/provider.json":
/*!*******************************************!*\
  !*** ./pages/provider_data/provider.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, default */
/***/ (function(module) {

module.exports = [{"id":1,"Name":"Random Provider Name 1","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":2,"Name":"Random Provider Name 2","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":3,"Name":"Random Provider Name 3","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":4,"Name":"Random Provider Name 4","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":5,"Name":"Random Provider Name 5","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":6,"Name":"Random Provider Name 6","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":7,"Name":"Random Provider Name 7","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":8,"Name":"Random Provider Name 8","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":9,"Name":"Random Provider Name 9","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":10,"Name":"Random Provider Name 10","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":11,"Name":"Random Provider Name 11","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":12,"Name":"Random Provider Name 12","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":13,"Name":"Random Provider Name 13","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":14,"Name":"Random Provider Name 14","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":15,"Name":"Random Provider Name 15","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":16,"Name":"Random Provider Name 16","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":17,"Name":"Random Provider Name 17","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":18,"Name":"Random Provider Name 18","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":19,"Name":"Random Provider Name 19","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Franklin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":20,"Name":"Random Provider Name 20","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":21,"Name":"Random Provider Name 21","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":22,"Name":"Random Provider Name 22","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Jenkins","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":23,"Name":"Random Provider Name 23","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":24,"Name":"Random Provider Name 24","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Stewart","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":25,"Name":"Random Provider Name 25","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":26,"Name":"Random Provider Name 26","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":27,"Name":"Random Provider Name 27","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":28,"Name":"Random Provider Name 28","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":29,"Name":"Random Provider Name 29","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":30,"Name":"Random Provider Name 30","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":31,"Name":"Random Provider Name 31","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":32,"Name":"Random Provider Name 32","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":33,"Name":"Random Provider Name 33","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cherokee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":34,"Name":"Random Provider Name 34","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":35,"Name":"Random Provider Name 35","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":36,"Name":"Random Provider Name 36","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":37,"Name":"Random Provider Name 37","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":38,"Name":"Random Provider Name 38","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":39,"Name":"Random Provider Name 39","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":40,"Name":"Random Provider Name 40","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":41,"Name":"Random Provider Name 41","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":42,"Name":"Random Provider Name 42","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":43,"Name":"Random Provider Name 43","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":44,"Name":"Random Provider Name 44","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":45,"Name":"Random Provider Name 45","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":46,"Name":"Random Provider Name 46","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":47,"Name":"Random Provider Name 47","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":48,"Name":"Random Provider Name 48","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":49,"Name":"Random Provider Name 49","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":50,"Name":"Random Provider Name 50","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":51,"Name":"Random Provider Name 51","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":52,"Name":"Random Provider Name 52","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":53,"Name":"Random Provider Name 53","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":54,"Name":"Random Provider Name 54","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":55,"Name":"Random Provider Name 55","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":56,"Name":"Random Provider Name 56","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Screven","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":57,"Name":"Random Provider Name 57","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":58,"Name":"Random Provider Name 58","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":59,"Name":"Random Provider Name 59","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":60,"Name":"Random Provider Name 60","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":61,"Name":"Random Provider Name 61","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":62,"Name":"Random Provider Name 62","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":63,"Name":"Random Provider Name 63","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":64,"Name":"Random Provider Name 64","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":65,"Name":"Random Provider Name 65","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Glynn","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":66,"Name":"Random Provider Name 66","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":67,"Name":"Random Provider Name 67","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":68,"Name":"Random Provider Name 68","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":69,"Name":"Random Provider Name 69","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":70,"Name":"Random Provider Name 70","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":71,"Name":"Random Provider Name 71","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":72,"Name":"Random Provider Name 72","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":73,"Name":"Random Provider Name 73","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":74,"Name":"Random Provider Name 74","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":75,"Name":"Random Provider Name 75","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":76,"Name":"Random Provider Name 76","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":77,"Name":"Random Provider Name 77","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":78,"Name":"Random Provider Name 78","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Wilcox","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":79,"Name":"Random Provider Name 79","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":80,"Name":"Random Provider Name 80","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":81,"Name":"Random Provider Name 81","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":82,"Name":"Random Provider Name 82","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":83,"Name":"Random Provider Name 83","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":84,"Name":"Random Provider Name 84","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":85,"Name":"Random Provider Name 85","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":86,"Name":"Random Provider Name 86","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":87,"Name":"Random Provider Name 87","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":88,"Name":"Random Provider Name 88","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":89,"Name":"Random Provider Name 89","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":90,"Name":"Random Provider Name 90","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":91,"Name":"Random Provider Name 91","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":92,"Name":"Random Provider Name 92","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":93,"Name":"Random Provider Name 93","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":94,"Name":"Random Provider Name 94","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":95,"Name":"Random Provider Name 95","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":96,"Name":"Random Provider Name 96","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":97,"Name":"Random Provider Name 97","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":98,"Name":"Random Provider Name 98","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":99,"Name":"Random Provider Name 99","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":100,"Name":"Random Provider Name 100","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":101,"Name":"Random Provider Name 101","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":102,"Name":"Random Provider Name 102","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":103,"Name":"Random Provider Name 103","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Benn Hill","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":104,"Name":"Random Provider Name 104","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":105,"Name":"Random Provider Name 105","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":106,"Name":"Random Provider Name 106","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":107,"Name":"Random Provider Name 107","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":108,"Name":"Random Provider Name 108","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":109,"Name":"Random Provider Name 109","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":110,"Name":"Random Provider Name 110","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":111,"Name":"Random Provider Name 111","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":112,"Name":"Random Provider Name 112","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":113,"Name":"Random Provider Name 113","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":114,"Name":"Random Provider Name 114","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Madison","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":115,"Name":"Random Provider Name 115","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":116,"Name":"Random Provider Name 116","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":117,"Name":"Random Provider Name 117","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":118,"Name":"Random Provider Name 118","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":119,"Name":"Random Provider Name 119","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":120,"Name":"Random Provider Name 120","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":121,"Name":"Random Provider Name 121","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":122,"Name":"Random Provider Name 122","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":123,"Name":"Random Provider Name 123","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":124,"Name":"Random Provider Name 124","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":125,"Name":"Random Provider Name 125","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":126,"Name":"Random Provider Name 126","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":127,"Name":"Random Provider Name 127","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":128,"Name":"Random Provider Name 128","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Candler","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":129,"Name":"Random Provider Name 129","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":130,"Name":"Random Provider Name 130","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":131,"Name":"Random Provider Name 131","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":132,"Name":"Random Provider Name 132","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":133,"Name":"Random Provider Name 133","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":134,"Name":"Random Provider Name 134","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":135,"Name":"Random Provider Name 135","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":136,"Name":"Random Provider Name 136","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":137,"Name":"Random Provider Name 137","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":138,"Name":"Random Provider Name 138","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":139,"Name":"Random Provider Name 139","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":140,"Name":"Random Provider Name 140","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":141,"Name":"Random Provider Name 141","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":142,"Name":"Random Provider Name 142","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":143,"Name":"Random Provider Name 143","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":144,"Name":"Random Provider Name 144","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":145,"Name":"Random Provider Name 145","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":146,"Name":"Random Provider Name 146","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":147,"Name":"Random Provider Name 147","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":148,"Name":"Random Provider Name 148","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":149,"Name":"Random Provider Name 149","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":150,"Name":"Random Provider Name 150","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":151,"Name":"Random Provider Name 151","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":152,"Name":"Random Provider Name 152","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":153,"Name":"Random Provider Name 153","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":154,"Name":"Random Provider Name 154","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":155,"Name":"Random Provider Name 155","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":156,"Name":"Random Provider Name 156","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":157,"Name":"Random Provider Name 157","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":158,"Name":"Random Provider Name 158","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":159,"Name":"Random Provider Name 159","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":160,"Name":"Random Provider Name 160","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":161,"Name":"Random Provider Name 161","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":162,"Name":"Random Provider Name 162","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":163,"Name":"Random Provider Name 163","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":164,"Name":"Random Provider Name 164","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":165,"Name":"Random Provider Name 165","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":166,"Name":"Random Provider Name 166","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":167,"Name":"Random Provider Name 167","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":168,"Name":"Random Provider Name 168","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":169,"Name":"Random Provider Name 169","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":170,"Name":"Random Provider Name 170","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":171,"Name":"Random Provider Name 171","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Oglethorpe","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":172,"Name":"Random Provider Name 172","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":173,"Name":"Random Provider Name 173","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Burke","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":174,"Name":"Random Provider Name 174","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":175,"Name":"Random Provider Name 175","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":176,"Name":"Random Provider Name 176","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"SC","Type":"Provider","Region":"East","County":"Richmond","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":177,"Name":"Random Provider Name 177","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":178,"Name":"Random Provider Name 178","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":179,"Name":"Random Provider Name 179","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":180,"Name":"Random Provider Name 180","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":181,"Name":"Random Provider Name 181","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":182,"Name":"Random Provider Name 182","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":183,"Name":"Random Provider Name 183","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":184,"Name":"Random Provider Name 184","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":185,"Name":"Random Provider Name 185","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":186,"Name":"Random Provider Name 186","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":187,"Name":"Random Provider Name 187","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":188,"Name":"Random Provider Name 188","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":189,"Name":"Random Provider Name 189","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":190,"Name":"Random Provider Name 190","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Colquitt","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":191,"Name":"Random Provider Name 191","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":192,"Name":"Random Provider Name 192","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":193,"Name":"Random Provider Name 193","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":194,"Name":"Random Provider Name 194","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":195,"Name":"Random Provider Name 195","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":196,"Name":"Random Provider Name 196","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":197,"Name":"Random Provider Name 197","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":198,"Name":"Random Provider Name 198","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":199,"Name":"Random Provider Name 199","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":200,"Name":"Random Provider Name 200","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":201,"Name":"Random Provider Name 201","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":202,"Name":"Random Provider Name 202","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":203,"Name":"Random Provider Name 203","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Seminole ","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":204,"Name":"Random Provider Name 204","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":205,"Name":"Random Provider Name 205","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":206,"Name":"Random Provider Name 206","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":207,"Name":"Random Provider Name 207","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":208,"Name":"Random Provider Name 208","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":209,"Name":"Random Provider Name 209","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":210,"Name":"Random Provider Name 210","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":211,"Name":"Random Provider Name 211","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Emanuel","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":212,"Name":"Random Provider Name 212","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":213,"Name":"Random Provider Name 213","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":214,"Name":"Random Provider Name 214","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":215,"Name":"Random Provider Name 215","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":216,"Name":"Random Provider Name 216","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Rockdale","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":217,"Name":"Random Provider Name 217","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":218,"Name":"Random Provider Name 218","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":219,"Name":"Random Provider Name 219","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":220,"Name":"Random Provider Name 220","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Johnson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":221,"Name":"Random Provider Name 221","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":222,"Name":"Random Provider Name 222","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Pulaski ","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":223,"Name":"Random Provider Name 223","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":224,"Name":"Random Provider Name 224","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Appling","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":225,"Name":"Random Provider Name 225","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":226,"Name":"Random Provider Name 226","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Paulding","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":227,"Name":"Random Provider Name 227","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":228,"Name":"Random Provider Name 228","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dodge","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":229,"Name":"Random Provider Name 229","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":230,"Name":"Random Provider Name 230","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":231,"Name":"Random Provider Name 231","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Hancock","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":232,"Name":"Random Provider Name 232","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":233,"Name":"Random Provider Name 233","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":234,"Name":"Random Provider Name 234","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":235,"Name":"Random Provider Name 235","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":236,"Name":"Random Provider Name 236","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":237,"Name":"Random Provider Name 237","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":238,"Name":"Random Provider Name 238","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":239,"Name":"Random Provider Name 239","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":240,"Name":"Random Provider Name 240","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":241,"Name":"Random Provider Name 241","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":242,"Name":"Random Provider Name 242","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"AL","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":243,"Name":"Random Provider Name 243","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":244,"Name":"Random Provider Name 244","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":245,"Name":"Random Provider Name 245","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":246,"Name":"Random Provider Name 246","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":247,"Name":"Random Provider Name 247","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":248,"Name":"Random Provider Name 248","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":249,"Name":"Random Provider Name 249","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":250,"Name":"Random Provider Name 250","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Ware","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":251,"Name":"Random Provider Name 251","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"CA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":252,"Name":"Random Provider Name 252","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":253,"Name":"Random Provider Name 253","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":254,"Name":"Random Provider Name 254","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":255,"Name":"Random Provider Name 255","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":256,"Name":"Random Provider Name 256","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Barrow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":257,"Name":"Random Provider Name 257","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":258,"Name":"Random Provider Name 258","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":259,"Name":"Random Provider Name 259","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":260,"Name":"Random Provider Name 260","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":261,"Name":"Random Provider Name 261","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":262,"Name":"Random Provider Name 262","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":263,"Name":"Random Provider Name 263","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":264,"Name":"Random Provider Name 264","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":265,"Name":"Random Provider Name 265","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":266,"Name":"Random Provider Name 266","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":267,"Name":"Random Provider Name 267","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"FL","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":268,"Name":"Random Provider Name 268","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":269,"Name":"Random Provider Name 269","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":270,"Name":"Random Provider Name 270","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":271,"Name":"Random Provider Name 271","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":272,"Name":"Random Provider Name 272","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Peach","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":273,"Name":"Random Provider Name 273","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"FL","Type":"Provider","Region":"Central","County":"Troup","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":274,"Name":"Random Provider Name 274","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":275,"Name":"Random Provider Name 275","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":276,"Name":"Random Provider Name 276","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":277,"Name":"Random Provider Name 277","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":278,"Name":"Random Provider Name 278","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":279,"Name":"Random Provider Name 279","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":280,"Name":"Random Provider Name 280","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":281,"Name":"Random Provider Name 281","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Jefferson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":282,"Name":"Random Provider Name 282","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":283,"Name":"Random Provider Name 283","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":284,"Name":"Random Provider Name 284","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":285,"Name":"Random Provider Name 285","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":286,"Name":"Random Provider Name 286","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":287,"Name":"Random Provider Name 287","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":288,"Name":"Random Provider Name 288","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":289,"Name":"Random Provider Name 289","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":290,"Name":"Random Provider Name 290","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":291,"Name":"Random Provider Name 291","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":292,"Name":"Random Provider Name 292","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":293,"Name":"Random Provider Name 293","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":294,"Name":"Random Provider Name 294","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":295,"Name":"Random Provider Name 295","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":296,"Name":"Random Provider Name 296","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":297,"Name":"Random Provider Name 297","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":298,"Name":"Random Provider Name 298","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":299,"Name":"Random Provider Name 299","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Warren","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":300,"Name":"Random Provider Name 300","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":301,"Name":"Random Provider Name 301","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":302,"Name":"Random Provider Name 302","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":303,"Name":"Random Provider Name 303","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":304,"Name":"Random Provider Name 304","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":305,"Name":"Random Provider Name 305","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":306,"Name":"Random Provider Name 306","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":307,"Name":"Random Provider Name 307","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":308,"Name":"Random Provider Name 308","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":309,"Name":"Random Provider Name 309","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":310,"Name":"Random Provider Name 310","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Jackson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":311,"Name":"Random Provider Name 311","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":312,"Name":"Random Provider Name 312","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":313,"Name":"Random Provider Name 313","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":314,"Name":"Random Provider Name 314","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":315,"Name":"Random Provider Name 315","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":316,"Name":"Random Provider Name 316","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":317,"Name":"Random Provider Name 317","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":318,"Name":"Random Provider Name 318","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":319,"Name":"Random Provider Name 319","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Wayne","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":320,"Name":"Random Provider Name 320","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":321,"Name":"Random Provider Name 321","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Talbot","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":322,"Name":"Random Provider Name 322","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Taylor","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":323,"Name":"Random Provider Name 323","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":324,"Name":"Random Provider Name 324","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":325,"Name":"Random Provider Name 325","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":326,"Name":"Random Provider Name 326","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":327,"Name":"Random Provider Name 327","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"AL","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":328,"Name":"Random Provider Name 328","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":329,"Name":"Random Provider Name 329","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"SC","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":330,"Name":"Random Provider Name 330","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":331,"Name":"Random Provider Name 331","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":332,"Name":"Random Provider Name 332","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"FL","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":333,"Name":"Random Provider Name 333","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":334,"Name":"Random Provider Name 334","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":335,"Name":"Random Provider Name 335","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":336,"Name":"Random Provider Name 336","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":337,"Name":"Random Provider Name 337","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":338,"Name":"Random Provider Name 338","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":339,"Name":"Random Provider Name 339","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":340,"Name":"Random Provider Name 340","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":341,"Name":"Random Provider Name 341","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":342,"Name":"Random Provider Name 342","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":343,"Name":"Random Provider Name 343","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":344,"Name":"Random Provider Name 344","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":345,"Name":"Random Provider Name 345","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":346,"Name":"Random Provider Name 346","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"East","County":"Clay","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":347,"Name":"Random Provider Name 347","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":348,"Name":"Random Provider Name 348","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"SC","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":349,"Name":"Random Provider Name 349","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":350,"Name":"Random Provider Name 350","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":351,"Name":"Random Provider Name 353","Address":"Random Address","Phone":"random phone #","Email":"random email","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"}];

/***/ }),

/***/ "./pages/provider_data/providerimport.js":
/*!***********************************************!*\
  !*** ./pages/provider_data/providerimport.js ***!
  \***********************************************/
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
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _provider_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider.json */ "./pages/provider_data/provider.json");
var _provider_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./provider.json */ "./pages/provider_data/provider.json", 1);





var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\provider_data\\providerimport.js";



 //var data = require('./provider.json');

/*counts number of Region types there are in the json
const uniqueNames = new Set(data.map(item => item.Region)).size;
*/
//Function for case insensitivity allowing for more flexibility on filter results based
//on user input.

function filterCaseInsensitive(filter, row) {
  var id = filter.pivotId || filter.id;
  return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
} //creates dropdown list for each table column listing available selection options for 
//each json listing.  Example: Region - Central, Southwest, East


var customFilter = function customFilter(_ref) {
  var fieldName = _ref.fieldName,
      filter = _ref.filter,
      _onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    style: {
      width: "100%"
    },
    value: filter ? filter.value : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Show All"), _provider_json__WEBPACK_IMPORTED_MODULE_8__.map(function (item) {
    return item[fieldName];
  }).filter(function (item, i, s) {
    return s.lastIndexOf(item) == i;
  }).map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: value,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, value);
  }));
};

var ProviderList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProviderList, _Component);

  function ProviderList(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProviderList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProviderList).call(this, props));
  } //pulls the json file on initial load


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProviderList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fetch("/provider.json").then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _provider_json__WEBPACK_IMPORTED_MODULE_8__ ? this.renderData(_provider_json__WEBPACK_IMPORTED_MODULE_8__) : this.renderLoading();
    }
  }, {
    key: "renderData",
    value: function renderData(data) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "Provider-table -striped -highlight center",
        data: data,
        defaultPageSize: 20,
        style: {
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room

        } //sets filtering options in react-table for no dropdown option.  Calls the filtercaseinsensitive
        //function as mentioned above
        ,
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          return filterCaseInsensitive(filter, row);
        },
        columns: [{
          Header: "Provider",
          columns: [{
            Header: "Name",
            accessor: "Name",
            //*sorting method to allow for listing of numerical order listed in the name
            sortMethod: function sortMethod(a, b) {
              if (a.length === b.length) {
                return a > b ? 1 : -1;
              }

              return a.length > b.length ? 1 : -1;
            }
          }, {
            Header: "Address",
            id: "Address",
            accessor: function accessor(d) {
              return d.Address;
            }
          }, {
            Header: "Phone",
            id: "Phone",
            accessor: function accessor(d) {
              return d.Phone;
            }
          }, {
            Header: "Email",
            id: "Email",
            accessor: function accessor(d) {
              return d.Email;
            }
          }]
        }, {
          Header: "Provider Info",
          columns: [{
            Header: "Type",
            id: "Type",
            accessor: function accessor(d) {
              return d.Type;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            Filter: function Filter(_ref2) {
              var filter = _ref2.filter,
                  onChange = _ref2.onChange;
              return customFilter({
                fieldName: 'Type',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Region",
            id: "Region",
            accessor: function accessor(d) {
              return d.Region;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref3) {
              var filter = _ref3.filter,
                  onChange = _ref3.onChange;
              return customFilter({
                fieldName: 'Region',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "County",
            id: "County",
            accessor: function accessor(d) {
              return d.County;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref4) {
              var filter = _ref4.filter,
                  onChange = _ref4.onChange;
              return customFilter({
                fieldName: 'County',
                filter: filter,
                onChange: onChange
              });
            }
          }]
        }, {
          Header: "Level of Service",
          columns: [{
            Header: "Ambulatory",
            accessor: "Amb",
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref5) {
              var filter = _ref5.filter,
                  onChange = _ref5.onChange;
              return customFilter({
                fieldName: 'Amb',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Wheelchair",
            id: "WCHR",
            accessor: function accessor(d) {
              return d.WCHR;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref6) {
              var filter = _ref6.filter,
                  onChange = _ref6.onChange;
              return customFilter({
                fieldName: 'WCHR',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Stretcher",
            id: "Stretcher",
            accessor: function accessor(d) {
              return d.Stretcher;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref7) {
              var filter = _ref7.filter,
                  onChange = _ref7.onChange;
              return customFilter({
                fieldName: 'Stretcher',
                filter: filter,
                onChange: onChange
              });
            }
          }]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, function (state, makeTable, instance) {
        var recordsInfoText = "";
        var filtered = state.filtered,
            pageRows = state.pageRows,
            pageSize = state.pageSize,
            sortedData = state.sortedData,
            page = state.page;

        if (sortedData && sortedData.length > 0) {
          var isFiltered = filtered.length > 0;
          var totalRecords = sortedData.length;
          var recordsCountFrom = page * pageSize + 1;
          var recordsCountTo = recordsCountFrom + pageRows.length - 1;
          if (isFiltered) recordsInfoText = "".concat(totalRecords, " filtered Providers");else recordsInfoText = "".concat(recordsCountFrom, "-").concat(recordsCountTo, " of ").concat(totalRecords, " records");
        } else recordsInfoText = "No records";

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "main-grid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "Fsize-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "records-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, recordsInfoText)), makeTable());
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Loading...");
    }
  }]);

  return ProviderList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProviderList);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/providerData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mark\Desktop\newtest\my-page\pages\providerData.js */"./pages/providerData.js");


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

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ })

/******/ });
//# sourceMappingURL=providerData.js.map
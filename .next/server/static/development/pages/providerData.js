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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\components\\Footer.js";




var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer, _React$Component);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        color: "dark",
        dark: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        navbar: true,
        className: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "https://www.linkedin.com/in/mark-fioca/",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "DeviantArt")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "https://github.com/mfioca/my-page",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "GitHub"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "ml-auto h4",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
        href: "mailto: mark@fioca.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Email"))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\components\\Header.js";


var activeprofile = '';

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
        color: "dark",
        className: "h4",
        dark: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        nav: true,
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Projects"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        right: true,
        className: "bg-dark btn-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-dark w-100",
        href: "/tvpage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "TvMaze"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-dark w-100",
        href: "/DandDpage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "DandD"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-dark w-100",
        href: "/providerData",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Provider List"), activeprofile === 'Guest' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        className: "btn-dark w-100",
        href: "/test",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Test")))))));
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
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\components\\layout.js";





var Bodystyle = {
  minHeight: '100vh',
  maxWidth: '98%',
  marginRight: 'auto',
  marginLeft: 'auto'
};
function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: Bodystyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-table/react-table.css":
/*!**************************************************!*\
  !*** ./node_modules/react-table/react-table.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsxstyles */ "./pages/jsxstyles.js");





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
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.Caption2));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          className: "display-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "container-fluid text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["HomeImage"],
          alt: "avatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption1Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
          className: "my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption2Style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, this.props.Caption2, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }), this.props.Caption3));
      }
    }
  }]);

  return CustomJumbo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //used in about page

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
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, this.props.Description))))));
      }

      if (this.props.Align === "Left") {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          className: this.props.Class,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, this.props.Description))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //used in about page for resume

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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "Text-Left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.props.Item1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.props.Item2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.props.Item3), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.props.Item4))))));
    }
  }]);

  return SingleListCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: this.props.Class,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.props.Description1)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, this.props.Description2)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //used in home page

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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["CardImageStyle"],
        src: this.props.Image,
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, this.props.Description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        href: this.props.Link,
        className: "btn-dark",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, this.props.ButtonTitle))));
    }
  }]);

  return HomeCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        borderless: true,
        className: " ml-4 p-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, " ", this.props.Strength)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, " ", this.props.Constitution)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, " ", this.props.Dexterity)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, " ", this.props.Hitpoints)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-muted  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "text-white  text-left h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, " ", this.props.Damage))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "float-right mr-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["DandDAvatar"],
        src: this.props.ImgUrl,
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      })))));
    }
  }]);

  return CharacterSheet;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // D and D application

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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "my-4 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["thumbnail"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "AC-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, this.props.AC)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "my-4 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["thumbnail"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "HitAdj-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, this.props.HitAdj)))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-flex justify-content-center my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: this.props.AttackRoll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, this.props.RollTitle)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Attack Result:")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "alert-success w-100 text-center my-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, this.props.DidHit)));
    }
  }]);

  return AttackSection;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //D and D application

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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        className: "mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
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
          lineNumber: 293
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        type: "button",
        className: "ml-5 ",
        onClick: this.props.NameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Submit"))));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ }),

/***/ "./pages/jsxstyles.js":
/*!****************************!*\
  !*** ./pages/jsxstyles.js ***!
  \****************************/
/*! exports provided: HomeImage, CardImageStyle, AboutImg, TvpageSearchBar, TvImage, TvTitle, DandDAvatar, thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeImage", function() { return HomeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageStyle", function() { return CardImageStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutImg", function() { return AboutImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvpageSearchBar", function() { return TvpageSearchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvImage", function() { return TvImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvTitle", function() { return TvTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DandDAvatar", function() { return DandDAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thumbnail", function() { return thumbnail; });

var HomeImage = {
  borderRadius: '50%',
  width: '20%',
  height: 'auto'
};
var CardImageStyle = {
  maxWidth: '150px',
  maxHeight: '150px',
  marginRight: 'auto',
  marginLeft: 'auto'
};
var AboutImg = {
  width: '300px',
  height: '300px',
  padding: '5px'
};
var DandDAvatar = {
  height: '300px',
  width: 'auto'
};
var thumbnail = {
  position: 'relative',
  align: 'center' //TvMaze Page

};
var TvpageSearchBar = {
  fontSize: '14px',
  marginLeft: '200px',
  marginRight: 'auto',
  textAlign: 'center'
};
var TvImage = {
  height: '300px',
  width: 'auto'
};
var TvTitle = {
  height: '20px',
  width: '200px',
  margin: 4
};

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customComponents */ "./pages/customComponents.js");
/* harmony import */ var _provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./provider_data/providerImport.js */ "./pages/provider_data/providerImport.js");





var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\providerData.js";







var data = __webpack_require__(/*! ./provider_data/provider.json */ "./pages/provider_data/provider.json");

function eatshit(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children);
} // {data.filter(data => data.Type === 'Provider').length}: 
// filters the json based on items with values and totals up 
//the number of listed items with that data value.  example above:
//count the number of entries with the data "Type" of 'Provider'  
//function Providerinfo() {


var Providerinfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Providerinfo, _React$Component);

  function Providerinfo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Providerinfo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Providerinfo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Providerinfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Provider Totals"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        bordered: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Total Transportation Providers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, data.length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Central Region Providers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'Central';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "SouthWest Region:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'SouthWest';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "East Region:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Transportation Companies:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Provider' && data.Region === 'East';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Volunteer Drivers:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-3055403691",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, data.filter(function (data) {
        return data.Type === 'Volunteer Driver' && data.Region === 'East';
      }).length))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3055403691",
        __self: this
      }, "td.jsx-3055403691:nth-child(odd){text-align:right;}.jsx-3055403691,td.jsx-3055403691:nth-child(even){text-align:center;widtH:70px;}th.jsx-3055403691{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRG9jdW1lbnRzXFxnaXRodWJcXG15LXBhZ2VcXHBhZ2VzXFxwcm92aWRlckRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0Z3QyxBQUdzRCxBQUdDLEFBTXZCLGNBQUMsR0FSQSxDQUdlLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEb2N1bWVudHNcXGdpdGh1YlxcbXktcGFnZVxccGFnZXNcXHByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgeyBDdXN0b21KdW1ib30gZnJvbSAnLi9jdXN0b21Db21wb25lbnRzJ1xyXG5pbXBvcnQgUHJvdmlkZXJMaXN0IGZyb20gJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlckltcG9ydC5qcydcclxuXHJcblxyXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vcHJvdmlkZXJfZGF0YS9wcm92aWRlci5qc29uJyk7XHJcblxyXG5mdW5jdGlvbiBlYXRzaGl0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L3RkPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbi8vIHtkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJykubGVuZ3RofTogXHJcbi8vIGZpbHRlcnMgdGhlIGpzb24gYmFzZWQgb24gaXRlbXMgd2l0aCB2YWx1ZXMgYW5kIHRvdGFscyB1cCBcclxuLy90aGUgbnVtYmVyIG9mIGxpc3RlZCBpdGVtcyB3aXRoIHRoYXQgZGF0YSB2YWx1ZS4gIGV4YW1wbGUgYWJvdmU6XHJcbi8vY291bnQgdGhlIG51bWJlciBvZiBlbnRyaWVzIHdpdGggdGhlIGRhdGEgXCJUeXBlXCIgb2YgJ1Byb3ZpZGVyJyAgXHJcblxyXG4vL2Z1bmN0aW9uIFByb3ZpZGVyaW5mbygpIHtcclxuY2xhc3MgUHJvdmlkZXJpbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInB4LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0yXCI+PGI+PHU+UHJvdmlkZXIgVG90YWxzPC91PjwvYj48L2g0PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgVHJhbnNwb3J0YXRpb24gUHJvdmlkZXJzOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YS5sZW5ndGh9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvbHVudGVlciBEcml2ZXJzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DZW50cmFsIFJlZ2lvbiBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicgJiYgZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyApLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U291dGhXZXN0IFJlZ2lvbjo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRyYW5zcG9ydGF0aW9uIENvbXBhbmllczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInICYmIGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyApLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdWb2x1bnRlZXIgRHJpdmVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWFzdCBSZWdpb246PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicgJiYgZGF0YS5SZWdpb24gPT09ICdFYXN0JyApLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnRWFzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRIOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0yXCI+PGI+PHU+TGV2ZWwgb2YgU2VydmljZSBUb3RhbHM8L3U+PC9iPjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+QWxsIFJlZ2lvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5DZW50cmFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnQ2VudHJhbCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+U291dGhXZXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyAmJiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICYmIGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+RWFzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuV0NIUiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggU3RyZXRjaGVyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICYmIGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRIOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWdoOiBjZW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb3ZpZGVyRGF0YSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEN1c3RvbUp1bWJvXHJcbiAgICAgICAgICAgICAgICBUaXRsZT1cIlByb3ZpZGVyIExpc3RcIlxyXG4gICAgICAgICAgICAgICAgSW1nVXJsPVwibm9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMVN0eWxlPSdsZWFkIHRleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjE9XCJ0aGlzIGlzIGRhdGEgaW1wb3J0ZWQgZnJvbSBhIGxvY2FsIGpzb24gZmlsZS4gSXQgd2lsbCByZWNyZWF0ZSBhIHRyYWNraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkc2hlZXQgSSBjcmVhdGVkIGF0IG9uZSBvZiBteSBqb2JzLlwiXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMlN0eWxlPSd0ZXh0LWNlbnRlcidcclxuICAgICAgICAgICAgICAgIENhcHRpb24yPVwiSSB1c2VkIHJlYWN0LXRhYmxlIGRlcGVuZGVuY3kgdG8gYnVpbGQgdGhlIGRhdGEgdGFibGUuIEFsdGVyaW5nIGZvcm1hdHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB0byBtYXRjaCBteSBzcHJlYWRzaGVldC5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qUHJvdmlkZXJpbmZvIGxpc3RlZCBhYm92ZSovfVxyXG4gICAgICAgICAgICA8UHJvdmlkZXJpbmZvIC8+XHJcbiAgICAgICAgICAgIHsvKnB1bGxlZCBpbiBmcm9tIHByb3ZpZGVyaW1wb3J0LmpzKi99XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEwXCIgY2xhc3NOYW1lPVwibWItM1wiID5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvdmlkZXJMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApOyBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXJEYXRhOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\providerData.js */"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        className: "px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Level of Service Totals"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        striped: true,
        bordered: true,
        size: "sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "All Regions")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, data.filter(function (data) {
        return data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, data.filter(function (data) {
        return data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, data.filter(function (data) {
        return data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Central")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'Central' && data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "SouthWest")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'SouthWest' && data.Stretcher === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        colspan: "2",
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "East")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Providers with Ambulatory:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.Amb === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Providers with Wheelchair:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.WCHR === 'Yes';
      }).length)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Providers with Stretcher:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        className: "jsx-1821849195",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, data.filter(function (data) {
        return data.Region === 'East' && data.Stretcher === 'Yes';
      }).length))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1821849195",
        __self: this
      }, ".jsx-1821849195{text-align:center;widtH:70px;}th.jsx-1821849195{aligh:center,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRG9jdW1lbnRzXFxnaXRodWJcXG15LXBhZ2VcXHBhZ2VzXFxwcm92aWRlckRhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUt3QyxBQUd1RCxBQU12QixjQUFDLElBTGUsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmtcXERvY3VtZW50c1xcZ2l0aHViXFxteS1wYWdlXFxwYWdlc1xccHJvdmlkZXJEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCB7IEN1c3RvbUp1bWJvfSBmcm9tICcuL2N1c3RvbUNvbXBvbmVudHMnXHJcbmltcG9ydCBQcm92aWRlckxpc3QgZnJvbSAnLi9wcm92aWRlcl9kYXRhL3Byb3ZpZGVySW1wb3J0LmpzJ1xyXG5cclxuXHJcbnZhciBkYXRhID0gcmVxdWlyZSgnLi9wcm92aWRlcl9kYXRhL3Byb3ZpZGVyLmpzb24nKTtcclxuXHJcbmZ1bmN0aW9uIGVhdHNoaXQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLy8ge2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnUHJvdmlkZXInKS5sZW5ndGh9OiBcclxuLy8gZmlsdGVycyB0aGUganNvbiBiYXNlZCBvbiBpdGVtcyB3aXRoIHZhbHVlcyBhbmQgdG90YWxzIHVwIFxyXG4vL3RoZSBudW1iZXIgb2YgbGlzdGVkIGl0ZW1zIHdpdGggdGhhdCBkYXRhIHZhbHVlLiAgZXhhbXBsZSBhYm92ZTpcclxuLy9jb3VudCB0aGUgbnVtYmVyIG9mIGVudHJpZXMgd2l0aCB0aGUgZGF0YSBcIlR5cGVcIiBvZiAnUHJvdmlkZXInICBcclxuXHJcbi8vZnVuY3Rpb24gUHJvdmlkZXJpbmZvKCkge1xyXG5jbGFzcyBQcm92aWRlcmluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICBcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTJcIj48Yj48dT5Qcm92aWRlciBUb3RhbHM8L3U+PC9iPjwvaDQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBUcmFuc3BvcnRhdGlvbiBQcm92aWRlcnM6PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLmxlbmd0aH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Vm9sdW50ZWVyIERyaXZlcnM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNlbnRyYWwgUmVnaW9uIFByb3ZpZGVyczo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFuc3BvcnRhdGlvbiBDb21wYW5pZXM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0NlbnRyYWwnICkubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnVm9sdW50ZWVyIERyaXZlcicgJiYgZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Tb3V0aFdlc3QgUmVnaW9uOjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJhbnNwb3J0YXRpb24gQ29tcGFuaWVzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlR5cGUgPT09ICdQcm92aWRlcicgJiYgZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICkubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1ZvbHVudGVlciBEcml2ZXInICYmIGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FYXN0IFJlZ2lvbjo8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdFYXN0JykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UcmFuc3BvcnRhdGlvbiBDb21wYW5pZXM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuVHlwZSA9PT0gJ1Byb3ZpZGVyJyAmJiBkYXRhLlJlZ2lvbiA9PT0gJ0Vhc3QnICkubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Wb2x1bnRlZXIgRHJpdmVyczo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5UeXBlID09PSAnVm9sdW50ZWVyIERyaXZlcicgJiYgZGF0YS5SZWdpb24gPT09ICdFYXN0JykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGQ6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdEg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ2g6IGNlbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTJcIj48Yj48dT5MZXZlbCBvZiBTZXJ2aWNlIFRvdGFsczwvdT48L2I+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgc2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5BbGwgUmVnaW9uczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBBbWJ1bGF0b3J5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuU3RyZXRjaGVyID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPkNlbnRyYWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyAmJiBkYXRhLkFtYiA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggV2hlZWxjaGFpcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyAmJiBkYXRhLldDSFIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFN0cmV0Y2hlcjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdDZW50cmFsJyAmJiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5Tb3V0aFdlc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJvdmlkZXJzIHdpdGggQW1idWxhdG9yeTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZmlsdGVyKGRhdGEgPT4gZGF0YS5SZWdpb24gPT09ICdTb3V0aFdlc3QnICYmIGRhdGEuQW1iID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBXaGVlbGNoYWlyOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLlJlZ2lvbiA9PT0gJ1NvdXRoV2VzdCcgJiYgZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnU291dGhXZXN0JyAmJiBkYXRhLlN0cmV0Y2hlciA9PT0gJ1llcycpLmxlbmd0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIj5FYXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIEFtYnVsYXRvcnk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcgJiYgZGF0YS5BbWIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByb3ZpZGVycyB3aXRoIFdoZWVsY2hhaXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcgJiYgZGF0YS5XQ0hSID09PSAnWWVzJykubGVuZ3RofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qcm92aWRlcnMgd2l0aCBTdHJldGNoZXI6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEuUmVnaW9uID09PSAnRWFzdCcgJiYgZGF0YS5TdHJldGNoZXIgPT09ICdZZXMnKS5sZW5ndGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdEg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ2g6IGNlbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJEYXRhKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q3VzdG9tSnVtYm9cclxuICAgICAgICAgICAgICAgIFRpdGxlPVwiUHJvdmlkZXIgTGlzdFwiXHJcbiAgICAgICAgICAgICAgICBJbWdVcmw9XCJub2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIENhcHRpb24xU3R5bGU9J2xlYWQgdGV4dC1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICBDYXB0aW9uMT1cInRoaXMgaXMgZGF0YSBpbXBvcnRlZCBmcm9tIGEgbG9jYWwganNvbiBmaWxlLiBJdCB3aWxsIHJlY3JlYXRlIGEgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWRzaGVldCBJIGNyZWF0ZWQgYXQgb25lIG9mIG15IGpvYnMuXCJcclxuICAgICAgICAgICAgICAgIENhcHRpb24yU3R5bGU9J3RleHQtY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgQ2FwdGlvbjI9XCJJIHVzZWQgcmVhY3QtdGFibGUgZGVwZW5kZW5jeSB0byBidWlsZCB0aGUgZGF0YSB0YWJsZS4gQWx0ZXJpbmcgZm9ybWF0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRvIG1hdGNoIG15IHNwcmVhZHNoZWV0LlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LypQcm92aWRlcmluZm8gbGlzdGVkIGFib3ZlKi99XHJcbiAgICAgICAgICAgIDxQcm92aWRlcmluZm8gLz5cclxuICAgICAgICAgICAgey8qcHVsbGVkIGluIGZyb20gcHJvdmlkZXJpbXBvcnQuanMqL31cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTBcIiBjbGFzc05hbWU9XCJtYi0zXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm92aWRlckxpc3QgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlckRhdGE7Il19 */\n/*@ sourceURL=C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\providerData.js */")))));
    }
  }]);

  return Providerinfo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function ProviderData() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CustomJumbo"], {
    Title: "Provider List",
    ImgUrl: "noimage",
    Caption1Style: "lead text-center",
    Caption1: "this is data imported from a local json file. It will recreate a tracking\r spreadsheet I created at one of my jobs.",
    Caption2Style: "text-center",
    Caption2: "I used react-table dependency to build the data table. Altering formatting\r to match my spreadsheet.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Providerinfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: "10",
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_provider_data_providerImport_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }))));
}

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

/***/ "./pages/provider_data/providerImport.js":
/*!***********************************************!*\
  !*** ./pages/provider_data/providerImport.js ***!
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





var _jsxFileName = "C:\\Users\\Mark\\Documents\\github\\my-page\\pages\\provider_data\\providerImport.js";




var data = __webpack_require__(/*! ./provider.json */ "./pages/provider_data/provider.json");
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
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Show All"), data.map(function (item) {
    return item[fieldName];
  }).filter(function (item, i, s) {
    return s.lastIndexOf(item) == i;
  }).map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: value,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
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
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProviderList, [{
    key: "render",
    value: function render() {
      return data ? this.renderData(data) : this.renderLoading();
    }
  }, {
    key: "renderData",
    value: function renderData(data) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "Provider-table -striped -highlight center",
        data: data,
        defaultPageSize: 20,
        style: {
          height: "800px" // This will force the table body to overflow and scroll, since there is not enough room

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
          lineNumber: 64
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
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "records-info h3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
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
          lineNumber: 219
        },
        __self: this
      }, "Loading...");
    }
  }]);

  return ProviderList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProviderList);

/***/ }),

/***/ 7:
/*!*************************************!*\
  !*** multi ./pages/providerData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mark\Documents\github\my-page\pages\providerData.js */"./pages/providerData.js");


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

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=providerData.js.map
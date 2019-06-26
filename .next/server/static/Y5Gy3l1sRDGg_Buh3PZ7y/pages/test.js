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

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FCuQ");


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BY9Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Test =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Test, _React$Component);

  function Test() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Test);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Test).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Test, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "This is imported from a separate page!!"));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BuDq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_transitionstyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rYp5");
/* harmony import */ var _components_transitionstyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_transitionstyle_css__WEBPACK_IMPORTED_MODULE_8__);










var Testapp5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Testapp5, _Component);

  function Testapp5() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Testapp5);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Testapp5)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      showList: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "switch", function () {
      _this.setState(function (prevState) {
        return {
          showList: !prevState.showList
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Testapp5, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "display",
        onClick: this.switch
      }, "List"), this.state.showList && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-item"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "http://www.google.com",
        target: "_blank",
        onClick: this.switch
      }, "Google")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-item"
      }, "Cut hair"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-item"
      }, "Do the dishes"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-item"
      }, "Buy grossries"))));
    }
  }]);

  return Testapp5;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Testapp5);

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// CONCATENATED MODULE: ./components/Header.js








var Header_Headerdropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Headerdropdown, _React$Component);

  function Headerdropdown(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Headerdropdown);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Headerdropdown).call(this, props));
    _this.state = {
      showList: false
    };
    _this.showList = _this.showList.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Headerdropdown, [{
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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        className: "center pointer Dropdown",
        onMouseOver: "this.className='Dropdown_hover'",
        onClick: this.showList
      }, external_react_default.a.createElement("u", null, "Projects")), this.state.showList && external_react_default.a.createElement("div", {
        className: "DropdownMenu",
        onMouseLeave: this.showList
      }, external_react_default.a.createElement("ul", {
        className: "Dropdown-list"
      }, external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement("a", {
        href: "/tvpage"
      }, "Tv import")), external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement("a", {
        href: "/DandD_page"
      }, "DandD")), external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement("a", {
        href: "/test"
      }, "test")))));
    }
  }]);

  return Headerdropdown;
}(external_react_default.a.Component);

var Header_NavBar =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(NavBar, _React$Component2);

  function NavBar(props) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, NavBar);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavBar).call(this, props));
    _this2.state = {
      showList: false
    };
    _this2.showList = _this2.showList.bind(Object(assertThisInitialized["a" /* default */])(_this2));
    return _this2;
  }

  Object(createClass["a" /* default */])(NavBar, [{
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
      return external_react_default.a.createElement("div", {
        className: "Header-container"
      }, external_react_default.a.createElement("div", {
        className: "Navbar center"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        href: "/"
      }, "Home")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        href: "/about"
      }, "About")), external_react_default.a.createElement("div", null, external_react_default.a.createElement(Header_Headerdropdown, null))), external_react_default.a.createElement("div", {
        className: "google"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "/static/images/google.png",
        alt: "google",
        height: "20"
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("form", {
        action: "http://google.com/search",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("input", {
        name: "q"
      }), external_react_default.a.createElement("input", {
        type: "submit"
      })))));
    }
  }]);

  return NavBar;
}(external_react_default.a.Component);

/* harmony default export */ var Header = (Header_NavBar);
// CONCATENATED MODULE: ./components/Footer.js







var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Footer, _React$Component);

  function Footer() {
    Object(classCallCheck["a" /* default */])(this, Footer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Footer).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "Footer-container"
      }, external_react_default.a.createElement("div", {
        className: "Footer-nav center"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        href: "https://www.linkedin.com/in/mark-fioca/"
      }, "Linkedln")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        href: "https://www.deviantart.com/franknmullet"
      }, "Deviantart"))), external_react_default.a.createElement("div", {
        className: "email"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        href: "mailto: mark@fioca.com"
      }, external_react_default.a.createElement("a", null, "Send Email")))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./components/style.css
var style = __webpack_require__("ETxl");

// CONCATENATED MODULE: ./components/layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });




function Layout(props) {
  return external_react_default.a.createElement("div", {
    className: "Layout"
  }, external_react_default.a.createElement("div", {
    className: "Header"
  }, external_react_default.a.createElement(Header, null)), external_react_default.a.createElement("div", {
    className: "Body FlexDirection_column"
  }, external_react_default.a.createElement("body", null, props.children)), external_react_default.a.createElement("div", {
    className: "Footer"
  }, external_react_default.a.createElement(components_Footer, null)));
}

/***/ }),

/***/ "ETxl":
/***/ (function(module, exports) {



/***/ }),

/***/ "FCuQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("CafY");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("BY9Y");
/* harmony import */ var _transition_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("BuDq");
/* harmony import */ var _DandD_hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("PPZE");












var numbers = [1, 2, 3, 4, 5, 6];

function ListItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, props.value);
}

function NumberList(props) {
  var numbers = props.numbers;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", null, numbers.map(function (number) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ListItem, {
      key: number.toString(),
      value: number
    });
  }));
}

var Testpage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Testpage, _Component);

  function Testpage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Testpage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Testpage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      boxactive: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "switch", function () {
      _this.setState(function (prevState) {
        return {
          boxactive: !prevState.boxactive
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Testpage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "This page is for current dev projects"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "Test"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NumberList, {
        numbers: numbers
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box",
        onClick: this.switch
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://www.google.com/images/srpr/logo11w.png",
        width: "100"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Testapp5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_transition_item__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
    }
  }]);

  return Testpage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Testpage);

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "PPZE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newHero", function() { return newHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hero_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("pDHh");
/* harmony import */ var _attacksim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jvuh");














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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Hero).call(this, props));
    _this.setherostats = _this.setherostats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Hero, [{
    key: "setherostats",
    value: function setherostats() {
      //random number between 1-20 to set stats
      newHero.Str = Math.floor(Math.random() * 20 + 1);
      newHero.Const = Math.floor(Math.random() * 20 + 1);
      newHero.Dext = Math.floor(Math.random() * 20 + 1); //calls functions in hero_functions to adjust stats in
      //heroadjstats variable in the attacksim.js

      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHp = newHero.BaseHitPoints + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_7__["SetConstAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroAc = newHero.BaseArmorClass + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_7__["setacAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroDmg = newHero.BaseDamage + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_7__["setDmgAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHitAdj = newHero.BaseHitAdj + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_7__["setHitAdj"])();
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Name: "), "Insert random Name Here")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", newHero.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", newHero.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", newHero.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", _attacksim__WEBPACK_IMPORTED_MODULE_8__["HeroadjStats"].HeroDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setherostats
      }, "Set Attrubutes")));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jvuh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsteradjStats", function() { return MonsteradjStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroadjStats", function() { return HeroadjStats; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);









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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AttackSim, _React$Component);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AttackSim).call(this, props));
    _this.heroinitiative = 0;
    _this.monsterinitiative = 0;
    _this.heroattack = _this.heroattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.Monsterattack = _this.Monsterattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.refresh = _this.refresh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }
  /*hero attack roll, radomly generates number between 1 to 20.  Then
  calls the hero attack roll function to determine successful attack.*/


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AttackSim, [{
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "DandD_attack"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3"
      }, HeroadjStats.HeroAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3"
      }, HeroadjStats.HeroHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattack
      }, "Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center"
      }, Herodidhit))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "StatRefresh DandD_button"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.refresh
      }, "Refresh stats")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Initiative DandD_button"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.rollforiniative
      }, "Roll for iniative")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Heroinitiative center Fsize-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Hero ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3"
      }, this.heroinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monsterinitiative center Fsize-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Monster initiative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3"
      }, this.monsterinitiative))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroHP-icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/herohp.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HeroHP-text Fsize-3 center"
      }, HeroadjStats.HeroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterHP-icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/monsterhp.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "MonsterHP-text Fsize-3 center"
      }, MonsteradjStats.MonsterHp)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3"
      }, MonsteradjStats.MonsterAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3"
      }, MonsteradjStats.MonsterHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.Monsterattack
      }, "Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center"
      }, Monsterdidhit)))));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AttackSim);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pDHh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConstAdj", function() { return SetConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHitAdj", function() { return setHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDmgAdj", function() { return setDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setacAdj", function() { return setacAdj; });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PPZE");
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

/***/ "rYp5":
/***/ (function(module, exports) {



/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });
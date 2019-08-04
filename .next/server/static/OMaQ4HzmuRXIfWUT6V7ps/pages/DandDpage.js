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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("AOlV");


/***/ }),

/***/ "AOlV":
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
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CafY");
/* harmony import */ var _DandD_attacksim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jvuh");









var DandD =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DandD, _Component);

  function DandD() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, DandD);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DandD).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DandD, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Dungeons and Dragons attack simulation"), "Calculations are based on SE 2 rules from late 80's and early 90's."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Instructions:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Press the \"Set Attributes\" buttons for both Hero and Monster."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Press the \"Roll for Initiative\" button to see who attacks first."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "Follow the instructions and press the \"Roll for Attack\" buttons."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, "After each round, repeat by rolling for Initiative and continue attacking until a character dies."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Attack-container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DandD_attacksim__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
    }
  }]);

  return DandD;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DandD);

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

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

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







var activeprofile = '';

function NavLink(props) {
  return external_react_default.a.createElement("div", {
    className: "Navbar center"
  }, external_react_default.a.createElement("a", {
    href: "".concat(props.id),
    title: props.title
  }, props.title));
}

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
      return external_react_default.a.createElement("div", {
        className: "Navbar"
      }, external_react_default.a.createElement("a", {
        className: "Dropdown pointer",
        onClick: this.showList
      }, external_react_default.a.createElement("u", null, "Projects")), this.state.showList && external_react_default.a.createElement("div", {
        className: "DropdownMenu",
        onMouseLeave: this.showList
      }, external_react_default.a.createElement("ul", {
        className: "Dropdown-list"
      }, external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement(NavLink, {
        id: "/tvpage",
        title: "TvMaze"
      })), external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement(NavLink, {
        id: "/DandDpage",
        title: "D and D"
      })), external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement(NavLink, {
        id: "/ProviderData",
        title: "Provider List"
      })), activeprofile === 'Guest' && external_react_default.a.createElement("li", {
        className: "Dropdown-list_item"
      }, external_react_default.a.createElement(NavLink, {
        id: "/test",
        title: "Test"
      })))));
    }
  }]);

  return Headerdropdown;
}(external_react_default.a.Component);

var Header_Header =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(Header, _React$Component2);

  function Header() {
    Object(classCallCheck["a" /* default */])(this, Header);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "Header"
      }, external_react_default.a.createElement(NavLink, {
        id: "/",
        title: "Home"
      }), external_react_default.a.createElement(NavLink, {
        id: "/about",
        title: "About"
      }), external_react_default.a.createElement(Header_Headerdropdown, null), external_react_default.a.createElement("div", {
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
        type: "submit",
        value: "Google Search"
      })))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.js







function FooterLink(props) {
  return external_react_default.a.createElement("div", {
    className: "Footer-nav center"
  }, external_react_default.a.createElement("a", {
    href: "".concat(props.id),
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.title
  }, props.title));
}

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
        className: "Footer"
      }, external_react_default.a.createElement(FooterLink, {
        id: "https://www.linkedin.com/in/mark-fioca/",
        title: "LinkedIn"
      }), external_react_default.a.createElement(FooterLink, {
        id: "https://www.deviantart.com/franknmullet",
        title: "Deviantart"
      }), external_react_default.a.createElement(FooterLink, {
        id: "https://github.com/mfioca/my-page",
        title: "Git-Hub"
      }), external_react_default.a.createElement("div", {
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
  }, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("div", {
    className: "Body"
  }, props.children), external_react_default.a.createElement(components_Footer, null));
}

/***/ }),

/***/ "ETxl":
/***/ (function(module, exports) {



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

/***/ "W1xQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterConstAdj", function() { return SetmonsterConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsteracAdj", function() { return SetmonsteracAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterDmgAdj", function() { return SetmonsterDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterHitAdj", function() { return SetmonsterHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setmonsterstats", function() { return setmonsterstats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monsterattackroll", function() { return monsterattackroll; });
//sets monster hit point adjustment based on constitution stat number.
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
; //sets monster armor class adjustment based on dexterity stat number.

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
} //sets monster damage based on strength stat number.

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
} //sets monster hit adjustment based on strength stat number.

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
} //sets stats including base role 1-20 than applies above functions.

function setmonsterstats() {
  //performs a 1-20 roll for every item in the "monsterstats" object/state
  for (var key in this.state.monsterstats) {
    this.state.monsterstats[key] = Math.floor(Math.random() * 20 + 1);
  }

  ;
  this.setState({
    //sets adjusted items based on monsterstats numbers in the set..adj functions
    monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
    monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
    monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
    monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj()
  });
}
/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */

function monsterattackroll() {
  //1-20 for attack roll to see if monster hits
  this.setState({
    monsterroll: Math.floor(Math.random() * 20 + 1)
  });

  if (this.state.monsterroll >= this.state.heroAc + this.state.monsterHitAdj) {
    //if monster hit, set display to show "hit"
    this.setState({
      monsterdidhit: 'Hit'
    }); //performs check to see if the hero hp after monster damange is 0 or lower

    if (this.state.heroHp - this.state.monsterDmg <= 0) {
      this.setState({
        heroHp: 'Dead'
      }); // if yes, hero is dead
    } else {
      //if no, sets the herohp state to reflect new damage
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

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XEZY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroConstAdj", function() { return SetheroConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroacAdj", function() { return SetheroacAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroDmgAdj", function() { return SetheroDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroHitAdj", function() { return SetheroHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setherostats", function() { return setherostats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroattackroll", function() { return heroattackroll; });
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
; //sets hero Armorclass based on constitution stat number.

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
} //sets hero damage based on constitution stat number.

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
} //sets hero hit adjustment based on constitution stat number.

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
} //sets stats including base role 1-20 than applies above functions.

function setherostats() {
  //performs a 1-20 roll for every item in the "herostats" object/state
  for (var key in this.state.herostats) {
    this.state.herostats[key] = Math.floor(Math.random() * 20 + 1);
  }

  ;
  this.setState({
    //sets adjusted items based on herostats numbers in the set..adj functions
    heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
    heroAc: this.state.herobase.ArmorClass + this.SetheroacAdj(),
    heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
    heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj()
  });
}
/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
  //1-20 for attack roll to see if hero hits
  this.setState({
    heroroll: Math.floor(Math.random() * 20 + 1)
  }); //if hero hit, set display to show "hit"

  if (this.state.heroroll >= this.state.monsterAc + this.state.heroHitAdj) {
    this.setState({
      herodidhit: 'Hit'
    }); //performs check to see if the monster hp after hero damange is 0 or lower

    if (this.state.monsterHp - this.state.heroDmg <= 0) {
      this.setState({
        monsterHp: 'Dead'
      }); // if yes, monster is dead
    } else {
      //if no, sets the monsterohp state to reflect new damage
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _herofunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XEZY");
/* harmony import */ var _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("W1xQ");










var AttackSim =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AttackSim, _React$Component);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AttackSim).call(this, props));
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
    }; //Hero bind function statements

    _this.setherostats = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["setherostats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroConstAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroacAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroacAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroDmgAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroHitAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.heroattackroll = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["heroattackroll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this)); //monster bind function statements

    _this.setmonsterstats = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["setmonsterstats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsterConstAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsteracAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsteracAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsterDmgAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsterHitAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.monsterattackroll = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["monsterattackroll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AttackSim, [{
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
      this.Monsterinitiative = Math.floor(Math.random() * 10 + 1); //if hero 1-10 role is lower, hero goes first.

      if (this.Heroinitiative < this.Monsterinitiative) {
        this.setState({
          heroinitiative: 'First',
          monsterinitiative: 'Second'
        }); //if monster 1-10 role is lower, monster goes first
      } else if (this.Heroinitiative > this.Monsterinitiative) {
        this.setState({
          monsterinitiative: 'First',
          heroinitiative: 'Second'
        });
      } else {
        //if both have same result, roll again
        this.setState({
          heroinitiative: 'ReRoll',
          monsterinitiative: 'ReRoll'
        });
      }

      ; //clears out the hit/miss comments since it is a new round.

      this.setState({
        herodidhit: '',
        monsterdidhit: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "DandD_character Fsize-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Hero"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroBox"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Name: "), this.state.heroName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.herostats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.herostats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.herostats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.heroDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Hero Float-right",
        src: "../static/images/hero.png",
        alt: "hero"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setherostats
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.heroNameChange
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monster"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterBox"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Name: "), this.state.monsterName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.monsterstats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.monsterstats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.monsterstats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.monsterHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, " ", this.state.monsterDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Monster Float-right",
        src: "../static/images/monster.png",
        alt: "monster"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setmonsterstats
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", null, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.monsterNameChange
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3"
      }, this.state.heroAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3"
      }, this.state.heroHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattackroll
      }, "Hero Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center"
      }, this.state.herodidhit)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Initiative DandD_button"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.rollforiniative
      }, "Roll for iniative")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Heroinitiative center Fsize-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Hero ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3"
      }, this.state.heroinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monsterinitiative center Fsize-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Monster initiative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3"
      }, this.state.monsterinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroHP-icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/herohp.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HeroHP-text Fsize-3 center"
      }, this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterHP-icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/monsterhp.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "MonsterHP-text Fsize-3 center"
      }, this.state.monsterHp))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3"
      }, this.state.monsterAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3"
      }, this.state.monsterHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.monsterattackroll
      }, "Monster Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center"
      }, this.state.monsterdidhit)));
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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });
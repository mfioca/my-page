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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


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

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9kyW":
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

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/Header.js









var Header_Header =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Header);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).call(this, props));
    _this.toggle = _this.toggle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        color: "dark",
        className: "h4",
        dark: true,
        expand: "md"
      }, external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: this.toggle
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto",
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "/"
      }, "Home")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "/about"
      }, "About")), external_react_default.a.createElement(external_reactstrap_["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true
      }, external_react_default.a.createElement(external_reactstrap_["DropdownToggle"], {
        nav: true,
        caret: true
      }, "Projects"), external_react_default.a.createElement(external_reactstrap_["DropdownMenu"], {
        right: true,
        className: "bg-dark"
      }, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn-dark w-100",
        href: "/tvpage"
      }, "TvMaze"), external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn-dark w-100",
        href: "/DandDpage"
      }, "DandD"), external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn-dark w-100",
        href: "/providerData"
      }, "Provider List"))))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// CONCATENATED MODULE: ./components/Footer.js










var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Footer, _React$Component);

  function Footer(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Footer);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Footer).call(this, props));
    _this.toggle = _this.toggle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Footer, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        color: "dark",
        dark: true,
        expand: "md"
      }, external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: this.toggle
      }), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        navbar: true,
        className: "h4"
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "https://www.linkedin.com/in/mark-fioca/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "LinkedIn")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "DeviantArt")), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "https://github.com/mfioca/my-page",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "GitHub"))), external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto h4",
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
        href: "mailto: mark@fioca.com"
      }, "Email")))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });




var Bodystyle = {
  minHeight: '100vh',
  maxWidth: '98%',
  marginRight: 'auto',
  marginLeft: 'auto'
};
function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("div", {
    style: Bodystyle
  }, props.children), external_react_default.a.createElement(components_Footer, null));
}

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CafY");
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TYO+");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);





function Aboutpage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["AboutMedia"], {
    Class: "text-center bg-info text-white p-3",
    Align: "Right",
    ImgUrl: "../static/images/avatar.jpg",
    Title: "About",
    Description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Movie, sci-fi and over all tech geek that always seeks out new and interesting things to experience and learn.  I strive to keep an open mind on everything because you never know what kind of hidden truths await those who pay attention. You can find those truths in the comedy writings of Douglas Adams to J. R. R. Tolkien and all the way to the historical facts behind the theories expressed in the TV show \u201CAncient Aliens\u201D.")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["AboutMedia"], {
    Class: "text-center bg-info text-white p-3",
    Align: "Left",
    ImgUrl: "../static/images/building.png",
    Title: "Background",
    Description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I have lived in Pennsylvania, Alaska and Georgia.  While in Alaska, I expanded my experiences when I joined the local Paranormal Investigation group I.O.P.I.A.  I have investigated different places and have seen things that are unforgetable.  Those experiences helped me expand my knowledge in movie, photo and audio editing and new knowledge and points of views about the world.")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["AboutMedia"], {
    Class: "text-center bg-info text-white p-3",
    Align: "Right",
    ImgUrl: "../static/images/rainmeter.png",
    Title: "Computers and UI design",
    Description: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I first developed my interested in UI design when convirting back to a windows machine from a mac. I did not like how windows was set up and strived to make my desktop look and act more like OSX. I learned about a program called Rainmeter and expanded my knowledge in programing developing my first full custom UI theme through this program.  My Rainmeter theme is available", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["NewTabLink"], {
      Link: "https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185",
      Style: "text-body"
    }, " here "), " to download through deviantart.")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["CustomJumbo"], {
    Title: "Professional Experience",
    ImgUrl: "noimage",
    Caption1Style: "lead text-center",
    Caption2Style: "text-center",
    Caption1: "Dedicated and motivated professional looking to apply my accumulated experience in \r technical writing and training in mixed customer relations roles and into an IT based career. \r Expertise in customer service, communication, analytical thinking and problem solving to achieve goals.",
    Caption2: "COMPUTER SKILLS: Windows and OSX, Microsoft Office with advanced excel functions and\r macro scripting, Lotus Notes, Maximo Enterprise Suite, Audacity, Photoshop, \r Gimp, Eclipse, Notepad++, Visual Studio Code, working knowledge of HTML, CSS and SQL,\r beginner knowledge in REACT and Java/JavaScript."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "Core Skills"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap m-1 justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "5",
    className: "m-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "React, JavaScript, Bootstrap 4, SQL, CSS, HTML, XML"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "warning",
    value: 25
  }, "Novice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "NPM, NodeJS, Rest API, JSON"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "warning",
    value: 25
  }, "Novice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "Data Analysis, Quality Assurance and Reporting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "info",
    value: 50
  }, "Intermediate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "Training and Documentation/Technical Writing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "info",
    value: 50
  }, "Intermediate")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "5",
    className: "m-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "Customer Service and Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "success",
    value: 75
  }, "Advanced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "Problem Solving and troubleshooting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "success",
    value: 75
  }, "Advanced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "MS Word and Excel(macro scripting and functions)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "success",
    value: 75
  }, "Advanced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "Multitasking, Time Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], {
    animated: true,
    color: "success",
    value: 75
  }, "Advanced"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnCard"], {
    Class: "text-center bg-info text-white p-3",
    Title: "SOFTWARE IMPLEMENTATION AND SUPPORT",
    Description1: "Coordinated with network administrators and field monitors on supporting an Ipad\r based vehicle inspection application from beta testing to full network implementation.\r During Beta testing, tested application for real world bugs and errors and coordinated \r with end users during real world testing.  Conducted training and technical support to \r end users as well as improvement testing and troubleshooting on bugs and fixes as \r assigned by developers.",
    Description2: "Worked as a team to develop a 7 module training course for a new Asset Management \r Solution for BP Oil. Developed training material through MS Word and coordinated with developers \r and company SME\u2019s to develop standard procedures and ensure documentation accuracy.",
    Description3: "Provided first contact technical support for a new online enrollment process \r including password resets as well as troubleshooting and training to team members and providers.  \r During implantation, I conducted informal quality assurance testing including working through the \r designed process for current process accuracy as well as intentional ways to cause errors."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnCard"], {
    Class: "text-center bg-light text-dark p-3",
    Title: "TECHNICAL WRITING",
    Description1: "Created online training modules for a new Operating System for a local cable and \r internet company.  Converted MS word documentation to an online web based format utilizing HTML \r and RELAX NG Schema formatting.  Worked with developers and trainers to ensure accuracy and \r documentation matched established web formatting adjusting the training material as necessary.",
    Description2: "Worked as a team to develop a 7 module training course for a new Asset Management \r Solution for BP Oil. Developed training material through MS Word and coordinated with developers \r and company SME\u2019s to develop standard procedures and ensure documentation accuracy.",
    Description3: "Created Policies and Procedures for a specialized department as a supervisor in a high \r call volume call center environment.  This included a formal talk track for all types of incoming \r calls as well as rules and guidelines for each call type to produce the highest level of customer \r service possible."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnCard"], {
    Class: "text-center bg-primary text-white p-3",
    Title: "CUSTOMER RELATIONS",
    Description1: "Managed a network of over 300 transportation providers and insured contract \r compliance of over 3000 driver, vehicle and insurance files.  Established the Georgia market \r as one of the top markets for contract compliance by working with providers, other departments and \r management to increase provider relationships and performance.",
    Description2: "Conducted performance monitoring of contractual compliance and networking trends by \r utilizing my advanced Excel skills by creating custom data spreadsheets with advanced functions \r and custom macro scripting.  These reports assisted in increasing network routing efficiency and \r increased compliance performance by showing trends and weaknesses in the provider network.",
    Description3: "Responsible for Contract Administration of new providers enrolling in the Alaska Medicaid \r Network while achieving production goals and providing the highest level of customer service.  Interfaced \r with Medicaid Providers on contract questions and worked with them to complete submitted contracts.  \r Utilized Microsoft Access and Excel to track Contracts in all phases of the application process and \r ensure data accuracy."
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Aboutpage);

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Ldei":
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
var Pointer = {
  cursor: 'pointer'
};
var TabStyle = {
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
  marginBottom: '20px'
};
var HomeCardStyle = {
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
var ImageStyles = {
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
var TvpageStyle = {
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
var DandDStyle = {
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
var Tplist = {
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

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

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

/***/ "TYO+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./pages/jsxstyles.js
var jsxstyles = __webpack_require__("Ldei");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./pages/customComponents.js
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return customComponents_HomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomJumbo", function() { return customComponents_CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMedia", function() { return customComponents_AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return customComponents_ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return customComponents_CharacterSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackSection", function() { return customComponents_AttackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackStatusDisplay", function() { return customComponents_AttackStatusDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameForm", function() { return customComponents_NameForm; });









/* **************** 
*   Imports       * 
******************/





/* *********************************
*   Export styled components       * 
***********************************/

function NewTabLink(props) {
  return external_react_default.a.createElement("a", {
    className: props.Style,
    href: props.Link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.Title
  }, props.children);
} //used in home page, attacksim

function CenterFlexWrapDiv(props) {
  return external_react_default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-center"
  }, props.children);
} //used in tvpost, tvpage

function LeftFlexWrapDiv(props) {
  return external_react_default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-left"
  }, props.children);
}
function TvMazeHeader() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
    href: "/tvpage"
  }, external_react_default.a.createElement("a", {
    style: jsxstyles["TvpageStyle"].Link
  }, "Search Page")));
}
function TvMazePage(props) {
  return external_react_default.a.createElement("div", {
    style: jsxstyles["TvpageStyle"].Layout
  }, external_react_default.a.createElement(TvMazeHeader, null), props.children);
}
function TvPostInfoLabel(props) {
  return external_react_default.a.createElement("td", {
    className: "h2 text-left w-25 m-0 p-2"
  }, props.children);
}
function TvPostInfoValue(props) {
  return external_react_default.a.createElement("td", {
    className: "text-left m-0 p-2"
  }, external_react_default.a.createElement("small", null, props.children));
} //used in provider compliance

function TplistHeaderRow(props) {
  return external_react_default.a.createElement(external_reactstrap_["Row"], {
    className: "p-0 bg-secondary text-white rounded-lg"
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
  return external_react_default.a.createElement("span", null, Data.filter(function (Data) {
    return Data[Fone] === Vone && Data[Ftwo] === Vtwo;
  }).length);
} //used in providerstats

function ComplDataFilter(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  return external_react_default.a.createElement("span", null, Data.filter(function (Data) {
    return Data[Fone][Fonekey] < Vone;
  }).length);
} //used in providerstats

function PercentCalc(props) {
  var Data = props.Info;
  var Fone = props.Filter1;
  var Fonekey = props.Filter1child;
  var Vone = props.Value1;
  var Divider = props.Divider;
  return external_react_default.a.createElement("span", null, Math.floor(Data.filter(function (Data) {
    return Data[Fone][Fonekey] < Vone;
  }).length / Divider * 100) + '%');
} //used in providerCompliance

function DateCheck(props) {
  var date = props.Date;

  if (date < "2019-09-22") {
    return external_react_default.a.createElement("span", {
      className: "bg-danger text-white"
    }, date);
  } else if (date < "2019-10-22" && date > "2019-09-22") {
    return external_react_default.a.createElement("span", {
      className: "bg-warning text-white"
    }, date);
  } else {
    return external_react_default.a.createElement("span", null, date);
  }
} //used in TvPage and TVPost

function TvMazeCard(props) {
  return external_react_default.a.createElement(external_reactstrap_["Card"], {
    style: props.CardStyle,
    className: props.CardClassName
  }, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
    className: "m-4 text-center",
    style: jsxstyles["TvpageStyle"].Title
  }, props.Title), external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement(external_reactstrap_["CardImg"], {
    className: props.ImgClass,
    style: jsxstyles["TvpageStyle"].Image,
    src: props.ImgSrc,
    alt: props.ImgAlt
  }), external_react_default.a.createElement(external_reactstrap_["CardSubtitle"], {
    className: "text-center my-2"
  }, external_react_default.a.createElement("h4", {
    style: jsxstyles["TvpageStyle"].Cast
  }, props.SubTitle))), props.Link);
} //used in ProviderCompliance, providerData and TVpost

function CustomTabs(props) {
  var _useState = Object(external_react_["useState"])('1'),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Nav"], {
    tabs: true
  }, external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    className: external_classnames_default()({
      active: activeTab === '1'
    }),
    onClick: function onClick() {
      toggle('1');
    },
    style: jsxstyles["Pointer"]
  }, props.Tab1Name)), external_react_default.a.createElement(external_reactstrap_["NavItem"], null, external_react_default.a.createElement(external_reactstrap_["NavLink"], {
    className: external_classnames_default()({
      active: activeTab === '2'
    }),
    onClick: function onClick() {
      toggle('2');
    },
    style: jsxstyles["Pointer"]
  }, props.Tab2Name))), external_react_default.a.createElement(external_reactstrap_["TabContent"], {
    activeTab: activeTab
  }, external_react_default.a.createElement(external_reactstrap_["TabPane"], {
    tabId: "1",
    style: jsxstyles["TabStyle"]
  }, props.Tab1Content), external_react_default.a.createElement(external_reactstrap_["TabPane"], {
    tabId: "2",
    style: jsxstyles["TabStyle"]
  }, props.Tab2Content)));
}
/* *********************** 
*   Export Classes       * 
**************************/
//used in home page

var customComponents_HomeCard =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(HomeCard, _React$Component);

  function HomeCard() {
    Object(classCallCheck["a" /* default */])(this, HomeCard);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(HomeCard).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(HomeCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Card"], {
        style: jsxstyles["HomeCardStyle"].Card
      }, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
        style: jsxstyles["HomeCardStyle"].Title
      }, this.props.Title), external_react_default.a.createElement(external_reactstrap_["CardImg"], {
        top: true,
        style: jsxstyles["ImageStyles"].HomeCard,
        src: this.props.Image,
        alt: "Card image cap"
      }), external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement(external_reactstrap_["CardSubtitle"], null, this.props.Subtitle), external_react_default.a.createElement(external_reactstrap_["CardText"], {
        style: {
          height: '80px'
        }
      }, this.props.Description), external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "w-100 p-0 m-0"
      }, external_react_default.a.createElement(NewTabLink, {
        Style: "btn btn-dark w-100 p-2",
        Link: this.props.Link
      }, this.props.ButtonTitle)))));
    }
  }]);

  return HomeCard;
}(external_react_default.a.Component); //used in Resumeview, about page and providerdata

var customComponents_CustomJumbo =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["a" /* default */])(CustomJumbo, _React$Component2);

  function CustomJumbo() {
    Object(classCallCheck["a" /* default */])(this, CustomJumbo);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CustomJumbo).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CustomJumbo, [{
    key: "render",
    value: function render() {
      if (this.props.ImgUrl === "noimage") {
        return external_react_default.a.createElement(external_reactstrap_["Jumbotron"], null, external_react_default.a.createElement("h1", {
          className: "display-3 text-center"
        }, this.props.Title), external_react_default.a.createElement("p", {
          className: this.props.Caption1Style
        }, this.props.Caption1), external_react_default.a.createElement("hr", {
          className: "my-2"
        }), external_react_default.a.createElement("p", {
          className: this.props.Caption2Style
        }, this.props.Caption2));
      } else {
        return external_react_default.a.createElement(external_reactstrap_["Jumbotron"], null, external_react_default.a.createElement("h1", {
          className: "display-3 text-center"
        }, this.props.Title), external_react_default.a.createElement("div", {
          className: "container-fluid text-center"
        }, external_react_default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: jsxstyles["ImageStyles"].HomeAvatar,
          alt: "avatar"
        })), external_react_default.a.createElement("p", {
          className: this.props.Caption1Style
        }, this.props.Caption1), external_react_default.a.createElement("hr", {
          className: "my-2"
        }), external_react_default.a.createElement("p", {
          className: this.props.Caption2Style
        }, this.props.Caption2, external_react_default.a.createElement("br", null), this.props.Caption3));
      }
    }
  }]);

  return CustomJumbo;
}(external_react_default.a.Component); //used in about page

var customComponents_AboutMedia =
/*#__PURE__*/
function (_React$Component3) {
  Object(inherits["a" /* default */])(AboutMedia, _React$Component3);

  function AboutMedia() {
    Object(classCallCheck["a" /* default */])(this, AboutMedia);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AboutMedia).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AboutMedia, [{
    key: "render",
    value: function render() {
      if (this.props.Align === "Right") {
        return external_react_default.a.createElement("div", {
          className: "py-2"
        }, external_react_default.a.createElement(external_reactstrap_["Card"], {
          className: this.props.Class
        }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardImg"], {
          style: jsxstyles["ImageStyles"].About,
          src: this.props.ImgUrl,
          alt: "Card image cap"
        })), external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
          className: "mt-5"
        }, external_react_default.a.createElement("h1", null, this.props.Title)), external_react_default.a.createElement(external_reactstrap_["CardBody"], null, this.props.Description)))));
      }

      if (this.props.Align === "Left") {
        return external_react_default.a.createElement("div", {
          className: "py-2"
        }, external_react_default.a.createElement(external_reactstrap_["Card"], {
          className: this.props.Class
        }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardTitle"], {
          className: "mt-5"
        }, external_react_default.a.createElement("h1", null, this.props.Title)), external_react_default.a.createElement(external_reactstrap_["CardBody"], null, this.props.Description)), external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardImg"], {
          style: jsxstyles["ImageStyles"].About,
          src: this.props.ImgUrl,
          alt: "Card image cap"
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(external_react_default.a.Component); //used in resume for experience section

var customComponents_ThreeColumnCard =
/*#__PURE__*/
function (_React$Component4) {
  Object(inherits["a" /* default */])(ThreeColumnCard, _React$Component4);

  function ThreeColumnCard() {
    Object(classCallCheck["a" /* default */])(this, ThreeColumnCard);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ThreeColumnCard).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ThreeColumnCard, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "py-3"
      }, external_react_default.a.createElement(external_reactstrap_["Card"], {
        className: this.props.Class
      }, external_react_default.a.createElement(external_reactstrap_["CardTitle"], null, external_react_default.a.createElement("h1", null, this.props.Title)), external_react_default.a.createElement(external_reactstrap_["Row"], {
        className: "text-left"
      }, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("li", null, this.props.Description1)))), external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("li", null, this.props.Description2)))), external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(external_reactstrap_["CardBody"], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("li", null, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(external_react_default.a.Component); //D and D application

var customComponents_CharacterSheet =
/*#__PURE__*/
function (_React$Component5) {
  Object(inherits["a" /* default */])(CharacterSheet, _React$Component5);

  function CharacterSheet() {
    Object(classCallCheck["a" /* default */])(this, CharacterSheet);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CharacterSheet).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CharacterSheet, [{
    key: "render",
    value: function render() {
      function DandDTableLabel(props) {
        return external_react_default.a.createElement("td", {
          className: "text-muted text-left h4"
        }, props.children);
      }

      function DandDTableValue(props) {
        return external_react_default.a.createElement("td", {
          className: "text-white text-left h4"
        }, props.children);
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: {
          size: 'auto',
          offset: 0
        }
      }, external_react_default.a.createElement(external_reactstrap_["Table"], {
        borderless: true,
        className: ""
      }, external_react_default.a.createElement("tbody", null, external_react_default.a.createElement("tr", null, external_react_default.a.createElement(DandDTableLabel, null, "Strength:"), external_react_default.a.createElement(DandDTableValue, null, this.props.Strength)), external_react_default.a.createElement("tr", null, external_react_default.a.createElement(DandDTableLabel, null, "Constitution:"), external_react_default.a.createElement(DandDTableValue, null, this.props.Constitution)), external_react_default.a.createElement("tr", null, external_react_default.a.createElement(DandDTableLabel, null, "Dexterity:"), external_react_default.a.createElement(DandDTableValue, null, this.props.Dexterity)), external_react_default.a.createElement("tr", null, external_react_default.a.createElement(DandDTableLabel, null, "Hitpoints:"), external_react_default.a.createElement(DandDTableValue, null, this.props.Hitpoints != "Dead" && external_react_default.a.createElement("span", null, this.props.Hitpoints) || external_react_default.a.createElement("span", {
        className: "text-danger h5"
      }, external_react_default.a.createElement("small", null, this.props.Hitpoints)))), external_react_default.a.createElement("tr", null, external_react_default.a.createElement(DandDTableLabel, null, "Damage per Hit:"), external_react_default.a.createElement(DandDTableValue, null, this.props.Damage))))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: {
          size: 'auto',
          offset: 2
        }
      }, external_react_default.a.createElement("div", {
        className: "text-center "
      }, external_react_default.a.createElement("img", {
        style: jsxstyles["DandDStyle"].Avatar,
        src: this.props.ImgUrl,
        alt: "Avatar"
      })))));
    }
  }]);

  return CharacterSheet;
}(external_react_default.a.Component); // D and D application

var customComponents_AttackSection =
/*#__PURE__*/
function (_React$Component6) {
  Object(inherits["a" /* default */])(AttackSection, _React$Component6);

  function AttackSection(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AttackSection);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AttackSection).call(this, props));
    _this.RollResult = _this.RollResult.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.AttackBanner = _this.AttackBanner.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.AttackButton = _this.AttackButton.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  } //Shows attack roll number with special display for
  //crit scrike (natural 20 on roll)


  Object(createClass["a" /* default */])(AttackSection, [{
    key: "RollResult",
    value: function RollResult() {
      if (this.props.Roll === 'Crit Strike') {
        return external_react_default.a.createElement("span", {
          className: "text-danger font-italic"
        }, "Critical Strike!");
      } else {
        return external_react_default.a.createElement("span", null, this.props.Roll);
      }
    } //shows attack result of hit/miss or place holder for
    //result display.

  }, {
    key: "AttackBanner",
    value: function AttackBanner() {
      var Result = this.props.DidHit;

      if (Result === "Hit") {
        return external_react_default.a.createElement("h2", {
          className: "alert alert-success py-2 text-center"
        }, "Hit!");
      }

      if (Result === "Miss") {
        return external_react_default.a.createElement("h2", {
          className: "alert alert-danger py-2 text-center"
        }, "Miss");
      } else {
        return external_react_default.a.createElement("h6", {
          className: "text-white text-center"
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
        return external_react_default.a.createElement(external_reactstrap_["Button"], {
          onMouseDown: this.props.AttackRoll,
          onMouseUp: this.props.NextTurn
        }, this.props.RollTitle);
      } else {
        return external_react_default.a.createElement("h4", {
          className: "text-white"
        }, "Not your turn");
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        style: jsxstyles["DandDStyle"].thumbnail,
        className: "jsx-1953405926"
      }, external_react_default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        className: "jsx-1953405926"
      }), external_react_default.a.createElement("div", {
        className: "jsx-1953405926"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "AC-Icon-text"
      }, this.props.AC)))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        style: jsxstyles["DandDStyle"].thumbnail,
        className: "jsx-1953405926"
      }, external_react_default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        className: "jsx-1953405926"
      }), external_react_default.a.createElement("div", {
        className: "jsx-1953405926"
      }, external_react_default.a.createElement("h4", {
        className: "jsx-1953405926" + " " + "HitAdj-Icon-text"
      }, this.props.HitAdj)))), external_react_default.a.createElement(style_default.a, {
        id: "1953405926"
      }, [".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"])), external_react_default.a.createElement("div", {
        className: "d-flex justify-content-center my-4"
      }, this.AttackButton()), external_react_default.a.createElement("div", {
        className: "text-center text-white"
      }, external_react_default.a.createElement("h2", null, "Attack Result:"), external_react_default.a.createElement("p", {
        className: "mt-2 p-0"
      }, "attack roll: \xA0 ", this.RollResult())), external_react_default.a.createElement("div", null, this.AttackBanner()));
    }
  }]);

  return AttackSection;
}(external_react_default.a.Component); //used in DandD page to display Name,Initiative and HP status for hero and 
//monster.

var customComponents_AttackStatusDisplay =
/*#__PURE__*/
function (_React$Component7) {
  Object(inherits["a" /* default */])(AttackStatusDisplay, _React$Component7);

  function AttackStatusDisplay() {
    Object(classCallCheck["a" /* default */])(this, AttackStatusDisplay);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AttackStatusDisplay).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AttackStatusDisplay, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", {
        className: "text-info"
      }, this.props.Name), external_react_default.a.createElement("div", {
        className: "text-center pt-4"
      }, external_react_default.a.createElement("div", {
        className: "p-3"
      }, external_react_default.a.createElement("h4", null, "iniative:"), external_react_default.a.createElement("h4", {
        className: "text-info"
      }, this.props.Initiative != "Second" && external_react_default.a.createElement("span", {
        className: "text-info"
      }, this.props.Initiative) || external_react_default.a.createElement("span", {
        className: "text-warning"
      }, this.props.Initiative))), external_react_default.a.createElement("div", {
        className: "p-3"
      }, external_react_default.a.createElement("h4", null, "Hit Points:"), external_react_default.a.createElement("h4", {
        className: "text-center mt-4"
      }, this.props.HP != "Dead" && external_react_default.a.createElement("span", {
        className: "text-success"
      }, this.props.HP) || external_react_default.a.createElement("span", {
        className: "text-danger"
      }, this.props.HP)))));
    }
  }]);

  return AttackStatusDisplay;
}(external_react_default.a.Component); //D and D application

var customComponents_NameForm =
/*#__PURE__*/
function (_React$Component8) {
  Object(inherits["a" /* default */])(NameForm, _React$Component8);

  function NameForm(props) {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, NameForm);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NameForm).call(this, props));
    _this2.state = {
      collapse: false
    };
    _this2.toggle = _this2.toggle.bind(Object(assertThisInitialized["a" /* default */])(_this2));
    return _this2;
  }

  Object(createClass["a" /* default */])(NameForm, [{
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
      return external_react_default.a.createElement(external_reactstrap_["Form"], null, external_react_default.a.createElement(external_reactstrap_["FormGroup"], {
        className: "mb-2 mr-sm-2 mb-sm-2 d-flex flex-wrap"
      }, external_react_default.a.createElement("div", {
        className: "m-2"
      }, external_react_default.a.createElement(external_reactstrap_["Label"], null, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn text-white",
        onClick: this.toggle
      }, this.state.collapse ? 'Hide' : 'Change Name'))), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.collapse
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-wrap"
      }, external_react_default.a.createElement("div", {
        className: "m-2"
      }, external_react_default.a.createElement(external_reactstrap_["Input"], {
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
        }
      })), external_react_default.a.createElement("div", {
        className: "m-2"
      }, external_react_default.a.createElement(external_reactstrap_["Button"], {
        onClick: this.props.NameSubmit
      }, "Submit"))))));
    }
  }]);

  return NameForm;
}(external_react_default.a.Component);

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

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

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

/***/ "bVZc":
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
var isProd = process.env && "production" === 'production';

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });
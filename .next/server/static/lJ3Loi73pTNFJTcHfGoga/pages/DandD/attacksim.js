module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jvuh");


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

/***/ "Ldei":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCast", function() { return TvCast; });

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
  align: 'center'
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
var TvCast = {
  maxHeight: '20px',
  width: '200px',
  margin: 4,
  wordWwrap: 'break-word',
  maxFontSize: '1vw'
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoLabel", function() { return TvPostInfoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPostInfoValue", function() { return TvPostInfoValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCard", function() { return HomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomJumbo", function() { return CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMedia", function() { return AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleListCard", function() { return SingleListCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeColumnCard", function() { return ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackSection", function() { return AttackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameForm", function() { return NameForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Ldei");






/* **************** 
*   Imports       * 
******************/



/* *********************************
*   Export styled components       * 
***********************************/

function TvPostInfoLabel(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "h2 text-left w-25 m-0 p-2"
  }, props.children);
}
function TvPostInfoValue(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
    className: "text-left m-0 p-2"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, props.children));
}
/* *********************** 
*   Export Classes       * 
**************************/
//used in home page

var HomeCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(HomeCard, _React$Component);

  function HomeCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, HomeCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(HomeCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(HomeCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "text-center mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        className: "mt-2"
      }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["CardImageStyle"],
        src: this.props.Image,
        alt: "Card image cap"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], null, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], null, this.props.Description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        href: this.props.Link,
        className: "btn-dark",
        target: "_blank",
        rel: "noopener noreferrer"
      }, this.props.ButtonTitle))));
    }
  }]);

  return HomeCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
; //used in Resumeview and providerdata

var CustomJumbo =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CustomJumbo, _React$Component2);

  function CustomJumbo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CustomJumbo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CustomJumbo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CustomJumbo, [{
    key: "render",
    value: function render() {
      if (this.props.ImgUrl === "noimage") {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          className: "display-3 text-center"
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption1Style
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
          className: "my-2"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption2Style
        }, this.props.Caption2));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Jumbotron"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
          className: "display-3 text-center"
        }, this.props.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "container-fluid text-center"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "../static/images/avatar.jpg",
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["HomeImage"],
          alt: "avatar"
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption1Style
        }, this.props.Caption1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
          className: "my-2"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: this.props.Caption2Style
        }, this.props.Caption2, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), this.props.Caption3));
      }
    }
  }]);

  return CustomJumbo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //used in about page

var AboutMedia =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AboutMedia, _React$Component3);

  function AboutMedia() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AboutMedia);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AboutMedia).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AboutMedia, [{
    key: "render",
    value: function render() {
      if (this.props.Align === "Right") {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "py-3"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          className: this.props.Class
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap"
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "mt-5"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], null, this.props.Description))))));
      }

      if (this.props.Align === "Left") {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "py-3"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          className: this.props.Class
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          className: "mt-5"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], null, this.props.Description))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
          style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["AboutImg"],
          src: this.props.ImgUrl,
          alt: "Card image cap"
        })))));
      }

      ;
    }
  }]);

  return AboutMedia;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //used in about page for resume

var SingleListCard =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SingleListCard, _React$Component4);

  function SingleListCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SingleListCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SingleListCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(SingleListCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: "Text-Left"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardSubtitle"], null, this.props.Subtitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Item1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Item2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Item3), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Item4)))));
    }
  }]);

  return SingleListCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
; //used in resume for experience section

var ThreeColumnCard =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ThreeColumnCard, _React$Component5);

  function ThreeColumnCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ThreeColumnCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ThreeColumnCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ThreeColumnCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "py-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        className: this.props.Class
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.props.Title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        className: "text-left"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Description1)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Description2)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, this.props.Description3)))))));
    }
  }]);

  return ThreeColumnCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //D and D application

var CharacterSheet =
/*#__PURE__*/
function (_React$Component6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CharacterSheet, _React$Component6);

  function CharacterSheet() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CharacterSheet);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CharacterSheet).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CharacterSheet, [{
    key: "render",
    value: function render() {
      function DandDTableLabel(props) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          className: "text-muted text-left h4"
        }, props.children);
      }

      function DandDTableValue(props) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          className: "text-white text-left h4"
        }, props.children);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Table"], {
        borderless: true,
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableLabel, null, "Strength:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableValue, null, this.props.Strength)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableLabel, null, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableValue, null, " ", this.props.Constitution)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableLabel, null, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableValue, null, " ", this.props.Dexterity)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableLabel, null, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableValue, null, this.props.Hitpoints != "Dead" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, this.props.Hitpoints) || react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-danger h5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, this.props.Hitpoints)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableLabel, null, "Damage per Hit:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DandDTableValue, null, " ", this.props.Damage))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: {
          size: 'auto',
          offset: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center "
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["DandDAvatar"],
        src: this.props.ImgUrl,
        alt: "hero"
      })))));
    }
  }]);

  return CharacterSheet;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // D and D application

var AttackSection =
/*#__PURE__*/
function (_React$Component7) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AttackSection, _React$Component7);

  function AttackSection() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AttackSection);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AttackSection).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AttackSection, [{
    key: "render",
    value: function render() {
      var Result = this.props.DidHit;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bg-dark",
        style: {
          height: '440px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["thumbnail"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "AC-Icon-text"
      }, this.props.AC)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        className: "my-4 mx-5 d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_7__["thumbnail"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "HitAdj-Icon-text"
      }, this.props.HitAdj))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-flex justify-content-center my-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        onClick: this.props.AttackRoll
      }, this.props.RollTitle)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "text-center text-white"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Attack Result:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "mt-2 p-0"
      }, "attack roll:", this.props.Roll === 'Crit Strike' && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "text-danger font-italic"
      }, this.props.Roll, "!") || react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, this.props.Roll))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "my-2 p-0"
      }, Result === "Hit" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "alert-success w-100 text-center mt-3"
      }, Result) || react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "alert-danger w-100 text-center mt-3"
      }, Result)));
    }
  }]);

  return AttackSection;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //D and D application

var NameForm =
/*#__PURE__*/
function (_React$Component8) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(NameForm, _React$Component8);

  function NameForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NameForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NameForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NameForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        inline: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        className: "mr-2 mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        className: "mr-2"
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
        }
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: "ml-2 mt-2",
        onClick: this.props.NameSubmit
      }, "Change Name")));
    }
  }]);

  return NameForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterDmgAdj", function() { return SetmonsterDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterHitAdj", function() { return SetmonsterHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsteracAdj", function() { return SetmonsteracAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setmonsterstats", function() { return setmonsterstats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monsterattackroll", function() { return monsterattackroll; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

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
  var attackroll = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.random() * 20 + 1) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.heroHitAdj);

  var adjattackroll = attackroll + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.heroHitAdj);

  var critstrike = this.state.monsterDmg * 2;

  if (attackroll < 20 && adjattackroll >= this.state.heroAc) {
    this.setState({
      monsterDidHit: 'Hit',
      monsterRoll: adjattackroll
    }); //performs check to see if the hero hp after monster damange is 0 or lower

    if (this.state.heroHp - this.state.monsterDmg <= 0) {
      this.setState({
        heroHp: 'Dead',
        monsterRoll: adjattackroll
      }); // if yes, hero is dead
    } else {
      //if no, sets the herohp state to reflect new damage
      this.setState({
        heroHp: this.state.heroHp - this.state.monsterDmg
      });
    }
  } else if (attackroll >= 20) {
    this.setState({
      monsterDidHit: 'Hit',
      monsterRoll: 'Crit Strike'
    });

    if (this.state.heroHp - critstrike <= 0) {
      this.setState({
        heroHp: 'Dead',
        monsterRoll: 'Crit Strike'
      }); // if yes, monster is dead
    } else {
      this.setState({
        heroHp: this.state.heroHp - critstrike
      });
    }
  } else {
    this.setState({
      monsterDidHit: 'Miss',
      monsterRoll: adjattackroll
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setherostats", function() { return setherostats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroConstAdj", function() { return SetheroConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroacAdj", function() { return SetheroacAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroDmgAdj", function() { return SetheroDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroHitAdj", function() { return SetheroHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroattackroll", function() { return heroattackroll; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

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

; //sets hero Armorclass based on dexterity stat number.

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
} //sets hero damage based on strength stat number.


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
} //sets hero hit adjustment based on strength stat number.


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
  for (var Stat in this.state.herostats) {
    this.state.herostats[Stat] = Math.floor(Math.random() * 20 + 1);
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
to monster hp and if hp reaches zero alerts that monster is dead 
*/


function heroattackroll() {
  var attackroll = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.random() * 20 + 1);

  var adjattackroll = attackroll + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.heroHitAdj);

  var critstrike = this.state.heroDmg * 2;

  if (attackroll < 20 && adjattackroll >= this.state.monsterAc) {
    this.setState({
      heroDidHit: 'Hit',
      heroRoll: adjattackroll
    }); //performs check to see if the monster hp after hero damange is 0 or lower

    if (this.state.monsterHp - this.state.heroDmg <= 0) {
      this.setState({
        monsterHp: 'Dead',
        heroRoll: adjattackroll
      }); // if yes, monster is dead
    } else {
      this.setState({
        monsterHp: this.state.monsterHp - this.state.heroDmg
      });
    }
  } else if (attackroll === 20) {
    this.setState({
      heroDidHit: 'Hit',
      heroRoll: 'Crit Strike'
    });

    if (this.state.monsterHp - critstrike <= 0) {
      this.setState({
        monsterHp: 'Dead',
        heroRoll: 'Crit Strike'
      }); // if yes, monster is dead
    } else {
      this.setState({
        monsterHp: this.state.monsterHp - critstrike
      });
    }
  } else {
    this.setState({
      heroDidHit: 'Miss',
      heroRoll: adjattackroll
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
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("TYO+");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);












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
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      heroHp: 0,
      heroAc: 0,
      heroDmg: 0,
      heroHitAdj: 0,
      heroNametext: '',
      heroName: 'Hero',
      heroInitiative: 0,
      heroRoll: 0,
      heroDidHit: '',
      monsterHp: 0,
      monsterAc: 0,
      monsterDmg: 0,
      monsterHitAdj: 0,
      monsterNametext: '',
      monsterName: 'Monster',
      monsterInitiative: 0,
      monsterRoll: 0,
      monsterDidHit: ''
    }; //Hero bind function statements

    _this.setherostats = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["setherostats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroConstAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroacAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroacAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroDmgAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetheroHitAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.heroNameSubmit = _this.heroNameSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.heroattackroll = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["heroattackroll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this)); //monster bind function statements

    _this.setmonsterstats = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["setmonsterstats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsterConstAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsteracAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsteracAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsterDmgAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.SetmonsterHitAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.monsterNameSubmit = _this.monsterNameSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.monsterattackroll = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["monsterattackroll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AttackSim, [{
    key: "heroNameChange",
    value: function heroNameChange(event) {
      this.setState({
        heroNametext: event.target.value
      });
    }
  }, {
    key: "heroNameSubmit",
    value: function heroNameSubmit(event) {
      this.setState({
        heroName: this.state.heroNametext
      });
    }
  }, {
    key: "monsterNameChange",
    value: function monsterNameChange(event) {
      this.setState({
        monsterNametext: event.target.value
      });
    }
  }, {
    key: "monsterNameSubmit",
    value: function monsterNameSubmit(event) {
      this.setState({
        monsterName: this.state.monsterNametext
      });
    } //initiative shows what character attacks first

  }, {
    key: "rollforiniative",
    value: function rollforiniative() {
      this.Heroinitiative = Math.floor(Math.random() * 10 + 1);
      this.Monsterinitiative = Math.floor(Math.random() * 10 + 1);

      if (this.Heroinitiative < this.Monsterinitiative) {
        this.setState({
          heroInitiative: 'First',
          monsterInitiative: 'Second'
        });
      } else if (this.Heroinitiative > this.Monsterinitiative) {
        this.setState({
          monsterInitiative: 'First',
          heroInitiative: 'Second'
        });
      } else {
        this.setState({
          heroInitiative: 'ReRoll',
          monsterInitiative: 'ReRoll'
        });
      }

      ; //clears out the hit/miss comments since it is a new round.

      this.setState({
        heroDidHit: '',
        monsterDidHit: '',
        heroRoll: 0,
        monsterRoll: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex row justify-content-center m-0 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "w-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: " m-1 bg-dark text-white "
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "mt-5 ml-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Hero Name: "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info ml-5 h3"
      }, this.state.heroName))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.herostats.Str,
        Constitution: this.state.herostats.Const,
        Dexterity: this.state.herostats.Dext,
        Hitpoints: this.state.heroHp,
        Damage: this.state.heroDmg,
        ImgUrl: "../static/images/hero.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center m-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setherostats
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ml-2 p-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        value: this.state.value,
        NameChange: this.heroNameChange,
        NameSubmit: this.heroNameSubmit
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1  bg-dark text-white"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "mt-5 ml-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, "Monster Name: "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info ml-5 h3"
      }, this.state.monsterName)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.monsterstats.Str,
        Constitution: this.state.monsterstats.Const,
        Dexterity: this.state.monsterstats.Dext,
        Hitpoints: this.state.monsterHp,
        Damage: this.state.monsterDmg,
        ImgUrl: "../static/images/monster.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center m-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setmonsterstats
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ml-3 p-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        value: this.state.value,
        NameChange: this.monsterNameChange,
        NameSubmit: this.monsterNameSubmit
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "d-flex flex-wrap justify-content-center m-0 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark m-1 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.heroAc,
        HitAdj: this.state.heroHitAdj,
        AttackRoll: this.heroattackroll,
        RollTitle: "Hero Roll for Attack",
        Roll: this.state.heroRoll,
        DidHit: this.state.heroDidHit
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark m-1 p-0 col",
        xs: "3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center bg-dark m-0 p-0 text-white"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "button",
        className: "m-5 w-50",
        onClick: this.rollforiniative
      }, "Roll for iniative"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "border-info border-right w-50"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-info"
      }, this.state.heroName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center pt-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-info"
      }, this.state.heroInitiative != "Second" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info"
      }, this.state.heroInitiative) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-warning"
      }, this.state.heroInitiative))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "Hit Points:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center mt-4"
      }, this.state.heroHp != "Dead" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success"
      }, this.state.heroHp) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger"
      }, this.state.heroHp))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-info"
      }, this.state.monsterName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center pt-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, this.state.monsterInitiative != "Second" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info"
      }, this.state.monsterInitiative) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-warning"
      }, this.state.monsterInitiative))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, "Hit Points:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center mt-4"
      }, this.state.monsterHp != "Dead" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success"
      }, this.state.monsterHp) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger h4"
      }, this.state.monsterHp)))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark m-1 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.monsterAc,
        HitAdj: this.state.monsterHitAdj,
        AttackRoll: this.monsterattackroll,
        RollTitle: "Monster Roll for Attack",
        Roll: this.state.monsterRoll,
        DidHit: this.state.monsterDidHit
      }))));
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

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });
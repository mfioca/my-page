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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Lms/");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AA8I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15,
  fontSize: 20
};
function Header2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tvpage"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Search Page")));
}

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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Navbar"], {
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
        className: "bg-dark btn-dark"
      }, external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn-dark w-100",
        href: "/tvpage"
      }, "TvMaze"), external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn-dark w-100",
        href: "/DandDpage"
      }, "DandD"), external_react_default.a.createElement(external_reactstrap_["Button"], {
        className: "btn-dark w-100",
        href: "/providerData"
      }, "Provider List")))))));
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
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Navbar"], {
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
      }, "Email"))))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./components/style.css
var style = __webpack_require__("ETxl");

// CONCATENATED MODULE: ./components/layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });





var Bodystyle = {
  minHeight: '100vh',
  maxWidth: '98%',
  marginRight: 'auto',
  marginLeft: 'auto'
};
function Layout(props) {
  return external_react_default.a.createElement("div", {
    className: "Layout"
  }, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("div", {
    style: Bodystyle
  }, props.children), external_react_default.a.createElement(components_Footer, null));
}

/***/ }),

/***/ "ETxl":
/***/ (function(module, exports) {



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
var TvCast = {
  height: '20px',
  width: '200px',
  margin: 4,
  wordWwrap: 'break-word'
};

/***/ }),

/***/ "Lms/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CafY");
/* harmony import */ var _tv_info_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YUYT");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a/h4");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qBGJ");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Ldei");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);










var noimage = '/static/images/no-img.png';

var tvPost = function tvPost(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center"
  }, "the below content has been imported from", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://www.tvmaze.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "TVmaze.com")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tv_info_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "h3 m-3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, props.show.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Type:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, props.show.type ? props.show.type : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Premiered:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, props.show.premiered ? props.show.premiered : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "status:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, props.show.status ? props.show.status : 'no data')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Rating:"), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, props.show.rating.average)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Genre:"), " \xA0", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, props.show.genres.map(function (genres) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: props.show.genres
    }, genres, " \xA0");
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    sm: {
      size: 'auto',
      offset: 1
    },
    className: "mr-5 mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: props.show.image ? props.show.image.medium : noimage,
    alt: "no image"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "m-3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "Summary:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, props.show.summary.replace(/<[/]?p>/g, '').replace(/<[/]?b>/g, '').replace(/<[/]?i>/g, '')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "m-3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "Link:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "ml-2"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: props.show.url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.show.url
  }, props.show.name ? props.show.name : 'null')))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Cast:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-left"
  }, props.show._embedded.cast.map(function (cast) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: cast.person.id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      className: "m-2"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
      className: "m-4 text-center",
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["TvTitle"]
    }, cast.person.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
      className: "p-2",
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["TvImage"],
      src: cast.person.image.medium ? cast.person.image.medium : noimage,
      alt: "castimage"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "text-center my-2"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_8__["TvCast"]
    }, "As:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
      className: "ml-2"
    }, cast.character.name)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "btn-dark mt-5"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "btn-dark w-100",
      href: cast.person.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Actor page"))));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mt-4"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Episodes:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "-striped -highlight",
    data: props.show._embedded.episodes,
    defaultPageSize: 20,
    style: {
      height: "600px",
      fontSize: "14px" // This will force the table body to overflow and scroll, since there is not enough room

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
      width: 70,
      style: {
        'text-align': 'center'
      }
    }, {
      Header: "Episode #",
      accessor: "number",
      width: 80,
      style: {
        'text-align': 'center'
      }
    }, {
      Header: "Name",
      id: "name",
      accessor: function accessor(d) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          href: d.url,
          target: "_blank",
          rel: "noopener noreferrer"
        }, d.name);
      },
      minWidth: 70,
      style: {
        'white-space': 'unset',
        'text-align': 'center'
      }
    }, {
      Header: "Summary",
      id: "summary",
      accessor: function accessor(d) {
        return d.summary != null && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, d.summary.replace(/<[/]?p>/g, ''));
      },
      style: {
        'white-space': 'unset'
      }
    }]
  })))));
};

tvPost.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
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
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (tvPost);

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

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YUYT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AA8I");


var layout2Style = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: 'white'
};
function Layout2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layout2Style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children);
}

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

/***/ "a/h4":
/***/ (function(module, exports) {

module.exports = require("react-table");

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

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qBGJ":
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
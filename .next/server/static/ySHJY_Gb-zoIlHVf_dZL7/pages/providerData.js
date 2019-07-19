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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PK7a");


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

// EXTERNAL MODULE: ./components/style.css
var style = __webpack_require__("ETxl");

// CONCATENATED MODULE: ./components/Header.js









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
      })), external_react_default.a.createElement("li", {
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

/***/ "ErfQ":
/***/ (function(module) {

module.exports = [{"id":1,"Name":"Random Provider Name 1","City":"HINESVILLE","State":"GA","Type":"Provider","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":2,"Name":"Random Provider Name 2","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":3,"Name":"Random Provider Name 3","City":"Marietta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":4,"Name":"Random Provider Name 4","City":"Hahira","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":5,"Name":"Random Provider Name 5","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"","Stretcher":""},{"id":6,"Name":"Random Provider Name 6","City":"Sparks","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"","Stretcher":""},{"id":7,"Name":"Random Provider Name 7","City":"Cairo","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"","Stretcher":""},{"id":8,"Name":"Random Provider Name 8","City":"Bonaire","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Houston","Amb":"Yes","WCHR":"","Stretcher":""},{"id":9,"Name":"Random Provider Name 9","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":10,"Name":"Random Provider Name 10","City":"Dublin","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"","Stretcher":""},{"id":11,"Name":"Random Provider Name 11","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":12,"Name":"Random Provider Name 12","City":"Lithonia","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":13,"Name":"Random Provider Name 13","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Mcduffie","Amb":"Yes","WCHR":"","Stretcher":""},{"id":14,"Name":"Random Provider Name 14","City":"NAYLOR","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":15,"Name":"Random Provider Name 15","City":"Macon","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":16,"Name":"Random Provider Name 16","City":"McDonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":17,"Name":"Random Provider Name 17","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":18,"Name":"Random Provider Name 18","City":"Lithia Springs","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":19,"Name":"Random Provider Name 19","City":"Royston","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Franklin","Amb":"Yes","WCHR":"","Stretcher":""},{"id":20,"Name":"Random Provider Name 20","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":21,"Name":"Random Provider Name 21","City":"Pooler","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"","Stretcher":""},{"id":22,"Name":"Random Provider Name 22","City":"Millen","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Jenkins","Amb":"Yes","WCHR":"","Stretcher":""},{"id":23,"Name":"Random Provider Name 23","City":"McDonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":24,"Name":"Random Provider Name 24","City":"Lumpkin","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Stewart","Amb":"Yes","WCHR":"","Stretcher":""},{"id":25,"Name":"Random Provider Name 25","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":26,"Name":"Random Provider Name 26","City":"MARIETTA","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":27,"Name":"Random Provider Name 27","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":28,"Name":"Random Provider Name 28","City":"Sparks","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"","Stretcher":""},{"id":29,"Name":"Random Provider Name 29","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":30,"Name":"Random Provider Name 30","City":"Hampton","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":31,"Name":"Random Provider Name 31","City":"Hinesville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":32,"Name":"Random Provider Name 32","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":33,"Name":"Random Provider Name 33","City":"WOODSTOCK","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cherokee","Amb":"Yes","WCHR":"","Stretcher":""},{"id":34,"Name":"Random Provider Name 34","City":"Tennille","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"","Stretcher":""},{"id":35,"Name":"Random Provider Name 35","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":36,"Name":"Random Provider Name 36","City":"MCDONOUGH","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":37,"Name":"Random Provider Name 37","City":"Augusta","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":38,"Name":"Random Provider Name 38","City":"Cairo,","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"","Stretcher":""},{"id":39,"Name":"Random Provider Name 39","City":"Dublin","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"","Stretcher":""},{"id":40,"Name":"Random Provider Name 40","City":"Bloomingdale","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"","Stretcher":""},{"id":41,"Name":"Random Provider Name 41","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"","Stretcher":""},{"id":42,"Name":"Random Provider Name 42","City":"Quitman","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"","Stretcher":""},{"id":43,"Name":"Random Provider Name 43","City":"Warthen","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"","Stretcher":""},{"id":44,"Name":"Random Provider Name 44","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":45,"Name":"Random Provider Name 45","City":"MACON","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":46,"Name":"Random Provider Name 46","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"","Stretcher":""},{"id":47,"Name":"Random Provider Name 47","City":"Baconton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":48,"Name":"Random Provider Name 48","City":"Hephzibah","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":49,"Name":"Random Provider Name 49","City":"Cairo","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"","Stretcher":""},{"id":50,"Name":"Random Provider Name 50","City":"ROCKLEDGE","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"","Stretcher":""},{"id":51,"Name":"Random Provider Name 51","City":"Marietta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":52,"Name":"Random Provider Name 52","City":"Jackson","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"butts","Amb":"Yes","WCHR":"","Stretcher":""},{"id":53,"Name":"Random Provider Name 53","City":"Atlanta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":54,"Name":"Random Provider Name 54","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":55,"Name":"Random Provider Name 55","City":"ADEL","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"","Stretcher":""},{"id":56,"Name":"Random Provider Name 56","City":"Sylvania","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Screven","Amb":"Yes","WCHR":"","Stretcher":""},{"id":57,"Name":"Random Provider Name 57","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":58,"Name":"Random Provider Name 58","City":"Morven","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"","Stretcher":""},{"id":59,"Name":"Random Provider Name 59","City":"Midway","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":60,"Name":"Random Provider Name 60","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":61,"Name":"Random Provider Name 61","City":"Washington","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":62,"Name":"Random Provider Name 62","City":"Washington","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":63,"Name":"Random Provider Name 63","City":"Leesburg","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"","Stretcher":""},{"id":64,"Name":"Random Provider Name 64","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":65,"Name":"Random Provider Name 65","City":"Brunswick","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Glynn","Amb":"Yes","WCHR":"","Stretcher":""},{"id":66,"Name":"Random Provider Name 66","City":"Ellenwood","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":67,"Name":"Random Provider Name 67","City":"Norwood","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"","Stretcher":""},{"id":68,"Name":"Random Provider Name 68","City":"Norwood","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"","Stretcher":""},{"id":69,"Name":"Random Provider Name 69","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"","Stretcher":""},{"id":70,"Name":"Random Provider Name 70","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":71,"Name":"Random Provider Name 71","City":"Warner Robins","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"houston","Amb":"Yes","WCHR":"","Stretcher":""},{"id":72,"Name":"Random Provider Name 72","City":"VALDOSTA","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":73,"Name":"Random Provider Name 73","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":74,"Name":"Random Provider Name 74","City":"Warner Robbins","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"","Stretcher":""},{"id":75,"Name":"Random Provider Name 75","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"","Stretcher":""},{"id":76,"Name":"Random Provider Name 76","City":"Jackson","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"butts","Amb":"Yes","WCHR":"","Stretcher":""},{"id":77,"Name":"Random Provider Name 77","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":78,"Name":"Random Provider Name 78","City":"Rochelle","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Wilcox","Amb":"Yes","WCHR":"","Stretcher":""},{"id":79,"Name":"Random Provider Name 79","City":"Jonesboro","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":80,"Name":"Random Provider Name 80","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":81,"Name":"Random Provider Name 81","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":82,"Name":"Random Provider Name 82","City":"Sandersville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"","Stretcher":""},{"id":83,"Name":"Random Provider Name 83","City":"VIDALIA","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"","Stretcher":""},{"id":84,"Name":"Random Provider Name 84","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":85,"Name":"Random Provider Name 85","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"","Stretcher":""},{"id":86,"Name":"Random Provider Name 86","City":"Hahira","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":87,"Name":"Random Provider Name 87","City":"Perry","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"","Stretcher":""},{"id":88,"Name":"Random Provider Name 88","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":89,"Name":"Random Provider Name 89","City":"Marietta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":90,"Name":"Random Provider Name 90","City":"Martinez","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"","Stretcher":""},{"id":91,"Name":"Random Provider Name 91","City":"Martinez","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"","Stretcher":""},{"id":92,"Name":"Random Provider Name 92","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":93,"Name":"Random Provider Name 93","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":94,"Name":"Random Provider Name 94","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":95,"Name":"Random Provider Name 95","City":"Norwood","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"","Stretcher":""},{"id":96,"Name":"Random Provider Name 96","City":"Mcdonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":97,"Name":"Random Provider Name 97","City":"Camilla","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":98,"Name":"Random Provider Name 98","City":"Stone Mountain","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":99,"Name":"Random Provider Name 99","City":"Sylvester","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"","Stretcher":""},{"id":100,"Name":"Random Provider Name 100","City":"Swainsboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"","Stretcher":""},{"id":101,"Name":"Random Provider Name 101","City":"Warrenton","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"","Stretcher":""},{"id":102,"Name":"Random Provider Name 102","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":103,"Name":"Random Provider Name 103","City":"Fitzgerald","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Benn Hill","Amb":"Yes","WCHR":"","Stretcher":""},{"id":104,"Name":"Random Provider Name 104","City":"warner robins","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"","Stretcher":""},{"id":105,"Name":"Random Provider Name 105","City":"Camilla","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":106,"Name":"Random Provider Name 106","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"","Stretcher":""},{"id":107,"Name":"Random Provider Name 107","City":"AUGUSTA","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":108,"Name":"Random Provider Name 108","City":"Waynesboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"burke","Amb":"Yes","WCHR":"","Stretcher":""},{"id":109,"Name":"Random Provider Name 109","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":110,"Name":"Random Provider Name 110","City":"Swainsboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"","Stretcher":""},{"id":111,"Name":"Random Provider Name 111","City":"Swainsboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"","Stretcher":""},{"id":112,"Name":"Random Provider Name 112","City":"Hinesville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":113,"Name":"Random Provider Name 113","City":"mcdonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":114,"Name":"Random Provider Name 114","City":"Hull","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Madison","Amb":"Yes","WCHR":"","Stretcher":""},{"id":115,"Name":"Random Provider Name 115","City":"Dawson","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":116,"Name":"Random Provider Name 116","City":"Rockledge","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"","Stretcher":""},{"id":117,"Name":"Random Provider Name 117","City":"Lake Park","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":118,"Name":"Random Provider Name 118","City":"MT VERNON","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"","Stretcher":""},{"id":119,"Name":"Random Provider Name 119","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":120,"Name":"Random Provider Name 120","City":"College Park","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":121,"Name":"Random Provider Name 121","City":"Lake Park","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":122,"Name":"Random Provider Name 122","City":"Lake Park","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":123,"Name":"Random Provider Name 123","City":"Rincon","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"","Stretcher":""},{"id":124,"Name":"Random Provider Name 124","City":"CARROLLTON","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"","Stretcher":""},{"id":125,"Name":"Random Provider Name 125","City":"Waycross","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Ware","Amb":"Yes","WCHR":"","Stretcher":""},{"id":126,"Name":"Random Provider Name 126","City":"Cordele","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"","Stretcher":""},{"id":127,"Name":"Random Provider Name 127","City":"Camilla","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"","Stretcher":""},{"id":128,"Name":"Random Provider Name 128","City":"Metter","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Candler","Amb":"Yes","WCHR":"","Stretcher":""},{"id":129,"Name":"Random Provider Name 129","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":130,"Name":"Random Provider Name 130","City":"ALBANY","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":131,"Name":"Random Provider Name 131","City":"Columbus","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"","Stretcher":""},{"id":132,"Name":"Random Provider Name 132","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":133,"Name":"Random Provider Name 133","City":"Adel","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"","Stretcher":""},{"id":134,"Name":"Random Provider Name 134","City":"Adel","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"","Stretcher":""},{"id":135,"Name":"Random Provider Name 135","City":"McDonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":136,"Name":"Random Provider Name 136","City":"Adel","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"","Stretcher":""},{"id":137,"Name":"Random Provider Name 137","City":"Cartersville","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"bartow","Amb":"Yes","WCHR":"","Stretcher":""},{"id":138,"Name":"Random Provider Name 138","City":"Cartersville","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"bartow","Amb":"Yes","WCHR":"","Stretcher":""},{"id":139,"Name":"Random Provider Name 139","City":"Keysville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"burke","Amb":"Yes","WCHR":"","Stretcher":""},{"id":140,"Name":"Random Provider Name 140","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":141,"Name":"Random Provider Name 141","City":"WAYCROSS","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Ware","Amb":"Yes","WCHR":"","Stretcher":""},{"id":142,"Name":"Random Provider Name 142","City":"Sandersville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"","Stretcher":""},{"id":143,"Name":"Random Provider Name 143","City":"Augusta","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":144,"Name":"Random Provider Name 144","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":145,"Name":"Random Provider Name 145","City":"Tignall","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":146,"Name":"Random Provider Name 146","City":"Hephzibah","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":147,"Name":"Random Provider Name 147","City":"Cairo","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"","Stretcher":""},{"id":148,"Name":"Random Provider Name 148","City":"Stone Mountain","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":149,"Name":"Random Provider Name 149","City":"Douglasville","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":150,"Name":"Random Provider Name 150","City":"Warrenton","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"","Stretcher":""},{"id":151,"Name":"Random Provider Name 151","City":"Naylor","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":152,"Name":"Random Provider Name 152","City":"Sandersville","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":153,"Name":"Random Provider Name 153","City":"Albany","State":"GA","Type":"Provider","Region":"East","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":154,"Name":"Random Provider Name 154","City":"Lithonia","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":155,"Name":"Random Provider Name 155","City":"Savannah","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":156,"Name":"Random Provider Name 156","City":"Valdosta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":157,"Name":"Random Provider Name 157","City":"Dixie","State":"GA","Type":"Provider","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"","Stretcher":""},{"id":158,"Name":"Random Provider Name 158","City":"Macon","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":159,"Name":"Random Provider Name 159","City":"Macon","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":160,"Name":"Random Provider Name 160","City":"Ellenwood","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":161,"Name":"Random Provider Name 161","City":"Albany","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":162,"Name":"Random Provider Name 162","City":"Dacula","State":"GA","Type":"Provider","Region":"Central","County":"gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":163,"Name":"Random Provider Name 163","City":"Decatur","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":164,"Name":"Random Provider Name 164","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":165,"Name":"Random Provider Name 165","City":"Fayetteville","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":166,"Name":"Random Provider Name 166","City":"Dawson","State":"GA","Type":"Provider","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"","Stretcher":"Yes"},{"id":167,"Name":"Random Provider Name 167","City":"Villa Rica","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"","Stretcher":""},{"id":168,"Name":"Random Provider Name 168","City":"THOMASVILLE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":169,"Name":"Random Provider Name 169","City":"Norcross","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":170,"Name":"Random Provider Name 170","City":"Union City","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":171,"Name":"Random Provider Name 171","City":"Stephens","State":"GA","Type":"Provider","Region":"Central","County":"Oglethorpe","Amb":"Yes","WCHR":"","Stretcher":""},{"id":172,"Name":"Random Provider Name 172","City":"WAYNESBORO","State":"GA","Type":"Provider","Region":"East","County":"burke","Amb":"Yes","WCHR":"","Stretcher":"Yes"},{"id":173,"Name":"Random Provider Name 173","City":"WAYNESBORO","State":"GA","Type":"Provider","Region":"East","County":"burke","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":174,"Name":"Random Provider Name 174","City":"Douglas","State":"GA","Type":"Provider","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"","Stretcher":""},{"id":175,"Name":"Random Provider Name 175","City":"Hephzibah","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":176,"Name":"Random Provider Name 176","City":"N. Augusta","State":"SC","Type":"Provider","Region":"East","County":"Richmond","Amb":"","WCHR":"","Stretcher":"Yes"},{"id":177,"Name":"Random Provider Name 177","City":"Bonaire","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":178,"Name":"Random Provider Name 178","City":"Watkinsville","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":179,"Name":"Random Provider Name 179","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"","Stretcher":""},{"id":180,"Name":"Random Provider Name 180","City":"Temple","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"","Stretcher":""},{"id":181,"Name":"Random Provider Name 181","City":"Stone Mountain","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":182,"Name":"Random Provider Name 182","City":"Milledgeville","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"","Stretcher":""},{"id":183,"Name":"Random Provider Name 183","City":"Forest Park","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":184,"Name":"Random Provider Name 184","City":"Decatur","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"","Stretcher":"Yes"},{"id":185,"Name":"Random Provider Name 185","City":"Jonesboro","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":186,"Name":"Random Provider Name 186","City":"Jonesboro","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":187,"Name":"Random Provider Name 187","City":"RIVERDALE","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":188,"Name":"Random Provider Name 188","City":"Lawrenceville","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":189,"Name":"Random Provider Name 189","City":"Milledgeville","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":190,"Name":"Random Provider Name 190","City":"MOULTRIE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Colquitt","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":191,"Name":"Random Provider Name 191","City":"Cartersville","State":"GA","Type":"Provider","Region":"Central","County":"bartow","Amb":"Yes","WCHR":"","Stretcher":""},{"id":192,"Name":"Random Provider Name 192","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":193,"Name":"Random Provider Name 193","City":"Sylvester","State":"GA","Type":"Provider","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":194,"Name":"Random Provider Name 194","City":"Sandersville","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"","Stretcher":""},{"id":195,"Name":"Random Provider Name 195","City":"Tucker","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":196,"Name":"Random Provider Name 196","City":"CORDELE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":197,"Name":"Random Provider Name 197","City":"DUBLIN","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"","Stretcher":""},{"id":198,"Name":"Random Provider Name 198","City":"Hephzibah","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":199,"Name":"Random Provider Name 199","City":"Guyton","State":"GA","Type":"Provider","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"","Stretcher":""},{"id":200,"Name":"Random Provider Name 200","City":"Douglasville","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":201,"Name":"Random Provider Name 201","City":"Albany","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":202,"Name":"Random Provider Name 202","City":"Dublin","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":203,"Name":"Random Provider Name 203","City":"Iron City","State":"GA","Type":"Provider","Region":"SouthWest","County":"Seminole ","Amb":"Yes","WCHR":"","Stretcher":"Yes"},{"id":204,"Name":"Random Provider Name 204","City":"HINESVILLE","State":"GA","Type":"Provider","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":205,"Name":"Random Provider Name 205","City":"Leesburg","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":206,"Name":"Random Provider Name 206","City":"Savannah","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":207,"Name":"Random Provider Name 207","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":208,"Name":"Random Provider Name 208","City":"Covington","State":"GA","Type":"Provider","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":209,"Name":"Random Provider Name 209","City":"Madison","State":"AL","Type":"Provider","Region":"SouthWest","County":"","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":210,"Name":"Random Provider Name 210","City":"Macon","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":211,"Name":"Random Provider Name 211","City":"SWAINSBORO","State":"GA","Type":"Provider","Region":"East","County":"Emanuel","Amb":"","WCHR":"","Stretcher":"Yes"},{"id":212,"Name":"Random Provider Name 212","City":"Lawrenceville","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":213,"Name":"Random Provider Name 213","City":"Warner Robins","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"","Stretcher":""},{"id":214,"Name":"Random Provider Name 214","City":"Greensboro","State":"GA","Type":"Provider","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":215,"Name":"Random Provider Name 215","City":"Thomson","State":"GA","Type":"Provider","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"","Stretcher":""},{"id":216,"Name":"Random Provider Name 216","City":"Conyers","State":"GA","Type":"Provider","Region":"Central","County":"Rockdale","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":217,"Name":"Random Provider Name 217","City":"Stockbridge","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":218,"Name":"Random Provider Name 218","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":219,"Name":"Random Provider Name 219","City":"Albany","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"","Stretcher":""},{"id":220,"Name":"Random Provider Name 220","City":"Kite","State":"GA","Type":"Provider","Region":"East","County":"Johnson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":221,"Name":"Random Provider Name 221","City":"Lyons","State":"GA","Type":"Provider","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":222,"Name":"Random Provider Name 222","City":"HAWKINSVILLE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Pulaski ","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":223,"Name":"Random Provider Name 223","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":224,"Name":"Random Provider Name 224","City":"Baxley","State":"GA","Type":"Provider","Region":"East","County":"Appling","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":225,"Name":"Random Provider Name 225","City":"McDonough","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":226,"Name":"Random Provider Name 226","City":"Dallas","State":"GA","Type":"Provider","Region":"Central","County":"Paulding","Amb":"Yes","WCHR":"","Stretcher":""},{"id":227,"Name":"Random Provider Name 227","City":"ALBANY","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":228,"Name":"Random Provider Name 228","City":"Eastman","State":"GA","Type":"Provider","Region":"Central","County":"Dodge","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":229,"Name":"Random Provider Name 229","City":"College Park","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":230,"Name":"Random Provider Name 230","City":"Union City","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":231,"Name":"Random Provider Name 231","City":"SPARTA","State":"GA","Type":"Provider","Region":"East","County":"Hancock","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":232,"Name":"Random Provider Name 232","City":"Cochran","State":"GA","Type":"Provider","Region":"Central","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":233,"Name":"Random Provider Name 233","City":"Kathleen","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":234,"Name":"Random Provider Name 234","City":"Covington","State":"GA","Type":"Provider","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":235,"Name":"Random Provider Name 235","City":"Savannah","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":236,"Name":"Random Provider Name 236","City":"TIFTON","State":"GA","Type":"Provider","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":237,"Name":"Random Provider Name 237","City":"WASHINGTON","State":"GA","Type":"Provider","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":238,"Name":"Random Provider Name 238","City":"Brunswick","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"","Stretcher":""},{"id":239,"Name":"Random Provider Name 239","City":"Americus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":240,"Name":"Random Provider Name 240","City":"Rentz","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":241,"Name":"Random Provider Name 241","City":"Uvalda","State":"GA","Type":"Provider","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":242,"Name":"Random Provider Name 242","City":"SALEM","State":"AL","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":243,"Name":"Random Provider Name 243","City":"Brunswick","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":244,"Name":"Random Provider Name 244","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":245,"Name":"Random Provider Name 245","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"","Stretcher":""},{"id":246,"Name":"Random Provider Name 246","City":"Tifton","State":"GA","Type":"Provider","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"","Stretcher":""},{"id":247,"Name":"Random Provider Name 247","City":"Ellenwood","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":248,"Name":"Random Provider Name 248","City":"Atlanta","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":249,"Name":"Random Provider Name 249","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":250,"Name":"Random Provider Name 250","City":"Waycross","State":"GA","Type":"Provider","Region":"East","County":"Ware","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":251,"Name":"Random Provider Name 251","City":"San  Francisco","State":"CA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":252,"Name":"Random Provider Name 252","City":"BRUNSWICK","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":253,"Name":"Random Provider Name 253","City":"Americus","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":254,"Name":"Random Provider Name 254","City":"ATLANTA","State":"GA","Type":"Provider","Region":"Central","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":255,"Name":"Random Provider Name 255","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":256,"Name":"Random Provider Name 256","City":"Statesboro","State":"GA","Type":"Provider","Region":"Central","County":"Barrow","Amb":"Yes","WCHR":"","Stretcher":""},{"id":257,"Name":"Random Provider Name 257","City":"Winder","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":258,"Name":"Random Provider Name 258","City":"Macon","State":"GA","Type":"Provider","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":259,"Name":"Random Provider Name 259","City":"Mt. Vernon","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"","WCHR":"","Stretcher":"Yes"},{"id":260,"Name":"Random Provider Name 260","City":"Marietta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"","Stretcher":""},{"id":261,"Name":"Random Provider Name 261","City":"AMERICUS","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":262,"Name":"Random Provider Name 262","City":"Valdosta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":263,"Name":"Random Provider Name 263","City":"Thomasville","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":264,"Name":"Random Provider Name 264","City":"Augusta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":265,"Name":"Random Provider Name 265","City":"Dawson","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":266,"Name":"Random Provider Name 266","City":"Augusta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"","Stretcher":""},{"id":267,"Name":"Random Provider Name 267","City":"KISSIMMEE","State":"FL","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":268,"Name":"Random Provider Name 268","City":"COLUMBUS","State":"GA","Type":"Provider","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"","Stretcher":""},{"id":269,"Name":"Random Provider Name 269","City":"Statesboro","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"","Stretcher":""},{"id":270,"Name":"Random Provider Name 270","City":"SWAINSBORO","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":271,"Name":"Random Provider Name 271","City":"Milledgeville","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":272,"Name":"Random Provider Name 272","City":"Hepizibah","State":"GA","Type":"Provider","Region":"SouthWest","County":"Peach","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":273,"Name":"Random Provider Name 273","City":"st johns","State":"FL","Type":"Provider","Region":"Central","County":"Troup","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":274,"Name":"Random Provider Name 274","City":"Byron","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":275,"Name":"Random Provider Name 275","City":"Lagrange","State":"GA","Type":"Provider","Region":"East","County":"burke","Amb":"Yes","WCHR":"","Stretcher":""},{"id":276,"Name":"Random Provider Name 276","City":"RIVERDALE","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":277,"Name":"Random Provider Name 277","City":"Waynesboro","State":"GA","Type":"Provider","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":278,"Name":"Random Provider Name 278","City":"Bogart","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":279,"Name":"Random Provider Name 279","City":"Douglas","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":280,"Name":"Random Provider Name 280","City":"Albany","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":281,"Name":"Random Provider Name 281","City":"Albany","State":"GA","Type":"Provider","Region":"East","County":"Jefferson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":282,"Name":"Random Provider Name 282","City":"STATESBORO","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":283,"Name":"Random Provider Name 283","City":"Wrens","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":284,"Name":"Random Provider Name 284","City":"Smyrna","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"","Stretcher":""},{"id":285,"Name":"Random Provider Name 285","City":"Lithonia","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":286,"Name":"Random Provider Name 286","City":"Americus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":287,"Name":"Random Provider Name 287","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":288,"Name":"Random Provider Name 288","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":289,"Name":"Random Provider Name 289","City":"Bonaire","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":290,"Name":"Random Provider Name 290","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":291,"Name":"Random Provider Name 291","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":292,"Name":"Random Provider Name 292","City":"Thomasville","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":293,"Name":"Random Provider Name 293","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":294,"Name":"Random Provider Name 294","City":"Savannah","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":295,"Name":"Random Provider Name 295","City":"Gorgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":296,"Name":"Random Provider Name 296","City":"Georgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":297,"Name":"Random Provider Name 297","City":"Georgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":298,"Name":"Random Provider Name 298","City":"georgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":299,"Name":"Random Provider Name 299","City":"Georgetown","State":"GA","Type":"Provider","Region":"East","County":"Warren","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":300,"Name":"Random Provider Name 300","City":"Georgetown","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":301,"Name":"Random Provider Name 301","City":"Warrenton","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":302,"Name":"Random Provider Name 302","City":"Atlanta,","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":"Yes"},{"id":303,"Name":"Random Provider Name 303","City":"Augusta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"","Stretcher":""},{"id":304,"Name":"Random Provider Name 304","City":"Roswell","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":305,"Name":"Random Provider Name 305","City":"Valdosta","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":306,"Name":"Random Provider Name 306","City":"Lizella","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":307,"Name":"Random Provider Name 307","City":"Norcross","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":308,"Name":"Random Provider Name 308","City":"Savannah","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":309,"Name":"Random Provider Name 309","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":310,"Name":"Random Provider Name 310","City":"COOLIDGE","State":"GA","Type":"Provider","Region":"East","County":"Jackson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":311,"Name":"Random Provider Name 311","City":"BRUNSWICK","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":312,"Name":"Random Provider Name 312","City":"Jefferson","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"","Stretcher":""},{"id":313,"Name":"Random Provider Name 313","City":"Riverdale","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":314,"Name":"Random Provider Name 314","City":"Stockbridge","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"","Stretcher":""},{"id":315,"Name":"Random Provider Name 315","City":"Augusta","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":316,"Name":"Random Provider Name 316","City":"Fayetteville","State":"GA","Type":"Provider","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":317,"Name":"Random Provider Name 317","City":"Rex","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"","Stretcher":""},{"id":318,"Name":"Random Provider Name 318","City":"Thomson","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"","Stretcher":""},{"id":319,"Name":"Random Provider Name 319","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Wayne","Amb":"Yes","WCHR":"","Stretcher":""},{"id":320,"Name":"Random Provider Name 320","City":"Decatur","State":"GA","Type":"Provider","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":321,"Name":"Random Provider Name 321","City":"JESUP","State":"GA","Type":"Provider","Region":"SouthWest","County":"Talbot","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":322,"Name":"Random Provider Name 322","City":"Greensboro","State":"GA","Type":"Provider","Region":"SouthWest","County":"Taylor","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":323,"Name":"Random Provider Name 323","City":"TALBOTTON","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":324,"Name":"Random Provider Name 324","City":"Butler","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":325,"Name":"Random Provider Name 325","City":"Albany","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":326,"Name":"Random Provider Name 326","City":"Albany","State":"GA","Type":"Provider","Region":"Central","County":"butts","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":327,"Name":"Random Provider Name 327","City":"Montgomery","State":"AL","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"","Stretcher":""},{"id":328,"Name":"Random Provider Name 328","City":"Jenkinsburg","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"","Stretcher":""},{"id":329,"Name":"Random Provider Name 329","City":"Blythewood","State":"SC","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":330,"Name":"Random Provider Name 330","City":"Douglasville","State":"GA","Type":"Provider","Region":"Central","County":"","Amb":"Yes","WCHR":"","Stretcher":""},{"id":331,"Name":"Random Provider Name 331","City":"LITHIA SPRINGS","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":332,"Name":"Random Provider Name 332","City":"Winter Garden","State":"FL","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":333,"Name":"Random Provider Name 333","City":"Midland","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":334,"Name":"Random Provider Name 334","City":"Macon","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":335,"Name":"Random Provider Name 335","City":"STATESBORO","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":336,"Name":"Random Provider Name 336","City":"Sandersville","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":337,"Name":"Random Provider Name 337","City":"McDonough","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":338,"Name":"Random Provider Name 338","City":"Fayetteville","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":339,"Name":"Random Provider Name 339","City":"ATLANTA","State":"GA","Type":"Provider","Region":"East","County":"Ware","Amb":"Yes","WCHR":"","Stretcher":""},{"id":340,"Name":"Random Provider Name 340","City":"Savannah","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"","Stretcher":""},{"id":341,"Name":"Random Provider Name 341","City":"Waycross","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":342,"Name":"Random Provider Name 342","City":"Lawrenceville","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"","Stretcher":"Yes"},{"id":343,"Name":"Random Provider Name 343","City":"SANDERSVILLE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":344,"Name":"Random Provider Name 344","City":"SANDERSVILLE","State":"GA","Type":"Provider","Region":"East","County":"Clayton","Amb":"Yes","WCHR":"","Stretcher":""},{"id":345,"Name":"Random Provider Name 345","City":"COLUMBUS","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":346,"Name":"Random Provider Name 346","City":"Lake City","State":"GA","Type":"Provider","Region":"East","County":"Clay","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":347,"Name":"Random Provider Name 347","City":"Watkinsville","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":348,"Name":"Random Provider Name 348","City":"Bluffton","State":"SC","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":""},{"id":349,"Name":"Random Provider Name 349","City":"Carrollton,","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"","Stretcher":""},{"id":350,"Name":"Random Provider Name 350","City":"Jonesboro","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"","Stretcher":""},{"id":351,"Name":"Random Provider Name 353","City":"Stone Mountain","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":""}];

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

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

/***/ "PK7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: ./components/style.css
var style = __webpack_require__("ETxl");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("dfwq");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./pages/provider_data/Filter.js
var Filter = __webpack_require__("g8K8");

// CONCATENATED MODULE: ./pages/provider_data/providerimport.js











var providerimport_data = __webpack_require__("ErfQ");

var providerimport_ProviderList =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ProviderList, _Component);

  function ProviderList(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ProviderList);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ProviderList).call(this, props));
    _this.state = {
      filters: _this.props.filters
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ProviderList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      fetch("/provider.json").then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return providerimport_data ? this.renderData(providerimport_data) : this.renderLoading();
    }
  }, {
    key: "renderData",
    value: function renderData(data) {
      var filters = this.state.filters;

      if (data && data.length > 0) {
        if (is_array_default()(filters) && filters.length) {
          data = data.filter(Filter["a" /* createFilter */].apply(void 0, Object(toConsumableArray["a" /* default */])(filters)));
        }

        return external_react_default.a.createElement("div", {
          className: "Provider-container"
        }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("table", {
          className: "Provider-table"
        }, external_react_default.a.createElement("tr", null, external_react_default.a.createElement("th", null, "Provider Name"), external_react_default.a.createElement("th", null, "Provider Region"), external_react_default.a.createElement("th", null, "City"), external_react_default.a.createElement("th", null, "County"), external_react_default.a.createElement("th", null, "Ambulatory"), external_react_default.a.createElement("th", null, "Wheelchair"), external_react_default.a.createElement("th", null, "Stretcher")), data.map(function (item) {
          return external_react_default.a.createElement("tr", {
            key: item.id
          }, external_react_default.a.createElement("td", null, item.Name), external_react_default.a.createElement("td", null, item.Region), external_react_default.a.createElement("td", null, item.City), external_react_default.a.createElement("td", null, item.County), external_react_default.a.createElement("td", null, item.Amb), external_react_default.a.createElement("td", null, item.WCHR), external_react_default.a.createElement("td", null, item.Stretcher));
        }))));
      } else {
        return external_react_default.a.createElement("div", null, "No items found");
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return external_react_default.a.createElement("div", null, "Loading...");
    }
  }]);

  return ProviderList;
}(external_react_["Component"]);

Object(defineProperty["a" /* default */])(providerimport_ProviderList, "defaultProps", {
  filters: [{
    property: 'Name',
    value: ''
  }, {
    property: 'Region',
    value: 'East'
  }, {
    property: 'Stretcher',
    value: 'Yes'
  }]
});

/* harmony default export */ var providerimport = (providerimport_ProviderList);
/* render () {
   
    const  {sorter}  = this.state;
 
     if (data && data.length > 0) {
       if (Array.isArray(sorter) && sorter.length) {
         data.sort(createSorter(...sorter));
       }
     }
 
     return (
       
       <div>
                   
         {
           data.map(item => (
             <div key={item.id}>
               <span>{item.id}</span>&nbsp;&nbsp;
               
               <span><a href={`mailto:${item.email}`}>{item.name}</a></span>;&nbsp; 
               <span>{item.company}</span>
             </div>
           ))
         }
       </div>
       
     );
   } 
   }


export default List;*/
// CONCATENATED MODULE: ./pages/providerData.js










var providerData_ProviderData =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ProviderData, _Component);

  function ProviderData() {
    Object(classCallCheck["a" /* default */])(this, ProviderData);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ProviderData).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ProviderData, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "this is data imported from a local json file. It will recreate a tracking spreadsheet I created at one of my jobs."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("b", null, "Filter criteria"), " currently set at \"East Region\" with \"stretcher\" vehicles."), external_react_default.a.createElement("ol", null, external_react_default.a.createElement("b", null, "Things to do:"), external_react_default.a.createElement("li", null, "make filter criteria editable by the user."), external_react_default.a.createElement("li", null, "restrict viewing area of table forcing scroll."))), external_react_default.a.createElement(providerimport, null));
    }
  }]);

  return ProviderData;
}(external_react_["Component"]);

/* harmony default export */ var providerData = __webpack_exports__["default"] = (providerData_ProviderData);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "g8K8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createFilter; });
var doFilter = function doFilter(item, filter) {
  var value = filter.value;

  if (!(value instanceof RegExp)) {
    value = filter.value = new RegExp(value, 'i');
  }

  return value.test(item[filter.property]);
};

var createFilter = function createFilter() {
  for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
    filters[_key] = arguments[_key];
  }

  if (typeof filters[0] === 'string') {
    filters = [{
      property: filters[0],
      value: filters[1]
    }];
  }

  return function (item) {
    return filters.every(function (filter) {
      return doFilter(item, filter);
    });
  };
};



/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ })

/******/ });
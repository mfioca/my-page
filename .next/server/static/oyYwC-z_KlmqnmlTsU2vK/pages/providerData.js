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

module.exports = [{"id":1,"Name":"Random Provider Name 1","Address":"Random Address","City":"HINESVILLE","State":"GA","Type":"Provider","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":2,"Name":"Random Provider Name 2","Address":"Random Address","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":3,"Name":"Random Provider Name 3","Address":"Random Address","City":"Marietta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":4,"Name":"Random Provider Name 4","Address":"Random Address","City":"Hahira","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":5,"Name":"Random Provider Name 5","Address":"Random Address","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":6,"Name":"Random Provider Name 6","Address":"Random Address","City":"Sparks","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":7,"Name":"Random Provider Name 7","Address":"Random Address","City":"Cairo","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":8,"Name":"Random Provider Name 8","Address":"Random Address","City":"Bonaire","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":9,"Name":"Random Provider Name 9","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":10,"Name":"Random Provider Name 10","Address":"Random Address","City":"Dublin","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":11,"Name":"Random Provider Name 11","Address":"Random Address","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":12,"Name":"Random Provider Name 12","Address":"Random Address","City":"Lithonia","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":13,"Name":"Random Provider Name 13","Address":"Random Address","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":14,"Name":"Random Provider Name 14","Address":"Random Address","City":"NAYLOR","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":15,"Name":"Random Provider Name 15","Address":"Random Address","City":"Macon","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":16,"Name":"Random Provider Name 16","Address":"Random Address","City":"McDonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":17,"Name":"Random Provider Name 17","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":18,"Name":"Random Provider Name 18","Address":"Random Address","City":"Lithia Springs","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":19,"Name":"Random Provider Name 19","Address":"Random Address","City":"Royston","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Franklin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":20,"Name":"Random Provider Name 20","Address":"Random Address","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":21,"Name":"Random Provider Name 21","Address":"Random Address","City":"Pooler","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":22,"Name":"Random Provider Name 22","Address":"Random Address","City":"Millen","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Jenkins","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":23,"Name":"Random Provider Name 23","Address":"Random Address","City":"McDonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":24,"Name":"Random Provider Name 24","Address":"Random Address","City":"Lumpkin","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Stewart","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":25,"Name":"Random Provider Name 25","Address":"Random Address","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":26,"Name":"Random Provider Name 26","Address":"Random Address","City":"MARIETTA","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":27,"Name":"Random Provider Name 27","Address":"Random Address","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":28,"Name":"Random Provider Name 28","Address":"Random Address","City":"Sparks","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":29,"Name":"Random Provider Name 29","Address":"Random Address","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":30,"Name":"Random Provider Name 30","Address":"Random Address","City":"Hampton","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":31,"Name":"Random Provider Name 31","Address":"Random Address","City":"Hinesville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":32,"Name":"Random Provider Name 32","Address":"Random Address","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":33,"Name":"Random Provider Name 33","Address":"Random Address","City":"WOODSTOCK","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cherokee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":34,"Name":"Random Provider Name 34","Address":"Random Address","City":"Tennille","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":35,"Name":"Random Provider Name 35","Address":"Random Address","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":36,"Name":"Random Provider Name 36","Address":"Random Address","City":"MCDONOUGH","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":37,"Name":"Random Provider Name 37","Address":"Random Address","City":"Augusta","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":38,"Name":"Random Provider Name 38","Address":"Random Address","City":"Cairo,","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":39,"Name":"Random Provider Name 39","Address":"Random Address","City":"Dublin","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":40,"Name":"Random Provider Name 40","Address":"Random Address","City":"Bloomingdale","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":41,"Name":"Random Provider Name 41","Address":"Random Address","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":42,"Name":"Random Provider Name 42","Address":"Random Address","City":"Quitman","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":43,"Name":"Random Provider Name 43","Address":"Random Address","City":"Warthen","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":44,"Name":"Random Provider Name 44","Address":"Random Address","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":45,"Name":"Random Provider Name 45","Address":"Random Address","City":"MACON","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":46,"Name":"Random Provider Name 46","Address":"Random Address","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":47,"Name":"Random Provider Name 47","Address":"Random Address","City":"Baconton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":48,"Name":"Random Provider Name 48","Address":"Random Address","City":"Hephzibah","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":49,"Name":"Random Provider Name 49","Address":"Random Address","City":"Cairo","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":50,"Name":"Random Provider Name 50","Address":"Random Address","City":"ROCKLEDGE","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":51,"Name":"Random Provider Name 51","Address":"Random Address","City":"Marietta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":52,"Name":"Random Provider Name 52","Address":"Random Address","City":"Jackson","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":53,"Name":"Random Provider Name 53","Address":"Random Address","City":"Atlanta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":54,"Name":"Random Provider Name 54","Address":"Random Address","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":55,"Name":"Random Provider Name 55","Address":"Random Address","City":"ADEL","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":56,"Name":"Random Provider Name 56","Address":"Random Address","City":"Sylvania","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Screven","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":57,"Name":"Random Provider Name 57","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":58,"Name":"Random Provider Name 58","Address":"Random Address","City":"Morven","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":59,"Name":"Random Provider Name 59","Address":"Random Address","City":"Midway","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":60,"Name":"Random Provider Name 60","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":61,"Name":"Random Provider Name 61","Address":"Random Address","City":"Washington","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":62,"Name":"Random Provider Name 62","Address":"Random Address","City":"Washington","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":63,"Name":"Random Provider Name 63","Address":"Random Address","City":"Leesburg","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":64,"Name":"Random Provider Name 64","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":65,"Name":"Random Provider Name 65","Address":"Random Address","City":"Brunswick","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Glynn","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":66,"Name":"Random Provider Name 66","Address":"Random Address","City":"Ellenwood","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":67,"Name":"Random Provider Name 67","Address":"Random Address","City":"Norwood","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":68,"Name":"Random Provider Name 68","Address":"Random Address","City":"Norwood","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":69,"Name":"Random Provider Name 69","Address":"Random Address","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":70,"Name":"Random Provider Name 70","Address":"Random Address","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":71,"Name":"Random Provider Name 71","Address":"Random Address","City":"Warner Robins","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":72,"Name":"Random Provider Name 72","Address":"Random Address","City":"VALDOSTA","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":73,"Name":"Random Provider Name 73","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":74,"Name":"Random Provider Name 74","Address":"Random Address","City":"Warner Robbins","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":75,"Name":"Random Provider Name 75","Address":"Random Address","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":76,"Name":"Random Provider Name 76","Address":"Random Address","City":"Jackson","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":77,"Name":"Random Provider Name 77","Address":"Random Address","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":78,"Name":"Random Provider Name 78","Address":"Random Address","City":"Rochelle","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Wilcox","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":79,"Name":"Random Provider Name 79","Address":"Random Address","City":"Jonesboro","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":80,"Name":"Random Provider Name 80","Address":"Random Address","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":81,"Name":"Random Provider Name 81","Address":"Random Address","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":82,"Name":"Random Provider Name 82","Address":"Random Address","City":"Sandersville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":83,"Name":"Random Provider Name 83","Address":"Random Address","City":"VIDALIA","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":84,"Name":"Random Provider Name 84","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":85,"Name":"Random Provider Name 85","Address":"Random Address","City":"Thomson","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":86,"Name":"Random Provider Name 86","Address":"Random Address","City":"Hahira","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":87,"Name":"Random Provider Name 87","Address":"Random Address","City":"Perry","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":88,"Name":"Random Provider Name 88","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":89,"Name":"Random Provider Name 89","Address":"Random Address","City":"Marietta","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":90,"Name":"Random Provider Name 90","Address":"Random Address","City":"Martinez","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":91,"Name":"Random Provider Name 91","Address":"Random Address","City":"Martinez","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":92,"Name":"Random Provider Name 92","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":93,"Name":"Random Provider Name 93","Address":"Random Address","City":"Tifton","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":94,"Name":"Random Provider Name 94","Address":"Random Address","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":95,"Name":"Random Provider Name 95","Address":"Random Address","City":"Norwood","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":96,"Name":"Random Provider Name 96","Address":"Random Address","City":"Mcdonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":97,"Name":"Random Provider Name 97","Address":"Random Address","City":"Camilla","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":98,"Name":"Random Provider Name 98","Address":"Random Address","City":"Stone Mountain","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":99,"Name":"Random Provider Name 99","Address":"Random Address","City":"Sylvester","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":100,"Name":"Random Provider Name 100","Address":"Random Address","City":"Swainsboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":101,"Name":"Random Provider Name 101","Address":"Random Address","City":"Warrenton","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":102,"Name":"Random Provider Name 102","Address":"Random Address","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":103,"Name":"Random Provider Name 103","Address":"Random Address","City":"Fitzgerald","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Benn Hill","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":104,"Name":"Random Provider Name 104","Address":"Random Address","City":"warner robins","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":105,"Name":"Random Provider Name 105","Address":"Random Address","City":"Camilla","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":106,"Name":"Random Provider Name 106","Address":"Random Address","City":"Decatur","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":107,"Name":"Random Provider Name 107","Address":"Random Address","City":"AUGUSTA","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":108,"Name":"Random Provider Name 108","Address":"Random Address","City":"Waynesboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":109,"Name":"Random Provider Name 109","Address":"Random Address","City":"Albany","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":110,"Name":"Random Provider Name 110","Address":"Random Address","City":"Swainsboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":111,"Name":"Random Provider Name 111","Address":"Random Address","City":"Swainsboro","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":112,"Name":"Random Provider Name 112","Address":"Random Address","City":"Hinesville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":113,"Name":"Random Provider Name 113","Address":"Random Address","City":"mcdonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":114,"Name":"Random Provider Name 114","Address":"Random Address","City":"Hull","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Madison","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":115,"Name":"Random Provider Name 115","Address":"Random Address","City":"Dawson","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":116,"Name":"Random Provider Name 116","Address":"Random Address","City":"Rockledge","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":117,"Name":"Random Provider Name 117","Address":"Random Address","City":"Lake Park","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":118,"Name":"Random Provider Name 118","Address":"Random Address","City":"MT VERNON","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":119,"Name":"Random Provider Name 119","Address":"Random Address","City":"Pelham","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":120,"Name":"Random Provider Name 120","Address":"Random Address","City":"College Park","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":121,"Name":"Random Provider Name 121","Address":"Random Address","City":"Lake Park","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":122,"Name":"Random Provider Name 122","Address":"Random Address","City":"Lake Park","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":123,"Name":"Random Provider Name 123","Address":"Random Address","City":"Rincon","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":124,"Name":"Random Provider Name 124","Address":"Random Address","City":"CARROLLTON","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":125,"Name":"Random Provider Name 125","Address":"Random Address","City":"Waycross","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":126,"Name":"Random Provider Name 126","Address":"Random Address","City":"Cordele","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":127,"Name":"Random Provider Name 127","Address":"Random Address","City":"Camilla","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":128,"Name":"Random Provider Name 128","Address":"Random Address","City":"Metter","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Candler","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":129,"Name":"Random Provider Name 129","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":130,"Name":"Random Provider Name 130","Address":"Random Address","City":"ALBANY","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":131,"Name":"Random Provider Name 131","Address":"Random Address","City":"Columbus","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":132,"Name":"Random Provider Name 132","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":133,"Name":"Random Provider Name 133","Address":"Random Address","City":"Adel","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":134,"Name":"Random Provider Name 134","Address":"Random Address","City":"Adel","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":135,"Name":"Random Provider Name 135","Address":"Random Address","City":"McDonough","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":136,"Name":"Random Provider Name 136","Address":"Random Address","City":"Adel","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":137,"Name":"Random Provider Name 137","Address":"Random Address","City":"Cartersville","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":138,"Name":"Random Provider Name 138","Address":"Random Address","City":"Cartersville","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":139,"Name":"Random Provider Name 139","Address":"Random Address","City":"Keysville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":140,"Name":"Random Provider Name 140","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":141,"Name":"Random Provider Name 141","Address":"Random Address","City":"WAYCROSS","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":142,"Name":"Random Provider Name 142","Address":"Random Address","City":"Sandersville","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":143,"Name":"Random Provider Name 143","Address":"Random Address","City":"Augusta","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":144,"Name":"Random Provider Name 144","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":145,"Name":"Random Provider Name 145","Address":"Random Address","City":"Tignall","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":146,"Name":"Random Provider Name 146","Address":"Random Address","City":"Hephzibah","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":147,"Name":"Random Provider Name 147","Address":"Random Address","City":"Cairo","State":"GA","Type":"Volunteer Driver","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":148,"Name":"Random Provider Name 148","Address":"Random Address","City":"Stone Mountain","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":149,"Name":"Random Provider Name 149","Address":"Random Address","City":"Douglasville","State":"GA","Type":"Volunteer Driver","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":150,"Name":"Random Provider Name 150","Address":"Random Address","City":"Warrenton","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":151,"Name":"Random Provider Name 151","Address":"Random Address","City":"Naylor","State":"GA","Type":"Volunteer Driver","Region":"East","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":152,"Name":"Random Provider Name 152","Address":"Random Address","City":"Sandersville","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":153,"Name":"Random Provider Name 153","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"East","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":154,"Name":"Random Provider Name 154","Address":"Random Address","City":"Lithonia","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":155,"Name":"Random Provider Name 155","Address":"Random Address","City":"Savannah","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":156,"Name":"Random Provider Name 156","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":157,"Name":"Random Provider Name 157","Address":"Random Address","City":"Dixie","State":"GA","Type":"Provider","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":158,"Name":"Random Provider Name 158","Address":"Random Address","City":"Macon","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":159,"Name":"Random Provider Name 159","Address":"Random Address","City":"Macon","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":160,"Name":"Random Provider Name 160","Address":"Random Address","City":"Ellenwood","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":161,"Name":"Random Provider Name 161","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":162,"Name":"Random Provider Name 162","Address":"Random Address","City":"Dacula","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":163,"Name":"Random Provider Name 163","Address":"Random Address","City":"Decatur","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":164,"Name":"Random Provider Name 164","Address":"Random Address","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":165,"Name":"Random Provider Name 165","Address":"Random Address","City":"Fayetteville","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":166,"Name":"Random Provider Name 166","Address":"Random Address","City":"Dawson","State":"GA","Type":"Provider","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":167,"Name":"Random Provider Name 167","Address":"Random Address","City":"Villa Rica","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":168,"Name":"Random Provider Name 168","Address":"Random Address","City":"THOMASVILLE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":169,"Name":"Random Provider Name 169","Address":"Random Address","City":"Norcross","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":170,"Name":"Random Provider Name 170","Address":"Random Address","City":"Union City","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":171,"Name":"Random Provider Name 171","Address":"Random Address","City":"Stephens","State":"GA","Type":"Provider","Region":"Central","County":"Oglethorpe","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":172,"Name":"Random Provider Name 172","Address":"Random Address","City":"WAYNESBORO","State":"GA","Type":"Provider","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":173,"Name":"Random Provider Name 173","Address":"Random Address","City":"WAYNESBORO","State":"GA","Type":"Provider","Region":"East","County":"Burke","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":174,"Name":"Random Provider Name 174","Address":"Random Address","City":"Douglas","State":"GA","Type":"Provider","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":175,"Name":"Random Provider Name 175","Address":"Random Address","City":"Hephzibah","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":176,"Name":"Random Provider Name 176","Address":"Random Address","City":"N. Augusta","State":"SC","Type":"Provider","Region":"East","County":"Richmond","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":177,"Name":"Random Provider Name 177","Address":"Random Address","City":"Bonaire","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":178,"Name":"Random Provider Name 178","Address":"Random Address","City":"Watkinsville","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":179,"Name":"Random Provider Name 179","Address":"Random Address","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":180,"Name":"Random Provider Name 180","Address":"Random Address","City":"Temple","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":181,"Name":"Random Provider Name 181","Address":"Random Address","City":"Stone Mountain","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":182,"Name":"Random Provider Name 182","Address":"Random Address","City":"Milledgeville","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":183,"Name":"Random Provider Name 183","Address":"Random Address","City":"Forest Park","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":184,"Name":"Random Provider Name 184","Address":"Random Address","City":"Decatur","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":185,"Name":"Random Provider Name 185","Address":"Random Address","City":"Jonesboro","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":186,"Name":"Random Provider Name 186","Address":"Random Address","City":"Jonesboro","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":187,"Name":"Random Provider Name 187","Address":"Random Address","City":"RIVERDALE","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":188,"Name":"Random Provider Name 188","Address":"Random Address","City":"Lawrenceville","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":189,"Name":"Random Provider Name 189","Address":"Random Address","City":"Milledgeville","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":190,"Name":"Random Provider Name 190","Address":"Random Address","City":"MOULTRIE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Colquitt","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":191,"Name":"Random Provider Name 191","Address":"Random Address","City":"Cartersville","State":"GA","Type":"Provider","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":192,"Name":"Random Provider Name 192","Address":"Random Address","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":193,"Name":"Random Provider Name 193","Address":"Random Address","City":"Sylvester","State":"GA","Type":"Provider","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":194,"Name":"Random Provider Name 194","Address":"Random Address","City":"Sandersville","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":195,"Name":"Random Provider Name 195","Address":"Random Address","City":"Tucker","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":196,"Name":"Random Provider Name 196","Address":"Random Address","City":"CORDELE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":197,"Name":"Random Provider Name 197","Address":"Random Address","City":"DUBLIN","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":198,"Name":"Random Provider Name 198","Address":"Random Address","City":"Hephzibah","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":199,"Name":"Random Provider Name 199","Address":"Random Address","City":"Guyton","State":"GA","Type":"Provider","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":200,"Name":"Random Provider Name 200","Address":"Random Address","City":"Douglasville","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":201,"Name":"Random Provider Name 201","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":202,"Name":"Random Provider Name 202","Address":"Random Address","City":"Dublin","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":203,"Name":"Random Provider Name 203","Address":"Random Address","City":"Iron City","State":"GA","Type":"Provider","Region":"SouthWest","County":"Seminole ","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":204,"Name":"Random Provider Name 204","Address":"Random Address","City":"HINESVILLE","State":"GA","Type":"Provider","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":205,"Name":"Random Provider Name 205","Address":"Random Address","City":"Leesburg","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":206,"Name":"Random Provider Name 206","Address":"Random Address","City":"Savannah","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":207,"Name":"Random Provider Name 207","Address":"Random Address","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":208,"Name":"Random Provider Name 208","Address":"Random Address","City":"Covington","State":"GA","Type":"Provider","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":209,"Name":"Random Provider Name 209","Address":"Random Address","City":"Madison","State":"AL","Type":"Provider","Region":"SouthWest","County":"N/A","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":210,"Name":"Random Provider Name 210","Address":"Random Address","City":"Macon","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":211,"Name":"Random Provider Name 211","Address":"Random Address","City":"SWAINSBORO","State":"GA","Type":"Provider","Region":"East","County":"Emanuel","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":212,"Name":"Random Provider Name 212","Address":"Random Address","City":"Lawrenceville","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":213,"Name":"Random Provider Name 213","Address":"Random Address","City":"Warner Robins","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":214,"Name":"Random Provider Name 214","Address":"Random Address","City":"Greensboro","State":"GA","Type":"Provider","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":215,"Name":"Random Provider Name 215","Address":"Random Address","City":"Thomson","State":"GA","Type":"Provider","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":216,"Name":"Random Provider Name 216","Address":"Random Address","City":"Conyers","State":"GA","Type":"Provider","Region":"Central","County":"Rockdale","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":217,"Name":"Random Provider Name 217","Address":"Random Address","City":"Stockbridge","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":218,"Name":"Random Provider Name 218","Address":"Random Address","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":219,"Name":"Random Provider Name 219","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":220,"Name":"Random Provider Name 220","Address":"Random Address","City":"Kite","State":"GA","Type":"Provider","Region":"East","County":"Johnson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":221,"Name":"Random Provider Name 221","Address":"Random Address","City":"Lyons","State":"GA","Type":"Provider","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":222,"Name":"Random Provider Name 222","Address":"Random Address","City":"HAWKINSVILLE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Pulaski ","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":223,"Name":"Random Provider Name 223","Address":"Random Address","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":224,"Name":"Random Provider Name 224","Address":"Random Address","City":"Baxley","State":"GA","Type":"Provider","Region":"East","County":"Appling","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":225,"Name":"Random Provider Name 225","Address":"Random Address","City":"McDonough","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":226,"Name":"Random Provider Name 226","Address":"Random Address","City":"Dallas","State":"GA","Type":"Provider","Region":"Central","County":"Paulding","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":227,"Name":"Random Provider Name 227","Address":"Random Address","City":"ALBANY","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":228,"Name":"Random Provider Name 228","Address":"Random Address","City":"Eastman","State":"GA","Type":"Provider","Region":"Central","County":"Dodge","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":229,"Name":"Random Provider Name 229","Address":"Random Address","City":"College Park","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":230,"Name":"Random Provider Name 230","Address":"Random Address","City":"Union City","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":231,"Name":"Random Provider Name 231","Address":"Random Address","City":"SPARTA","State":"GA","Type":"Provider","Region":"East","County":"Hancock","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":232,"Name":"Random Provider Name 232","Address":"Random Address","City":"Cochran","State":"GA","Type":"Provider","Region":"Central","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":233,"Name":"Random Provider Name 233","Address":"Random Address","City":"Kathleen","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":234,"Name":"Random Provider Name 234","Address":"Random Address","City":"Covington","State":"GA","Type":"Provider","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":235,"Name":"Random Provider Name 235","Address":"Random Address","City":"Savannah","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":236,"Name":"Random Provider Name 236","Address":"Random Address","City":"TIFTON","State":"GA","Type":"Provider","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":237,"Name":"Random Provider Name 237","Address":"Random Address","City":"WASHINGTON","State":"GA","Type":"Provider","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":238,"Name":"Random Provider Name 238","Address":"Random Address","City":"Brunswick","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":239,"Name":"Random Provider Name 239","Address":"Random Address","City":"Americus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":240,"Name":"Random Provider Name 240","Address":"Random Address","City":"Rentz","State":"GA","Type":"Provider","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":241,"Name":"Random Provider Name 241","Address":"Random Address","City":"Uvalda","State":"GA","Type":"Provider","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":242,"Name":"Random Provider Name 242","Address":"Random Address","City":"SALEM","State":"AL","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":243,"Name":"Random Provider Name 243","Address":"Random Address","City":"Brunswick","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":244,"Name":"Random Provider Name 244","Address":"Random Address","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":245,"Name":"Random Provider Name 245","Address":"Random Address","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":246,"Name":"Random Provider Name 246","Address":"Random Address","City":"Tifton","State":"GA","Type":"Provider","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":247,"Name":"Random Provider Name 247","Address":"Random Address","City":"Ellenwood","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":248,"Name":"Random Provider Name 248","Address":"Random Address","City":"Atlanta","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":249,"Name":"Random Provider Name 249","Address":"Random Address","City":"Columbus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":250,"Name":"Random Provider Name 250","Address":"Random Address","City":"Waycross","State":"GA","Type":"Provider","Region":"East","County":"Ware","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":251,"Name":"Random Provider Name 251","Address":"Random Address","City":"San  Francisco","State":"CA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":252,"Name":"Random Provider Name 252","Address":"Random Address","City":"BRUNSWICK","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":253,"Name":"Random Provider Name 253","Address":"Random Address","City":"Americus","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":254,"Name":"Random Provider Name 254","Address":"Random Address","City":"ATLANTA","State":"GA","Type":"Provider","Region":"Central","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":255,"Name":"Random Provider Name 255","Address":"Random Address","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":256,"Name":"Random Provider Name 256","Address":"Random Address","City":"Statesboro","State":"GA","Type":"Provider","Region":"Central","County":"Barrow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":257,"Name":"Random Provider Name 257","Address":"Random Address","City":"Winder","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":258,"Name":"Random Provider Name 258","Address":"Random Address","City":"Macon","State":"GA","Type":"Provider","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":259,"Name":"Random Provider Name 259","Address":"Random Address","City":"Mt. Vernon","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":260,"Name":"Random Provider Name 260","Address":"Random Address","City":"Marietta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":261,"Name":"Random Provider Name 261","Address":"Random Address","City":"AMERICUS","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":262,"Name":"Random Provider Name 262","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":263,"Name":"Random Provider Name 263","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":264,"Name":"Random Provider Name 264","Address":"Random Address","City":"Augusta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":265,"Name":"Random Provider Name 265","Address":"Random Address","City":"Dawson","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":266,"Name":"Random Provider Name 266","Address":"Random Address","City":"Augusta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":267,"Name":"Random Provider Name 267","Address":"Random Address","City":"KISSIMMEE","State":"FL","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":268,"Name":"Random Provider Name 268","Address":"Random Address","City":"COLUMBUS","State":"GA","Type":"Provider","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":269,"Name":"Random Provider Name 269","Address":"Random Address","City":"Statesboro","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":270,"Name":"Random Provider Name 270","Address":"Random Address","City":"SWAINSBORO","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":271,"Name":"Random Provider Name 271","Address":"Random Address","City":"Milledgeville","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":272,"Name":"Random Provider Name 272","Address":"Random Address","City":"Hepizibah","State":"GA","Type":"Provider","Region":"SouthWest","County":"Peach","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":273,"Name":"Random Provider Name 273","Address":"Random Address","City":"st johns","State":"FL","Type":"Provider","Region":"Central","County":"Troup","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":274,"Name":"Random Provider Name 274","Address":"Random Address","City":"Byron","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":275,"Name":"Random Provider Name 275","Address":"Random Address","City":"Lagrange","State":"GA","Type":"Provider","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":276,"Name":"Random Provider Name 276","Address":"Random Address","City":"RIVERDALE","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":277,"Name":"Random Provider Name 277","Address":"Random Address","City":"Waynesboro","State":"GA","Type":"Provider","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":278,"Name":"Random Provider Name 278","Address":"Random Address","City":"Bogart","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":279,"Name":"Random Provider Name 279","Address":"Random Address","City":"Douglas","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":280,"Name":"Random Provider Name 280","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":281,"Name":"Random Provider Name 281","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"East","County":"Jefferson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":282,"Name":"Random Provider Name 282","Address":"Random Address","City":"STATESBORO","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":283,"Name":"Random Provider Name 283","Address":"Random Address","City":"Wrens","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":284,"Name":"Random Provider Name 284","Address":"Random Address","City":"Smyrna","State":"GA","Type":"Provider","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":285,"Name":"Random Provider Name 285","Address":"Random Address","City":"Lithonia","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":286,"Name":"Random Provider Name 286","Address":"Random Address","City":"Americus","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":287,"Name":"Random Provider Name 287","Address":"Random Address","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":288,"Name":"Random Provider Name 288","Address":"Random Address","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":289,"Name":"Random Provider Name 289","Address":"Random Address","City":"Bonaire","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":290,"Name":"Random Provider Name 290","Address":"Random Address","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":291,"Name":"Random Provider Name 291","Address":"Random Address","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":292,"Name":"Random Provider Name 292","Address":"Random Address","City":"Thomasville","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":293,"Name":"Random Provider Name 293","Address":"Random Address","City":"Cochran","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":294,"Name":"Random Provider Name 294","Address":"Random Address","City":"Savannah","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":295,"Name":"Random Provider Name 295","Address":"Random Address","City":"Gorgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":296,"Name":"Random Provider Name 296","Address":"Random Address","City":"Georgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":297,"Name":"Random Provider Name 297","Address":"Random Address","City":"Georgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":298,"Name":"Random Provider Name 298","Address":"Random Address","City":"georgetown","State":"GA","Type":"Provider","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":299,"Name":"Random Provider Name 299","Address":"Random Address","City":"Georgetown","State":"GA","Type":"Provider","Region":"East","County":"Warren","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":300,"Name":"Random Provider Name 300","Address":"Random Address","City":"Georgetown","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":301,"Name":"Random Provider Name 301","Address":"Random Address","City":"Warrenton","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":302,"Name":"Random Provider Name 302","Address":"Random Address","City":"Atlanta,","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":303,"Name":"Random Provider Name 303","Address":"Random Address","City":"Augusta","State":"GA","Type":"Provider","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":304,"Name":"Random Provider Name 304","Address":"Random Address","City":"Roswell","State":"GA","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":305,"Name":"Random Provider Name 305","Address":"Random Address","City":"Valdosta","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":306,"Name":"Random Provider Name 306","Address":"Random Address","City":"Lizella","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":307,"Name":"Random Provider Name 307","Address":"Random Address","City":"Norcross","State":"GA","Type":"Provider","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":308,"Name":"Random Provider Name 308","Address":"Random Address","City":"Savannah","State":"GA","Type":"Provider","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":309,"Name":"Random Provider Name 309","Address":"Random Address","City":"Athens","State":"GA","Type":"Provider","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":310,"Name":"Random Provider Name 310","Address":"Random Address","City":"COOLIDGE","State":"GA","Type":"Provider","Region":"East","County":"Jackson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":311,"Name":"Random Provider Name 311","Address":"Random Address","City":"BRUNSWICK","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":312,"Name":"Random Provider Name 312","Address":"Random Address","City":"Jefferson","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":313,"Name":"Random Provider Name 313","Address":"Random Address","City":"Riverdale","State":"GA","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":314,"Name":"Random Provider Name 314","Address":"Random Address","City":"Stockbridge","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":315,"Name":"Random Provider Name 315","Address":"Random Address","City":"Augusta","State":"GA","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":316,"Name":"Random Provider Name 316","Address":"Random Address","City":"Fayetteville","State":"GA","Type":"Provider","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":317,"Name":"Random Provider Name 317","Address":"Random Address","City":"Rex","State":"GA","Type":"Provider","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":318,"Name":"Random Provider Name 318","Address":"Random Address","City":"Thomson","State":"GA","Type":"Provider","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":319,"Name":"Random Provider Name 319","Address":"Random Address","City":"Newnan","State":"GA","Type":"Provider","Region":"Central","County":"Wayne","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":320,"Name":"Random Provider Name 320","Address":"Random Address","City":"Decatur","State":"GA","Type":"Provider","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":321,"Name":"Random Provider Name 321","Address":"Random Address","City":"JESUP","State":"GA","Type":"Provider","Region":"SouthWest","County":"Talbot","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":322,"Name":"Random Provider Name 322","Address":"Random Address","City":"Greensboro","State":"GA","Type":"Provider","Region":"SouthWest","County":"Taylor","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":323,"Name":"Random Provider Name 323","Address":"Random Address","City":"TALBOTTON","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":324,"Name":"Random Provider Name 324","Address":"Random Address","City":"Butler","State":"GA","Type":"Provider","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":325,"Name":"Random Provider Name 325","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":326,"Name":"Random Provider Name 326","Address":"Random Address","City":"Albany","State":"GA","Type":"Provider","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":327,"Name":"Random Provider Name 327","Address":"Random Address","City":"Montgomery","State":"AL","Type":"Provider","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":328,"Name":"Random Provider Name 328","Address":"Random Address","City":"Jenkinsburg","State":"GA","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":329,"Name":"Random Provider Name 329","Address":"Random Address","City":"Blythewood","State":"SC","Type":"Provider","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":330,"Name":"Random Provider Name 330","Address":"Random Address","City":"Douglasville","State":"GA","Type":"Provider","Region":"Central","County":"N/a","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":331,"Name":"Random Provider Name 331","Address":"Random Address","City":"LITHIA SPRINGS","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":332,"Name":"Random Provider Name 332","Address":"Random Address","City":"Winter Garden","State":"FL","Type":"Provider","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":333,"Name":"Random Provider Name 333","Address":"Random Address","City":"Midland","State":"GA","Type":"Provider","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":334,"Name":"Random Provider Name 334","Address":"Random Address","City":"Macon","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":335,"Name":"Random Provider Name 335","Address":"Random Address","City":"STATESBORO","State":"GA","Type":"Provider","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":336,"Name":"Random Provider Name 336","Address":"Random Address","City":"Sandersville","State":"GA","Type":"Provider","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":337,"Name":"Random Provider Name 337","Address":"Random Address","City":"McDonough","State":"GA","Type":"Provider","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":338,"Name":"Random Provider Name 338","Address":"Random Address","City":"Fayetteville","State":"GA","Type":"Provider","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":339,"Name":"Random Provider Name 339","Address":"Random Address","City":"ATLANTA","State":"GA","Type":"Provider","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":340,"Name":"Random Provider Name 340","Address":"Random Address","City":"Savannah","State":"GA","Type":"Provider","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":341,"Name":"Random Provider Name 341","Address":"Random Address","City":"Waycross","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":342,"Name":"Random Provider Name 342","Address":"Random Address","City":"Lawrenceville","State":"GA","Type":"Provider","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":343,"Name":"Random Provider Name 343","Address":"Random Address","City":"SANDERSVILLE","State":"GA","Type":"Provider","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":344,"Name":"Random Provider Name 344","Address":"Random Address","City":"SANDERSVILLE","State":"GA","Type":"Provider","Region":"East","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":345,"Name":"Random Provider Name 345","Address":"Random Address","City":"COLUMBUS","State":"GA","Type":"Provider","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":346,"Name":"Random Provider Name 346","Address":"Random Address","City":"Lake City","State":"GA","Type":"Provider","Region":"East","County":"Clay","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":347,"Name":"Random Provider Name 347","Address":"Random Address","City":"Watkinsville","State":"GA","Type":"Provider","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":348,"Name":"Random Provider Name 348","Address":"Random Address","City":"Bluffton","State":"SC","Type":"Provider","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":349,"Name":"Random Provider Name 349","Address":"Random Address","City":"Carrollton,","State":"GA","Type":"Provider","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":350,"Name":"Random Provider Name 350","Address":"Random Address","City":"Jonesboro","State":"GA","Type":"Provider","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":351,"Name":"Random Provider Name 353","Address":"Random Address","City":"Stone Mountain","State":"GA","Type":"Provider","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"}];

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./pages/provider_data/Filter.js
var Filter = __webpack_require__("g8K8");

// EXTERNAL MODULE: ./pages/provider_data/sort.js
var sort = __webpack_require__("ipCe");

// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__("a/h4");
var external_react_table_default = /*#__PURE__*/__webpack_require__.n(external_react_table_);

// EXTERNAL MODULE: ./node_modules/react-table/react-table.css
var react_table = __webpack_require__("qBGJ");

// CONCATENATED MODULE: ./pages/provider_data/providerimport.js












var providerimport_data = __webpack_require__("ErfQ");

function filterCaseInsensitive(filter, row) {
  var id = filter.pivotId || filter.id;
  return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
}

var providerimport_customFilter = function customFilter(_ref) {
  var fieldName = _ref.fieldName,
      filter = _ref.filter,
      _onChange = _ref.onChange;
  return external_react_default.a.createElement("select", {
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    style: {
      width: "100%"
    },
    value: filter ? filter.value : ''
  }, external_react_default.a.createElement("option", {
    value: ""
  }, "Show All"), providerimport_data.map(function (item) {
    return item[fieldName];
  }).filter(function (item, i, s) {
    return s.lastIndexOf(item) == i;
  }).map(function (value) {
    return external_react_default.a.createElement("option", {
      key: value,
      value: value
    }, value);
  }));
};

var providerimport_ProviderList =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ProviderList, _Component);

  function ProviderList(props) {
    Object(classCallCheck["a" /* default */])(this, ProviderList);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ProviderList).call(this, props));
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
      var _ref8;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_table_default.a, {
        className: "Provider-table -striped -highlight",
        data: data,
        defaultPageSize: 20,
        style: {
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room

        },
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          return filterCaseInsensitive(filter, row);
        },
        columns: [{
          Header: "Provider",
          columns: [{
            Header: "Name",
            accessor: "Name",
            sortMethod: function sortMethod(a, b) {
              if (a.length === b.length) {
                return a > b ? 1 : -1;
              }

              return a.length > b.length ? 1 : -1;
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
              return providerimport_customFilter({
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
            Filter: function Filter(_ref3) {
              var filter = _ref3.filter,
                  onChange = _ref3.onChange;
              return providerimport_customFilter({
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
            Filter: function Filter(_ref4) {
              var filter = _ref4.filter,
                  onChange = _ref4.onChange;
              return providerimport_customFilter({
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
            Filter: function Filter(_ref5) {
              var filter = _ref5.filter,
                  onChange = _ref5.onChange;
              return providerimport_customFilter({
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
            Filter: function Filter(_ref6) {
              var filter = _ref6.filter,
                  onChange = _ref6.onChange;
              return providerimport_customFilter({
                fieldName: 'WCHR',
                filter: filter,
                onChange: onChange
              });
            }
          }, (_ref8 = {
            Header: "Stretcher",
            id: "Stretcher",
            accessor: function accessor(d) {
              return d.Stretcher;
            }
          }, Object(defineProperty["a" /* default */])(_ref8, "accessor", function accessor(d) {
            return d.WCHR;
          }), Object(defineProperty["a" /* default */])(_ref8, "filterMethod", function filterMethod(filter, row) {
            return row[filter.id] === filter.value;
          }), Object(defineProperty["a" /* default */])(_ref8, "Filter", function Filter(_ref7) {
            var filter = _ref7.filter,
                onChange = _ref7.onChange;
            return providerimport_customFilter({
              fieldName: 'Stretcher',
              filter: filter,
              onChange: onChange
            });
          }), _ref8)]
        }]
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return external_react_default.a.createElement("div", null, "Loading...");
    }
  }]);

  return ProviderList;
}(external_react_["Component"]);

/* harmony default export */ var providerimport = (providerimport_ProviderList);
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
      return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "this is data imported from a local json file. It will recreate a tracking spreadsheet I created at one of my jobs."), external_react_default.a.createElement("p", null, "I used react-table dependency to build the data table. Altering formatting to match my spreadsheet."), external_react_default.a.createElement("ol", null, external_react_default.a.createElement("b", null, "Things to do:"), external_react_default.a.createElement("li", null, "see if you can change react-tables css for custom styling"), external_react_default.a.createElement("li", null, "double check json file for consistency"))), external_react_default.a.createElement(providerimport, null));
    }
  }]);

  return ProviderData;
}(external_react_["Component"]);

/* harmony default export */ var providerData = __webpack_exports__["default"] = (providerData_ProviderData);

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g8K8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createFilter */
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

/***/ "ipCe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSorter", function() { return createSorter; });
var dirMap = {
  // greater-than
  gt: {
    asc: 1,
    desc: -1
  },
  // less-than
  lt: {
    asc: -1,
    desc: 1
  }
};

var doSort = function doSort(A, B, property) {
  var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ASC';
  var a = A[property];
  var b = B[property];

  if (a < b) {
    return dirMap.lt[direction.toLowerCase()];
  }

  if (a > b) {
    return dirMap.gt[direction.toLowerCase()];
  }

  return 0;
};

var createSorter = function createSorter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'string') {
    args = [{
      direction: args[1],
      property: args[0]
    }];
  }

  return function (A, B) {
    var ret = 0;
    args.some(function (sorter) {
      var property = sorter.property,
          _sorter$direction = sorter.direction,
          direction = _sorter$direction === void 0 ? 'ASC' : _sorter$direction;
      var value = doSort(A, B, property, direction);

      if (value === 0) {
        // they are equal, continue to next sorter if any
        return false;
      } else {
        // they are different, stop at current sorter
        ret = value;
        return true;
      }
    });
    return ret;
  };
};



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "qBGJ":
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
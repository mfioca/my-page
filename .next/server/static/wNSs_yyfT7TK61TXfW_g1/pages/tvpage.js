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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xH9E");


/***/ }),

/***/ "7p7w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Pointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TabStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeCardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ImageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TvpageStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DandDStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tplist; });
/* **************** 
*   Styles       * 
******************/
const Pointer = {
  cursor: 'pointer'
};
const TabStyle = {
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px',
  marginBottom: '20px'
};
const HomeCardStyle = {
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
const ImageStyles = {
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
const TvpageStyle = {
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
const DandDStyle = {
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
const Tplist = {
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

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/Header.js
var __jsx = external_react_default.a.createElement;



class Header_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return __jsx(external_reactstrap_["Navbar"], {
      color: "dark",
      className: "h4",
      dark: true,
      expand: "md"
    }, __jsx(external_reactstrap_["NavbarToggler"], {
      onClick: this.toggle
    }), __jsx(external_reactstrap_["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true
    }, __jsx(external_reactstrap_["Nav"], {
      className: "ml-auto",
      navbar: true
    }, __jsx(external_reactstrap_["NavItem"], null, __jsx(external_reactstrap_["NavLink"], {
      href: "/"
    }, "Home")), __jsx(external_reactstrap_["NavItem"], null, __jsx(external_reactstrap_["NavLink"], {
      href: "/about"
    }, "About")), __jsx(external_reactstrap_["UncontrolledDropdown"], {
      nav: true,
      inNavbar: true
    }, __jsx(external_reactstrap_["DropdownToggle"], {
      nav: true,
      caret: true
    }, "Projects"), __jsx(external_reactstrap_["DropdownMenu"], {
      right: true,
      className: "bg-dark"
    }, __jsx(external_reactstrap_["Button"], {
      className: "btn-dark w-100",
      href: "/tvpage"
    }, "TvMaze"), __jsx(external_reactstrap_["Button"], {
      className: "btn-dark w-100",
      href: "/DandDpage"
    }, "DandD"), __jsx(external_reactstrap_["Button"], {
      className: "btn-dark w-100",
      href: "/providerData"
    }, "Provider List"))))));
  }

}

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;




class Footer_Footer extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return Footer_jsx(external_reactstrap_["Navbar"], {
      color: "dark",
      dark: true,
      expand: "md"
    }, Footer_jsx(external_reactstrap_["NavbarToggler"], {
      onClick: this.toggle
    }), Footer_jsx(external_reactstrap_["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true
    }, Footer_jsx(external_reactstrap_["Nav"], {
      navbar: true,
      className: "h4"
    }, Footer_jsx(external_reactstrap_["NavItem"], null, Footer_jsx(external_reactstrap_["NavLink"], {
      href: "https://www.linkedin.com/in/mark-fioca/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "LinkedIn")), Footer_jsx(external_reactstrap_["NavItem"], null, Footer_jsx(external_reactstrap_["NavLink"], {
      href: "https://www.deviantart.com/franknmullet/art/Skyrim-Theme-1-0-651760185",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "DeviantArt")), Footer_jsx(external_reactstrap_["NavItem"], null, Footer_jsx(external_reactstrap_["NavLink"], {
      href: "https://github.com/mfioca/my-page",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "GitHub"))), Footer_jsx(external_reactstrap_["Nav"], {
      className: "ml-auto h4",
      navbar: true
    }, Footer_jsx(external_reactstrap_["NavItem"], null, Footer_jsx(external_reactstrap_["NavLink"], {
      href: "mailto: mark@fioca.com"
    }, "Email")))));
  }

}

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });

var layout_jsx = external_react_default.a.createElement;



const Bodystyle = {
  minHeight: '100vh',
  maxWidth: '98%',
  marginRight: 'auto',
  marginLeft: 'auto'
};
function Layout(props) {
  return layout_jsx("div", null, layout_jsx(components_Header, null), layout_jsx("div", {
    style: Bodystyle
  }, props.children), layout_jsx(components_Footer, null));
}

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GsEv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("luDK");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Hk3D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BackgroundDanger */
/* unused harmony export BackgroundWarning */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return NewTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CenterFlexWrapDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LeftFlexWrapDiv; });
/* unused harmony export TvMazeHeader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TvMazePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TvPostInfoLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return TvPostInfoValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TplistHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return InfoField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DateCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TvMazeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CustomTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HomeCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CustomJumbo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ThreeColumnCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CharacterSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AttackSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AttackStatusDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return NameForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jsxstyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7p7w");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* **************** 
*   Imports       * 
******************/





/* *********************************
*   Export styled components       * 
***********************************/

function BackgroundDanger(props) {
  return __jsx("span", {
    className: "bg-danger text-white"
  }, props.children);
}
function BackgroundWarning(props) {
  return __jsx("span", {
    className: "bg-warning text-white"
  }, props.children);
}
function NewTabLink(props) {
  return __jsx("a", {
    className: props.Style,
    href: props.Link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: props.Title
  }, props.children);
} //used in home page, attacksim

function CenterFlexWrapDiv(props) {
  return __jsx("div", {
    className: "d-flex flex-wrap justify-content-center"
  }, props.children);
} //used in tvpost, tvpage

function LeftFlexWrapDiv(props) {
  return __jsx("div", {
    className: "d-flex flex-wrap justify-content-left"
  }, props.children);
}
function TvMazeHeader() {
  return __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/tvpage"
  }, __jsx("a", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TvpageStyle */ "g"].Link
  }, "Search Page")));
}
function TvMazePage(props) {
  return __jsx("div", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TvpageStyle */ "g"].Layout
  }, __jsx(TvMazeHeader, null), props.children);
}
function TvPostInfoLabel(props) {
  return __jsx("td", {
    className: "h2 text-left w-25 m-0 p-2"
  }, props.children);
}
function TvPostInfoValue(props) {
  return __jsx("td", {
    className: "text-left m-0 p-2"
  }, __jsx("small", null, props.children));
} //used in provider compliance

function TplistHeaderRow(props) {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "p-0 bg-secondary text-white rounded-lg"
  }, props.children);
} //used in providercompliance

function InfoField(props) {
  return __jsx("p", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* Tplist */ "f"].Info
  }, props.children);
}
/* *********************** 
*   Export functions     * 
**************************/
//used in providerCompliance

function DateCheck(props) {
  var date = props.Date;

  if (date < "2019-09-22") {
    return __jsx(BackgroundDanger, null, date);
  } else if (date < "2019-10-22" && date > "2019-09-22") {
    return __jsx(BackgroundWarning, null, date);
  } else {
    return __jsx("span", null, date);
  }
} //used in TvPage and TVPost

function TvMazeCard(props) {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: props.CardStyle,
    className: props.CardClassName
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    className: "m-4 text-center",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TvpageStyle */ "g"].Title
  }, props.Title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
    className: props.ImgClass,
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TvpageStyle */ "g"].Image,
    src: props.ImgSrc,
    alt: props.ImgAlt
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], {
    className: "text-center my-2"
  }, __jsx("h4", {
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TvpageStyle */ "g"].Cast
  }, props.SubTitle)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], null, props.Description)), props.Link);
} //used in ProviderCompliance, providerData and TVpost

function CustomTabs(props) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    tabs: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: activeTab === '1'
    }),
    onClick: () => {
      toggle('1');
    },
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* Pointer */ "d"]
  }, props.Tab1Name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: activeTab === '2'
    }),
    onClick: () => {
      toggle('2');
    },
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* Pointer */ "d"]
  }, props.Tab2Name))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    activeTab: activeTab
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "1",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TabStyle */ "e"]
  }, props.Tab1Content), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "2",
    style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* TabStyle */ "e"]
  }, props.Tab2Content)));
}
/* *********************** 
*   Export Classes       * 
**************************/
//used in home page

class HomeCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* HomeCardStyle */ "b"].Card
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* HomeCardStyle */ "b"].Title
    }, this.props.Title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
      top: true,
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* ImageStyles */ "c"].HomeCard,
      src: this.props.Image,
      alt: "Card image cap"
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardSubtitle"], null, this.props.Subtitle), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      style: {
        height: '80px'
      }
    }, this.props.Description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "w-100 p-0 m-0"
    }, __jsx(NewTabLink, {
      Style: "btn btn-dark w-100 p-2",
      Link: this.props.Link
    }, this.props.ButtonTitle)))));
  }

} //used in Resumeview, about page and providerdata

class CustomJumbo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    if (this.props.ImgUrl === "noimage") {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], null, __jsx("h1", {
        className: "display-3 text-center"
      }, this.props.Title), __jsx("p", {
        className: this.props.Caption1Style
      }, this.props.Caption1), __jsx("hr", {
        className: "my-2"
      }), __jsx("p", {
        className: this.props.Caption2Style
      }, this.props.Caption2));
    } else {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], null, __jsx("h1", {
        className: "display-3 text-center"
      }, this.props.Title), __jsx("div", {
        className: "container-fluid text-center"
      }, __jsx("img", {
        src: "../static/images/avatar.jpg",
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* ImageStyles */ "c"].HomeAvatar,
        alt: "avatar"
      })), __jsx("p", {
        className: this.props.Caption1Style
      }, this.props.Caption1), __jsx("hr", {
        className: "my-2"
      }), __jsx("p", {
        className: this.props.Caption2Style
      }, this.props.Caption2, __jsx("br", null), this.props.Caption3));
    }
  }

} //used in about page

class AboutMedia extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    if (this.props.Align === "Right") {
      return __jsx("div", {
        className: "py-2"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: this.props.Class
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* ImageStyles */ "c"].About,
        src: this.props.ImgUrl,
        alt: "Card image cap"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        className: "mt-5"
      }, __jsx("h1", null, this.props.Title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, this.props.Description)))));
    }

    if (this.props.Align === "Left") {
      return __jsx("div", {
        className: "py-2"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: this.props.Class
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        className: "mt-5"
      }, __jsx("h1", null, this.props.Title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, this.props.Description)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
        style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* ImageStyles */ "c"].About,
        src: this.props.ImgUrl,
        alt: "Card image cap"
      })))));
    }

    ;
  }

} //used in resume for experience section

class ThreeColumnCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "py-3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: this.props.Class
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, __jsx("h1", null, this.props.Title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "text-left"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx("div", null, __jsx("li", null, this.props.Description1)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx("div", null, __jsx("li", null, this.props.Description2)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx("div", null, __jsx("li", null, this.props.Description3)))))));
  }

} //D and D application

class CharacterSheet extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    function DandDTableLabel(props) {
      return __jsx("td", {
        className: "text-muted text-left h4"
      }, props.children);
    }

    function DandDTableValue(props) {
      return __jsx("td", {
        style: {
          width: '100px'
        },
        className: "text-white text-left h4"
      }, props.children);
    }

    return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: {
        size: 'auto',
        offset: 0
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      borderless: true,
      className: ""
    }, __jsx("tbody", null, __jsx("tr", null, __jsx(DandDTableLabel, null, "Strength:"), __jsx(DandDTableValue, null, this.props.Strength)), __jsx("tr", null, __jsx(DandDTableLabel, null, "Constitution:"), __jsx(DandDTableValue, null, this.props.Constitution)), __jsx("tr", null, __jsx(DandDTableLabel, null, "Dexterity:"), __jsx(DandDTableValue, null, this.props.Dexterity)), __jsx("tr", null, __jsx(DandDTableLabel, null, "Hitpoints:"), __jsx(DandDTableValue, null, this.props.Hitpoints != "Dead" && __jsx("span", null, this.props.Hitpoints) || __jsx("span", {
      className: "text-danger h5"
    }, __jsx("small", null, this.props.Hitpoints)))), __jsx("tr", null, __jsx(DandDTableLabel, null, "Damage per Hit:"), __jsx(DandDTableValue, null, this.props.Damage))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: {
        size: 'auto',
        offset: 2
      }
    }, __jsx("div", {
      className: "text-center "
    }, __jsx("img", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* DandDStyle */ "a"].Avatar,
      src: this.props.ImgUrl,
      alt: "Avatar"
    })))));
  }

} // D and D application

class AttackSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.RollResult = this.RollResult.bind(this);
    this.AttackBanner = this.AttackBanner.bind(this);
    this.AttackButton = this.AttackButton.bind(this);
  } //Shows attack roll number with special display for
  //crit scrike (natural 20 on roll)


  RollResult() {
    if (this.props.Roll === 'Crit Strike') {
      return __jsx("span", {
        className: "text-danger font-italic"
      }, "Critical Strike!");
    } else {
      return __jsx("span", null, this.props.Roll);
    }
  } //shows attack result of hit/miss or place holder for
  //result display.


  AttackBanner() {
    const Result = this.props.DidHit;

    if (Result === "Hit") {
      return __jsx("h2", {
        className: "alert alert-success py-2 text-center"
      }, "Hit!");
    }

    if (Result === "Miss") {
      return __jsx("h2", {
        className: "alert alert-danger py-2 text-center"
      }, "Miss");
    } else {
      return __jsx("h6", {
        className: "text-white text-center"
      }, "(Attack Result displayed here)");
    }
  }
  /*Function to display attack button based on initiative roll and attack turn. Pulls
  AttackTurn functon and Attackroll functions from either herofunctions.js or monsterfunctions.js
  as itentified in props */


  AttackButton() {
    if (this.props.AttackTurn === true) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.props.AttackRoll //onMouseDown={this.props.NextTurn}
        //onMouseDown={this.props.AttackRoll && this.props.NextTurn} 
        //onMouseUp = {this.props.NextTurn}

      }, this.props.RollTitle);
    } else {
      return __jsx("h4", {
        className: "text-white"
      }, "Not your turn");
    }

    ;
  }

  render() {
    return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      className: "my-4 mx-5 d-flex justify-content-center"
    }, __jsx("div", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* DandDStyle */ "a"].thumbnail,
      className: "jsx-1953405926"
    }, __jsx("img", {
      src: "../static/images/acicon.png",
      alt: "shield",
      className: "jsx-1953405926"
    }), __jsx("div", {
      className: "jsx-1953405926"
    }, __jsx("h4", {
      className: "jsx-1953405926" + " " + "AC-Icon-text"
    }, this.props.AC)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      className: "my-4 mx-5 d-flex justify-content-center"
    }, __jsx("div", {
      style: _jsxstyles__WEBPACK_IMPORTED_MODULE_4__[/* DandDStyle */ "a"].thumbnail,
      className: "jsx-1953405926"
    }, __jsx("img", {
      src: "../static/images/hitadjust.png",
      alt: "icon",
      className: "jsx-1953405926"
    }), __jsx("div", {
      className: "jsx-1953405926"
    }, __jsx("h4", {
      className: "jsx-1953405926" + " " + "HitAdj-Icon-text"
    }, this.props.HitAdj)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1953405926"
    }, [".AC-Icon-text.jsx-1953405926{position:absolute;top:42px;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".HitAdj-Icon-text.jsx-1953405926{position:absolute;top:48%;left:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"])), __jsx("div", {
      className: "d-flex justify-content-center my-4"
    }, this.AttackButton()), __jsx("div", {
      className: "text-center text-white"
    }, __jsx("h2", null, "Attack Result:"), __jsx("p", {
      className: "mt-2 p-0"
    }, "attack roll: \xA0 ", this.RollResult())), __jsx("div", null, this.AttackBanner()));
  }

} //used in DandD page to display Name,Initiative and HP status for hero and 
//monster.

class AttackStatusDisplay extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", null, __jsx("h4", {
      className: "text-info"
    }, this.props.Name), __jsx("div", {
      className: "text-center pt-4"
    }, __jsx("div", {
      className: "p-3"
    }, __jsx("h4", null, "iniative:"), __jsx("h4", null, this.props.Initiative != "Second" && __jsx("span", {
      className: "text-info"
    }, this.props.Initiative) || __jsx("span", {
      className: "text-warning"
    }, this.props.Initiative))), __jsx("div", {
      className: "p-3"
    }, __jsx("h4", null, "Hit Points:"), __jsx("h4", {
      className: "text-center mt-4"
    }, this.props.HP != "Dead" && __jsx("span", {
      className: "text-success"
    }, this.props.HP) || __jsx("span", {
      className: "text-danger"
    }, this.props.HP)))));
  }

} //D and D application

class NameForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      collapse: !state.collapse
    }));
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "my-3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      xs: "auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.toggle
    }, this.state.collapse ? 'Hide' : 'Change Name')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapse
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      inline: true
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      className: "mx-sm-2"
    }, "Name:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      maxLength: "20",
      value: this.props.Value,
      onChange: this.props.NameChange //Prevent enter key submit
      ,
      onKeyPress: event => {
        if (event.which === 13
        /* Enter */
        ) {
            event.preventDefault();
          }
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "ml-sm-2",
      onClick: this.props.NameSubmit
    }, "Submit")))));
  }

}

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

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


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("lgD3"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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

/***/ "lgD3":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("GsEv")();
}


/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "luDK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xH9E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CafY");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_customComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Hk3D");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const noimage = '/static/images/no-img.png';
var Search = '';

class Searchbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.enterSearch = this.enterSearch.bind(this);
  } //handles setting state of search value to render tvmaze json api
  //sets variable search value to state


  enterSearch(event) {
    this.setState({
      value: event.target.value
    });
    Search = event.target.value;
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      inline: true,
      className: "justify-content-center"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      className: "mr-sm-2"
    }, "TV Show search by Name:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "text",
      value: this.state.value,
      onChange: this.enterSearch //Prevent enter key submit
      ,
      onKeyPress: event => {
        if (event.which === 13
        /* Enter */
        ) {
            event.preventDefault();
          }
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/tvpage"
    }, __jsx("a", {
      className: "btn btn-dark ml-4"
    }, "Click Submit")));
  }

}

const TvPage = props => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("h1", {
  className: "text-center"
}, "the below content has been imported from", __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__[/* NewTabLink */ "m"], {
  Link: "https://www.tvmaze.com",
  Title: "TvMaze.com"
}, "Tvmaze.com")), __jsx(Searchbar, null), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__[/* TvMazePage */ "q"], null, __jsx("h1", null, "Results for: ", Search), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__[/* LeftFlexWrapDiv */ "k"], null, props.shows.map(show => __jsx("div", {
  className: "p-3",
  key: show.id
}, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_5__[/* TvMazeCard */ "p"], {
  CardStyle: {
    width: '250px'
  },
  Title: __jsx("p", null, __jsx("b", null, __jsx("u", null, show.name))),
  ImgSrc: show.image ? show.image.medium : noimage,
  ImgAlt: "image",
  Link: __jsx("a", {
    href: `/tvpost?id=${show.id}`,
    className: "btn btn-dark w-100"
  }, "Select")
}))))));

TvPage.getInitialProps = async function () {
  //tvmaze search api link.  pulls the json info based on the search variable
  //entered by user in the search field.
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://api.tvmaze.com/search/shows?q=' + Search);
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data.map(entry => entry.show)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TvPage);

/***/ })

/******/ });
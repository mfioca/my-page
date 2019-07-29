webpackHotUpdate("static\\development\\pages\\providerData.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=providerData.js.47300003bc1ad67889f6.hot-update.js.map
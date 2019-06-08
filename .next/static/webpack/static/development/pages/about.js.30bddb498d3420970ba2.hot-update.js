webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _about_view_about_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about_view/about_view */ "./pages/about_view/about_view.js");
/* harmony import */ var _about_view_resume_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about_view/resume_view */ "./pages/about_view/resume_view.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\about.js";






var Aboutpage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Aboutpage, _React$Component);

  function Aboutpage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Aboutpage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Aboutpage).call(this, props));
    _this.state = {
      showAbout: true
    };
    _this.aboutclick = _this.aboutclick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      showResume: false
    };
    _this.resumeclick = _this.resumeclick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Aboutpage, [{
    key: "aboutclick",
    value: function aboutclick() {
      this.setState(function (prevState) {
        return {
          showResume: !prevState.showResume
        };
      });
      this.setState(function (prevState) {
        return {
          showAbout: !prevState.showAbout
        };
      });
    }
  }, {
    key: "resumeclick",
    value: function resumeclick() {
      this.setState(function (prevState) {
        return {
          showResume: !prevState.showResume
        };
      });
      this.setState(function (prevState) {
        return {
          showAbout: !prevState.showAbout
        };
      });
    }
    /*&& this.state.active}*/

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3114586980" + " " + "about_header ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3114586980" + " " + "about_nav center Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3114586980",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        class: "pointer center",
        onClick: this.aboutclick,
        className: "jsx-3114586980",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.state.showAbout ? 'About' : 'About')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3114586980",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.resumeclick,
        className: "jsx-3114586980" + " " + "pointer center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.state.showResume ? 'Resume' : 'Resume'))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3114586980",
        __self: this
      }, "a.jsx-3114586980:link{font-size:25px;font-color:black;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}a.jsx-3114586980:hover{font-size:30px;-webkit-transfrm:scale(1.1);-ms-transfrm:scale(1.1);transfrm:scale(1.1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEaUMsQUFHd0MsQUFNQSxlQUxFLEFBTUcsaUJBTFcsdURBTW5DLGVBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEZXNrdG9wXFxuZXd0ZXN0XFxteS1wYWdlXFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL2Fib3V0X3ZpZXcvYWJvdXRfdmlldydcclxuaW1wb3J0IFJlc3VtZSBmcm9tICcuL2Fib3V0X3ZpZXcvcmVzdW1lX3ZpZXcnXHJcblxyXG5cclxuY2xhc3MgQWJvdXRwYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7c2hvd0Fib3V0OiB0cnVlfVxyXG4gICAgICAgIHRoaXMuYWJvdXRjbGljayA9IHRoaXMuYWJvdXRjbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge3Nob3dSZXN1bWU6IGZhbHNlfVxyXG4gICAgICAgIHRoaXMucmVzdW1lY2xpY2sgPSB0aGlzLnJlc3VtZWNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJvdXRjbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICBzaG93UmVzdW1lOiAhcHJldlN0YXRlLnNob3dSZXN1bWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgc2hvd0Fib3V0OiAhcHJldlN0YXRlLnNob3dBYm91dFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bWVjbGljaygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICBzaG93UmVzdW1lOiAhcHJldlN0YXRlLnNob3dSZXN1bWVcclxuICAgICAgICB9KSk7IFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgIHNob3dBYm91dDogIXByZXZTdGF0ZS5zaG93QWJvdXRcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyomJiB0aGlzLnN0YXRlLmFjdGl2ZX0qL1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9oZWFkZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9uYXYgY2VudGVyIEZzaXplLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBvaW50ZXIgY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFib3V0Y2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dBYm91dCA/ICdBYm91dCcgOiAnQWJvdXQnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2ludGVyIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXN1bWVjbGlja30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dSZXN1bWUgPyAnUmVzdW1lJyA6ICdSZXN1bWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2ZybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBYm91dCBhYm91dD17dGhpcy5zdGF0ZS5zaG93QWJvdXR9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVzdW1lIHJlc3VtZT17dGhpcy5zdGF0ZS5zaG93UmVzdW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRwYWdlOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\about.js */")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_about_view_about_view__WEBPACK_IMPORTED_MODULE_9__["default"], {
        about: this.state.showAbout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_about_view_resume_view__WEBPACK_IMPORTED_MODULE_10__["default"], {
        resume: this.state.showResume,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })));
    }
  }]);

  return Aboutpage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Aboutpage);

/***/ })

})
//# sourceMappingURL=about.js.30bddb498d3420970ba2.hot-update.js.map
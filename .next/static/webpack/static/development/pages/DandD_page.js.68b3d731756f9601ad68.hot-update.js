webpackHotUpdate("static\\development\\pages\\DandD_page.js",{

/***/ "./pages/DandD/hero.js":
/*!*****************************!*\
  !*** ./pages/DandD/hero.js ***!
  \*****************************/
/*! exports provided: newHero, Hero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newHero", function() { return newHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
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
/* harmony import */ var _hero_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero_functions */ "./pages/DandD/hero_functions.js");
/* harmony import */ var _attacksim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attacksim */ "./pages/DandD/attacksim.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js";









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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).call(this, props));
    _this.setherostats = _this.setherostats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "setherostats",
    value: function setherostats() {
      //random number between 1-20 to set stats
      newHero.Str = Math.floor(Math.random() * 20 + 1);
      newHero.Const = Math.floor(Math.random() * 20 + 1);
      newHero.Dext = Math.floor(Math.random() * 20 + 1); //calls functions in hero_functions to adjust stats in
      //heroadjstats variable in the attacksim.js

      _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroHp = newHero.BaseHitPoints + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_8__["SetConstAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroAc = newHero.BaseArmorClass + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_8__["setacAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroDmg = newHero.BaseDamage + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_8__["setDmgAdj"])();
      _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroHitAdj = newHero.BaseHitAdj + Object(_hero_functions__WEBPACK_IMPORTED_MODULE_8__["setHitAdj"])();
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", newHero.Str)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " ", newHero.Const)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ", newHero.Dext)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " ", _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroHp)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroDmg)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.setherostats,
        className: "jsx-1254503850",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1254503850",
        __self: this
      }, "table.jsx-1254503850{margin-top:20px;font-family:\"Comic Sans MS\",cursive,sans-serif;border-collapse:collaps;width:100%;}td.jsx-1254503850,th.jsx-1254503850{color:#888888;text-align:left;padding:8px;}td.jsx-1254503850:nth-child(odd){color:#888888;}td.jsx-1254503850:nth-child(even){color:##f2f2f2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXERhbmREXFxoZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFNEIsQUFHeUMsQUFPRixBQU9BLEFBSUMsY0FWQyxBQU9wQixDQUlBLENBbEJxRCxjQVFyQyxZQUNoQixxQkFSNEIsd0JBQ2IsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmtcXERlc2t0b3BcXG5ld3Rlc3RcXG15LXBhZ2VcXHBhZ2VzXFxEYW5kRFxcaGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNldENvbnN0QWRqIH0gZnJvbSAnLi9oZXJvX2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHNldEhpdEFkaiB9IGZyb20gJy4vaGVyb19mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXREbWdBZGogfSBmcm9tICcuL2hlcm9fZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0YWNBZGogfSBmcm9tICcuL2hlcm9fZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgSGVyb2FkalN0YXRzIH0gZnJvbSAnLi9hdHRhY2tzaW0nO1xyXG5leHBvcnQgeyBuZXdIZXJvIH1cclxuZXhwb3J0IHsgSGVybyB9XHJcblxyXG5cclxudmFyIG5ld0hlcm8gPSB7XHJcbiAgICBcclxuICAgIFN0cjogMCxcclxuICAgIENvbnN0OiAwLFxyXG4gICAgRGV4dDogMCxcclxuICAgIEJhc2VIaXRQb2ludHM6IDUwLFxyXG4gICAgQmFzZUFybW9yQ2xhc3M6IDEwLFxyXG4gICAgQmFzZURhbWFnZTogMTAsXHJcbiAgICBCYXNlSGl0QWRqOiAwXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc2V0aGVyb3N0YXRzID0gdGhpcy5zZXRoZXJvc3RhdHMuYmluZCh0aGlzKTtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldGhlcm9zdGF0cygpIHtcclxuICAgICAgICAvL3JhbmRvbSBudW1iZXIgYmV0d2VlbiAxLTIwIHRvIHNldCBzdGF0c1xyXG4gICAgICAgIG5ld0hlcm8uU3RyID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIwKSArIDEpO1xyXG4gICAgICAgIG5ld0hlcm8uQ29uc3QgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSk7XHJcbiAgICAgICAgbmV3SGVyby5EZXh0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIwKSArIDEpO1xyXG4gICAgICAgIC8vY2FsbHMgZnVuY3Rpb25zIGluIGhlcm9fZnVuY3Rpb25zIHRvIGFkanVzdCBzdGF0cyBpblxyXG4gICAgICAgIC8vaGVyb2FkanN0YXRzIHZhcmlhYmxlIGluIHRoZSBhdHRhY2tzaW0uanNcclxuICAgICAgICBIZXJvYWRqU3RhdHMuSGVyb0hwID0gKG5ld0hlcm8uQmFzZUhpdFBvaW50cykgKyAoU2V0Q29uc3RBZGooKSk7XHJcbiAgICAgICAgSGVyb2FkalN0YXRzLkhlcm9BYyA9IChuZXdIZXJvLkJhc2VBcm1vckNsYXNzKSArIChzZXRhY0FkaigpKTtcclxuICAgICAgICBIZXJvYWRqU3RhdHMuSGVyb0RtZyA9IChuZXdIZXJvLkJhc2VEYW1hZ2UpICsgKHNldERtZ0FkaigpKTtcclxuICAgICAgICBIZXJvYWRqU3RhdHMuSGVyb0hpdEFkaiA9IChuZXdIZXJvLkJhc2VIaXRBZGopICsgKHNldEhpdEFkaigpKTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+ICBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RyZW5ndGg6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4geyBuZXdIZXJvLlN0ciB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNvbnN0aXR1dGlvbjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7IG5ld0hlcm8uQ29uc3QgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5EZXh0ZXJpdHk6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4geyBuZXdIZXJvLkRleHQgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5IaXRwb2ludHM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4geyBIZXJvYWRqU3RhdHMuSGVyb0hwIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QmFzZSBEYW1hZ2U6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4geyBIZXJvYWRqU3RhdHMuSGVyb0RtZyB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZXRoZXJvc3RhdHN9PlNldCBBdHRydWJ1dGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRkLCB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGQ6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjI2YyZjJmMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyo8ZGl2PlxyXG48cD5TdHJlbmd0aDogeyBuZXdIZXJvLlN0ciB9PC9wPlxyXG48cD5Db25zdGl0dXRpb246IHsgbmV3SGVyby5Db25zdCB9PC9wPlxyXG48cD5EZXh0ZXJpdHk6IHsgbmV3SGVyby5EZXh0IH08L3A+XHJcbjxwPkhpdHBvaW50czogeyBIZXJvYWRqU3RhdHMuSGVyb0hwIH08L3A+XHJcbjxwPkJhc2UgRGFtYWdlOiB7IEhlcm9hZGpTdGF0cy5IZXJvRG1nICB9PC9wPlxyXG48L2Rpdj5cclxuPGRpdj5cclxuPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNldGhlcm9zdGF0c30+U2V0IEF0dHJ1YnV0ZXM8L2J1dHRvbj5cclxuPC9kaXY+Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm8iXX0= */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js */"));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/*<div>
<p>Strength: { newHero.Str }</p>
<p>Constitution: { newHero.Const }</p>
<p>Dexterity: { newHero.Dext }</p>
<p>Hitpoints: { HeroadjStats.HeroHp }</p>
<p>Base Damage: { HeroadjStats.HeroDmg  }</p>
</div>
<div>
<button onClick={this.setherostats}>Set Attrubutes</button>
</div>*/


/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=DandD_page.js.68b3d731756f9601ad68.hot-update.js.map
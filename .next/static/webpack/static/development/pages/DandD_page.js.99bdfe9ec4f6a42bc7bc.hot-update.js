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
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", newHero.Str)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " ", newHero.Const)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ", newHero.Dext)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " ", _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroHp)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroDmg)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.setherostats,
        className: "jsx-2919183752",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2919183752",
        __self: this
      }, "table.jsx-2919183752{margin-top:20px;font-family:\"Comic Sans MS\",cursive,sans-serif;border-collapse:collaps;width:100%;}td.jsx-2919183752,th.jsx-2919183752{text-align:left;padding:8px;}td.jsx-2919183752:nth-child(even){color:#888888;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXERhbmREXFxoZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFNEIsQUFHeUMsQUFRQSxBQUtGLGNBQ2xCLEVBYnFELEFBUXJDLFlBQ2hCLG1DQVI0Qix3QkFDYixXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXERhbmREXFxoZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2V0Q29uc3RBZGogfSBmcm9tICcuL2hlcm9fZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0SGl0QWRqIH0gZnJvbSAnLi9oZXJvX2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHNldERtZ0FkaiB9IGZyb20gJy4vaGVyb19mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXRhY0FkaiB9IGZyb20gJy4vaGVyb19mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBIZXJvYWRqU3RhdHMgfSBmcm9tICcuL2F0dGFja3NpbSc7XHJcbmV4cG9ydCB7IG5ld0hlcm8gfVxyXG5leHBvcnQgeyBIZXJvIH1cclxuXHJcblxyXG52YXIgbmV3SGVybyA9IHtcclxuICAgIFxyXG4gICAgU3RyOiAwLFxyXG4gICAgQ29uc3Q6IDAsXHJcbiAgICBEZXh0OiAwLFxyXG4gICAgQmFzZUhpdFBvaW50czogNTAsXHJcbiAgICBCYXNlQXJtb3JDbGFzczogMTAsXHJcbiAgICBCYXNlRGFtYWdlOiAxMCxcclxuICAgIEJhc2VIaXRBZGo6IDBcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIEhlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zZXRoZXJvc3RhdHMgPSB0aGlzLnNldGhlcm9zdGF0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0aGVyb3N0YXRzKCkge1xyXG4gICAgICAgIC8vcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEtMjAgdG8gc2V0IHN0YXRzXHJcbiAgICAgICAgbmV3SGVyby5TdHIgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSk7XHJcbiAgICAgICAgbmV3SGVyby5Db25zdCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxKTtcclxuICAgICAgICBuZXdIZXJvLkRleHQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgMSk7XHJcbiAgICAgICAgLy9jYWxscyBmdW5jdGlvbnMgaW4gaGVyb19mdW5jdGlvbnMgdG8gYWRqdXN0IHN0YXRzIGluXHJcbiAgICAgICAgLy9oZXJvYWRqc3RhdHMgdmFyaWFibGUgaW4gdGhlIGF0dGFja3NpbS5qc1xyXG4gICAgICAgIEhlcm9hZGpTdGF0cy5IZXJvSHAgPSAobmV3SGVyby5CYXNlSGl0UG9pbnRzKSArIChTZXRDb25zdEFkaigpKTtcclxuICAgICAgICBIZXJvYWRqU3RhdHMuSGVyb0FjID0gKG5ld0hlcm8uQmFzZUFybW9yQ2xhc3MpICsgKHNldGFjQWRqKCkpO1xyXG4gICAgICAgIEhlcm9hZGpTdGF0cy5IZXJvRG1nID0gKG5ld0hlcm8uQmFzZURhbWFnZSkgKyAoc2V0RG1nQWRqKCkpO1xyXG4gICAgICAgIEhlcm9hZGpTdGF0cy5IZXJvSGl0QWRqID0gKG5ld0hlcm8uQmFzZUhpdEFkaikgKyAoc2V0SGl0QWRqKCkpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TdHJlbmd0aDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7IG5ld0hlcm8uU3RyIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q29uc3RpdHV0aW9uOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHsgbmV3SGVyby5Db25zdCB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkRleHRlcml0eTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7IG5ld0hlcm8uRGV4dCB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkhpdHBvaW50czo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7IEhlcm9hZGpTdGF0cy5IZXJvSHAgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CYXNlIERhbWFnZTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7IEhlcm9hZGpTdGF0cy5IZXJvRG1nIH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNldGhlcm9zdGF0c30+U2V0IEF0dHJ1YnV0ZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGQsIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKjxkaXY+XHJcbjxwPlN0cmVuZ3RoOiB7IG5ld0hlcm8uU3RyIH08L3A+XHJcbjxwPkNvbnN0aXR1dGlvbjogeyBuZXdIZXJvLkNvbnN0IH08L3A+XHJcbjxwPkRleHRlcml0eTogeyBuZXdIZXJvLkRleHQgfTwvcD5cclxuPHA+SGl0cG9pbnRzOiB7IEhlcm9hZGpTdGF0cy5IZXJvSHAgfTwvcD5cclxuPHA+QmFzZSBEYW1hZ2U6IHsgSGVyb2FkalN0YXRzLkhlcm9EbWcgIH08L3A+XHJcbjwvZGl2PlxyXG48ZGl2PlxyXG48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2V0aGVyb3N0YXRzfT5TZXQgQXR0cnVidXRlczwvYnV0dG9uPlxyXG48L2Rpdj4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybyJdfQ== */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js */"));
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
//# sourceMappingURL=DandD_page.js.99bdfe9ec4f6a42bc7bc.hot-update.js.map
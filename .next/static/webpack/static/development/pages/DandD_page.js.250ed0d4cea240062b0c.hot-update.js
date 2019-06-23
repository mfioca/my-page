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
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", newHero.Str)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, " ", newHero.Const)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ", newHero.Dext)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " ", _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroHp)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", _attacksim__WEBPACK_IMPORTED_MODULE_9__["HeroadjStats"].HeroDmg)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.setherostats,
        className: "jsx-1639597218",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1639597218",
        __self: this
      }, "table.jsx-1639597218{margin-top:5px;font-family:ariel,sansserif;border-collapse:collaps;width:100%;}td.jsx-1639597218,th.jsx-1639597218{border:1px solid #dddddd;text-align:left;padding:8px;}tr.jsx-1639597218:nth-child(even){background-color:#dddddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFya1xcRGVza3RvcFxcbmV3dGVzdFxcbXktcGFnZVxccGFnZXNcXERhbmREXFxoZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFNEIsQUFHd0MsQUFPVSxBQU1BLGVBWkksVUFPYixBQU1wQixnQkFMZ0IsRUFQWSxVQVE1QixjQVBlLFdBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJrXFxEZXNrdG9wXFxuZXd0ZXN0XFxteS1wYWdlXFxwYWdlc1xcRGFuZERcXGhlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZXRDb25zdEFkaiB9IGZyb20gJy4vaGVyb19mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXRIaXRBZGogfSBmcm9tICcuL2hlcm9fZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0RG1nQWRqIH0gZnJvbSAnLi9oZXJvX2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHNldGFjQWRqIH0gZnJvbSAnLi9oZXJvX2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IEhlcm9hZGpTdGF0cyB9IGZyb20gJy4vYXR0YWNrc2ltJztcclxuZXhwb3J0IHsgbmV3SGVybyB9XHJcbmV4cG9ydCB7IEhlcm8gfVxyXG5cclxuXHJcbnZhciBuZXdIZXJvID0ge1xyXG4gICAgXHJcbiAgICBTdHI6IDAsXHJcbiAgICBDb25zdDogMCxcclxuICAgIERleHQ6IDAsXHJcbiAgICBCYXNlSGl0UG9pbnRzOiA1MCxcclxuICAgIEJhc2VBcm1vckNsYXNzOiAxMCxcclxuICAgIEJhc2VEYW1hZ2U6IDEwLFxyXG4gICAgQmFzZUhpdEFkajogMFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgSGVybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnNldGhlcm9zdGF0cyA9IHRoaXMuc2V0aGVyb3N0YXRzLmJpbmQodGhpcyk7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRoZXJvc3RhdHMoKSB7XHJcbiAgICAgICAgLy9yYW5kb20gbnVtYmVyIGJldHdlZW4gMS0yMCB0byBzZXQgc3RhdHNcclxuICAgICAgICBuZXdIZXJvLlN0ciA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxKTtcclxuICAgICAgICBuZXdIZXJvLkNvbnN0ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDIwKSArIDEpO1xyXG4gICAgICAgIG5ld0hlcm8uRGV4dCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxKTtcclxuICAgICAgICAvL2NhbGxzIGZ1bmN0aW9ucyBpbiBoZXJvX2Z1bmN0aW9ucyB0byBhZGp1c3Qgc3RhdHMgaW5cclxuICAgICAgICAvL2hlcm9hZGpzdGF0cyB2YXJpYWJsZSBpbiB0aGUgYXR0YWNrc2ltLmpzXHJcbiAgICAgICAgSGVyb2FkalN0YXRzLkhlcm9IcCA9IChuZXdIZXJvLkJhc2VIaXRQb2ludHMpICsgKFNldENvbnN0QWRqKCkpO1xyXG4gICAgICAgIEhlcm9hZGpTdGF0cy5IZXJvQWMgPSAobmV3SGVyby5CYXNlQXJtb3JDbGFzcykgKyAoc2V0YWNBZGooKSk7XHJcbiAgICAgICAgSGVyb2FkalN0YXRzLkhlcm9EbWcgPSAobmV3SGVyby5CYXNlRGFtYWdlKSArIChzZXREbWdBZGooKSk7XHJcbiAgICAgICAgSGVyb2FkalN0YXRzLkhlcm9IaXRBZGogPSAobmV3SGVyby5CYXNlSGl0QWRqKSArIChzZXRIaXRBZGooKSk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN0cmVuZ3RoOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHsgbmV3SGVyby5TdHIgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Db25zdGl0dXRpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4geyBuZXdIZXJvLkNvbnN0IH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGV4dGVyaXR5OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHsgbmV3SGVyby5EZXh0IH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SGl0cG9pbnRzOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHsgSGVyb2FkalN0YXRzLkhlcm9IcCB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJhc2UgRGFtYWdlOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHsgSGVyb2FkalN0YXRzLkhlcm9EbWcgfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2V0aGVyb3N0YXRzfT5TZXQgQXR0cnVidXRlczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmllbCwgc2Fuc3NlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGQsIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyo8ZGl2PlxyXG48cD5TdHJlbmd0aDogeyBuZXdIZXJvLlN0ciB9PC9wPlxyXG48cD5Db25zdGl0dXRpb246IHsgbmV3SGVyby5Db25zdCB9PC9wPlxyXG48cD5EZXh0ZXJpdHk6IHsgbmV3SGVyby5EZXh0IH08L3A+XHJcbjxwPkhpdHBvaW50czogeyBIZXJvYWRqU3RhdHMuSGVyb0hwIH08L3A+XHJcbjxwPkJhc2UgRGFtYWdlOiB7IEhlcm9hZGpTdGF0cy5IZXJvRG1nICB9PC9wPlxyXG48L2Rpdj5cclxuPGRpdj5cclxuPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNldGhlcm9zdGF0c30+U2V0IEF0dHJ1YnV0ZXM8L2J1dHRvbj5cclxuPC9kaXY+Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm8iXX0= */\n/*@ sourceURL=C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js */"));
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
//# sourceMappingURL=DandD_page.js.250ed0d4cea240062b0c.hot-update.js.map
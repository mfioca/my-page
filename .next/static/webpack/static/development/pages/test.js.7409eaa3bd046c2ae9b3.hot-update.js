webpackHotUpdate("static\\development\\pages\\test.js",{

/***/ "./pages/DandD/hero.js":
/*!*****************************!*\
  !*** ./pages/DandD/hero.js ***!
  \*****************************/
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






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero.js";

var newHero = {
  Str: 0,
  Const: 0,
  Dext: 0,
  BaseHitPoints: 20,
  BaseArmorClass: 10,
  BaseDamage: 10,
  BaseHitAdj: 0
};
var HeroHp = 0;
var HeroAc = 0;
var HeroDmg = 0;
var HeroHitAdj = 0;

function setHitAdj() {
  if (newHero.Str == 1) {
    return HitAdj.one;
  }

  if (newHero.Str == 2 || newHero.Str == 3) {
    return HitAdj.two;
  }

  if (newHero.Str == 4 || newHero.Str == 5) {
    return HitAdj.three;
  }

  if (newHero.Str == 6 || newHero.Str == 7) {
    return HitAdj.four;
  }

  if (newHero.Str >= 8 && newHero.Str <= 16) {
    return HitAdj.five;
  }

  if (newHero.Str == 17) {
    return HitAdj.six;
  }

  if (newHero.Str == 18) {
    return HitAdj.seven;
  }

  if (newHero.Str == 19) {
    return HitAdj.eight;
  }

  if (newHero.Str == 20) {
    return HitAdj.nine;
  }
}

function setDmgAdj() {
  if (newHero.Str == 1) {
    return DamageAdj.one;
  }

  if (newHero.Str == 2 || newHero.Str == 3) {
    return DamageAdj.two;
  }

  if (newHero.Str == 4 || newHero.Str == 5) {
    return DamageAdj.three;
  }

  if (newHero.Str == 6 || newHero.Str == 7) {
    return DamageAdj.four;
  }

  if (newHero.Str >= 8 && newHero.Str <= 16) {
    return DamageAdj.five;
  }

  if (newHero.Str == 17) {
    return DamageAdj.six;
  }

  if (newHero.Str == 18) {
    return DamageAdj.seven;
  }

  if (newHero.Str == 19) {
    return DamageAdj.eight;
  }

  if (newHero.Str == 20) {
    return DamageAdj.nine;
  }
}

function setacAdj() {
  if (newHero.Dext == 1 || newHero.Dext == 2) {
    return AcAdj.one;
  }

  if (newHero.Dext == 3) {
    return AcAdj.two;
  }

  if (newHero.Dext == 4) {
    return AcAdj.three;
  }

  if (newHero.Dext == 5) {
    return AcAdj.four;
  }

  if (newHero.Dext == 6) {
    return AcAdj.five;
  }

  if (newHero.Dext >= 7 && newHero.Dext <= 14) {
    return AcAdj.six;
  }

  if (newHero.Dext == 15) {
    return AcAdj.seven;
  }

  if (newHero.Dext == 16) {
    return AcAdj.eight;
  }

  if (newHero.Dext == 17) {
    return AcAdj.nine;
  }

  if (newHero.Dext == 18 || newHero.Dext == 19) {
    return AcAdj.ten;
  }

  if (newHero.Dext == 20) {
    return AcAdj.eleven;
  }
}

function SetConstAdj() {
  if (newHero.Const == 1) {
    return Constadj.one;
  }

  if (newHero.Const == 2 || newHero.Const == 3) {
    return Constadj.two;
  }

  if (newHero.Const >= 4 && newHero.Const <= 6) {
    return Constadj.three;
  }

  if (newHero.Const >= 7 && newHero.Const <= 14) {
    return Constadj.four;
  }

  if (newHero.Const == 15) {
    return Constadj.five;
  }

  if (newHero.Const == 16) {
    return Constadj.six;
  }

  if (newHero.Const == 17) {
    return Constadj.seven;
  }

  if (newHero.Const == 18) {
    return Constadj.eight;
  }

  if (newHero.Const == 19) {
    return Constadj.nine;
  }

  if (newHero.Const == 20) {
    return Constadj.ten;
  }
}

var Constadj = {
  one: -3,
  two: -2,
  three: -1,
  four: 0,
  five: 1,
  six: 2,
  seven: 3,
  eight: 4,
  nine: 5,
  ten: 6
};
var AcAdj = {
  one: -5,
  two: -4,
  three: -3,
  four: -2,
  five: -1,
  six: 0,
  seven: 1,
  eight: 2,
  nine: 3,
  ten: 4,
  eleven: 5
};
var DamageAdj = {
  one: -4,
  two: -3,
  three: -2,
  four: -1,
  five: 0,
  six: 1,
  seven: 2,
  eight: 3,
  nine: 4
};
var HitAdj = {
  one: -4,
  two: -3,
  three: -2,
  four: -1,
  five: 0,
  six: 1,
  seven: 2,
  eight: 3,
  nine: 4
};

var Hero =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hero);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hero).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hero, [{
    key: "handleClick",
    value: function handleClick() {
      newHero.Str = Math.floor(Math.random() * 20 + 1);
      newHero.Const = Math.floor(Math.random() * 20 + 1);
      newHero.Dext = Math.floor(Math.random() * 20 + 1);
      HeroHp = newHero.BaseHitPoints + SetConstAdj();
      HeroAc = newHero.BaseArmorClass + setacAdj();
      HeroDmg = newHero.BaseDamage + setDmgAdj();
      HeroHitAdj = newHero.BaseHitAdj + setHitAdj();
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Strength: ", newHero.Str), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Constitution: ", newHero.Const), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Dexterity: ", newHero.Dext), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Hitpoints: ", HeroHp), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Armor Class: ", HeroAc), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Base Damage: ", HeroDmg), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Hit Adjust: ", HeroHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Set Attrubutes")));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./pages/DandD/hero_functions.js":
false

})
//# sourceMappingURL=test.js.7409eaa3bd046c2ae9b3.hot-update.js.map
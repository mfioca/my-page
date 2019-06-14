webpackHotUpdate("static\\development\\pages\\test.js",{

/***/ "./pages/DandD/hero_functions.js":
/*!***************************************!*\
  !*** ./pages/DandD/hero_functions.js ***!
  \***************************************/
/*! exports provided: setHitAdj, setDmgAdj, setacAdj, SetConstAdj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHitAdj", function() { return setHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDmgAdj", function() { return setDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setacAdj", function() { return setacAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConstAdj", function() { return SetConstAdj; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ })

})
//# sourceMappingURL=test.js.146ae6f03f350535cdab.hot-update.js.map
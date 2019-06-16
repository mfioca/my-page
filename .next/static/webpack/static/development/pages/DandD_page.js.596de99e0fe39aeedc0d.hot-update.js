webpackHotUpdate("static\\development\\pages\\DandD_page.js",{

/***/ "./pages/DandD/hero_attacksim.js":
/*!***************************************!*\
  !*** ./pages/DandD/hero_attacksim.js ***!
  \***************************************/
/*! exports provided: MonsteradjStats, HeroadjStats, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonsteradjStats", function() { return MonsteradjStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroadjStats", function() { return HeroadjStats; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monster */ "./pages/DandD/monster.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\hero_attacksim.js";



 //import { HeroHitAdj } from './hero'

var MonsteradjStats = {
  MonsterHp: 0,
  MonsterAc: 0,
  MonsterDmg: 0,
  MonsterHitAdj: 0
};
var HeroadjStats = {
  HeroHp: 0,
  HeroAc: 0,
  HeroDmg: 0,
  HeroHitAdj: 0
};
var Heroroll = 0;
var Herodidhit = " ";
var Monsterdidhit = " ";

function heroattackroll() {
  //Heroroll = Math.floor((Math.random() * 20) + 1);
  if (Heroroll >= MonsteradjStats.MonsterAc + HeroadjStats.HeroHitAdj) {
    Herodidhit = "yes";
    MonsteradjStats.MonsterHp = MonsteradjStats.MonsterHp - 10;

    if (MonsteradjStats.MonsterHp <= 0) {
      MonsteradjStats.MonsterHp = "Monster is dead";
    }
  } else {
    Herodidhit = "no";
  }

  ;
}

function Monsterattackroll() {
  if (Monsterroll >= HeroadjStats.HeroAc + MonsteradjStats.MonsterHitAdj) {
    Monsterdidhit = "yes";
    HeroadjStats.HeroHp = HeroadjStats.HeroHp - 10;

    if (HeroadjStats.HeroHp <= 0) {
      HeroadjStats.HeroHp = "Hero is dead";
    }
  } else {
    Monsterdidhit = "no";
  }

  ;
}

var HeroAttackSim =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HeroAttackSim, _React$Component);

  function HeroAttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeroAttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HeroAttackSim).call(this, props));
    _this.heroattack = _this.heroattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.Monsterattack = _this.Monsterattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.refresh = _this.refresh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeroAttackSim, [{
    key: "heroattack",
    value: function heroattack() {
      Heroroll = Math.floor(Math.random() * 20 + 1);
      heroattackroll();
      this.forceUpdate();
    }
  }, {
    key: "Monsterattack",
    value: function Monsterattack() {
      Monsterroll = Math.floor(Math.random() * 20 + 1);
      Monsterattackroll();
      this.forceUpdate();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.refresh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Refresh stats"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "MonsterAC = ", MonsteradjStats.MonsterAc), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Hero Hit Adjustment = ", HeroadjStats.HeroHitAdj), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Roll to hit"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Result of attack = ", Herodidhit), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " Monster hit points = ", MonsteradjStats.MonsterHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.refresh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Refresh stats"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "HeroAC = ", HeroadjStats.HeroAc), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Monster Hit Adjustment = ", MonsteradjStats.MonsterHitAdj), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.Monsterattack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Roll to hit"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Result of attack = ", Monsterdidhit), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, " Monster hit points = ", HeroadjStats.MonsterHp)));
    }
  }]);

  return HeroAttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HeroAttackSim);

/***/ })

})
//# sourceMappingURL=DandD_page.js.596de99e0fe39aeedc0d.hot-update.js.map
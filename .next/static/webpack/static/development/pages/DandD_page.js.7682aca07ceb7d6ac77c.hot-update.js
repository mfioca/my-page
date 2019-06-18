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
var Monsterroll = 0;
var Herodidhit = " ";
var Monsterdidhit = " ";
/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
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
/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */


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

var AttackSim =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSim, _React$Component);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AttackSim).call(this, props));
    _this.heroinitiative = 0;
    _this.monsterinitiative = 0;
    _this.heroattack = _this.heroattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.Monsterattack = _this.Monsterattack.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.refresh = _this.refresh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }
  /*hero attack roll, radomly generates number between 1 to 20.  Then
  calls the hero attack roll function to determine successful attack.*/


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSim, [{
    key: "heroattack",
    value: function heroattack() {
      Heroroll = Math.floor(Math.random() * 20 + 1);
      heroattackroll();
      this.forceUpdate();
    }
    /*monster attack roll, randomly generates number between 1 to 20.  Then 
    calls the monster attack roll function to determine successful attack. */

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
    /*initiative role to determine if hero or monster attacks first.  sets 
    variable for initiative to determine first attack.  Who ever has lower 
    number goes first, on equal role, alerts that a reroll is necessary. */

  }, {
    key: "rollforiniative",
    value: function rollforiniative() {
      this.heroinitiative = Math.floor(Math.random() * 10 + 1);
      this.monsterinitiative = Math.floor(Math.random() * 10 + 1);

      if (this.heroinitiative < this.monsterinitiative) {
        this.heroinitiative = "Hero goes first";
      } else if (this.heroinitiative > this.monsterinitiative) {
        this.monsterinitiative = "Monster goes first";
      } else {
        this.heroinitiative = "ReRoll";
        this.monsterinitiative = "ReRoll";
      }

      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "DandD_attack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/ac.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "\xA0\xA0\xA0Hero", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), "AC = ", HeroadjStats.HeroAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        div: true,
        className: "Attack-hitadj",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Hero Hit ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), "Adjustment = ", HeroadjStats.HeroHitAdj), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Result of attack = ", Herodidhit))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "Reset_stat-button",
        onClick: this.refresh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Refresh stats"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.rollforiniative,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Roll for iniative"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Hero iniative = ", this.heroinitiative), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Monster iniative = ", this.monsterinitiative), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, " Monster hit points = ", MonsteradjStats.MonsterHp), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: " center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Hero HP ", HeroadjStats.HeroHp))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/ac.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Monster", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), "AC = ", MonsteradjStats.MonsterAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-hitadj",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Monster Hit ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), "Adjustment = ", MonsteradjStats.MonsterHitAdj), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.Monsterattack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Result of attack = ", Monsterdidhit))))));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AttackSim);

/***/ })

})
//# sourceMappingURL=DandD_page.js.7682aca07ceb7d6ac77c.hot-update.js.map
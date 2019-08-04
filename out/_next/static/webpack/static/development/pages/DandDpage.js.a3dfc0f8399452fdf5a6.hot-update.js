webpackHotUpdate("static\\development\\pages\\DandDpage.js",{

/***/ "./pages/DandD/attacksim.js":
/*!**********************************!*\
  !*** ./pages/DandD/attacksim.js ***!
  \**********************************/
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
/* harmony import */ var _herofunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./herofunctions */ "./pages/DandD/herofunctions.js");
/* harmony import */ var _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monsterfunctions */ "./pages/DandD/monsterfunctions.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\attacksim.js";



/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
  this.setState({
    heroroll: Math.floor(Math.random() * 20 + 1)
  });

  if (this.state.heroroll >= this.state.monsterAc + this.state.heroHitAdj) {
    this.setState({
      herodidhit: 'Hit'
    });

    if (this.state.monsterHp - this.state.heroDmg <= 0) {
      this.setState({
        monsterHp: 'Dead'
      });
    } else {
      this.setState({
        monsterHp: this.state.monsterHp - this.state.heroDmg
      });
    }
  } else {
    this.setState({
      herodidhit: 'Miss'
    });
  }

  ;
}

;
/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */

function monsterattackroll() {
  this.setState({
    monsterroll: Math.floor(Math.random() * 20 + 1)
  });

  if (this.state.monsterroll >= this.state.heroAc + this.state.monsterHitAdj) {
    this.setState({
      monsterdidhit: 'Hit'
    });

    if (this.state.heroHp - this.state.monsterDmg <= 0) {
      this.setState({
        heroHp: 'Dead'
      });
    } else {
      this.setState({
        heroHp: this.state.heroHp - this.state.monsterDmg
      });
    }
  } else {
    this.setState({
      monsterdidhit: 'Miss'
    });
  }

  ;
}

;

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
    _this.state = {
      herostats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      herobase: {
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      monsterstats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      monsterbase: {
        Name: '',
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      heroHp: 0,
      heroAc: 0,
      heroDmg: 0,
      heroHitAdj: 0,
      heroName: '',
      heroinitiative: 0,
      heroroll: 0,
      herodidhit: '',
      monsterHp: 0,
      monsterAc: 0,
      monsterDmg: 0,
      monsterHitAdj: 0,
      monsterName: '',
      monsterinitiative: 0,
      monsterroll: 0,
      monsterdidhit: ''
    };
    _this.setherostats = _this.setherostats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroConstAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroacAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroacAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroDmgAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroHitAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setMonsterstats = _this.setMonsterstats.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterConstAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsteracAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsteracAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterDmgAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterHitAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroattackroll = heroattackroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterattackroll = monsterattackroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSim, [{
    key: "setherostats",
    value: function setherostats() {
      for (var key in this.state.herostats) {
        this.state.herostats[key] = Math.floor(Math.random() * 20 + 1);
      }

      ;
      this.setState({
        heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
        heroAc: this.state.herobase.ArmorClass + this.SetheroacAdj(),
        heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
        heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj()
      });
    }
  }, {
    key: "setMonsterstats",
    value: function setMonsterstats() {
      for (var key in this.state.monsterstats) {
        this.state.monsterstats[key] = Math.floor(Math.random() * 20 + 1);
      }

      ;
      this.setState({
        monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
        monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
        monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
        monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj()
      });
    }
  }, {
    key: "heroNameChange",
    value: function heroNameChange(event) {
      this.setState({
        heroName: event.target.value
      });
    }
  }, {
    key: "monsterNameChange",
    value: function monsterNameChange(event) {
      this.setState({
        monsterName: event.target.value
      });
    }
  }, {
    key: "rollforiniative",
    value: function rollforiniative() {
      this.Heroinitiative = Math.floor(Math.random() * 10 + 1);
      this.Monsterinitiative = Math.floor(Math.random() * 10 + 1);

      if (this.Heroinitiative < this.Monsterinitiative) {
        this.setState({
          heroinitiative: 'First',
          monsterinitiative: 'Second'
        });
      } else if (this.Heroinitiative > this.Monsterinitiative) {
        this.setState({
          monsterinitiative: 'First',
          heroinitiative: 'Second'
        });
      } else {
        this.setState({
          heroinitiative: 'ReRoll',
          monsterinitiative: 'ReRoll'
        });
      }

      ;
      this.setState({
        herodidhit: '',
        monsterdidhit: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "DandD_character Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Name: "), this.state.heroName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, " ", this.state.herostats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, " ", this.state.herostats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, " ", this.state.herostats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, " ", this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Damage per hit:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, " ", this.state.heroDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Hero Float-right",
        src: "../static/images/hero.png",
        alt: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setherostats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.heroNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Name: "), this.state.monsterName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        className: "DandDstat_table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Strength:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, " ", this.state.monsterstats.Str)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Constitution:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, " ", this.state.monsterstats.Const)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Dexterity:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, " ", this.state.monsterstats.Dext)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Hitpoints:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, " ", this.state.monsterHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Base Damage:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, " ", this.state.monsterDmg)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "DnD_Monster Float-right",
        src: "../static/images/monster.png",
        alt: "monster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Stats-roll align-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.setMonsterstats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Name:", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        maxLength: "20",
        value: this.state.value,
        onChange: this.monsterNameChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, this.state.heroAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, this.state.heroHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.heroattackroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Hero Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, this.state.herodidhit)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Initiative DandD_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.rollforiniative,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Roll for iniative")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Heroinitiative center Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "Hero ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, this.state.heroinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Monsterinitiative center Fsize-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, "Monster initiative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, this.state.monsterinitiative)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HeroHP-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/herohp.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HeroHP-text Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, this.state.heroHp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MonsterHP-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/monsterhp.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "MonsterHP-text Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, this.state.monsterHp))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "AC-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/acicon.png",
        alt: "shield",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "AC-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, this.state.monsterAc)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "HitAdj-Icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "../static/images/hitadjust.png",
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "HitAdj-Icon-text Fsize-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, this.state.monsterHitAdj)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-roll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.monsterattackroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Monster Roll for Attack")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "Attack-result Fsize-3 center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, this.state.monsterdidhit)));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AttackSim);

/***/ })

})
//# sourceMappingURL=DandDpage.js.a3dfc0f8399452fdf5a6.hot-update.js.map
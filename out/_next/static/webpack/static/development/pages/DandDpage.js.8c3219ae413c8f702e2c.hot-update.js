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
/* harmony import */ var _customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customComponents */ "./pages/customComponents.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandD\\attacksim.js";






var AttackSim =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSim, _React$Component);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AttackSim).call(this, props));
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
        Hp: 50,
        ArmorClass: 10,
        Damage: 10,
        HitAdj: 0
      },
      heroHp: 0,
      heroAc: 0,
      heroDmg: 0,
      heroHitAdj: 0,
      heroNametext: '',
      heroName: 'Hero',
      heroInitiative: 0,
      heroAttackVisible: false,
      heroRoll: 0,
      heroDidHit: '',
      monsterHp: 0,
      monsterAc: 0,
      monsterDmg: 0,
      monsterHitAdj: 0,
      monsterNametext: '',
      monsterName: 'Monster',
      monsterInitiative: 0,
      monsterAttackVisible: false,
      monsterRoll: 0,
      monsterDidHit: ''
    }; //Hero bind function statements

    _this.setherostats = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["setherostats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroConstAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroacAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroacAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroDmgAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetheroHitAdj = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["SetheroHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameSubmit = _this.heroNameSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroattackroll = _herofunctions__WEBPACK_IMPORTED_MODULE_7__["heroattackroll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroAttackTurn = _this.heroAttackTurn.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //monster bind function statements

    _this.setmonsterstats = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["setmonsterstats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterConstAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsteracAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsteracAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterDmgAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterDmgAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetmonsterHitAdj = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["SetmonsterHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameSubmit = _this.monsterNameSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterattackroll = _monsterfunctions__WEBPACK_IMPORTED_MODULE_8__["monsterattackroll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterAttackTurn = _this.monsterAttackTurn.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.rollforiniative = _this.rollforiniative.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSim, [{
    key: "heroNameChange",
    value: function heroNameChange(event) {
      this.setState({
        heroNametext: event.target.value
      });
    }
  }, {
    key: "heroNameSubmit",
    value: function heroNameSubmit(event) {
      this.setState({
        heroName: this.state.heroNametext
      });
    }
  }, {
    key: "monsterNameChange",
    value: function monsterNameChange(event) {
      this.setState({
        monsterNametext: event.target.value
      });
    }
  }, {
    key: "monsterNameSubmit",
    value: function monsterNameSubmit(event) {
      this.setState({
        monsterName: this.state.monsterNametext
      });
    } //initiative shows what character attacks first

  }, {
    key: "rollforiniative",
    value: function rollforiniative() {
      this.Heroinitiative = Math.floor(Math.random() * 10 + 1);
      this.Monsterinitiative = Math.floor(Math.random() * 10 + 1);

      if (this.Heroinitiative < this.Monsterinitiative) {
        this.setState({
          heroInitiative: 'First',
          monsterInitiative: 'Second',
          heroAttackVisible: true
        });
      } else if (this.Heroinitiative > this.Monsterinitiative) {
        this.setState({
          monsterInitiative: 'First',
          heroInitiative: 'Second',
          monsterAttackVisible: true
        });
      } else {
        this.setState({
          heroInitiative: 'ReRoll',
          monsterInitiative: 'ReRoll',
          heroAttackVisible: false,
          monsterAttackVisible: false
        });
      }

      ; //clears out the hit/miss comments since it is a new round.

      this.setState({
        heroDidHit: '',
        monsterDidHit: '',
        heroRoll: 0,
        monsterRoll: 0
      });
    }
  }, {
    key: "heroAttackTurn",
    value: function heroAttackTurn() {
      if (this.state.monsterHp === 'Dead' || this.state.heroInitiative === 'Second') {
        this.setState(function (state) {
          return {
            heroAttackVisible: !state.heroAttackVisible
          };
        });
      } else {
        this.setState(function (state) {
          return {
            monsterAttackVisible: !state.monsterAttackVisible,
            heroAttackVisible: !state.heroAttackVisible
          };
        });
      }
    }
  }, {
    key: "monsterAttackTurn",
    value: function monsterAttackTurn() {
      if (this.state.heroHp === 'Dead' || this.state.monsterInitiative === 'Second') {
        this.setState(function (state) {
          return {
            monsterAttackVisible: !state.monsterAttackVisible
          };
        });
      } else {
        this.setState(function (state) {
          return {
            monsterAttackVisible: !state.monsterAttackVisible,
            heroAttackVisible: !state.heroAttackVisible
          };
        });
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CenterFlexWrapDiv"], {
        className: "m-0 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1 bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Hero Name: "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info ml-5 h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, this.state.heroName))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.herostats.Str,
        Constitution: this.state.herostats.Const,
        Dexterity: this.state.herostats.Dext,
        Hitpoints: this.state.heroHp,
        Damage: this.state.heroDmg,
        ImgUrl: "../static/images/hero.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setherostats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        value: this.state.value,
        NameChange: this.heroNameChange,
        NameSubmit: this.heroNameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1  bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Monster Name: "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info ml-5 h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, this.state.monsterName)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.monsterstats.Str,
        Constitution: this.state.monsterstats.Const,
        Dexterity: this.state.monsterstats.Dext,
        Hitpoints: this.state.monsterHp,
        Damage: this.state.monsterDmg,
        ImgUrl: "../static/images/monster.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setmonsterstats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Set Attrubutes")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        value: this.state.value,
        NameChange: this.monsterNameChange,
        NameSubmit: this.monsterNameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["CenterFlexWrapDiv"], {
        className: "m-0 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark m-1 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.heroAc,
        HitAdj: this.state.heroHitAdj,
        AttackRoll: this.heroattackroll,
        RollTitle: "Hero Roll for Attack",
        Roll: this.state.heroRoll,
        DidHit: this.state.heroDidHit,
        NextTurn: this.heroAttackTurn,
        AttackTurn: this.state.heroAttackVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark m-1 p-0 col",
        xs: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center bg-dark m-0 p-0 text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "button",
        className: "m-5 w-50",
        onClick: this.rollforiniative,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Roll for iniative"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "w-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, this.state.heroName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, this.state.heroInitiative != "Second" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, this.state.heroInitiative) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, this.state.heroInitiative))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Hit Points:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, this.state.heroHp != "Dead" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, this.state.heroHp) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, this.state.heroHp))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, this.state.monsterName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "iniative:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, this.state.monsterInitiative != "Second" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, this.state.monsterInitiative) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, this.state.monsterInitiative))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "Hit Points:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "text-center mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, this.state.monsterHp != "Dead" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, this.state.monsterHp) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-danger h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, this.state.monsterHp)))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark m-1 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.monsterAc,
        HitAdj: this.state.monsterHitAdj,
        AttackRoll: this.monsterattackroll,
        RollTitle: "Monster Roll for Attack",
        Roll: this.state.monsterRoll,
        DidHit: this.state.monsterDidHit,
        NextTurn: this.monsterAttackTurn,
        AttackTurn: this.state.monsterAttackVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }))));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AttackSim);

/***/ })

})
//# sourceMappingURL=DandDpage.js.8c3219ae413c8f702e2c.hot-update.js.map
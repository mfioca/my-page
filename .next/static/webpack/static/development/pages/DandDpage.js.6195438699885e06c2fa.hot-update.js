webpackHotUpdate("static\\development\\pages\\DandDpage.js",{

/***/ "./components/DandDfunctions.js":
/*!**************************************!*\
  !*** ./components/DandDfunctions.js ***!
  \**************************************/
/*! exports provided: SetConstAdj, SetAcAdj, SetDmgHitAdj, setherostats, setmonsterstats, RollforIniative, AttackRoll, AttackTurn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetConstAdj", function() { return SetConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAcAdj", function() { return SetAcAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetDmgHitAdj", function() { return SetDmgHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setherostats", function() { return setherostats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setmonsterstats", function() { return setmonsterstats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollforIniative", function() { return RollforIniative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackRoll", function() { return AttackRoll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackTurn", function() { return AttackTurn; });
//sets hitpoints based on constitution stat number.
function SetConstAdj(constitution) {
  if (constitution == 1) {
    return -3;
  }

  if (constitution == 2 || constitution == 3) {
    return -2;
  }

  if (constitution >= 4 && constitution <= 6) {
    return -1;
  }

  if (constitution >= 7 && constitution <= 14) {
    return 0;
  }

  if (constitution == 15) {
    return 1;
  }

  if (constitution == 16) {
    return 2;
  }

  if (constitution == 17) {
    return 3;
  }

  if (constitution == 18) {
    return 4;
  }

  if (constitution == 19) {
    return 5;
  }

  if (constitution == 20) {
    return 6;
  }
}
; //sets Armorclass based on dexterity stat number.

function SetAcAdj(dexterity) {
  if (dexterity == 1 || dexterity == 2) {
    return -5;
  }

  if (dexterity == 3) {
    return -4;
  }

  if (dexterity == 4) {
    return -3;
  }

  if (dexterity == 5) {
    return -2;
  }

  if (dexterity == 6) {
    return -1;
  }

  if (dexterity >= 7 && dexterity <= 14) {
    return 0;
  }

  if (dexterity == 15) {
    return 1;
  }

  if (dexterity == 16) {
    return 2;
  }

  if (dexterity == 17) {
    return 3;
  }

  if (dexterity == 18 || dexterity == 19) {
    return 4;
  }

  if (dexterity == 20) {
    return 5;
  }
} //sets damage and hit adjustment based on strength stat number.

function SetDmgHitAdj(strength) {
  if (strength == 1) {
    return -4;
  }

  if (strength == 2 || strength == 3) {
    return -3;
  }

  if (strength == 4 || strength == 5) {
    return -2;
  }

  if (strength == 6 || strength == 7) {
    return -1;
  }

  if (strength >= 8 && strength <= 16) {
    return 0;
  }

  if (strength == 17) {
    return 1;
  }

  if (strength == 18) {
    return 2;
  }

  if (strength == 19) {
    return 3;
  }

  if (strength == 20) {
    return 4;
  }
}
/* ************************
*   Stat functions        * 
**************************/
//sets stats including base role 1-20 than applies above functions.

function setherostats() {
  //performs a 1-20 roll for every item in the "herostats" object/state
  for (var Stat in this.state.herostats) {
    this.state.herostats[Stat] = Math.floor(Math.random() * 20 + 1);
  }

  ;
  this.setState({
    //sets adjusted items based on herostats numbers in the set..adj functions
    heroHp: this.state.base.Hp + this.SetConstAdj(this.state.herostats.Const),
    heroAc: this.state.base.ArmorClass + this.SetAcAdj(this.state.herostats.Dext),
    heroDmg: this.state.base.Damage + this.SetDmgHitAdj(this.state.herostats.Str),
    heroHitAdj: this.SetDmgHitAdj(this.state.herostats.Str)
  });
} //sets stats including base role 1-20 than applies above functions.

function setmonsterstats() {
  //performs a 1-20 roll for every item in the "monsterstats" object/state
  for (var key in this.state.monsterstats) {
    this.state.monsterstats[key] = Math.floor(Math.random() * 20 + 1);
  }

  ;
  this.setState({
    //sets adjusted items based on monsterstats numbers in the set..adj functions
    monsterHp: this.state.base.Hp + this.SetConstAdj(this.state.monsterstats.Const),
    monsterAc: this.state.base.ArmorClass + this.SetAcAdj(this.state.monsterstats.Dext),
    monsterDmg: this.state.base.Damage + this.SetDmgHitAdj(this.state.monsterstats.Str),
    monsterHitAdj: this.SetDmgHitAdj(this.state.monsterstats.Str)
  });
}
/* ***********************
*    Attack functions    * 
*************************/
//initiative shows what character attacks first

function RollforIniative() {
  var heroinit = Math.floor(Math.random() * 10 + 1);
  var monsterinit = Math.floor(Math.random() * 10 + 1);

  if (heroinit < monsterinit) {
    this.setState({
      heroInitiative: 'First',
      monsterInitiative: 'Second',
      heroAttackVisible: true,
      //displays attack button
      initiativeButtonVisible: false
    });
  } else if (heroinit > monsterinit) {
    this.setState({
      monsterInitiative: 'First',
      heroInitiative: 'Second',
      monsterAttackVisible: true,
      //displays attack button
      initiativeButtonVisible: false
    });
  } else {
    this.setState({
      heroInitiative: 'ReRoll',
      monsterInitiative: 'ReRoll',
      //hides attck buttons due to reroll
      heroAttackVisible: false,
      monsterAttackVisible: false
    });
  }

  ; //clears out the hit/miss comments and roll result since it is a new round.

  this.setState({
    heroDidHit: '',
    monsterDidHit: '',
    heroRoll: 0,
    monsterRoll: 0
  });
}
/* determins if attack is successful depending on attack turn(set by attackvisible state).  adjusts for
armor class and hit adjustment.  on successful attack role, applies damage
to hp and if hp reaches zero alerts that character is dead */

function AttackRoll() {
  if (this.state.heroAttackVisible === true) {
    var attackroll = parseInt(Math.random() * 20 + 1);
    var adjattackroll = attackroll + this.state.heroHitAdj;
    var critstrike = this.state.heroDmg * 2;

    if (attackroll < 20 && adjattackroll >= this.state.monsterAc) {
      this.setState({
        heroDidHit: 'Hit',
        heroRoll: adjattackroll
      }); //performs check to see if the monster hp after hero damange is 0 or lower

      if (this.state.monsterHp - this.state.heroDmg <= 0) {
        this.setState({
          monsterHp: 'Dead',
          heroRoll: adjattackroll // if yes, monster is dead

        });
      } else {
        this.setState({
          monsterHp: this.state.monsterHp - this.state.heroDmg
        });
      }
    } else if (attackroll === 20) {
      this.setState({
        heroDidHit: 'Hit',
        heroRoll: 'Crit Strike'
      });

      if (this.state.monsterHp - critstrike <= 0) {
        this.setState({
          monsterHp: 'Dead',
          heroRoll: 'Crit Strike' // if yes, monster is dead

        });
      } else {
        this.setState({
          monsterHp: this.state.monsterHp - critstrike
        });
      }
    } else {
      this.setState({
        heroDidHit: 'Miss',
        heroRoll: adjattackroll
      });
    }

    ;
  }

  if (this.state.monsterAttackVisible === true) {
    var _attackroll = parseInt(Math.random() * 20 + 1);

    var _adjattackroll = _attackroll + this.state.monsterHitAdj;

    var _critstrike = this.state.monsterDmg * 2;

    if (_attackroll < 20 && _adjattackroll >= this.state.heroAc) {
      this.setState({
        monsterDidHit: 'Hit',
        monsterRoll: _adjattackroll
      }); //performs check to see if the hero hp after monster damange is 0 or lower

      if (this.state.heroHp - this.state.monsterDmg <= 0) {
        this.setState({
          heroHp: 'Dead',
          monsterRoll: _adjattackroll // if yes, hero is dead

        });
      } else {
        //if no, sets the herohp state to reflect new damage
        this.setState({
          heroHp: this.state.heroHp - this.state.monsterDmg
        });
      }
    } else if (_attackroll === 20) {
      this.setState({
        monsterDidHit: 'Hit',
        monsterRoll: 'Crit Strike'
      });

      if (this.state.heroHp - _critstrike <= 0) {
        this.setState({
          heroHp: 'Dead',
          monsterRoll: 'Crit Strike' // if yes, monster is dead

        });
      } else {
        this.setState({
          heroHp: this.state.heroHp - _critstrike
        });
      }
    } else {
      this.setState({
        monsterDidHit: 'Miss',
        monsterRoll: _adjattackroll
      });
    }

    ;
  }

  this.AttackTurn();
}
/*function to determine where and when the attack button should be displayed based on initiative
setting. Function is called when the attack button is pressed in attackSection (Attackbutton() ) */

function AttackTurn() {
  if (this.state.heroAttackVisible === true) {
    if (this.state.monsterHp === 'Dead' || this.state.heroInitiative === 'Second') {
      this.setState(function (state) {
        return {
          heroAttackVisible: !state.heroAttackVisible
        };
      });
      this.setState({
        initiativeButtonVisible: true
      });
    } else {
      //if hero goes first, makes sure attack button on monster area is hidden 
      //and displays attack button for hero.
      this.setState(function (state) {
        return {
          monsterAttackVisible: !state.monsterAttackVisible,
          heroAttackVisible: !state.heroAttackVisible
        };
      });
    }
  }

  if (this.state.monsterAttackVisible === true) {
    if (this.state.heroHp === 'Dead' || this.state.monsterInitiative === 'Second') {
      this.setState(function (state) {
        return {
          monsterAttackVisible: !state.monsterAttackVisible
        };
      });
      this.setState({
        initiativeButtonVisible: true
      });
    } else {
      this.setState(function (state) {
        return (//if monster goes first, makes sure attack button on hero area is hidden 
          //and displays attack button for monster.
          {
            monsterAttackVisible: !state.monsterAttackVisible,
            heroAttackVisible: !state.heroAttackVisible
          }
        );
      });
    }
  }
}
;

/***/ }),

/***/ "./pages/DandDpage.js":
/*!****************************!*\
  !*** ./pages/DandDpage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DandDfunctions */ "./components/DandDfunctions.js");
/* harmony import */ var _components_customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/customComponents */ "./components/customComponents.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandDpage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var AttackSim = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSim, _React$Component);

  var _super = _createSuper(AttackSim);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttackSim);

    _this = _super.call(this, props);
    _this.state = {
      base: {
        Hp: 50,
        ArmorClass: 10,
        Damage: 10
      },
      herostats: {
        Str: 0,
        Const: 0,
        Dext: 0
      },
      monsterstats: {
        Str: 0,
        Const: 0,
        Dext: 0
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
      monsterDidHit: '',
      initiativeButtonVisible: true
    }; //Hero bind function statements

    _this.setherostats = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["setherostats"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.heroNameSubmit = _this.heroNameSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); //monster bind function statements

    _this.setmonsterstats = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["setmonsterstats"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.monsterNameSubmit = _this.monsterNameSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); //combined hero/monster function statesments

    _this.SetConstAdj = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["SetConstAdj"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.SetAcAdj = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["SetAcAdj"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.SetDmgHitAdj = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["SetDmgHitAdj"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.RollforIniative = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["RollforIniative"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.AttackRoll = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["AttackRoll"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.AttackTurn = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["AttackTurn"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttackSim, [{
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
    }
  }, {
    key: "IntButton",
    value: function IntButton() {
      if (this.state.initiativeButtonVisible === true) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          className: "m-5 w-50",
          onClick: this.RollforIniative,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }
        }, "Roll for iniative");
      } else {
        return __jsx("h4", {
          className: "text-white m-5 text-center",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 17
          }
        }, "Round in Progress");
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CenterFlexWrapDiv"], {
        className: "m-0 p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "w-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1 bg-dark text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "mt-5 ml-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 29
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 55
        }
      }, "Hero Name: "), __jsx("span", {
        className: "text-info ml-5 h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 33
        }
      }, this.state.heroName)), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.herostats.Str,
        Constitution: this.state.herostats.Const,
        Dexterity: this.state.herostats.Dext,
        Hitpoints: this.state.heroHp,
        Damage: this.state.heroDmg,
        ImgUrl: "../static/images/hero.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "text-center m-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setherostats,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 33
        }
      }, "Set Attrubutes")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        Value: this.state.value,
        NameChange: this.heroNameChange,
        NameSubmit: this.heroNameSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 29
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1 bg-dark text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "mt-5 ml-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 29
        }
      }, __jsx("b", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 55
        }
      }, "Monster Name: "), __jsx("span", {
        className: "text-info ml-5 h3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 33
        }
      }, this.state.monsterName)), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.monsterstats.Str,
        Constitution: this.state.monsterstats.Const,
        Dexterity: this.state.monsterstats.Dext,
        Hitpoints: this.state.monsterHp,
        Damage: this.state.monsterDmg,
        ImgUrl: "../static/images/monster.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "text-center m-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 29
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setmonsterstats,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 33
        }
      }, "Set Attrubutes")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        Value: this.state.value,
        NameChange: this.monsterNameChange,
        NameSubmit: this.monsterNameSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 29
        }
      })))), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CenterFlexWrapDiv"], {
        className: "m-0 p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "bg-dark m-1 p-0 mb-2 col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.heroAc,
        HitAdj: this.state.heroHitAdj,
        AttackRoll: this.AttackRoll,
        RollTitle: "Hero Roll for Attack",
        Roll: this.state.heroRoll,
        DidHit: this.state.heroDidHit,
        NextTurn: this.AttackTurn,
        AttackTurn: this.state.heroAttackVisible,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "bg-dark m-1 mb-2 p-0 col text-center text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }
      }, this.IntButton(), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "w-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 29
        }
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackStatusDisplay"], {
        Name: this.state.heroName,
        Initiative: this.state.heroInitiative,
        HP: this.state.heroHp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 33
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 29
        }
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackStatusDisplay"], {
        Name: this.state.monsterName,
        Initiative: this.state.monsterInitiative,
        HP: this.state.monsterHp,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 33
        }
      })))), __jsx("div", {
        className: "bg-dark m-1 p-0 mb-2 col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.monsterAc,
        HitAdj: this.state.monsterHitAdj,
        AttackRoll: this.AttackRoll,
        RollTitle: "Monster Roll for Attack",
        Roll: this.state.monsterRoll,
        DidHit: this.state.monsterDidHit,
        NextTurn: this.AttackTurn,
        AttackTurn: this.state.monsterAttackVisible,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function DandD() {
  return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "ml-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, "Dungeons and Dragons attack simulation"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, "Calculations are based on SE 2 rules from late 80's and early 90's."), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, "Instructions:"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "Press the \"Set Attributes\" buttons for both Hero and Monster."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, "Press the \"Roll for Initiative\" button to see who attacks first."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, "Follow the instructions and press the \"Roll for Attack\" buttons."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, "After each round, repeat by rolling for Initiative and continue attacking until a character dies."))), __jsx(AttackSim, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DandD);

/***/ })

})
//# sourceMappingURL=DandDpage.js.6195438699885e06c2fa.hot-update.js.map
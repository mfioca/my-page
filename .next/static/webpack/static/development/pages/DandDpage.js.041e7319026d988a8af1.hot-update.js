webpackHotUpdate("static\\development\\pages\\DandDpage.js",{

/***/ "./pages/DandDpage.js":
/*!****************************!*\
  !*** ./pages/DandDpage.js ***!
  \****************************/
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
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DandDfunctions */ "./components/DandDfunctions.js");
/* harmony import */ var _components_customComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/customComponents */ "./components/customComponents.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\Mark\\Desktop\\newtest\\my-page\\pages\\DandDpage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var AttackSim =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AttackSim, _React$Component);

  function AttackSim(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AttackSim);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AttackSim).call(this, props));
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

    _this.setherostats = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["setherostats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameChange = _this.heroNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.heroNameSubmit = _this.heroNameSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //monster bind function statements

    _this.setmonsterstats = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["setmonsterstats"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameChange = _this.monsterNameChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.monsterNameSubmit = _this.monsterNameSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //combined hero/monster function statesments

    _this.SetConstAdj = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["SetConstAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetAcAdj = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["SetAcAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.SetDmgHitAdj = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["SetDmgHitAdj"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.RollforIniative = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["RollforIniative"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.AttackRoll = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["AttackRoll"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.AttackTurn = _components_DandDfunctions__WEBPACK_IMPORTED_MODULE_8__["AttackTurn"].bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
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
    }
  }, {
    key: "IntButton",
    value: function IntButton() {
      if (this.state.initiativeButtonVisible === true) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          className: "m-5 w-50",
          onClick: this.RollforIniative,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Roll for iniative");
      } else {
        return __jsx("h4", {
          className: "text-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Not your turn");
      }

      ;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CenterFlexWrapDiv"], {
        className: "m-0 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1 bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("h5", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Hero Name: "), __jsx("span", {
        className: "text-info ml-5 h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, this.state.heroName)), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.herostats.Str,
        Constitution: this.state.herostats.Const,
        Dexterity: this.state.herostats.Dext,
        Hitpoints: this.state.heroHp,
        Damage: this.state.heroDmg,
        ImgUrl: "../static/images/hero.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), __jsx("div", {
        className: "text-center m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setherostats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Set Attrubutes")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        Value: this.state.value,
        NameChange: this.heroNameChange,
        NameSubmit: this.heroNameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "m-1 bg-dark text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("h5", {
        className: "mt-5 ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Monster Name: "), __jsx("span", {
        className: "text-info ml-5 h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, this.state.monsterName)), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CharacterSheet"], {
        Strength: this.state.monsterstats.Str,
        Constitution: this.state.monsterstats.Const,
        Dexterity: this.state.monsterstats.Dext,
        Hitpoints: this.state.monsterHp,
        Damage: this.state.monsterDmg,
        ImgUrl: "../static/images/monster.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), __jsx("div", {
        className: "text-center m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.setmonsterstats,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Set Attrubutes")), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["NameForm"], {
        Value: this.state.value,
        NameChange: this.monsterNameChange,
        NameSubmit: this.monsterNameSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })))), __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["CenterFlexWrapDiv"], {
        className: "m-0 p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("div", {
        className: "bg-dark m-1 p-0 mb-2 col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.heroAc,
        HitAdj: this.state.heroHitAdj,
        AttackRoll: this.AttackRoll,
        RollTitle: "Hero Roll for Attack",
        Roll: this.state.heroRoll,
        DidHit: this.state.heroDidHit,
        NextTurn: this.AttackTurn,
        AttackTurn: this.state.heroAttackVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), __jsx("div", {
        className: "bg-dark m-1 mb-2 p-0 col text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, this.IntButton(), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "w-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackStatusDisplay"], {
        Name: this.state.heroName,
        Initiative: this.state.heroInitiative,
        HP: this.state.heroHp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackStatusDisplay"], {
        Name: this.state.monsterName,
        Initiative: this.state.monsterInitiative,
        HP: this.state.monsterHp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      })))), __jsx("div", {
        className: "bg-dark m-1 p-0 mb-2 col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx(_components_customComponents__WEBPACK_IMPORTED_MODULE_9__["AttackSection"], {
        AC: this.state.monsterAc,
        HitAdj: this.state.monsterHitAdj,
        AttackRoll: this.AttackRoll,
        RollTitle: "Monster Roll for Attack",
        Roll: this.state.monsterRoll,
        DidHit: this.state.monsterDidHit,
        NextTurn: this.AttackTurn,
        AttackTurn: this.state.monsterAttackVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }))));
    }
  }]);

  return AttackSim;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function DandD() {
  return __jsx(_components_layout_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("div", {
    className: "ml-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Dungeons and Dragons attack simulation"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Calculations are based on SE 2 rules from late 80's and early 90's."), __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Instructions:"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Press the \"Set Attributes\" buttons for both Hero and Monster."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Press the \"Roll for Initiative\" button to see who attacks first."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Follow the instructions and press the \"Roll for Attack\" buttons."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "After each round, repeat by rolling for Initiative and continue attacking until a character dies."))), __jsx(AttackSim, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DandD);

/***/ })

})
//# sourceMappingURL=DandDpage.js.041e7319026d988a8af1.hot-update.js.map
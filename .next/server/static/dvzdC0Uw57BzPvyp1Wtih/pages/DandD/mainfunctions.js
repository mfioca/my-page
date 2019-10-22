module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JSfB");


/***/ }),

/***/ "JSfB":
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

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
      heroAttackVisible: true //displays attack button

    });
  } else if (heroinit > monsterinit) {
    this.setState({
      monsterInitiative: 'First',
      heroInitiative: 'Second',
      monsterAttackVisible: true //displays attack button

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
    var attackroll = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.random() * 20 + 1);

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
    var _attackroll = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.random() * 20 + 1);

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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });
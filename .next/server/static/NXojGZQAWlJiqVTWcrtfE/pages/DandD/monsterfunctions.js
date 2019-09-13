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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W1xQ");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "W1xQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterConstAdj", function() { return SetmonsterConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterDmgAdj", function() { return SetmonsterDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsterHitAdj", function() { return SetmonsterHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetmonsteracAdj", function() { return SetmonsteracAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setmonsterstats", function() { return setmonsterstats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monsterattackroll", function() { return monsterattackroll; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

 //sets monster hit point adjustment based on constitution stat number.

function SetmonsterConstAdj() {
  if (this.state.monsterstats.Const == 1) {
    return -3;
  }

  if (this.state.monsterstats.Const == 2 || this.state.monsterstats.Const == 3) {
    return -2;
  }

  if (this.state.monsterstats.Const >= 4 && this.state.monsterstats.Const <= 6) {
    return -1;
  }

  if (this.state.monsterstats.Const >= 7 && this.state.monsterstats.Const <= 14) {
    return 0;
  }

  if (this.state.monsterstats.Const == 15) {
    return 1;
  }

  if (this.state.monsterstats.Const == 16) {
    return 2;
  }

  if (this.state.monsterstats.Const == 17) {
    return 3;
  }

  if (this.state.monsterstats.Const == 18) {
    return 4;
  }

  if (this.state.monsterstats.Const == 19) {
    return 5;
  }

  if (this.state.monsterstats.Const == 20) {
    return 6;
  }
}

; //sets monster armor class adjustment based on dexterity stat number.

function SetmonsteracAdj() {
  if (this.state.monsterstats.Dext == 1 || this.state.monsterstats.Dext == 2) {
    return -5;
  }

  if (this.state.monsterstats.Dext == 3) {
    return -4;
  }

  if (this.state.monsterstats.Dext == 4) {
    return -3;
  }

  if (this.state.monsterstats.Dext == 5) {
    return -2;
  }

  if (this.state.monsterstats.Dext == 6) {
    return -1;
  }

  if (this.state.monsterstats.Dext >= 7 && this.state.monsterstats.Dext <= 14) {
    return 0;
  }

  if (this.state.monsterstats.Dext == 15) {
    return 1;
  }

  if (this.state.monsterstats.Dext == 16) {
    return 2;
  }

  if (this.state.monsterstats.Dext == 17) {
    return 3;
  }

  if (this.state.monsterstats.Dext == 18 || this.state.monsterstats.Dext == 19) {
    return 4;
  }

  if (this.state.monsterstats.Dext == 20) {
    return 5;
  }
} //sets monster damage based on strength stat number.


function SetmonsterDmgAdj() {
  if (this.state.monsterstats.Str == 1) {
    return -4;
  }

  if (this.state.monsterstats.Str == 2 || this.state.monsterstats.Str == 3) {
    return -3;
  }

  if (this.state.monsterstats.Str == 4 || this.state.monsterstats.Str == 5) {
    return -2;
  }

  if (this.state.monsterstats.Str == 6 || this.state.monsterstats.Str == 7) {
    return -1;
  }

  if (this.state.monsterstats.Str >= 8 && this.state.monsterstats.Str <= 16) {
    return 0;
  }

  if (this.state.monsterstats.Str == 17) {
    return 1;
  }

  if (this.state.monsterstats.Str == 18) {
    return 2;
  }

  if (this.state.monsterstats.Str == 19) {
    return 3;
  }

  if (this.state.monsterstats.Str == 20) {
    return 4;
  }
} //sets monster hit adjustment based on strength stat number.


function SetmonsterHitAdj() {
  if (this.state.monsterstats.Str == 1) {
    return -4;
  }

  if (this.state.monsterstats.Str == 2 || this.state.monsterstats.Str == 3) {
    return -3;
  }

  if (this.state.monsterstats.Str == 4 || this.state.monsterstats.Str == 5) {
    return -2;
  }

  if (this.state.monsterstats.Str == 6 || this.state.monsterstats.Str == 7) {
    return -1;
  }

  if (this.state.monsterstats.Str >= 8 && this.state.monsterstats.Str <= 16) {
    return 0;
  }

  if (this.state.monsterstats.Str == 17) {
    return 1;
  }

  if (this.state.monsterstats.Str == 18) {
    return 2;
  }

  if (this.state.monsterstats.Str == 19) {
    return 3;
  }

  if (this.state.monsterstats.Str == 20) {
    return 4;
  }
} //sets stats including base role 1-20 than applies above functions.


function setmonsterstats() {
  //performs a 1-20 roll for every item in the "monsterstats" object/state
  for (var key in this.state.monsterstats) {
    this.state.monsterstats[key] = Math.floor(Math.random() * 20 + 1);
  }

  ;
  this.setState({
    //sets adjusted items based on monsterstats numbers in the set..adj functions
    monsterHp: this.state.monsterbase.Hp + this.SetmonsterConstAdj(),
    monsterAc: this.state.monsterbase.ArmorClass + this.SetmonsteracAdj(),
    monsterDmg: this.state.monsterbase.Damage + this.SetmonsterDmgAdj(),
    monsterHitAdj: this.state.monsterbase.HitAdj + this.SetmonsterHitAdj()
  });
}
/* determins if the monster successfully hits the hero.  adjusts for hero
armor class andmonster hit adjustment.  on successful attack role, applies damage
to hero hp and if hp reaches zero alerts that hero is dead */


function monsterattackroll() {
  var attackroll = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.random() * 20 + 1);

  var adjattackroll = attackroll + this.state.monsterHitAdj;
  var critstrike = this.state.monsterDmg * 2;

  if (attackroll < 20 && adjattackroll >= this.state.heroAc) {
    this.setState({
      monsterDidHit: 'Hit',
      monsterRoll: adjattackroll
    }); //performs check to see if the hero hp after monster damange is 0 or lower

    if (this.state.heroHp - this.state.monsterDmg <= 0) {
      this.setState({
        heroHp: 'Dead',
        monsterRoll: adjattackroll
      }); // if yes, hero is dead
    } else {
      //if no, sets the herohp state to reflect new damage
      this.setState({
        heroHp: this.state.heroHp - this.state.monsterDmg
      });
    }
  } else if (attackroll >= 20) {
    this.setState({
      monsterDidHit: 'Hit',
      monsterRoll: 'Crit Strike'
    });

    if (this.state.heroHp - critstrike <= 0) {
      this.setState({
        heroHp: 'Dead',
        monsterRoll: 'Crit Strike'
      }); // if yes, monster is dead
    } else {
      this.setState({
        heroHp: this.state.heroHp - critstrike
      });
    }
  } else {
    this.setState({
      monsterDidHit: 'Miss',
      monsterRoll: adjattackroll
    });
  }

  ;
}

;

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });
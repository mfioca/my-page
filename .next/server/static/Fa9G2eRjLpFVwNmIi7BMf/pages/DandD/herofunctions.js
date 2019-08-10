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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XEZY");


/***/ }),

/***/ "XEZY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroConstAdj", function() { return SetheroConstAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroacAdj", function() { return SetheroacAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroDmgAdj", function() { return SetheroDmgAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetheroHitAdj", function() { return SetheroHitAdj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setherostats", function() { return setherostats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroattackroll", function() { return heroattackroll; });
//sets hero hitpoints based on constitution stat number.
function SetheroConstAdj() {
  if (this.state.herostats.Const == 1) {
    return -3;
  }

  if (this.state.herostats.Const == 2 || this.state.herostats.Const == 3) {
    return -2;
  }

  if (this.state.herostats.Const >= 4 && this.state.herostats.Const <= 6) {
    return -1;
  }

  if (this.state.herostats.Const >= 7 && this.state.herostats.Const <= 14) {
    return 0;
  }

  if (this.state.herostats.Const == 15) {
    return 1;
  }

  if (this.state.herostats.Const == 16) {
    return 2;
  }

  if (this.state.herostats.Const == 17) {
    return 3;
  }

  if (this.state.herostats.Const == 18) {
    return 4;
  }

  if (this.state.herostats.Const == 19) {
    return 5;
  }

  if (this.state.herostats.Const == 20) {
    return 6;
  }
}
; //sets hero Armorclass based on dexterity stat number.

function SetheroacAdj() {
  if (this.state.herostats.Dext == 1 || this.state.herostats.Dext == 2) {
    return -5;
  }

  if (this.state.herostats.Dext == 3) {
    return -4;
  }

  if (this.state.herostats.Dext == 4) {
    return -3;
  }

  if (this.state.herostats.Dext == 5) {
    return -2;
  }

  if (this.state.herostats.Dext == 6) {
    return -1;
  }

  if (this.state.herostats.Dext >= 7 && this.state.herostats.Dext <= 14) {
    return 0;
  }

  if (this.state.herostats.Dext == 15) {
    return 1;
  }

  if (this.state.herostats.Dext == 16) {
    return 2;
  }

  if (this.state.herostats.Dext == 17) {
    return 3;
  }

  if (this.state.herostats.Dext == 18 || this.state.herostats.Dext == 19) {
    return 4;
  }

  if (this.state.herostats.Dext == 20) {
    return 5;
  }
} //sets hero damage based on strength stat number.

function SetheroDmgAdj() {
  if (this.state.herostats.Str == 1) {
    return -4;
  }

  if (this.state.herostats.Str == 2 || this.state.herostats.Str == 3) {
    return -3;
  }

  if (this.state.herostats.Str == 4 || this.state.herostats.Str == 5) {
    return -2;
  }

  if (this.state.herostats.Str == 6 || this.state.herostats.Str == 7) {
    return -1;
  }

  if (this.state.herostats.Str >= 8 && this.state.herostats.Str <= 16) {
    return 0;
  }

  if (this.state.herostats.Str == 17) {
    return 1;
  }

  if (this.state.herostats.Str == 18) {
    return 2;
  }

  if (this.state.herostats.Str == 19) {
    return 3;
  }

  if (this.state.herostats.Str == 20) {
    return 4;
  }
} //sets hero hit adjustment based on strength stat number.

function SetheroHitAdj() {
  if (this.state.herostats.Str == 1) {
    return -4;
  }

  if (this.state.herostats.Str == 2 || this.state.herostats.Str == 3) {
    return -3;
  }

  if (this.state.herostats.Str == 4 || this.state.herostats.Str == 5) {
    return -2;
  }

  if (this.state.herostats.Str == 6 || this.state.herostats.Str == 7) {
    return -1;
  }

  if (this.state.herostats.Str >= 8 && this.state.herostats.Str <= 16) {
    return 0;
  }

  if (this.state.herostats.Str == 17) {
    return 1;
  }

  if (this.state.herostats.Str == 18) {
    return 2;
  }

  if (this.state.herostats.Str == 19) {
    return 3;
  }

  if (this.state.herostats.Str == 20) {
    return 4;
  }
} //sets stats including base role 1-20 than applies above functions.

function setherostats() {
  //performs a 1-20 roll for every item in the "herostats" object/state
  for (var key in this.state.herostats) {
    this.state.herostats[key] = Math.floor(Math.random() * 20 + 1);
  }

  ;
  this.setState({
    //sets adjusted items based on herostats numbers in the set..adj functions
    heroHp: this.state.herobase.Hp + this.SetheroConstAdj(),
    heroAc: this.state.herobase.ArmorClass + this.SetheroacAdj(),
    heroDmg: this.state.herobase.Damage + this.SetheroDmgAdj(),
    heroHitAdj: this.state.herobase.HitAdj + this.SetheroHitAdj()
  });
}
/* determins if the hero successfully hits the monster.  adjusts for monster
armor class and hero hit adjustment.  on successful attack role, applies damage
to monster hp and if hp reaches zero alerts that monster is dead */

function heroattackroll() {
  //1-20 for attack roll to see if hero hits
  this.setState({
    heroRoll: Math.floor(Math.random() * 20 + 1)
  }); //if hero hit, set display to show "hit"

  if (this.state.heroRoll >= this.state.monsterAc + this.state.heroHitAdj) {
    this.setState({
      heroDidHit: 'Hit'
    }); //performs check to see if the monster hp after hero damange is 0 or lower

    if (this.state.monsterHp - this.state.heroDmg <= 0) {
      this.setState({
        monsterHp: 'Dead'
      }); // if yes, monster is dead
    } else {
      //if no, sets the monsterohp state to reflect new damage
      this.setState({
        monsterHp: this.state.monsterHp - this.state.heroDmg
      });
    }
  } else {
    this.setState({
      heroDidHit: 'Miss'
    });
  }

  ;
}
;

/***/ })

/******/ });
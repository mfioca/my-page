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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
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
;
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
}
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
}
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
}
/*
export function SetConstAdj() {
    if (newHero.Const == 1) {
        return -3;
    }
    if (newHero.Const == 2 || newHero.Const == 3) {
        return -2;
    }
    if (newHero.Const >= 4 && newHero.Const <= 6) {
        return -1;
    }
    if (newHero.Const >= 7 && newHero.Const <= 14) {
        return 0;
    }
    if (newHero.Const == 15) {
        return 1;
    }
    if (newHero.Const == 16) {
        return 2;
    }
    if (newHero.Const == 17) {
        return 3;
    }
    if (newHero.Const == 18) {
        return 4;
    }
    if (newHero.Const == 19) {
        return 5;
    }
    if (newHero.Const == 20) {
        return 6;
    }
} 

//sets hero hit adjustment based on strength stat number.
export function setHitAdj() {
    if (newHero.Str == 1) {
        return -4;
    }
    if (newHero.Str == 2 || newHero.Str == 3) {
        return -3;
    }
    if (newHero.Str == 4 || newHero.Str == 5) {
        return -2;
    }
    if (newHero.Str == 6 || newHero.Str == 7) {
        return -1;
    }
    if (newHero.Str >= 8 && newHero.Str <= 16) {
        return 0;
    }
    if (newHero.Str == 17 ) {
        return 1;
    }
    if (newHero.Str == 18 ) {
        return 2;
    }
    if (newHero.Str == 19 ) {
        return 3;
    }
    if (newHero.Str == 20 ) {
        return 4;
    }
}

//sets hero damage adjustment based on strength stat number.
export function setDmgAdj() {
    if (newHero.Str == 1) {
        return -4;
    }
    if (newHero.Str == 2 || newHero.Str == 3) {
        return -3;
    }
    if (newHero.Str == 4 || newHero.Str == 5) {
        return -2;
    }
    if (newHero.Str == 6 || newHero.Str == 7) {
        return -1;
    }
    if (newHero.Str >= 8 && newHero.Str <= 16) {
        return 0;
    }
    if (newHero.Str == 17 ) {
        return 1;
    }
    if (newHero.Str == 18 ) {
        return 2;
    }
    if (newHero.Str == 19 ) {
        return 3;
    }
    if (newHero.Str == 20 ) {
        return 4;
    }
}

//sets hero armor class based on dexterity stat number.
export function setacAdj() {
    if (newHero.Dext == 1 || newHero.Dext == 2) {
        return -5;
    }
    if (newHero.Dext == 3) {
        return -4;
    }
    if (newHero.Dext == 4) {
        return -3;
    }
    if (newHero.Dext == 5) {
        return -2;
    }
    if (newHero.Dext == 6) {
        return -1;
    }
    if (newHero.Dext >= 7 && newHero.Dext <= 14) {
        return 0;
    }
    if (newHero.Dext == 15) {
        return 1;
    }
    if (newHero.Dext == 16) {
        return 2;
    }
    if (newHero.Dext == 17) {
        return 3;
    }
    if (newHero.Dext == 18 || newHero.Dext == 19) {
        return 4;
    }
    if (newHero.Dext == 20) {
        return 5;
    }
} */

/***/ })

/******/ });
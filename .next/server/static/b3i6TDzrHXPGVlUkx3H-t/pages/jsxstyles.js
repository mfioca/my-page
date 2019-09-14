module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ldei");


/***/ }),

/***/ "Ldei":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeImage", function() { return HomeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardStyle", function() { return HomeCardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardTitleStyle", function() { return HomeCardTitleStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageStyle", function() { return CardImageStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutImg", function() { return AboutImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DandDAvatar", function() { return DandDAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thumbnail", function() { return thumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvpageSearchBar", function() { return TvpageSearchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvImage", function() { return TvImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvTitle", function() { return TvTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCast", function() { return TvCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myStyles", function() { return myStyles; });
var HomeImage = {
  borderRadius: '50%',
  width: '20%',
  height: 'auto'
};
var HomeCardStyle = {
  width: '300px',
  height: '400px',
  marginRight: '50px',
  marginLeft: '50px',
  textAlign: 'center'
};
var HomeCardTitleStyle = {
  marginTop: '10px',
  height: '400px'
};
var CardImageStyle = {
  maxWidth: '150px',
  maxHeight: '150px',
  marginRight: 'auto',
  marginLeft: 'auto'
};
var AboutImg = {
  width: '300px',
  height: '300px',
  padding: '5px'
};
var DandDAvatar = {
  height: '300px',
  width: 'auto'
};
var thumbnail = {
  position: 'relative',
  align: 'center'
};
var TvpageSearchBar = {
  fontSize: '14px',
  marginLeft: '200px',
  marginRight: 'auto',
  textAlign: 'center'
};
var TvImage = {
  height: '300px',
  width: 'auto'
};
var TvTitle = {
  height: '20px',
  width: '200px',
  margin: 4
};
var TvCast = {
  maxHeight: '20px',
  width: '200px',
  margin: 4,
  wordWwrap: 'break-word',
  maxFontSize: '1vw' //testing an idea

};
var myStyles = {
  Theme: "Btn-Dark",
  w100: "w-100"
};

/***/ })

/******/ });
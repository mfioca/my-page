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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "0vZ9":
/***/ (function(module) {

module.exports = [{"id":1,"Name":"ACCEL","Address":"157 Barbey Street Clara, GA 60331","Phone":"+1 418 555-0114","Email":"bassmeyers@accel.com","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":2,"Name":"ACLIMA","Address":"298 Montauk Court Guilford, GA 77441","Phone":"+1 135 555-0130","Email":"lynnklein@aclima.com","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":3,"Name":"ACRODANCE","Address":"228 Withers Street Coalmont, GA 89519","Phone":"+1 781 555-0113","Email":"merlegilbert@acrodance.com","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":4,"Name":"ACUMENTOR","Address":"388 Powers Street Toftrees, GA 37766","Phone":"+1 216 555-0190","Email":"veronicawilkinson@acumentor.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":5,"Name":"AEORA","Address":"310 Manor Court Thornport, GA 45392","Phone":"+1 136 555-0172","Email":"strongmcknight@aeora.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":6,"Name":"AMTAP","Address":"322 Just Court Tioga, GA 80508","Phone":"+1 604 555-0133","Email":"herminiavelez@amtap.com","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":7,"Name":"ANACHO","Address":"800 Harkness Avenue Brule, GA 75021","Phone":"+1 789 555-0132","Email":"beasleylove@anacho.com","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":8,"Name":"ANIXANG","Address":"845 Dover Street Brantleyville, GA 59411","Phone":"+1 587 555-0191","Email":"barlowroach@anixang.com","Region":"Central","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":9,"Name":"APEX","Address":"617 Fuller Place Tilden, GA 92228","Phone":"+1 656 555-0165","Email":"chasebullock@apex.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":10,"Name":"APEXIA","Address":"572 Java Street Slovan, GA 65122","Phone":"+1 717 555-0141","Email":"cottonflowers@apexia.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":11,"Name":"APEXTRI","Address":"104 Bills Place Orviston, GA 60158","Phone":"+1 542 555-0113","Email":"annmarielandry@apextri.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":12,"Name":"APPLIDEC","Address":"816 Farragut Road Drytown, GA 39196","Phone":"+1 752 555-0137","Email":"carverholloway@applidec.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":13,"Name":"AQUAMATE","Address":"740 Regent Place Tyro, GA 26038","Phone":"+1 871 555-0115","Email":"woodardroberts@aquamate.com","Region":"Central","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":14,"Name":"AQUASSEUR","Address":"433 Linwood Street Thomasville, GA 78687","Phone":"+1 897 555-018","Email":"leolabarron@aquasseur.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":15,"Name":"AQUOAVO","Address":"688 Leonora Court Gardiner, GA 98182","Phone":"+1 285 555-0133","Email":"ettaglass@aquoavo.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":16,"Name":"ARCTIQ","Address":"736 Lamont Court Fulford, GA 63284","Phone":"+1 159 555-0123","Email":"jaimekeller@arctiq.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":17,"Name":"ARTIQ","Address":"271 Navy Street Fostoria, GA 27794","Phone":"+1 683 555-0153","Email":"talleybaxter@artiq.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":18,"Name":"ARTWORLDS","Address":"580 Lloyd Street Welch, GA 32445","Phone":"+1 842 555-0119","Email":"dianabender@artworlds.com","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":19,"Name":"ASIMILINE","Address":"104 Hinckley Place Marenisco, GA 39037","Phone":"+1 529 555-0184","Email":"saundershobbs@asimiline.com","Region":"East","County":"Franklin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":20,"Name":"ASSISTIA","Address":"497 Jodie Court Matthews, GA 37071","Phone":"+1 235 555-0139","Email":"pearliekerr@assistia.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":21,"Name":"ATGEN","Address":"773 Varanda Place Why, GA 92830","Phone":"+1 450 555-0179","Email":"mcdowellrusso@atgen.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":22,"Name":"AUSTEX","Address":"238 Ralph Avenue Canby, GA 90196","Phone":"+1 921 555-0171","Email":"reneneal@austex.com","Region":"East","County":"Jenkins","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":23,"Name":"AUTOGRATE","Address":"686 Lawrence Avenue Leyner, GA 77905","Phone":"+1 836 555-0177","Email":"penachan@autograte.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":24,"Name":"AUTOMON","Address":"193 Albany Avenue Ballico, GA 39704","Phone":"+1 714 555-0196","Email":"nielsenjoyce@automon.com","Region":"SouthWest","County":"Stewart","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":25,"Name":"BEDLAM","Address":"462 Prospect Place Newry, GA 82985","Phone":"+1 134 555-014","Email":"palmermoss@bedlam.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":26,"Name":"BIFLEX","Address":"794 Glenwood Road Bartley, GA 59497","Phone":"+1 581 555-0126","Email":"nunezgillespie@biflex.com","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":27,"Name":"BIOHAB","Address":"878 Lafayette Avenue Rivers, GA 24232","Phone":"+1 812 555-0171","Email":"lambalbert@biohab.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":28,"Name":"BITTOR","Address":"261 Sutton Street Summerset, GA 47743","Phone":"+1 938 555-0143","Email":"susannamurray@bittor.com","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":29,"Name":"BIZMATIC","Address":"846 Kimball Street Springville, GA 12152","Phone":"+1 848 555-0154","Email":"franciswhitehead@bizmatic.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":30,"Name":"BLEEKO","Address":"292 Anchorage Place Enetai, GA 66973","Phone":"+1 219 555-0125","Email":"snowtrujillo@bleeko.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":31,"Name":"BLEENDOT","Address":"310 Norfolk Street Irwin, GA 88660","Phone":"+1 449 555-0158","Email":"valariedaniels@bleendot.com","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":32,"Name":"BOSTONIC","Address":"794 Garden Place Nescatunga, GA 53900","Phone":"+1 178 555-015","Email":"harringtonmcgee@bostonic.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":33,"Name":"BRISTO","Address":"140 Foster Avenue Klagetoh, GA 25183","Phone":"+1 220 555-0128","Email":"puckettbauer@bristo.com","Region":"Central","County":"Cherokee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":34,"Name":"BUGSALL","Address":"705 Havemeyer Street Choctaw, GA 68234","Phone":"+1 119 555-0188","Email":"elenabishop@bugsall.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":35,"Name":"BULLJUICE","Address":"456 Pershing Loop Stagecoach, GA 62965","Phone":"+1 548 555-0114","Email":"vondarodgers@bulljuice.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":36,"Name":"BUNGA","Address":"722 Kossuth Place Saddlebrooke, GA 65130","Phone":"+1 432 555-0184","Email":"mandykidd@bunga.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":37,"Name":"BUZZMAKER","Address":"281 Hillel Place Turpin, GA 87070","Phone":"+1 486 555-0140","Email":"autumnbaird@buzzmaker.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":38,"Name":"CANDECOR","Address":"112 Adams Street Chloride, GA 53713","Phone":"+1 992 555-0139","Email":"popemercado@candecor.com","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":39,"Name":"CANOPOLY","Address":"852 Berriman Street Mappsville, GA 63118","Phone":"+1 630 555-0178","Email":"norriscox@canopoly.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":40,"Name":"CAXT","Address":"435 Borinquen Pl Barronett, GA 41976","Phone":"+1 412 555-0131","Email":"lanamays@caxt.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":41,"Name":"CEDWARD","Address":"394 Bergen Street Thatcher, GA 79403","Phone":"+1 966 555-0170","Email":"constanceengland@cedward.com","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":42,"Name":"CENTICE","Address":"939 Verona Street Gorham, GA 69855","Phone":"+1 378 555-0193","Email":"teresacrane@centice.com","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":43,"Name":"CENTREGY","Address":"106 Dakota Place Shaft, GA 78244","Phone":"+1 385 555-0195","Email":"jerrylara@centregy.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":44,"Name":"CEPRENE","Address":"521 Bushwick Avenue Gardners, GA 69484","Phone":"+1 689 555-0177","Email":"wallmcmahon@ceprene.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":45,"Name":"COGENTRY","Address":"469 Bancroft Place Dante, GA 87283","Phone":"+1 806 555-012","Email":"flemingramsey@cogentry.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":46,"Name":"COLLAIRE","Address":"213 Rockaway Parkway Emory, GA 46840","Phone":"+1 342 555-0190","Email":"bonnerhaynes@collaire.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":47,"Name":"COMBOGEN","Address":"235 Boerum Street Gulf, GA 70778","Phone":"+1 894 555-0137","Email":"bettyenieves@combogen.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":48,"Name":"COMDOM","Address":"907 Jaffray Street Brazos, GA 29528","Phone":"+1 412 555-0117","Email":"pruittadkins@comdom.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":49,"Name":"COMSTRUCT","Address":"547 Herbert Street Cucumber, GA 93215","Phone":"+1 594 555-0163","Email":"houstondunn@comstruct.com","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":50,"Name":"COMTEST","Address":"621 McKinley Avenue Dellview, GA 45488","Phone":"+1 725 555-0187","Email":"langleysherman@comtest.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":51,"Name":"COMTOUR","Address":"102 Rockwell Place Ypsilanti, GA 63428","Phone":"+1 738 555-0162","Email":"patticamacho@comtour.com","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":52,"Name":"COMVENE","Address":"924 Metropolitan Avenue Innsbrook, GA 79214","Phone":"+1 553 555-0115","Email":"savagemadden@comvene.com","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":53,"Name":"COMVEY","Address":"954 Beekman Place Rockbridge, GA 55141","Phone":"+1 551 555-0144","Email":"hoffmanbentley@comvey.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":54,"Name":"COMVEYER","Address":"762 Oakland Place Tetherow, GA 23371","Phone":"+1 421 555-0113","Email":"reynaguerrero@comveyer.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":55,"Name":"COMVEYOR","Address":"904 Tompkins Avenue Woodruff, GA 86834","Phone":"+1 327 555-0167","Email":"matthewspowell@comveyor.com","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":56,"Name":"CORECOM","Address":"337 Holly Street Cuylerville, GA 80079","Phone":"+1 571 555-0146","Email":"portergamble@corecom.com","Region":"East","County":"Screven","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":57,"Name":"CORIANDER","Address":"111 King Street Verdi, GA 50998","Phone":"+1 629 555-0140","Email":"schultzhumphrey@coriander.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":58,"Name":"CORPULSE","Address":"307 Love Lane Boykin, GA 43678","Phone":"+1 490 555-0137","Email":"frankieleach@corpulse.com","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":59,"Name":"COSMOSIS","Address":"843 Otsego Street Chumuckla, GA 62396","Phone":"+1 124 555-0197","Email":"glendakelley@cosmosis.com","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":60,"Name":"CUBIX","Address":"165 Clarkson Avenue Belgreen, GA 27759","Phone":"+1 730 555-0193","Email":"concepcionespinoza@cubix.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":61,"Name":"DANCITY","Address":"923 Varick Avenue Naomi, GA 42788","Phone":"+1 369 555-016","Email":"shaunamcdowell@dancity.com","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":62,"Name":"DARWINIUM","Address":"982 Brightwater Court Byrnedale, GA 21535","Phone":"+1 246 555-0193","Email":"galestein@darwinium.com","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":63,"Name":"DEMINIMUM","Address":"815 Ocean Avenue Corriganville, GA 19856","Phone":"+1 591 555-0144","Email":"claricechang@deminimum.com","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":64,"Name":"DIGIGEN","Address":"172 Saratoga Avenue Williamson, GA 50198","Phone":"+1 861 555-0181","Email":"mccartycombs@digigen.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":65,"Name":"DOGTOWN","Address":"193 Jefferson Avenue Sutton, GA 74723","Phone":"+1 547 555-0174","Email":"farleyboyle@dogtown.com","Region":"SouthWest","County":"Glynn","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":66,"Name":"DRAGBOT","Address":"318 Stuyvesant Avenue Crayne, GA 64029","Phone":"+1 117 555-0139","Email":"conradmclean@dragbot.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":67,"Name":"DREAMIA","Address":"736 Hanson Place Gila, GA 53113","Phone":"+1 677 555-0179","Email":"sandyfox@dreamia.com","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":68,"Name":"DUFLEX","Address":"415 Nichols Avenue Kimmell, GA 59050","Phone":"+1 874 555-0113","Email":"adriennevelasquez@duflex.com","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":69,"Name":"DUOFLEX","Address":"917 Willow Place Crisman, GA 34129","Phone":"+1 621 555-0185","Email":"newmanstark@duoflex.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":70,"Name":"DYMI","Address":"616 Sutter Avenue Idledale, GA 55668","Phone":"+1 374 555-0124","Email":"olivermunoz@dymi.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":71,"Name":"EARGO","Address":"527 Adelphi Street Johnsonburg, GA 57260","Phone":"+1 970 555-0137","Email":"allieross@eargo.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":72,"Name":"EARTHWAX","Address":"572 Waldorf Court Knowlton, GA 15986","Phone":"+1 777 555-0174","Email":"deboraburke@earthwax.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":73,"Name":"EBIDCO","Address":"496 Ovington Court Rushford, GA 34691","Phone":"+1 846 555-0170","Email":"whitleymcdaniel@ebidco.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":74,"Name":"ECOLIGHT","Address":"864 Drew Street Osage, GA 81052","Phone":"+1 703 555-0118","Email":"glassvincent@ecolight.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":75,"Name":"ECOSYS","Address":"244 Rodney Street Sussex, GA 11753","Phone":"+1 369 555-011","Email":"avaburns@ecosys.com","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":76,"Name":"ECRATIC","Address":"228 Hanover Place Williams, GA 77982","Phone":"+1 813 555-0118","Email":"solomonlynn@ecratic.com","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":77,"Name":"ECRAZE","Address":"113 Cheever Place Starks, GA 16566","Phone":"+1 900 555-011","Email":"gilbertbritt@ecraze.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":78,"Name":"ECSTASIA","Address":"829 Thomas Street Wakulla, GA 19475","Phone":"+1 586 555-0184","Email":"matildahouston@ecstasia.com","Region":"SouthWest","County":"Wilcox","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":79,"Name":"EGYPTO","Address":"242 Ingraham Street Guthrie, GA 60206","Phone":"+1 953 555-0129","Email":"beverleyfarley@egypto.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":80,"Name":"ELECTONIC","Address":"818 Ovington Avenue Dotsero, GA 31659","Phone":"+1 203 555-0155","Email":"murraygolden@electonic.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":81,"Name":"ELPRO","Address":"559 Wyckoff Street Stollings, GA 63792","Phone":"+1 103 555-0117","Email":"bairdcummings@elpro.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":82,"Name":"EMOLTRA","Address":"676 Plymouth Street Websterville, GA 53719","Phone":"+1 351 555-0154","Email":"corinehays@emoltra.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":83,"Name":"EMPIRICA","Address":"847 Atlantic Avenue Madaket, GA 61030","Phone":"+1 574 555-0143","Email":"billieclarke@empirica.com","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":84,"Name":"EMTRAC","Address":"814 Bassett Avenue Coaldale, GA 13487","Phone":"+1 332 555-0116","Email":"battleblair@emtrac.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":85,"Name":"ENDICIL","Address":"921 Meserole Street Boyd, GA 99144","Phone":"+1 417 555-0169","Email":"wilkersonnoel@endicil.com","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":86,"Name":"ENDIPIN","Address":"120 Bush Street National, GA 99481","Phone":"+1 291 555-0131","Email":"sampsonlynch@endipin.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":87,"Name":"ENTHAZE","Address":"242 Amboy Street Dorneyville, GA 17278","Phone":"+1 710 555-0138","Email":"tashamccall@enthaze.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":88,"Name":"EQUITAX","Address":"889 Eckford Street Chamberino, GA 66234","Phone":"+1 455 555-0181","Email":"amberalvarado@equitax.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":89,"Name":"ESSENSIA","Address":"988 Dikeman Street Boonville, GA 16543","Phone":"+1 974 555-0137","Email":"jacquelineskinner@essensia.com","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":90,"Name":"EURON","Address":"720 Madison Place Gorst, GA 31448","Phone":"+1 263 555-0138","Email":"estradablair@euron.com","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":91,"Name":"EVENTIX","Address":"517 Tehama Street Colton, GA 79912","Phone":"+1 288 555-0111","Email":"pricemorton@eventix.com","Region":"East","County":"Columbia","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":92,"Name":"EXERTA","Address":"896 Albemarle Terrace Munjor, GA 17189","Phone":"+1 724 555-0187","Email":"eatonstevens@exerta.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":93,"Name":"EXIAND","Address":"961 Aurelia Court Yorklyn, GA 34028","Phone":"+1 279 555-0154","Email":"florinehenderson@exiand.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":94,"Name":"EXOPLODE","Address":"389 Campus Road Roulette, GA 73952","Phone":"+1 296 555-0184","Email":"vaughnbuckner@exoplode.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":95,"Name":"EXOSPEED","Address":"968 Walker Court Juarez, GA 18162","Phone":"+1 267 555-0125","Email":"sandersdennis@exospeed.com","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":96,"Name":"EXOVENT","Address":"335 Crawford Avenue Oneida, GA 50783","Phone":"+1 944 555-013","Email":"moodymathews@exovent.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":97,"Name":"EXTRAGEN","Address":"794 Albee Square Ola, GA 24877","Phone":"+1 713 555-0166","Email":"jillnorton@extragen.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":98,"Name":"EYERIS","Address":"521 Boulevard Court Moscow, GA 25800","Phone":"+1 448 555-0133","Email":"jolenecastillo@eyeris.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":99,"Name":"EZENT","Address":"733 Martense Street Calverton, GA 35707","Phone":"+1 211 555-0176","Email":"rasmussenmassey@ezent.com","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":100,"Name":"FANGOLD","Address":"724 Montgomery Street Winston, GA 65660","Phone":"+1 137 555-0195","Email":"mcneilguerra@fangold.com","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":101,"Name":"FARMAGE","Address":"584 Dean Street Caln, GA 62082","Phone":"+1 984 555-0180","Email":"dorthybarnett@farmage.com","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":102,"Name":"FIBRODYNE","Address":"711 Brightwater Avenue Kenmar, GA 76832","Phone":"+1 699 555-0190","Email":"alicegardner@fibrodyne.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":103,"Name":"FISHLAND","Address":"482 Victor Road Day, GA 17053","Phone":"+1 946 555-0154","Email":"lauriegibbs@fishland.com","Region":"SouthWest","County":"Benn Hill","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":104,"Name":"FITCORE","Address":"904 Calder Place Sultana, GA 13252","Phone":"+1 182 555-0174","Email":"beckyray@fitcore.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":105,"Name":"FLEXIGEN","Address":"495 Ryder Avenue Unionville, GA 40478","Phone":"+1 152 555-0133","Email":"eileendelgado@flexigen.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":106,"Name":"FLUM","Address":"363 Court Street Clarktown, GA 58079","Phone":"+1 144 555-0150","Email":"marvadickerson@flum.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":107,"Name":"FLUMBO","Address":"111 Lincoln Place Movico, GA 84996","Phone":"+1 592 555-0164","Email":"greeneemerson@flumbo.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":108,"Name":"FLYBOYZ","Address":"604 Debevoise Avenue Zarephath, GA 88606","Phone":"+1 377 555-0174","Email":"danielwright@flyboyz.com","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":109,"Name":"FROSNEX","Address":"591 Lincoln Road Cannondale, GA 38327","Phone":"+1 224 555-0184","Email":"potterpollard@frosnex.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":110,"Name":"GALLAXIA","Address":"130 Willoughby Street Delwood, GA 79991","Phone":"+1 412 555-0182","Email":"halewoodard@gallaxia.com","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":111,"Name":"GAPTEC","Address":"486 Suydam Place Neibert, GA 30511","Phone":"+1 744 555-0191","Email":"chenpacheco@gaptec.com","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":112,"Name":"GEEKETRON","Address":"422 Hazel Court Urie, GA 83904","Phone":"+1 486 555-0124","Email":"lyndalester@geeketron.com","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":113,"Name":"GEEKKO","Address":"294 Hart Street Cresaptown, GA 17540","Phone":"+1 891 555-0172","Email":"patsymorrison@geekko.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":114,"Name":"GEEKOL","Address":"372 Kingsland Avenue Fivepointville, GA 80444","Phone":"+1 307 555-0132","Email":"morinrivas@geekol.com","Region":"East","County":"Madison","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":115,"Name":"GEEKOLA","Address":"775 Beaver Street Broadlands, GA 96190","Phone":"+1 324 555-0117","Email":"mollyacosta@geekola.com","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":116,"Name":"GEEKOLOGY","Address":"772 Coleman Street Twilight, GA 26008","Phone":"+1 986 555-0139","Email":"deckersalazar@geekology.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":117,"Name":"GEEKOSIS","Address":"301 Independence Avenue Caroline, GA 65434","Phone":"+1 979 555-0170","Email":"carmenbarrett@geekosis.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":118,"Name":"GEEKWAGON","Address":"777 Bradford Street Tivoli, GA 24798","Phone":"+1 417 555-0143","Email":"sanfordherman@geekwagon.com","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":119,"Name":"GEEKY","Address":"409 Hart Place Fowlerville, GA 62087","Phone":"+1 782 555-014","Email":"careygonzalez@geeky.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":120,"Name":"GENMEX","Address":"971 Hancock Street Greenwich, GA 43277","Phone":"+1 863 555-0163","Email":"dollyrojas@genmex.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":121,"Name":"GENMOM","Address":"189 Virginia Place Vivian, GA 22760","Phone":"+1 177 555-0127","Email":"bonitaharmon@genmom.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":122,"Name":"GEOSTELE","Address":"659 Garland Court Tedrow, GA 62259","Phone":"+1 466 555-0164","Email":"keymarshall@geostele.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":123,"Name":"GINKLE","Address":"450 Irving Place Statenville, GA 36701","Phone":"+1 147 555-0135","Email":"maxwellmcpherson@ginkle.com","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":124,"Name":"GLASSTEP","Address":"716 Hall Street Jugtown, GA 99927","Phone":"+1 963 555-0171","Email":"hansonperez@glasstep.com","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":125,"Name":"GLOBOIL","Address":"446 Branton Street Campo, GA 81133","Phone":"+1 397 555-0142","Email":"elisapierce@globoil.com","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":126,"Name":"GLUID","Address":"602 Oak Street Bluetown, GA 75372","Phone":"+1 801 555-0198","Email":"foremancarrillo@gluid.com","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":127,"Name":"GOLISTIC","Address":"136 Doone Court Lund, GA 58758","Phone":"+1 569 555-0121","Email":"colleenromero@golistic.com","Region":"SouthWest","County":"Mitchell","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":128,"Name":"GOLOGY","Address":"146 Dooley Street Sylvanite, GA 80535","Phone":"+1 279 555-0198","Email":"kerryconner@gology.com","Region":"East","County":"Candler","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":129,"Name":"GONKLE","Address":"130 Brown Street Remington, GA 34237","Phone":"+1 615 555-0111","Email":"franceswarren@gonkle.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":130,"Name":"GRACKER","Address":"797 Bogart Street Belfair, GA 52416","Phone":"+1 301 555-0181","Email":"ramonasawyer@gracker.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":131,"Name":"GRUPOLI","Address":"294 Schenectady Avenue Linganore, GA 75353","Phone":"+1 967 555-0147","Email":"pettybeck@grupoli.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":132,"Name":"GUSHKOOL","Address":"930 Bulwer Place Rivera, GA 18474","Phone":"+1 154 555-0124","Email":"penatillman@gushkool.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":133,"Name":"GYNK","Address":"989 Howard Alley Marienthal, GA 51775","Phone":"+1 624 555-0133","Email":"emmarobinson@gynk.com","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":134,"Name":"HALAP","Address":"756 Onderdonk Avenue Madrid, GA 66720","Phone":"+1 804 555-0176","Email":"mclaughlinhuber@halap.com","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":135,"Name":"HARMONEY","Address":"584 Henderson Walk Gerber, GA 18348","Phone":"+1 312 555-0155","Email":"patriciarocha@harmoney.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":136,"Name":"HAWKSTER","Address":"416 Maple Street Gibsonia, GA 10862","Phone":"+1 878 555-0154","Email":"kentmoreno@hawkster.com","Region":"SouthWest","County":"Cook","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":137,"Name":"HELIXO","Address":"531 Denton Place Wedgewood, GA 40213","Phone":"+1 924 555-0193","Email":"vilmabooker@helixo.com","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":138,"Name":"HOMELUX","Address":"967 Ridgewood Place Bison, GA 58124","Phone":"+1 659 555-0178","Email":"mullenmcmillan@homelux.com","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":139,"Name":"HOMETOWN","Address":"397 Railroad Avenue Bentonville, GA 27899","Phone":"+1 213 555-015","Email":"hortonbrennan@hometown.com","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":140,"Name":"HOPELI","Address":"892 Folsom Place Jacumba, GA 84975","Phone":"+1 502 555-0187","Email":"mckaytate@hopeli.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":141,"Name":"HYDROCOM","Address":"934 Mersereau Court Kent, GA 38021","Phone":"+1 161 555-0139","Email":"ursulamckee@hydrocom.com","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":142,"Name":"IDEGO","Address":"688 Clove Road Sandston, GA 15949","Phone":"+1 849 555-0181","Email":"debbiehoffman@idego.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":143,"Name":"IDETICA","Address":"565 Schenck Avenue Springdale, GA 91166","Phone":"+1 386 555-0131","Email":"tiamacias@idetica.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":144,"Name":"ILLUMITY","Address":"494 Ditmars Street Rodman, GA 93334","Phone":"+1 715 555-0114","Email":"roseannpeters@illumity.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":145,"Name":"IMKAN","Address":"683 Lincoln Avenue Sperryville, GA 96263","Phone":"+1 970 555-0158","Email":"muellervance@imkan.com","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":146,"Name":"INEAR","Address":"939 Hubbard Place Weedville, GA 82434","Phone":"+1 595 555-0110","Email":"harriettpalmer@inear.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":147,"Name":"INJOY","Address":"658 Claver Place Condon, GA 21701","Phone":"+1 635 555-0165","Email":"jenifersteele@injoy.com","Region":"SouthWest","County":"Grady","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":148,"Name":"INSURESYS","Address":"868 Williamsburg Street Ebro, GA 55180","Phone":"+1 553 555-0190","Email":"whitakerhendrix@insuresys.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":149,"Name":"INTERFIND","Address":"984 Bowery Street Wakarusa, GA 37875","Phone":"+1 461 555-0148","Email":"moseslevy@interfind.com","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":150,"Name":"INVENTURE","Address":"259 Vernon Avenue Rosine, GA 97003","Phone":"+1 517 555-0147","Email":"lulamiranda@inventure.com","Region":"East","County":"Warren","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":151,"Name":"IPLAX","Address":"487 Cyrus Avenue Santel, GA 74428","Phone":"+1 615 555-0175","Email":"susanasears@iplax.com","Region":"East","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":152,"Name":"ISOLOGICS","Address":"493 Bowne Street Leland, GA 31034","Phone":"+1 202 555-0141","Email":"scottatkinson@isologics.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":153,"Name":"ISONUS","Address":"169 Seacoast Terrace Waumandee, GA 69567","Phone":"+1 132 555-0174","Email":"georginawatson@isonus.com","Region":"East","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":154,"Name":"ISOPLEX","Address":"256 Hampton Avenue Wells, GA 60849","Phone":"+1 107 555-0156","Email":"jordanrich@isoplex.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":155,"Name":"ISOSTREAM","Address":"725 Troy Avenue Crucible, GA 49482","Phone":"+1 578 555-0198","Email":"judithfranco@isostream.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":156,"Name":"ISOSURE","Address":"207 Lorimer Street Ellerslie, GA 22227","Phone":"+1 121 555-0185","Email":"rollinsdavidson@isosure.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":157,"Name":"ISOSWITCH","Address":"163 Broome Street Marshall, GA 81452","Phone":"+1 530 555-0190","Email":"leticiabowen@isoswitch.com","Region":"SouthWest","County":"Brooks","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":158,"Name":"JIMBIES","Address":"893 Tilden Avenue Duryea, GA 45562","Phone":"+1 691 555-0124","Email":"shieldstodd@jimbies.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":159,"Name":"JUMPSTACK","Address":"532 Kenmore Court Ribera, GA 70194","Phone":"+1 523 555-0172","Email":"spencelyons@jumpstack.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":160,"Name":"KAGE","Address":"999 Conselyea Street Caron, GA 38206","Phone":"+1 815 555-0173","Email":"collinsmccray@kage.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":161,"Name":"KATAKANA","Address":"215 Sands Street Waterford, GA 84507","Phone":"+1 418 555-0170","Email":"princemcintyre@katakana.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":162,"Name":"KEEG","Address":"801 Ludlam Place Balm, GA 62130","Phone":"+1 787 555-0168","Email":"barnespope@keeg.com","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":163,"Name":"KEENGEN","Address":"573 Madoc Avenue Hiwasse, GA 42695","Phone":"+1 441 555-0141","Email":"coxwalls@keengen.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":164,"Name":"KEGULAR","Address":"362 Radde Place Crenshaw, GA 93974","Phone":"+1 888 555-0126","Email":"navarrobeard@kegular.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":165,"Name":"KINETICA","Address":"875 Mayfair Drive Hollins, GA 31586","Phone":"+1 328 555-0167","Email":"prestonmooney@kinetica.com","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":166,"Name":"KINETICUT","Address":"548 Celeste Court Topanga, GA 56105","Phone":"+1 972 555-0150","Email":"sarastewart@kineticut.com","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":167,"Name":"KNEEDLES","Address":"210 Story Court Navarre, GA 69999","Phone":"+1 880 555-019","Email":"fieldssexton@kneedles.com","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":168,"Name":"KOG","Address":"699 Baltic Street Chilton, GA 14996","Phone":"+1 804 555-0157","Email":"flynnnorris@kog.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":169,"Name":"KONGENE","Address":"562 Polhemus Place Strong, GA 87293","Phone":"+1 293 555-013","Email":"crosscaldwell@kongene.com","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":170,"Name":"KONGLE","Address":"853 Stone Avenue Brogan, GA 39360","Phone":"+1 940 555-0183","Email":"parkerwiggins@kongle.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":171,"Name":"KONNECT","Address":"874 Sackman Street Barstow, GA 47385","Phone":"+1 432 555-0144","Email":"dyercunningham@konnect.com","Region":"Central","County":"Oglethorpe","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":172,"Name":"KRAG","Address":"856 Newton Street Needmore, GA 31618","Phone":"+1 782 555-0192","Email":"johannasykes@krag.com","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":173,"Name":"KROG","Address":"564 Vine Street Ferney, GA 30855","Phone":"+1 937 555-0146","Email":"shereemolina@krog.com","Region":"East","County":"Burke","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":174,"Name":"KYAGORO","Address":"123 Summit Street Shindler, GA 33139","Phone":"+1 415 555-0177","Email":"paceosborn@kyagoro.com","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":175,"Name":"LEXICONDO","Address":"225 Cornelia Street Morgandale, GA 36789","Phone":"+1 222 555-016","Email":"hesterherring@lexicondo.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":176,"Name":"LIMOZEN","Address":"475 Junius Street Hobucken, GA 57239","Phone":"+1 902 555-0169","Email":"ivypittman@limozen.com","Region":"East","County":"Richmond","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":177,"Name":"LINGOAGE","Address":"332 Winthrop Street Dennard, GA 16435","Phone":"+1 545 555-0198","Email":"carissaburch@lingoage.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":178,"Name":"MAGNAFONE","Address":"499 Bushwick Court Carrsville, GA 95247","Phone":"+1 141 555-0161","Email":"watsonedwards@magnafone.com","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":179,"Name":"MAINELAND","Address":"780 Taaffe Place Richmond, GA 82463","Phone":"+1 285 555-0180","Email":"garnerlowery@maineland.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":180,"Name":"MALATHION","Address":"910 Decatur Street Jacksonwald, GA 40995","Phone":"+1 447 555-0118","Email":"meredithgay@malathion.com","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":181,"Name":"MANTRIX","Address":"203 Hunts Lane Dunnavant, GA 86659","Phone":"+1 643 555-0147","Email":"mathewsrivera@mantrix.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":182,"Name":"MATRIXITY","Address":"776 Allen Avenue Savannah, GA 66538","Phone":"+1 589 555-0146","Email":"ewingallison@matrixity.com","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":183,"Name":"MAXIMIND","Address":"254 Bay Parkway Adamstown, GA 77711","Phone":"+1 384 555-0159","Email":"bishopcallahan@maximind.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":184,"Name":"MAZUDA","Address":"941 Harway Avenue Fruitdale, GA 96566","Phone":"+1 676 555-0178","Email":"candicelee@mazuda.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":185,"Name":"MICRONAUT","Address":"194 Oceanview Avenue Glidden, GA 44372","Phone":"+1 146 555-0198","Email":"hattiedecker@micronaut.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":186,"Name":"MIRACLIS","Address":"685 Halleck Street Indio, GA 13218","Phone":"+1 880 555-0158","Email":"fuentesschultz@miraclis.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":187,"Name":"MIRACULA","Address":"504 Ainslie Street Riceville, GA 82391","Phone":"+1 491 555-0187","Email":"huntavila@miracula.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":188,"Name":"MITROC","Address":"189 Gaylord Drive Brutus, GA 38144","Phone":"+1 872 555-017","Email":"bobbisnow@mitroc.com","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":189,"Name":"MOTOVATE","Address":"814 Hamilton Avenue Glenshaw, GA 94923","Phone":"+1 538 555-0177","Email":"dianncleveland@motovate.com","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":190,"Name":"NETAGY","Address":"320 Kingsway Place Clayville, GA 99318","Phone":"+1 918 555-0134","Email":"blairhewitt@netagy.com","Region":"SouthWest","County":"Colquitt","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":191,"Name":"NETILITY","Address":"155 Quay Street Rossmore, GA 77475","Phone":"+1 451 555-0155","Email":"kariclay@netility.com","Region":"Central","County":"Bartow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":192,"Name":"NETPLODE","Address":"749 Pulaski Street Westwood, GA 29623","Phone":"+1 412 555-0123","Email":"landrybonner@netplode.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":193,"Name":"NETROPIC","Address":"835 Coffey Street Walton, GA 84638","Phone":"+1 949 555-0147","Email":"craigpotts@netropic.com","Region":"SouthWest","County":"Worth","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":194,"Name":"NIMON","Address":"171 Emerald Street Thynedale, GA 50133","Phone":"+1 150 555-0135","Email":"rubyglenn@nimon.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":195,"Name":"NIPAZ","Address":"418 Hendrickson Place Rehrersburg, GA 16064","Phone":"+1 241 555-0111","Email":"jodiewelch@nipaz.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":196,"Name":"NIQUENT","Address":"170 Quincy Street Canterwood, GA 49985","Phone":"+1 412 555-0112","Email":"arlinelarson@niquent.com","Region":"SouthWest","County":"Crisp","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":197,"Name":"NORALEX","Address":"990 Ryder Street Zortman, GA 10774","Phone":"+1 678 555-016","Email":"yvettemcdonald@noralex.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":198,"Name":"NORALI","Address":"551 Montauk Avenue Osmond, GA 92749","Phone":"+1 304 555-0146","Email":"sophiasparks@norali.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":199,"Name":"NSPIRE","Address":"759 Nevins Street Herald, GA 92853","Phone":"+1 617 555-0166","Email":"barrettmerrill@nspire.com","Region":"East","County":"Effingham","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":200,"Name":"OLUCORE","Address":"392 Brighton Court Advance, GA 58162","Phone":"+1 585 555-0151","Email":"cookreese@olucore.com","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":201,"Name":"OLYMPIX","Address":"233 Kent Avenue Richford, GA 47870","Phone":"+1 610 555-0170","Email":"elsiefrazier@olympix.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":202,"Name":"ONTAGENE","Address":"499 Milton Street Chesterfield, GA 64173","Phone":"+1 582 555-0180","Email":"farmerbarlow@ontagene.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":203,"Name":"ORBEAN","Address":"140 Nostrand Avenue Belleview, GA 60589","Phone":"+1 699 555-0115","Email":"mcmillanwatts@orbean.com","Region":"SouthWest","County":"Seminole ","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":204,"Name":"ORBOID","Address":"631 Freeman Street Warsaw, GA 86659","Phone":"+1 788 555-0156","Email":"margieprince@orboid.com","Region":"East","County":"Liberty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":205,"Name":"PANZENT","Address":"682 Dorchester Road Terlingua, GA 34375","Phone":"+1 331 555-0169","Email":"guadalupehowe@panzent.com","Region":"SouthWest","County":"Lee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":206,"Name":"PAPRICUT","Address":"751 Gunnison Court Utting, GA 97098","Phone":"+1 777 555-0166","Email":"stoutbarrera@papricut.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":207,"Name":"PAPRIKUT","Address":"307 Duryea Court Kohatk, GA 44724","Phone":"+1 884 555-0116","Email":"anitawhitley@paprikut.com","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":208,"Name":"PARCOE","Address":"827 Wakeman Place Hayden, GA 50298","Phone":"+1 614 555-0130","Email":"emmaaguilar@parcoe.com","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":209,"Name":"PEARLESEX","Address":"817 Tapscott Street Grill, GA 49814","Phone":"+1 279 555-0145","Email":"shaffervinson@pearlesex.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":210,"Name":"PERKLE","Address":"559 Moultrie Street Farmington, GA 29636","Phone":"+1 684 555-0194","Email":"fernandezle@perkle.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":211,"Name":"PETICULAR","Address":"788 National Drive Magnolia, GA 84160","Phone":"+1 610 555-0114","Email":"davenportsandoval@peticular.com","Region":"East","County":"Emanuel","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":212,"Name":"PHARMACON","Address":"255 Beach Place Wanamie, GA 30541","Phone":"+1 388 555-0195","Email":"warecollins@pharmacon.com","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":213,"Name":"PHUEL","Address":"897 Bedell Lane Foxworth, GA 99751","Phone":"+1 551 555-0172","Email":"oliviarasmussen@phuel.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":214,"Name":"PIGZART","Address":"445 Maple Avenue Suitland, GA 77391","Phone":"+1 382 555-0161","Email":"royburris@pigzart.com","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":215,"Name":"PIVITOL","Address":"718 Front Street Jardine, GA 82106","Phone":"+1 546 555-0185","Email":"ortegaduke@pivitol.com","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":216,"Name":"PLASMOX","Address":"347 Gerritsen Avenue Marbury, GA 69331","Phone":"+1 422 555-0150","Email":"snydergross@plasmox.com","Region":"Central","County":"Rockdale","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":217,"Name":"PODUNK","Address":"223 Kiely Place Coloma, GA 59846","Phone":"+1 704 555-0153","Email":"farleymorrow@podunk.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":218,"Name":"POLARAX","Address":"524 Scholes Street Layhill, GA 50804","Phone":"+1 342 555-0185","Email":"bergervaughn@polarax.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":219,"Name":"POLARIA","Address":"527 Rochester Avenue Dragoon, GA 64435","Phone":"+1 853 555-0118","Email":"ashleyvillarreal@polaria.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":220,"Name":"POLARIUM","Address":"471 Williams Place Hanover, GA 73350","Phone":"+1 507 555-0195","Email":"louterry@polarium.com","Region":"East","County":"Johnson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":221,"Name":"PORTALINE","Address":"285 Oxford Street Forbestown, GA 54214","Phone":"+1 862 555-0123","Email":"hintonbradley@portaline.com","Region":"East","County":"Toombs","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":222,"Name":"PORTALIS","Address":"404 Rogers Avenue Driftwood, GA 91787","Phone":"+1 559 555-012","Email":"petersoncooper@portalis.com","Region":"SouthWest","County":"Pulaski ","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":223,"Name":"POSHOME","Address":"291 Boardwalk  Dawn, GA 71042","Phone":"+1 906 555-0163","Email":"catherinemalone@poshome.com","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":224,"Name":"PROSELY","Address":"758 Eldert Street Fairacres, GA 15537","Phone":"+1 340 555-0127","Email":"englandjohns@prosely.com","Region":"East","County":"Appling","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":225,"Name":"PROTODYNE","Address":"233 Lloyd Court Sanders, GA 46885","Phone":"+1 562 555-0159","Email":"vickyparker@protodyne.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":226,"Name":"PROWASTE","Address":"133 Ide Court Blandburg, GA 81837","Phone":"+1 300 555-0153","Email":"dennisconway@prowaste.com","Region":"Central","County":"Paulding","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":227,"Name":"PURIA","Address":"485 Frost Street Siglerville, GA 47606","Phone":"+1 703 555-0118","Email":"erineaton@puria.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":228,"Name":"PYRAMIS","Address":"796 Clarendon Road Bynum, GA 10724","Phone":"+1 663 555-0177","Email":"briggsware@pyramis.com","Region":"Central","County":"Dodge","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":229,"Name":"QABOOS","Address":"377 Verona Place Goldfield, GA 21003","Phone":"+1 402 555-0156","Email":"beulahbest@qaboos.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":230,"Name":"QIAO","Address":"165 Eagle Street Orick, GA 83883","Phone":"+1 392 555-0187","Email":"alvarezcasey@qiao.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":231,"Name":"QIMONK","Address":"559 Clay Street Troy, GA 69178","Phone":"+1 451 555-0175","Email":"nicoleblanchard@qimonk.com","Region":"East","County":"Hancock","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":232,"Name":"QUALITEX","Address":"129 Beadel Street Biehle, GA 96583","Phone":"+1 321 555-0124","Email":"wrightstanley@qualitex.com","Region":"Central","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":233,"Name":"QUARX","Address":"338 Noll Street Hampstead, GA 54741","Phone":"+1 995 555-0146","Email":"ballward@quarx.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":234,"Name":"QUILITY","Address":"923 Louisiana Avenue Lisco, GA 73057","Phone":"+1 556 555-0160","Email":"jenniferguthrie@quility.com","Region":"Central","County":"Newton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":235,"Name":"QUILM","Address":"444 Harrison Avenue Bluffview, GA 50474","Phone":"+1 209 555-0186","Email":"fernfuller@quilm.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":236,"Name":"QUIZKA","Address":"464 Jackson Street Grapeview, GA 66973","Phone":"+1 527 555-0141","Email":"parkmcconnell@quizka.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":237,"Name":"QUIZMO","Address":"188 Irving Street Rutherford, GA 36355","Phone":"+1 797 555-0162","Email":"hollowaypace@quizmo.com","Region":"East","County":"Wilkes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":238,"Name":"QUONATA","Address":"391 Calyer Street Glenbrook, GA 64069","Phone":"+1 124 555-0130","Email":"vangkline@quonata.com","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":239,"Name":"QUOTEZART","Address":"901 Catherine Street Loomis, GA 44729","Phone":"+1 566 555-0133","Email":"graciejones@quotezart.com","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":240,"Name":"RAMJOB","Address":"217 Brooklyn Avenue Cawood, GA 48004","Phone":"+1 812 555-0182","Email":"malindahale@ramjob.com","Region":"Central","County":"Laurens","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":241,"Name":"REALMO","Address":"758 Beverley Road Grandview, GA 34379","Phone":"+1 192 555-0196","Email":"carlahernandez@realmo.com","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":242,"Name":"REALYSIS","Address":"951 Tech Place Galesville, GA 22095","Phone":"+1 562 555-0165","Email":"odonnellrodriquez@realysis.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":243,"Name":"RECRISYS","Address":"603 Legion Street Rodanthe, GA 35374","Phone":"+1 897 555-0114","Email":"pattinavarro@recrisys.com","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":244,"Name":"REMOLD","Address":"494 Dekalb Avenue Blende, GA 92898","Phone":"+1 647 555-0113","Email":"henrynicholson@remold.com","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":245,"Name":"REMOTION","Address":"475 George Street Richville, GA 72665","Phone":"+1 394 555-0174","Email":"delaneydavid@remotion.com","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":246,"Name":"RENOVIZE","Address":"428 Fleet Place Gambrills, GA 24945","Phone":"+1 845 555-0150","Email":"flowersdavenport@renovize.com","Region":"SouthWest","County":"Tift","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":247,"Name":"REPETWIRE","Address":"346 Bristol Street Trinway, GA 56265","Phone":"+1 596 555-0197","Email":"lindseylewis@repetwire.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":248,"Name":"RETROTEX","Address":"106 Himrod Street Murillo, GA 26483","Phone":"+1 925 555-0164","Email":"susiegrimes@retrotex.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":249,"Name":"REVERSUS","Address":"238 Wyona Street Cade, GA 50568","Phone":"+1 451 555-0177","Email":"calliemcclain@reversus.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":250,"Name":"RODEMCO","Address":"867 Murdock Court Corinne, GA 93069","Phone":"+1 358 555-0136","Email":"bernicemarquez@rodemco.com","Region":"East","County":"Ware","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":251,"Name":"RONELON","Address":"537 Apollo Street Neahkahnie, GA 45719","Phone":"+1 691 555-0126","Email":"tabathabeasley@ronelon.com","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":252,"Name":"ROOFORIA","Address":"615 Church Avenue Hickory, GA 73469","Phone":"+1 104 555-016","Email":"herminiacarter@rooforia.com","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":253,"Name":"ROTODYNE","Address":"697 Ridge Court Vallonia, GA 88598","Phone":"+1 543 555-0153","Email":"dawsonnielsen@rotodyne.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":254,"Name":"SATIANCE","Address":"461 Manhattan Avenue Martell, GA 30419","Phone":"+1 429 555-0198","Email":"janislloyd@satiance.com","Region":"Central","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":255,"Name":"SCENTY","Address":"625 Emerson Place Rosedale, GA 25266","Phone":"+1 597 555-0161","Email":"pollardjuarez@scenty.com","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":256,"Name":"SECURIA","Address":"298 Brighton Avenue Comptche, GA 69237","Phone":"+1 190 555-0167","Email":"abbottparks@securia.com","Region":"Central","County":"Barrow","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":257,"Name":"SEQUITUR","Address":"459 Malbone Street Strykersville, GA 96124","Phone":"+1 438 555-0112","Email":"byrdhamilton@sequitur.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":258,"Name":"SHADEASE","Address":"968 Seabring Street Sterling, GA 76085","Phone":"+1 139 555-0199","Email":"dellamitchell@shadease.com","Region":"East","County":"Montgomery","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":259,"Name":"SHEPARD","Address":"322 Hastings Street Nutrioso, GA 36890","Phone":"+1 653 555-0130","Email":"horndejesus@shepard.com","Region":"Central","County":"Cobb","Amb":"No","WCHR":"No","Stretcher":"Yes"},{"id":260,"Name":"SIGNIDYNE","Address":"179 Glenmore Avenue Coyote, GA 88084","Phone":"+1 417 555-0177","Email":"antoniashepherd@signidyne.com","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":261,"Name":"SLAX","Address":"212 Brevoort Place Sanford, GA 50587","Phone":"+1 753 555-0113","Email":"mendozagilliam@slax.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":262,"Name":"SLOFAST","Address":"779 Baughman Place Lacomb, GA 83806","Phone":"+1 887 555-0117","Email":"pagepotter@slofast.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":263,"Name":"SLUMBERIA","Address":"818 Reed Street Lawrence, GA 35397","Phone":"+1 103 555-014","Email":"simmonspayne@slumberia.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":264,"Name":"SNOWPOKE","Address":"977 Pineapple Street Smeltertown, GA 79263","Phone":"+1 661 555-0116","Email":"genevievemerritt@snowpoke.com","Region":"SouthWest","County":"Terrell","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":265,"Name":"SOLAREN","Address":"526 Columbus Place Tibbie, GA 60890","Phone":"+1 101 555-017","Email":"willisgoff@solaren.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":266,"Name":"SONGLINES","Address":"689 Lynch Street Lowell, GA 57843","Phone":"+1 885 555-0155","Email":"idaellis@songlines.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":267,"Name":"SPACEWAX","Address":"549 Ira Court Aguila, GA 46033","Phone":"+1 188 555-0132","Email":"fishermartinez@spacewax.com","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":268,"Name":"SPEEDBOLT","Address":"555 Gotham Avenue Chautauqua, GA 14123","Phone":"+1 134 555-0162","Email":"everettjarvis@speedbolt.com","Region":"East","County":"Emanuel","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":269,"Name":"SPHERIX","Address":"487 Amherst Street Bath, GA 56934","Phone":"+1 728 555-018","Email":"humphreypage@spherix.com","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":270,"Name":"SPORTAN","Address":"516 Shale Street Faxon, GA 10509","Phone":"+1 976 555-0128","Email":"jocelynmoon@sportan.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":271,"Name":"SPRINGBEE","Address":"347 Olive Street Ventress, GA 44945","Phone":"+1 858 555-0125","Email":"soliscopeland@springbee.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":272,"Name":"STEELTAB","Address":"504 Cambridge Place Yogaville, GA 42341","Phone":"+1 872 555-0174","Email":"soniacash@steeltab.com","Region":"SouthWest","County":"Peach","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":273,"Name":"STOCKPOST","Address":"787 McKibben Street Columbus, GA 10267","Phone":"+1 127 555-0151","Email":"terrellgibson@stockpost.com","Region":"Central","County":"Troup","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":274,"Name":"STRALUM","Address":"370 Coles Street Clarksburg, GA 46404","Phone":"+1 255 555-0138","Email":"cassandrasoto@stralum.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":275,"Name":"STREZZO","Address":"844 Crosby Avenue Sunnyside, GA 74343","Phone":"+1 111 555-0159","Email":"wongbrooks@strezzo.com","Region":"East","County":"Burke","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":276,"Name":"SULTRAX","Address":"481 Auburn Place Sparkill, GA 67734","Phone":"+1 711 555-0178","Email":"jofernandez@sultrax.com","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":277,"Name":"SULTRAXIN","Address":"374 Montague Terrace Jennings, GA 30236","Phone":"+1 300 555-0170","Email":"pamfreeman@sultraxin.com","Region":"SouthWest","County":"Coffee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":278,"Name":"SUPPORTAL","Address":"670 Carlton Avenue Cloverdale, GA 36020","Phone":"+1 194 555-0193","Email":"melodymason@supportal.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":279,"Name":"SUPREMIA","Address":"959 Portland Avenue Goodville, GA 62943","Phone":"+1 134 555-0193","Email":"mortonsosa@supremia.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":280,"Name":"SYBIXTEX","Address":"101 Stryker Street Keyport, GA 25590","Phone":"+1 228 555-0116","Email":"trinanunez@sybixtex.com","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":281,"Name":"SYNKGEN","Address":"989 Wallabout Street Winfred, GA 21467","Phone":"+1 765 555-0175","Email":"clarissatyson@synkgen.com","Region":"East","County":"Jefferson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":282,"Name":"TALAE","Address":"912 Batchelder Street Kula, GA 66469","Phone":"+1 375 555-0171","Email":"dorahouse@talae.com","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":283,"Name":"TALKOLA","Address":"103 Little Street Chestnut, GA 16390","Phone":"+1 269 555-0173","Email":"beachjennings@talkola.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":284,"Name":"TASMANIA","Address":"510 Bevy Court Linwood, GA 91228","Phone":"+1 190 555-0129","Email":"harperwells@tasmania.com","Region":"SouthWest","County":"Sumter","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":285,"Name":"TELLIFLY","Address":"759 Dahlgreen Place Kennedyville, GA 80362","Phone":"+1 359 555-0142","Email":"lakeishastrickland@tellifly.com","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":286,"Name":"TELPOD","Address":"482 Kings Hwy Blairstown, GA 16882","Phone":"+1 611 555-0198","Email":"edwinabecker@telpod.com","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":287,"Name":"TEMORAK","Address":"150 Karweg Place Norfolk, GA 57852","Phone":"+1 186 555-0163","Email":"carolephelps@temorak.com","Region":"SouthWest","County":"Houston","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":288,"Name":"TERASCAPE","Address":"603 Beaumont Street Leming, GA 34871","Phone":"+1 692 555-0132","Email":"grahamstrong@terascape.com","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":289,"Name":"TERSANKI","Address":"820 Pierrepont Street Topaz, GA 83491","Phone":"+1 342 555-0180","Email":"jimenezholmes@tersanki.com","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":290,"Name":"THREDZ","Address":"573 Cass Place Edgewater, GA 69100","Phone":"+1 765 555-0158","Email":"bobbiewitt@thredz.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":291,"Name":"TOURMANIA","Address":"112 Throop Avenue Tooleville, GA 71142","Phone":"+1 143 555-0172","Email":"chericotton@tourmania.com","Region":"SouthWest","County":"Bleckley","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":292,"Name":"TOYLETRY","Address":"437 School Lane Convent, GA 68767","Phone":"+1 573 555-0136","Email":"brucemiles@toyletry.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":293,"Name":"TRIBALOG","Address":"727 Evans Street Bonanza, GA 24241","Phone":"+1 187 555-0198","Email":"shermanmosley@tribalog.com","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":294,"Name":"TROPOLIS","Address":"382 Kane Street Beason, GA 75883","Phone":"+1 623 555-0173","Email":"grayduncan@tropolis.com","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":295,"Name":"TUBESYS","Address":"778 Hutchinson Court Winesburg, GA 79553","Phone":"+1 998 555-0165","Email":"michaelfigueroa@tubesys.com","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":296,"Name":"TWIGGERY","Address":"159 Bridge Street Highland, GA 92537","Phone":"+1 482 555-0138","Email":"kennedyhart@twiggery.com","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":297,"Name":"ULTRASURE","Address":"753 Luquer Street Coleville, GA 59680","Phone":"+1 381 555-0115","Email":"meghankaufman@ultrasure.com","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":298,"Name":"UNDERTAP","Address":"919 Sheffield Avenue Brandywine, GA 81785","Phone":"+1 283 555-019","Email":"christicastaneda@undertap.com","Region":"SouthWest","County":"Quitman","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":299,"Name":"UNI","Address":"951 Suydam Street Frank, GA 73281","Phone":"+1 404 555-0122","Email":"taniaholder@uni.com","Region":"East","County":"Warren","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":300,"Name":"UNIA","Address":"934 Oxford Walk Drummond, GA 44853","Phone":"+1 779 555-0130","Email":"kathrynhopkins@unia.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":301,"Name":"UNISURE","Address":"496 Bedford Place Carbonville, GA 97668","Phone":"+1 236 555-0141","Email":"sandramcintosh@unisure.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":302,"Name":"UPLINX","Address":"405 Morgan Avenue Bangor, GA 37623","Phone":"+1 615 555-0149","Email":"carpenterhorton@uplinx.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":303,"Name":"URBANSHEE","Address":"849 Kenmore Terrace Stewart, GA 88012","Phone":"+1 270 555-0182","Email":"pittmankirby@urbanshee.com","Region":"SouthWest","County":"Lowndes","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":304,"Name":"UTARIAN","Address":"411 Clifton Place Kaka, GA 58351","Phone":"+1 864 555-0113","Email":"lopezmichael@utarian.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":305,"Name":"UXMOX","Address":"365 Forbell Street Sunbury, GA 91687","Phone":"+1 476 555-0154","Email":"marcyobrien@uxmox.com","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":306,"Name":"VENOFLEX","Address":"854 Wilson Avenue Jackpot, GA 94024","Phone":"+1 493 555-0125","Email":"nataliahiggins@venoflex.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":307,"Name":"VERAQ","Address":"207 Roosevelt Court Gratton, GA 17534","Phone":"+1 646 555-0155","Email":"cobbslater@veraq.com","Region":"East","County":"Clarke","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":308,"Name":"VERBUS","Address":"585 Rugby Road Wildwood, GA 30221","Phone":"+1 334 555-0122","Email":"leannhorn@verbus.com","Region":"SouthWest","County":"Thomas","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":309,"Name":"VIAGREAT","Address":"868 Woodside Avenue Henrietta, GA 92839","Phone":"+1 247 555-0188","Email":"katiehutchinson@viagreat.com","Region":"East","County":"Glynn","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":310,"Name":"VICON","Address":"633 Pilling Street Tyhee, GA 72466","Phone":"+1 991 555-0165","Email":"mccoyrichard@vicon.com","Region":"East","County":"Jackson","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":311,"Name":"VIDTO","Address":"564 Hyman Court Gouglersville, GA 40832","Phone":"+1 990 555-0118","Email":"humphreylane@vidto.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":312,"Name":"VIRVA","Address":"403 Highland Boulevard Roderfield, GA 51993","Phone":"+1 756 555-0160","Email":"frycantu@virva.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":313,"Name":"VOLAX","Address":"338 Dunham Place Seymour, GA 65709","Phone":"+1 321 555-0129","Email":"tommiejustice@volax.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":314,"Name":"VORATAK","Address":"344 Milford Street Rockhill, GA 98559","Phone":"+1 459 555-0156","Email":"gabrielaballard@voratak.com","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":315,"Name":"WARETEL","Address":"752 Dumont Avenue Stonybrook, GA 49973","Phone":"+1 880 555-0185","Email":"romandonovan@waretel.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":316,"Name":"WATERBABY","Address":"498 Girard Street Hinsdale, GA 20436","Phone":"+1 343 555-0170","Email":"romangraham@waterbaby.com","Region":"East","County":"Mcduffie","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":317,"Name":"WRAPTURE","Address":"706 Seaview Court Trexlertown, GA 77586","Phone":"+1 319 555-0145","Email":"nadiavalenzuela@wrapture.com","Region":"Central","County":"Coweta","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":318,"Name":"XANIDE","Address":"786 River Street Century, GA 69560","Phone":"+1 857 555-0172","Email":"magdalenamcfarland@xanide.com","Region":"Central","County":"Decatur","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":319,"Name":"XELEGYL","Address":"240 Midwood Street Albany, GA 12690","Phone":"+1 307 555-0143","Email":"natashaharrell@xelegyl.com","Region":"Central","County":"Wayne","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":320,"Name":"XIXAN","Address":"290 Schweikerts Walk Epworth, GA 36936","Phone":"+1 418 555-0144","Email":"kinneymurphy@xixan.com","Region":"East","County":"Greene","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":321,"Name":"XTH","Address":"187 Louis Place Washington, GA 22339","Phone":"+1 155 555-0134","Email":"stefaniesalinas@xth.com","Region":"SouthWest","County":"Talbot","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":322,"Name":"XUMONK","Address":"759 Battery Avenue Ruckersville, GA 74933","Phone":"+1 639 555-0122","Email":"alysonruiz@xumonk.com","Region":"SouthWest","County":"Taylor","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":323,"Name":"XURBAN","Address":"712 Oriental Court Nogal, GA 41542","Phone":"+1 877 555-0122","Email":"gaybarnes@xurban.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":324,"Name":"YOGASM","Address":"500 Plaza Street Deercroft, GA 35056","Phone":"+1 961 555-0166","Email":"castanedasharpe@yogasm.com","Region":"SouthWest","County":"Dougherty","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":325,"Name":"ZANILLA","Address":"557 Herkimer Street Escondida, GA 88959","Phone":"+1 816 555-0167","Email":"yeseniagilmore@zanilla.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":326,"Name":"ZANITY","Address":"205 Alton Place Williston, GA 19898","Phone":"+1 501 555-0122","Email":"spencerthompson@zanity.com","Region":"Central","County":"Butts","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":327,"Name":"ZAPPIX","Address":"594 Vanderbilt Avenue Wescosville, GA 29258","Phone":"+1 386 555-0189","Email":"virginiastone@zappix.com","Region":"East","County":"Richmond","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":328,"Name":"ZBOO","Address":"463 Aster Court Deseret, GA 54328","Phone":"+1 972 555-0158","Email":"copelandvargas@zboo.com","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":329,"Name":"ZEAM","Address":"171 Keen Court Gracey, GA 53859","Phone":"+1 338 555-0143","Email":"dorothysolis@zeam.com","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":330,"Name":"ZENCO","Address":"172 Macon Street Wadsworth, GA 61059","Phone":"+1 377 555-0184","Email":"lamberthenson@zenco.com","Region":"Central","County":"Douglas","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":331,"Name":"ZENOLUX","Address":"251 Berry Street Motley, GA 26900","Phone":"+1 254 555-0157","Email":"harrisoneverett@zenolux.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":332,"Name":"ZENSURE","Address":"199 Gates Avenue Catharine, GA 14693","Phone":"+1 919 555-0115","Email":"triciawyatt@zensure.com","Region":"Central","County":"Bibb","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":333,"Name":"ZENSUS","Address":"788 Dahill Road Shasta, GA 80196","Phone":"+1 752 555-0196","Email":"victoriayang@zensus.com","Region":"East","County":"Bulloch","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":334,"Name":"ZENTHALL","Address":"649 Estate Road Finzel, GA 16777","Phone":"+1 571 555-0148","Email":"raymondweiss@zenthall.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":335,"Name":"ZENTIA","Address":"303 Riverdale Avenue Allentown, GA 50079","Phone":"+1 405 555-016","Email":"annettetran@zentia.com","Region":"Central","County":"Henry","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":336,"Name":"ZENTIME","Address":"816 Pine Street Gerton, GA 14754","Phone":"+1 397 555-0140","Email":"blanchebeach@zentime.com","Region":"Central","County":"Fayette","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":337,"Name":"ZENTIX","Address":"556 Elton Street Avoca, GA 48202","Phone":"+1 788 555-016","Email":"fischerhines@zentix.com","Region":"Central","County":"Fulton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":338,"Name":"ZENTURY","Address":"891 Stewart Street Canoochee, GA 30011","Phone":"+1 118 555-0169","Email":"ettamann@zentury.com","Region":"East","County":"Chatham","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":339,"Name":"ZIALACTIC","Address":"614 Hendrix Street Buxton, GA 70674","Phone":"+1 871 555-0199","Email":"suestuart@zialactic.com","Region":"East","County":"Ware","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":340,"Name":"ZIDOX","Address":"680 Melba Court Riegelwood, GA 74072","Phone":"+1 948 555-0174","Email":"ericareed@zidox.com","Region":"Central","County":"Gwinnett","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":341,"Name":"ZILIDIUM","Address":"254 College Place Orin, GA 19529","Phone":"+1 316 555-0169","Email":"wolfroy@zilidium.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":342,"Name":"ZILLANET","Address":"443 Newport Street Coral, GA 56827","Phone":"+1 236 555-0156","Email":"valeriewatkins@zillanet.com","Region":"East","County":"Washington","Amb":"Yes","WCHR":"No","Stretcher":"Yes"},{"id":343,"Name":"ZILLIDIUM","Address":"496 Montrose Avenue Dalton, GA 59288","Phone":"+1 743 555-0148","Email":"knappbarber@zillidium.com","Region":"SouthWest","County":"Muscogee","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":344,"Name":"ZILODYNE","Address":"126 Cherry Street Enoree, GA 46560","Phone":"+1 358 555-0126","Email":"delacruzporter@zilodyne.com","Region":"East","County":"Clayton","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":345,"Name":"ZILPHUR","Address":"294 Hinsdale Street Grahamtown, GA 33048","Phone":"+1 968 555-0139","Email":"armstrongsmall@zilphur.com","Region":"East","County":"Oconee","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":346,"Name":"ZOARERE","Address":"622 Bennet Court Conestoga, GA 58491","Phone":"+1 674 555-0143","Email":"gretchencolon@zoarere.com","Region":"East","County":"Clay","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":347,"Name":"ZOGAK","Address":"703 Crystal Street Longbranch, GA 42662","Phone":"+1 133 555-019","Email":"juliannewinters@zogak.com","Region":"Central","County":"Carroll","Amb":"Yes","WCHR":"Yes","Stretcher":"Yes"},{"id":348,"Name":"ZOLAVO","Address":"621 Bouck Court Bancroft, GA 35861","Phone":"+1 443 555-0112","Email":"bullockcobb@zolavo.com","Region":"Central","County":"Clayton","Amb":"Yes","WCHR":"Yes","Stretcher":"No"},{"id":349,"Name":"ZOMBOID","Address":"740 Will Place Wawona, GA 46904","Phone":"+1 631 555-011","Email":"ericaryan@zomboid.com","Region":"Central","County":"Cobb","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":350,"Name":"ZYPLE","Address":"936 Mill Lane Tuttle, GA 80876","Phone":"+1 191 555-0197","Email":"robertsfoster@zyple.com","Region":"Central","County":"Baldwin","Amb":"Yes","WCHR":"No","Stretcher":"No"},{"id":351,"Name":"ZYTRAC","Address":"574 Revere Place Dyckesville, GA 99833","Phone":"+1 338 555-0190","Email":"rivasbell@zytrac.com","Region":"Central","County":"Dekalb","Amb":"Yes","WCHR":"Yes","Stretcher":"No"}];

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tNRa");


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a/h4":
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "qBGJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tNRa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a/h4");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qBGJ");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_7__);









var networkdata = __webpack_require__("0vZ9");
/*counts number of Region types there are in the json
const uniqueNames = new Set(data.map(item => item.Region)).size;
*/
//Function for case insensitivity allowing for more flexibility on filter results based
//on user input.


function filterCaseInsensitive(filter, row) {
  var id = filter.pivotId || filter.id;
  return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
} //creates dropdown list for each table column listing available selection options for 
//each json listing.  Example: Region - Central, Southwest, East


var customFilter = function customFilter(_ref) {
  var fieldName = _ref.fieldName,
      filter = _ref.filter,
      _onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    style: {
      width: "100%"
    },
    value: filter ? filter.value : ''
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: ""
  }, "Show All"), networkdata.sort(function (a, b) {
    var One = a[fieldName];
    var Two = b[fieldName];
    return One < Two ? -1 : One > Two ? 1 : 0;
  }).map(function (item) {
    return item[fieldName];
  }).filter(function (item, i, s) {
    return s.lastIndexOf(item) == i;
  }).map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
      key: value,
      value: value
    }, value);
  }));
};

var NetworkList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(NetworkList, _Component);

  function NetworkList(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NetworkList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NetworkList).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NetworkList, [{
    key: "render",
    value: function render() {
      return networkdata ? this.renderData(networkdata) : this.renderLoading();
    }
  }, {
    key: "renderData",
    value: function renderData(networkdata) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "Provider-table -striped -highlight center shadow-sm mb-5",
        data: networkdata,
        defaultPageSize: 20,
        style: {
          height: "800px"
        } //sets filtering options in react-table for no dropdown option.  Calls the filtercaseinsensitive
        //function as mentioned above
        ,
        filterable: true,
        defaultFilterMethod: function defaultFilterMethod(filter, row) {
          return filterCaseInsensitive(filter, row);
        },
        columns: [{
          Header: "Provider",
          columns: [{
            Header: "Name",
            id: "Name",
            accessor: function accessor(d) {
              return d.Name;
            },
            width: 140,
            //*sorting method to allow for listing of numerical order listed in the name
            sortMethod: function sortMethod(a, b) {
              if (a.length === b.length) {
                return a > b ? 1 : -1;
              }

              return a.length > b.length ? 1 : -1;
            }
          }, {
            Header: "Address",
            id: "Address",
            accessor: function accessor(d) {
              return d.Address;
            },
            width: 300,
            size: 2,
            style: {
              whiteSpace: 'unset',
              fontSize: '14px'
            }
          }, {
            Header: "Phone",
            id: "Phone",
            accessor: function accessor(d) {
              return d.Phone;
            },
            width: 150
          }, {
            Header: "Email",
            id: "Email",
            accessor: function accessor(d) {
              return d.Email;
            },
            width: 220,
            style: {
              fontSize: '14px'
            }
          }]
        }, {
          Header: "Provider Info",
          columns: [{
            Header: "Region",
            id: "Region",
            width: 110,
            style: {
              'textAlign': 'center'
            },
            accessor: function accessor(d) {
              return d.Region;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref2) {
              var filter = _ref2.filter,
                  onChange = _ref2.onChange;
              return customFilter({
                fieldName: 'Region',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "County",
            id: "County",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            accessor: function accessor(d) {
              return d.County;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref3) {
              var filter = _ref3.filter,
                  onChange = _ref3.onChange;
              return customFilter({
                fieldName: 'County',
                filter: filter,
                onChange: onChange
              });
            }
          }]
        }, {
          Header: "Level of Service",
          columns: [{
            Header: "Ambulatory",
            accessor: "Amb",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref4) {
              var filter = _ref4.filter,
                  onChange = _ref4.onChange;
              return customFilter({
                fieldName: 'Amb',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Wheelchair",
            id: "WCHR",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            accessor: function accessor(d) {
              return d.WCHR;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref5) {
              var filter = _ref5.filter,
                  onChange = _ref5.onChange;
              return customFilter({
                fieldName: 'WCHR',
                filter: filter,
                onChange: onChange
              });
            }
          }, {
            Header: "Stretcher",
            id: "Stretcher",
            style: {
              'textAlign': 'center'
            },
            width: 110,
            accessor: function accessor(d) {
              return d.Stretcher;
            },
            filterMethod: function filterMethod(filter, row) {
              return row[filter.id] === filter.value;
            },
            //calls the customfilter function above creating a dropdown list for
            //filter
            Filter: function Filter(_ref6) {
              var filter = _ref6.filter,
                  onChange = _ref6.onChange;
              return customFilter({
                fieldName: 'Stretcher',
                filter: filter,
                onChange: onChange
              });
            }
          }]
        }]
      }, function (state, makeTable, instance) {
        var recordsInfoText = "";
        var filtered = state.filtered,
            pageRows = state.pageRows,
            pageSize = state.pageSize,
            sortedData = state.sortedData,
            page = state.page;

        if (sortedData && sortedData.length > 0) {
          var isFiltered = filtered.length > 0;
          var totalRecords = sortedData.length;
          var recordsCountFrom = page * pageSize + 1;
          var recordsCountTo = recordsCountFrom + pageRows.length - 1;
          if (isFiltered) recordsInfoText = "".concat(totalRecords, " filtered Providers");else recordsInfoText = "".concat(recordsCountFrom, "-").concat(recordsCountTo, " of ").concat(totalRecords, " records");
        } else recordsInfoText = "No records";

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "main-grid"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "records-info h3"
        }, recordsInfoText)), makeTable());
      }));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "Loading...");
    }
  }]);

  return NetworkList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NetworkList);

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });
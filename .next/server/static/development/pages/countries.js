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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ CountrySelector.js":
/*!****************************************!*\
  !*** ./components/ CountrySelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/ CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CountrySelector() {
  const {
    stats: countries,
    loading,
    error
  } = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])("https://covid19.mathdro.id/api/countries");
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USA");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Loading...");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Error...");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Select a Country"), __jsx("select", {
    style: {
      width: "60vw",
      border: "1px solid black",
      background: "transparent",
      boxShadow: "2px 2px grey"
    },
    onChange: e => {
      setSelectedCountry(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object.entries(countries.countries).map(([country, code]) => __jsx("option", {
    selected: selectedCountry === countries.iso3[code],
    key: code,
    value: countries.iso3[code],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, country)))), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: `https://covid19.mathdro.id/api/countries/${selectedCountry}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Stats = ({
  url
}) => {
  const {
    stats,
    loading,
    error
  } = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
  console.log(stats, loading, error);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Loading....");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Error...");
  const mortalityRate = (100 / stats.confirmed.value * stats.deaths.value).toFixed(2);
  return __jsx("div", {
    style: {
      padding: "4vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("table", {
    style: {
      width: "90vw",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("tr", {
    style: {
      outline: "1px solid black",
      fontSize: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Confirmed"), __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Recovered"), __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Deaths"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Mortality")), __jsx("tr", {
    style: {
      fontSize: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, stats.confirmed.value), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, stats.recovered.value), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, stats.deaths.value), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, mortalityRate, "%"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ }),

/***/ "./lib/useStats.js":
/*!*************************!*\
  !*** ./lib/useStats.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStats(url) {
  const {
    0: stats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("mounting or updating");

    async function fetchData() {
      setLoading(true);
      setError();
      console.log("fetching data");
      const data = await fetch(url).then(res => res.json()).catch(err => setError(err));
      setStats(data);
      setLoading(false);
    }

    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
}

/***/ }),

/***/ "./pages/countries.js":
/*!****************************!*\
  !*** ./pages/countries.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ CountrySelector */ "./components/ CountrySelector.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/pages/countries.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const states = () => {
  return __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (states);

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/countries.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/connermatson/Projects/rona/pages/countries.js */"./pages/countries.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=countries.js.map
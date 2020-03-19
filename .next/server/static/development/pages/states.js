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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/StateStats.js":
/*!**********************************!*\
  !*** ./components/StateStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/StateStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StateStats = ({
  url
}) => {
  const {
    stats,
    loading,
    error
  } = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
  let {
    0: num,
    1: setNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  console.log(stats, loading, error);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Loading....");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Error...");
  return __jsx("div", {
    style: {
      padding: "4vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h4", {
    style: {
      fontSize: "3vh",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, stats[num].provinceState), __jsx("table", {
    style: {
      width: "90vw",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("tr", {
    style: {
      outline: "1px solid black",
      fontSize: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Confirmed"), __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Active"), __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Recovered"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Deaths")), __jsx("tr", {
    style: {
      fontSize: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, stats[num].confirmed), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, stats[num].active), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, stats[num].recovered), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, stats[num].deaths))), __jsx("div", {
    style: {
      marginTop: "3vh",
      display: "flex",
      justifyContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => {
      num -= 1;
      setNum(num);
    },
    style: {
      border: "1px solid black",
      background: "transparent",
      margin: "1vw",
      borderRadius: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Last State"), __jsx("button", {
    onClick: () => {
      num += 1;
      setNum(num);
    },
    style: {
      border: "1px solid black",
      background: "transparent",
      margin: "1vw",
      borderRadius: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Next State")));
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

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

/***/ "./pages/states.js":
/*!*************************!*\
  !*** ./pages/states.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StateStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StateStats */ "./components/StateStats.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/pages/states.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const states = () => {
  return __jsx(_components_StateStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://covid19.mathdro.id/api/countries/USA/confirmed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (states);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/states.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/connermatson/Projects/rona/pages/states.js */"./pages/states.js");


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
//# sourceMappingURL=states.js.map
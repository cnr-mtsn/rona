webpackHotUpdate("static/development/pages/countries.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Stats = function Stats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  console.log(stats, loading, error);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Loading....");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Error...");
  var mortalityRate = (100 / stats.confirmed.value * stats.deaths.value).toFixed(2);
  return __jsx("div", {
    style: {
      padding: "4vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("table", {
    style: {
      width: "90vw",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("tr", {
    style: {
      outline: "1px solid black",
      fontSize: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Confirmed"), __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Recovered"), __jsx("td", {
    style: {
      borderRight: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Deaths"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Mortality")), __jsx("tr", {
    style: {
      fontSize: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, stats.confirmed.value), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, stats.recovered.value), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, stats.deaths.value), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, mortalityRate, "%"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ })

})
//# sourceMappingURL=countries.js.52675b9a36336a83d65c.hot-update.js.map
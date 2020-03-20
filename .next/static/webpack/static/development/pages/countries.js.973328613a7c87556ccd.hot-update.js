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
/* harmony import */ var _lib_formatNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatNumber */ "./lib/formatNumber.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Stats = function Stats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

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
      display: "flex",
      flexDirection: "column",
      marginTop: "5vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: "center",
      height: "15vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Confirmed"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_2__["default"])(stats.confirmed.value)), __jsx("div", {
    style: {
      height: ".5px",
      borderTop: "1px solid black",
      width: "50%",
      margin: "0 25vw 0 25vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: "center",
      height: "15vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Recovered"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_2__["default"])(stats.recovered.value)), __jsx("div", {
    style: {
      height: ".5px",
      borderTop: "1px solid black",
      width: "50%",
      margin: "0 25vw 0 25vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: "center",
      height: "15vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Deaths"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_2__["default"])(stats.deaths.value)), __jsx("div", {
    style: {
      height: ".5px",
      borderTop: "1px solid black",
      width: "50%",
      margin: "0 25vw 0 25vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: "center",
      height: "15vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Mortality"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, mortalityRate, "%")));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ })

})
//# sourceMappingURL=countries.js.973328613a7c87556ccd.hot-update.js.map
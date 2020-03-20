webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
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
      lineNumber: 9
    },
    __self: this
  }, "Loading....");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Error...");
  var mortalityRate = (100 / stats.confirmed.value * stats.deaths.value).toFixed(2);
  return __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    style: {
      textAlign: "center",
      height: "20vh",
      outline: "1px solid black",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Confirmed"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, stats.confirmed.value)), __jsx("div", {
    style: {
      textAlign: "center",
      height: "20vh",
      outline: "1px solid black",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Recovered"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, stats.recovered.value)), __jsx("div", {
    style: {
      textAlign: "center",
      height: "20vh",
      outline: "1px solid black",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Deaths"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, stats.deaths.value)), __jsx("div", {
    style: {
      textAlign: "center",
      height: "20vh",
      outline: "1px solid black",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Mortality"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, mortalityRate, "%")));
};

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ })

})
//# sourceMappingURL=index.js.710811ad5af9c669e437.hot-update.js.map
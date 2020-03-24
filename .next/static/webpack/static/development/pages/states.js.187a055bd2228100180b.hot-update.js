webpackHotUpdate("static/development/pages/states.js",{

/***/ "./components/StateBlock.js":
/*!**********************************!*\
  !*** ./components/StateBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/formatNumber */ "./lib/formatNumber.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/StateBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StateBlock = function StateBlock(_ref) {
  var state = _ref.state;
  console.log(state);
  return __jsx("div", {
    style: {
      width: "40vw",
      height: "35vh",
      border: "1px solid black",
      borderRadius: "10%",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h3", {
    style: {
      textAlign: "center",
      margin: "1vh 0 0 0",
      fontSize: "1.25rem",
      height: "3vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, state.combinedKey.substring(0, state.combinedKey.indexOf(","))), __jsx("div", {
    style: {
      height: "1vh",
      borderTop: "1px solid black",
      width: "40vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "25vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Confirmed: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.confirmed))), __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Active: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.active))), __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Recovered: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.recovered))), __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Deaths: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.deaths)))));
};

/* harmony default export */ __webpack_exports__["default"] = (StateBlock);

/***/ }),

/***/ "./components/StateStats.js":
/*!**********************************!*\
  !*** ./components/StateStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
/* harmony import */ var _StateBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateBlock */ "./components/StateBlock.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/components/StateStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StateStats = function StateStats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Missouri"),
      selectedState = _useState[0],
      setSelectedState = _useState[1];

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Loading....");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Error...");
  var states = [];

  for (var i = 0; i < stats.length; i++) {
    if (states.indexOf(stats[i].provinceState) === -1) {
      states.push(stats[i].provinceState);
    }

    states.sort();
  }

  console.log(states.length);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("select", {
    style: {
      width: "60vw",
      border: "1px solid black",
      background: "transparent",
      boxShadow: "2px 2px grey",
      fontSize: "20px"
    },
    onChange: function onChange(e) {
      setSelectedState(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, states.map(function (state) {
    return __jsx("option", {
      value: state,
      selected: selectedState,
      key: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, state);
  }))), __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "2rem",
      margin: "5vh 0 5vh 0",
      padding: "1rem",
      justifyItems: "center",
      overflowY: "scroll"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, stats.map(function (state) {
    return state.provinceState === selectedState ? __jsx(_StateBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }) : null;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

/***/ }),

/***/ "./pages/states.js":
/*!*************************!*\
  !*** ./pages/states.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StateStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/StateStats */ "./components/StateStats.js");
var _jsxFileName = "/Users/connermatson/Projects/rona/pages/states.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var states = function states() {
  return __jsx(_components_StateStats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "https://covid19.mathdro.id/api/countries/USA/confirmed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (states);

/***/ })

})
//# sourceMappingURL=states.js.187a055bd2228100180b.hot-update.js.map
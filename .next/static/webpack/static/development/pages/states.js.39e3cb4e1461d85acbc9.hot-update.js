webpackHotUpdate("static/development/pages/states.js",{

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
      flexDirection: "column",
      alignItems: "center",
      marginTop: "5vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    style: {
      margin: "0 0 2vh 0",
      fontSize: "4vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Select a state"), __jsx("select", {
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
      lineNumber: 41
    },
    __self: this
  }, states.map(function (state) {
    return __jsx("option", {
      value: state,
      key: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, state);
  })), __jsx("span", {
    style: {
      fontSize: "4vh",
      fontWeight: "bold",
      padding: "2vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Now viewing counties in: ", selectedState.toUpperCase())), __jsx("div", {
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
      lineNumber: 69
    },
    __self: this
  }, stats.map(function (state) {
    return state.provinceState === selectedState ? __jsx(_StateBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      state: state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }) : null;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

/***/ })

})
//# sourceMappingURL=states.js.39e3cb4e1461d85acbc9.hot-update.js.map
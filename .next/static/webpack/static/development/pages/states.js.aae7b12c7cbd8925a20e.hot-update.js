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
var _jsxFileName = "/Users/connermatson/Projects/rona/components/StateStats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StateStats = function StateStats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  console.log(stats, loading, error);
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
  return __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginTop: "5vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Confirmed"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, stats.map(function (state) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, state.provinceState);
  })), __jsx("div", {
    style: {
      height: ".5px",
      borderTop: "1px solid black",
      width: "50%",
      margin: "0 25vw 0 25vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

/***/ })

})
//# sourceMappingURL=states.js.aae7b12c7cbd8925a20e.hot-update.js.map
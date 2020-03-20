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
var _jsxFileName = "/Users/connermatson/Projects/rona/components/StateBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var StateBlock = function StateBlock() {
  return __jsx("div", {
    style: {
      width: "30vw",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: ".5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

  console.log(stats, loading, error);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Loading....");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Error...");
  return __jsx("div", {
    style: {
      display: "flex",
      marginTop: "5vh",
      padding: "1rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_StateBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StateStats);

/***/ })

})
//# sourceMappingURL=states.js.f1d7a91aafbda7a3fb26.hot-update.js.map
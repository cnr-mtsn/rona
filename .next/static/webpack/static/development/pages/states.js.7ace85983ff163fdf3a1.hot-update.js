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
      height: "30vh",
      outline: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h2", {
    style: {
      textAlign: "center",
      margin: "0 0 .5rem 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, state.provinceState), __jsx("div", {
    style: {
      height: "1rem",
      borderTop: "1px solid black",
      width: "20vw",
      margin: "0 10vw 0 10vw"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Confirmed: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.confirmed))), __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Active: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.active))), __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Recovered: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.recovered))), __jsx("p", {
    style: {
      fontSize: "1.2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Deaths: ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_lib_formatNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(state.deaths)))));
};

/* harmony default export */ __webpack_exports__["default"] = (StateBlock);

/***/ })

})
//# sourceMappingURL=states.js.7ace85983ff163fdf3a1.hot-update.js.map
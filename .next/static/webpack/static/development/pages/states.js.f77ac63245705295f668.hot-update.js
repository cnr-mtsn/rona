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
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
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
  }), __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Confirmed"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Recovered"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Active"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Deaths")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, state.confirmed), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, state.recovered), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, state.active), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, state.deaths))));
};

/* harmony default export */ __webpack_exports__["default"] = (StateBlock);

/***/ })

})
//# sourceMappingURL=states.js.f77ac63245705295f668.hot-update.js.map
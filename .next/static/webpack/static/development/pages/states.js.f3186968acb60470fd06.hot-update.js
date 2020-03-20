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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      num = _useState[0],
      setNum = _useState[1];

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
  return __jsx("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: ".5vw",
      marginTop: "5vh",
      padding: "1rem",
      justifyItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_StateBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: "",
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
//# sourceMappingURL=states.js.f3186968acb60470fd06.hot-update.js.map
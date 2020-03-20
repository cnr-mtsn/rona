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



var StateBlock = function StateBlock(_ref, props) {
  var url = _ref.url;

  var _useStats = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  console.log(stats);
  return __jsx("div", {
    style: {
      width: "40vw",
      height: "30vh",
      outline: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, stats.map(function (state) {
    return __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, state.provinceState);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StateBlock);

/***/ })

})
//# sourceMappingURL=states.js.b5bca92b51fcc8634570.hot-update.js.map
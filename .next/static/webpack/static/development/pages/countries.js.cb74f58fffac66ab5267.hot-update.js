webpackHotUpdate("static/development/pages/countries.js",{

/***/ "./components/ CountrySelector.js":
/*!****************************************!*\
  !*** ./components/ CountrySelector.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_useStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useStats */ "./lib/useStats.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");


var _jsxFileName = "/Users/connermatson/Projects/rona/components/ CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CountrySelectorStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
function CountrySelector() {
  var _useStats = Object(_lib_useStats__WEBPACK_IMPORTED_MODULE_4__["default"])("https://covid19.mathdro.id/api/countries"),
      countries = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("USA"),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Loading...");
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Error...");
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(CountrySelectorStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Select a Country"), __jsx("select", {
    onChange: function onChange(e) {
      setSelectedCountry(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, Object.entries(countries.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        country = _ref2[0],
        code = _ref2[1];

    return __jsx("option", {
      selected: selectedCountry === countries.iso3[code],
      key: code,
      value: countries.iso3[code],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, country);
  }))), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: "https://covid19.mathdro.id/api/countries/".concat(selectedCountry),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=countries.js.cb74f58fffac66ab5267.hot-update.js.map
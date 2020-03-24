webpackHotUpdate("static/development/pages/states.js",{

/***/ "./components/StateStats.js":
/*!**********************************!*\
  !*** ./components/StateStats.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React, { useState } from "react";
// import useStats from "../lib/useStats";
// import StateBlock from "./StateBlock";
// const StateStats = ({ url }) => {
//   const { stats, loading, error } = useStats(url);
//   const [selectedState, setSelectedState] = useState("Missouri");
//   if (loading) return <p>Loading....</p>;
//   if (error) return <p>Error...</p>;
//   let states = [];
//   for (let i = 0; i < stats.length; i++) {
//     if (states.indexOf(stats[i].provinceState) === -1) {
//       states.push(stats[i].provinceState);
//     }
//     states.sort();
//   }
//   console.log(states.length);
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "5vh",
//         }}
//       >
//         <select
//           style={{
//             width: "60vw",
//             border: "1px solid black",
//             background: "transparent",
//             boxShadow: "2px 2px grey",
//             fontSize: "20px",
//           }}
//           onChange={e => {
//             setSelectedState(e.target.value);
//           }}
//         >
//           {states.map(state => (
//             <option value={state} selected={selectedState} key={state}>
//               {state}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gridGap: "2rem",
//           margin: "5vh 0 5vh 0",
//           padding: "1rem",
//           justifyItems: "center",
//           overflowY: "scroll",
//         }}
//       >
//         {stats.map(state =>
//           state.provinceState === selectedState ? (
//             <StateBlock state={state} />
//           ) : null,
//         )}
//       </div>
//     </>
//   );
// };
// export default StateStats;

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
/* harmony import */ var _components_StateStats__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_StateStats__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/connermatson/Projects/rona/pages/states.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var states = function states() {
  return __jsx(_components_StateStats__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
//# sourceMappingURL=states.js.3eef286094c10760b7d0.hot-update.js.map
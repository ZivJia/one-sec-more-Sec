"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _checklist_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.json */ \"(app-pages-browser)/./src/app/checklist.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ \"(app-pages-browser)/./src/app/DoughnutChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const initData = [\n        {\n            category: \"backend\",\n            finishedCount: _checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend.checkList.reduce(acc)\n        }\n    ];\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        labels: Data.map((data)=>data.year),\n        datasets: [\n            {\n                label: \"Items checked\",\n                data: Data.map((data)=>data.userGain),\n                backgroundColor: [\n                    \"rgba(75,192,192,1)\",\n                    \"#ecf0f1\",\n                    \"#50AF95\",\n                    \"#f3ba2f\",\n                    \"#2a71d0\"\n                ],\n                borderWidth: 0\n            }\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            chartData: chartData\n        }, void 0, false, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"96GpoWfogVOwU8mrmI3zkFR/X+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ1A7QUFDSztBQUNNO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNQyxXQUFXO1FBQ2Y7WUFDRUMsVUFBVTtZQUNWQyxlQUFlUCxvREFBb0IsQ0FBQ0EsU0FBUyxDQUFDUSxNQUFNLENBQUVDO1FBQ3hEO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7UUFDekNXLFFBQVFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJO1FBQ3BDQyxVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BILE1BQU1GLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLSSxRQUFRO2dCQUN0Q0MsaUJBQWlCO29CQUNmO29CQUNBO29CQUNBO29CQUNBO29CQUNBO2lCQUNEO2dCQUNEQyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVdyQiw4REFBVztrQkFDMUIsNEVBQUNDLHNEQUFhQTtZQUNaTyxXQUFXQTs7Ozs7Ozs7Ozs7QUFJbkI7R0FoQ3dCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNoZWNrTGlzdCBmcm9tICcuL2NoZWNrbGlzdC5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gXCIuL0RvdWdobnV0Q2hhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaW5pdERhdGEgPSBbXG4gICAge1xuICAgICAgY2F0ZWdvcnk6IFwiYmFja2VuZFwiLFxuICAgICAgZmluaXNoZWRDb3VudDogY2hlY2tMaXN0WydiYWNrZW5kJ10uY2hlY2tMaXN0LnJlZHVjZSgoYWNjLCApKVxuICAgIH1cbiAgXVxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGxhYmVsczogRGF0YS5tYXAoKGRhdGEpID0+IGRhdGEueWVhciksIFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkl0ZW1zIGNoZWNrZWRcIixcbiAgICAgICAgZGF0YTogRGF0YS5tYXAoKGRhdGEpID0+IGRhdGEudXNlckdhaW4pLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgIFwiI2VjZjBmMVwiLFxuICAgICAgICAgIFwiIzUwQUY5NVwiLFxuICAgICAgICAgIFwiI2YzYmEyZlwiLFxuICAgICAgICAgIFwiIzJhNzFkMFwiXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICB9XG4gICAgXVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPERvdWdobnV0Q2hhcnRcbiAgICAgICAgY2hhcnREYXRhPXtjaGFydERhdGF9XG4gICAgICAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjaGVja0xpc3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkRvdWdobnV0Q2hhcnQiLCJIb21lIiwiaW5pdERhdGEiLCJjYXRlZ29yeSIsImZpbmlzaGVkQ291bnQiLCJyZWR1Y2UiLCJhY2MiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsYWJlbHMiLCJEYXRhIiwibWFwIiwiZGF0YSIsInllYXIiLCJkYXRhc2V0cyIsImxhYmVsIiwidXNlckdhaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _checklist_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.json */ \"(app-pages-browser)/./src/app/checklist.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ \"(app-pages-browser)/./src/app/DoughnutChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst getFinishedCount = (category)=>{\n    return category.checklist.reduce((acc, cur)=>acc + cur.value ? 1 : 0, 0);\n};\nconst getUnfinished = (allCategories)=>{\n    const allCount = _checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend.checklist.length + _checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend.checklist.length + _checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra.checklist.length + _checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline.checklist.length;\n    const unfinished = allCount - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend) - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend) - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra) - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline);\n    return unfinished;\n};\nfunction Home() {\n    _s();\n    const initData = [\n        {\n            category: \"Frontend\",\n            count: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend)\n        },\n        {\n            category: \"Backend\",\n            count: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend)\n        },\n        {\n            category: \"Infra\",\n            count: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra)\n        },\n        {\n            category: \"Pipeline\",\n            count: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline)\n        },\n        {\n            category: \"Waiting Action\",\n            count: getUnfinished(_checklist_json__WEBPACK_IMPORTED_MODULE_1__)\n        }\n    ];\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        labels: initData.map((data)=>data.category),\n        datasets: [\n            {\n                label: \"Items checked\",\n                data: initData.map((data)=>data.count),\n                backgroundColor: [\n                    \"rgba(75,192,192,1)\",\n                    \"#ecf0f1\",\n                    \"#50AF95\",\n                    \"#f3ba2f\",\n                    \"#2a71d0\"\n                ],\n                borderWidth: 0\n            }\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            chartData: chartData\n        }, void 0, false, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Q2T/9ltGraQUtBmhtAOdDl7L3MA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ1A7QUFDSztBQUNNO0FBRTVDLE1BQU1JLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQSxTQUFTTCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxNQUFRRCxNQUFNQyxJQUFJQyxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQzFFO0FBRUEsTUFBTUMsZ0JBQWdCLENBQUNDO0lBQ3JCLE1BQU1DLFdBQVdaLCtEQUErQixDQUFDYSxNQUFNLEdBQ3JEYiw4REFBOEIsQ0FBQ2EsTUFBTSxHQUNyQ2IsNERBQTRCLENBQUNhLE1BQU0sR0FDbkNiLCtEQUErQixDQUFDYSxNQUFNO0lBRXhDLE1BQU1DLGFBQWFGLFdBQ2pCUixpQkFBaUJKLHFEQUFxQixJQUN0Q0ksaUJBQWlCSixvREFBb0IsSUFDckNJLGlCQUFpQkosa0RBQWtCLElBQ25DSSxpQkFBaUJKLHFEQUFxQjtJQUV4QyxPQUFPYztBQUNUO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU1DLFdBQVc7UUFDZjtZQUNFWCxVQUFVO1lBQ1ZZLE9BQU9iLGlCQUFpQkoscURBQXFCO1FBQy9DO1FBQ0E7WUFDRUssVUFBVTtZQUNWWSxPQUFPYixpQkFBaUJKLG9EQUFvQjtRQUM5QztRQUNBO1lBQ0VLLFVBQVU7WUFDVlksT0FBT2IsaUJBQWlCSixrREFBa0I7UUFDNUM7UUFDQTtZQUNFSyxVQUFVO1lBQ1ZZLE9BQU9iLGlCQUFpQkoscURBQXFCO1FBQy9DO1FBQ0E7WUFDRUssVUFBVTtZQUNWWSxPQUFPUCxjQUFjViw0Q0FBU0E7UUFDaEM7S0FDRDtJQUNELE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO1FBQ3pDbUIsUUFBUUosU0FBU0ssR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtqQixRQUFRO1FBQzVDa0IsVUFBVTtZQUNSO2dCQUNFQyxPQUFPO2dCQUNQRixNQUFNTixTQUFTSyxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0wsS0FBSztnQkFDdkNRLGlCQUFpQjtvQkFDZjtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDRDtnQkFDREMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXMUIsOERBQVc7a0JBQzFCLDRFQUFDQyxzREFBYUE7WUFDWmUsV0FBV0E7Ozs7Ozs7Ozs7O0FBSW5CO0dBaER3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9jaGVja2xpc3QuanNvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tIFwiLi9Eb3VnaG51dENoYXJ0XCI7XG5cbmNvbnN0IGdldEZpbmlzaGVkQ291bnQgPSAoY2F0ZWdvcnkpID0+IHtcbiAgcmV0dXJuIGNhdGVnb3J5LmNoZWNrbGlzdC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIudmFsdWUgPyAxIDogMCwgMClcbn1cblxuY29uc3QgZ2V0VW5maW5pc2hlZCA9IChhbGxDYXRlZ29yaWVzKSA9PiB7XG4gIGNvbnN0IGFsbENvdW50ID0gY2hlY2tsaXN0Wydmcm9udGVuZCddLmNoZWNrbGlzdC5sZW5ndGggKyBcbiAgICBjaGVja2xpc3RbJ2JhY2tlbmQnXS5jaGVja2xpc3QubGVuZ3RoICsgXG4gICAgY2hlY2tsaXN0WydpbmZyYSddLmNoZWNrbGlzdC5sZW5ndGggKyBcbiAgICBjaGVja2xpc3RbJ3BpcGVsaW5lJ10uY2hlY2tsaXN0Lmxlbmd0aFxuXG4gIGNvbnN0IHVuZmluaXNoZWQgPSBhbGxDb3VudCAtIFxuICAgIGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0Wydmcm9udGVuZCddKSAtXG4gICAgZ2V0RmluaXNoZWRDb3VudChjaGVja2xpc3RbJ2JhY2tlbmQnXSkgLSBcbiAgICBnZXRGaW5pc2hlZENvdW50KGNoZWNrbGlzdFsnaW5mcmEnXSkgLSBcbiAgICBnZXRGaW5pc2hlZENvdW50KGNoZWNrbGlzdFsncGlwZWxpbmUnXSlcblxuICByZXR1cm4gdW5maW5pc2hlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBpbml0RGF0YSA9IFtcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJGcm9udGVuZFwiLFxuICAgICAgY291bnQ6IGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0Wydmcm9udGVuZCddKVxuICAgIH0sXG4gICAge1xuICAgICAgY2F0ZWdvcnk6IFwiQmFja2VuZFwiLFxuICAgICAgY291bnQ6IGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0WydiYWNrZW5kJ10pXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJJbmZyYVwiLFxuICAgICAgY291bnQ6IGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0WydpbmZyYSddKVxuICAgIH0sXG4gICAge1xuICAgICAgY2F0ZWdvcnk6IFwiUGlwZWxpbmVcIixcbiAgICAgIGNvdW50OiBnZXRGaW5pc2hlZENvdW50KGNoZWNrbGlzdFsncGlwZWxpbmUnXSlcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhdGVnb3J5OiBcIldhaXRpbmcgQWN0aW9uXCIsXG4gICAgICBjb3VudDogZ2V0VW5maW5pc2hlZChjaGVja2xpc3QpXG4gICAgfSxcbiAgXVxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGxhYmVsczogaW5pdERhdGEubWFwKChkYXRhKSA9PiBkYXRhLmNhdGVnb3J5KSwgXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiSXRlbXMgY2hlY2tlZFwiLFxuICAgICAgICBkYXRhOiBpbml0RGF0YS5tYXAoKGRhdGEpID0+IGRhdGEuY291bnQpLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgIFwiI2VjZjBmMVwiLFxuICAgICAgICAgIFwiIzUwQUY5NVwiLFxuICAgICAgICAgIFwiI2YzYmEyZlwiLFxuICAgICAgICAgIFwiIzJhNzFkMFwiXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICB9XG4gICAgXVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8RG91Z2hudXRDaGFydFxuICAgICAgICBjaGFydERhdGE9e2NoYXJ0RGF0YX1cbiAgICAgIC8+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNoZWNrbGlzdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRG91Z2hudXRDaGFydCIsImdldEZpbmlzaGVkQ291bnQiLCJjYXRlZ29yeSIsInJlZHVjZSIsImFjYyIsImN1ciIsInZhbHVlIiwiZ2V0VW5maW5pc2hlZCIsImFsbENhdGVnb3JpZXMiLCJhbGxDb3VudCIsImxlbmd0aCIsInVuZmluaXNoZWQiLCJIb21lIiwiaW5pdERhdGEiLCJjb3VudCIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsIm1hcCIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
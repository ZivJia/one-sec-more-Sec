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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _checklist_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.json */ \"(app-pages-browser)/./src/app/checklist.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ \"(app-pages-browser)/./src/app/DoughnutChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst getFinishedCount = (category)=>{\n    return category.checkList.reduce((acc, cur)=>acc + parseInt(cur.value), 0);\n};\nconst getUnfinished = (allCategories)=>{\n    const allCount = _checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend.checkList.length + _checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend.checkList.length + _checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra.checkList.length + _checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline.checkList.length;\n    const unfinished = allCount - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend) - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend) - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra) - getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline);\n};\nfunction Home() {\n    _s();\n    const initData = [\n        {\n            category: \"Frontend\",\n            finishedCount: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.frontend)\n        },\n        {\n            category: \"Backend\",\n            finishedCount: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.backend)\n        },\n        {\n            category: \"Infra\",\n            finishedCount: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.infra)\n        },\n        {\n            category: \"Pipeline\",\n            finishedCount: getFinishedCount(_checklist_json__WEBPACK_IMPORTED_MODULE_1__.pipeline)\n        },\n        {\n            category: \"Waiting Action\",\n            finishedCount: getUnfinished(_checklist_json__WEBPACK_IMPORTED_MODULE_1__)\n        }\n    ];\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        labels: Data.map((data)=>data.year),\n        datasets: [\n            {\n                label: \"Items checked\",\n                data: initData.map((data)=>data.userGain),\n                backgroundColor: [\n                    \"rgba(75,192,192,1)\",\n                    \"#ecf0f1\",\n                    \"#50AF95\",\n                    \"#f3ba2f\",\n                    \"#2a71d0\"\n                ],\n                borderWidth: 0\n            }\n        ]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            chartData: chartData\n        }, void 0, false, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"a33fRurrMx4fTF+ze4DSpPJ9kHc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ1A7QUFDSztBQUNNO0FBRTVDLE1BQU1JLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQSxTQUFTTCxTQUFTLENBQUNNLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxNQUFRRCxNQUFNRSxTQUFTRCxJQUFJRSxLQUFLLEdBQUc7QUFDNUU7QUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0M7SUFDckIsTUFBTUMsV0FBV2IscURBQXFCLENBQUNBLFNBQVMsQ0FBQ2MsTUFBTSxHQUNyRGQsb0RBQW9CLENBQUNBLFNBQVMsQ0FBQ2MsTUFBTSxHQUNyQ2Qsa0RBQWtCLENBQUNBLFNBQVMsQ0FBQ2MsTUFBTSxHQUNuQ2QscURBQXFCLENBQUNBLFNBQVMsQ0FBQ2MsTUFBTTtJQUV4QyxNQUFNQyxhQUFhRixXQUNqQlQsaUJBQWlCSixxREFBcUIsSUFDdENJLGlCQUFpQkosb0RBQW9CLElBQ3JDSSxpQkFBaUJKLGtEQUFrQixJQUNuQ0ksaUJBQWlCSixxREFBcUI7QUFDMUM7QUFFZSxTQUFTZ0I7O0lBQ3RCLE1BQU1DLFdBQVc7UUFDZjtZQUNFWixVQUFVO1lBQ1ZhLGVBQWVkLGlCQUFpQkoscURBQXFCO1FBQ3ZEO1FBQ0E7WUFDRUssVUFBVTtZQUNWYSxlQUFlZCxpQkFBaUJKLG9EQUFvQjtRQUN0RDtRQUNBO1lBQ0VLLFVBQVU7WUFDVmEsZUFBZWQsaUJBQWlCSixrREFBa0I7UUFDcEQ7UUFDQTtZQUNFSyxVQUFVO1lBQ1ZhLGVBQWVkLGlCQUFpQkoscURBQXFCO1FBQ3ZEO1FBQ0E7WUFDRUssVUFBVTtZQUNWYSxlQUFlUCxjQUFjWCw0Q0FBU0E7UUFDeEM7S0FDRDtJQUNELE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO1FBQ3pDb0IsUUFBUUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLElBQUk7UUFDcENDLFVBQVU7WUFDUjtnQkFDRUMsT0FBTztnQkFDUEgsTUFBTVAsU0FBU00sR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtJLFFBQVE7Z0JBQzFDQyxpQkFBaUI7b0JBQ2Y7b0JBQ0E7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7Z0JBQ0RDLGFBQWE7WUFDZjtTQUNEO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVzlCLDhEQUFXO2tCQUMxQiw0RUFBQ0Msc0RBQWFBO1lBQ1pnQixXQUFXQTs7Ozs7Ozs7Ozs7QUFJbkI7R0FoRHdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNoZWNrTGlzdCBmcm9tICcuL2NoZWNrbGlzdC5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gXCIuL0RvdWdobnV0Q2hhcnRcIjtcblxuY29uc3QgZ2V0RmluaXNoZWRDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xuICByZXR1cm4gY2F0ZWdvcnkuY2hlY2tMaXN0LnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIHBhcnNlSW50KGN1ci52YWx1ZSksIDApXG59XG5cbmNvbnN0IGdldFVuZmluaXNoZWQgPSAoYWxsQ2F0ZWdvcmllcykgPT4ge1xuICBjb25zdCBhbGxDb3VudCA9IGNoZWNrTGlzdFsnZnJvbnRlbmQnXS5jaGVja0xpc3QubGVuZ3RoICsgXG4gICAgY2hlY2tMaXN0WydiYWNrZW5kJ10uY2hlY2tMaXN0Lmxlbmd0aCArIFxuICAgIGNoZWNrTGlzdFsnaW5mcmEnXS5jaGVja0xpc3QubGVuZ3RoICsgXG4gICAgY2hlY2tMaXN0WydwaXBlbGluZSddLmNoZWNrTGlzdC5sZW5ndGhcblxuICBjb25zdCB1bmZpbmlzaGVkID0gYWxsQ291bnQgLSBcbiAgICBnZXRGaW5pc2hlZENvdW50KGNoZWNrTGlzdFsnZnJvbnRlbmQnXSkgLVxuICAgIGdldEZpbmlzaGVkQ291bnQoY2hlY2tMaXN0WydiYWNrZW5kJ10pIC0gXG4gICAgZ2V0RmluaXNoZWRDb3VudChjaGVja0xpc3RbJ2luZnJhJ10pIC0gXG4gICAgZ2V0RmluaXNoZWRDb3VudChjaGVja0xpc3RbJ3BpcGVsaW5lJ10pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGluaXREYXRhID0gW1xuICAgIHtcbiAgICAgIGNhdGVnb3J5OiBcIkZyb250ZW5kXCIsXG4gICAgICBmaW5pc2hlZENvdW50OiBnZXRGaW5pc2hlZENvdW50KGNoZWNrTGlzdFsnZnJvbnRlbmQnXSlcbiAgICB9LFxuICAgIHtcbiAgICAgIGNhdGVnb3J5OiBcIkJhY2tlbmRcIixcbiAgICAgIGZpbmlzaGVkQ291bnQ6IGdldEZpbmlzaGVkQ291bnQoY2hlY2tMaXN0WydiYWNrZW5kJ10pXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJJbmZyYVwiLFxuICAgICAgZmluaXNoZWRDb3VudDogZ2V0RmluaXNoZWRDb3VudChjaGVja0xpc3RbJ2luZnJhJ10pXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJQaXBlbGluZVwiLFxuICAgICAgZmluaXNoZWRDb3VudDogZ2V0RmluaXNoZWRDb3VudChjaGVja0xpc3RbJ3BpcGVsaW5lJ10pXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogXCJXYWl0aW5nIEFjdGlvblwiLFxuICAgICAgZmluaXNoZWRDb3VudDogZ2V0VW5maW5pc2hlZChjaGVja0xpc3QpXG4gICAgfSxcbiAgXVxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGxhYmVsczogRGF0YS5tYXAoKGRhdGEpID0+IGRhdGEueWVhciksIFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkl0ZW1zIGNoZWNrZWRcIixcbiAgICAgICAgZGF0YTogaW5pdERhdGEubWFwKChkYXRhKSA9PiBkYXRhLnVzZXJHYWluKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcbiAgICAgICAgICBcIiNlY2YwZjFcIixcbiAgICAgICAgICBcIiM1MEFGOTVcIixcbiAgICAgICAgICBcIiNmM2JhMmZcIixcbiAgICAgICAgICBcIiMyYTcxZDBcIlxuICAgICAgICBdLFxuICAgICAgICBib3JkZXJXaWR0aDogMFxuICAgICAgfVxuICAgIF1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxEb3VnaG51dENoYXJ0XG4gICAgICAgIGNoYXJ0RGF0YT17Y2hhcnREYXRhfVxuICAgICAgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2hlY2tMaXN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJEb3VnaG51dENoYXJ0IiwiZ2V0RmluaXNoZWRDb3VudCIsImNhdGVnb3J5IiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicGFyc2VJbnQiLCJ2YWx1ZSIsImdldFVuZmluaXNoZWQiLCJhbGxDYXRlZ29yaWVzIiwiYWxsQ291bnQiLCJsZW5ndGgiLCJ1bmZpbmlzaGVkIiwiSG9tZSIsImluaXREYXRhIiwiZmluaXNoZWRDb3VudCIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImxhYmVscyIsIkRhdGEiLCJtYXAiLCJkYXRhIiwieWVhciIsImRhdGFzZXRzIiwibGFiZWwiLCJ1c2VyR2FpbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
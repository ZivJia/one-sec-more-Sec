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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _checklist_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.json */ \"(app-pages-browser)/./src/app/checklist.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ \"(app-pages-browser)/./src/app/DoughnutChart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst getFinishedCount = (category)=>{\n    return category.checklist.reduce((acc, cur)=>acc + cur.value ? 1 : 0, 0);\n};\nconst getUnfinished = (allCategories)=>{\n    const allCount = checklist[\"frontend\"].checklist.length + checklist[\"backend\"].checklist.length + checklist[\"infra\"].checklist.length + checklist[\"pipeline\"].checklist.length;\n    const unfinished = allCount - getFinishedCount(checklist[\"frontend\"]) - getFinishedCount(checklist[\"backend\"]) - getFinishedCount(checklist[\"infra\"]) - getFinishedCount(checklist[\"pipeline\"]);\n    return unfinished;\n};\nconst getChartData = (checklist1)=>{\n    return {\n        labels: [\n            checklist1[\"frontend\"].name,\n            checklist1[\"backend\"].name,\n            checklist1[\"infra\"].name,\n            checklist1[\"pipeline\"].name,\n            \"Waiting on action\"\n        ],\n        datasets: [\n            {\n                label: \"Items checked\",\n                data: [\n                    getFinishedCount(checklist1[\"frontend\"]),\n                    getFinishedCount(checklist1[\"backend\"]),\n                    getFinishedCount(checklist1[\"infra\"]),\n                    getFinishedCount(checklist1[\"pipeline\"]),\n                    getUnfinished(checklist1)\n                ],\n                backgroundColor: [\n                    \"rgba(75,192,192,1)\",\n                    \"#ecf0f1\",\n                    \"#50AF95\",\n                    \"#f3ba2f\",\n                    \"#2a71d0\"\n                ],\n                borderWidth: 0\n            }\n        ]\n    };\n};\nfunction Home() {\n    _s();\n    const [checklist1, setChecklist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_checklist_json__WEBPACK_IMPORTED_MODULE_1__);\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getChartData(checklist1));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>setChartData(getChartData(checklist1)), [\n        setChartData,\n        checklist1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            chartData: chartData\n        }, void 0, false, {\n            fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zjia/Personal/one-sec-more-Sec/src/app/page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"/wJKFZtoM5i9ZKch95CIVN5gdtQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRStDO0FBQ0g7QUFDTjtBQUNNO0FBRTVDLE1BQU1LLG1CQUFtQixDQUFDQztJQUN4QixPQUFPQSxTQUFTQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxNQUFRRCxNQUFNQyxJQUFJQyxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBQzFFO0FBRUEsTUFBTUMsZ0JBQWdCLENBQUNDO0lBQ3JCLE1BQU1DLFdBQVdQLFNBQVMsQ0FBQyxXQUFXLENBQUNBLFNBQVMsQ0FBQ1EsTUFBTSxHQUNyRFIsU0FBUyxDQUFDLFVBQVUsQ0FBQ0EsU0FBUyxDQUFDUSxNQUFNLEdBQ3JDUixTQUFTLENBQUMsUUFBUSxDQUFDQSxTQUFTLENBQUNRLE1BQU0sR0FDbkNSLFNBQVMsQ0FBQyxXQUFXLENBQUNBLFNBQVMsQ0FBQ1EsTUFBTTtJQUV4QyxNQUFNQyxhQUFhRixXQUNqQlQsaUJBQWlCRSxTQUFTLENBQUMsV0FBVyxJQUN0Q0YsaUJBQWlCRSxTQUFTLENBQUMsVUFBVSxJQUNyQ0YsaUJBQWlCRSxTQUFTLENBQUMsUUFBUSxJQUNuQ0YsaUJBQWlCRSxTQUFTLENBQUMsV0FBVztJQUV4QyxPQUFPUztBQUNUO0FBRUEsTUFBTUMsZUFBZSxDQUFDVjtJQUNwQixPQUFPO1FBQ0xXLFFBQVE7WUFDTlgsVUFBUyxDQUFDLFdBQVcsQ0FBQ1ksSUFBSTtZQUMxQlosVUFBUyxDQUFDLFVBQVUsQ0FBQ1ksSUFBSTtZQUN6QlosVUFBUyxDQUFDLFFBQVEsQ0FBQ1ksSUFBSTtZQUN2QlosVUFBUyxDQUFDLFdBQVcsQ0FBQ1ksSUFBSTtZQUMxQjtTQUNEO1FBQ0RDLFVBQVU7WUFDUjtnQkFDRUMsT0FBTztnQkFDUEMsTUFBTTtvQkFDSmpCLGlCQUFpQkUsVUFBUyxDQUFDLFdBQVc7b0JBQ3RDRixpQkFBaUJFLFVBQVMsQ0FBQyxVQUFVO29CQUNyQ0YsaUJBQWlCRSxVQUFTLENBQUMsUUFBUTtvQkFDbkNGLGlCQUFpQkUsVUFBUyxDQUFDLFdBQVc7b0JBQ3RDSyxjQUFjTDtpQkFDZjtnQkFDRGdCLGlCQUFpQjtvQkFDZjtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDRDtnQkFDREMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtBQUNGO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ2xCLFlBQVdtQixhQUFhLEdBQUd4QiwrQ0FBUUEsQ0FBQ0YsNENBQWdCQTtJQUMzRCxNQUFNLENBQUMyQixXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBQ2UsYUFBYVY7SUFFeEROLGdEQUFTQSxDQUFDLElBQU0yQixhQUFhWCxhQUFhVixjQUFhO1FBQUNxQjtRQUFjckI7S0FBVTtJQUVoRixxQkFDRSw4REFBQ3NCO1FBQUtDLFdBQVczQiw4REFBVztrQkFDMUIsNEVBQUNDLHNEQUFhQTtZQUNadUIsV0FBV0E7Ozs7Ozs7Ozs7O0FBSW5CO0dBYndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGRlZmF1bHRDaGVja2xpc3QgZnJvbSAnLi9jaGVja2xpc3QuanNvbidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gXCIuL0RvdWdobnV0Q2hhcnRcIjtcblxuY29uc3QgZ2V0RmluaXNoZWRDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xuICByZXR1cm4gY2F0ZWdvcnkuY2hlY2tsaXN0LnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci52YWx1ZSA/IDEgOiAwLCAwKVxufVxuXG5jb25zdCBnZXRVbmZpbmlzaGVkID0gKGFsbENhdGVnb3JpZXMpID0+IHtcbiAgY29uc3QgYWxsQ291bnQgPSBjaGVja2xpc3RbJ2Zyb250ZW5kJ10uY2hlY2tsaXN0Lmxlbmd0aCArIFxuICAgIGNoZWNrbGlzdFsnYmFja2VuZCddLmNoZWNrbGlzdC5sZW5ndGggKyBcbiAgICBjaGVja2xpc3RbJ2luZnJhJ10uY2hlY2tsaXN0Lmxlbmd0aCArIFxuICAgIGNoZWNrbGlzdFsncGlwZWxpbmUnXS5jaGVja2xpc3QubGVuZ3RoXG5cbiAgY29uc3QgdW5maW5pc2hlZCA9IGFsbENvdW50IC0gXG4gICAgZ2V0RmluaXNoZWRDb3VudChjaGVja2xpc3RbJ2Zyb250ZW5kJ10pIC1cbiAgICBnZXRGaW5pc2hlZENvdW50KGNoZWNrbGlzdFsnYmFja2VuZCddKSAtIFxuICAgIGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0WydpbmZyYSddKSAtIFxuICAgIGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0WydwaXBlbGluZSddKVxuXG4gIHJldHVybiB1bmZpbmlzaGVkXG59XG5cbmNvbnN0IGdldENoYXJ0RGF0YSA9IChjaGVja2xpc3QpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbHM6IFtcbiAgICAgIGNoZWNrbGlzdFsnZnJvbnRlbmQnXS5uYW1lLFxuICAgICAgY2hlY2tsaXN0WydiYWNrZW5kJ10ubmFtZSxcbiAgICAgIGNoZWNrbGlzdFsnaW5mcmEnXS5uYW1lLFxuICAgICAgY2hlY2tsaXN0WydwaXBlbGluZSddLm5hbWUsXG4gICAgICAnV2FpdGluZyBvbiBhY3Rpb24nLFxuICAgIF0sIFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkl0ZW1zIGNoZWNrZWRcIixcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIGdldEZpbmlzaGVkQ291bnQoY2hlY2tsaXN0Wydmcm9udGVuZCddKSxcbiAgICAgICAgICBnZXRGaW5pc2hlZENvdW50KGNoZWNrbGlzdFsnYmFja2VuZCddKSxcbiAgICAgICAgICBnZXRGaW5pc2hlZENvdW50KGNoZWNrbGlzdFsnaW5mcmEnXSksXG4gICAgICAgICAgZ2V0RmluaXNoZWRDb3VudChjaGVja2xpc3RbJ3BpcGVsaW5lJ10pLFxuICAgICAgICAgIGdldFVuZmluaXNoZWQoY2hlY2tsaXN0KVxuICAgICAgICBdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxuICAgICAgICAgIFwiI2VjZjBmMVwiLFxuICAgICAgICAgIFwiIzUwQUY5NVwiLFxuICAgICAgICAgIFwiI2YzYmEyZlwiLFxuICAgICAgICAgIFwiIzJhNzFkMFwiXG4gICAgICAgIF0sXG4gICAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgICB9XG4gICAgXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjaGVja2xpc3QsIHNldENoZWNrbGlzdF0gPSB1c2VTdGF0ZShkZWZhdWx0Q2hlY2tsaXN0KVxuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoZ2V0Q2hhcnREYXRhKGNoZWNrbGlzdCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldENoYXJ0RGF0YShnZXRDaGFydERhdGEoY2hlY2tsaXN0KSksIFtzZXRDaGFydERhdGEsIGNoZWNrbGlzdF0pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxEb3VnaG51dENoYXJ0XG4gICAgICAgIGNoYXJ0RGF0YT17Y2hhcnREYXRhfVxuICAgICAgLz5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZGVmYXVsdENoZWNrbGlzdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRG91Z2hudXRDaGFydCIsImdldEZpbmlzaGVkQ291bnQiLCJjYXRlZ29yeSIsImNoZWNrbGlzdCIsInJlZHVjZSIsImFjYyIsImN1ciIsInZhbHVlIiwiZ2V0VW5maW5pc2hlZCIsImFsbENhdGVnb3JpZXMiLCJhbGxDb3VudCIsImxlbmd0aCIsInVuZmluaXNoZWQiLCJnZXRDaGFydERhdGEiLCJsYWJlbHMiLCJuYW1lIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsIkhvbWUiLCJzZXRDaGVja2xpc3QiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});
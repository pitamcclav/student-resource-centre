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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-label */ \"(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _auth_login_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/actions */ \"(app-pages-browser)/./src/app/auth/login/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    async function handleSubmit(formData) {\n        const result = await (0,_auth_login_actions__WEBPACK_IMPORTED_MODULE_7__.loginUser)(formData);\n        if (result.success) {\n            router.push('/student/dashboard');\n        } else {\n            // Handle specific errors\n            setError('general' in result.error ? result.error.general : 'Login failed');\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8 dark:bg-gray-800\",\n            children: [\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg\",\n                    role: \"alert\",\n                    children: typeof error === \"string\" ? error : \"Please fix the highlighted fields.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/file.svg\",\n                            alt: \"Students Resource Centre Logo\",\n                            width: 100,\n                            height: 100,\n                            className: \"mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold text-gray-800 dark:text-white\",\n                            children: \"Welcome Back!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-600 dark:text-gray-400\",\n                            children: \"Log in to access your resources.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"space-y-4\",\n                    action: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_8__.Label, {\n                                    htmlFor: \"studentNo\",\n                                    className: \"block text-sm font-medium text-gray-700 dark:text-gray-300\",\n                                    children: \"Student Number\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    type: \"text\",\n                                    id: \"studentNo\",\n                                    name: \"studentNo\",\n                                    className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white\",\n                                    placeholder: \"Student Number\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_8__.Label, {\n                                    htmlFor: \"password\",\n                                    className: \"block text-sm font-medium text-gray-700 dark:text-gray-300\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    className: \"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white\",\n                                    placeholder: \"Enter your password\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600\",\n                            children: \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm text-center text-gray-600 dark:text-gray-400 mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/auth/forgot_password\",\n                        className: \"text-blue-600 hover:underline dark:text-blue-400\",\n                        children: \"Forgot password?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm text-center text-gray-600 dark:text-gray-400 mt-2\",\n                    children: [\n                        \"Don’t have an account?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/auth/register\",\n                            className: \"text-blue-600 hover:underline dark:text-blue-400\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    className: \"w-full bg-red-100 text-grey-300  py-2 px-4 rounded-md hover:bg-red-300 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-500 dark:hover:bg-red-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/auth/admin\",\n                        children: \"SignIn as Admin\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"MR8tCoqxvBvG3t/ali+tXhiyKHg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNGO0FBQ21CO0FBQ0Y7QUFDQTtBQUNiO0FBQ1c7QUFDSztBQUdsQyxTQUFTUTs7SUFFdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNTSxTQUFTTCwwREFBU0E7SUFFeEIsZUFBZU0sYUFBYUMsUUFBa0I7UUFDNUMsTUFBTUMsU0FBUyxNQUFNUCw4REFBU0EsQ0FBQ007UUFFL0IsSUFBSUMsT0FBT0MsT0FBTyxFQUFFO1lBQ2xCSixPQUFPSyxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0wseUJBQXlCO1lBQ3pCTixTQUFTLGFBQWFJLE9BQU9MLEtBQUssR0FBR0ssT0FBT0wsS0FBSyxDQUFDUSxPQUFPLEdBQUc7UUFDOUQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOztnQkFFWlYsdUJBQ2UsOERBQUNTO29CQUFJQyxXQUFVO29CQUFzREMsTUFBSzs4QkFDckUsT0FBT1gsVUFBVSxXQUFXQSxRQUFROzs7Ozs7OEJBR3pELDhEQUFDUztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNuQixrREFBS0E7NEJBQ0pxQixLQUFJOzRCQUNKQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSTCxXQUFVOzs7Ozs7c0NBRVosOERBQUNNOzRCQUFHTixXQUFVO3NDQUFtRDs7Ozs7O3NDQUdqRSw4REFBQ087NEJBQUVQLFdBQVU7c0NBQTJDOzs7Ozs7Ozs7Ozs7OEJBTTFELDhEQUFDUTtvQkFBS1IsV0FBVTtvQkFBWVMsUUFBUWhCOztzQ0FFbEMsOERBQUNNOzs4Q0FDQyw4REFBQ2Qsd0RBQUtBO29DQUNKeUIsU0FBUTtvQ0FDUlYsV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDaEIsdURBQUtBO29DQUNKMkIsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSEMsTUFBSztvQ0FDTGIsV0FBVTtvQ0FDVmMsYUFBWTtvQ0FDWkMsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUtaLDhEQUFDaEI7OzhDQUNDLDhEQUFDZCx3REFBS0E7b0NBQ0p5QixTQUFRO29DQUNSVixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNoQix1REFBS0E7b0NBQ0oyQixNQUFLO29DQUNMQyxJQUFHO29DQUNIQyxNQUFLO29DQUNMYixXQUFVO29DQUNWYyxhQUFZO29DQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7c0NBS1osOERBQUNoQyx5REFBTUE7NEJBQ0w0QixNQUFLOzRCQUNMWCxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7OEJBTUgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDbEIsaURBQUlBO3dCQUFDa0MsTUFBSzt3QkFBd0JoQixXQUFVO2tDQUFtRDs7Ozs7Ozs7Ozs7OEJBT2xHLDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBQTREO3dCQUNsRDtzQ0FDdkIsOERBQUNsQixpREFBSUE7NEJBQUNrQyxNQUFLOzRCQUFpQmhCLFdBQVU7c0NBQW1EOzs7Ozs7Ozs7Ozs7OEJBSTNGLDhEQUFDakIseURBQU1BO29CQUFDaUIsV0FBVTs4QkFDaEIsNEVBQUNsQixpREFBSUE7d0JBQUNrQyxNQUFLO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25DO0dBL0d3QjNCOztRQUdQRixzREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUFxcRGVza3RvcFxcUHJvamVjdHNcXHN0dWRlbnQtcmVzb3VyY2UtY2VudHJlXFxzcmNcXGFwcFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWxhYmVsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gXCIuL2F1dGgvbG9naW4vYWN0aW9uc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2dpblVzZXIoZm9ybURhdGEpO1xuXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3N0dWRlbnQvZGFzaGJvYXJkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBzcGVjaWZpYyBlcnJvcnNcbiAgICAgIHNldEVycm9yKCdnZW5lcmFsJyBpbiByZXN1bHQuZXJyb3IgPyByZXN1bHQuZXJyb3IuZ2VuZXJhbCA6ICdMb2dpbiBmYWlsZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtOCBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS05MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNiBzbTpwLTggZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgICB7LyogSGVhZGVyIFNlY3Rpb24gKi99XG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtYi00IHRleHQtc20gdGV4dC1yZWQtNzAwIGJnLXJlZC0xMDAgcm91bmRlZC1sZ1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgZXJyb3IgPT09IFwic3RyaW5nXCIgPyBlcnJvciA6IFwiUGxlYXNlIGZpeCB0aGUgaGlnaGxpZ2h0ZWQgZmllbGRzLlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9maWxlLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJTdHVkZW50cyBSZXNvdXJjZSBDZW50cmUgTG9nb1wiXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdlbGNvbWUgQmFjayFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIExvZyBpbiB0byBhY2Nlc3MgeW91ciByZXNvdXJjZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTG9naW4gRm9ybSAqL31cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS00XCIgYWN0aW9uPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIHsvKiBFbWFpbCBJbnB1dCAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJzdHVkZW50Tm9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3R1ZGVudCBOdW1iZXJcbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cInN0dWRlbnROb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJzdHVkZW50Tm9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgc206dGV4dC1zbSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdHVkZW50IE51bWJlclwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFBhc3N3b3JkIElucHV0ICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgc206dGV4dC1zbSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTG9naW4gQnV0dG9uICovfVxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vZmZzZXQtMiBkYXJrOmJnLWJsdWUtNTAwIGRhcms6aG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgey8qIEZvcmdvdCBQYXNzd29yZCBhbmQgU2lnbnVwIExpbmtzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDAgbXQtNFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9mb3Jnb3RfcGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtYmx1ZS00MDBcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgIFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIG10LTJcIj5cbiAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWJsdWUtNDAwXCI+XG4gICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1yZWQtMTAwIHRleHQtZ3JleS0zMDAgIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLXJlZC0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmVkLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yIGRhcms6YmctcmVkLTUwMCBkYXJrOmhvdmVyOmJnLXJlZC02MDBcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvYWRtaW5cIj5cbiAgICAgICAgICBTaWduSW4gYXMgQWRtaW5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiQnV0dG9uIiwiSW5wdXQiLCJMYWJlbCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibG9naW5Vc2VyIiwiTG9naW5QYWdlIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1EYXRhIiwicmVzdWx0Iiwic3VjY2VzcyIsInB1c2giLCJnZW5lcmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJwIiwiZm9ybSIsImFjdGlvbiIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
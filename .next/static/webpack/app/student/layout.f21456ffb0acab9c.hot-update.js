"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/student/layout",{

/***/ "(app-pages-browser)/./src/app/student/layout.tsx":
/*!************************************!*\
  !*** ./src/app/student/layout.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StudentLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,Library!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,Library!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/library.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/navigation-menu */ \"(app-pages-browser)/./src/components/ui/navigation-menu.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction StudentLayout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleLogout() {\n        try {\n            document.cookie = 'session=; Max-Age=0; path=/; secure; sameSite=strict';\n            router.push('/');\n        } catch (error) {\n            console.error('Failed to logout:', error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6 border-b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-bold text-gray-800\",\n                            children: \"Student Panel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenu, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuList, {\n                                className: \"space-x-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/dashboard\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.DashboardIcon, {\n                                                        className: \"mr-2 h-5 w-5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \"Dashboard\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/favourites\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        className: \"mr-2 h-5 w-5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \"Favorites\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/library\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        className: \"mr-2 h-5 w-5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \"Resources\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/profile\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.PersonIcon, {\n                                                        className: \"mr-2 h-5 w-5\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \"Profile\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLogout,\n                                            className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.ExitIcon, {\n                                                    className: \"mr-2 h-5 w-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"Logout\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-6\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(StudentLayout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StudentLayout;\nvar _c;\n$RefreshReg$(_c, \"StudentLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R1ZGVudC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNEU7QUFDdkI7QUFDeEI7QUFDZTtBQU1IO0FBQ29DO0FBRTlELFNBQVNZLGNBQWMsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDcEMsTUFBTUMsU0FBU1IsMERBQVNBO0lBRXhCLGVBQWVTO1FBQ2IsSUFBSTtZQUNGQyxTQUFTQyxNQUFNLEdBQUc7WUFDbEJILE9BQU9JLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMscUJBQXFCQTtRQUNyQztJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7OzBCQUVqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUdGLFdBQVU7c0NBQW1DOzs7Ozs7Ozs7OztrQ0FJbkQsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDZiwwRUFBY0E7c0NBQ2IsNEVBQUNDLDhFQUFrQkE7Z0NBQUNjLFdBQVU7O2tEQUM1Qiw4REFBQ2IsOEVBQWtCQTtrREFDakIsNEVBQUNKLGlEQUFJQTs0Q0FBQ29CLE1BQUs7NENBQXFCQyxjQUFjOzRDQUFDQyxRQUFRO3NEQUNyRCw0RUFBQ2pCLDhFQUFrQkE7Z0RBQUNZLFdBQVdYLDBGQUEwQkE7O2tFQUN2RCw4REFBQ1gsZ0VBQWFBO3dEQUFDc0IsV0FBVTs7Ozs7O29EQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBS2hELDhEQUFDYiw4RUFBa0JBO2tEQUNqQiw0RUFBQ0osaURBQUlBOzRDQUFDb0IsTUFBSzs0Q0FBc0JDLGNBQWM7NENBQUNDLFFBQVE7c0RBQ3RELDRFQUFDakIsOEVBQWtCQTtnREFBQ1ksV0FBV1gsMEZBQTBCQTs7a0VBQ3ZELDhEQUFDUixnR0FBWUE7d0RBQUNtQixXQUFVOzs7Ozs7b0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLL0MsOERBQUNiLDhFQUFrQkE7a0RBQ2pCLDRFQUFDSixpREFBSUE7NENBQUNvQixNQUFLOzRDQUFtQkMsY0FBYzs0Q0FBQ0MsUUFBUTtzREFDbkQsNEVBQUNqQiw4RUFBa0JBO2dEQUFDWSxXQUFXWCwwRkFBMEJBOztrRUFDdkQsOERBQUNQLGdHQUFPQTt3REFBQ2tCLFdBQVU7Ozs7OztvREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUsxQyw4REFBQ2IsOEVBQWtCQTtrREFDakIsNEVBQUNKLGlEQUFJQTs0Q0FBQ29CLE1BQUs7NENBQW1CQyxjQUFjOzRDQUFDQyxRQUFRO3NEQUNuRCw0RUFBQ2pCLDhFQUFrQkE7Z0RBQUNZLFdBQVdYLDBGQUEwQkE7O2tFQUN2RCw4REFBQ1QsNkRBQVVBO3dEQUFDb0IsV0FBVTs7Ozs7O29EQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSzdDLDhEQUFDYiw4RUFBa0JBO2tEQUNqQiw0RUFBQ21COzRDQUNDQyxTQUFTZDs0Q0FDVE8sV0FBV1gsMEZBQTBCQTs7OERBRXJDLDhEQUFDViwyREFBUUE7b0RBQUNxQixXQUFVOzs7Ozs7Z0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVqRCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQXlCVDs7Ozs7Ozs7Ozs7O0FBRzlDO0dBMUV3QkQ7O1FBQ1BOLHNEQUFTQTs7O0tBREZNIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEhQXFxEZXNrdG9wXFxQcm9qZWN0c1xcc3R1ZGVudC1yZXNvdXJjZS1jZW50cmVcXHNyY1xcYXBwXFxzdHVkZW50XFxsYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZEljb24sIEV4aXRJY29uLCBQZXJzb25JY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcclxuaW1wb3J0IHsgQm9va09wZW5JY29uLCBMaWJyYXJ5IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHtcclxuICBOYXZpZ2F0aW9uTWVudSxcclxuICBOYXZpZ2F0aW9uTWVudUxpc3QsXHJcbiAgTmF2aWdhdGlvbk1lbnVJdGVtLFxyXG4gIE5hdmlnYXRpb25NZW51TGluayxcclxufSBmcm9tICdAL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51JztcclxuaW1wb3J0IHsgbmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0dWRlbnRMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2dvdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSAnc2Vzc2lvbj07IE1heC1BZ2U9MDsgcGF0aD0vOyBzZWN1cmU7IHNhbWVTaXRlPXN0cmljdCc7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9nb3V0OicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cclxuICAgICAgey8qIEhlYWRlciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBib3JkZXItYlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXCI+U3R1ZGVudCBQYW5lbDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBOYXZpZ2F0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbk1lbnU+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUxpc3QgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3R1ZGVudC9kYXNoYm9hcmRcIiBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51TGluayBjbGFzc05hbWU9e25hdmlnYXRpb25NZW51VHJpZ2dlclN0eWxlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRJY29uIGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnQvZmF2b3VyaXRlc1wiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvb2tPcGVuSWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNSB3LTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEZhdm9yaXRlc1xyXG4gICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHVkZW50L2xpYnJhcnlcIiBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51TGluayBjbGFzc05hbWU9e25hdmlnYXRpb25NZW51VHJpZ2dlclN0eWxlKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaWJyYXJ5IGNsYXNzTmFtZT1cIm1yLTIgaC01IHctNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzb3VyY2VzXHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnQvcHJvZmlsZVwiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkljb24gY2xhc3NOYW1lPVwibXItMiBoLTUgdy01XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RXhpdEljb24gY2xhc3NOYW1lPVwibXItMiBoLTUgdy01XCIgLz5cclxuICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpc3Q+XHJcbiAgICAgICAgICA8L05hdmlnYXRpb25NZW51PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC02XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRhc2hib2FyZEljb24iLCJFeGl0SWNvbiIsIlBlcnNvbkljb24iLCJCb29rT3Blbkljb24iLCJMaWJyYXJ5IiwiTGluayIsInVzZVJvdXRlciIsIk5hdmlnYXRpb25NZW51IiwiTmF2aWdhdGlvbk1lbnVMaXN0IiwiTmF2aWdhdGlvbk1lbnVJdGVtIiwiTmF2aWdhdGlvbk1lbnVMaW5rIiwibmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUiLCJTdHVkZW50TGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJkb2N1bWVudCIsImNvb2tpZSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJwYXNzSHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/student/layout.tsx\n"));

/***/ })

});
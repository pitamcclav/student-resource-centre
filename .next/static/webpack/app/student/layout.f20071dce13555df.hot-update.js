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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StudentLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,Library!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/book-open.js\");\n/* harmony import */ var _barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BookOpenIcon,Library!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/library.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/navigation-menu */ \"(app-pages-browser)/./src/components/ui/navigation-menu.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction StudentLayout(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleLogout() {\n        try {\n            // Clear session cookies\n            document.cookie = \"session=; Max-Age=0; path=/; secure; sameSite=strict\";\n            // Redirect to login page\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Failed to logout:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-lg w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6 border-b\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold text-gray-800\",\n                            children: \"Student Panel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenu, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuList, {\n                                className: \"space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/dashboard\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.DashboardIcon, {\n                                                        className: \"mr-2 h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    \"Dashboard\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/courses\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                        className: \"mr-2 h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    \"Courses\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/library\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookOpenIcon_Library_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                        className: \"mr-2 h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    \"Resources\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/student/profile\",\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuLink, {\n                                                className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.PersonIcon, {\n                                                        className: \"mr-2 h-4 w-4\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    \"Profile\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.NavigationMenuItem, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLogout,\n                                            className: (0,_components_ui_navigation_menu__WEBPACK_IMPORTED_MODULE_3__.navigationMenuTriggerStyle)(),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.ExitIcon, {\n                                                    className: \"mr-2 h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, this),\n                                                \"Logout\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-screen bg-gray-100\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n                lineNumber: 88,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Projects\\\\student-resource-centre\\\\src\\\\app\\\\student\\\\layout.tsx\",\n        lineNumber: 38,\n        columnNumber: 12\n    }, this);\n}\n_s(StudentLayout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = StudentLayout;\nvar _c;\n$RefreshReg$(_c, \"StudentLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3R1ZGVudC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMkU7QUFDVDtBQUN0QztBQUNlO0FBVUQ7QUFDb0M7QUFJL0QsU0FBU1ksY0FBYyxLQUluQztRQUptQyxFQUNsQ0MsUUFBUSxFQUdULEdBSm1DOztJQUtsQyxNQUFNQyxTQUFTUiwwREFBU0E7SUFDeEIsZUFBZVM7UUFDWCxJQUFJO1lBQ0Esd0JBQXdCO1lBQ3hCQyxTQUFTQyxNQUFNLEdBQUc7WUFFbEIseUJBQXlCO1lBQ3pCSCxPQUFPSSxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJBO1FBQ3ZDO0lBQ0o7SUFDQSxxQkFBTyw4REFBQ0U7OzBCQUNKLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBR0QsV0FBVTtzQ0FBbUM7Ozs7Ozs7Ozs7O2tDQUVyRCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNoQiwwRUFBY0E7c0NBQ2YsNEVBQUNHLDhFQUFrQkE7Z0NBQUNhLFdBQVU7O2tEQUMxQiw4REFBQ2YsOEVBQWtCQTtrREFDbkIsNEVBQUNILGlEQUFJQTs0Q0FBQ29CLE1BQUs7NENBQXFCQyxjQUFjOzRDQUFDQyxRQUFRO3NEQUNuRCw0RUFBQ2xCLDhFQUFrQkE7Z0RBQUNjLFdBQVdaLDBGQUEwQkE7O2tFQUN6RCw4REFBQ1gsZ0VBQWFBO3dEQUFDdUIsV0FBVTs7Ozs7O29EQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSzlDLDhEQUFDZiw4RUFBa0JBO2tEQUNuQiw0RUFBQ0gsaURBQUlBOzRDQUFDb0IsTUFBSzs0Q0FBbUJDLGNBQWM7NENBQUNDLFFBQVE7c0RBQ2pELDRFQUFDbEIsOEVBQWtCQTtnREFBQ2MsV0FBV1osMEZBQTBCQTs7a0VBQ3pELDhEQUFDUixnR0FBWUE7d0RBQUNvQixXQUFVOzs7Ozs7b0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLN0MsOERBQUNmLDhFQUFrQkE7a0RBQ25CLDRFQUFDSCxpREFBSUE7NENBQUNvQixNQUFLOzRDQUFtQkMsY0FBYzs0Q0FBQ0MsUUFBUTtzREFDakQsNEVBQUNsQiw4RUFBa0JBO2dEQUFDYyxXQUFXWiwwRkFBMEJBOztrRUFDekQsOERBQUNQLGdHQUFPQTt3REFBQ21CLFdBQVU7Ozs7OztvREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUt4Qyw4REFBQ2YsOEVBQWtCQTtrREFDbkIsNEVBQUNILGlEQUFJQTs0Q0FBQ29CLE1BQUs7NENBQW1CQyxjQUFjOzRDQUFDQyxRQUFRO3NEQUNqRCw0RUFBQ2xCLDhFQUFrQkE7Z0RBQUNjLFdBQVdaLDBGQUEwQkE7O2tFQUN6RCw4REFBQ1QsNkRBQVVBO3dEQUFDcUIsV0FBVTs7Ozs7O29EQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSzNDLDhEQUFDZiw4RUFBa0JBO2tEQUNuQiw0RUFBQ29COzRDQUFPQyxTQUFTZDs0Q0FBY1EsV0FBV1osMEZBQTBCQTs7OERBQ2hFLDhEQUFDViwyREFBUUE7b0RBQUNzQixXQUFVOzs7Ozs7Z0RBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRVhWOzs7Ozs7Ozs7Ozs7QUFRWDtHQTdFc0JEOztRQUtMTixzREFBU0E7OztLQUxKTSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUFxcRGVza3RvcFxcUHJvamVjdHNcXHN0dWRlbnQtcmVzb3VyY2UtY2VudHJlXFxzcmNcXGFwcFxcc3R1ZGVudFxcbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgU2Nyb2xsQXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2Nyb2xsLWFyZWFcIlxyXG5pbXBvcnQgeyBEYXNoYm9hcmRJY29uLCBFeGl0SWNvbiwgUGVyc29uSWNvbiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaWNvbnNcIlxyXG5pbXBvcnQgeyBCb29rT3Blbkljb24sIExpYnJhcnksIFNldHRpbmdzSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXHJcbmltcG9ydCB7XHJcbiAgICBOYXZpZ2F0aW9uTWVudSxcclxuICAgIE5hdmlnYXRpb25NZW51Q29udGVudCxcclxuICAgIE5hdmlnYXRpb25NZW51SW5kaWNhdG9yLFxyXG4gICAgTmF2aWdhdGlvbk1lbnVJdGVtLFxyXG4gICAgTmF2aWdhdGlvbk1lbnVMaW5rLFxyXG4gICAgTmF2aWdhdGlvbk1lbnVMaXN0LFxyXG4gICAgTmF2aWdhdGlvbk1lbnVUcmlnZ2VyLFxyXG4gICAgTmF2aWdhdGlvbk1lbnVWaWV3cG9ydCxcclxuICB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51XCJcclxuICBpbXBvcnQgeyBuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbmF2aWdhdGlvbi1tZW51XCJcclxuXHJcbiAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50TGF5b3V0KHtcclxuICAgIGNoaWxkcmVuLFxyXG4gIH06IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuICB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHNlc3Npb24gY29va2llc1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInNlc3Npb249OyBNYXgtQWdlPTA7IHBhdGg9Lzsgc2VjdXJlOyBzYW1lU2l0ZT1zdHJpY3RcIlxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2VcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2dvdXQ6XCIsIGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMFwiPlN0dWRlbnQgUGFuZWw8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnU+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaXN0IGNsYXNzTmFtZT1cInNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zdHVkZW50L2Rhc2hib2FyZFwiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRJY29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnQvY291cnNlc1wiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb29rT3Blbkljb24gY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnQvbGlicmFyeVwiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWJyYXJ5IGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc291cmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnQvcHJvZmlsZVwiIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbk1lbnVMaW5rIGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25JY29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT17bmF2aWdhdGlvbk1lbnVUcmlnZ2VyU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFeGl0SWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmlnYXRpb25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbk1lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uTWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICB7LyogTWFpbiBDb250ZW50ICovfVxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gIH0iXSwibmFtZXMiOlsiRGFzaGJvYXJkSWNvbiIsIkV4aXRJY29uIiwiUGVyc29uSWNvbiIsIkJvb2tPcGVuSWNvbiIsIkxpYnJhcnkiLCJMaW5rIiwidXNlUm91dGVyIiwiTmF2aWdhdGlvbk1lbnUiLCJOYXZpZ2F0aW9uTWVudUl0ZW0iLCJOYXZpZ2F0aW9uTWVudUxpbmsiLCJOYXZpZ2F0aW9uTWVudUxpc3QiLCJuYXZpZ2F0aW9uTWVudVRyaWdnZXJTdHlsZSIsIlN0dWRlbnRMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsImRvY3VtZW50IiwiY29va2llIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsInNlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsInBhc3NIcmVmIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/student/layout.tsx\n"));

/***/ })

});
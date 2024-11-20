"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/cli-highlight";
exports.ids = ["vendor-chunks/cli-highlight"];
exports.modules = {

/***/ "(action-browser)/./node_modules/cli-highlight/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/cli-highlight/dist/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.supportsLanguage = exports.listLanguages = exports.highlight = void 0;\nvar hljs = __importStar(__webpack_require__(/*! highlight.js */ \"(action-browser)/./node_modules/highlight.js/lib/index.js\"));\nvar parse5 = __importStar(__webpack_require__(/*! parse5 */ \"(action-browser)/./node_modules/parse5/lib/index.js\"));\nvar parse5_htmlparser2_tree_adapter_1 = __importDefault(__webpack_require__(/*! parse5-htmlparser2-tree-adapter */ \"(action-browser)/./node_modules/parse5-htmlparser2-tree-adapter/lib/index.js\"));\nvar theme_1 = __webpack_require__(/*! ./theme */ \"(action-browser)/./node_modules/cli-highlight/dist/theme.js\");\nfunction colorizeNode(node, theme, context) {\n    if (theme === void 0) { theme = {}; }\n    switch (node.type) {\n        case 'text': {\n            var text = node.data;\n            if (context === undefined) {\n                return (theme.default || theme_1.DEFAULT_THEME.default || theme_1.plain)(text);\n            }\n            return text;\n        }\n        case 'tag': {\n            var hljsClass = /hljs-(\\w+)/.exec(node.attribs.class);\n            if (hljsClass) {\n                var token_1 = hljsClass[1];\n                var nodeData = node.childNodes\n                    .map(function (node) { return colorizeNode(node, theme, token_1); })\n                    .join('');\n                return (theme[token_1] || theme_1.DEFAULT_THEME[token_1] || theme_1.plain)(nodeData);\n            }\n            // Return the data itself when the class name isn't prefixed with a highlight.js token prefix.\n            // This is common in instances of sublanguages (JSX, Markdown Code Blocks, etc.)\n            return node.childNodes.map(function (node) { return colorizeNode(node, theme); }).join('');\n        }\n    }\n    throw new Error('Invalid node type ' + node.type);\n}\nfunction colorize(code, theme) {\n    if (theme === void 0) { theme = {}; }\n    var fragment = parse5.parseFragment(code, {\n        treeAdapter: parse5_htmlparser2_tree_adapter_1.default,\n    });\n    return fragment.childNodes.map(function (node) { return colorizeNode(node, theme); }).join('');\n}\n/**\n * Apply syntax highlighting to `code` with ASCII color codes. The language is automatically\n * detected if not set.\n *\n * ```ts\n * import {highlight} from 'cli-highlight';\n * import * as fs from 'fs';\n *\n * fs.readFile('package.json', 'utf8', (err: any, json: string) => {\n *     console.log('package.json:');\n *     console.log(highlight(json));\n * });\n * ```\n *\n * @param code The code to highlight\n * @param options Optional options\n */\nfunction highlight(code, options) {\n    if (options === void 0) { options = {}; }\n    var html;\n    if (options.language) {\n        html = hljs.highlight(code, { language: options.language, ignoreIllegals: options.ignoreIllegals }).value;\n    }\n    else {\n        html = hljs.highlightAuto(code, options.languageSubset).value;\n    }\n    return colorize(html, options.theme);\n}\nexports.highlight = highlight;\n/**\n * Returns all supported languages\n */\nfunction listLanguages() {\n    return hljs.listLanguages();\n}\nexports.listLanguages = listLanguages;\n/**\n * Returns true if the language is supported\n * @param name A language name, alias or file extension\n */\nfunction supportsLanguage(name) {\n    return !!hljs.getLanguage(name);\n}\nexports.supportsLanguage = supportsLanguage;\nexports[\"default\"] = highlight;\n__exportStar(__webpack_require__(/*! ./theme */ \"(action-browser)/./node_modules/cli-highlight/dist/theme.js\"), exports);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9jbGktaGlnaGxpZ2h0L2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLG9DQUFvQyxnQkFBZ0I7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QixHQUFHLHFCQUFxQixHQUFHLGlCQUFpQjtBQUNwRSx3QkFBd0IsbUJBQU8sQ0FBQywrRUFBYztBQUM5QywwQkFBMEIsbUJBQU8sQ0FBQyxtRUFBUTtBQUMxQyx3REFBd0QsbUJBQU8sQ0FBQyxxSEFBaUM7QUFDakcsY0FBYyxtQkFBTyxDQUFDLDRFQUFTO0FBQy9CO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUE0QztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELG1DQUFtQztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscURBQXFELG1DQUFtQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLHNDQUFzQyxvRUFBb0U7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixrQkFBZTtBQUNmLGFBQWEsbUJBQU8sQ0FBQyw0RUFBUztBQUM5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIUFxcRGVza3RvcFxcUHJvamVjdHNcXHN0dWRlbnQtcmVzb3VyY2UtY2VudHJlXFxub2RlX21vZHVsZXNcXGNsaS1oaWdobGlnaHRcXGRpc3RcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdXBwb3J0c0xhbmd1YWdlID0gZXhwb3J0cy5saXN0TGFuZ3VhZ2VzID0gZXhwb3J0cy5oaWdobGlnaHQgPSB2b2lkIDA7XG52YXIgaGxqcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpKTtcbnZhciBwYXJzZTUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInBhcnNlNVwiKSk7XG52YXIgcGFyc2U1X2h0bWxwYXJzZXIyX3RyZWVfYWRhcHRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXJzZTUtaHRtbHBhcnNlcjItdHJlZS1hZGFwdGVyXCIpKTtcbnZhciB0aGVtZV8xID0gcmVxdWlyZShcIi4vdGhlbWVcIik7XG5mdW5jdGlvbiBjb2xvcml6ZU5vZGUobm9kZSwgdGhlbWUsIGNvbnRleHQpIHtcbiAgICBpZiAodGhlbWUgPT09IHZvaWQgMCkgeyB0aGVtZSA9IHt9OyB9XG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6IHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUuZGVmYXVsdCB8fCB0aGVtZV8xLkRFRkFVTFRfVEhFTUUuZGVmYXVsdCB8fCB0aGVtZV8xLnBsYWluKSh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3RhZyc6IHtcbiAgICAgICAgICAgIHZhciBobGpzQ2xhc3MgPSAvaGxqcy0oXFx3KykvLmV4ZWMobm9kZS5hdHRyaWJzLmNsYXNzKTtcbiAgICAgICAgICAgIGlmIChobGpzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5fMSA9IGhsanNDbGFzc1sxXTtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZURhdGEgPSBub2RlLmNoaWxkTm9kZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gY29sb3JpemVOb2RlKG5vZGUsIHRoZW1lLCB0b2tlbl8xKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWVbdG9rZW5fMV0gfHwgdGhlbWVfMS5ERUZBVUxUX1RIRU1FW3Rva2VuXzFdIHx8IHRoZW1lXzEucGxhaW4pKG5vZGVEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgZGF0YSBpdHNlbGYgd2hlbiB0aGUgY2xhc3MgbmFtZSBpc24ndCBwcmVmaXhlZCB3aXRoIGEgaGlnaGxpZ2h0LmpzIHRva2VuIHByZWZpeC5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgY29tbW9uIGluIGluc3RhbmNlcyBvZiBzdWJsYW5ndWFnZXMgKEpTWCwgTWFya2Rvd24gQ29kZSBCbG9ja3MsIGV0Yy4pXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gY29sb3JpemVOb2RlKG5vZGUsIHRoZW1lKTsgfSkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG5vZGUgdHlwZSAnICsgbm9kZS50eXBlKTtcbn1cbmZ1bmN0aW9uIGNvbG9yaXplKGNvZGUsIHRoZW1lKSB7XG4gICAgaWYgKHRoZW1lID09PSB2b2lkIDApIHsgdGhlbWUgPSB7fTsgfVxuICAgIHZhciBmcmFnbWVudCA9IHBhcnNlNS5wYXJzZUZyYWdtZW50KGNvZGUsIHtcbiAgICAgICAgdHJlZUFkYXB0ZXI6IHBhcnNlNV9odG1scGFyc2VyMl90cmVlX2FkYXB0ZXJfMS5kZWZhdWx0LFxuICAgIH0pO1xuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gY29sb3JpemVOb2RlKG5vZGUsIHRoZW1lKTsgfSkuam9pbignJyk7XG59XG4vKipcbiAqIEFwcGx5IHN5bnRheCBoaWdobGlnaHRpbmcgdG8gYGNvZGVgIHdpdGggQVNDSUkgY29sb3IgY29kZXMuIFRoZSBsYW5ndWFnZSBpcyBhdXRvbWF0aWNhbGx5XG4gKiBkZXRlY3RlZCBpZiBub3Qgc2V0LlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQge2hpZ2hsaWdodH0gZnJvbSAnY2xpLWhpZ2hsaWdodCc7XG4gKiBpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG4gKlxuICogZnMucmVhZEZpbGUoJ3BhY2thZ2UuanNvbicsICd1dGY4JywgKGVycjogYW55LCBqc29uOiBzdHJpbmcpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygncGFja2FnZS5qc29uOicpO1xuICogICAgIGNvbnNvbGUubG9nKGhpZ2hsaWdodChqc29uKSk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb2RlIFRoZSBjb2RlIHRvIGhpZ2hsaWdodFxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBoaWdobGlnaHQoY29kZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGh0bWw7XG4gICAgaWYgKG9wdGlvbnMubGFuZ3VhZ2UpIHtcbiAgICAgICAgaHRtbCA9IGhsanMuaGlnaGxpZ2h0KGNvZGUsIHsgbGFuZ3VhZ2U6IG9wdGlvbnMubGFuZ3VhZ2UsIGlnbm9yZUlsbGVnYWxzOiBvcHRpb25zLmlnbm9yZUlsbGVnYWxzIH0pLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaHRtbCA9IGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlLCBvcHRpb25zLmxhbmd1YWdlU3Vic2V0KS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yaXplKGh0bWwsIG9wdGlvbnMudGhlbWUpO1xufVxuZXhwb3J0cy5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG4vKipcbiAqIFJldHVybnMgYWxsIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAqL1xuZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gaGxqcy5saXN0TGFuZ3VhZ2VzKCk7XG59XG5leHBvcnRzLmxpc3RMYW5ndWFnZXMgPSBsaXN0TGFuZ3VhZ2VzO1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGxhbmd1YWdlIGlzIHN1cHBvcnRlZFxuICogQHBhcmFtIG5hbWUgQSBsYW5ndWFnZSBuYW1lLCBhbGlhcyBvciBmaWxlIGV4dGVuc2lvblxuICovXG5mdW5jdGlvbiBzdXBwb3J0c0xhbmd1YWdlKG5hbWUpIHtcbiAgICByZXR1cm4gISFobGpzLmdldExhbmd1YWdlKG5hbWUpO1xufVxuZXhwb3J0cy5zdXBwb3J0c0xhbmd1YWdlID0gc3VwcG9ydHNMYW5ndWFnZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhpZ2hsaWdodDtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90aGVtZVwiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/cli-highlight/dist/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/cli-highlight/dist/theme.js":
/*!**************************************************!*\
  !*** ./node_modules/cli-highlight/dist/theme.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.parse = exports.stringify = exports.toJson = exports.fromJson = exports.DEFAULT_THEME = exports.plain = void 0;\nvar chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"(action-browser)/./node_modules/chalk/source/index.js\"));\n/**\n * Identity function for tokens that should not be styled (returns the input string as-is).\n * See [[Theme]] for an example.\n */\nvar plain = function (codePart) { return codePart; };\nexports.plain = plain;\n/**\n * The default theme. It is possible to override just individual keys.\n */\nexports.DEFAULT_THEME = {\n    /**\n     * keyword in a regular Algol-style language\n     */\n    keyword: chalk_1.default.blue,\n    /**\n     * built-in or library object (constant, class, function)\n     */\n    built_in: chalk_1.default.cyan,\n    /**\n     * user-defined type in a language with first-class syntactically significant types, like\n     * Haskell\n     */\n    type: chalk_1.default.cyan.dim,\n    /**\n     * special identifier for a built-in value (\"true\", \"false\", \"null\")\n     */\n    literal: chalk_1.default.blue,\n    /**\n     * number, including units and modifiers, if any.\n     */\n    number: chalk_1.default.green,\n    /**\n     * literal regular expression\n     */\n    regexp: chalk_1.default.red,\n    /**\n     * literal string, character\n     */\n    string: chalk_1.default.red,\n    /**\n     * parsed section inside a literal string\n     */\n    subst: exports.plain,\n    /**\n     * symbolic constant, interned string, goto label\n     */\n    symbol: exports.plain,\n    /**\n     * class or class-level declaration (interfaces, traits, modules, etc)\n     */\n    class: chalk_1.default.blue,\n    /**\n     * function or method declaration\n     */\n    function: chalk_1.default.yellow,\n    /**\n     * name of a class or a function at the place of declaration\n     */\n    title: exports.plain,\n    /**\n     * block of function arguments (parameters) at the place of declaration\n     */\n    params: exports.plain,\n    /**\n     * comment\n     */\n    comment: chalk_1.default.green,\n    /**\n     * documentation markup within comments\n     */\n    doctag: chalk_1.default.green,\n    /**\n     * flags, modifiers, annotations, processing instructions, preprocessor directive, etc\n     */\n    meta: chalk_1.default.grey,\n    /**\n     * keyword or built-in within meta construct\n     */\n    'meta-keyword': exports.plain,\n    /**\n     * string within meta construct\n     */\n    'meta-string': exports.plain,\n    /**\n     * heading of a section in a config file, heading in text markup\n     */\n    section: exports.plain,\n    /**\n     * XML/HTML tag\n     */\n    tag: chalk_1.default.grey,\n    /**\n     * name of an XML tag, the first word in an s-expression\n     */\n    name: chalk_1.default.blue,\n    /**\n     * s-expression name from the language standard library\n     */\n    'builtin-name': exports.plain,\n    /**\n     * name of an attribute with no language defined semantics (keys in JSON, setting names in\n     * .ini), also sub-attribute within another highlighted object, like XML tag\n     */\n    attr: chalk_1.default.cyan,\n    /**\n     * name of an attribute followed by a structured value part, like CSS properties\n     */\n    attribute: exports.plain,\n    /**\n     * variable in a config or a template file, environment var expansion in a script\n     */\n    variable: exports.plain,\n    /**\n     * list item bullet in text markup\n     */\n    bullet: exports.plain,\n    /**\n     * code block in text markup\n     */\n    code: exports.plain,\n    /**\n     * emphasis in text markup\n     */\n    emphasis: chalk_1.default.italic,\n    /**\n     * strong emphasis in text markup\n     */\n    strong: chalk_1.default.bold,\n    /**\n     * mathematical formula in text markup\n     */\n    formula: exports.plain,\n    /**\n     * hyperlink in text markup\n     */\n    link: chalk_1.default.underline,\n    /**\n     * quotation in text markup\n     */\n    quote: exports.plain,\n    /**\n     * tag selector in CSS\n     */\n    'selector-tag': exports.plain,\n    /**\n     * #id selector in CSS\n     */\n    'selector-id': exports.plain,\n    /**\n     * .class selector in CSS\n     */\n    'selector-class': exports.plain,\n    /**\n     * [attr] selector in CSS\n     */\n    'selector-attr': exports.plain,\n    /**\n     * :pseudo selector in CSS\n     */\n    'selector-pseudo': exports.plain,\n    /**\n     * tag of a template language\n     */\n    'template-tag': exports.plain,\n    /**\n     * variable in a template language\n     */\n    'template-variable': exports.plain,\n    /**\n     * added or changed line in a diff\n     */\n    addition: chalk_1.default.green,\n    /**\n     * deleted line in a diff\n     */\n    deletion: chalk_1.default.red,\n    /**\n     * things not matched by any token\n     */\n    default: exports.plain,\n};\n/**\n * Converts a [[JsonTheme]] with string values to a [[Theme]] with formatter functions. Used by [[parse]].\n */\nfunction fromJson(json) {\n    var theme = {};\n    for (var _i = 0, _a = Object.keys(json); _i < _a.length; _i++) {\n        var key = _a[_i];\n        var style = json[key];\n        if (Array.isArray(style)) {\n            ;\n            theme[key] = style.reduce(function (previous, current) { return (current === 'plain' ? exports.plain : previous[current]); }, chalk_1.default);\n        }\n        else {\n            ;\n            theme[key] = chalk_1.default[style];\n        }\n    }\n    return theme;\n}\nexports.fromJson = fromJson;\n/**\n * Converts a [[Theme]] with formatter functions to a [[JsonTheme]] with string values. Used by [[stringify]].\n */\nfunction toJson(theme) {\n    var jsonTheme = {};\n    for (var _i = 0, _a = Object.keys(jsonTheme); _i < _a.length; _i++) {\n        var key = _a[_i];\n        var style = jsonTheme[key];\n        jsonTheme[key] = style._styles;\n    }\n    return jsonTheme;\n}\nexports.toJson = toJson;\n/**\n * Stringifies a [[Theme]] with formatter functions to a JSON string.\n *\n * ```ts\n * import chalk = require('chalk');\n * import {stringify} from 'cli-highlight';\n * import * as fs from 'fs';\n *\n * const myTheme: Theme = {\n *     keyword: chalk.red.bold,\n *     addition: chalk.green,\n *     deletion: chalk.red.strikethrough,\n *     number: plain\n * }\n * const json = stringify(myTheme);\n * fs.writeFile('mytheme.json', json, (err: any) => {\n *     if (err) throw err;\n *     console.log('Theme saved');\n * });\n * ```\n */\nfunction stringify(theme) {\n    return JSON.stringify(toJson(theme));\n}\nexports.stringify = stringify;\n/**\n * Parses a JSON string into a [[Theme]] with formatter functions.\n *\n * ```ts\n * import * as fs from 'fs';\n * import {parse, highlight} from 'cli-highlight';\n *\n * fs.readFile('mytheme.json', 'utf8', (err: any, json: string)  => {\n *     if (err) throw err;\n *     const code = highlight('SELECT * FROM table', {theme: parse(json)});\n *     console.log(code);\n * });\n * ```\n */\nfunction parse(json) {\n    return fromJson(JSON.parse(json));\n}\nexports.parse = parse;\n//# sourceMappingURL=theme.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9jbGktaGlnaGxpZ2h0L2Rpc3QvdGhlbWUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLEdBQUcsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLGdCQUFnQixHQUFHLHFCQUFxQixHQUFHLGFBQWE7QUFDN0csOEJBQThCLG1CQUFPLENBQUMsb0VBQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxtRUFBbUU7QUFDeEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdCQUFnQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1CQUFtQjtBQUN6RTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEhQXFxEZXNrdG9wXFxQcm9qZWN0c1xcc3R1ZGVudC1yZXNvdXJjZS1jZW50cmVcXG5vZGVfbW9kdWxlc1xcY2xpLWhpZ2hsaWdodFxcZGlzdFxcdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSBleHBvcnRzLnRvSnNvbiA9IGV4cG9ydHMuZnJvbUpzb24gPSBleHBvcnRzLkRFRkFVTFRfVEhFTUUgPSBleHBvcnRzLnBsYWluID0gdm9pZCAwO1xudmFyIGNoYWxrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNoYWxrXCIpKTtcbi8qKlxuICogSWRlbnRpdHkgZnVuY3Rpb24gZm9yIHRva2VucyB0aGF0IHNob3VsZCBub3QgYmUgc3R5bGVkIChyZXR1cm5zIHRoZSBpbnB1dCBzdHJpbmcgYXMtaXMpLlxuICogU2VlIFtbVGhlbWVdXSBmb3IgYW4gZXhhbXBsZS5cbiAqL1xudmFyIHBsYWluID0gZnVuY3Rpb24gKGNvZGVQYXJ0KSB7IHJldHVybiBjb2RlUGFydDsgfTtcbmV4cG9ydHMucGxhaW4gPSBwbGFpbjtcbi8qKlxuICogVGhlIGRlZmF1bHQgdGhlbWUuIEl0IGlzIHBvc3NpYmxlIHRvIG92ZXJyaWRlIGp1c3QgaW5kaXZpZHVhbCBrZXlzLlxuICovXG5leHBvcnRzLkRFRkFVTFRfVEhFTUUgPSB7XG4gICAgLyoqXG4gICAgICoga2V5d29yZCBpbiBhIHJlZ3VsYXIgQWxnb2wtc3R5bGUgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICBrZXl3b3JkOiBjaGFsa18xLmRlZmF1bHQuYmx1ZSxcbiAgICAvKipcbiAgICAgKiBidWlsdC1pbiBvciBsaWJyYXJ5IG9iamVjdCAoY29uc3RhbnQsIGNsYXNzLCBmdW5jdGlvbilcbiAgICAgKi9cbiAgICBidWlsdF9pbjogY2hhbGtfMS5kZWZhdWx0LmN5YW4sXG4gICAgLyoqXG4gICAgICogdXNlci1kZWZpbmVkIHR5cGUgaW4gYSBsYW5ndWFnZSB3aXRoIGZpcnN0LWNsYXNzIHN5bnRhY3RpY2FsbHkgc2lnbmlmaWNhbnQgdHlwZXMsIGxpa2VcbiAgICAgKiBIYXNrZWxsXG4gICAgICovXG4gICAgdHlwZTogY2hhbGtfMS5kZWZhdWx0LmN5YW4uZGltLFxuICAgIC8qKlxuICAgICAqIHNwZWNpYWwgaWRlbnRpZmllciBmb3IgYSBidWlsdC1pbiB2YWx1ZSAoXCJ0cnVlXCIsIFwiZmFsc2VcIiwgXCJudWxsXCIpXG4gICAgICovXG4gICAgbGl0ZXJhbDogY2hhbGtfMS5kZWZhdWx0LmJsdWUsXG4gICAgLyoqXG4gICAgICogbnVtYmVyLCBpbmNsdWRpbmcgdW5pdHMgYW5kIG1vZGlmaWVycywgaWYgYW55LlxuICAgICAqL1xuICAgIG51bWJlcjogY2hhbGtfMS5kZWZhdWx0LmdyZWVuLFxuICAgIC8qKlxuICAgICAqIGxpdGVyYWwgcmVndWxhciBleHByZXNzaW9uXG4gICAgICovXG4gICAgcmVnZXhwOiBjaGFsa18xLmRlZmF1bHQucmVkLFxuICAgIC8qKlxuICAgICAqIGxpdGVyYWwgc3RyaW5nLCBjaGFyYWN0ZXJcbiAgICAgKi9cbiAgICBzdHJpbmc6IGNoYWxrXzEuZGVmYXVsdC5yZWQsXG4gICAgLyoqXG4gICAgICogcGFyc2VkIHNlY3Rpb24gaW5zaWRlIGEgbGl0ZXJhbCBzdHJpbmdcbiAgICAgKi9cbiAgICBzdWJzdDogZXhwb3J0cy5wbGFpbixcbiAgICAvKipcbiAgICAgKiBzeW1ib2xpYyBjb25zdGFudCwgaW50ZXJuZWQgc3RyaW5nLCBnb3RvIGxhYmVsXG4gICAgICovXG4gICAgc3ltYm9sOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqIGNsYXNzIG9yIGNsYXNzLWxldmVsIGRlY2xhcmF0aW9uIChpbnRlcmZhY2VzLCB0cmFpdHMsIG1vZHVsZXMsIGV0YylcbiAgICAgKi9cbiAgICBjbGFzczogY2hhbGtfMS5kZWZhdWx0LmJsdWUsXG4gICAgLyoqXG4gICAgICogZnVuY3Rpb24gb3IgbWV0aG9kIGRlY2xhcmF0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb246IGNoYWxrXzEuZGVmYXVsdC55ZWxsb3csXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhIGNsYXNzIG9yIGEgZnVuY3Rpb24gYXQgdGhlIHBsYWNlIG9mIGRlY2xhcmF0aW9uXG4gICAgICovXG4gICAgdGl0bGU6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogYmxvY2sgb2YgZnVuY3Rpb24gYXJndW1lbnRzIChwYXJhbWV0ZXJzKSBhdCB0aGUgcGxhY2Ugb2YgZGVjbGFyYXRpb25cbiAgICAgKi9cbiAgICBwYXJhbXM6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogY29tbWVudFxuICAgICAqL1xuICAgIGNvbW1lbnQ6IGNoYWxrXzEuZGVmYXVsdC5ncmVlbixcbiAgICAvKipcbiAgICAgKiBkb2N1bWVudGF0aW9uIG1hcmt1cCB3aXRoaW4gY29tbWVudHNcbiAgICAgKi9cbiAgICBkb2N0YWc6IGNoYWxrXzEuZGVmYXVsdC5ncmVlbixcbiAgICAvKipcbiAgICAgKiBmbGFncywgbW9kaWZpZXJzLCBhbm5vdGF0aW9ucywgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbnMsIHByZXByb2Nlc3NvciBkaXJlY3RpdmUsIGV0Y1xuICAgICAqL1xuICAgIG1ldGE6IGNoYWxrXzEuZGVmYXVsdC5ncmV5LFxuICAgIC8qKlxuICAgICAqIGtleXdvcmQgb3IgYnVpbHQtaW4gd2l0aGluIG1ldGEgY29uc3RydWN0XG4gICAgICovXG4gICAgJ21ldGEta2V5d29yZCc6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogc3RyaW5nIHdpdGhpbiBtZXRhIGNvbnN0cnVjdFxuICAgICAqL1xuICAgICdtZXRhLXN0cmluZyc6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogaGVhZGluZyBvZiBhIHNlY3Rpb24gaW4gYSBjb25maWcgZmlsZSwgaGVhZGluZyBpbiB0ZXh0IG1hcmt1cFxuICAgICAqL1xuICAgIHNlY3Rpb246IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogWE1ML0hUTUwgdGFnXG4gICAgICovXG4gICAgdGFnOiBjaGFsa18xLmRlZmF1bHQuZ3JleSxcbiAgICAvKipcbiAgICAgKiBuYW1lIG9mIGFuIFhNTCB0YWcsIHRoZSBmaXJzdCB3b3JkIGluIGFuIHMtZXhwcmVzc2lvblxuICAgICAqL1xuICAgIG5hbWU6IGNoYWxrXzEuZGVmYXVsdC5ibHVlLFxuICAgIC8qKlxuICAgICAqIHMtZXhwcmVzc2lvbiBuYW1lIGZyb20gdGhlIGxhbmd1YWdlIHN0YW5kYXJkIGxpYnJhcnlcbiAgICAgKi9cbiAgICAnYnVpbHRpbi1uYW1lJzogZXhwb3J0cy5wbGFpbixcbiAgICAvKipcbiAgICAgKiBuYW1lIG9mIGFuIGF0dHJpYnV0ZSB3aXRoIG5vIGxhbmd1YWdlIGRlZmluZWQgc2VtYW50aWNzIChrZXlzIGluIEpTT04sIHNldHRpbmcgbmFtZXMgaW5cbiAgICAgKiAuaW5pKSwgYWxzbyBzdWItYXR0cmlidXRlIHdpdGhpbiBhbm90aGVyIGhpZ2hsaWdodGVkIG9iamVjdCwgbGlrZSBYTUwgdGFnXG4gICAgICovXG4gICAgYXR0cjogY2hhbGtfMS5kZWZhdWx0LmN5YW4sXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBhdHRyaWJ1dGUgZm9sbG93ZWQgYnkgYSBzdHJ1Y3R1cmVkIHZhbHVlIHBhcnQsIGxpa2UgQ1NTIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGU6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogdmFyaWFibGUgaW4gYSBjb25maWcgb3IgYSB0ZW1wbGF0ZSBmaWxlLCBlbnZpcm9ubWVudCB2YXIgZXhwYW5zaW9uIGluIGEgc2NyaXB0XG4gICAgICovXG4gICAgdmFyaWFibGU6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogbGlzdCBpdGVtIGJ1bGxldCBpbiB0ZXh0IG1hcmt1cFxuICAgICAqL1xuICAgIGJ1bGxldDogZXhwb3J0cy5wbGFpbixcbiAgICAvKipcbiAgICAgKiBjb2RlIGJsb2NrIGluIHRleHQgbWFya3VwXG4gICAgICovXG4gICAgY29kZTogZXhwb3J0cy5wbGFpbixcbiAgICAvKipcbiAgICAgKiBlbXBoYXNpcyBpbiB0ZXh0IG1hcmt1cFxuICAgICAqL1xuICAgIGVtcGhhc2lzOiBjaGFsa18xLmRlZmF1bHQuaXRhbGljLFxuICAgIC8qKlxuICAgICAqIHN0cm9uZyBlbXBoYXNpcyBpbiB0ZXh0IG1hcmt1cFxuICAgICAqL1xuICAgIHN0cm9uZzogY2hhbGtfMS5kZWZhdWx0LmJvbGQsXG4gICAgLyoqXG4gICAgICogbWF0aGVtYXRpY2FsIGZvcm11bGEgaW4gdGV4dCBtYXJrdXBcbiAgICAgKi9cbiAgICBmb3JtdWxhOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqIGh5cGVybGluayBpbiB0ZXh0IG1hcmt1cFxuICAgICAqL1xuICAgIGxpbms6IGNoYWxrXzEuZGVmYXVsdC51bmRlcmxpbmUsXG4gICAgLyoqXG4gICAgICogcXVvdGF0aW9uIGluIHRleHQgbWFya3VwXG4gICAgICovXG4gICAgcXVvdGU6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogdGFnIHNlbGVjdG9yIGluIENTU1xuICAgICAqL1xuICAgICdzZWxlY3Rvci10YWcnOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqICNpZCBzZWxlY3RvciBpbiBDU1NcbiAgICAgKi9cbiAgICAnc2VsZWN0b3ItaWQnOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqIC5jbGFzcyBzZWxlY3RvciBpbiBDU1NcbiAgICAgKi9cbiAgICAnc2VsZWN0b3ItY2xhc3MnOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqIFthdHRyXSBzZWxlY3RvciBpbiBDU1NcbiAgICAgKi9cbiAgICAnc2VsZWN0b3ItYXR0cic6IGV4cG9ydHMucGxhaW4sXG4gICAgLyoqXG4gICAgICogOnBzZXVkbyBzZWxlY3RvciBpbiBDU1NcbiAgICAgKi9cbiAgICAnc2VsZWN0b3ItcHNldWRvJzogZXhwb3J0cy5wbGFpbixcbiAgICAvKipcbiAgICAgKiB0YWcgb2YgYSB0ZW1wbGF0ZSBsYW5ndWFnZVxuICAgICAqL1xuICAgICd0ZW1wbGF0ZS10YWcnOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIGluIGEgdGVtcGxhdGUgbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICAndGVtcGxhdGUtdmFyaWFibGUnOiBleHBvcnRzLnBsYWluLFxuICAgIC8qKlxuICAgICAqIGFkZGVkIG9yIGNoYW5nZWQgbGluZSBpbiBhIGRpZmZcbiAgICAgKi9cbiAgICBhZGRpdGlvbjogY2hhbGtfMS5kZWZhdWx0LmdyZWVuLFxuICAgIC8qKlxuICAgICAqIGRlbGV0ZWQgbGluZSBpbiBhIGRpZmZcbiAgICAgKi9cbiAgICBkZWxldGlvbjogY2hhbGtfMS5kZWZhdWx0LnJlZCxcbiAgICAvKipcbiAgICAgKiB0aGluZ3Mgbm90IG1hdGNoZWQgYnkgYW55IHRva2VuXG4gICAgICovXG4gICAgZGVmYXVsdDogZXhwb3J0cy5wbGFpbixcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgW1tKc29uVGhlbWVdXSB3aXRoIHN0cmluZyB2YWx1ZXMgdG8gYSBbW1RoZW1lXV0gd2l0aCBmb3JtYXR0ZXIgZnVuY3Rpb25zLiBVc2VkIGJ5IFtbcGFyc2VdXS5cbiAqL1xuZnVuY3Rpb24gZnJvbUpzb24oanNvbikge1xuICAgIHZhciB0aGVtZSA9IHt9O1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhqc29uKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgdmFyIHN0eWxlID0ganNvbltrZXldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIHRoZW1lW2tleV0gPSBzdHlsZS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7IHJldHVybiAoY3VycmVudCA9PT0gJ3BsYWluJyA/IGV4cG9ydHMucGxhaW4gOiBwcmV2aW91c1tjdXJyZW50XSk7IH0sIGNoYWxrXzEuZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICB0aGVtZVtrZXldID0gY2hhbGtfMS5kZWZhdWx0W3N0eWxlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhlbWU7XG59XG5leHBvcnRzLmZyb21Kc29uID0gZnJvbUpzb247XG4vKipcbiAqIENvbnZlcnRzIGEgW1tUaGVtZV1dIHdpdGggZm9ybWF0dGVyIGZ1bmN0aW9ucyB0byBhIFtbSnNvblRoZW1lXV0gd2l0aCBzdHJpbmcgdmFsdWVzLiBVc2VkIGJ5IFtbc3RyaW5naWZ5XV0uXG4gKi9cbmZ1bmN0aW9uIHRvSnNvbih0aGVtZSkge1xuICAgIHZhciBqc29uVGhlbWUgPSB7fTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMoanNvblRoZW1lKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcbiAgICAgICAgdmFyIHN0eWxlID0ganNvblRoZW1lW2tleV07XG4gICAgICAgIGpzb25UaGVtZVtrZXldID0gc3R5bGUuX3N0eWxlcztcbiAgICB9XG4gICAgcmV0dXJuIGpzb25UaGVtZTtcbn1cbmV4cG9ydHMudG9Kc29uID0gdG9Kc29uO1xuLyoqXG4gKiBTdHJpbmdpZmllcyBhIFtbVGhlbWVdXSB3aXRoIGZvcm1hdHRlciBmdW5jdGlvbnMgdG8gYSBKU09OIHN0cmluZy5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKTtcbiAqIGltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICdjbGktaGlnaGxpZ2h0JztcbiAqIGltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbiAqXG4gKiBjb25zdCBteVRoZW1lOiBUaGVtZSA9IHtcbiAqICAgICBrZXl3b3JkOiBjaGFsay5yZWQuYm9sZCxcbiAqICAgICBhZGRpdGlvbjogY2hhbGsuZ3JlZW4sXG4gKiAgICAgZGVsZXRpb246IGNoYWxrLnJlZC5zdHJpa2V0aHJvdWdoLFxuICogICAgIG51bWJlcjogcGxhaW5cbiAqIH1cbiAqIGNvbnN0IGpzb24gPSBzdHJpbmdpZnkobXlUaGVtZSk7XG4gKiBmcy53cml0ZUZpbGUoJ215dGhlbWUuanNvbicsIGpzb24sIChlcnI6IGFueSkgPT4ge1xuICogICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAqICAgICBjb25zb2xlLmxvZygnVGhlbWUgc2F2ZWQnKTtcbiAqIH0pO1xuICogYGBgXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeSh0aGVtZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0b0pzb24odGhlbWUpKTtcbn1cbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5O1xuLyoqXG4gKiBQYXJzZXMgYSBKU09OIHN0cmluZyBpbnRvIGEgW1tUaGVtZV1dIHdpdGggZm9ybWF0dGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuICogaW1wb3J0IHtwYXJzZSwgaGlnaGxpZ2h0fSBmcm9tICdjbGktaGlnaGxpZ2h0JztcbiAqXG4gKiBmcy5yZWFkRmlsZSgnbXl0aGVtZS5qc29uJywgJ3V0ZjgnLCAoZXJyOiBhbnksIGpzb246IHN0cmluZykgID0+IHtcbiAqICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gKiAgICAgY29uc3QgY29kZSA9IGhpZ2hsaWdodCgnU0VMRUNUICogRlJPTSB0YWJsZScsIHt0aGVtZTogcGFyc2UoanNvbil9KTtcbiAqICAgICBjb25zb2xlLmxvZyhjb2RlKTtcbiAqIH0pO1xuICogYGBgXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKGpzb24pIHtcbiAgICByZXR1cm4gZnJvbUpzb24oSlNPTi5wYXJzZShqc29uKSk7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aGVtZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/cli-highlight/dist/theme.js\n");

/***/ })

};
;
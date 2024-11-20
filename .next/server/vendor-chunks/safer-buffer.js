"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safer-buffer";
exports.ids = ["vendor-chunks/safer-buffer"];
exports.modules = {

/***/ "(action-browser)/./node_modules/safer-buffer/safer.js":
/*!********************************************!*\
  !*** ./node_modules/safer-buffer/safer.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* eslint-disable node/no-deprecated-api */\n\n\n\nvar buffer = __webpack_require__(/*! buffer */ \"buffer\")\nvar Buffer = buffer.Buffer\n\nvar safer = {}\n\nvar key\n\nfor (key in buffer) {\n  if (!buffer.hasOwnProperty(key)) continue\n  if (key === 'SlowBuffer' || key === 'Buffer') continue\n  safer[key] = buffer[key]\n}\n\nvar Safer = safer.Buffer = {}\nfor (key in Buffer) {\n  if (!Buffer.hasOwnProperty(key)) continue\n  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue\n  Safer[key] = Buffer[key]\n}\n\nsafer.Buffer.prototype = Buffer.prototype\n\nif (!Safer.from || Safer.from === Uint8Array.from) {\n  Safer.from = function (value, encodingOrOffset, length) {\n    if (typeof value === 'number') {\n      throw new TypeError('The \"value\" argument must not be of type number. Received type ' + typeof value)\n    }\n    if (value && typeof value.length === 'undefined') {\n      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)\n    }\n    return Buffer(value, encodingOrOffset, length)\n  }\n}\n\nif (!Safer.alloc) {\n  Safer.alloc = function (size, fill, encoding) {\n    if (typeof size !== 'number') {\n      throw new TypeError('The \"size\" argument must be of type number. Received type ' + typeof size)\n    }\n    if (size < 0 || size >= 2 * (1 << 30)) {\n      throw new RangeError('The value \"' + size + '\" is invalid for option \"size\"')\n    }\n    var buf = Buffer(size)\n    if (!fill || fill.length === 0) {\n      buf.fill(0)\n    } else if (typeof encoding === 'string') {\n      buf.fill(fill, encoding)\n    } else {\n      buf.fill(fill)\n    }\n    return buf\n  }\n}\n\nif (!safer.kStringMaxLength) {\n  try {\n    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength\n  } catch (e) {\n    // we can't determine kStringMaxLength in environments where process.binding\n    // is unsupported, so let's not set it\n  }\n}\n\nif (!safer.constants) {\n  safer.constants = {\n    MAX_LENGTH: safer.kMaxLength\n  }\n  if (safer.kStringMaxLength) {\n    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength\n  }\n}\n\nmodule.exports = safer\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9zYWZlci1idWZmZXIvc2FmZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEhQXFxEZXNrdG9wXFxQcm9qZWN0c1xcc3R1ZGVudC1yZXNvdXJjZS1jZW50cmVcXG5vZGVfbW9kdWxlc1xcc2FmZXItYnVmZmVyXFxzYWZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJylcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbnZhciBzYWZlciA9IHt9XG5cbnZhciBrZXlcblxuZm9yIChrZXkgaW4gYnVmZmVyKSB7XG4gIGlmICghYnVmZmVyLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlXG4gIGlmIChrZXkgPT09ICdTbG93QnVmZmVyJyB8fCBrZXkgPT09ICdCdWZmZXInKSBjb250aW51ZVxuICBzYWZlcltrZXldID0gYnVmZmVyW2tleV1cbn1cblxudmFyIFNhZmVyID0gc2FmZXIuQnVmZmVyID0ge31cbmZvciAoa2V5IGluIEJ1ZmZlcikge1xuICBpZiAoIUJ1ZmZlci5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZVxuICBpZiAoa2V5ID09PSAnYWxsb2NVbnNhZmUnIHx8IGtleSA9PT0gJ2FsbG9jVW5zYWZlU2xvdycpIGNvbnRpbnVlXG4gIFNhZmVyW2tleV0gPSBCdWZmZXJba2V5XVxufVxuXG5zYWZlci5CdWZmZXIucHJvdG90eXBlID0gQnVmZmVyLnByb3RvdHlwZVxuXG5pZiAoIVNhZmVyLmZyb20gfHwgU2FmZXIuZnJvbSA9PT0gVWludDhBcnJheS5mcm9tKSB7XG4gIFNhZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgdmFsdWUpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiB2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIEJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG59XG5cbmlmICghU2FmZXIuYWxsb2MpIHtcbiAgU2FmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHNpemUpXG4gICAgfVxuICAgIGlmIChzaXplIDwgMCB8fCBzaXplID49IDIgKiAoMSA8PCAzMCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgc2l6ZSArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICAgIH1cbiAgICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gICAgaWYgKCFmaWxsIHx8IGZpbGwubGVuZ3RoID09PSAwKSB7XG4gICAgICBidWYuZmlsbCgwKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICAgIHJldHVybiBidWZcbiAgfVxufVxuXG5pZiAoIXNhZmVyLmtTdHJpbmdNYXhMZW5ndGgpIHtcbiAgdHJ5IHtcbiAgICBzYWZlci5rU3RyaW5nTWF4TGVuZ3RoID0gcHJvY2Vzcy5iaW5kaW5nKCdidWZmZXInKS5rU3RyaW5nTWF4TGVuZ3RoXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyB3ZSBjYW4ndCBkZXRlcm1pbmUga1N0cmluZ01heExlbmd0aCBpbiBlbnZpcm9ubWVudHMgd2hlcmUgcHJvY2Vzcy5iaW5kaW5nXG4gICAgLy8gaXMgdW5zdXBwb3J0ZWQsIHNvIGxldCdzIG5vdCBzZXQgaXRcbiAgfVxufVxuXG5pZiAoIXNhZmVyLmNvbnN0YW50cykge1xuICBzYWZlci5jb25zdGFudHMgPSB7XG4gICAgTUFYX0xFTkdUSDogc2FmZXIua01heExlbmd0aFxuICB9XG4gIGlmIChzYWZlci5rU3RyaW5nTWF4TGVuZ3RoKSB7XG4gICAgc2FmZXIuY29uc3RhbnRzLk1BWF9TVFJJTkdfTEVOR1RIID0gc2FmZXIua1N0cmluZ01heExlbmd0aFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2FmZXJcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/safer-buffer/safer.js\n");

/***/ })

};
;
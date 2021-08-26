"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
exports.modules = {

/***/ "./pages/api/product/[id].js":
/*!***********************************!*\
  !*** ./pages/api/product/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  var _req$query;\n\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed.'\n    });\n  }\n\n  const id = req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.id;\n\n  if (!id) {\n    return res.status(400).json({\n      message: 'Missing product id.'\n    });\n  }\n\n  const data = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.product.findUnique({\n    where: {\n      id\n    },\n    select: {\n      id: true,\n      name: true,\n      image: true,\n      price: true,\n      description: true\n    }\n  });\n\n  if (!data) {\n    return res.status(400).json({\n      message: 'Invalid product id.'\n    });\n  }\n\n  return res.status(200).json({\n    data\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFBQTs7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVELFFBQU1DLEVBQUUsR0FBR04sR0FBSCxhQUFHQSxHQUFILHFDQUFHQSxHQUFHLENBQUVPLEtBQVIsK0NBQUcsV0FBWUQsRUFBdkI7O0FBQ0EsTUFBSSxDQUFDQSxFQUFMLEVBQVM7QUFDUCxXQUFPTCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTUcsSUFBSSxHQUFHLE1BQU1ULG9FQUFBLENBQTBCO0FBQzNDWSxJQUFBQSxLQUFLLEVBQUU7QUFDTEwsTUFBQUE7QUFESyxLQURvQztBQUkzQ00sSUFBQUEsTUFBTSxFQUFFO0FBQ05OLE1BQUFBLEVBQUUsRUFBRSxJQURFO0FBRU5PLE1BQUFBLElBQUksRUFBRSxJQUZBO0FBR05DLE1BQUFBLEtBQUssRUFBRSxJQUhEO0FBSU5DLE1BQUFBLEtBQUssRUFBRSxJQUpEO0FBS05DLE1BQUFBLFdBQVcsRUFBRTtBQUxQO0FBSm1DLEdBQTFCLENBQW5COztBQWFBLE1BQUksQ0FBQ1IsSUFBTCxFQUFXO0FBQ1QsV0FBT1AsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVELFNBQU9KLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVJLElBQUFBO0FBQUYsR0FBckIsQ0FBUDtBQUNELENBNUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vcGFnZXMvYXBpL3Byb2R1Y3QvW2lkXS5qcz8wYzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vdXRpbC9wcmlzbWEnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZC4nIH0pO1xuICB9XG5cbiAgY29uc3QgaWQgPSByZXE/LnF1ZXJ5Py5pZDtcbiAgaWYgKCFpZCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdNaXNzaW5nIHByb2R1Y3QgaWQuJyB9KTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGlkOiB0cnVlLFxuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGltYWdlOiB0cnVlLFxuICAgICAgcHJpY2U6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbjogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBwcm9kdWN0IGlkLicgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhIH0pO1xufTsiXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsInByb2R1Y3QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZWxlY3QiLCJuYW1lIiwiaW1hZ2UiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/product/[id].js\n");

/***/ }),

/***/ "./util/prisma.js":
/*!************************!*\
  !*** ./util/prisma.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// server/util/prisma.js\n // eslint-disable-next-line\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3ByaXNtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtDQUVBOztBQUNBLElBQUlDLE1BQUo7O0FBRUEsSUFBSSxPQUF1QyxFQUEzQyxNQUVPO0FBQ0wsTUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEJDLElBQUFBLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixJQUFJRCx3REFBSixFQUFoQjtBQUNEOztBQUNEQyxFQUFBQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBaEI7QUFDRDs7QUFFRCxpRUFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3V0aWwvcHJpc21hLmpzPzgwNDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2VydmVyL3V0aWwvcHJpc21hLmpzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmxldCBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/prisma.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/product/[id].js"));
module.exports = __webpack_exports__;

})();
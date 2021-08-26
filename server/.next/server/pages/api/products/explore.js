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
exports.id = "pages/api/products/explore";
exports.ids = ["pages/api/products/explore"];
exports.modules = {

/***/ "./pages/api/products/explore.js":
/*!***************************************!*\
  !*** ./pages/api/products/explore.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method !== \"GET\") {\n    res.statusCode = 405;\n    res.end(\"Method not allowed\");\n  }\n\n  const categories = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.category.findMany({\n    where: {\n      products: {\n        some: {}\n      }\n    },\n    select: {\n      id: true,\n      name: true,\n      products: {\n        select: {\n          id: true,\n          name: true,\n          image: true,\n          price: true\n        }\n      }\n    },\n    orderBy: {\n      name: 'asc'\n    }\n  });\n  return res.status(200).json({\n    categories\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMvZXhwbG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCRCxJQUFBQSxHQUFHLENBQUNFLFVBQUosR0FBaUIsR0FBakI7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsb0JBQVI7QUFDRDs7QUFFRCxRQUFNQyxVQUFVLEdBQUcsTUFBTU4sbUVBQUEsQ0FBeUI7QUFDaERTLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLEVBQUU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFETCxLQUR5QztBQUloREMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLEVBQUUsRUFBRSxJQURFO0FBRU5DLE1BQUFBLElBQUksRUFBRSxJQUZBO0FBR05KLE1BQUFBLFFBQVEsRUFBRTtBQUNSRSxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsRUFBRSxFQUFFLElBREU7QUFFTkMsVUFBQUEsSUFBSSxFQUFFLElBRkE7QUFHTkMsVUFBQUEsS0FBSyxFQUFFLElBSEQ7QUFJTkMsVUFBQUEsS0FBSyxFQUFFO0FBSkQ7QUFEQTtBQUhKLEtBSndDO0FBZ0JoREMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BILE1BQUFBLElBQUksRUFBRTtBQURDO0FBaEJ1QyxHQUF6QixDQUF6QjtBQXFCQSxTQUFPWixHQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRWIsSUFBQUE7QUFBRixHQUFyQixDQUFQO0FBQ0QsQ0E1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9wYWdlcy9hcGkvcHJvZHVjdHMvZXhwbG9yZS5qcz9mYzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3V0aWwvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJHRVRcIikge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuICAgIHJlcy5lbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIik7XG4gIH1cblxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgcHJpc21hLmNhdGVnb3J5LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgcHJvZHVjdHM6IHsgc29tZToge30gfSxcbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICBpbWFnZTogdHJ1ZSxcbiAgICAgICAgICBwcmljZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcmRlckJ5OiB7XG4gICAgICBuYW1lOiAnYXNjJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBjYXRlZ29yaWVzIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXNDb2RlIiwiZW5kIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiZmluZE1hbnkiLCJ3aGVyZSIsInByb2R1Y3RzIiwic29tZSIsInNlbGVjdCIsImlkIiwibmFtZSIsImltYWdlIiwicHJpY2UiLCJvcmRlckJ5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/products/explore.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/explore.js"));
module.exports = __webpack_exports__;

})();
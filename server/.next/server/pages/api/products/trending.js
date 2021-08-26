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
exports.id = "pages/api/products/trending";
exports.ids = ["pages/api/products/trending"];
exports.modules = {

/***/ "./pages/api/products/trending.js":
/*!****************************************!*\
  !*** ./pages/api/products/trending.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n\nconst selectFields = {\n  id: true,\n  name: true,\n  image: true,\n  price: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method !== 'GET') {\n    return res.status(405).json({\n      message: 'Method not allowed.'\n    });\n  }\n\n  const bestSellers = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.product.findMany({\n    where: {\n      soldCount: {\n        gt: 0\n      }\n    },\n    orderBy: {\n      soldCount: 'desc'\n    },\n    take: 3,\n    select: selectFields\n  });\n  const newItems = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.product.findMany({\n    orderBy: {\n      createdAt: 'desc'\n    },\n    take: 3,\n    select: selectFields\n  });\n  const data = [{\n    title: 'Best Sellers',\n    items: bestSellers\n  }, {\n    title: 'New Items',\n    items: newItems\n  }];\n  return res.status(200).json({\n    data\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMvdHJlbmRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsRUFBRSxFQUFFLElBRGU7QUFFbkJDLEVBQUFBLElBQUksRUFBRSxJQUZhO0FBR25CQyxFQUFBQSxLQUFLLEVBQUUsSUFIWTtBQUluQkMsRUFBQUEsS0FBSyxFQUFFO0FBSlksQ0FBckI7QUFPQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVELFFBQU1DLFdBQVcsR0FBRyxNQUFNWixrRUFBQSxDQUF3QjtBQUNoRGUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFNBQVMsRUFBRTtBQUNUQyxRQUFBQSxFQUFFLEVBQUU7QUFESztBQUROLEtBRHlDO0FBTWhEQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEYsTUFBQUEsU0FBUyxFQUFFO0FBREosS0FOdUM7QUFTaERHLElBQUFBLElBQUksRUFBRSxDQVQwQztBQVVoREMsSUFBQUEsTUFBTSxFQUFFbkI7QUFWd0MsR0FBeEIsQ0FBMUI7QUFhQSxRQUFNb0IsUUFBUSxHQUFHLE1BQU1yQixrRUFBQSxDQUF3QjtBQUM3Q2tCLElBQUFBLE9BQU8sRUFBRTtBQUNQSSxNQUFBQSxTQUFTLEVBQUU7QUFESixLQURvQztBQUk3Q0gsSUFBQUEsSUFBSSxFQUFFLENBSnVDO0FBSzdDQyxJQUFBQSxNQUFNLEVBQUVuQjtBQUxxQyxHQUF4QixDQUF2QjtBQVFBLFFBQU1zQixJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFBQSxLQUFLLEVBQUUsY0FEVDtBQUVFQyxJQUFBQSxLQUFLLEVBQUViO0FBRlQsR0FEVyxFQUtYO0FBQ0VZLElBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLElBQUFBLEtBQUssRUFBRUo7QUFGVCxHQUxXLENBQWI7QUFXQSxTQUFPZCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFYSxJQUFBQTtBQUFGLEdBQXJCLENBQVA7QUFDRCxDQXRDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3BhZ2VzL2FwaS9wcm9kdWN0cy90cmVuZGluZy5qcz9jZTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3V0aWwvcHJpc21hXCI7XG5cbmNvbnN0IHNlbGVjdEZpZWxkcyA9IHtcbiAgaWQ6IHRydWUsXG4gIG5hbWU6IHRydWUsXG4gIGltYWdlOiB0cnVlLFxuICBwcmljZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkLicgfSk7XG4gIH1cblxuICBjb25zdCBiZXN0U2VsbGVycyA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgc29sZENvdW50OiB7XG4gICAgICAgIGd0OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9yZGVyQnk6IHtcbiAgICAgIHNvbGRDb3VudDogJ2Rlc2MnLFxuICAgIH0sXG4gICAgdGFrZTogMyxcbiAgICBzZWxlY3Q6IHNlbGVjdEZpZWxkcyxcbiAgfSk7XG5cbiAgY29uc3QgbmV3SXRlbXMgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5maW5kTWFueSh7XG4gICAgb3JkZXJCeToge1xuICAgICAgY3JlYXRlZEF0OiAnZGVzYycsXG4gICAgfSxcbiAgICB0YWtlOiAzLFxuICAgIHNlbGVjdDogc2VsZWN0RmllbGRzLFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQmVzdCBTZWxsZXJzJyxcbiAgICAgIGl0ZW1zOiBiZXN0U2VsbGVycyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTmV3IEl0ZW1zJyxcbiAgICAgIGl0ZW1zOiBuZXdJdGVtcyxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XG59OyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJzZWxlY3RGaWVsZHMiLCJpZCIsIm5hbWUiLCJpbWFnZSIsInByaWNlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJiZXN0U2VsbGVycyIsInByb2R1Y3QiLCJmaW5kTWFueSIsIndoZXJlIiwic29sZENvdW50IiwiZ3QiLCJvcmRlckJ5IiwidGFrZSIsInNlbGVjdCIsIm5ld0l0ZW1zIiwiY3JlYXRlZEF0IiwiZGF0YSIsInRpdGxlIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/products/trending.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/trending.js"));
module.exports = __webpack_exports__;

})();
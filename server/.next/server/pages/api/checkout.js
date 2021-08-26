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
exports.id = "pages/api/checkout";
exports.ids = ["pages/api/checkout"];
exports.modules = {

/***/ "./pages/api/checkout.js":
/*!*******************************!*\
  !*** ./pages/api/checkout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/prisma */ \"./util/prisma.js\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  var _req$body;\n\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Method not allowed. '\n    });\n  } // console.log(req.body.cart);\n\n\n  const cart = (req === null || req === void 0 ? void 0 : (_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.cart) || {};\n  const productIds = Object.keys(cart);\n  const products = await _util_prisma__WEBPACK_IMPORTED_MODULE_1__.default.product.findMany({\n    where: {\n      id: {\n        in: productIds\n      }\n    },\n    select: {\n      id: true,\n      price: true\n    }\n  }); // calculate total\n\n  let total = 0;\n  products.forEach(product => {\n    total += product.price * cart[product.id].quantity;\n  }); // payment intent\n\n  const paymentIntent = await stripe.paymentIntents.create({\n    amount: total,\n    currency: 'usd'\n  });\n  return res.status(200).json({\n    publishableKey: process.env.STRIPE_PUBLIC,\n    paymentIntent: paymentIntent.client_secret\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2tvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsK0NBQUosQ0FBV0csT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQXZCLENBQWY7QUFFQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFBQTs7QUFDakMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNELEdBSGdDLENBS2pDOzs7QUFDQSxRQUFNQyxJQUFJLEdBQUcsQ0FBQU4sR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCx5QkFBQUEsR0FBRyxDQUFFTyxJQUFMLHdEQUFXRCxJQUFYLEtBQW1CLEVBQWhDO0FBQ0EsUUFBTUUsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixDQUFuQjtBQUNBLFFBQU1LLFFBQVEsR0FBRyxNQUFNaEIsa0VBQUEsQ0FBd0I7QUFDN0NtQixJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLEVBQUUsRUFBRVI7QUFERjtBQURDLEtBRHNDO0FBTTdDUyxJQUFBQSxNQUFNLEVBQUU7QUFDTkYsTUFBQUEsRUFBRSxFQUFFLElBREU7QUFFTkcsTUFBQUEsS0FBSyxFQUFFO0FBRkQ7QUFOcUMsR0FBeEIsQ0FBdkIsQ0FSaUMsQ0FvQmpDOztBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0FSLEVBQUFBLFFBQVEsQ0FBQ1MsT0FBVCxDQUFrQlIsT0FBRCxJQUFhO0FBQzVCTyxJQUFBQSxLQUFLLElBQUlQLE9BQU8sQ0FBQ00sS0FBUixHQUFnQlosSUFBSSxDQUFDTSxPQUFPLENBQUNHLEVBQVQsQ0FBSixDQUFpQk0sUUFBMUM7QUFDRCxHQUZELEVBdEJpQyxDQTBCakM7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHLE1BQU0xQixNQUFNLENBQUMyQixjQUFQLENBQXNCQyxNQUF0QixDQUE2QjtBQUN2REMsSUFBQUEsTUFBTSxFQUFFTixLQUQrQztBQUV2RE8sSUFBQUEsUUFBUSxFQUFFO0FBRjZDLEdBQTdCLENBQTVCO0FBS0EsU0FBT3pCLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCdUIsSUFBQUEsY0FBYyxFQUFFOUIsT0FBTyxDQUFDQyxHQUFSLENBQVk4QixhQURGO0FBRTFCTixJQUFBQSxhQUFhLEVBQUVBLGFBQWEsQ0FBQ087QUFGSCxHQUFyQixDQUFQO0FBSUQsQ0FwQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9wYWdlcy9hcGkvY2hlY2tvdXQuanM/ZGJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vdXRpbC9wcmlzbWEnO1xuXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVQpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQuICcgfSk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS5jYXJ0KTtcbiAgY29uc3QgY2FydCA9IHJlcT8uYm9keT8uY2FydCB8fCB7fTtcbiAgY29uc3QgcHJvZHVjdElkcyA9IE9iamVjdC5rZXlzKGNhcnQpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IHtcbiAgICAgICAgaW46IHByb2R1Y3RJZHMsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIHByaWNlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIGNhbGN1bGF0ZSB0b3RhbFxuICBsZXQgdG90YWwgPSAwO1xuICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgdG90YWwgKz0gcHJvZHVjdC5wcmljZSAqIGNhcnRbcHJvZHVjdC5pZF0ucXVhbnRpdHk7XG4gIH0pO1xuXG4gIC8vIHBheW1lbnQgaW50ZW50XG4gIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBzdHJpcGUucGF5bWVudEludGVudHMuY3JlYXRlKHtcbiAgICBhbW91bnQ6IHRvdGFsLFxuICAgIGN1cnJlbmN5OiAndXNkJyxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBwdWJsaXNoYWJsZUtleTogcHJvY2Vzcy5lbnYuU1RSSVBFX1BVQkxJQyxcbiAgICBwYXltZW50SW50ZW50OiBwYXltZW50SW50ZW50LmNsaWVudF9zZWNyZXQsXG4gIH0pO1xufTsiXSwibmFtZXMiOlsiU3RyaXBlIiwicHJpc21hIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNhcnQiLCJib2R5IiwicHJvZHVjdElkcyIsIk9iamVjdCIsImtleXMiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaW5kTWFueSIsIndoZXJlIiwiaWQiLCJpbiIsInNlbGVjdCIsInByaWNlIiwidG90YWwiLCJmb3JFYWNoIiwicXVhbnRpdHkiLCJwYXltZW50SW50ZW50IiwicGF5bWVudEludGVudHMiLCJjcmVhdGUiLCJhbW91bnQiLCJjdXJyZW5jeSIsInB1Ymxpc2hhYmxlS2V5IiwiU1RSSVBFX1BVQkxJQyIsImNsaWVudF9zZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/checkout.js\n");

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

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/checkout.js"));
module.exports = __webpack_exports__;

})();
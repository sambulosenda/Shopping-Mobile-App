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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n/* harmony import */ var _util_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/auth */ \"./util/auth.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method !== \"POST\") {\n    return res.status(405).json({\n      message: \"Method not allowed.\"\n    });\n  }\n\n  const {\n    email,\n    password\n  } = req.body || {};\n\n  try {\n    const user = await _util_prisma__WEBPACK_IMPORTED_MODULE_0__.default.user.findFirst({\n      where: {\n        email\n      }\n    });\n\n    if (!user) {\n      throw new Error(\"No user found.\");\n    }\n\n    const isValidPassword = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_1__.comparePassword)(password, user.password);\n\n    if (!isValidPassword) {\n      throw new Error('Invalid password.');\n    }\n\n    const token = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_1__.generateJWT)(user.id);\n    return res.status(200).json({\n      token,\n      userId: user.id\n    });\n  } catch (error) {\n    return res.status(400).json({\n      message: error.message || \"Something went wrong.\"\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRUEsaUVBQWUsT0FBT0csR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFFRCxRQUFNO0FBQUVDLElBQUFBLEtBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUFzQlAsR0FBRyxDQUFDUSxJQUFKLElBQVksRUFBeEM7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLElBQUksR0FBRyxNQUFNWixnRUFBQSxDQUFzQjtBQUN2Q2MsTUFBQUEsS0FBSyxFQUFFO0FBQ0xMLFFBQUFBO0FBREs7QUFEZ0MsS0FBdEIsQ0FBbkI7O0FBTUEsUUFBSSxDQUFDRyxJQUFMLEVBQVc7QUFDVCxZQUFNLElBQUlHLEtBQUosQ0FBVSxnQkFBVixDQUFOO0FBQ0Q7O0FBRUQsVUFBTUMsZUFBZSxHQUFHLE1BQU1mLDJEQUFlLENBQUNTLFFBQUQsRUFBV0UsSUFBSSxDQUFDRixRQUFoQixDQUE3Qzs7QUFDQSxRQUFJLENBQUNNLGVBQUwsRUFBc0I7QUFDbEIsWUFBTSxJQUFJRCxLQUFKLENBQVUsbUJBQVYsQ0FBTjtBQUNIOztBQUNELFVBQU1FLEtBQUssR0FBRyxNQUFNZix1REFBVyxDQUFDVSxJQUFJLENBQUNNLEVBQU4sQ0FBL0I7QUFFQSxXQUFPZCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QlUsTUFBQUEsS0FEd0I7QUFFMUJFLE1BQUFBLE1BQU0sRUFBRVAsSUFBSSxDQUFDTTtBQUZhLEtBQXJCLENBQVA7QUFJRCxHQXJCRCxDQXFCRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxXQUFPaEIsR0FBRyxDQUNQRSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsTUFBQUEsT0FBTyxFQUFFWSxLQUFLLENBQUNaLE9BQU4sSUFBaUI7QUFBNUIsS0FGRCxDQUFQO0FBR0Q7QUFDRixDQWhDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzM2YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9wcmlzbWFcIjtcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZCwgZ2VuZXJhdGVKV1QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZC5cIiB9KTtcbiAgfVxuICBcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5IHx8IHt9O1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB1c2VyIGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSBhd2FpdCBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgIGlmICghaXNWYWxpZFBhc3N3b3JkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXNzd29yZC4nKTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZW5lcmF0ZUpXVCh1c2VyLmlkKVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgdG9rZW4sXG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlc1xuICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIiB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJjb21wYXJlUGFzc3dvcmQiLCJnZW5lcmF0ZUpXVCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJFcnJvciIsImlzVmFsaWRQYXNzd29yZCIsInRva2VuIiwiaWQiLCJ1c2VySWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/login.js\n");

/***/ }),

/***/ "./util/auth.js":
/*!**********************!*\
  !*** ./util/auth.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"generateJWT\": () => (/* binding */ generateJWT),\n/* harmony export */   \"comparePassword\": () => (/* binding */ comparePassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst hashPassword = async password => {\n  const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().genSalt(10);\n  const hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, salt);\n  return hash;\n};\nconst generateJWT = async userId => {\n  const token = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n    id: userId\n  }, process.env.JWT_SECRET);\n  return token;\n};\nconst comparePassword = async (password, userPassword) => {\n  return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(password, userPassword);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxZQUFZLEdBQUcsTUFBT0MsUUFBUCxJQUFvQjtBQUM1QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUosdURBQUEsQ0FBZSxFQUFmLENBQW5CO0FBQ0EsUUFBTU0sSUFBSSxHQUFHLE1BQU1OLG9EQUFBLENBQVlHLFFBQVosRUFBc0JDLElBQXRCLENBQW5CO0FBQ0EsU0FBT0UsSUFBUDtBQUNILENBSk07QUFNQSxNQUFNQyxXQUFXLEdBQUcsTUFBT0MsTUFBUCxJQUFrQjtBQUN6QyxRQUFNQyxLQUFLLEdBQUcsTUFBTVIsd0RBQUEsQ0FBUztBQUFFVSxJQUFBQSxFQUFFLEVBQUVIO0FBQU4sR0FBVCxFQUF5QkksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQXJDLENBQXBCO0FBQ0EsU0FBT0wsS0FBUDtBQUNILENBSE07QUFNQSxNQUFNTSxlQUFlLEdBQUUsT0FBT1osUUFBUCxFQUFpQmEsWUFBakIsS0FBa0M7QUFDNUQsU0FBT2hCLHVEQUFBLENBQWVHLFFBQWYsRUFBeUJhLFlBQXpCLENBQVA7QUFDSCxDQUZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vdXRpbC9hdXRoLmpzPzJlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuZXhwb3J0IGNvbnN0IGhhc2hQYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZCkgPT4ge1xuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMCk7XG4gICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcbiAgICByZXR1cm4gaGFzaDtcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlSldUID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgand0LnNpZ24oeyBpZDogdXNlcklkIH0sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xuICAgIHJldHVybiB0b2tlbjtcbn07XG5cblxuZXhwb3J0IGNvbnN0IGNvbXBhcmVQYXNzd29yZCA9YXN5bmMgKHBhc3N3b3JkLCB1c2VyUGFzc3dvcmQpID0+IHtcbiAgICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXJQYXNzd29yZCk7XG59Il0sIm5hbWVzIjpbImJjcnlwdCIsImp3dCIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiZ2VuZXJhdGVKV1QiLCJ1c2VySWQiLCJ0b2tlbiIsInNpZ24iLCJpZCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiY29tcGFyZVBhc3N3b3JkIiwidXNlclBhc3N3b3JkIiwiY29tcGFyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/auth.js\n");

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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();
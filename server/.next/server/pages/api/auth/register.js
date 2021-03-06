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
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "./pages/api/auth/register.js":
/*!************************************!*\
  !*** ./pages/api/auth/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/auth */ \"./util/auth.js\");\n/* harmony import */ var _util_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/prisma */ \"./util/prisma.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method !== 'POST') {\n    return res.status(405).json({\n      message: 'Method not allowed.'\n    });\n  }\n\n  try {\n    const user = (req === null || req === void 0 ? void 0 : req.body) || {};\n    user.password = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_0__.hashPassword)(user.password);\n    const createdUser = await _util_prisma__WEBPACK_IMPORTED_MODULE_1__.default.user.create({\n      data: user\n    });\n    const token = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_0__.generateJWT)(createdUser.id);\n    return res.status(200).json({\n      userId: createdUser.id,\n      token\n    });\n  } catch (error) {\n    if (error.code === 'P2002') {\n      return res.status(200).json({\n        message: 'Account already exists.'\n      });\n    } // Log the error\n\n\n    return res.status(400).json({\n      message: 'Something went wrong.'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBRUEsaUVBQWUsT0FBT0csR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFDRCxNQUFJO0FBRUosVUFBTUMsSUFBSSxHQUFHLENBQUFOLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFTyxJQUFMLEtBQWEsRUFBMUI7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCLE1BQU1WLHdEQUFZLENBQUNRLElBQUksQ0FBQ0UsUUFBTixDQUFsQztBQUVBLFVBQU1DLFdBQVcsR0FBRyxNQUFNViw2REFBQSxDQUFtQjtBQUFFWSxNQUFBQSxJQUFJLEVBQUVMO0FBQVIsS0FBbkIsQ0FBMUI7QUFDQSxVQUFNTSxLQUFLLEdBQUcsTUFBTWYsdURBQVcsQ0FBQ1ksV0FBVyxDQUFDSSxFQUFiLENBQS9CO0FBRUEsV0FBT1osR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJVLE1BQUFBLE1BQU0sRUFBRUwsV0FBVyxDQUFDSSxFQURJO0FBRXhCRCxNQUFBQTtBQUZ3QixLQUFyQixDQUFQO0FBSUQsR0FaQyxDQVlBLE9BQU9HLEtBQVAsRUFBYztBQUNkLFFBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE9BQW5CLEVBQTRCO0FBQzFCLGFBQU9mLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXJCLENBQVA7QUFDRCxLQUhhLENBS2Q7OztBQUNBLFdBQU9KLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDtBQUNBLENBeEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIuanM/OTUyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGdlbmVyYXRlSldULCBoYXNoUGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi91dGlsL2F1dGgnO1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi91dGlsL3ByaXNtYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZC4nIH0pO1xuICB9XG4gIHRyeSB7XG5cbiAgY29uc3QgdXNlciA9IHJlcT8uYm9keSB8fCB7fTtcbiAgdXNlci5wYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZCh1c2VyLnBhc3N3b3JkKVxuICBcbiAgY29uc3QgY3JlYXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoeyBkYXRhOiB1c2VyfSk7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgZ2VuZXJhdGVKV1QoY3JlYXRlZFVzZXIuaWQpXG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIHVzZXJJZDogY3JlYXRlZFVzZXIuaWQsXG4gICAgICB0b2tlblxuICB9KVxufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLmNvZGUgPT09ICdQMjAwMicpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQWNjb3VudCBhbHJlYWR5IGV4aXN0cy4nIH0pO1xuICB9XG5cbiAgLy8gTG9nIHRoZSBlcnJvclxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJyB9KTtcbn1cbn0iXSwibmFtZXMiOlsiZ2VuZXJhdGVKV1QiLCJoYXNoUGFzc3dvcmQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXIiLCJib2R5IiwicGFzc3dvcmQiLCJjcmVhdGVkVXNlciIsImNyZWF0ZSIsImRhdGEiLCJ0b2tlbiIsImlkIiwidXNlcklkIiwiZXJyb3IiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/register.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/register.js"));
module.exports = __webpack_exports__;

})();
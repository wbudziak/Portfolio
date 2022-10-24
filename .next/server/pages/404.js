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
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./components/commons/404/index,.js":
/*!******************************************!*\
  !*** ./components/commons/404/index,.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Error404)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Error404() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        router.replace(\"/\");\n    });\n    return null;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbnMvNDA0L2luZGV4LC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNNO0FBRXpCLFNBQVNFLFFBQVEsR0FBRztJQUNqQyxNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFFMUJELGdEQUFTLENBQUMsSUFBTTtRQUNkRyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztDQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9jb21tb25zLzQwNC9pbmRleCwuanM/ZTA0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvcjQwNCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkVycm9yNDA0Iiwicm91dGVyIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/commons/404/index,.js\n");

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.json\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_commons_404_index___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/commons/404/index, */ \"./components/commons/404/index,.js\");\n\n\n\n\nfunction NotFound() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_commons_404_index___WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/wojciechbudziak/Desktop/Portfolio/pages/404.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\nasync function getStaticProps(ctx) {\n    return {\n        props: {\n            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({\n                ...ctx,\n                pathname: \"/404\",\n                loaderName: \"getStaticProps\",\n                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,\n                loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default)\n            })\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDSTtBQUFvRDtBQUNRO0FBRVI7QUFFeEQsU0FBU0csUUFBUSxHQUFHO0lBQ2xCLHFCQUNFO2tCQUNFLDRFQUFDRCxzRUFBUTs7OztnQkFBRztxQkFDWCxDQUNIO0NBQ0g7QUFDRCxpRUFBZUMsUUFBUSxFQUFDO0FBR2IsZUFBZUMsY0FBYyxDQUFDQyxHQUFHLEVBQUU7SUFHdEMsT0FBTztRQUdMQyxLQUFLLEVBQUU7WUFFTCxHQUFJLE1BQU1MLG9FQUFnQixDQUFDO2dCQUN6QixHQUFHSSxHQUFHO2dCQUNORSxRQUFRLEVBQUUsTUFBTTtnQkFDaEJDLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzVCLEdBQUdSLHNEQUFZO2dCQUNmUyxjQUFjLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUssZ0VBQU8sR0FBOEIsRUFBRUQsQ0FBQyxDQUFDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxPQUFPLENBQUM7YUFDaEcsQ0FBQztTQUNIO0tBQ0Y7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzLzQwNC5qcz8zZWQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbiAgICBcbmltcG9ydCBFcnJvcjQwNCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb25zLzQwNC9pbmRleCxcIjtcblxuZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxFcnJvcjQwNCAvPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG5cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbiAgICAgICAgICAgICAgLi4uY3R4LFxuICAgICAgICAgICAgICBwYXRobmFtZTogJy80MDQnLFxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAiXSwibmFtZXMiOlsiX19pMThuQ29uZmlnIiwiX19sb2FkTmFtZXNwYWNlcyIsIkVycm9yNDA0IiwiTm90Rm91bmQiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsInByb3BzIiwicGF0aG5hbWUiLCJsb2FkZXJOYW1lIiwibG9hZExvY2FsZUZyb20iLCJsIiwibiIsInRoZW4iLCJtIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["en","pl"],"defaultLocale":"en","pages":{"*":["common"],"/":["main"],"/about":["about"],"/projects":["projects"],"/contact":["contact"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();
/*! For license information please see src_components_Utils_ScrollToTop_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Utils_ScrollToTop_js"],{"./src/components/Utils/ScrollToTop.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ ScrollToTop)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n\n\nfunction ScrollToTop() {\n  const {\n    pathname\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    window.scrollTo(0, 0);\n  }, [pathname]);\n  return null;\n}\n\n//# sourceURL=webpack://frontend/./src/components/Utils/ScrollToTop.js?')}}]);
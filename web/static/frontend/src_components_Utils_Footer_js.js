/*! For license information please see src_components_Utils_Footer_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Utils_Footer_js"],{"./src/components/Utils/Footer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var _svg_Instagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/Instagram */ "./src/components/svg/Instagram.js");\n\n\n\n\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"])(theme => ({\n  footer: {\n    padding: theme.spacing(5),\n    backgroundColor: "#FAFAFA",\n    [theme.breakpoints.up(\'sm\')]: {\n      padding: "1.5rem 5rem",\n      display: \'flex\',\n      justifyContent: \'space-between\',\n      alignItems: \'center\'\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      padding: "1.5rem 7rem"\n    }\n  },\n  row: {\n    flexDirection: "row",\n    display: "flex",\n    alignItems: "center",\n    justifyContent: "space-between",\n    textAlign: "center",\n    [theme.breakpoints.up(\'sm\')]: {\n      width: \'75%\'\n    }\n  },\n  rowMedia: {\n    justifyContent: \'center\',\n    textAlign: \'center\',\n    marginTop: "1rem",\n    [theme.breakpoints.up(\'sm\')]: {\n      marginTop: \'0px\'\n    }\n  },\n  body1: {\n    fontFamily: "Poppins",\n    fontSize: "0.6rem",\n    color: "#41455c",\n    [theme.breakpoints.up(\'sm\')]: {\n      fontSize: "0.6rem",\n      lineHeight: "1rem"\n    }\n  }\n}));\nfunction Footer() {\n  const {\n    t,\n    i18n\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.footer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.row\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {\n    to: "/",\n    className: "nav-link p-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    variant: \'body1\',\n    className: classes.body1\n  }, "\\xA9 2021 SHOPISAN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {\n    to: "/generals_conditions",\n    className: "nav-link p-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    variant: \'body1\',\n    className: classes.body1\n  }, t(\'gc.title\'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {\n    to: "/privacy_policy",\n    className: "nav-link p-0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    variant: \'body1\',\n    className: classes.body1\n  }, t(\'pp.title\')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.rowMedia\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "https://www.instagram.com/shopisanapp/",\n    target: "_blank"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_Instagram__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    width: \'24px\'\n  }))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Utils/Footer.js?')},"./src/components/svg/Instagram.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ InstagramIcon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nfunction InstagramIcon(props) {\n  const {\n    width\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {\n    "aria-hidden": "true",\n    focusable: "false",\n    "data-prefix": "fab",\n    "data-icon": "instagram",\n    className: "svg-inline--fa fa-instagram fa-w-14",\n    role: "img",\n    xmlns: "http://www.w3.org/2000/svg",\n    viewBox: "0 0 448 512",\n    width: width\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {\n    fill: "#41455c",\n    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"\n  })));\n}\n\n//# sourceURL=webpack://frontend/./src/components/svg/Instagram.js?')}}]);
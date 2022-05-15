/*! For license information please see src_components_Screens_GeneralsConditions_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Screens_GeneralsConditions_js"],{"./src/components/Screens/GeneralsConditions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ GeneralsConditions)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");\n\n\n\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"])(theme => ({\n  general: {\n    padding: "20vh 40px 0 40px",\n    backgroundColor: "#FAFAFA",\n    [theme.breakpoints.up(\'sm\')]: {\n      display: "flex",\n      flexDirection: "column",\n      padding: "10rem 5rem",\n      marginTop: "10vh"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      padding: "10rem",\n      marginTop: "0vh"\n    }\n  },\n  h1: {\n    fontFamily: "Poppins",\n    fontWeight: "bold",\n    color: "#41455c",\n    fontSize: "1.5rem",\n    [theme.breakpoints.up(\'sm\')]: {\n      fontSize: "3rem"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      fontSize: "5rem"\n    }\n  },\n  h2: {\n    fontFamily: "Poppins",\n    fontWeight: "bold",\n    color: "#41455c",\n    fontSize: "0.8rem",\n    marginTop: "5rem",\n    [theme.breakpoints.up(\'sm\')]: {\n      fontSize: "1.2rem"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      fontSize: "2rem"\n    }\n  },\n  body1: {\n    fontFamily: "Poppins",\n    margin: "2rem 0 0 0",\n    fontSize: "0.8rem",\n    color: "#41455c",\n    lineHeight: "1rem",\n    [theme.breakpoints.up(\'sm\')]: {\n      fontSize: "0.8rem",\n      lineHeight: "1rem"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      fontSize: "0.9rem",\n      lineHeight: \'1.5rem\'\n    }\n  }\n}));\nfunction GeneralsConditions() {\n  const {\n    t,\n    i18n\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.general\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Shopisan | ", t(\'gc.title\'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h1\n  }, t(\'gc.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.update\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.site\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.url\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "( ", t(\'gc.this\'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "\\" ", t(\'gc.platform\'), " \\""), ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Shopisan", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.email\'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "mailto:info@shopisan.com"\n  }, "info@shopisan.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "( ", t(\'gc.this\'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "\\" Shopisan \\""), ")", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.application.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.application.text\'), " (", t(\'gc.this\'), "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "\\" ", t(\'gc.application.cgu\'), " \\""), ") ", t(\'gc.application.text1\'), " (", t(\'gc.this\'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "\\" ", t(\'gc.application.user\'), " \\""), ").", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.application.text3\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.application.text4\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.application.text5\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.website.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.website.a.title\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.a.text\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.a.text1\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.a.text2\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.b.title\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.b.text1\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.b.text2\'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "mailto: info@shopisan.com"\n  }, "info@shopisan.com"), " ", t(\'gc.website.b.text2bis\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.website.b.text3\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.posts.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.posts.text1\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.posts.text2\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.posts.text3\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.posts.text4\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.posts.text5\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.posts.text6\'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "mailto:info@shopisan.com"\n  }, "info@shopisan.com"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.link.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.link.text\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.link.text1\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.property.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.property.text\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.property.text1\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.property.text2\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.property.text3\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.data.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.data.text\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.data.text1\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.data.text2\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.law.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.law.text\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.law.text1\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.h2\n  }, t(\'gc.general.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: classes.body1\n  }, t(\'gc.general.text\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.general.text1\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), t(\'gc.general.text2\')));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Screens/GeneralsConditions.js?')}}]);
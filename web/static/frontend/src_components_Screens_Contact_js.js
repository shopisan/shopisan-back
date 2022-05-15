/*! For license information please see src_components_Screens_Contact_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_Screens_Contact_js"],{"./src/components/Screens/Contact.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js");\n/* harmony import */ var _Utils_FormsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/FormsUtils */ "./src/components/Utils/FormsUtils.js");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./src/i18n.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\n\n\nconst lang = _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].language;\n/**\n * @todo ici plutot regarder comment merge les deux styles\n */\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"])(theme => ({\n  brand: {\n    padding: "25vh 2.5rem 0 2.5rem",\n    backgroundColor: "#FAFAFA",\n    [theme.breakpoints.up(\'sm\')]: {\n      display: "flex",\n      flexDirection: "row",\n      padding: "10rem 5rem 0 5rem",\n      alignItems: "center",\n      marginTop: "5vh"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      padding: "15rem 7rem 0 7rem",\n      marginTop: "0vh"\n    },\n    [theme.breakpoints.up(\'lg\')]: {\n      padding: "15rem 17rem 0 17rem",\n      marginTop: "0vh"\n    },\n    [theme.breakpoints.up(\'xl\')]: {\n      padding: "10rem 30rem"\n    }\n  },\n  contact: {\n    padding: "2.5rem",\n    backgroundColor: "#FAFAFA",\n    [theme.breakpoints.up(\'sm\')]: {\n      padding: \'5rem\'\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      padding: "5rem 7rem 10rem 7rem"\n    },\n    [theme.breakpoints.up(\'lg\')]: {\n      padding: "5rem 15rem 10rem 15rem"\n    },\n    [theme.breakpoints.up(\'xl\')]: {\n      padding: "0rem 30rem 10rem 30rem"\n    }\n  },\n  root: {\n    color: \'grey\',\n    fontSize: \'0.7rem\',\n    borderRadius: \'0.5rem\',\n    padding: \'0.2rem\',\n    "&.Mui-focused": {\n      border: "1px solid #FF6565",\n      \'& .MuiOutlinedInput-notchedOutline\': {\n        border: \'1px solid #FF6565\'\n      }\n    }\n  },\n  rootArea: {\n    color: \'grey\',\n    fontSize: \'0.7rem\',\n    borderRadius: \'0.5rem\',\n    padding: \'1.2rem\',\n    "&.Mui-focused": {\n      border: " 1px solid #FF6565",\n      \'& .MuiOutlinedInput-notchedOutline\': {\n        border: \'1px solid #FF6565\'\n      }\n    }\n  },\n  h1: {\n    fontFamily: "Poppins",\n    fontWeight: "bold",\n    color: "#41455c",\n    fontSize: "2.8rem",\n    [theme.breakpoints.up(\'sm\')]: {\n      fontSize: "3rem"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      fontSize: "5rem"\n    }\n  },\n  body1: {\n    fontFamily: "Poppins",\n    margin: "2rem 0 0 0",\n    fontSize: "0.8rem",\n    color: "#41455c",\n    lineHeight: "1rem",\n    width: \'90%\',\n    [theme.breakpoints.up(\'sm\')]: {\n      width: \'100%\',\n      lineHeight: "1.2rem"\n    }\n  },\n  body2: {\n    fontFamily: "Poppins",\n    margin: "1rem 0 0.3rem 0",\n    fontSize: "0.7rem",\n    color: "#41455c",\n    lineHeight: "1rem",\n    [theme.breakpoints.up(\'sm\')]: {\n      fontSize: \'0.7rem\'\n    }\n  },\n  formControl: {\n    borderRadius: "0.5rem",\n    marginTop: "5px",\n    width: \'auto\',\n    background: "white",\n    \'&:focus\': {\n      borderColor: "#FF6565!important",\n      boxShadow: "none!important"\n    }\n  },\n  form: {\n    [theme.breakpoints.up(\'md\')]: {\n      padding: \'0 7rem\'\n    }\n  },\n  formContent: {\n    display: "flex",\n    flexDirection: \'column\',\n    [theme.breakpoints.up(\'md\')]: {\n      flexDirection: \'row\',\n      justifyContent: \'space-between\'\n    }\n  },\n  textarea: {\n    borderRadius: "0.5rem",\n    marginTop: "5px",\n    background: "white",\n    \'&:focus\': {\n      borderColor: "#FF6565!important",\n      boxShadow: "none!important"\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      width: \'250%\'\n    }\n  },\n  group: {\n    display: \'flex\',\n    flexDirection: \'column\',\n    [theme.breakpoints.up(\'md\')]: {\n      width: \'40%\'\n    }\n  },\n  submit: {\n    fontFamily: "Poppins",\n    width: "100%",\n    backgroundColor: "#FF6565",\n    border: "none",\n    borderRadius: "0.5rem",\n    padding: "1rem 0",\n    textTransform: "uppercase",\n    color: "#FFFFFF",\n    fontSize: "0.8rem",\n    fontWeight: "bold",\n    \'&:focus\': {\n      backgroundColor: "#FF6565 !important",\n      color: \'#41455c\',\n      border: \'none\',\n      outline: \'none\',\n      boxShadow: \'none\'\n    },\n    \'&:hover\': {\n      backgroundColor: "#FF6565 !important",\n      color: \'#41455c\',\n      border: \'none\',\n      outline: \'none\'\n    },\n    [theme.breakpoints.up(\'md\')]: {\n      width: \'40%\',\n      float: \'right\',\n      marginTop: \'2rem\'\n    }\n  }\n}));\nlet errors = {};\n\nfunction Alert(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({\n    elevation: 6,\n    variant: "filled"\n  }, props));\n}\n\nfunction Contact() {\n  const {\n    t,\n    i18n\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();\n  const classes = useStyles();\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [surname, setSurname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [subject, setSubject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [showSuccess, setShowSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const forceUpdate = useForceUpdate();\n  let ref = null;\n  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n\n  function useForceUpdate() {\n    return () => setValue(value => value + 1);\n  }\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    setDisabled(true);\n    console.log(ref);\n\n    if (ref.reportValidity()) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/contact/", {\n        name,\n        surname,\n        email,\n        subject,\n        message,\n        lang\n      }, {\n        "Content-Type": "application/json",\n        "Accept": "application/json"\n      }).then((response, error) => {\n        if (response.status === 201) {\n          errors = {};\n          setDisabled(true);\n          setShowSuccess(true);\n          console.log("okayyy");\n        } else {\n          errors = response.data;\n          forceUpdate();\n        }\n\n        setDisabled(false);\n      });\n    } else {\n      setDisabled(false);\n    }\n  };\n\n  function handleClose() {\n    setShowSuccess(false);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Shopisan | ", t(\'title.contact\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {\n    name: "description",\n    content: t(\'meta.contact\')\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.brand,\n    id: "contact",\n    value: value\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    variant: "h1",\n    className: classes.h1\n  }, t(\'contact.title\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    variant: "body1",\n    className: classes.body1\n  }, t(\'contact.text\')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.contact\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    className: classes.form,\n    ref: form => {\n      ref = form;\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    open: showSuccess,\n    autoHideDuration: 10000,\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Alert, {\n    onClose: handleClose,\n    severity: "success"\n  }, t(\'successC\'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.formContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {\n    className: classes.group\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {\n    className: classes.body2\n  }, t(\'contact.firstname\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({\n    className: classes.formControl,\n    placeholder: t(\'contact.firstnameLabel\'),\n    required: true,\n    variant: "outlined",\n    onChange: event => {\n      setName(event.target.value);\n    },\n    InputProps: {\n      className: classes.root\n    },\n    disabled: disabled\n  }, (0,_Utils_FormsUtils__WEBPACK_IMPORTED_MODULE_1__.getErrors)("surname", errors)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {\n    className: classes.group\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {\n    className: classes.body2\n  }, t(\'contact.lastname\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({\n    className: classes.formControl,\n    placeholder: t(\'contact.lastnameLabel\'),\n    required: true,\n    variant: "outlined",\n    onChange: event => {\n      setSurname(event.target.value);\n    },\n    InputProps: {\n      className: classes.root\n    },\n    disabled: disabled\n  }, (0,_Utils_FormsUtils__WEBPACK_IMPORTED_MODULE_1__.getErrors)("name", errors))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: classes.formContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {\n    className: classes.group\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {\n    className: classes.body2\n  }, t(\'contact.email\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({\n    className: classes.formControl,\n    id: "email",\n    type: "email",\n    placeholder: t(\'contact.emailLabel\'),\n    required: true,\n    variant: "outlined",\n    onChange: event => {\n      setEmail(event.target.value);\n    }\n  }, (0,_Utils_FormsUtils__WEBPACK_IMPORTED_MODULE_1__.getErrors)("email", errors), {\n    InputProps: {\n      className: classes.root\n    },\n    disabled: disabled\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {\n    className: classes.group\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {\n    className: classes.body2\n  }, t(\'contact.subject\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({\n    className: classes.formControl,\n    placeholder: t(\'contact.subjectLabel\'),\n    required: true,\n    variant: "outlined",\n    onChange: event => {\n      setSubject(event.target.value);\n    },\n    InputProps: {\n      className: classes.root\n    },\n    disabled: disabled\n  }, (0,_Utils_FormsUtils__WEBPACK_IMPORTED_MODULE_1__.getErrors)("subject", errors))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Group, {\n    controlId: "exampleTextFieldTextarea1",\n    className: classes.group\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Label, {\n    className: classes.body2\n  }, t(\'contact.message\')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({\n    className: classes.textarea,\n    id: "outlined-multiline-static",\n    rows: 10,\n    placeholder: t(\'contact.messageLabel\'),\n    required: true,\n    variant: "outlined",\n    multiline: true,\n    onChange: event => {\n      setMessage(event.target.value);\n    },\n    InputProps: {\n      className: classes.rootArea\n    },\n    disabled: disabled\n  }, (0,_Utils_FormsUtils__WEBPACK_IMPORTED_MODULE_1__.getErrors)("message", errors)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {\n    className: classes.submit,\n    type: "button",\n    onClick: handleSubmit\n  }, t(\'send\')))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Screens/Contact.js?')},"./src/components/Utils/FormsUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getErrors": () => (/* binding */ getErrors),\n/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail),\n/* harmony export */   "notEmpty": () => (/* binding */ notEmpty),\n/* harmony export */   "notEmptyArray": () => (/* binding */ notEmptyArray)\n/* harmony export */ });\nfunction getErrors(fieldName, errors) {\n  if (errors[fieldName] !== undefined) {\n    console.log(errors[fieldName]);\n    return {\n      error: true,\n      helperText: errors[fieldName]\n    };\n  }\n}\nfunction notEmpty(value) {\n  return value !== "";\n}\nfunction notEmptyArray(value) {\n  return value.length > 0;\n}\nfunction isValidEmail(value) {\n  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(value);\n}\n\n//# sourceURL=webpack://frontend/./src/components/Utils/FormsUtils.js?')}}]);
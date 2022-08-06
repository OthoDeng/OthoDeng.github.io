"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
exports.modules = {

/***/ "./src/pages/about.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/about.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


 // styles

const pageStyles = {
  color: "#a868a9",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#f5fffa"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "2rem"
};
const headingAccentStyles = {
  color: "#d868a9",
  fontSize: "1rem"
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#d868a9",
  padding: 4,
  backgroundColor: "#e4dcef",
  fontSize: "1rem",
  borderRadius: 4
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
};
const linkStyle = {
  color: "#d164cb",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%"
};

const docLinkStyle = _objectSpread(_objectSpread({}, linkStyle), {}, {
  listStyleType: "none",
  marginBottom: 24
});

const descriptionStyle = {
  color: "#8b78a5",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
};
const badgeStyle = {
  color: "#d868a9",
  backgroundColor: "#e4dcef",
  border: "1px solid #8b78a5",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1
};

const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("main", {
    align: "center",
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("title", null, "About Otto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", {
    style: headingStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", null, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h3", null, "Otto \u5728\u6B63\u5F0F\u7684\u573A\u5408\u4F7F\u7528\u540D\u5B57\u4E3A Otto Deng*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u76EE\u524D\u662F\u4E2A\u9AD8\u4E2D\u751F\uFF0C\u4F7F\u7528", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("code", {
    style: codeStyles
  }, "Gentoo Linux && Arch Linux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u8FD0\u52A8\uFF0C\u97F3\u4E50\u559C\u6B22\u6447\u6EDA\u4E50\u4E0E\u5DF4\u8D6B\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u5BF9\u4E8E\u4E00\u822C\u4E8B\u7269\u90FD\u4F1A\u53BB\u6D89\u730E\uFF0C\u4F46\u6700\u7EC8\u4F1A\u4E13\u6CE8\u4E8E\u81EA\u5DF1\u70ED\u7231\u7684\u8BDD\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u65F6\u5E38\u4F1A\u611F\u6168\u4FEE\u77ED\u968F\u5316\uFF0C\u56E0\u800C\u5E0C\u671B\u83AB\u4F7F\u91D1\u6A3D\u7A7A\u5BF9\u6708\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u4E5F\u5C31\u662F\u6211\u7684\u9891\u9053\u540D\u79F0\u6765\u6E90"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u8BA4\u540C\u67CF\u62C9\u56FE\u7684\u5B66\u8BF4\uFF0C\u73B0\u5728\u4FE1\u5949\u5C3C\u91C7\u4E0E\u8428\u7279\u7684\u5B66\u8BF4\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    style: headingAccentStyles
  }, "\u8054\u7CFB\u65B9\u5F0F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u4E2A\u4EBA\u90AE\u7BB1\u662F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("mail", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    style: codeStyles,
    to: "mailto:ottodeng9@gmail.com"
  }, "ottodeng9[at]gmail[dot]com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0COtto \u4F1A\u5728 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "https://t.me/OttoDeng"
  }, "Telegram"), " ", "\u4E0A\u6D3B\u8DC3\uFF0C\u4E3A\u9632\u6B62\u5783\u573E\u6D88\u606F\u8FC7\u591A\uFF0C\u56E0\u800C\u5E76\u672A\u8BBE\u7F6E\u7528\u6237\u540D\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "\u4F60\u4E5F\u4F1A\u5728\u5176\u4ED6\u5730\u65B9\u627E\u5230 Otto \uFF0C\u4E00\u822C\u4EE5", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("bold", {
    style: codeStyles
  }, "Otto the-", "<Related Suffix>"), " ", "\u7684\u65B9\u5F0F\u5448\u73B0(\u5982 Otto the-e \u6700\u4E3A\u5E38\u89C1)\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, "*\u7531\u4E8E \"OttoDeng\" \u53EF\u80FD\u4E0E\u53E6\u4ED6\u4EBA\u76F8\u6DF7\u6DC6\uFF0C\u56E0\u800C\u9664\u90AE\u7BB1\uFF08\u4EE5\u53CA\u8C37\u6B4C\u76F8\u5173\u5E10\u6237\uFF09\u5916\uFF0C Otto \u5C11\u4EE5\u6B64\u540D\u51FA\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Go home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Content on this site is licensed under", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    href: "https://creativecommons.org/licenses/by/4.0/"
  }, "CC BY 4.0"), " ", "unless specified.")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map
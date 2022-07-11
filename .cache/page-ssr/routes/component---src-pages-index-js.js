"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // styles

const pageStyles = {
  color: "#d895bc",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const headingAccentStyles = {
  color: "#d868a9"
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
const docLinkStyle = { ...linkStyle,
  listStyleType: "none",
  marginBottom: 24
};
const descriptionStyle = {
  color: "#8b78a5",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
};
const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#dfffdb"
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
}; // data

const links = [{
  text: "Repository",
  url: "https://github.com/ottoqwq",
  description: "Otto's personal GitHub repository. Contains all of Otto's work.",
  color: "#d868a9"
}, {
  text: "Posts",
  url: "https://github.com/ottoqwq/posts",
  description: "Non-daliy updates and articles written or digested by Otto."
}]; // markup

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: headingStyles
  }, "Otto's Blog", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: headingAccentStyles
  }, "\u2014\u2014\u4EBA\u751F\u5F97\u610F\u987B\u5C3D\u6B22\uFF0C\u83AB\u4F7F\u91D1\u6A3D\u7A7A\u5BF9\u6708", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: headingStyles
  }, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u6211\u662F\u4E2A\u9AD8\u4E2D\u751F\uFF0C\u4F7F\u7528", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    style: codeStyles
  }, "Gentoo Linux && Arch Linux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u53EF\u80FD\u5C11\u4F46\u4E0D\u6297\u62D2\u8FD0\u52A8\uFF0C\u97F3\u4E50\u559C\u6B22\u6447\u6EDA\u4E50\u4E0E\u5DF4\u8D6B\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u5BF9\u4E8E\u4E00\u822C\u4E8B\u7269\u90FD\u4F1A\u53BB\u6D89\u730E\uFF0C\u4F46\u6700\u7EC8\u4F1A\u4E13\u6CE8\u4E8E\u81EA\u5DF1\u70ED\u7231\u7684\u8BDD\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u65F6\u5E38\u4F1A\u611F\u6168\u4FEE\u77ED\u968F\u5316\uFF0C\u56E0\u800C\u5E0C\u671B\u83AB\u4F7F\u91D1\u6A3D\u7A7A\u5BF9\u6708\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u4E5F\u5C31\u662F\u6211\u7684\u9891\u9053\u540D\u79F0\u6765\u6E90"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u8BA4\u540C\u67CF\u62C9\u56FE\u7684\u5B66\u8BF4\uFF0C\u73B0\u5728\u4FE1\u5949\u5C3C\u91C7\u4E0E\u8428\u7279\u7684\u5B66\u8BF4\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: listStyles
  }, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: link.url,
    style: { ...listItemStyles,
      color: link.color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: linkStyle,
    href: `${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`
  }, link.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: descriptionStyle
  }, link.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Projects by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/ottoqwq"
  }, "ottoqwq"), " can be found on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/ottoqwq/ottoqwq.github.io"
  }, "GitHub")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u672C\u7AD9\u7684\uFF08\u975E\u52A0\u5BC6\uFF09\u5185\u5BB9\uFF0C\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u5747\u4F7F\u7528 CC BY 4.0 \u534F\u8BAE\u53D1\u5E03\uFF0C\u53EA\u8981\u6CE8\u660E\u6765\u6E90\u548C\u4FEE\u6539\u90E8\u5206\uFF0C\u5E76\u4E14\u4E0D\u65BD\u52A0\u989D\u5916\u7684\u9650\u5236\uFF0C\u53EF\u4EE5\u5C06\u5185\u5BB9\u5206\u4EAB\u5230\u4EFB\u4F55\u5730\u65B9\uFF0C\u8BE6\u60C5\u8BF7\u89C1 Creative Commons \u7F51\u7AD9\u7684\u8BF4\u660E\u3002")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map
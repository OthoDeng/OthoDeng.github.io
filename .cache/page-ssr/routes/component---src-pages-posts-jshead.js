"use strict";
exports.id = "component---src-pages-posts-jshead";
exports.ids = ["component---src-pages-posts-jshead"];
exports.modules = {

/***/ "./src/pages/posts.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/posts.js?export=head ***!
  \****************************************/
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
  color: "#c868a9",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
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
  color: "#F2ABBD",
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
}; // data

const links = [{
  text: "Hello New World",
  url: "/blog/2022-7-18-hello-new-world",
  date: "2022/7/18",
  brief: "Of rebuilding my site"
}, {
  text: "关于诗歌鉴赏一些笔记",
  url: "/blog/2022-7-17-of-poetry",
  date: "2022/7/17",
  brief: "柳暗花明又一村"
}]; // components

const Posts = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("title", null, "Otto's Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {
    style: listStyles
  }, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
    key: link.url,
    style: _objectSpread(_objectSpread({}, listItemStyles), {}, {
      color: link.color
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    style: linkStyle,
    href: `${link.url}`
  }, link.text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: descriptionStyle
  }, link.brief), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, link.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {
    style: descriptionStyle
  }, link.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Go Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Projects by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    href: "https://github.com/ottoqwq"
  }, " Otto Deng"), ". Powered by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    href: "https://www.gatsbyjs.com/"
  }, "Gatsby")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Content on this site is licensed under", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", {
    href: "https://creativecommons.org/licenses/by/4.0/"
  }, "CC BY 4.0"), " ", "unless specified.")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-posts-jshead.js.map
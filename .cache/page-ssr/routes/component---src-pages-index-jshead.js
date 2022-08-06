"use strict";
exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // styles

const pageStyles = {
  color: "#F2ABBD",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "2rem"
};
const headingAccentStyles = {
  color: "#DA697D",
  fontSize: "0.75rem"
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
  marginBottom: 30
};
const linkStyle = {
  color: "#ce94ae",
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
  text: "About Me",
  url: "about",
  description: "Otto's profile page"
}, {
  text: "Posts",
  url: "posts",
  description: "Non-daliy updates and articles written or digested by Otto."
}, {
  text: "Repository",
  url: "https://github.com/ottoqwq",
  description: "Otto's personal GitHub repository. Contains all of Otto's work."
}, {
  text: "Channel",
  url: "https://t.me/otttos_daily",
  description: "Otto's Telegram channel"
}]; // markup

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", {
    align: "center",
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, "Otto's Blog | OttoDeng"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    style: headingStyles
  }, "Otto's Blog", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    style: headingAccentStyles
  }, "\u2014\u2014\u4EBA\u751F\u5F97\u610F\u987B\u5C3D\u6B22\uFF0C\u83AB\u4F7F\u91D1\u6A3D\u7A7A\u5BF9\u6708", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    style: listStyles
  }, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    key: link.url,
    style: _objectSpread(_objectSpread({}, listItemStyles), {}, {
      color: link.color
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    style: linkStyle,
    href: `${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`
  }, link.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    style: descriptionStyle
  }, link.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Projects by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://github.com/ottoqwq"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("hi", {
    style: codeStyles
  }, "Otto Deng")), ". Powered by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://www.gatsbyjs.com/"
  }, "Gatsby")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Content on this site is licensed under", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://creativecommons.org/licenses/by/4.0/"
  }, "CC BY 4.0"), " ", "unless specified.")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map
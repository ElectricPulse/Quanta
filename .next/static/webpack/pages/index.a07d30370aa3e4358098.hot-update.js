self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticleShowcases/Main/Article.tsx":
/*!******************************************************!*\
  !*** ./components/ArticleShowcases/Main/Article.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Main/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Main\\Article.tsx",
    _this = undefined;





var Article = function Article(_ref) {
  var article = _ref.article,
      aspectRatio = _ref.aspectRatio;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: article.url,
    className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().article),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: article.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__.default, {
      imageName: article.imageName,
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
      aspectRatio: aspectRatio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = Article;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c;

$RefreshReg$(_c, "Article");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/ArticleShowcases/Main/Main.tsx":
/*!***************************************************!*\
  !*** ./components/ArticleShowcases/Main/Main.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main.module.scss */ "./components/ArticleShowcases/Main/Main.module.scss");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ "./components/ArticleShowcases/Main/Article.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Main\\Main.tsx",
    _this = undefined;




var articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}];

var Main = function Main(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_Main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().grid),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
      article: articles[0],
      aspectRatio: '3/2'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_Main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subgrid)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[4]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArticleShowcases/Main/Main */ "./components/ArticleShowcases/Main/Main.tsx");
/* harmony import */ var _components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleShowcases/Categories/Categories */ "./components/ArticleShowcases/Categories/Categories.tsx");
/* harmony import */ var _components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleShowcases/Grid/Grid */ "./components/ArticleShowcases/Grid/Grid.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\pages\\index.tsx",
    _this = undefined;








_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.fas, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSearch, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPhoneAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGripHorizontal);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.fab, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTwitter, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFacebook);

var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/ArticleShowcases/Main/Article.module.scss":
/*!**************************************************************!*\
  !*** ./components/ArticleShowcases/Main/Article.module.scss ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Article.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Article.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Article.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/ArticleShowcases/Main/Main.module.scss":
/*!***********************************************************!*\
  !*** ./components/ArticleShowcases/Main/Main.module.scss ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Main.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Main.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Main.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Main.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Main.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Main.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Article.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Article.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Article_article__JQFMZ {\n  position: relative;\n}\n.Article_article__JQFMZ:hover .Article_image__163sm {\n  filter: brightness(40%);\n  -webkit-transform: scale(1.08);\n     -moz-transform: scale(1.08);\n          transform: scale(1.08);\n}\n\n.Article_image__163sm {\n  filter: brightness(50%);\n  z-index: -1;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n  transition: all ease 0.5s;\n}\n\n.Article_details__10Mel {\n  position: absolute;\n  inset: auto auto 4% 4%;\n  color: white;\n  font-size: 1.9rem;\n}", "",{"version":3,"sources":["webpack://Article.module.scss","webpack://../../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;AADF;AAGE;EACE,uBAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AADJ;;AAKA;EACE,uBAAA;EACA,WAAA;EAEA,iCAAA;EAAA,8BAAA;EAAA,yBAAA;AAHF;;AAMA;EACE,kBAAA;EAEA,sBAAA;EAEA,YCdY;EDeZ,iBAAA;AALF","sourcesContent":["@import '../../../styles/variables';\r\n\r\n.article {\r\n  position: relative;\r\n\r\n  &:hover .image {\r\n    filter: brightness(40%);\r\n    transform: scale(1.08);\r\n  }\r\n}\r\n\r\n.image {\r\n  filter: brightness(50%);\r\n  z-index: -1;\r\n\r\n  transition: all ease 0.5s;\r\n}\r\n\r\n.details {\r\n  position: absolute;\r\n  $inset: 4%;\r\n  inset: auto auto $inset $inset;\r\n\r\n  color: $color-white;\r\n  font-size: 1.9rem;\r\n}\r\n","////////////////\r\n/// Colors\r\n////////////////\r\n\r\n$color-primary: rgb(34, 34, 34);\r\n$color-secondary: red;\r\n\r\n$color-grey-1: rgb(223, 223, 223);\r\n$color-grey-2: rgb(232, 232, 232);\r\n$color-white: white;\r\n$color-black: black;\r\n$color-blue-1: rgb(77, 178, 236);\r\n$color-blue-2: rgb(149, 170, 191);\r\n\r\n$color-link-hover: blue;\r\n\r\n////////////////\r\n/// Breakpoints\r\n////////////////\r\n\r\n$bp-1: 1600px;\r\n$bp-2: 1300px;\r\n$bp-3: 1100px;\r\n$bp-4: 900px;\r\n$bp-5: 700px;\r\n\r\n$bp-image-large: 500px;\r\n\r\n////////////////\r\n/// Mixins\r\n////////////////\r\n\r\n@mixin screen($breakpoint: '') {\r\n  @media only screen and (max-width: $breakpoint) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article": "Article_article__JQFMZ",
	"image": "Article_image__163sm",
	"details": "Article_details__10Mel"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Main.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Main/Main.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Main_grid__Fzgge {\n  display: -moz-box;\n  display: flex;\n  flex-wrap: wrap;\n  grid-gap: 20px;\n  gap: 20px;\n}\n.Main_grid__Fzgge > * {\n  flex-basis: -moz-calc((500px - 100%) * 999);\n  flex-basis: calc((500px - 100%) * 999);\n  -moz-box-flex: 1;\n       flex-grow: 1;\n}\n\n.Main_subgrid__2-CrD {\n  grid-gap: inherit;\n  gap: inherit;\n  display: grid;\n  grid-template: repeat(2, 1fr)/repeat(2, 1fr);\n}", "",{"version":3,"sources":["webpack://Main.module.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EAAA,aAAA;EACA,eAAA;EACA,cAAA;EAAA,SAAA;AADF;AAGE;EACE,2CAAA;EAAA,sCAAA;EACA,gBAAA;OAAA,YAAA;AADJ;;AAKA;EACE,iBAAA;EAAA,YAAA;EACA,aAAA;EACA,4CAAA;AAFF","sourcesContent":["@import '../../../styles/variables';\r\n\r\n.grid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n\r\n  & > * {\r\n    flex-basis: calc((#{$bp-image-large} - 100%) * 999);\r\n    flex-grow: 1;\r\n  }\r\n}\r\n\r\n.subgrid {\r\n  gap: inherit;\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(2, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grid": "Main_grid__Fzgge",
	"subgrid": "Main_subgrid__2-CrD"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW4vQXJ0aWNsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluL01haW4udHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluL0FydGljbGUubW9kdWxlLnNjc3M/MDhkNiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW4vTWFpbi5tb2R1bGUuc2Nzcz85YzAyIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbi9BcnRpY2xlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbi9NYWluLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkFydGljbGUiLCJhcnRpY2xlIiwiYXNwZWN0UmF0aW8iLCJ1cmwiLCJzdHlsZXMiLCJ0aXRsZSIsImltYWdlTmFtZSIsImFydGljbGVzIiwiTWFpbiIsInByb3BzIiwibGlicmFyeSIsImZhcyIsImZhU2VhcmNoIiwiZmFQaG9uZUFsdCIsImZhQXQiLCJmYUdyaXBIb3Jpem9udGFsIiwiZmFiIiwiZmFUd2l0dGVyIiwiZmFGYWNlYm9vayIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQWFBLElBQU1BLE9BQXdCLEdBQUcsU0FBM0JBLE9BQTJCLE9BQThCO0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDN0Qsc0JBQ0U7QUFBRyxRQUFJLEVBQUVELE9BQU8sQ0FBQ0UsR0FBakI7QUFBc0IsYUFBUyxFQUFF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a0IseUJBQXlCLGlCQUFpQixxQ0FBcUMsOEJBQThCLHdCQUF3QixLQUFLLGlHQUFpRywwQkFBMEIsMENBQTBDLHNDQUFzQyx3QkFBd0Isd0JBQXdCLHFDQUFxQyxzQ0FBc0MsZ0NBQWdDLHFGQUFxRixrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsK0JBQStCLGtHQUFrRyx1REFBdUQsaUJBQWlCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcGtFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw2REFBNkQsc0JBQXNCLGtCQUFrQixvQkFBb0IsbUJBQW1CLGNBQWMsR0FBRyx5QkFBeUIsZ0RBQWdELDJDQUEyQyxxQkFBcUIsc0JBQXNCLEdBQUcsMEJBQTBCLHNCQUFzQixpQkFBaUIsa0JBQWtCLGlEQUFpRCxHQUFHLE9BQU8saUZBQWlGLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyw2REFBNkQsZUFBZSxvQkFBb0Isc0JBQXNCLGdCQUFnQixpQkFBaUIsNEJBQTRCLGdCQUFnQixnQkFBZ0IscUJBQXFCLE9BQU8sS0FBSyxrQkFBa0IsbUJBQW1CLG9CQUFvQixxREFBcUQsS0FBSyx1QkFBdUI7QUFDempDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMDdkMzAzNzBhYTNlNDM1ODA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZS5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBFeHRlcm5hbEltYWdlIGZyb20gJy4uLy4uL1VJL0V4dGVybmFsSW1hZ2UnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFydGljbGUge1xyXG4gIGltYWdlTmFtZTogc3RyaW5nXHJcbiAgdXJsOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXJ0aWNsZTogQXJ0aWNsZVxyXG4gIGFzcGVjdFJhdGlvPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFydGljbGUsIGFzcGVjdFJhdGlvIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj17YXJ0aWNsZS51cmx9IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgIDxoMj57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEV4dGVybmFsSW1hZ2VcclxuICAgICAgICBpbWFnZU5hbWU9e2FydGljbGUuaW1hZ2VOYW1lfVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxyXG4gICAgICAgIGFzcGVjdFJhdGlvPXthc3BlY3RSYXRpb31cclxuICAgICAgLz5cclxuICAgIDwvYT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFpbi5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBBcnRpY2xlLCB7IEFydGljbGUgYXMgQXJ0aWNsZVR5cGUgfSBmcm9tICcuL0FydGljbGUnXHJcblxyXG50eXBlIFR1cGxlT2Y8VCwgTiBleHRlbmRzIG51bWJlcj4gPSBOIGV4dGVuZHMgTiA/IG51bWJlciBleHRlbmRzIE4gPyBUW106IF9UdXBsZU9mPFQsIE4sIFtdPjogbmV2ZXI7XHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXJ0aWNsZXM6IFs0LCBBcnRpY2xlVHlwZV1cclxufVxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1swXX0gYXNwZWN0UmF0aW89eyczLzInfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YmdyaWR9YH0+XHJcbiAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZXNbMV19IC8+XHJcbiAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZXNbMl19IC8+XHJcbiAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZXNbM119IC8+XHJcbiAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZXNbNF19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFzLCBmYVBob25lQWx0LCBmYUF0LCBmYUdyaXBIb3Jpem9udGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYWIsIGZhVHdpdHRlciwgZmFGYWNlYm9vayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcblxyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbi9NYWluJ1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9HcmlkJ1xyXG5cclxubGlicmFyeS5hZGQoZmFzLCBmYVNlYXJjaCwgZmFQaG9uZUFsdCwgZmFBdCwgZmFHcmlwSG9yaXpvbnRhbClcclxubGlicmFyeS5hZGQoZmFiLCBmYVR3aXR0ZXIsIGZhRmFjZWJvb2spXHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW4gLz5cclxuICAgICAgPENhdGVnb3JpZXMgLz5cclxuICAgICAgPEdyaWQgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL01haW4ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9NYWluLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL01haW4ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFydGljbGVfYXJ0aWNsZV9fSlFGTVoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uQXJ0aWNsZV9hcnRpY2xlX19KUUZNWjpob3ZlciAuQXJ0aWNsZV9pbWFnZV9fMTYzc20ge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxufVxcblxcbi5BcnRpY2xlX2ltYWdlX18xNjNzbSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcXG59XFxuXFxuLkFydGljbGVfZGV0YWlsc19fMTBNZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IGF1dG8gYXV0byA0JSA0JTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBQTtBQURGO0FBR0U7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0tBQUEsMkJBQUE7VUFBQSxzQkFBQTtBQURKOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBRUEsaUNBQUE7RUFBQSw4QkFBQTtFQUFBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUVBLHNCQUFBO0VBRUEsWUNkWTtFRGVaLGlCQUFBO0FBTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuLmFydGljbGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgJjpob3ZlciAuaW1hZ2Uge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAkaW5zZXQ6IDQlO1xcclxcbiAgaW5zZXQ6IGF1dG8gYXV0byAkaW5zZXQgJGluc2V0O1xcclxcblxcclxcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcclxcbn1cXHJcXG5cIixcIi8vLy8vLy8vLy8vLy8vLy9cXHJcXG4vLy8gQ29sb3JzXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcblxcclxcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogcmVkO1xcclxcblxcclxcbiRjb2xvci1ncmV5LTE6IHJnYigyMjMsIDIyMywgMjIzKTtcXHJcXG4kY29sb3ItZ3JleS0yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcXHJcXG4kY29sb3ItYmxhY2s6IGJsYWNrO1xcclxcbiRjb2xvci1ibHVlLTE6IHJnYig3NywgMTc4LCAyMzYpO1xcclxcbiRjb2xvci1ibHVlLTI6IHJnYigxNDksIDE3MCwgMTkxKTtcXHJcXG5cXHJcXG4kY29sb3ItbGluay1ob3ZlcjogYmx1ZTtcXHJcXG5cXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuLy8vIEJyZWFrcG9pbnRzXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcblxcclxcbiRicC0xOiAxNjAwcHg7XFxyXFxuJGJwLTI6IDEzMDBweDtcXHJcXG4kYnAtMzogMTEwMHB4O1xcclxcbiRicC00OiA5MDBweDtcXHJcXG4kYnAtNTogNzAwcHg7XFxyXFxuXFxyXFxuJGJwLWltYWdlLWxhcmdlOiA1MDBweDtcXHJcXG5cXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuLy8vIE1peGluc1xcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG5cXHJcXG5AbWl4aW4gc2NyZWVuKCRicmVha3BvaW50OiAnJykge1xcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYXJ0aWNsZVwiOiBcIkFydGljbGVfYXJ0aWNsZV9fSlFGTVpcIixcblx0XCJpbWFnZVwiOiBcIkFydGljbGVfaW1hZ2VfXzE2M3NtXCIsXG5cdFwiZGV0YWlsc1wiOiBcIkFydGljbGVfZGV0YWlsc19fMTBNZWxcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTWFpbl9ncmlkX19GemdnZSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuLk1haW5fZ3JpZF9fRnpnZ2UgPiAqIHtcXG4gIGZsZXgtYmFzaXM6IC1tb3otY2FsYygoNTAwcHggLSAxMDAlKSAqIDk5OSk7XFxuICBmbGV4LWJhc2lzOiBjYWxjKCg1MDBweCAtIDEwMCUpICogOTk5KTtcXG4gIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLk1haW5fc3ViZ3JpZF9fMi1DckQge1xcbiAgZ3JpZC1nYXA6IGluaGVyaXQ7XFxuICBnYXA6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikvcmVwZWF0KDIsIDFmcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9NYWluLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBREY7QUFHRTtFQUNFLDJDQUFBO0VBQUEsc0NBQUE7RUFDQSxnQkFBQTtPQUFBLFlBQUE7QUFESjs7QUFLQTtFQUNFLGlCQUFBO0VBQUEsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtBQUZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAmID4gKiB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IGNhbGMoKCN7JGJwLWltYWdlLWxhcmdlfSAtIDEwMCUpICogOTk5KTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3ViZ3JpZCB7XFxyXFxuICBnYXA6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZ3JpZFwiOiBcIk1haW5fZ3JpZF9fRnpnZ2VcIixcblx0XCJzdWJncmlkXCI6IFwiTWFpbl9zdWJncmlkX18yLUNyRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=
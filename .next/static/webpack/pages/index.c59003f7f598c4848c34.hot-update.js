self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./components/ArticleShowcases/Categories/Article.tsx":
/*!************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Article.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Categories/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Categories\\Article.tsx",
    _this = undefined;





var Article = function Article(_ref) {
  var title = _ref.title,
      imageName = _ref.imageName,
      url = _ref.url;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().article),
      href: url,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__.default, {
        aspectRatio: '4 / 3',
        imageName: imageName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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

/***/ "./components/ArticleShowcases/Categories/Categories.tsx":
/*!***************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Categories.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Categories_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories.module.scss */ "./components/ArticleShowcases/Categories/Categories.module.scss");
/* harmony import */ var _Categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Categories_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./components/ArticleShowcases/Categories/Category.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Categories\\Categories.tsx",
    _this = undefined;




var articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Preco ceny telefonov stale neustupaju'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title2'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title3'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Novy rychlotest na koronavirus od spolocnosti Bosch prinase spolahilve vysledky uz za 39 minut joj to je rychlo wow strasne dlhe je toto'
}];

var Categories = function Categories() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_Categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default().categories),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: 'Quanta BLACK',
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: 'Quanta WHITE',
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: 'Quanta SMART',
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_c = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c;

$RefreshReg$(_c, "Categories");

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

/***/ "./components/ArticleShowcases/Categories/Category.tsx":
/*!*************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Category.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article */ "./components/ArticleShowcases/Categories/Article.tsx");
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Category.module.scss */ "./components/ArticleShowcases/Categories/Category.module.scss");
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Category_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Highlighted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../UI/Highlighted */ "./components/UI/Highlighted.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Categories\\Category.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Category = function Category(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "".concat((_Category_module_scss__WEBPACK_IMPORTED_MODULE_5___default().category), " ").concat(props.className && props.className),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
      className: (_Category_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_Highlighted__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      className: "".concat(props.className, " ").concat((_Category_module_scss__WEBPACK_IMPORTED_MODULE_5___default().list)),
      children: props.articles.map(function (article) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, article), article.title, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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

/***/ "./components/ArticleShowcases/Grid/Article.tsx":
/*!******************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Article.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Grid/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Grid\\Article.tsx",
    _this = undefined;





var Article = function Article(_ref) {
  var title = _ref.title,
      url = _ref.url,
      imageName = _ref.imageName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: url,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["image-container"]),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__.default, {
          aspectRatio: "1 / 1",
          imageName: imageName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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

/***/ "./components/ArticleShowcases/Grid/Grid.tsx":
/*!***************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Grid.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article */ "./components/ArticleShowcases/Grid/Article.tsx");
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grid.module.scss */ "./components/ArticleShowcases/Grid/Grid.module.scss");
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Grid\\Grid.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title1'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title2'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title3'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title4'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title5'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title6'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title7'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title8'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title9'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title10'
}];

var Grid = function Grid() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: ["Novinky z ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: 'https://www.startstop.sk/',
        children: "STARTSTOP.sk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().grid),
      children: articles.map(function (article) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, article), article.title, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_c = Grid;
/* harmony default export */ __webpack_exports__["default"] = (Grid);

var _c;

$RefreshReg$(_c, "Grid");

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

/***/ "./components/UI/Highlighted.tsx":
/*!***************************************!*\
  !*** ./components/UI/Highlighted.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Highlighted.module.scss */ "./components/UI/Highlighted.module.scss");
/* harmony import */ var _Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\Highlighted.tsx",
    _this = undefined;




var Hightlighted = function Hightlighted(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mark", {
    className: props.inverse ? (_Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inverse) : (_Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2___default().normal),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = Hightlighted;
/* harmony default export */ __webpack_exports__["default"] = (Hightlighted);

var _c;

$RefreshReg$(_c, "Hightlighted");

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
var article = {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
};

var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3__.default, {
      articles: Array(5).fill(article)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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

/***/ "./components/ArticleShowcases/Categories/Article.module.scss":
/*!********************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Article.module.scss ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Article.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Article.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Article.module.scss");

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

/***/ "./components/ArticleShowcases/Categories/Categories.module.scss":
/*!***********************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Categories.module.scss ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Categories.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Categories.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Categories.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Categories.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Categories.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Categories.module.scss");

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

/***/ "./components/ArticleShowcases/Categories/Category.module.scss":
/*!*********************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Category.module.scss ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Category.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Category.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Category.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Category.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Category.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Category.module.scss");

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

/***/ "./components/ArticleShowcases/Grid/Article.module.scss":
/*!**************************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Article.module.scss ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Article.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Article.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Article.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Article.module.scss");

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

/***/ "./components/ArticleShowcases/Grid/Grid.module.scss":
/*!***********************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Grid.module.scss ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Grid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Grid.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Grid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Grid.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Grid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Grid.module.scss");

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

/***/ "./components/UI/Highlighted.module.scss":
/*!***********************************************!*\
  !*** ./components/UI/Highlighted.module.scss ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Highlighted.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/UI/Highlighted.module.scss");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Highlighted.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/UI/Highlighted.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./Highlighted.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/UI/Highlighted.module.scss");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Article.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Article.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Article_article__3fIgI {\n  display: -moz-box;\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n  height: 100%;\n}\n\n.Article_image-container__3PnpZ {\n  position: relative;\n  height: 100%;\n  aspect-ratio: 4/3;\n}", "",{"version":3,"sources":["webpack://Article.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EAAA,aAAA;EACA,cAAA;EAAA,SAAA;EAEA,YAAA;AAAF;;AAGA;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;AAAF","sourcesContent":[".article {\r\n  display: flex;\r\n  gap: 1rem;\r\n\r\n  height: 100%;\r\n}\r\n\r\n.image-container {\r\n  position: relative;\r\n  height: 100%;\r\n  aspect-ratio: 4 / 3;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article": "Article_article__3fIgI",
	"image-container": "Article_image-container__3PnpZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Categories.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Categories.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Categories_categories__1804x {\n  display: -moz-box;\n  display: flex;\n}\n@media only screen and (max-width: 700px) {\n  .Categories_categories__1804x {\n    -moz-box-orient: vertical;\n    -moz-box-direction: normal;\n         flex-direction: column;\n  }\n}\n.Categories_categories__1804x > *:nth-child(odd) {\n  background-color: #95aabf;\n}", "",{"version":3,"sources":["webpack://Categories.module.scss","webpack://../../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EAAA,aAAA;AADF;AC+BE;ED/BF;IAII,yBAAA;IAAA,0BAAA;SAAA,sBAAA;EAAF;AACF;AAEE;EACE,yBCEW;ADFf","sourcesContent":["@import '../../../styles/variables';\r\n\r\n.categories {\r\n  display: flex;\r\n\r\n  @include screen($bp-5) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  & > *:nth-child(odd) {\r\n    background-color: $color-blue-2;\r\n  }\r\n}\r\n","////////////////\r\n/// Colors\r\n////////////////\r\n\r\n$color-primary: rgb(34, 34, 34);\r\n$color-secondary: red;\r\n\r\n$color-grey-1: rgb(223, 223, 223);\r\n$color-grey-2: rgb(232, 232, 232);\r\n$color-white: white;\r\n$color-black: black;\r\n$color-blue-1: rgb(77, 178, 236);\r\n$color-blue-2: rgb(149, 170, 191);\r\n\r\n$color-link-hover: blue;\r\n\r\n////////////////\r\n/// Breakpoints\r\n////////////////\r\n\r\n$bp-1: 1600px;\r\n$bp-2: 1300px;\r\n$bp-3: 1100px;\r\n$bp-4: 900px;\r\n$bp-5: 700px;\r\n\r\n$bp-image-large: 500px;\r\n\r\n////////////////\r\n/// Mixins\r\n////////////////\r\n\r\n@mixin screen($breakpoint: '') {\r\n  @media only screen and (max-width: $breakpoint) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"categories": "Categories_categories__1804x"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Category.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Categories/Category.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Category_list__2hWO8 {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  grid-gap: 2rem;\n  gap: 2rem;\n  height: 100%;\n}\n.Category_list__2hWO8 > * {\n  -moz-box-flex: 1;\n       flex: 1 1;\n}\n\n.Category_category__3Q7RZ {\n  height: 75vh;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  grid-gap: 2rem;\n  gap: 2rem;\n  padding: 1.8rem;\n}\n\n.Category_title__1PCkc {\n  font-size: 1.4rem;\n}", "",{"version":3,"sources":["webpack://Category.module.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,cAAA;EAAA,SAAA;EACA,YAAA;AACF;AACE;EACE,gBAAA;OAAA,SAAA;AACJ;;AAGA;EACE,YAAA;EACA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,cAAA;EAAA,SAAA;EACA,eAAA;AAAF;;AAGA;EACE,iBAAA;AAAF","sourcesContent":[".list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  height: 100%;\r\n\r\n  & > * {\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n.category {\r\n  height: 75vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  padding: 1.8rem;\r\n}\r\n\r\n.title {\r\n  font-size: 1.4rem;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"list": "Category_list__2hWO8",
	"category": "Category_category__3Q7RZ",
	"title": "Category_title__1PCkc"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Article.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Article.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Article_image-container__33RHB {\n  position: relative;\n  aspect-ratio: 1/1;\n}", "",{"version":3,"sources":["webpack://Article.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,iBAAA;AACF","sourcesContent":[".image-container {\r\n  position: relative;\r\n  aspect-ratio: 1 / 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"image-container": "Article_image-container__33RHB"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Grid.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/Grid/Grid.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Grid_section___sLsn {\n  padding: 1.8rem 2rem 6rem 2rem;\n  background-color: #e8e8e8;\n  display: -moz-box;\n  display: flex;\n  grid-gap: 2rem;\n  gap: 2rem;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n}\n\n.Grid_grid__2Y_cJ {\n  grid-gap: 5rem;\n  gap: 5rem;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  display: grid;\n}\n\n.Grid_title__3HOio {\n  font-size: 2.5rem;\n  font-weight: 400;\n}\n.Grid_title__3HOio a {\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.Grid_title__3HOio a:hover {\n  color: blue;\n}", "",{"version":3,"sources":["webpack://Grid.module.scss","webpack://../../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,8BAAA;EACA,yBCIa;EDHb,iBAAA;EAAA,aAAA;EACA,cAAA;EAAA,SAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AADF;;AAIA;EACE,cAAA;EAAA,SAAA;EAEA,2DAAA;EAEA,aAAA;AAHF;;AAMA;EACE,iBAAA;EACA,gBAAA;AAHF;AAIE;EACE,4BAAA;EAAA,yBAAA;EAAA,oBAAA;AAFJ;AAIE;EACE,WCXe;ADSnB","sourcesContent":["@import '../../../styles/variables';\r\n\r\n.section {\r\n  padding: 1.8rem 2rem 6rem 2rem;\r\n  background-color: $color-grey-2;\r\n  display: flex;\r\n  gap: 2rem;\r\n  flex-direction: column;\r\n}\r\n\r\n.grid {\r\n  gap: 5rem;\r\n\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n\r\n  display: grid;\r\n}\r\n\r\n.title {\r\n  font-size: 2.5rem;\r\n  font-weight: 400;\r\n  a {\r\n    transition: all 0.2s;\r\n  }\r\n  a:hover {\r\n    color: $color-link-hover;\r\n  }\r\n}\r\n","////////////////\r\n/// Colors\r\n////////////////\r\n\r\n$color-primary: rgb(34, 34, 34);\r\n$color-secondary: red;\r\n\r\n$color-grey-1: rgb(223, 223, 223);\r\n$color-grey-2: rgb(232, 232, 232);\r\n$color-white: white;\r\n$color-black: black;\r\n$color-blue-1: rgb(77, 178, 236);\r\n$color-blue-2: rgb(149, 170, 191);\r\n\r\n$color-link-hover: blue;\r\n\r\n////////////////\r\n/// Breakpoints\r\n////////////////\r\n\r\n$bp-1: 1600px;\r\n$bp-2: 1300px;\r\n$bp-3: 1100px;\r\n$bp-4: 900px;\r\n$bp-5: 700px;\r\n\r\n$bp-image-large: 500px;\r\n\r\n////////////////\r\n/// Mixins\r\n////////////////\r\n\r\n@mixin screen($breakpoint: '') {\r\n  @media only screen and (max-width: $breakpoint) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": "Grid_section___sLsn",
	"grid": "Grid_grid__2Y_cJ",
	"title": "Grid_title__3HOio"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/UI/Highlighted.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/UI/Highlighted.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Highlighted_inverse__32VQw {\n  color: #222222;\n  background-color: white;\n}\n\n.Highlighted_normal__eECD2 {\n  color: white;\n  background-color: #222222;\n}\n\n.Highlighted_normal__eECD2,\n.Highlighted_inverse__32VQw {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://Highlighted.module.scss","webpack://../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,cCCc;EDCd,uBCIY;ADNd;;AAKA;EACE,YAAA;EAEA,yBCPc;ADIhB;;AAMA;;EAEE,oBAAA;EACA,kBAAA;AAHF","sourcesContent":["@import '../../styles/variables';\r\n\r\n.inverse {\r\n  color: $color-primary;\r\n\r\n  background-color: $color-white;\r\n}\r\n\r\n.normal {\r\n  color: $color-white;\r\n\r\n  background-color: $color-primary;\r\n}\r\n\r\n.normal,\r\n.inverse{\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n}\r\n","////////////////\r\n/// Colors\r\n////////////////\r\n\r\n$color-primary: rgb(34, 34, 34);\r\n$color-secondary: red;\r\n\r\n$color-grey-1: rgb(223, 223, 223);\r\n$color-grey-2: rgb(232, 232, 232);\r\n$color-white: white;\r\n$color-black: black;\r\n$color-blue-1: rgb(77, 178, 236);\r\n$color-blue-2: rgb(149, 170, 191);\r\n\r\n$color-link-hover: blue;\r\n\r\n////////////////\r\n/// Breakpoints\r\n////////////////\r\n\r\n$bp-1: 1600px;\r\n$bp-2: 1300px;\r\n$bp-3: 1100px;\r\n$bp-4: 900px;\r\n$bp-5: 700px;\r\n\r\n$bp-image-large: 500px;\r\n\r\n////////////////\r\n/// Mixins\r\n////////////////\r\n\r\n@mixin screen($breakpoint: '') {\r\n  @media only screen and (max-width: $breakpoint) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"inverse": "Highlighted_inverse__32VQw",
	"normal": "Highlighted_normal__eECD2"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvQ2F0ZWdvcmllcy9BcnRpY2xlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0dyaWQvQXJ0aWNsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9HcmlkL0dyaWQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VJL0hpZ2hsaWdodGVkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvQ2F0ZWdvcmllcy9BcnRpY2xlLm1vZHVsZS5zY3NzP2NkOWEiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMubW9kdWxlLnNjc3M/MmFlNyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0NhdGVnb3JpZXMvQ2F0ZWdvcnkubW9kdWxlLnNjc3M/MzQwNSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0dyaWQvQXJ0aWNsZS5tb2R1bGUuc2Nzcz9jMWExIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9HcmlkLm1vZHVsZS5zY3NzP2E2ZTgiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVUkvSGlnaGxpZ2h0ZWQubW9kdWxlLnNjc3M/NzcyZiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0NhdGVnb3JpZXMvQXJ0aWNsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0NhdGVnb3JpZXMvQ2F0ZWdvcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9HcmlkL0FydGljbGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9HcmlkL0dyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVUkvSGlnaGxpZ2h0ZWQubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiQXJ0aWNsZSIsInRpdGxlIiwiaW1hZ2VOYW1lIiwidXJsIiwic3R5bGVzIiwiYXJ0aWNsZXMiLCJDYXRlZ29yaWVzIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm5hbWUiLCJtYXAiLCJhcnRpY2xlIiwiR3JpZCIsIkhpZ2h0bGlnaHRlZCIsImludmVyc2UiLCJjaGlsZHJlbiIsImxpYnJhcnkiLCJmYXMiLCJmYVNlYXJjaCIsImZhUGhvbmVBbHQiLCJmYUF0IiwiZmFHcmlwSG9yaXpvbnRhbCIsImZhYiIsImZhVHdpdHRlciIsImZhRmFjZWJvb2siLCJIb21lIiwiQXJyYXkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBOztBQVFBLElBQU1BLE9BQXdCLEdBQUcsU0FBM0JBLE9BQTJCLE9BQStCO0FBQUEsTUFBNUJDLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxTQUFxQixRQUFyQkEsU0FBcUI7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDOUQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUMscUVBQWQ7QUFBOEIsVUFBSSxFQUFFRCxHQUFwQztBQUFBLDhCQUNJLDhEQUFDLHNEQUFEO0FBQWUsbUJBQVcsRUFBRSxPQUE1QjtBQUFxQyxpQkFBUyxFQUFFRDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFHRTtBQUFBLGtCQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZEOztLQUFNRCxPO0FBWU4sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUVBO0FBRUEsSUFBTUssUUFBUSxHQUFHLENBQ2Y7QUFDRUgsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQURlLEVBTWY7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQU5lLEVBV2Y7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQVhlLEVBZ0JmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0FoQmUsQ0FBakI7O0FBdUJBLElBQU1LLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFDakMsc0JBQ0U7QUFBUyxhQUFTLEVBQUVGLDJFQUFwQjtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVUsVUFBSSxFQUFFLGNBQWhCO0FBQWdDLGNBQVEsRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsOENBQUQ7QUFBVSxVQUFJLEVBQUUsY0FBaEI7QUFBaUMsY0FBUSxFQUFFQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyw4Q0FBRDtBQUFVLFVBQUksRUFBRSxjQUFoQjtBQUFpQyxjQUFRLEVBQUVBO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1DLFU7QUFVTiwrREFBZUEsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUMsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNDLHNCQUNFO0FBQUssYUFBUyxZQUFLSix1RUFBTCxjQUF3QkksS0FBSyxDQUFDQyxTQUFOLElBQW1CRCxLQUFLLENBQUNDLFNBQWpELENBQWQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUwsb0VBQWY7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFBLGtCQUFlSSxLQUFLLENBQUNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFJLGVBQVMsWUFBS0YsS0FBSyxDQUFDQyxTQUFYLGNBQXdCTCxtRUFBeEIsQ0FBYjtBQUFBLGdCQUNHSSxLQUFLLENBQUNILFFBQU4sQ0FBZU0sR0FBZixDQUFtQixVQUFDQyxPQUFELEVBQWE7QUFDL0IsNEJBQU8sOERBQUMsNkNBQUQsb0JBQWlDQSxPQUFqQyxHQUFjQSxPQUFPLENBQUNYLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FiRDs7S0FBTU0sUTtBQWNOLCtEQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNUCxPQUF3QixHQUFHLFNBQTNCQSxPQUEyQixPQUErQjtBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkUsR0FBcUIsUUFBckJBLEdBQXFCO0FBQUEsTUFBaEJELFNBQWdCLFFBQWhCQSxTQUFnQjtBQUM5RCxzQkFDRTtBQUFBLDJCQUNFO0FBQUcsVUFBSSxFQUFFQyxHQUFUO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxnRkFBaEI7QUFBQSwrQkFDRSw4REFBQyxzREFBRDtBQUFlLHFCQUFXLEVBQUMsT0FBM0I7QUFBbUMsbUJBQVMsRUFBRUY7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUEsa0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBWkQ7O0tBQU1ELE87QUFjTiwrREFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQSxJQUFNSyxRQUFRLEdBQUcsQ0FDZjtBQUNFSCxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBRGUsRUFNZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBTmUsRUFXZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBWGUsRUFnQmY7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQWhCZSxFQXFCZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBckJlLEVBMEJmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0ExQmUsRUErQmY7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQS9CZSxFQW9DZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBcENlLEVBeUNmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0F6Q2UsRUE4Q2Y7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQTlDZSxDQUFqQjs7QUFxREEsSUFBTVksSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQzNCLHNCQUNFO0FBQVMsYUFBUyxFQUFFVCxrRUFBcEI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUEsZ0VBQWY7QUFBQSw0Q0FDWTtBQUFHLFlBQUksRUFBRSwyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVBLCtEQUFoQjtBQUFBLGdCQUNHQyxRQUFRLENBQUNNLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDekIsNEJBQU8sOERBQUMsNkNBQUQsb0JBQWlDQSxPQUFqQyxHQUFjQSxPQUFPLENBQUNYLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FiRDs7S0FBTVksSTtBQWVOLCtEQUFlQSxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFFQTs7QUFNQSxJQUFNQyxZQUE2QixHQUFHLFNBQWhDQSxZQUFnQyxDQUFDTixLQUFELEVBQVc7QUFDL0Msc0JBQ0U7QUFBTSxhQUFTLEVBQUVBLEtBQUssQ0FBQ08sT0FBTixHQUFnQlgseUVBQWhCLEdBQWlDQSx3RUFBbEQ7QUFBQSxjQUNHSSxLQUFLLENBQUNRO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUYsWTtBQVFOLCtEQUFlQSxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBRywwRUFBQSxDQUFZQyxrRUFBWixFQUFpQkMsdUVBQWpCLEVBQTJCQyx5RUFBM0IsRUFBdUNDLG1FQUF2QyxFQUE2Q0MsK0VBQTdDO0FBQ0FMLDBFQUFBLENBQVlNLG1FQUFaLEVBQWlCQyx5RUFBakIsRUFBNEJDLDBFQUE1QjtBQUVBLElBQU1iLE9BQU8sR0FBRztBQUNkVixXQUFTLEVBQUUseUJBREc7QUFFZEMsS0FBRyxFQUFFLHdCQUZTO0FBR2RGLE9BQUssRUFBRTtBQUhPLENBQWhCOztBQU1BLElBQU15QixJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFDM0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywyRUFBRDtBQUFNLGNBQVEsRUFBRUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxJQUFULENBQWNoQixPQUFkO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBLGtCQURGO0FBT0QsQ0FSRDs7S0FBTWMsSTtBQVVOLCtEQUFlQSxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBLFVBQVUsbUJBQU8sQ0FBQywwTkFBOEc7QUFDaEksMEJBQTBCLG1CQUFPLENBQUMsKzFCQUF3YTs7QUFFMWM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLCsxQkFBd2E7QUFDOWE7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywrMUJBQXdhOztBQUVsYzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7OztBQzNEQSxVQUFVLG1CQUFPLENBQUMsME5BQThHO0FBQ2hJLDBCQUEwQixtQkFBTyxDQUFDLHEyQkFBMmE7O0FBRTdjOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxxMkJBQTJhO0FBQ2piO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMscTJCQUEyYTs7QUFFcmM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUMzREEsVUFBVSxtQkFBTyxDQUFDLDBOQUE4RztBQUNoSSwwQkFBMEIsbUJBQU8sQ0FBQyxpMkJBQXlhOztBQUUzYzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0saTJCQUF5YTtBQUMvYTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGkyQkFBeWE7O0FBRW5jOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7O0FDM0RBLFVBQVUsbUJBQU8sQ0FBQywwTkFBOEc7QUFDaEksMEJBQTBCLG1CQUFPLENBQUMseTFCQUF3YTs7QUFFMWM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLHkxQkFBd2E7QUFDOWE7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx5MUJBQXdhOztBQUVsYzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7OztBQzNEQSxVQUFVLG1CQUFPLENBQUMsME5BQThHO0FBQ2hJLDBCQUEwQixtQkFBTyxDQUFDLG0xQkFBcWE7O0FBRXZjOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxtMUJBQXFhO0FBQzNhO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsbTFCQUFxYTs7QUFFL2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUMzREEsVUFBVSxtQkFBTyxDQUFDLHVOQUEyRztBQUM3SCwwQkFBMEIsbUJBQU8sQ0FBQyxrMEJBQWdhOztBQUVsYzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQyxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBLElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sazBCQUFnYTtBQUN0YTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGswQkFBZ2E7O0FBRTFiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7O0FDM0RBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSxtRUFBbUUsc0JBQXNCLGtCQUFrQixtQkFBbUIsY0FBYyxpQkFBaUIsR0FBRyxxQ0FBcUMsdUJBQXVCLGlCQUFpQixzQkFBc0IsR0FBRyxPQUFPLG9GQUFvRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLHVCQUF1QixLQUFLLDBCQUEwQix5QkFBeUIsbUJBQW1CLDBCQUEwQixLQUFLLHVCQUF1QjtBQUM5cEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSx5RUFBeUUsc0JBQXNCLGtCQUFrQixHQUFHLDZDQUE2QyxtQ0FBbUMsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsS0FBSyxHQUFHLG9EQUFvRCw4QkFBOEIsR0FBRyxPQUFPLG1JQUFtSSxXQUFXLFVBQVUsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyw2REFBNkQscUJBQXFCLG9CQUFvQixrQ0FBa0MsK0JBQStCLE9BQU8sZ0NBQWdDLHdDQUF3QyxPQUFPLEtBQUssaUdBQWlHLDBCQUEwQiwwQ0FBMEMsc0NBQXNDLHdCQUF3Qix3QkFBd0IscUNBQXFDLHNDQUFzQyxnQ0FBZ0MscUZBQXFGLGtCQUFrQixrQkFBa0IsaUJBQWlCLGlCQUFpQiwrQkFBK0Isa0dBQWtHLHVEQUF1RCxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QjtBQUM5bEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsaUVBQWlFLHNCQUFzQixrQkFBa0IsOEJBQThCLCtCQUErQixnQ0FBZ0MsbUJBQW1CLGNBQWMsaUJBQWlCLEdBQUcsNkJBQTZCLHFCQUFxQixtQkFBbUIsR0FBRywrQkFBK0IsaUJBQWlCLHNCQUFzQixrQkFBa0IsOEJBQThCLCtCQUErQixnQ0FBZ0MsbUJBQW1CLGNBQWMsb0JBQW9CLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLE9BQU8scUZBQXFGLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxnQ0FBZ0Msb0JBQW9CLDZCQUE2QixnQkFBZ0IsbUJBQW1CLGlCQUFpQixnQkFBZ0IsT0FBTyxLQUFLLG1CQUFtQixtQkFBbUIsb0JBQW9CLDZCQUE2QixnQkFBZ0Isc0JBQXNCLEtBQUssZ0JBQWdCLHdCQUF3QixLQUFLLG1CQUFtQjtBQUN0eEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDJFQUEyRSx1QkFBdUIsc0JBQXNCLEdBQUcsT0FBTyxvRkFBb0YsV0FBVyxXQUFXLDJDQUEyQyx5QkFBeUIsMEJBQTBCLEtBQUssdUJBQXVCO0FBQ3RXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLGdFQUFnRSxtQ0FBbUMsOEJBQThCLHNCQUFzQixrQkFBa0IsbUJBQW1CLGNBQWMsOEJBQThCLCtCQUErQixnQ0FBZ0MsR0FBRyx1QkFBdUIsbUJBQW1CLGNBQWMsZ0VBQWdFLGtCQUFrQixHQUFHLHdCQUF3QixzQkFBc0IscUJBQXFCLEdBQUcsd0JBQXdCLGlDQUFpQyw4QkFBOEIseUJBQXlCLEdBQUcsOEJBQThCLGdCQUFnQixHQUFHLE9BQU8sNkhBQTZILFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLDhEQUE4RCxrQkFBa0IscUNBQXFDLHNDQUFzQyxvQkFBb0IsZ0JBQWdCLDZCQUE2QixLQUFLLGVBQWUsZ0JBQWdCLHNFQUFzRSx3QkFBd0IsS0FBSyxnQkFBZ0Isd0JBQXdCLHVCQUF1QixTQUFTLDZCQUE2QixPQUFPLGVBQWUsaUNBQWlDLE9BQU8sS0FBSyxpR0FBaUcsMEJBQTBCLDBDQUEwQyxzQ0FBc0Msd0JBQXdCLHdCQUF3QixxQ0FBcUMsc0NBQXNDLGdDQUFnQyxxRkFBcUYsa0JBQWtCLGtCQUFrQixpQkFBaUIsaUJBQWlCLCtCQUErQixrR0FBa0csdURBQXVELGlCQUFpQixPQUFPLEtBQUssdUJBQXVCO0FBQ2p4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsdUVBQXVFLG1CQUFtQiw0QkFBNEIsR0FBRyxnQ0FBZ0MsaUJBQWlCLDhCQUE4QixHQUFHLDhEQUE4RCx5QkFBeUIsdUJBQXVCLEdBQUcsT0FBTyxpSUFBaUksVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVywwREFBMEQsa0JBQWtCLDRCQUE0Qix5Q0FBeUMsS0FBSyxpQkFBaUIsMEJBQTBCLDJDQUEyQyxLQUFLLDZCQUE2QiwyQkFBMkIseUJBQXlCLEtBQUssaUdBQWlHLDBCQUEwQiwwQ0FBMEMsc0NBQXNDLHdCQUF3Qix3QkFBd0IscUNBQXFDLHNDQUFzQyxnQ0FBZ0MscUZBQXFGLGtCQUFrQixrQkFBa0IsaUJBQWlCLGlCQUFpQiwrQkFBK0Isa0dBQWtHLHVEQUF1RCxpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QjtBQUNobEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1OTAwM2Y3ZjU5OGM0ODQ4YzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHRlcm5hbEltYWdlIGZyb20gJy4uLy4uL1VJL0V4dGVybmFsSW1hZ2UnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICB1cmw6IHN0cmluZ1xyXG4gIGltYWdlTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCBpbWFnZU5hbWUsIHVybCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0gaHJlZj17dXJsfT5cclxuICAgICAgICAgIDxFeHRlcm5hbEltYWdlIGFzcGVjdFJhdGlvPXsnNCAvIDMnfSBpbWFnZU5hbWU9e2ltYWdlTmFtZX0gLz5cclxuXHJcbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXRlZ29yaWVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vQ2F0ZWdvcnknXHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnUHJlY28gY2VueSB0ZWxlZm9ub3Ygc3RhbGUgbmV1c3R1cGFqdScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ05vdnkgcnljaGxvdGVzdCBuYSBrb3JvbmF2aXJ1cyBvZCBzcG9sb2Nub3N0aSBCb3NjaCBwcmluYXNlIHNwb2xhaGlsdmUgdnlzbGVka3kgdXogemEgMzkgbWludXQgam9qIHRvIGplIHJ5Y2hsbyB3b3cgc3RyYXNuZSBkbGhlIGplIHRvdG8nXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgQ2F0ZWdvcmllczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICA8Q2F0ZWdvcnkgbmFtZT17J1F1YW50YSBCTEFDSyd9IGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgPENhdGVnb3J5IG5hbWU9eydRdWFudGEgV0hJVEUnfSAgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxyXG4gICAgICA8Q2F0ZWdvcnkgbmFtZT17J1F1YW50YSBTTUFSVCd9ICBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFydGljbGUsIHsgUHJvcHMgYXMgQXJ0aWNsZVR5cGUgfSBmcm9tICcuL0FydGljbGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXRlZ29yeS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEhpZ2h0bGlnaHRlZCBmcm9tICcuLy4uLy4uL1VJL0hpZ2hsaWdodGVkJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBhcnRpY2xlczogQXJ0aWNsZVR5cGVbXVxyXG4gIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDYXRlZ29yeTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2F0ZWdvcnl9ICR7cHJvcHMuY2xhc3NOYW1lICYmIHByb3BzLmNsYXNzTmFtZX1gfT5cclxuICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICA8SGlnaHRsaWdodGVkPntwcm9wcy5uYW1lfTwvSGlnaHRsaWdodGVkPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtwcm9wcy5jbGFzc05hbWV9ICR7c3R5bGVzLmxpc3R9YH0+XHJcbiAgICAgICAge3Byb3BzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxBcnRpY2xlIGtleT17YXJ0aWNsZS50aXRsZX0gey4uLmFydGljbGV9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXh0ZXJuYWxJbWFnZSBmcm9tICcuLy4uLy4uL1VJL0V4dGVybmFsSW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnRpY2xlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHVybDogc3RyaW5nXHJcbiAgaW1hZ2VOYW1lOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGl0bGUsIHVybCwgaW1hZ2VOYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGEgaHJlZj17dXJsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydpbWFnZS1jb250YWluZXInXX0+XHJcbiAgICAgICAgICA8RXh0ZXJuYWxJbWFnZSBhc3BlY3RSYXRpbz0nMSAvIDEnIGltYWdlTmFtZT17aW1hZ2VOYW1lfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HcmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGU4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlMTAnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IEdyaWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICBOb3Zpbmt5IHogPGEgaHJlZj17J2h0dHBzOi8vd3d3LnN0YXJ0c3RvcC5zay8nfT5TVEFSVFNUT1Auc2s8L2E+XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxBcnRpY2xlIGtleT17YXJ0aWNsZS50aXRsZX0gey4uLmFydGljbGV9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGlnaGxpZ2h0ZWQubW9kdWxlLnNjc3MnXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaW52ZXJzZT86IHRydWVcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IEhpZ2h0bGlnaHRlZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYXJrIGNsYXNzTmFtZT17cHJvcHMuaW52ZXJzZSA/IHN0eWxlcy5pbnZlcnNlIDogc3R5bGVzLm5vcm1hbH0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvbWFyaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhpZ2h0bGlnaHRlZFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIGZhU2VhcmNoLFxyXG4gIGZhcyxcclxuICBmYVBob25lQWx0LFxyXG4gIGZhQXQsXHJcbiAgZmFHcmlwSG9yaXpvbnRhbCxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhYiwgZmFUd2l0dGVyLCBmYUZhY2Vib29rIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluL01haW4nXHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMnXHJcbmltcG9ydCBHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9HcmlkL0dyaWQnXHJcblxyXG5saWJyYXJ5LmFkZChmYXMsIGZhU2VhcmNoLCBmYVBob25lQWx0LCBmYUF0LCBmYUdyaXBIb3Jpem9udGFsKVxyXG5saWJyYXJ5LmFkZChmYWIsIGZhVHdpdHRlciwgZmFGYWNlYm9vaylcclxuXHJcbmNvbnN0IGFydGljbGUgPSB7XHJcbiAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gIHRpdGxlOiAnVGl0bGUnLFxyXG59XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW4gYXJ0aWNsZXM9e0FycmF5KDUpLmZpbGwoYXJ0aWNsZSl9Lz5cclxuICAgICAgPENhdGVnb3JpZXMgLz5cclxuICAgICAgPEdyaWQgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0NhdGVnb3JpZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9DYXRlZ29yaWVzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0NhdGVnb3JpZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQ2F0ZWdvcnkubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9DYXRlZ29yeS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9DYXRlZ29yeS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0dyaWQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9HcmlkLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0dyaWQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vSGlnaGxpZ2h0ZWQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9IaWdobGlnaHRlZC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9IaWdobGlnaHRlZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXJ0aWNsZV9hcnRpY2xlX18zZklnSSB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLkFydGljbGVfaW1hZ2UtY29udGFpbmVyX18zUG5wWiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDQvMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0FydGljbGUubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUVBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFydGljbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDQgLyAzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJhcnRpY2xlXCI6IFwiQXJ0aWNsZV9hcnRpY2xlX18zZklnSVwiLFxuXHRcImltYWdlLWNvbnRhaW5lclwiOiBcIkFydGljbGVfaW1hZ2UtY29udGFpbmVyX18zUG5wWlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5DYXRlZ29yaWVzX2NhdGVnb3JpZXNfXzE4MDR4IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLkNhdGVnb3JpZXNfY2F0ZWdvcmllc19fMTgwNHgge1xcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4uQ2F0ZWdvcmllc19jYXRlZ29yaWVzX18xODA0eCA+ICo6bnRoLWNoaWxkKG9kZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1YWFiZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NhdGVnb3JpZXMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0FBREY7QUMrQkU7RUQvQkY7SUFJSSx5QkFBQTtJQUFBLDBCQUFBO1NBQUEsc0JBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSx5QkNFVztBREZmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5jYXRlZ29yaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBzY3JlZW4oJGJwLTUpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgPiAqOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLy8vLy8vLy8vLy8vLy8vXFxyXFxuLy8vIENvbG9yc1xcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG5cXHJcXG4kY29sb3ItcHJpbWFyeTogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiRjb2xvci1zZWNvbmRhcnk6IHJlZDtcXHJcXG5cXHJcXG4kY29sb3ItZ3JleS0xOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxyXFxuJGNvbG9yLWdyZXktMjogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcbiRjb2xvci13aGl0ZTogd2hpdGU7XFxyXFxuJGNvbG9yLWJsYWNrOiBibGFjaztcXHJcXG4kY29sb3ItYmx1ZS0xOiByZ2IoNzcsIDE3OCwgMjM2KTtcXHJcXG4kY29sb3ItYmx1ZS0yOiByZ2IoMTQ5LCAxNzAsIDE5MSk7XFxyXFxuXFxyXFxuJGNvbG9yLWxpbmstaG92ZXI6IGJsdWU7XFxyXFxuXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vLyBCcmVha3BvaW50c1xcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG5cXHJcXG4kYnAtMTogMTYwMHB4O1xcclxcbiRicC0yOiAxMzAwcHg7XFxyXFxuJGJwLTM6IDExMDBweDtcXHJcXG4kYnAtNDogOTAwcHg7XFxyXFxuJGJwLTU6IDcwMHB4O1xcclxcblxcclxcbiRicC1pbWFnZS1sYXJnZTogNTAwcHg7XFxyXFxuXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vLyBNaXhpbnNcXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuXFxyXFxuQG1peGluIHNjcmVlbigkYnJlYWtwb2ludDogJycpIHtcXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNhdGVnb3JpZXNcIjogXCJDYXRlZ29yaWVzX2NhdGVnb3JpZXNfXzE4MDR4XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNhdGVnb3J5X2xpc3RfXzJoV084IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uQ2F0ZWdvcnlfbGlzdF9fMmhXTzggPiAqIHtcXG4gIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgIGZsZXg6IDEgMTtcXG59XFxuXFxuLkNhdGVnb3J5X2NhdGVnb3J5X18zUTdSWiB7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG59XFxuXFxuLkNhdGVnb3J5X3RpdGxlX18xUENrYyB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NhdGVnb3J5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7RUFBQSwwQkFBQTtPQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO09BQUEsU0FBQTtBQUNKOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICYgPiAqIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5IHtcXHJcXG4gIGhlaWdodDogNzV2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxpc3RcIjogXCJDYXRlZ29yeV9saXN0X18yaFdPOFwiLFxuXHRcImNhdGVnb3J5XCI6IFwiQ2F0ZWdvcnlfY2F0ZWdvcnlfXzNRN1JaXCIsXG5cdFwidGl0bGVcIjogXCJDYXRlZ29yeV90aXRsZV9fMVBDa2NcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXJ0aWNsZV9pbWFnZS1jb250YWluZXJfXzMzUkhCIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImltYWdlLWNvbnRhaW5lclwiOiBcIkFydGljbGVfaW1hZ2UtY29udGFpbmVyX18zM1JIQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5HcmlkX3NlY3Rpb25fX19zTHNuIHtcXG4gIHBhZGRpbmc6IDEuOHJlbSAycmVtIDZyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGdhcDogMnJlbTtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLkdyaWRfZ3JpZF9fMllfY0oge1xcbiAgZ3JpZC1nYXA6IDVyZW07XFxuICBnYXA6IDVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5HcmlkX3RpdGxlX18zSE9pbyB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5HcmlkX3RpdGxlX18zSE9pbyBhIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbi5HcmlkX3RpdGxlX18zSE9pbyBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vR3JpZC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSw4QkFBQTtFQUNBLHlCQ0lhO0VESGIsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFBQSxTQUFBO0VBRUEsMkRBQUE7RUFFQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFJRTtFQUNFLDRCQUFBO0VBQUEseUJBQUE7RUFBQSxvQkFBQTtBQUZKO0FBSUU7RUFDRSxXQ1hlO0FEU25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEuOHJlbSAycmVtIDZyZW0gMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LTI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZ2FwOiA1cmVtO1xcclxcblxcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgYSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbiAgfVxcclxcbiAgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItbGluay1ob3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLy8vLy8vLy8vLy8vLy8vXFxyXFxuLy8vIENvbG9yc1xcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG5cXHJcXG4kY29sb3ItcHJpbWFyeTogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiRjb2xvci1zZWNvbmRhcnk6IHJlZDtcXHJcXG5cXHJcXG4kY29sb3ItZ3JleS0xOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxyXFxuJGNvbG9yLWdyZXktMjogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcbiRjb2xvci13aGl0ZTogd2hpdGU7XFxyXFxuJGNvbG9yLWJsYWNrOiBibGFjaztcXHJcXG4kY29sb3ItYmx1ZS0xOiByZ2IoNzcsIDE3OCwgMjM2KTtcXHJcXG4kY29sb3ItYmx1ZS0yOiByZ2IoMTQ5LCAxNzAsIDE5MSk7XFxyXFxuXFxyXFxuJGNvbG9yLWxpbmstaG92ZXI6IGJsdWU7XFxyXFxuXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vLyBCcmVha3BvaW50c1xcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG5cXHJcXG4kYnAtMTogMTYwMHB4O1xcclxcbiRicC0yOiAxMzAwcHg7XFxyXFxuJGJwLTM6IDExMDBweDtcXHJcXG4kYnAtNDogOTAwcHg7XFxyXFxuJGJwLTU6IDcwMHB4O1xcclxcblxcclxcbiRicC1pbWFnZS1sYXJnZTogNTAwcHg7XFxyXFxuXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vLyBNaXhpbnNcXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuXFxyXFxuQG1peGluIHNjcmVlbigkYnJlYWtwb2ludDogJycpIHtcXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNlY3Rpb25cIjogXCJHcmlkX3NlY3Rpb25fX19zTHNuXCIsXG5cdFwiZ3JpZFwiOiBcIkdyaWRfZ3JpZF9fMllfY0pcIixcblx0XCJ0aXRsZVwiOiBcIkdyaWRfdGl0bGVfXzNIT2lvXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhpZ2hsaWdodGVkX2ludmVyc2VfXzMyVlF3IHtcXG4gIGNvbG9yOiAjMjIyMjIyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5IaWdobGlnaHRlZF9ub3JtYWxfX2VFQ0QyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxufVxcblxcbi5IaWdobGlnaHRlZF9ub3JtYWxfX2VFQ0QyLFxcbi5IaWdobGlnaHRlZF9pbnZlcnNlX18zMlZRdyB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0hpZ2hsaWdodGVkLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGNDQ2M7RURDZCx1QkNJWTtBRE5kOztBQUtBO0VBQ0UsWUFBQTtFQUVBLHlCQ1BjO0FESWhCOztBQU1BOztFQUVFLG9CQUFBO0VBQ0Esa0JBQUE7QUFIRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcXHJcXG5cXHJcXG4uaW52ZXJzZSB7XFxyXFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwge1xcclxcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsLFxcclxcbi5pbnZlcnNle1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblwiLFwiLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vLyBDb2xvcnNcXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuXFxyXFxuJGNvbG9yLXByaW1hcnk6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiByZWQ7XFxyXFxuXFxyXFxuJGNvbG9yLWdyZXktMTogcmdiKDIyMywgMjIzLCAyMjMpO1xcclxcbiRjb2xvci1ncmV5LTI6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xcclxcbiRjb2xvci1ibGFjazogYmxhY2s7XFxyXFxuJGNvbG9yLWJsdWUtMTogcmdiKDc3LCAxNzgsIDIzNik7XFxyXFxuJGNvbG9yLWJsdWUtMjogcmdiKDE0OSwgMTcwLCAxOTEpO1xcclxcblxcclxcbiRjb2xvci1saW5rLWhvdmVyOiBibHVlO1xcclxcblxcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG4vLy8gQnJlYWtwb2ludHNcXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuXFxyXFxuJGJwLTE6IDE2MDBweDtcXHJcXG4kYnAtMjogMTMwMHB4O1xcclxcbiRicC0zOiAxMTAwcHg7XFxyXFxuJGJwLTQ6IDkwMHB4O1xcclxcbiRicC01OiA3MDBweDtcXHJcXG5cXHJcXG4kYnAtaW1hZ2UtbGFyZ2U6IDUwMHB4O1xcclxcblxcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG4vLy8gTWl4aW5zXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcblxcclxcbkBtaXhpbiBzY3JlZW4oJGJyZWFrcG9pbnQ6ICcnKSB7XFxyXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpbnZlcnNlXCI6IFwiSGlnaGxpZ2h0ZWRfaW52ZXJzZV9fMzJWUXdcIixcblx0XCJub3JtYWxcIjogXCJIaWdobGlnaHRlZF9ub3JtYWxfX2VFQ0QyXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
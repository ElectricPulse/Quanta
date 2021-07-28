self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticleShowcases/Main/Main.tsx":
/*!***************************************************!*\
  !*** ./components/ArticleShowcases/Main/Main.tsx ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
/* harmony import */ var _components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleShowcases/Categories/Categories */ "./components/ArticleShowcases/Categories/Categories.tsx");
/* harmony import */ var _components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleShowcases/Grid/Grid */ "./components/ArticleShowcases/Grid/Grid.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\pages\\index.tsx",
    _this = undefined;








_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.fas, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSearch, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faPhoneAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faAt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGripHorizontal);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.fab, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTwitter, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFacebook);

var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJmYXMiLCJmYVNlYXJjaCIsImZhUGhvbmVBbHQiLCJmYUF0IiwiZmFHcmlwSG9yaXpvbnRhbCIsImZhYiIsImZhVHdpdHRlciIsImZhRmFjZWJvb2siLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUFBLDBFQUFBLENBQVlDLGtFQUFaLEVBQWlCQyx1RUFBakIsRUFBMkJDLHlFQUEzQixFQUF1Q0MsbUVBQXZDLEVBQTZDQywrRUFBN0M7QUFDQUwsMEVBQUEsQ0FBWU0sbUVBQVosRUFBaUJDLHlFQUFqQixFQUE0QkMsMEVBQTVCOztBQUVBLElBQU1DLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUMzQixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBLGtCQURGO0FBT0QsQ0FSRDs7S0FBTUEsSTtBQVVOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkNjkxZjY4NmRlNzdiMTAxNTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFzLCBmYVBob25lQWx0LCBmYUF0LCBmYUdyaXBIb3Jpem9udGFsIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYWIsIGZhVHdpdHRlciwgZmFGYWNlYm9vayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcblxyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbi9NYWluJ1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9HcmlkJ1xyXG5cclxubGlicmFyeS5hZGQoZmFzLCBmYVNlYXJjaCwgZmFQaG9uZUFsdCwgZmFBdCwgZmFHcmlwSG9yaXpvbnRhbClcclxubGlicmFyeS5hZGQoZmFiLCBmYVR3aXR0ZXIsIGZhRmFjZWJvb2spXHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW4gLz5cclxuICAgICAgPENhdGVnb3JpZXMgLz5cclxuICAgICAgPEdyaWQgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
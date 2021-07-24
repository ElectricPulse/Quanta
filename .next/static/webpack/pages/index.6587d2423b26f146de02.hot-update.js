self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticleShowcases/MainArticles/MainArticles.tsx":
/*!*******************************************************************!*\
  !*** ./components/ArticleShowcases/MainArticles/MainArticles.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainArticles.module.scss */ "./components/ArticleShowcases/MainArticles/MainArticles.module.scss");
/* harmony import */ var _MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ArticlePreview/ArticlePreview */ "./components/ArticlePreview/ArticlePreview.tsx");
/* harmony import */ var _ArticleGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ArticleGrid */ "./components/ArticleShowcases/ArticleGrid.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\MainArticles\\MainArticles.tsx",
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

var MainArticles = function MainArticles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["main-articles"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleGrid__WEBPACK_IMPORTED_MODULE_3__.default, {
      cols: 2,
      rows: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_c = MainArticles;
{}
/* harmony default export */ __webpack_exports__["default"] = (MainArticles);

var _c;

$RefreshReg$(_c, "MainArticles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW5BcnRpY2xlcy9NYWluQXJ0aWNsZXMudHN4Il0sIm5hbWVzIjpbImFydGljbGVzIiwiaW1hZ2VOYW1lIiwidXJsIiwidGl0bGUiLCJNYWluQXJ0aWNsZXMiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURlLEVBTWY7QUFDRUYsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQU5lLEVBV2Y7QUFDRUYsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhlLEVBZ0JmO0FBQ0VGLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FoQmUsRUFxQmY7QUFDRUYsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQXJCZSxFQTBCZjtBQUNFRixXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VDLE9BQUssRUFBRTtBQUhULENBMUJlLEVBK0JmO0FBQ0VGLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0EvQmUsQ0FBakI7O0FBc0NBLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLEdBQU07QUFDbkMsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLG1GQUFwQjtBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBQWEsVUFBSSxFQUFFLENBQW5CO0FBQXNCLFVBQUksRUFBRSxDQUE1QjtBQUFBLDhCQUNFLDhEQUFDLG1FQUFEO0FBQVMsZUFBTyxFQUFFTCxRQUFRLENBQUMsQ0FBRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxtRUFBRDtBQUFTLGVBQU8sRUFBRUEsUUFBUSxDQUFDLENBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1JLFk7QUFXTixDQUVDO0FBRUQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjU4N2QyNDIzYjI2ZjE0NmRlMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluQXJ0aWNsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldydcclxuXHJcbmltcG9ydCBBcnRpY2xlR3JpZCBmcm9tICcuLi9BcnRpY2xlR3JpZCdcclxuXHJcbmNvbnN0IGFydGljbGVzID0gW1xyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgTWFpbkFydGljbGVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ21haW4tYXJ0aWNsZXMnXX0+XHJcbiAgICAgIDxBcnRpY2xlR3JpZCBjb2xzPXsyfSByb3dzPXsxfT5cclxuICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1swXX0gLz5cclxuICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1sxXX0gLz5cclxuICAgICAgPC9BcnRpY2xlR3JpZD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbntcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BcnRpY2xlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
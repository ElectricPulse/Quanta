self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticlePreview/ArticlePreview.tsx":
/*!******************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreview.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticlePreview.module.scss */ "./components/ArticlePreview/ArticlePreview.module.scss");
/* harmony import */ var _ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cloudinary_build_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-build-url */ "./node_modules/cloudinary-build-url/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticlePreview\\ArticlePreview.tsx",
    _this = undefined;






var ArticlePreview = function ArticlePreview(props) {
  var imageUrl = (0,cloudinary_build_url__WEBPACK_IMPORTED_MODULE_3__.buildUrl)(props.article.imageName, {
    cloud: {
      cloudName: 'dpki8ezpl'
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default().article),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: (_ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
      layout: "fill",
      src: imageUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_c = ArticlePreview;
/* harmony default export */ __webpack_exports__["default"] = (ArticlePreview);

var _c;

$RefreshReg$(_c, "ArticlePreview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldy50c3giXSwibmFtZXMiOlsiQXJ0aWNsZVByZXZpZXciLCJwcm9wcyIsImltYWdlVXJsIiwiYnVpbGRVcmwiLCJhcnRpY2xlIiwiaW1hZ2VOYW1lIiwiY2xvdWQiLCJjbG91ZE5hbWUiLCJzdHlsZXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLElBQU1BLGNBQStCLEdBQUcsU0FBbENBLGNBQWtDLENBQUNDLEtBQUQsRUFBVztBQUMvQyxNQUFNQyxRQUFRLEdBQUdDLDhEQUFRLENBQUNGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxTQUFmLEVBQTBCO0FBQy9DQyxTQUFLLEVBQUU7QUFDSEMsZUFBUyxFQUFFO0FBRFI7QUFEd0MsR0FBMUIsQ0FBekI7QUFLRixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxlQUFTLEVBQUVBLDBFQUFsQjtBQUFnQyxZQUFNLEVBQUMsTUFBdkM7QUFBOEMsU0FBRyxFQUFFTjtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRCxLQUFLLENBQUNRO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FaRDs7S0FBTVQsYztBQWNOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4YWNiY2Q0NDk0ZWM4OGRkODJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZVByZXZpZXcubW9kdWxlLnNjc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFydGljbGVcclxufVxyXG5cclxuaW1wb3J0IHtidWlsZFVybH0gZnJvbSAnY2xvdWRpbmFyeS1idWlsZC11cmwnXHJcblxyXG5jb25zdCBBcnRpY2xlUHJldmlldzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZVVybCA9IGJ1aWxkVXJsKHByb3BzLmFydGljbGUuaW1hZ2VOYW1lLCB7XHJcbiAgICAgICAgY2xvdWQ6IHtcclxuICAgICAgICAgICAgY2xvdWROYW1lOiAnZHBraThlenBsJyxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IGxheW91dD1cImZpbGxcIiBzcmM9e2ltYWdlVXJsfSAvPlxyXG4gICAgICA8aDI+e3Byb3BzLnRpdGxlfTwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQcmV2aWV3XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
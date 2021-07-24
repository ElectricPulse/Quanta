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
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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


/***/ }),

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
/* harmony import */ var _MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainArticles.module.scss */ "./components/ArticleShowcases/MainArticles/MainArticles.module.scss");
/* harmony import */ var _MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ArticlePreview/ArticlePreview */ "./components/ArticlePreview/ArticlePreview.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\MainArticles\\MainArticles.tsx";



var articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: "Title"
}];

function MainArticles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["main-articles"]),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_c = MainArticles;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluQXJ0aWNsZXMvTWFpbkFydGljbGVzLnRzeCJdLCJuYW1lcyI6WyJBcnRpY2xlUHJldmlldyIsInByb3BzIiwiaW1hZ2VVcmwiLCJidWlsZFVybCIsImFydGljbGUiLCJpbWFnZU5hbWUiLCJjbG91ZCIsImNsb3VkTmFtZSIsInN0eWxlcyIsInRpdGxlIiwiYXJ0aWNsZXMiLCJ1cmwiLCJNYWluQXJ0aWNsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTs7QUFFQSxJQUFNQSxjQUErQixHQUFHLFNBQWxDQSxjQUFrQyxDQUFDQyxLQUFELEVBQVc7QUFDakQsTUFBTUMsUUFBUSxHQUFHQyw4REFBUSxDQUFDRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsU0FBZixFQUEwQjtBQUNqREMsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRTtBQUROO0FBRDBDLEdBQTFCLENBQXpCO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDRFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sZUFBUyxFQUFFQSwwRUFBbEI7QUFBZ0MsWUFBTSxFQUFDLE1BQXZDO0FBQThDLFNBQUcsRUFBRU47QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0QsS0FBSyxDQUFDUTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBWkQ7O0tBQU1ULGM7QUFjTiwrREFBZUEsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBRUE7QUFJQSxJQUFNVSxRQUFRLEdBQUcsQ0FBQztBQUNkTCxXQUFTLEVBQUUseUJBREc7QUFFZE0sS0FBRyxFQUFFLHdCQUZTO0FBR2RGLE9BQUssRUFBRTtBQUhPLENBQUQsQ0FBakI7O0FBTUEsU0FBU0csWUFBVCxHQUF3QjtBQUN0QixzQkFDRTtBQUFTLGFBQVMsRUFBRUosbUZBQXBCO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQyxtRUFBRDtBQUNFLGVBQU8sRUFBRUUsUUFBUSxDQUFDLENBQUQ7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztLQVhRRSxZO0FBYVQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I1ZTVkZTBkNDQ0ZWY0MmUzMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnRpY2xlUHJldmlldy5tb2R1bGUuc2NzcydcclxuaW50ZXJmYWNlIEFydGljbGUge1xyXG4gIGltYWdlTmFtZTogc3RyaW5nXHJcbiAgdXJsOiBzdHJpbmdcclxuICB0aXRsZTogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYXJ0aWNsZTogQXJ0aWNsZVxyXG59XHJcblxyXG5pbXBvcnQgeyBidWlsZFVybCB9IGZyb20gJ2Nsb3VkaW5hcnktYnVpbGQtdXJsJ1xyXG5cclxuY29uc3QgQXJ0aWNsZVByZXZpZXc6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGltYWdlVXJsID0gYnVpbGRVcmwocHJvcHMuYXJ0aWNsZS5pbWFnZU5hbWUsIHtcclxuICAgIGNsb3VkOiB7XHJcbiAgICAgIGNsb3VkTmFtZTogJ2Rwa2k4ZXpwbCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gbGF5b3V0PVwiZmlsbFwiIHNyYz17aW1hZ2VVcmx9IC8+XHJcbiAgICAgIDxoMj57cHJvcHMudGl0bGV9PC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVByZXZpZXdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW5BcnRpY2xlcy5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uLy4uL0FydGljbGVQcmV2aWV3L0FydGljbGVQcmV2aWV3J1xyXG5cclxuXHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IFt7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiBcIlRpdGxlXCIsXHJcbn1dXHJcblxyXG5mdW5jdGlvbiBNYWluQXJ0aWNsZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzWydtYWluLWFydGljbGVzJ119PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxBcnRpY2xlXHJcbiAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlc1swXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BcnRpY2xlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
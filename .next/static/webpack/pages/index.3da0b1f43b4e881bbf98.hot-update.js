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
  var _props$article = props.article,
      title = _props$article.title,
      imageName = _props$article.imageName,
      url = _props$article.url;
  var imageUrl = (0,cloudinary_build_url__WEBPACK_IMPORTED_MODULE_3__.buildUrl)(imageName, {
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
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldy50c3giXSwibmFtZXMiOlsiQXJ0aWNsZVByZXZpZXciLCJwcm9wcyIsImFydGljbGUiLCJ0aXRsZSIsImltYWdlTmFtZSIsInVybCIsImltYWdlVXJsIiwiYnVpbGRVcmwiLCJjbG91ZCIsImNsb3VkTmFtZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBOztBQUVBLElBQU1BLGNBQStCLEdBQUcsU0FBbENBLGNBQWtDLENBQUNDLEtBQUQsRUFBVztBQUFBLHVCQUNmQSxLQUFLLENBQUNDLE9BRFM7QUFBQSxNQUN6Q0MsS0FEeUMsa0JBQ3pDQSxLQUR5QztBQUFBLE1BQ2xDQyxTQURrQyxrQkFDbENBLFNBRGtDO0FBQUEsTUFDdkJDLEdBRHVCLGtCQUN2QkEsR0FEdUI7QUFHakQsTUFBTUMsUUFBUSxHQUFHQyw4REFBUSxDQUFDSCxTQUFELEVBQVk7QUFDbkNJLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETjtBQUQ0QixHQUFaLENBQXpCO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDRFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sZUFBUyxFQUFFQSwwRUFBbEI7QUFBZ0MsWUFBTSxFQUFDLE1BQXZDO0FBQThDLFNBQUcsRUFBRUo7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBRyxVQUFJLEVBQUVELEdBQVQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQWpCRDs7S0FBTUgsYztBQW1CTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZGEwYjFmNDNiNGU4ODFiYmY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcnRpY2xlOiB7XHJcbiAgICBpbWFnZU5hbWU6IHN0cmluZ1xyXG4gICAgdXJsOiBzdHJpbmdcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICB9XHJcbn1cclxuXHJcbmltcG9ydCB7IGJ1aWxkVXJsIH0gZnJvbSAnY2xvdWRpbmFyeS1idWlsZC11cmwnXHJcblxyXG5jb25zdCBBcnRpY2xlUHJldmlldzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2VOYW1lLCB1cmwgfSA9IHByb3BzLmFydGljbGVcclxuXHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBidWlsZFVybChpbWFnZU5hbWUsIHtcclxuICAgIGNsb3VkOiB7XHJcbiAgICAgIGNsb3VkTmFtZTogJ2Rwa2k4ZXpwbCcsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gbGF5b3V0PVwiZmlsbFwiIHNyYz17aW1hZ2VVcmx9IC8+XHJcblxyXG4gICAgICA8YSBocmVmPXt1cmx9PlxyXG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUHJldmlld1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
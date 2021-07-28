self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectDestructuringEmpty; }
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./components/ArticleShowcases/Main/Article.tsx":
/*!******************************************************!*\
  !*** ./components/ArticleShowcases/Main/Article.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Main/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Main\\Article.tsx",
    _this = undefined;





var ArticlePreview = function ArticlePreview(props) {
  var _ref;

  (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: url,
    className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default().article),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default().details),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_3__.default, {
      imageName: imageName,
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
      aspectRatio: aspectRatio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW4vQXJ0aWNsZS50c3giXSwibmFtZXMiOlsiQXJ0aWNsZVByZXZpZXciLCJwcm9wcyIsInVybCIsInN0eWxlcyIsInRpdGxlIiwiaW1hZ2VOYW1lIiwiYXNwZWN0UmF0aW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUVBOztBQVNBLElBQU1BLGNBQStCLEdBQUcsU0FBbENBLGNBQWtDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBOztBQUVqRCxzQkFDRTtBQUFHLFFBQUksRUFBRUMsR0FBVDtBQUFjLGFBQVMsRUFBRUMscUVBQXpCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHFFQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFFQyxTQURiO0FBRUUsZUFBUyxFQUFFRixtRUFGYjtBQUdFLGlCQUFXLEVBQUVHO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FkRDs7S0FBTU4sYztBQWdCTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZGM0ODk4NjZhOTQ3NjU1YzY4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnRpY2xlLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IEV4dGVybmFsSW1hZ2UgZnJvbSAnLi4vLi4vVUkvRXh0ZXJuYWxJbWFnZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaW1hZ2VOYW1lOiBzdHJpbmdcclxuICB1cmw6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBhc3BlY3RSYXRpbz86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZVByZXZpZXc6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHt9XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEV4dGVybmFsSW1hZ2VcclxuICAgICAgICBpbWFnZU5hbWU9e2ltYWdlTmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICBhc3BlY3RSYXRpbz17YXNwZWN0UmF0aW99XHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlUHJldmlld1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
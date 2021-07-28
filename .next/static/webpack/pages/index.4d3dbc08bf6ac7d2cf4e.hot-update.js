self["webpackHotUpdate_N_E"]("pages/index",{

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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJmYXMiLCJmYVNlYXJjaCIsImZhUGhvbmVBbHQiLCJmYUF0IiwiZmFHcmlwSG9yaXpvbnRhbCIsImZhYiIsImZhVHdpdHRlciIsImZhRmFjZWJvb2siLCJhcnRpY2xlIiwiaW1hZ2VOYW1lIiwidXJsIiwidGl0bGUiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQSwwRUFBQSxDQUFZQyxrRUFBWixFQUFpQkMsdUVBQWpCLEVBQTJCQyx5RUFBM0IsRUFBdUNDLG1FQUF2QyxFQUE2Q0MsK0VBQTdDO0FBQ0FMLDBFQUFBLENBQVlNLG1FQUFaLEVBQWlCQyx5RUFBakIsRUFBNEJDLDBFQUE1QjtBQUVBLElBQU1DLE9BQU8sR0FBRztBQUNkQyxXQUFTLEVBQUUseUJBREc7QUFFZEMsS0FBRyxFQUFFLHdCQUZTO0FBR2RDLE9BQUssRUFBRTtBQUhPLENBQWhCOztBQU1BLElBQU1DLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUMzQixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBLGtCQURGO0FBT0QsQ0FSRDs7S0FBTUEsSTtBQVVOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRkM2RiYzA4YmY2YWM3ZDJjZjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIGZhU2VhcmNoLFxyXG4gIGZhcyxcclxuICBmYVBob25lQWx0LFxyXG4gIGZhQXQsXHJcbiAgZmFHcmlwSG9yaXpvbnRhbCxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhYiwgZmFUd2l0dGVyLCBmYUZhY2Vib29rIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluL01haW4nXHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMnXHJcbmltcG9ydCBHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9HcmlkL0dyaWQnXHJcblxyXG5saWJyYXJ5LmFkZChmYXMsIGZhU2VhcmNoLCBmYVBob25lQWx0LCBmYUF0LCBmYUdyaXBIb3Jpem9udGFsKVxyXG5saWJyYXJ5LmFkZChmYWIsIGZhVHdpdHRlciwgZmFGYWNlYm9vaylcclxuXHJcbmNvbnN0IGFydGljbGUgPSB7XHJcbiAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gIHRpdGxlOiAnVGl0bGUnLFxyXG59XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW4gLz5cclxuICAgICAgPENhdGVnb3JpZXMgLz5cclxuICAgICAgPEdyaWQgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/Header.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Layout/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_logo_black_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/logo-black.png */ "./public/images/logo-black.png");
/* harmony import */ var _NavigationMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationMobile */ "./components/Layout/NavigationMobile.tsx");
/* harmony import */ var _NavigationDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationDesktop */ "./components/Layout/NavigationDesktop.tsx");
/* harmony import */ var hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/useMediaQuery */ "./hooks/useMediaQuery.tsx");
/* harmony import */ var hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useScroll */ "./hooks/useScroll.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\Header.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var Header = function Header(_ref) {
  _s();

  var breakpoints = _ref.breakpoints;
  var smallScreen = (0,hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints.mobileNav + 'px');
  var scrolled = (0,hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__.default)(breakpoints.stickyNavScroll);

  var Mobile = function Mobile() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationMobile__WEBPACK_IMPORTED_MODULE_4__.default, {
        stick: scrolled
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false);
  };

  var Desktop = function Desktop() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().desktop__logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_images_logo_black_png__WEBPACK_IMPORTED_MODULE_3__.default,
          layout: "responsive"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationDesktop__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navigation),
        stick: scrolled
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: smallScreen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Mobile, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 22
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Desktop, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 35
    }, _this)
  }, void 0, false);
};

_s(Header, "p/NrvH1p43zlL8asAInKkpDn/3g=", false, function () {
  return [hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default, hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJicmVha3BvaW50cyIsInNtYWxsU2NyZWVuIiwidXNlTWVkaWFRdWVyeSIsIm1vYmlsZU5hdiIsInNjcm9sbGVkIiwidXNlU2Nyb2xsIiwic3RpY2t5TmF2U2Nyb2xsIiwiTW9iaWxlIiwiRGVza3RvcCIsInN0eWxlcyIsImxvZ29CbGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBU0EsSUFBTUEsTUFBdUIsR0FBRyxTQUExQkEsTUFBMEIsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ25ELE1BQU1DLFdBQVcsR0FBR0MsNERBQWEsQ0FBQ0YsV0FBVyxDQUFDRyxTQUFaLEdBQXdCLElBQXpCLENBQWpDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBUyxDQUFDTCxXQUFXLENBQUNNLGVBQWIsQ0FBMUI7O0FBRUEsTUFBTUMsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUM3Qix3QkFDRTtBQUFBLDZCQUNFLDhEQUFDLHNEQUFEO0FBQWtCLGFBQUssRUFBRUg7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBS0QsR0FORDs7QUFRQSxNQUFNSSxPQUFpQixHQUFHLFNBQXBCQSxPQUFvQixHQUFNO0FBQzlCLHdCQUNFO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFQywwRUFBZjtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFQyxrRUFBWjtBQUF1QixnQkFBTSxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSw4REFBQyx1REFBRDtBQUFtQixpQkFBUyxFQUFFRCx1RUFBOUI7QUFBaUQsYUFBSyxFQUFFTDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQSxvQkFERjtBQVFELEdBVEQ7O0FBV0Esc0JBQ0U7QUFBQSxjQUNHSCxXQUFXLGdCQUFHLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUFnQiw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEOUIsbUJBREY7QUFLRCxDQTVCRDs7R0FBTUYsTTtVQUNnQkcsd0QsRUFDSEcsb0Q7OztLQUZiTixNO0FBOEJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGZmODQ3NzRiMTEwZDY1YTJhOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgbG9nb0JsYWNrIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby1ibGFjay5wbmcnXHJcbmltcG9ydCBOYXZpZ2F0aW9uTW9iaWxlIGZyb20gJy4vTmF2aWdhdGlvbk1vYmlsZSdcclxuaW1wb3J0IE5hdmlnYXRpb25EZXNrdG9wIGZyb20gJy4vTmF2aWdhdGlvbkRlc2t0b3AnXHJcblxyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdob29rcy91c2VNZWRpYVF1ZXJ5J1xyXG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gJ2hvb2tzL3VzZVNjcm9sbCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIG1vYmlsZU5hdjogbnVtYmVyXHJcbiAgICBzdGlja3lOYXZTY3JvbGw6IG51bWJlclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBicmVha3BvaW50cyB9KSA9PiB7XHJcbiAgY29uc3Qgc21hbGxTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KGJyZWFrcG9pbnRzLm1vYmlsZU5hdiArICdweCcpXHJcbiAgY29uc3Qgc2Nyb2xsZWQgPSB1c2VTY3JvbGwoYnJlYWtwb2ludHMuc3RpY2t5TmF2U2Nyb2xsKVxyXG5cclxuICBjb25zdCBNb2JpbGU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TmF2aWdhdGlvbk1vYmlsZSBzdGljaz17c2Nyb2xsZWR9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgRGVza3RvcDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1snZGVza3RvcF9fbG9nbyddfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29CbGFja30gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8TmF2aWdhdGlvbkRlc2t0b3AgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0gc3RpY2s9e3Njcm9sbGVkfSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c21hbGxTY3JlZW4gPyA8TW9iaWxlIC8+IDogPERlc2t0b3AgLz59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/UI/SearchPopup.tsx":
/*!***************************************!*\
  !*** ./components/UI/SearchPopup.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchPopup.module.scss */ "./components/UI/SearchPopup.module.scss");
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_detect_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-detect-click-outside */ "./node_modules/react-detect-click-outside/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\SearchPopup.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var SearchPopup = function SearchPopup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      searchVis = _useState[0],
      setSearchVis = _useState[1];

  var searchRef = (0,react_detect_click_outside__WEBPACK_IMPORTED_MODULE_2__.useDetectClickOutside)({
    onTriggered: hideSearch
  });

  function toggleSearchVis() {
    setSearchVis(function (state) {
      return !state;
    });
  }

  function hideSearch() {
    setSearchVis(false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Vyh\u013Ead\xE1va\u0165"
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

_s(SearchPopup, "4LjcxsxIS6IlouelhZbovTalDhw=", false, function () {
  return [react_detect_click_outside__WEBPACK_IMPORTED_MODULE_2__.useDetectClickOutside];
});

_c = SearchPopup;
/* harmony default export */ __webpack_exports__["default"] = (SearchPopup);

var _c;

$RefreshReg$(_c, "SearchPopup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9TZWFyY2hQb3B1cC50c3giXSwibmFtZXMiOlsiU2VhcmNoUG9wdXAiLCJ1c2VTdGF0ZSIsInNlYXJjaFZpcyIsInNldFNlYXJjaFZpcyIsInNlYXJjaFJlZiIsInVzZURldGVjdENsaWNrT3V0c2lkZSIsIm9uVHJpZ2dlcmVkIiwiaGlkZVNlYXJjaCIsInRvZ2dsZVNlYXJjaFZpcyIsInN0YXRlIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUFBLGtCQUNBQywrQ0FBUSxDQUFDLEtBQUQsQ0FEUjtBQUFBLE1BQzNCQyxTQUQyQjtBQUFBLE1BQ2hCQyxZQURnQjs7QUFFbEMsTUFBTUMsU0FBUyxHQUFHQyxpRkFBcUIsQ0FBQztBQUFFQyxlQUFXLEVBQUVDO0FBQWYsR0FBRCxDQUF2Qzs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCTCxnQkFBWSxDQUFDLFVBQUNNLEtBQUQ7QUFBQSxhQUFXLENBQUNBLEtBQVo7QUFBQSxLQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTRixVQUFULEdBQXNCO0FBQ3BCSixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFTyx3RUFBaEI7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWpCRDs7R0FBTVYsVztVQUVjSyw2RTs7O0tBRmRMLFc7QUFtQk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kOGQ0ODM5YzM3MzRmZWI4ODRhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hQb3B1cC5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCB7IHVzZURldGVjdENsaWNrT3V0c2lkZSB9IGZyb20gJ3JlYWN0LWRldGVjdC1jbGljay1vdXRzaWRlJ1xyXG5cclxuY29uc3QgU2VhcmNoUG9wdXA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hWaXMsIHNldFNlYXJjaFZpc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VEZXRlY3RDbGlja091dHNpZGUoeyBvblRyaWdnZXJlZDogaGlkZVNlYXJjaCB9KVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVTZWFyY2hWaXMoKSB7XHJcbiAgICBzZXRTZWFyY2hWaXMoKHN0YXRlKSA9PiAhc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaWRlU2VhcmNoKCkge1xyXG4gICAgc2V0U2VhcmNoVmlzKGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICA8c3Bhbj5WeWjEvmFkw6F2YcWlPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQb3B1cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9
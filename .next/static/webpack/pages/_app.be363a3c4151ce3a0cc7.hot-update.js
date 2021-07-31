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





var SearchPopup = function SearchPopup(props) {
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
    console.log(searchVis);
  }

  function hideSearch() {
    setSearchVis(false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: searchRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: toggleSearchVis,
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), searchVis && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Vyh\u013Ead\xE1va\u0165"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9TZWFyY2hQb3B1cC50c3giXSwibmFtZXMiOlsiU2VhcmNoUG9wdXAiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoVmlzIiwic2V0U2VhcmNoVmlzIiwic2VhcmNoUmVmIiwidXNlRGV0ZWN0Q2xpY2tPdXRzaWRlIiwib25UcmlnZ2VyZWQiLCJoaWRlU2VhcmNoIiwidG9nZ2xlU2VhcmNoVmlzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQUMsS0FBRCxDQURIO0FBQUEsTUFDaENDLFNBRGdDO0FBQUEsTUFDckJDLFlBRHFCOztBQUV2QyxNQUFNQyxTQUFTLEdBQUdDLGlGQUFxQixDQUFDO0FBQUVDLGVBQVcsRUFBRUM7QUFBZixHQUFELENBQXZDOztBQUVBLFdBQVNDLGVBQVQsR0FBMkI7QUFDekJMLGdCQUFZLENBQUMsVUFBQ00sS0FBRDtBQUFBLGFBQVcsQ0FBQ0EsS0FBWjtBQUFBLEtBQUQsQ0FBWjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsU0FBWjtBQUNEOztBQUVELFdBQVNLLFVBQVQsR0FBc0I7QUFDcEJKLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBRUMsU0FBVjtBQUFBLDhCQUNFO0FBQVEsZUFBTyxFQUFFSSxlQUFqQjtBQUFBLGtCQUFtQ1IsS0FBSyxDQUFDWTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR1YsU0FBUyxpQkFDUjtBQUFLLGlCQUFTLEVBQUVXLHdFQUFoQjtBQUFBLGdDQUNFO0FBQU8sY0FBSSxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBYUQsQ0F6QkQ7O0dBQU1kLFc7VUFFY00sNkU7OztLQUZkTixXO0FBMkJOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYmUzNjNhM2M0MTUxY2UzYTBjYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyB1c2VEZXRlY3RDbGlja091dHNpZGUgfSBmcm9tICdyZWFjdC1kZXRlY3QtY2xpY2stb3V0c2lkZSdcclxuXHJcbmNvbnN0IFNlYXJjaFBvcHVwOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hWaXMsIHNldFNlYXJjaFZpc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBzZWFyY2hSZWYgPSB1c2VEZXRlY3RDbGlja091dHNpZGUoeyBvblRyaWdnZXJlZDogaGlkZVNlYXJjaCB9KVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVTZWFyY2hWaXMoKSB7XHJcbiAgICBzZXRTZWFyY2hWaXMoKHN0YXRlKSA9PiAhc3RhdGUpXHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hWaXMpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaWRlU2VhcmNoKCkge1xyXG4gICAgc2V0U2VhcmNoVmlzKGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiByZWY9e3NlYXJjaFJlZn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTZWFyY2hWaXN9Pntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj5cclxuICAgICAgICB7c2VhcmNoVmlzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4+VnloxL5hZMOhdmHFpTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQb3B1cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9
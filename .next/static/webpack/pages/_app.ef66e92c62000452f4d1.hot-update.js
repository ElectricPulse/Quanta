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
    setSearchVis(true);
    console.log(searchVis);
  }

  function hideSearch() {
    setSearchVis(false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: toggleSearchVis,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), searchVis && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: searchRef,
      className: (_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default().search),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Vyh\u013Ead\xE1va\u0165"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9TZWFyY2hQb3B1cC50c3giXSwibmFtZXMiOlsiU2VhcmNoUG9wdXAiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoVmlzIiwic2V0U2VhcmNoVmlzIiwic2VhcmNoUmVmIiwidXNlRGV0ZWN0Q2xpY2tPdXRzaWRlIiwib25UcmlnZ2VyZWQiLCJoaWRlU2VhcmNoIiwidG9nZ2xlU2VhcmNoVmlzIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFDLEtBQUQsQ0FESDtBQUFBLE1BQ2hDQyxTQURnQztBQUFBLE1BQ3JCQyxZQURxQjs7QUFFdkMsTUFBTUMsU0FBUyxHQUFHQyxpRkFBcUIsQ0FBQztBQUFFQyxlQUFXLEVBQUVDO0FBQWYsR0FBRCxDQUF2Qzs7QUFFQSxXQUFTQyxlQUFULEdBQTJCO0FBQ3pCTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsU0FBWjtBQUNEOztBQUVELFdBQVNLLFVBQVQsR0FBc0I7QUFDcEJKLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRUssZUFBakI7QUFBQSxnQkFBbUNSLEtBQUssQ0FBQ1c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdULFNBQVMsaUJBQ1I7QUFBSyxTQUFHLEVBQUVFLFNBQVY7QUFBcUIsZUFBUyxFQUFFUSx3RUFBaEM7QUFBQSw4QkFDRTtBQUFPLFlBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQSxrQkFERjtBQVdELENBdkJEOztHQUFNYixXO1VBRWNNLDZFOzs7S0FGZE4sVztBQXlCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVmNjZlOTJjNjIwMDA0NTJmNGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaFBvcHVwLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRGV0ZWN0Q2xpY2tPdXRzaWRlIH0gZnJvbSAncmVhY3QtZGV0ZWN0LWNsaWNrLW91dHNpZGUnXHJcblxyXG5jb25zdCBTZWFyY2hQb3B1cDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VhcmNoVmlzLCBzZXRTZWFyY2hWaXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlRGV0ZWN0Q2xpY2tPdXRzaWRlKHsgb25UcmlnZ2VyZWQ6IGhpZGVTZWFyY2ggfSlcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlU2VhcmNoVmlzKCkge1xyXG4gICAgc2V0U2VhcmNoVmlzKHRydWUpXHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hWaXMpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaWRlU2VhcmNoKCkge1xyXG4gICAgc2V0U2VhcmNoVmlzKGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTZWFyY2hWaXN9Pntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj5cclxuICAgICAge3NlYXJjaFZpcyAmJiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3NlYXJjaFJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICA8c3Bhbj5WeWjEvmFkw6F2YcWlPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQb3B1cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9
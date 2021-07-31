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
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchPopup.module.scss */ "./components/UI/SearchPopup.module.scss");
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_detect_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-detect-click-outside */ "./node_modules/react-detect-click-outside/dist/index.js");
/* harmony import */ var _hooks_useToggleState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks/useToggleState */ "./hooks/useToggleState.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\SearchPopup.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var SearchPopup = function SearchPopup(props) {
  _s();

  var _useToggleState = (0,_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_4__.default)(false),
      _useToggleState2 = (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useToggleState, 3),
      searchVis = _useToggleState2[0],
      toggleSearchVis = _useToggleState2[1],
      setSearchVis = _useToggleState2[2];

  var searchRef = (0,react_detect_click_outside__WEBPACK_IMPORTED_MODULE_3__.useDetectClickOutside)({
    onTriggered: setSearchVis.bind(null, false)
  });

  function hideSearch() {}

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: searchRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: toggleSearchVis,
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), searchVis && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Vyh\u013Ead\xE1va\u0165"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(SearchPopup, "+mN808wV88AM0AXMYlYnqnuQN2o=", false, function () {
  return [_hooks_useToggleState__WEBPACK_IMPORTED_MODULE_4__.default, react_detect_click_outside__WEBPACK_IMPORTED_MODULE_3__.useDetectClickOutside];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9TZWFyY2hQb3B1cC50c3giXSwibmFtZXMiOlsiU2VhcmNoUG9wdXAiLCJwcm9wcyIsInVzZVRvZ2dsZVN0YXRlIiwic2VhcmNoVmlzIiwidG9nZ2xlU2VhcmNoVmlzIiwic2V0U2VhcmNoVmlzIiwic2VhcmNoUmVmIiwidXNlRGV0ZWN0Q2xpY2tPdXRzaWRlIiwib25UcmlnZ2VyZWQiLCJiaW5kIiwiaGlkZVNlYXJjaCIsImNoaWxkcmVuIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ1lDLDhEQUFjLENBQUMsS0FBRCxDQUQxQjtBQUFBO0FBQUEsTUFDaENDLFNBRGdDO0FBQUEsTUFDckJDLGVBRHFCO0FBQUEsTUFDSkMsWUFESTs7QUFFdkMsTUFBTUMsU0FBUyxHQUFHQyxpRkFBcUIsQ0FBQztBQUFFQyxlQUFXLEVBQUVILFlBQVksQ0FBQ0ksSUFBYixDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQUFmLEdBQUQsQ0FBdkM7O0FBRUEsV0FBU0MsVUFBVCxHQUFzQixDQUVyQjs7QUFFRCxzQkFDRTtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFFSixTQUFWO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUVGLGVBQWpCO0FBQUEsa0JBQW1DSCxLQUFLLENBQUNVO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHUixTQUFTLGlCQUNSO0FBQUssaUJBQVMsRUFBRVMsd0VBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFhRCxDQXJCRDs7R0FBTVosVztVQUMrQ0UsMEQsRUFDakNLLDZFOzs7S0FGZFAsVztBQXVCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjlkODk3NDFiYWQwOGU1MWQxMjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaFBvcHVwLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRGV0ZWN0Q2xpY2tPdXRzaWRlIH0gZnJvbSAncmVhY3QtZGV0ZWN0LWNsaWNrLW91dHNpZGUnXHJcbmltcG9ydCB1c2VUb2dnbGVTdGF0ZSBmcm9tICcuLy4uLy4uL2hvb2tzL3VzZVRvZ2dsZVN0YXRlJ1xyXG5cclxuY29uc3QgU2VhcmNoUG9wdXA6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFZpcywgdG9nZ2xlU2VhcmNoVmlzLCBzZXRTZWFyY2hWaXNdID0gdXNlVG9nZ2xlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3Qgc2VhcmNoUmVmID0gdXNlRGV0ZWN0Q2xpY2tPdXRzaWRlKHsgb25UcmlnZ2VyZWQ6IHNldFNlYXJjaFZpcy5iaW5kKG51bGwsIGZhbHNlKSB9KVxyXG5cclxuICBmdW5jdGlvbiBoaWRlU2VhcmNoKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiByZWY9e3NlYXJjaFJlZn0+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTZWFyY2hWaXN9Pntwcm9wcy5jaGlsZHJlbn08L2J1dHRvbj5cclxuICAgICAgICB7c2VhcmNoVmlzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4+VnloxL5hZMOhdmHFpTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQb3B1cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9
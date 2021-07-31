self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./hooks/useToggleState.tsx":
/*!**********************************!*\
  !*** ./hooks/useToggleState.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



var useToggleState = function useToggleState(initialValue) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),
      state = _useState[0],
      setState = _useState[1];

  function toggleState() {
    setState(function (state) {
      return !state;
    });
  }

  return [state, toggleState, setState];
};

_s(useToggleState, "AEq12RjoQuqaeOViObLKJC9cUMY=");

/* harmony default export */ __webpack_exports__["default"] = (useToggleState);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVG9nZ2xlU3RhdGUudHN4Il0sIm5hbWVzIjpbInVzZVRvZ2dsZVN0YXRlIiwiaW5pdGlhbFZhbHVlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidG9nZ2xlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsWUFBRCxFQUEyQjtBQUFBOztBQUFBLGtCQUN0QkMsK0NBQVEsQ0FBQ0QsWUFBRCxDQURjO0FBQUEsTUFDekNFLEtBRHlDO0FBQUEsTUFDbENDLFFBRGtDOztBQUdoRCxXQUFTQyxXQUFULEdBQXVCO0FBQ25CRCxZQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLGFBQVcsQ0FBQ0EsS0FBWjtBQUFBLEtBQUQsQ0FBUjtBQUNIOztBQUVELFNBQU8sQ0FBQ0EsS0FBRCxFQUFRRSxXQUFSLEVBQXFCRCxRQUFyQixDQUFQO0FBQ0QsQ0FSRDs7R0FBTUosYzs7QUFVTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFmMWVmNjhjNmQ1NmFmM2M4ODM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgdXNlVG9nZ2xlU3RhdGUgPSAoaW5pdGlhbFZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpXHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVN0YXRlKCkge1xyXG4gICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+ICFzdGF0ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiBbc3RhdGUsIHRvZ2dsZVN0YXRlLCBzZXRTdGF0ZV0gYXMgY29uc3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlU3RhdGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
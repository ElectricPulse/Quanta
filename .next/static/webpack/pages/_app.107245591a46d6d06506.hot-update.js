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
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchPopup.module.scss */ "./components/UI/SearchPopup.module.scss");
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_detect_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-detect-click-outside */ "./node_modules/react-detect-click-outside/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\SearchPopup.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var SearchPopup = function SearchPopup() {
  _s();

  var _useState = useState(false),
      _useState2 = (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      searchVis = _useState2[0],
      setSearchVis = _useState2[1];

  var searchRef = (0,react_detect_click_outside__WEBPACK_IMPORTED_MODULE_3__.useDetectClickOutside)({
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
    className: (_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().search),
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
  return [react_detect_click_outside__WEBPACK_IMPORTED_MODULE_3__.useDetectClickOutside];
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


/***/ }),

/***/ "./node_modules/react-detect-click-outside/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-detect-click-outside/dist/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({ value: true }));

var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Hook used to detect clicks outside a component (or an escape key press). onTriggered function is triggered on `click` or escape `keyup` event.
 *
 */
function useDetectClickOutside(_a) {
    var onTriggered = _a.onTriggered, disableClick = _a.disableClick, disableKeys = _a.disableKeys, allowAnyKey = _a.allowAnyKey, triggerKeys = _a.triggerKeys;
    var ref = react.useRef(null);
    var keyListener = react.useCallback(function (e) {
        if (allowAnyKey) {
            onTriggered(e);
        }
        else if (triggerKeys) {
            if (triggerKeys.includes(e.key)) {
                onTriggered(e);
            }
        }
        else {
            if (e.key === 'Escape') {
                onTriggered(e);
            }
        }
    }, []);
    var clickListener = react.useCallback(function (e) {
        if (ref && ref.current) {
            if (!ref.current.contains(e.target)) {
                onTriggered === null || onTriggered === void 0 ? void 0 : onTriggered(e);
            }
        }
    }, [ref.current]);
    react.useEffect(function () {
        !disableClick && document.addEventListener('click', clickListener);
        !disableKeys && document.addEventListener('keyup', keyListener);
        return function () {
            !disableClick && document.removeEventListener('click', clickListener);
            !disableKeys && document.removeEventListener('keyup', keyListener);
        };
    }, []);
    return ref;
}

exports.useDetectClickOutside = useDetectClickOutside;
//# sourceMappingURL=index.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9TZWFyY2hQb3B1cC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kZXRlY3QtY2xpY2stb3V0c2lkZS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaFBvcHVwIiwidXNlU3RhdGUiLCJzZWFyY2hWaXMiLCJzZXRTZWFyY2hWaXMiLCJzZWFyY2hSZWYiLCJ1c2VEZXRlY3RDbGlja091dHNpZGUiLCJvblRyaWdnZXJlZCIsImhpZGVTZWFyY2giLCJ0b2dnbGVTZWFyY2hWaXMiLCJzdGF0ZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUFBLGtCQUNBQyxRQUFRLENBQUMsS0FBRCxDQURSO0FBQUE7QUFBQSxNQUMzQkMsU0FEMkI7QUFBQSxNQUNoQkMsWUFEZ0I7O0FBRWxDLE1BQU1DLFNBQVMsR0FBR0MsaUZBQXFCLENBQUM7QUFBRUMsZUFBVyxFQUFFQztBQUFmLEdBQUQsQ0FBdkM7O0FBRUEsV0FBU0MsZUFBVCxHQUEyQjtBQUN6QkwsZ0JBQVksQ0FBQyxVQUFDTSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFaO0FBQ0Q7O0FBRUQsV0FBU0YsVUFBVCxHQUFzQjtBQUNwQkosZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRU8sd0VBQWhCO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FqQkQ7O0dBQU1WLFc7VUFFY0ssNkU7OztLQUZkTCxXO0FBbUJOLCtEQUFlQSxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQzs7QUFFN0QsWUFBWSxtQkFBTyxDQUFDLDRDQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTA3MjQ1NTkxYTQ2ZDZkMDY1MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaFBvcHVwLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRGV0ZWN0Q2xpY2tPdXRzaWRlIH0gZnJvbSAncmVhY3QtZGV0ZWN0LWNsaWNrLW91dHNpZGUnXHJcblxyXG5jb25zdCBTZWFyY2hQb3B1cDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFZpcywgc2V0U2VhcmNoVmlzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHNlYXJjaFJlZiA9IHVzZURldGVjdENsaWNrT3V0c2lkZSh7IG9uVHJpZ2dlcmVkOiBoaWRlU2VhcmNoIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVNlYXJjaFZpcygpIHtcclxuICAgIHNldFNlYXJjaFZpcygoc3RhdGUpID0+ICFzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVTZWFyY2goKSB7XHJcbiAgICBzZXRTZWFyY2hWaXMoZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgIDxzcGFuPlZ5aMS+YWTDoXZhxaU8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBvcHVwXHJcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxyXG4gKiBIb29rIHVzZWQgdG8gZGV0ZWN0IGNsaWNrcyBvdXRzaWRlIGEgY29tcG9uZW50IChvciBhbiBlc2NhcGUga2V5IHByZXNzKS4gb25UcmlnZ2VyZWQgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9uIGBjbGlja2Agb3IgZXNjYXBlIGBrZXl1cGAgZXZlbnQuXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VEZXRlY3RDbGlja091dHNpZGUoX2EpIHtcclxuICAgIHZhciBvblRyaWdnZXJlZCA9IF9hLm9uVHJpZ2dlcmVkLCBkaXNhYmxlQ2xpY2sgPSBfYS5kaXNhYmxlQ2xpY2ssIGRpc2FibGVLZXlzID0gX2EuZGlzYWJsZUtleXMsIGFsbG93QW55S2V5ID0gX2EuYWxsb3dBbnlLZXksIHRyaWdnZXJLZXlzID0gX2EudHJpZ2dlcktleXM7XHJcbiAgICB2YXIgcmVmID0gcmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgdmFyIGtleUxpc3RlbmVyID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoYWxsb3dBbnlLZXkpIHtcclxuICAgICAgICAgICAgb25UcmlnZ2VyZWQoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRyaWdnZXJLZXlzKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyS2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcclxuICAgICAgICAgICAgICAgIG9uVHJpZ2dlcmVkKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBvblRyaWdnZXJlZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHZhciBjbGlja0xpc3RlbmVyID0gcmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghcmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBvblRyaWdnZXJlZCA9PT0gbnVsbCB8fCBvblRyaWdnZXJlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25UcmlnZ2VyZWQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVmLmN1cnJlbnRdKTtcclxuICAgIHJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIWRpc2FibGVDbGljayAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrTGlzdGVuZXIpO1xyXG4gICAgICAgICFkaXNhYmxlS2V5cyAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleUxpc3RlbmVyKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAhZGlzYWJsZUNsaWNrICYmIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICFkaXNhYmxlS2V5cyAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleUxpc3RlbmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHJlZjtcclxufVxuXG5leHBvcnRzLnVzZURldGVjdENsaWNrT3V0c2lkZSA9IHVzZURldGVjdENsaWNrT3V0c2lkZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
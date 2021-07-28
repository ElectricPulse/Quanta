self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UI/ExternalImage.tsx":
/*!*****************************************!*\
  !*** ./components/UI/ExternalImage.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cloudinary_build_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cloudinary-build-url */ "./node_modules/cloudinary-build-url/dist/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExternalImage.module.scss */ "./components/UI/ExternalImage.module.scss");
/* harmony import */ var _ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\ExternalImage.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ExternalImage = function ExternalImage(props) {
  var imageUrl = (0,cloudinary_build_url__WEBPACK_IMPORTED_MODULE_4__.buildUrl)(props.imageName, {
    cloud: {
      cloudName: 'dpki8ezpl'
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, props), {}, {
      src: imageUrl,
      layout: "fill",
      className: "".concat(props.className, " ").concat((_ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = ExternalImage;
/* harmony default export */ __webpack_exports__["default"] = (ExternalImage);

var _c;

$RefreshReg$(_c, "ExternalImage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9FeHRlcm5hbEltYWdlLnRzeCJdLCJuYW1lcyI6WyJFeHRlcm5hbEltYWdlIiwicHJvcHMiLCJpbWFnZVVybCIsImJ1aWxkVXJsIiwiaW1hZ2VOYW1lIiwiY2xvdWQiLCJjbG91ZE5hbWUiLCJjbGFzc05hbWUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxDQUFDQyxLQUFELEVBQVc7QUFDaEQsTUFBTUMsUUFBUSxHQUFHQyw4REFBUSxDQUFDRixLQUFLLENBQUNHLFNBQVAsRUFBa0I7QUFDekNDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETjtBQURrQyxHQUFsQixDQUF6QjtBQU1BLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQsa0NBQ01MLEtBRE47QUFFRSxTQUFHLEVBQUVDLFFBRlA7QUFHRSxZQUFNLEVBQUMsTUFIVDtBQUlFLGVBQVMsWUFBS0QsS0FBSyxDQUFDTSxTQUFYLGNBQXdCQyx5RUFBeEI7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FqQkQ7O0tBQU1SLGE7QUFtQk4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNThmZTVjNTRmNTA2Mzc2NDQwZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYnVpbGRVcmwgfSBmcm9tICdjbG91ZGluYXJ5LWJ1aWxkLXVybCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FeHRlcm5hbEltYWdlLm1vZHVsZS5zY3NzJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpbWFnZU5hbWU6IHN0cmluZ1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBFeHRlcm5hbEltYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbWFnZVVybCA9IGJ1aWxkVXJsKHByb3BzLmltYWdlTmFtZSwge1xyXG4gICAgY2xvdWQ6IHtcclxuICAgICAgY2xvdWROYW1lOiAnZHBraThlenBsJyxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmNsYXNzTmFtZX0gJHtzdHlsZXMuaW1hZ2V9YH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZXJuYWxJbWFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
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
      className: "".concat(className, " ").concat('layout' in props && props.layout === 'fill' ? (_ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cover) : '')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9FeHRlcm5hbEltYWdlLnRzeCJdLCJuYW1lcyI6WyJFeHRlcm5hbEltYWdlIiwicHJvcHMiLCJpbWFnZVVybCIsImJ1aWxkVXJsIiwiaW1hZ2VOYW1lIiwiY2xvdWQiLCJjbG91ZE5hbWUiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxhQUE4QixHQUFHLFNBQWpDQSxhQUFpQyxDQUFDQyxLQUFELEVBQVc7QUFDaEQsTUFBTUMsUUFBUSxHQUFHQyw4REFBUSxDQUFDRixLQUFLLENBQUNHLFNBQVAsRUFBa0I7QUFDekNDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETjtBQURrQyxHQUFsQixDQUF6QjtBQU1BLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQsa0NBQ01MLEtBRE47QUFFRSxTQUFHLEVBQUVDLFFBRlA7QUFHRSxlQUFTLFlBQUtLLFNBQUwsY0FDUCxZQUFZTixLQUFaLElBQXFCQSxLQUFLLENBQUNPLE1BQU4sS0FBaUIsTUFBdEMsR0FBK0NDLHlFQUEvQyxHQUE4RCxFQUR2RDtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWxCRDs7S0FBTVQsYTtBQW9CTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTVmM2FhZWJiZDRhYzQ1NWU1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBidWlsZFVybCB9IGZyb20gJ2Nsb3VkaW5hcnktYnVpbGQtdXJsJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0V4dGVybmFsSW1hZ2UubW9kdWxlLnNjc3MnXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGltYWdlTmFtZTogc3RyaW5nXHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEV4dGVybmFsSW1hZ2U6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGltYWdlVXJsID0gYnVpbGRVcmwocHJvcHMuaW1hZ2VOYW1lLCB7XHJcbiAgICBjbG91ZDoge1xyXG4gICAgICBjbG91ZE5hbWU6ICdkcGtpOGV6cGwnLFxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke1xyXG4gICAgICAgICAgJ2xheW91dCcgaW4gcHJvcHMgJiYgcHJvcHMubGF5b3V0ID09PSAnZmlsbCcgPyBzdHlsZXMuY292ZXIgOiAnJ1xyXG4gICAgICAgIH1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbEltYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
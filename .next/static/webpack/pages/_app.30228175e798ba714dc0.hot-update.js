self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/NavigationMobile.tsx":
/*!************************************************!*\
  !*** ./components/Layout/NavigationMobile.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavigationMobile.module.scss */ "./components/Layout/NavigationMobile.module.scss");
/* harmony import */ var _NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/logo-white.png */ "./public/images/logo-white.png");
/* harmony import */ var components_UI_SearchPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/SearchPopup */ "./components/UI/SearchPopup.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\NavigationMobile.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Menu = function Menu() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().links),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "DOMOV"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "TESTY"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA WHITE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA BLACK"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA SMART"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "PR SPR\xC1VY"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "O N\xC1S"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = Menu;

var NavigationMobile = function NavigationMobile() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      menuVis = _useState[0],
      setMenuVis = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      searchVis = _useState2[0],
      setSearchVis = _useState2[1];

  function toggleMenuVis() {
    setMenuVis(function (state) {
      return !state;
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar), " ").concat(menuVis ? (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["sidebar--visible"]) : (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["sidebar--hidden"])),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar__content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: toggleMenuVis,
          className: "".concat((_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon), " ").concat((_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon__close)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: 'times'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "TESTY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "QUANTA WHITE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "QUANTA BLACK"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "QUANTA SMART"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "PR SPR\xC1VY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "O N\xC1S"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navigation),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: toggleMenuVis,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
          className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
          icon: 'grip-horizontal'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__.default,
          layout: "responsive"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_UI_SearchPopup__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
          className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
          icon: 'search'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(NavigationMobile, "d5DEu/vJgydfBfcs/o+C37ERqnM=");

_c2 = NavigationMobile;
/* harmony default export */ __webpack_exports__["default"] = (NavigationMobile);

var _c, _c2;

$RefreshReg$(_c, "Menu");
$RefreshReg$(_c2, "NavigationMobile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2aWdhdGlvbk1vYmlsZS50c3giXSwibmFtZXMiOlsiTWVudSIsInN0eWxlcyIsIk5hdmlnYXRpb25Nb2JpbGUiLCJ1c2VTdGF0ZSIsIm1lbnVWaXMiLCJzZXRNZW51VmlzIiwic2VhcmNoVmlzIiwic2V0U2VhcmNoVmlzIiwidG9nZ2xlTWVudVZpcyIsInN0YXRlIiwibG9nb1doaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFDM0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDRFQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQVpEOztLQUFNRCxJOztBQWNOLElBQU1FLGdCQUEwQixHQUFHLFNBQTdCQSxnQkFBNkIsR0FBTTtBQUFBOztBQUFBLGtCQUNUQywrQ0FBUSxDQUFDLEtBQUQsQ0FEQztBQUFBLE1BQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxVQUR1Qjs7QUFBQSxtQkFFTEYsK0NBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUVoQ0csU0FGZ0M7QUFBQSxNQUVyQkMsWUFGcUI7O0FBSXZDLFdBQVNDLGFBQVQsR0FBeUI7QUFDdkJILGNBQVUsQ0FBQyxVQUFDSSxLQUFEO0FBQUEsYUFBVyxDQUFDQSxLQUFaO0FBQUEsS0FBRCxDQUFWO0FBQ0Q7O0FBR0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGVBQVMsWUFBS1IsOEVBQUwsY0FDUEcsT0FBTyxHQUFHSCwwRkFBSCxHQUFnQ0EseUZBRGhDLENBRFg7QUFBQSw2QkFLRTtBQUFLLGlCQUFTLEVBQUVBLHVGQUFoQjtBQUFBLGdDQUNFO0FBQ0UsaUJBQU8sRUFBRU8sYUFEWDtBQUVFLG1CQUFTLFlBQUtQLDJFQUFMLGNBQW9CQSxrRkFBcEIsQ0FGWDtBQUFBLGlDQUlFLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUVBLDRFQUFoQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBd0JFO0FBQUssZUFBUyxFQUFFQSxpRkFBaEI7QUFBQSw4QkFDRTtBQUFRLGVBQU8sRUFBRU8sYUFBakI7QUFBQSwrQkFDRSw4REFBQywyRUFBRDtBQUFpQixtQkFBUyxFQUFFUCwyRUFBNUI7QUFBeUMsY0FBSSxFQUFFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFJLGlCQUFTLEVBQUVBLDJFQUFmO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVTLGtFQUFaO0FBQXVCLGdCQUFNLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVFFLDhEQUFDLDhEQUFEO0FBQUEsK0JBQ0UsOERBQUMsMkVBQUQ7QUFBaUIsbUJBQVMsRUFBRVQsMkVBQTVCO0FBQXlDLGNBQUksRUFBRTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBLGtCQURGO0FBd0NELENBakREOztHQUFNQyxnQjs7TUFBQUEsZ0I7QUFtRE4sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzAyMjgxNzVlNzk4YmE3MTRkYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbk1vYmlsZS5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBsb2dvV2hpdGUgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLXdoaXRlLnBuZydcclxuaW1wb3J0IFNlYXJjaFBvcHVwIGZyb20gJ2NvbXBvbmVudHMvVUkvU2VhcmNoUG9wdXAnXHJcblxyXG5jb25zdCBNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgIDxhPkRPTU9WPC9hPlxyXG4gICAgICA8YT5URVNUWTwvYT5cclxuICAgICAgPGE+UVVBTlRBIFdISVRFPC9hPlxyXG4gICAgICA8YT5RVUFOVEEgQkxBQ0s8L2E+XHJcbiAgICAgIDxhPlFVQU5UQSBTTUFSVDwvYT5cclxuICAgICAgPGE+UFIgU1BSw4FWWTwvYT5cclxuICAgICAgPGE+TyBOw4FTPC9hPlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uTW9iaWxlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudVZpcywgc2V0TWVudVZpc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2VhcmNoVmlzLCBzZXRTZWFyY2hWaXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnVWaXMoKSB7XHJcbiAgICBzZXRNZW51VmlzKChzdGF0ZSkgPT4gIXN0YXRlKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2lkZWJhcn0gJHtcclxuICAgICAgICAgIG1lbnVWaXMgPyBzdHlsZXNbJ3NpZGViYXItLXZpc2libGUnXSA6IHN0eWxlc1snc2lkZWJhci0taGlkZGVuJ11cclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9fY29udGVudH0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnVWaXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb259ICR7c3R5bGVzWydpY29uX19jbG9zZSddfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17J3RpbWVzJ30gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgICAgIDxhPlRFU1RZPC9hPlxyXG4gICAgICAgICAgICA8YT5RVUFOVEEgV0hJVEU8L2E+XHJcbiAgICAgICAgICAgIDxhPlFVQU5UQSBCTEFDSzwvYT5cclxuICAgICAgICAgICAgPGE+UVVBTlRBIFNNQVJUPC9hPlxyXG4gICAgICAgICAgICA8YT5QUiBTUFLDgVZZPC9hPlxyXG4gICAgICAgICAgICA8YT5PIE7DgVM8L2E+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudVZpc30+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IGljb249eydncmlwLWhvcml6b250YWwnfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29XaGl0ZX0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPFNlYXJjaFBvcHVwPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXsnc2VhcmNoJ30gLz5cclxuICAgICAgICA8L1NlYXJjaFBvcHVwPlxyXG4gICAgICA8L2Rpdj5cclxuICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbk1vYmlsZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
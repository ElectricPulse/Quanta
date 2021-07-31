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
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Layout/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavigationMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationMobile */ "./components/Layout/NavigationMobile.tsx");
/* harmony import */ var _NavigationDesktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationDesktop */ "./components/Layout/NavigationDesktop.tsx");
/* harmony import */ var hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useMediaQuery */ "./hooks/useMediaQuery.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\Header.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Header = function Header(props) {
  _s();

  var smallScreen = (0,hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default)("".concat(props.mobileNavBp, "px"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
    children: smallScreen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationMobile__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 20
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationDesktop__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 42
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, _this);
};

_s(Header, "k0AJmkxLNk/3IBrht/OSAFINU7c=", false, function () {
  return [hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default];
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


/***/ }),

/***/ "./components/Layout/NavigationMobile.tsx":
/*!************************************************!*\
  !*** ./components/Layout/NavigationMobile.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavigationMobile.module.scss */ "./components/Layout/NavigationMobile.module.scss");
/* harmony import */ var _NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/logo-white.png */ "./public/images/logo-white.png");
/* harmony import */ var components_UI_SearchPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/SearchPopup */ "./components/UI/SearchPopup.tsx");
/* harmony import */ var hooks_useToggleState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useToggleState */ "./hooks/useToggleState.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\NavigationMobile.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Menu = function Menu() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().links),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "DOMOV"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "TESTY"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA WHITE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA BLACK"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA SMART"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "PR SPR\xC1VY"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "O N\xC1S"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Menu;

var NavigationMobile = function NavigationMobile() {
  _s();

  var _useToggleState = (0,hooks_useToggleState__WEBPACK_IMPORTED_MODULE_7__.default)(false),
      _useToggleState2 = (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useToggleState, 2),
      menuVis = _useToggleState2[0],
      toggleMenuVis = _useToggleState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "".concat((_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sidebar), " ").concat(menuVis ? (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["sidebar--visible"]) : (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["sidebar--hidden"])),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sidebar__content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: toggleMenuVis,
          className: "".concat((_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon), " ").concat((_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon__close)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
            icon: 'times'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
          className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "TESTY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "QUANTA WHITE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "QUANTA BLACK"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "QUANTA SMART"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "PR SPR\xC1VY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "O N\xC1S"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navigation),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: toggleMenuVis,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
          className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon),
          icon: 'grip-horizontal'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_5__.default,
          layout: "responsive"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_UI_SearchPopup__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
          className: (_NavigationMobile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon),
          icon: 'search'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(NavigationMobile, "ilhsusF+cuWCQtei2yj0qyvQ+1c=", false, function () {
  return [hooks_useToggleState__WEBPACK_IMPORTED_MODULE_7__.default];
});

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


/***/ }),

/***/ "./components/Layout/NavigationMobile.module.scss":
/*!********************************************************!*\
  !*** ./components/Layout/NavigationMobile.module.scss ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./NavigationMobile.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Layout/NavigationMobile.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./NavigationMobile.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Layout/NavigationMobile.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./NavigationMobile.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Layout/NavigationMobile.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Layout/NavigationMobile.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Layout/NavigationMobile.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".NavigationMobile_navigation__1cne7 {\n  display: -moz-box;\n  display: flex;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  -moz-box-align: center;\n       align-items: center;\n  background-color: #222222;\n  padding: -moz-calc(5px + 2vw) -moz-calc(10px + 3vw);\n  padding: calc(5px + 2vw) calc(10px + 3vw);\n}\n\n.NavigationMobile_logo__2Q1Bd {\n  width: 180px;\n}\n\n.NavigationMobile_icon__SaHcC {\n  font-size: 42px;\n  color: white;\n}\n.NavigationMobile_icon__close__v-Cwb {\n  align-self: flex-end;\n  font-size: 40px;\n}\n\n.NavigationMobile_sidebar__1pigv {\n  position: fixed;\n  inset: 0;\n  z-index: 1;\n  -webkit-transition: -webkit-transform ease 0.4s, -webkit-backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s;\n  transition: -webkit-transform ease 0.4s, -webkit-backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s;\n  -moz-transition: transform ease 0.4s, backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s, -moz-transform ease 0.4s;\n  transition: transform ease 0.4s, backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s;\n  transition: transform ease 0.4s, backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s, -webkit-transform ease 0.4s, -moz-transform ease 0.4s, -webkit-backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s;\n}\n.NavigationMobile_sidebar__1pigv * {\n  z-index: inherit;\n}\n.NavigationMobile_sidebar--visible__vFrjx {\n  -webkit-transform: translateX(0px);\n     -moz-transform: translateX(0px);\n          transform: translateX(0px);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.NavigationMobile_sidebar--hidden__7Hlv7 {\n  -webkit-transform: translateX(-100%);\n     -moz-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-backdrop-filter: blur(0);\n          backdrop-filter: blur(0);\n}\n.NavigationMobile_sidebar__content__1QK3N {\n  width: 90%;\n  height: 100%;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  grid-gap: 40px;\n  gap: 40px;\n  color: white;\n  padding: 8vw;\n  background: -webkit-gradient(linear, left top, right bottom, color-stop(12%, #222222), color-stop(90%, red));\n  background: -webkit-linear-gradient(top left, #222222 12%, red 90%);\n  background: -moz-linear-gradient(top left, #222222 12%, red 90%);\n  background: linear-gradient(to bottom right, #222222 12%, red 90%);\n}\n\n.NavigationMobile_click-blocker__2qBuS {\n  inset: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  background-color: transparent;\n  z-index: -1;\n}\n\n.NavigationMobile_links__1hmy7 {\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  grid-gap: 30px;\n  gap: 30px;\n  color: currentColor;\n  font-size: 1.4rem;\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://NavigationMobile.module.scss","webpack://../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,sBAAA;OAAA,mBAAA;EAEA,yBCHc;EDId,mDAAA;EAAA,yCAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,eAAA;EACA,YCRY;ADMd;AAIE;EACE,oBAAA;EACA,eAAA;AAFJ;;AAMA;EACE,eAAA;EACA,QAAA;EAEA,UAAA;EAEA,2GAAA;EAAA,mGAAA;EAAA,kHAAA;EAAA,mFAAA;EAAA,sMAAA;AALF;AAQE;EACE,gBAAA;AANJ;AASE;EACE,kCAAA;KAAA,+BAAA;UAAA,0BAAA;EACA,kCAAA;UAAA,0BAAA;AAPJ;AAUE;EACE,oCAAA;KAAA,iCAAA;UAAA,4BAAA;EACA,gCAAA;UAAA,wBAAA;AARJ;AAWE;EACE,UAAA;EACA,YAAA;EAEA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,cAAA;EAAA,SAAA;EAEA,YC/CU;EDgDV,YAAA;EACA,4GAAA;EAAA,mEAAA;EAAA,gEAAA;EAAA,kEAAA;AAXJ;;AAmBA;EACE,QAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,6BAAA;EAEA,WAAA;AAjBF;;AAoBA;EACE,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,cAAA;EAAA,SAAA;EAEA,mBAAA;EACA,iBAAA;EACA,gBAAA;AAlBF","sourcesContent":["@import '../../styles/variables';\r\n\r\n.navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  \r\n  background-color: $color-primary;\r\n  padding: calc(5px + 2vw) calc(10px + 3vw);\r\n}\r\n\r\n.logo {\r\n  width: 180px;\r\n}\r\n\r\n.icon {\r\n  font-size: 42px;\r\n  color: $color-white;\r\n\r\n  &__close {\r\n    align-self: flex-end;\r\n    font-size: 40px;\r\n  }\r\n}\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  inset: 0;\r\n\r\n  z-index: 1;\r\n\r\n  transition: transform ease 0.4s,\r\n    backdrop-filter cubic-bezier(0.9, 0, 0.9, 0) 0.45s;\r\n\r\n  & * {\r\n    z-index: inherit;\r\n  }\r\n\r\n  &--visible {\r\n    transform: translateX(0px);\r\n    backdrop-filter: blur(4px);\r\n  }\r\n\r\n  &--hidden {\r\n    transform: translateX(-100%);\r\n    backdrop-filter: blur(0);\r\n  }\r\n\r\n  &__content {\r\n    width: 90%;\r\n    height: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n\r\n    color: $color-white;\r\n    padding: 8vw;\r\n    background: linear-gradient(\r\n      to bottom right,\r\n      $color-primary 12%,\r\n      $color-secondary 90%\r\n    );\r\n  }\r\n}\r\n\r\n.click-blocker {\r\n  inset: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  pointer-events: none;\r\n  background-color: transparent;\r\n\r\n  z-index: -1;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n\r\n  color: currentColor;\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n}\r\n","////////////////\r\n/// Colors\r\n////////////////\r\n\r\n$color-primary: rgb(34, 34, 34);\r\n$color-secondary: red;\r\n\r\n$color-grey-1: rgb(223, 223, 223);\r\n$color-grey-2: rgb(232, 232, 232);\r\n$color-white: white;\r\n$color-black: black;\r\n$color-blue-1: rgb(77, 178, 236);\r\n$color-blue-2: rgb(149, 170, 191);\r\n\r\n$color-link-hover: blue;\r\n\r\n////////////////\r\n/// Other Variables\r\n////////////////\r\n\r\n$border: 1px solid rgb(207, 207, 207);\r\n$fillet: 5px;\r\n$shadow: 8px 8px 10px rgb(black, 0.2);\r\n\r\n////////////////\r\n/// Breakpoints\r\n////////////////\r\n\r\n$bp-1: 1600px;\r\n$bp-2: 1000px;\r\n$bp-3: 900px;\r\n$bp-4: 700px;\r\n\r\n\r\n////////////////\r\n/// Mixins\r\n////////////////\r\n\r\n@mixin screen($breakpoint: '') {\r\n  @media only screen and (max-width: $breakpoint) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navigation": "NavigationMobile_navigation__1cne7",
	"logo": "NavigationMobile_logo__2Q1Bd",
	"icon": "NavigationMobile_icon__SaHcC",
	"icon__close": "NavigationMobile_icon__close__v-Cwb",
	"sidebar": "NavigationMobile_sidebar__1pigv",
	"sidebar--visible": "NavigationMobile_sidebar--visible__vFrjx",
	"sidebar--hidden": "NavigationMobile_sidebar--hidden__7Hlv7",
	"sidebar__content": "NavigationMobile_sidebar__content__1QK3N",
	"click-blocker": "NavigationMobile_click-blocker__2qBuS",
	"links": "NavigationMobile_links__1hmy7"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2aWdhdGlvbk1vYmlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb25Nb2JpbGUubW9kdWxlLnNjc3M/Nzg0OSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2aWdhdGlvbk1vYmlsZS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInNtYWxsU2NyZWVuIiwidXNlTWVkaWFRdWVyeSIsIm1vYmlsZU5hdkJwIiwic3R5bGVzIiwiTWVudSIsIk5hdmlnYXRpb25Nb2JpbGUiLCJ1c2VUb2dnbGVTdGF0ZSIsIm1lbnVWaXMiLCJ0b2dnbGVNZW51VmlzIiwibG9nb1doaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBTUEsSUFBTUEsTUFBdUIsR0FBRyxTQUExQkEsTUFBMEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFdBQVcsR0FBR0MsNERBQWEsV0FBSUYsS0FBSyxDQUFDRyxXQUFWLFFBQWpDO0FBRUEsc0JBQU87QUFBUSxhQUFTLEVBQUVDLG1FQUFuQjtBQUFBLGNBQ0pILFdBQVcsZ0JBQUcsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUF5Qiw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdELENBTkQ7O0dBQU1GLE07VUFDZ0JHLHdEOzs7S0FEaEJILE07QUFRTiwrREFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LHFHQUFxRyxlQUFlLHlCQUF5QixPQUFPLHNCQUFzQixtQ0FBbUMsbUNBQW1DLE9BQU8scUJBQXFCLHFDQUFxQyxpQ0FBaUMsT0FBTyxzQkFBc0IsbUJBQW1CLHFCQUFxQiwwQkFBMEIsK0JBQStCLGtCQUFrQixnQ0FBZ0MscUJBQXFCLG1JQUFtSSxPQUFPLEtBQUssd0JBQXdCLGVBQWUsbUJBQW1CLG9CQUFvQiwyQkFBMkIsb0NBQW9DLHNCQUFzQixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQiw4QkFBOEIsd0JBQXdCLHVCQUF1QixLQUFLLGlHQUFpRywwQkFBMEIsMENBQTBDLHNDQUFzQyx3QkFBd0Isd0JBQXdCLHFDQUFxQyxzQ0FBc0MsZ0NBQWdDLGlIQUFpSCxpQkFBaUIsMENBQTBDLHFGQUFxRixrQkFBa0IsaUJBQWlCLGlCQUFpQixzR0FBc0csdURBQXVELGlCQUFpQixPQUFPLEtBQUssdUJBQXVCO0FBQ3htTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzg0NGUxN2FlODI4ZDZiNzNjZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCAgTmF2aWdhdGlvbk1vYmlsZSAgZnJvbSAnLi9OYXZpZ2F0aW9uTW9iaWxlJztcclxuaW1wb3J0IE5hdmlnYXRpb25EZXNrdG9wIGZyb20gJy4vTmF2aWdhdGlvbkRlc2t0b3AnXHJcblxyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdob29rcy91c2VNZWRpYVF1ZXJ5J1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBtb2JpbGVOYXZCcDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNtYWxsU2NyZWVuID0gdXNlTWVkaWFRdWVyeShgJHtwcm9wcy5tb2JpbGVOYXZCcH1weGApXHJcblxyXG4gIHJldHVybiA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICB7c21hbGxTY3JlZW4gPyA8TmF2aWdhdGlvbk1vYmlsZS8+IDogPE5hdmlnYXRpb25EZXNrdG9wLz59XHJcbiAgPC9oZWFkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb25Nb2JpbGUubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgbG9nb1doaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby13aGl0ZS5wbmcnXHJcbmltcG9ydCBTZWFyY2hQb3B1cCBmcm9tICdjb21wb25lbnRzL1VJL1NlYXJjaFBvcHVwJ1xyXG5cclxuaW1wb3J0IHVzZVRvZ2dsZVN0YXRlIGZyb20gJ2hvb2tzL3VzZVRvZ2dsZVN0YXRlJ1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICA8YT5ET01PVjwvYT5cclxuICAgICAgPGE+VEVTVFk8L2E+XHJcbiAgICAgIDxhPlFVQU5UQSBXSElURTwvYT5cclxuICAgICAgPGE+UVVBTlRBIEJMQUNLPC9hPlxyXG4gICAgICA8YT5RVUFOVEEgU01BUlQ8L2E+XHJcbiAgICAgIDxhPlBSIFNQUsOBVlk8L2E+XHJcbiAgICAgIDxhPk8gTsOBUzwvYT5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTmF2aWdhdGlvbk1vYmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lbnVWaXMsIHRvZ2dsZU1lbnVWaXNdID0gdXNlVG9nZ2xlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2lkZWJhcn0gJHtcclxuICAgICAgICAgIG1lbnVWaXMgPyBzdHlsZXNbJ3NpZGViYXItLXZpc2libGUnXSA6IHN0eWxlc1snc2lkZWJhci0taGlkZGVuJ11cclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9fY29udGVudH0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnVWaXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmljb259ICR7c3R5bGVzWydpY29uX19jbG9zZSddfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17J3RpbWVzJ30gLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgICAgIDxhPlRFU1RZPC9hPlxyXG4gICAgICAgICAgICA8YT5RVUFOVEEgV0hJVEU8L2E+XHJcbiAgICAgICAgICAgIDxhPlFVQU5UQSBCTEFDSzwvYT5cclxuICAgICAgICAgICAgPGE+UVVBTlRBIFNNQVJUPC9hPlxyXG4gICAgICAgICAgICA8YT5QUiBTUFLDgVZZPC9hPlxyXG4gICAgICAgICAgICA8YT5PIE7DgVM8L2E+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudVZpc30+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IGljb249eydncmlwLWhvcml6b250YWwnfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29XaGl0ZX0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPFNlYXJjaFBvcHVwPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXsnc2VhcmNoJ30gLz5cclxuICAgICAgICA8L1NlYXJjaFBvcHVwPlxyXG4gICAgICA8L2Rpdj5cclxuICBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbk1vYmlsZVxyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9OYXZpZ2F0aW9uTW9iaWxlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vTmF2aWdhdGlvbk1vYmlsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9OYXZpZ2F0aW9uTW9iaWxlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5OYXZpZ2F0aW9uTW9iaWxlX25hdmlnYXRpb25fXzFjbmU3IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xcbiAgcGFkZGluZzogLW1vei1jYWxjKDVweCArIDJ2dykgLW1vei1jYWxjKDEwcHggKyAzdncpO1xcbiAgcGFkZGluZzogY2FsYyg1cHggKyAydncpIGNhbGMoMTBweCArIDN2dyk7XFxufVxcblxcbi5OYXZpZ2F0aW9uTW9iaWxlX2xvZ29fXzJRMUJkIHtcXG4gIHdpZHRoOiAxODBweDtcXG59XFxuXFxuLk5hdmlnYXRpb25Nb2JpbGVfaWNvbl9fU2FIY0Mge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uTmF2aWdhdGlvbk1vYmlsZV9pY29uX19jbG9zZV9fdi1Dd2Ige1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5OYXZpZ2F0aW9uTW9iaWxlX3NpZGViYXJfXzFwaWd2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGluc2V0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZSAwLjRzLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlciBjdWJpYy1iZXppZXIoMC45LCAwLCAwLjksIDApIDAuNDVzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gZWFzZSAwLjRzLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlciBjdWJpYy1iZXppZXIoMC45LCAwLCAwLjksIDApIDAuNDVzO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZSAwLjRzLCBiYWNrZHJvcC1maWx0ZXIgY3ViaWMtYmV6aWVyKDAuOSwgMCwgMC45LCAwKSAwLjQ1cywgLW1vei10cmFuc2Zvcm0gZWFzZSAwLjRzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UgMC40cywgYmFja2Ryb3AtZmlsdGVyIGN1YmljLWJlemllcigwLjksIDAsIDAuOSwgMCkgMC40NXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZSAwLjRzLCBiYWNrZHJvcC1maWx0ZXIgY3ViaWMtYmV6aWVyKDAuOSwgMCwgMC45LCAwKSAwLjQ1cywgLXdlYmtpdC10cmFuc2Zvcm0gZWFzZSAwLjRzLCAtbW96LXRyYW5zZm9ybSBlYXNlIDAuNHMsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyIGN1YmljLWJlemllcigwLjksIDAsIDAuOSwgMCkgMC40NXM7XFxufVxcbi5OYXZpZ2F0aW9uTW9iaWxlX3NpZGViYXJfXzFwaWd2ICoge1xcbiAgei1pbmRleDogaW5oZXJpdDtcXG59XFxuLk5hdmlnYXRpb25Nb2JpbGVfc2lkZWJhci0tdmlzaWJsZV9fdkZyangge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcbi5OYXZpZ2F0aW9uTW9iaWxlX3NpZGViYXItLWhpZGRlbl9fN0hsdjcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKTtcXG59XFxuLk5hdmlnYXRpb25Nb2JpbGVfc2lkZWJhcl9fY29udGVudF9fMVFLM04ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiA0MHB4O1xcbiAgZ2FwOiA0MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogOHZ3O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMTIlLCAjMjIyMjIyKSwgY29sb3Itc3RvcCg5MCUsIHJlZCkpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICMyMjIyMjIgMTIlLCByZWQgOTAlKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjMjIyMjIyIDEyJSwgcmVkIDkwJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMjIyMjIyIDEyJSwgcmVkIDkwJSk7XFxufVxcblxcbi5OYXZpZ2F0aW9uTW9iaWxlX2NsaWNrLWJsb2NrZXJfXzJxQnVTIHtcXG4gIGluc2V0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLk5hdmlnYXRpb25Nb2JpbGVfbGlua3NfXzFobXk3IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL05hdmlnYXRpb25Nb2JpbGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7T0FBQSw4QkFBQTtFQUNBLHNCQUFBO09BQUEsbUJBQUE7RUFFQSx5QkNIYztFRElkLG1EQUFBO0VBQUEseUNBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxZQ1JZO0FETWQ7QUFJRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQU1BO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBRUEsMkdBQUE7RUFBQSxtR0FBQTtFQUFBLGtIQUFBO0VBQUEsbUZBQUE7RUFBQSxzTUFBQTtBQUxGO0FBUUU7RUFDRSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxrQ0FBQTtLQUFBLCtCQUFBO1VBQUEsMEJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBUEo7QUFVRTtFQUNFLG9DQUFBO0tBQUEsaUNBQUE7VUFBQSw0QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUFSSjtBQVdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUVBLFlDL0NVO0VEZ0RWLFlBQUE7RUFDQSw0R0FBQTtFQUFBLG1FQUFBO0VBQUEsZ0VBQUE7RUFBQSxrRUFBQTtBQVhKOztBQW1CQTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFFQSxXQUFBO0FBakJGOztBQW9CQTtFQUNFLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xcclxcblxcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIHBhZGRpbmc6IGNhbGMoNXB4ICsgMnZ3KSBjYWxjKDEwcHggKyAzdncpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDJweDtcXHJcXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XFxyXFxuXFxyXFxuICAmX19jbG9zZSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGluc2V0OiAwO1xcclxcblxcclxcbiAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlIDAuNHMsXFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlciBjdWJpYy1iZXppZXIoMC45LCAwLCAwLjksIDApIDAuNDVzO1xcclxcblxcclxcbiAgJiAqIHtcXHJcXG4gICAgei1pbmRleDogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtLXZpc2libGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLS1oaWRkZW4ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDh2dztcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXHJcXG4gICAgICAkY29sb3ItcHJpbWFyeSAxMiUsXFxyXFxuICAgICAgJGNvbG9yLXNlY29uZGFyeSA5MCVcXHJcXG4gICAgKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrLWJsb2NrZXIge1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuXFxyXFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cIixcIi8vLy8vLy8vLy8vLy8vLy9cXHJcXG4vLy8gQ29sb3JzXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcblxcclxcbiRjb2xvci1wcmltYXJ5OiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogcmVkO1xcclxcblxcclxcbiRjb2xvci1ncmV5LTE6IHJnYigyMjMsIDIyMywgMjIzKTtcXHJcXG4kY29sb3ItZ3JleS0yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcXHJcXG4kY29sb3ItYmxhY2s6IGJsYWNrO1xcclxcbiRjb2xvci1ibHVlLTE6IHJnYig3NywgMTc4LCAyMzYpO1xcclxcbiRjb2xvci1ibHVlLTI6IHJnYigxNDksIDE3MCwgMTkxKTtcXHJcXG5cXHJcXG4kY29sb3ItbGluay1ob3ZlcjogYmx1ZTtcXHJcXG5cXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuLy8vIE90aGVyIFZhcmlhYmxlc1xcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG5cXHJcXG4kYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNywgMjA3LCAyMDcpO1xcclxcbiRmaWxsZXQ6IDVweDtcXHJcXG4kc2hhZG93OiA4cHggOHB4IDEwcHggcmdiKGJsYWNrLCAwLjIpO1xcclxcblxcclxcbi8vLy8vLy8vLy8vLy8vLy9cXHJcXG4vLy8gQnJlYWtwb2ludHNcXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuXFxyXFxuJGJwLTE6IDE2MDBweDtcXHJcXG4kYnAtMjogMTAwMHB4O1xcclxcbiRicC0zOiA5MDBweDtcXHJcXG4kYnAtNDogNzAwcHg7XFxyXFxuXFxyXFxuXFxyXFxuLy8vLy8vLy8vLy8vLy8vL1xcclxcbi8vLyBNaXhpbnNcXHJcXG4vLy8vLy8vLy8vLy8vLy8vXFxyXFxuXFxyXFxuQG1peGluIHNjcmVlbigkYnJlYWtwb2ludDogJycpIHtcXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdmlnYXRpb25cIjogXCJOYXZpZ2F0aW9uTW9iaWxlX25hdmlnYXRpb25fXzFjbmU3XCIsXG5cdFwibG9nb1wiOiBcIk5hdmlnYXRpb25Nb2JpbGVfbG9nb19fMlExQmRcIixcblx0XCJpY29uXCI6IFwiTmF2aWdhdGlvbk1vYmlsZV9pY29uX19TYUhjQ1wiLFxuXHRcImljb25fX2Nsb3NlXCI6IFwiTmF2aWdhdGlvbk1vYmlsZV9pY29uX19jbG9zZV9fdi1Dd2JcIixcblx0XCJzaWRlYmFyXCI6IFwiTmF2aWdhdGlvbk1vYmlsZV9zaWRlYmFyX18xcGlndlwiLFxuXHRcInNpZGViYXItLXZpc2libGVcIjogXCJOYXZpZ2F0aW9uTW9iaWxlX3NpZGViYXItLXZpc2libGVfX3ZGcmp4XCIsXG5cdFwic2lkZWJhci0taGlkZGVuXCI6IFwiTmF2aWdhdGlvbk1vYmlsZV9zaWRlYmFyLS1oaWRkZW5fXzdIbHY3XCIsXG5cdFwic2lkZWJhcl9fY29udGVudFwiOiBcIk5hdmlnYXRpb25Nb2JpbGVfc2lkZWJhcl9fY29udGVudF9fMVFLM05cIixcblx0XCJjbGljay1ibG9ja2VyXCI6IFwiTmF2aWdhdGlvbk1vYmlsZV9jbGljay1ibG9ja2VyX18ycUJ1U1wiLFxuXHRcImxpbmtzXCI6IFwiTmF2aWdhdGlvbk1vYmlsZV9saW5rc19fMWhteTdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9
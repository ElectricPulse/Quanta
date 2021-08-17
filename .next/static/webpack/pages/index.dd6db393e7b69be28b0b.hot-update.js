self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ArticleShowcases_Headline_Headline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleShowcases/Headline/Headline */ "./components/ArticleShowcases/Headline/Headline.tsx");
/* harmony import */ var _components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleShowcases/Categories/Categories */ "./components/ArticleShowcases/Categories/Categories.tsx");
/* harmony import */ var _components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ArticleShowcases/Grid/Grid */ "./components/ArticleShowcases/Grid/Grid.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\pages\\index.tsx",
    _this = undefined;





var array = [[['hey 2', 'this', 'should'], ['is', 'that', 'working'], ['yes', 'it', 'is']], [['hey 1', 'this', 'should'], ['is', 'that', 'working'], ['yes', 'it', 'is']]];

var Article = function Article(i) {
  (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Article);

  (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "imageName", 'maxresdefault-15_fk7kka');

  (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "url", 'https://www.google.sk/');

  (0,C_Users_Hackerman_Desktop_Projects_quanta_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, "title", void 0);

  this.title = "Title".concat(i);
};

var categories = ['QUANTA Black', 'QUANTA Smart', 'QUANTA White'];

var createArticles = function createArticles(length) {
  return Array(length).fill(null).map(function (_, i) {
    return new Article(i);
  });
};

var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Headline_Headline__WEBPACK_IMPORTED_MODULE_4__.default, {
      articles: createArticles(5)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_5__.default, {
      categories: Array(3).fill(null).map(function (_, i) {
        var category = categories[i];
        return {
          category: category,
          articles: createArticles(4)
        };
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
      articles: createArticles(8),
      children: ["Novinky z ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: 'https://www.startstop.sk/',
        children: "STARTSTOP.sk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImFycmF5IiwiQXJ0aWNsZSIsImkiLCJ0aXRsZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVBcnRpY2xlcyIsImxlbmd0aCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJIb21lIiwiY2F0ZWdvcnkiLCJhcnRpY2xlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsS0FBSyxHQUFHLENBQ1osQ0FDRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFFBQWxCLENBREYsRUFFRSxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsU0FBZixDQUZGLEVBR0UsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsQ0FIRixDQURZLEVBTVosQ0FDRSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFFBQWxCLENBREYsRUFFRSxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsU0FBZixDQUZGLEVBR0UsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsQ0FIRixDQU5ZLENBQWQ7O0lBYU1DLE8sR0FLSixpQkFBWUMsQ0FBWixFQUF1QjtBQUFBOztBQUFBLDhKQUpYLHlCQUlXOztBQUFBLHdKQUhqQix3QkFHaUI7O0FBQUE7O0FBQ3JCLE9BQUtDLEtBQUwsa0JBQXFCRCxDQUFyQjtBQUNELEM7O0FBR0gsSUFBTUUsVUFBVSxHQUFHLENBQUMsY0FBRCxFQUFpQixjQUFqQixFQUFpQyxjQUFqQyxDQUFuQjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQsRUFBb0I7QUFDekMsU0FBT0MsS0FBSyxDQUFDRCxNQUFELENBQUwsQ0FDSkUsSUFESSxDQUNDLElBREQsRUFFSkMsR0FGSSxDQUVBLFVBQUNDLENBQUQsRUFBSVIsQ0FBSixFQUFVO0FBQ2IsV0FBTyxJQUFJRCxPQUFKLENBQVlDLENBQVosQ0FBUDtBQUNELEdBSkksQ0FBUDtBQUtELENBTkQ7O0FBUUEsSUFBTVMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQzNCLHNCQUNFO0FBQUEsNEJBR0UsOERBQUMsbUZBQUQ7QUFBVSxjQUFRLEVBQUVOLGNBQWMsQ0FBQyxDQUFEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLHVGQUFEO0FBQ0UsZ0JBQVUsRUFBRUUsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUNUQyxJQURTLENBQ0osSUFESSxFQUVUQyxHQUZTLENBRUwsVUFBQ0MsQ0FBRCxFQUFJUixDQUFKLEVBQWtCO0FBQ3JCLFlBQU1VLFFBQVEsR0FBR1IsVUFBVSxDQUFDRixDQUFELENBQTNCO0FBRUEsZUFBTztBQUFFVSxrQkFBUSxFQUFSQSxRQUFGO0FBQVlDLGtCQUFRLEVBQUVSLGNBQWMsQ0FBQyxDQUFEO0FBQXBDLFNBQVA7QUFDRCxPQU5TO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBYUUsOERBQUMsMkVBQUQ7QUFBTSxjQUFRLEVBQUVBLGNBQWMsQ0FBQyxDQUFELENBQTlCO0FBQUEsNENBQ1k7QUFBRyxZQUFJLEVBQUUsMkJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBLGtCQURGO0FBbUJELENBcEJEOztLQUFNTSxJO0FBc0JOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkNmRiMzkzZTdiNjliZTI4YjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgSGVhZGxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0hlYWRsaW5lL0hlYWRsaW5lJ1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9HcmlkJ1xyXG5pbXBvcnQgZGVlcE1hcCBmcm9tICcuLy4uL3V0aWxzL2RlZXBNYXAnXHJcblxyXG5jb25zdCBhcnJheSA9IFtcclxuICBbXHJcbiAgICBbJ2hleSAyJywgJ3RoaXMnLCAnc2hvdWxkJ10sXHJcbiAgICBbJ2lzJywgJ3RoYXQnLCAnd29ya2luZyddLFxyXG4gICAgWyd5ZXMnLCAnaXQnLCAnaXMnXSxcclxuICBdLFxyXG4gIFtcclxuICAgIFsnaGV5IDEnLCAndGhpcycsICdzaG91bGQnXSxcclxuICAgIFsnaXMnLCAndGhhdCcsICd3b3JraW5nJ10sXHJcbiAgICBbJ3llcycsICdpdCcsICdpcyddLFxyXG4gIF0sXHJcbl1cclxuXHJcbmNsYXNzIEFydGljbGUge1xyXG4gIGltYWdlTmFtZSA9ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYSdcclxuICB1cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLydcclxuICB0aXRsZTogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKGk6IG51bWJlcikge1xyXG4gICAgdGhpcy50aXRsZSA9IGBUaXRsZSR7aX1gXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gWydRVUFOVEEgQmxhY2snLCAnUVVBTlRBIFNtYXJ0JywgJ1FVQU5UQSBXaGl0ZSddXHJcblxyXG5jb25zdCBjcmVhdGVBcnRpY2xlcyA9IChsZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gIHJldHVybiBBcnJheShsZW5ndGgpXHJcbiAgICAuZmlsbChudWxsKVxyXG4gICAgLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEFydGljbGUoaSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuXHJcbiAgICAgIDxIZWFkbGluZSBhcnRpY2xlcz17Y3JlYXRlQXJ0aWNsZXMoNSl9IC8+XHJcbiAgICAgIDxDYXRlZ29yaWVzXHJcbiAgICAgICAgY2F0ZWdvcmllcz17QXJyYXkoMylcclxuICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAubWFwKChfLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2ldXHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBjYXRlZ29yeSwgYXJ0aWNsZXM6IGNyZWF0ZUFydGljbGVzKDQpIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAvPlxyXG4gICAgICA8R3JpZCBhcnRpY2xlcz17Y3JlYXRlQXJ0aWNsZXMoOCl9PlxyXG4gICAgICAgIE5vdmlua3kgeiA8YSBocmVmPXsnaHR0cHM6Ly93d3cuc3RhcnRzdG9wLnNrLyd9PlNUQVJUU1RPUC5zazwvYT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
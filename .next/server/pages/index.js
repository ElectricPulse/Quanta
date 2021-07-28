(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./components/ArticleShowcases/Categories/Article.tsx":
/*!************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Article.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Categories/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Categories\\Article.tsx";




const Article = ({
  title,
  imageName,
  url
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().article),
      href: url,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__.default, {
        aspectRatio: '4 / 3',
        imageName: imageName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/ArticleShowcases/Categories/Categories.tsx":
/*!***************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Categories.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Categories_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories.module.scss */ "./components/ArticleShowcases/Categories/Categories.module.scss");
/* harmony import */ var _Categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Categories_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./components/ArticleShowcases/Categories/Category.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Categories\\Categories.tsx";



const articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Preco ceny telefonov stale neustupaju'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title2'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title3'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Novy rychlotest na koronavirus od spolocnosti Bosch prinase spolahilve vysledky uz za 39 minut joj to je rychlo wow strasne dlhe je toto'
}];

const Categories = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_Categories_module_scss__WEBPACK_IMPORTED_MODULE_3___default().categories),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: 'Quanta BLACK',
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: 'Quanta WHITE',
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: 'Quanta SMART',
      articles: articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./components/ArticleShowcases/Categories/Category.tsx":
/*!*************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Category.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ "./components/ArticleShowcases/Categories/Article.tsx");
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category.module.scss */ "./components/ArticleShowcases/Categories/Category.module.scss");
/* harmony import */ var _Category_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Category_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Highlighted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../UI/Highlighted */ "./components/UI/Highlighted.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Categories\\Category.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Category = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_Category_module_scss__WEBPACK_IMPORTED_MODULE_4___default().category)} ${props.className && props.className}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_Category_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Highlighted__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: `${props.className} ${(_Category_module_scss__WEBPACK_IMPORTED_MODULE_4___default().list)}`,
      children: props.articles.map(article => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, article), article.title, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 18
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./components/ArticleShowcases/Grid/Article.tsx":
/*!******************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Article.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Grid/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Grid\\Article.tsx";




const Article = ({
  title,
  url,
  imageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: url,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["image-container"]),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__.default, {
          aspectRatio: "1 / 1",
          imageName: imageName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/ArticleShowcases/Grid/Grid.tsx":
/*!***************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Grid.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ "./components/ArticleShowcases/Grid/Article.tsx");
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Grid.module.scss */ "./components/ArticleShowcases/Grid/Grid.module.scss");
/* harmony import */ var _Grid_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Grid\\Grid.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title1'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title2'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title3'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title4'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title5'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title6'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title7'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title8'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title9'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title10'
}];

const Grid = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: ["Novinky z ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: 'https://www.startstop.sk/',
        children: "STARTSTOP.sk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Grid_module_scss__WEBPACK_IMPORTED_MODULE_3___default().grid),
      children: articles.map(article => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, article), article.title, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 18
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./components/ArticleShowcases/Main/Article.tsx":
/*!******************************************************!*\
  !*** ./components/ArticleShowcases/Main/Article.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.module.scss */ "./components/ArticleShowcases/Main/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/ExternalImage */ "./components/UI/ExternalImage.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Main\\Article.tsx";




const Article = ({
  article
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: article.url,
    className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().article),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().details),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: article.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ExternalImage__WEBPACK_IMPORTED_MODULE_2__.default, {
      imageName: article.imageName,
      className: (_Article_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
      aspectRatio: '3 / 2'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/ArticleShowcases/Main/Main.tsx":
/*!***************************************************!*\
  !*** ./components/ArticleShowcases/Main/Main.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main.module.scss */ "./components/ArticleShowcases/Main/Main.module.scss");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Main_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ "./components/ArticleShowcases/Main/Article.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\Main\\Main.tsx";




const Main = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_Main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().grid),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
      article: props.articles[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_Main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subgrid)}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: props.articles[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: props.articles[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: props.articles[3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: props.articles[4]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/UI/ExternalImage.tsx":
/*!*****************************************!*\
  !*** ./components/UI/ExternalImage.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cloudinary_build_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cloudinary-build-url */ "cloudinary-build-url");
/* harmony import */ var cloudinary_build_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cloudinary_build_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExternalImage.module.scss */ "./components/UI/ExternalImage.module.scss");
/* harmony import */ var _ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\ExternalImage.tsx";





const ExternalImage = props => {
  const imageUrl = (0,cloudinary_build_url__WEBPACK_IMPORTED_MODULE_2__.buildUrl)(props.imageName, {
    cloud: {
      cloudName: 'dpki8ezpl'
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["image-container"]),
    style: {
      aspectRatio: props.aspectRatio
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
      src: imageUrl,
      layout: "fill",
      className: `${props.className} ${(_ExternalImage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ExternalImage);

/***/ }),

/***/ "./components/UI/Highlighted.tsx":
/*!***************************************!*\
  !*** ./components/UI/Highlighted.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Highlighted.module.scss */ "./components/UI/Highlighted.module.scss");
/* harmony import */ var _Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\UI\\Highlighted.tsx";



const Hightlighted = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mark", {
    className: props.inverse ? (_Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2___default().inverse) : (_Highlighted_module_scss__WEBPACK_IMPORTED_MODULE_2___default().normal),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Hightlighted);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["res.cloudinary.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ArticleShowcases/Main/Main */ "./components/ArticleShowcases/Main/Main.tsx");
/* harmony import */ var _components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ArticleShowcases/Categories/Categories */ "./components/ArticleShowcases/Categories/Categories.tsx");
/* harmony import */ var _components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ArticleShowcases/Grid/Grid */ "./components/ArticleShowcases/Grid/Grid.tsx");


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\pages\\index.tsx";







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.fas, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSearch, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPhoneAlt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faAt, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGripHorizontal);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.fab, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTwitter, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFacebook);
const article = {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
};

const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Main_Main__WEBPACK_IMPORTED_MODULE_5__.default, {
      articles: Array(5).fill(article)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Categories_Categories__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/ArticleShowcases/Categories/Article.module.scss":
/*!********************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Article.module.scss ***!
  \********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"article": "Article_article__3fIgI",
	"image-container": "Article_image-container__3PnpZ"
};


/***/ }),

/***/ "./components/ArticleShowcases/Categories/Categories.module.scss":
/*!***********************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Categories.module.scss ***!
  \***********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"categories": "Categories_categories__1804x"
};


/***/ }),

/***/ "./components/ArticleShowcases/Categories/Category.module.scss":
/*!*********************************************************************!*\
  !*** ./components/ArticleShowcases/Categories/Category.module.scss ***!
  \*********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"list": "Category_list__2hWO8",
	"category": "Category_category__3Q7RZ",
	"title": "Category_title__1PCkc"
};


/***/ }),

/***/ "./components/ArticleShowcases/Grid/Article.module.scss":
/*!**************************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Article.module.scss ***!
  \**************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"image-container": "Article_image-container__33RHB"
};


/***/ }),

/***/ "./components/ArticleShowcases/Grid/Grid.module.scss":
/*!***********************************************************!*\
  !*** ./components/ArticleShowcases/Grid/Grid.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"section": "Grid_section___sLsn",
	"grid": "Grid_grid__2Y_cJ",
	"title": "Grid_title__3HOio"
};


/***/ }),

/***/ "./components/ArticleShowcases/Main/Article.module.scss":
/*!**************************************************************!*\
  !*** ./components/ArticleShowcases/Main/Article.module.scss ***!
  \**************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"article": "Article_article__JQFMZ",
	"image": "Article_image__163sm",
	"details": "Article_details__10Mel"
};


/***/ }),

/***/ "./components/ArticleShowcases/Main/Main.module.scss":
/*!***********************************************************!*\
  !*** ./components/ArticleShowcases/Main/Main.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "Main_grid__Fzgge",
	"subgrid": "Main_subgrid__2-CrD"
};


/***/ }),

/***/ "./components/UI/ExternalImage.module.scss":
/*!*************************************************!*\
  !*** ./components/UI/ExternalImage.module.scss ***!
  \*************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"image-container": "ExternalImage_image-container__22MRx",
	"image": "ExternalImage_image__2grR-"
};


/***/ }),

/***/ "./components/UI/Highlighted.module.scss":
/*!***********************************************!*\
  !*** ./components/UI/Highlighted.module.scss ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"inverse": "Highlighted_inverse__32VQw",
	"normal": "Highlighted_normal__eECD2"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "cloudinary-build-url":
/*!***************************************!*\
  !*** external "cloudinary-build-url" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("cloudinary-build-url");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL3F1YW50YS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0FydGljbGUudHN4Iiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMudHN4Iiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9BcnRpY2xlLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9HcmlkLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbi9BcnRpY2xlLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbi9NYWluLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL1VJL0V4dGVybmFsSW1hZ2UudHN4Iiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvVUkvSGlnaGxpZ2h0ZWQudHN4Iiwid2VicGFjazovL3F1YW50YS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3F1YW50YS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3F1YW50YS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvQ2F0ZWdvcmllcy9BcnRpY2xlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0NhdGVnb3JpZXMvQ2F0ZWdvcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0dyaWQvQXJ0aWNsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvR3JpZC9HcmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluL0FydGljbGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW4vTWFpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL1VJL0V4dGVybmFsSW1hZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9VSS9IaWdobGlnaHRlZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIiIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwiY2xvdWRpbmFyeS1idWlsZC11cmxcIiIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3F1YW50YS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXJ0aWNsZSIsInRpdGxlIiwiaW1hZ2VOYW1lIiwidXJsIiwic3R5bGVzIiwiYXJ0aWNsZXMiLCJDYXRlZ29yaWVzIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm5hbWUiLCJtYXAiLCJhcnRpY2xlIiwiR3JpZCIsIk1haW4iLCJFeHRlcm5hbEltYWdlIiwiaW1hZ2VVcmwiLCJidWlsZFVybCIsImNsb3VkIiwiY2xvdWROYW1lIiwiYXNwZWN0UmF0aW8iLCJIaWdodGxpZ2h0ZWQiLCJpbnZlcnNlIiwiY2hpbGRyZW4iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJJbWFnZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsImNvbnNvbGUiLCJ3YXJuIiwiVkFMSURfQkxVUl9FWFQiLCJpc0xhenkiLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwidXNlRWZmZWN0IiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwic2V0IiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwibGlicmFyeSIsImZhcyIsImZhU2VhcmNoIiwiZmFQaG9uZUFsdCIsImZhQXQiLCJmYUdyaXBIb3Jpem9udGFsIiwiZmFiIiwiZmFUd2l0dGVyIiwiZmFGYWNlYm9vayIsIkhvbWUiLCJBcnJheSIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBOztBQVFBLE1BQU1BLE9BQXdCLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFdBQVQ7QUFBb0JDO0FBQXBCLENBQUQsS0FBK0I7QUFDOUQsc0JBQ0U7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUMscUVBQWQ7QUFBOEIsVUFBSSxFQUFFRCxHQUFwQztBQUFBLDhCQUNJLDhEQUFDLHNEQUFEO0FBQWUsbUJBQVcsRUFBRSxPQUE1QjtBQUFxQyxpQkFBUyxFQUFFRDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBR0U7QUFBQSxrQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBVkQ7O0FBWUEsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFFQTtBQUVBLE1BQU1LLFFBQVEsR0FBRyxDQUNmO0FBQ0VILFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0FEZSxFQU1mO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0FOZSxFQVdmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0FYZSxFQWdCZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBaEJlLENBQWpCOztBQXVCQSxNQUFNSyxVQUFvQixHQUFHLE1BQU07QUFDakMsc0JBQ0U7QUFBUyxhQUFTLEVBQUVGLDJFQUFwQjtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVUsVUFBSSxFQUFFLGNBQWhCO0FBQWdDLGNBQVEsRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDhDQUFEO0FBQVUsVUFBSSxFQUFFLGNBQWhCO0FBQWlDLGNBQVEsRUFBRUE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLDhDQUFEO0FBQVUsVUFBSSxFQUFFLGNBQWhCO0FBQWlDLGNBQVEsRUFBRUE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVUEsK0RBQWVDLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUMsUUFBeUIsR0FBSUMsS0FBRCxJQUFXO0FBQzNDLHNCQUNFO0FBQUssYUFBUyxFQUFHLEdBQUVKLHVFQUFnQixJQUFHSSxLQUFLLENBQUNDLFNBQU4sSUFBbUJELEtBQUssQ0FBQ0MsU0FBVSxFQUF6RTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFTCxvRUFBZjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsa0JBQWVJLEtBQUssQ0FBQ0U7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFJLGVBQVMsRUFBRyxHQUFFRixLQUFLLENBQUNDLFNBQVUsSUFBR0wsbUVBQVksRUFBakQ7QUFBQSxnQkFDR0ksS0FBSyxDQUFDSCxRQUFOLENBQWVNLEdBQWYsQ0FBb0JDLE9BQUQsSUFBYTtBQUMvQiw0QkFBTyw4REFBQyw2Q0FBRCxvQkFBaUNBLE9BQWpDLEdBQWNBLE9BQU8sQ0FBQ1gsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELE9BRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FiRDs7QUFjQSwrREFBZU0sUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBOztBQVFBLE1BQU1QLE9BQXdCLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNFLEtBQVQ7QUFBY0Q7QUFBZCxDQUFELEtBQStCO0FBQzlELHNCQUNFO0FBQUEsMkJBQ0U7QUFBRyxVQUFJLEVBQUVDLEdBQVQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVDLGdGQUFoQjtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQWUscUJBQVcsRUFBQyxPQUEzQjtBQUFtQyxtQkFBUyxFQUFFRjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUEsa0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEOztBQWNBLCtEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBRUEsTUFBTUssUUFBUSxHQUFHLENBQ2Y7QUFDRUgsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQURlLEVBTWY7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQU5lLEVBV2Y7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQVhlLEVBZ0JmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0FoQmUsRUFxQmY7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQXJCZSxFQTBCZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBMUJlLEVBK0JmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0EvQmUsRUFvQ2Y7QUFDRUMsV0FBUyxFQUFFLHlCQURiO0FBRUVDLEtBQUcsRUFBRSx3QkFGUDtBQUdFRixPQUFLLEVBQUU7QUFIVCxDQXBDZSxFQXlDZjtBQUNFQyxXQUFTLEVBQUUseUJBRGI7QUFFRUMsS0FBRyxFQUFFLHdCQUZQO0FBR0VGLE9BQUssRUFBRTtBQUhULENBekNlLEVBOENmO0FBQ0VDLFdBQVMsRUFBRSx5QkFEYjtBQUVFQyxLQUFHLEVBQUUsd0JBRlA7QUFHRUYsT0FBSyxFQUFFO0FBSFQsQ0E5Q2UsQ0FBakI7O0FBcURBLE1BQU1ZLElBQWMsR0FBRyxNQUFNO0FBQzNCLHNCQUNFO0FBQVMsYUFBUyxFQUFFVCxrRUFBcEI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUEsZ0VBQWY7QUFBQSw0Q0FDWTtBQUFHLFlBQUksRUFBRSwyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUEsK0RBQWhCO0FBQUEsZ0JBQ0dDLFFBQVEsQ0FBQ00sR0FBVCxDQUFjQyxPQUFELElBQWE7QUFDekIsNEJBQU8sOERBQUMsNkNBQUQsb0JBQWlDQSxPQUFqQyxHQUFjQSxPQUFPLENBQUNYLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBYkQ7O0FBZUEsK0RBQWVZLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFFQTs7QUFZQSxNQUFNYixPQUF3QixHQUFHLENBQUM7QUFBRVk7QUFBRixDQUFELEtBQWlCO0FBQ2hELHNCQUNFO0FBQUcsUUFBSSxFQUFFQSxPQUFPLENBQUNULEdBQWpCO0FBQXNCLGFBQVMsRUFBRUMscUVBQWpDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHFFQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQUtRLE9BQU8sQ0FBQ1g7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFFVyxPQUFPLENBQUNWLFNBRHJCO0FBRUUsZUFBUyxFQUFFRSxtRUFGYjtBQUdFLGlCQUFXLEVBQUU7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsQ0FiRDs7QUFlQSwrREFBZUosT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUVBOztBQU1BLE1BQU1jLElBQXFCLEdBQUlOLEtBQUQsSUFBVztBQUN2QyxzQkFDRTtBQUFTLGFBQVMsRUFBRUosK0RBQXBCO0FBQUEsNEJBQ0UsOERBQUMsNkNBQUQ7QUFBUyxhQUFPLEVBQUVJLEtBQUssQ0FBQ0gsUUFBTixDQUFlLENBQWY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFHLEdBQUVELGtFQUFlLEVBQWxDO0FBQUEsOEJBQ0UsOERBQUMsNkNBQUQ7QUFBUyxlQUFPLEVBQUVJLEtBQUssQ0FBQ0gsUUFBTixDQUFlLENBQWY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDZDQUFEO0FBQVMsZUFBTyxFQUFFRyxLQUFLLENBQUNILFFBQU4sQ0FBZSxDQUFmO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyw2Q0FBRDtBQUFTLGVBQU8sRUFBRUcsS0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUUsOERBQUMsNkNBQUQ7QUFBUyxlQUFPLEVBQUVHLEtBQUssQ0FBQ0gsUUFBTixDQUFlLENBQWY7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEOztBQWNBLCtEQUFlUyxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxNQUFNQyxhQUE4QixHQUFJUCxLQUFELElBQVc7QUFDaEQsUUFBTVEsUUFBUSxHQUFHQyw4REFBUSxDQUFDVCxLQUFLLENBQUNOLFNBQVAsRUFBa0I7QUFDekNnQixTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFO0FBRE47QUFEa0MsR0FBbEIsQ0FBekI7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWYsc0ZBQWhCO0FBQTJDLFNBQUssRUFBRTtBQUFDZ0IsaUJBQVcsRUFBRVosS0FBSyxDQUFDWTtBQUFwQixLQUFsRDtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFFSixRQURQO0FBRUUsWUFBTSxFQUFDLE1BRlQ7QUFHRSxlQUFTLEVBQUcsR0FBRVIsS0FBSyxDQUFDQyxTQUFVLElBQUdMLHlFQUFhO0FBSGhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQWhCRDs7QUFrQkEsK0RBQWVXLGFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFQTs7QUFNQSxNQUFNTSxZQUE2QixHQUFJYixLQUFELElBQVc7QUFDL0Msc0JBQ0U7QUFBTSxhQUFTLEVBQUVBLEtBQUssQ0FBQ2MsT0FBTixHQUFnQmxCLHlFQUFoQixHQUFpQ0Esd0VBQWxEO0FBQUEsY0FDR0ksS0FBSyxDQUFDZTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUUEsK0RBQWVGLFlBQWYsRTs7Ozs7Ozs7Ozs7QUNoQmE7O0FBQUEsSUFBSUcsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GQyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQkMsS0FBaEI7O0FBQXNCLElBQUlDLDhCQUE4QixHQUFDSixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxrSUFBRCxDQUFSLENBQXpEOztBQUEwSCxJQUFJSSxTQUFTLEdBQUNMLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdGQUFELENBQVIsQ0FBcEM7O0FBQWdGLElBQUlLLE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSU0sS0FBSyxHQUFDUCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3REFBRCxDQUFSLENBQWhDOztBQUFxRSxJQUFJTyxPQUFPLEdBQUNQLG1CQUFPLENBQUMsb0VBQUQsQ0FBbkI7O0FBQXFELElBQUlRLFlBQVksR0FBQ1IsbUJBQU8sQ0FBQyw4RUFBRCxDQUF4Qjs7QUFBK0QsSUFBSVMsZ0JBQWdCLEdBQUNULG1CQUFPLENBQUMsK0VBQUQsQ0FBNUI7O0FBQW1ELFVBQStCO0FBQUM7QUFBQ1UsUUFBTSxDQUFDQyxxQkFBUCxHQUE2QixJQUE3QjtBQUFtQzs7QUFBQSxNQUFNQyxvQkFBb0IsR0FBQyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCQyxTQUFoQixDQUEzQjtBQUFzRCxNQUFNQyxPQUFPLEdBQUMsSUFBSUMsR0FBSixDQUFRLENBQUMsQ0FBQyxPQUFELEVBQVNDLFdBQVQsQ0FBRCxFQUF1QixDQUFDLFlBQUQsRUFBY0MsZ0JBQWQsQ0FBdkIsRUFBdUQsQ0FBQyxRQUFELEVBQVVDLFlBQVYsQ0FBdkQsRUFBK0UsQ0FBQyxTQUFELEVBQVdDLGFBQVgsQ0FBL0UsQ0FBUixDQUFkO0FBQWlJLE1BQU1DLG1CQUFtQixHQUFDLENBQUMsTUFBRCxFQUFRLE9BQVIsRUFBZ0IsV0FBaEIsRUFBNEIsWUFBNUIsRUFBeUNQLFNBQXpDLENBQTFCOztBQUE4RSxTQUFTUSxlQUFULENBQXlCQyxHQUF6QixFQUE2QjtBQUFDLFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixLQUFjVixTQUFyQjtBQUFnQzs7QUFBQSxTQUFTVyxpQkFBVCxDQUEyQkYsR0FBM0IsRUFBK0I7QUFBQyxTQUFPQSxHQUFHLENBQUNBLEdBQUosS0FBVVQsU0FBakI7QUFBNEI7O0FBQUEsU0FBU1ksY0FBVCxDQUF3QkgsR0FBeEIsRUFBNEI7QUFBQyxTQUFPLE9BQU9BLEdBQVAsS0FBYSxRQUFiLEtBQXdCRCxlQUFlLENBQUNDLEdBQUQsQ0FBZixJQUFzQkUsaUJBQWlCLENBQUNGLEdBQUQsQ0FBL0QsQ0FBUDtBQUE4RTs7QUFBQSxNQUFLO0FBQUNJLGFBQVcsRUFBQ0MsaUJBQWI7QUFBK0JDLFlBQVUsRUFBQ0MsZ0JBQTFDO0FBQTJEQyxRQUFNLEVBQUNDLFlBQWxFO0FBQStFQyxNQUFJLEVBQUNDLFVBQXBGO0FBQStGQyxTQUFPLEVBQUNDO0FBQXZHLElBQXNIQywwS0FBQSxJQUErQjVCLFlBQVksQ0FBQzZCLGtCQUF2SyxDLENBQTBMOztBQUNoMkMsTUFBTUMsUUFBUSxHQUFDLENBQUMsR0FBR1gsaUJBQUosRUFBc0IsR0FBR0UsZ0JBQXpCLENBQWY7QUFBMERGLGlCQUFpQixDQUFDWSxJQUFsQixDQUF1QixDQUFDQyxDQUFELEVBQUdDLENBQUgsS0FBT0QsQ0FBQyxHQUFDQyxDQUFoQztBQUFtQ0gsUUFBUSxDQUFDQyxJQUFULENBQWMsQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILEtBQU9ELENBQUMsR0FBQ0MsQ0FBdkI7O0FBQTBCLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQXlCQyxNQUF6QixFQUFnQ0MsS0FBaEMsRUFBc0M7QUFBQyxNQUFHQSxLQUFLLEtBQUdELE1BQU0sS0FBRyxNQUFULElBQWlCQSxNQUFNLEtBQUcsWUFBN0IsQ0FBUixFQUFtRDtBQUFDO0FBQ2xOLFVBQU1FLGVBQWUsR0FBQyxvQkFBdEI7QUFBMkMsVUFBTUMsWUFBWSxHQUFDLEVBQW5COztBQUFzQixTQUFJLElBQUlDLEtBQVIsRUFBY0EsS0FBSyxHQUFDRixlQUFlLENBQUNHLElBQWhCLENBQXFCSixLQUFyQixDQUFwQixFQUFnREcsS0FBaEQsRUFBc0Q7QUFBQ0Qsa0JBQVksQ0FBQ0csSUFBYixDQUFrQkMsUUFBUSxDQUFDSCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTFCO0FBQXVDOztBQUFBLFFBQUdELFlBQVksQ0FBQ0ssTUFBaEIsRUFBdUI7QUFBQyxZQUFNQyxhQUFhLEdBQUNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQUdSLFlBQVosSUFBMEIsSUFBOUM7QUFBbUQsYUFBTTtBQUFDUyxjQUFNLEVBQUNsQixRQUFRLENBQUNtQixNQUFULENBQWdCQyxDQUFDLElBQUVBLENBQUMsSUFBRS9CLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsR0FBcUIwQixhQUEzQyxDQUFSO0FBQWtFTSxZQUFJLEVBQUM7QUFBdkUsT0FBTjtBQUFtRjs7QUFBQSxXQUFNO0FBQUNILFlBQU0sRUFBQ2xCLFFBQVI7QUFBaUJxQixVQUFJLEVBQUM7QUFBdEIsS0FBTjtBQUFrQzs7QUFBQSxNQUFHLE9BQU9oQixLQUFQLEtBQWUsUUFBZixJQUF5QkMsTUFBTSxLQUFHLE1BQWxDLElBQTBDQSxNQUFNLEtBQUcsWUFBdEQsRUFBbUU7QUFBQyxXQUFNO0FBQUNZLFlBQU0sRUFBQzdCLGlCQUFSO0FBQTBCZ0MsVUFBSSxFQUFDO0FBQS9CLEtBQU47QUFBMkM7O0FBQUEsUUFBTUgsTUFBTSxHQUFDLENBQUMsR0FBRyxJQUFJSSxHQUFKLEVBQVE7QUFDdmU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFDakIsS0FBRCxFQUFPQSxLQUFLLEdBQUM7QUFBQztBQUFkLElBQStCekQsR0FBL0IsQ0FBbUMyRSxDQUFDLElBQUV2QixRQUFRLENBQUN3QixJQUFULENBQWNDLENBQUMsSUFBRUEsQ0FBQyxJQUFFRixDQUFwQixLQUF3QnZCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDYyxNQUFULEdBQWdCLENBQWpCLENBQXRFLENBUitkLENBQUosQ0FBYjtBQVFqWCxTQUFNO0FBQUNJLFVBQUQ7QUFBUUcsUUFBSSxFQUFDO0FBQWIsR0FBTjtBQUF5Qjs7QUFBQSxTQUFTSyxnQkFBVCxDQUEwQjtBQUFDMUMsS0FBRDtBQUFLMkMsYUFBTDtBQUFpQnJCLFFBQWpCO0FBQXdCRCxPQUF4QjtBQUE4QnVCLFNBQTlCO0FBQXNDckIsT0FBdEM7QUFBNENmO0FBQTVDLENBQTFCLEVBQThFO0FBQUMsTUFBR21DLFdBQUgsRUFBZTtBQUFDLFdBQU07QUFBQzNDLFNBQUQ7QUFBSzZDLFlBQU0sRUFBQ3RELFNBQVo7QUFBc0JnQyxXQUFLLEVBQUNoQztBQUE1QixLQUFOO0FBQThDOztBQUFBLFFBQUs7QUFBQzJDLFVBQUQ7QUFBUUc7QUFBUixNQUFjakIsU0FBUyxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBY0MsS0FBZCxDQUE1QjtBQUFpRCxRQUFNdUIsSUFBSSxHQUFDWixNQUFNLENBQUNKLE1BQVAsR0FBYyxDQUF6QjtBQUEyQixTQUFNO0FBQUNQLFNBQUssRUFBQyxDQUFDQSxLQUFELElBQVFjLElBQUksS0FBRyxHQUFmLEdBQW1CLE9BQW5CLEdBQTJCZCxLQUFsQztBQUF3Q3NCLFVBQU0sRUFBQ1gsTUFBTSxDQUFDdEUsR0FBUCxDQUFXLENBQUMyRSxDQUFELEVBQUdRLENBQUgsS0FBUSxHQUFFdkMsTUFBTSxDQUFDO0FBQUNSLFNBQUQ7QUFBSzRDLGFBQUw7QUFBYXZCLFdBQUssRUFBQ2tCO0FBQW5CLEtBQUQsQ0FBd0IsSUFBR0YsSUFBSSxLQUFHLEdBQVAsR0FBV0UsQ0FBWCxHQUFhUSxDQUFDLEdBQUMsQ0FBRSxHQUFFVixJQUFLLEVBQTlFLEVBQWlGVyxJQUFqRixDQUFzRixJQUF0RixDQUEvQztBQUEySTtBQUNoZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FoRCxPQUFHLEVBQUNRLE1BQU0sQ0FBQztBQUFDUixTQUFEO0FBQUs0QyxhQUFMO0FBQWF2QixXQUFLLEVBQUNhLE1BQU0sQ0FBQ1ksSUFBRDtBQUF6QixLQUFEO0FBTjJVLEdBQU47QUFNaFM7O0FBQUEsU0FBU0csTUFBVCxDQUFnQkMsQ0FBaEIsRUFBa0I7QUFBQyxNQUFHLE9BQU9BLENBQVAsS0FBVyxRQUFkLEVBQXVCO0FBQUMsV0FBT0EsQ0FBUDtBQUFVOztBQUFBLE1BQUcsT0FBT0EsQ0FBUCxLQUFXLFFBQWQsRUFBdUI7QUFBQyxXQUFPckIsUUFBUSxDQUFDcUIsQ0FBRCxFQUFHLEVBQUgsQ0FBZjtBQUF1Qjs7QUFBQSxTQUFPM0QsU0FBUDtBQUFrQjs7QUFBQSxTQUFTNEQsa0JBQVQsQ0FBNEJDLFdBQTVCLEVBQXdDO0FBQUMsUUFBTUMsSUFBSSxHQUFDN0QsT0FBTyxDQUFDOEQsR0FBUixDQUFZN0MsWUFBWixDQUFYOztBQUFxQyxNQUFHNEMsSUFBSCxFQUFRO0FBQUMsV0FBT0EsSUFBSSxDQUFDLENBQUMsR0FBRXZFLFNBQVMsQ0FBQ21CLE9BQWIsRUFBc0I7QUFBQ3NELFVBQUksRUFBQzVDO0FBQU4sS0FBdEIsRUFBd0N5QyxXQUF4QyxDQUFELENBQVg7QUFBbUU7O0FBQUEsUUFBTSxJQUFJSSxLQUFKLENBQVcseURBQXdEdEUsWUFBWSxDQUFDdUUsYUFBYixDQUEyQlQsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBc0MsZUFBY3ZDLFlBQWEsRUFBcEksQ0FBTjtBQUE4SSxDLENBQUE7QUFDN2M7OztBQUNBLFNBQVNpRCxpQkFBVCxDQUEyQkMsR0FBM0IsRUFBK0JDLFdBQS9CLEVBQTJDO0FBQUMsTUFBR0EsV0FBVyxLQUFHLE1BQWQsSUFBc0JELEdBQXpCLEVBQTZCO0FBQUMsVUFBTUUsVUFBVSxHQUFDLE1BQUk7QUFBQyxVQUFHLENBQUNGLEdBQUcsQ0FBQzNELEdBQUosQ0FBUThELFVBQVIsQ0FBbUIsT0FBbkIsQ0FBSixFQUFnQztBQUFDLGNBQU1yQixDQUFDLEdBQUMsWUFBV2tCLEdBQVgsR0FBZUEsR0FBRyxDQUFDSSxNQUFKLEVBQWYsR0FBNEJDLE9BQU8sQ0FBQ0MsT0FBUixFQUFwQztBQUFzRHhCLFNBQUMsQ0FBQ3lCLEtBQUYsQ0FBUSxNQUFJLENBQUUsQ0FBZCxFQUFnQkMsSUFBaEIsQ0FBcUIsTUFBSTtBQUFDUixhQUFHLENBQUNTLEtBQUosQ0FBVWpDLE1BQVYsR0FBaUIsTUFBakI7QUFBd0J3QixhQUFHLENBQUNTLEtBQUosQ0FBVUMsY0FBVixHQUF5QixNQUF6QjtBQUFnQ1YsYUFBRyxDQUFDUyxLQUFKLENBQVVFLGVBQVYsR0FBMEIsTUFBMUI7QUFBa0MsU0FBcEg7QUFBdUg7QUFBQyxLQUFyTzs7QUFBc08sUUFBR1gsR0FBRyxDQUFDWSxRQUFQLEVBQWdCO0FBQUM7QUFDalU7QUFDQTtBQUNBVixnQkFBVTtBQUFJLEtBSGtTLE1BRzlSO0FBQUNGLFNBQUcsQ0FBQ2EsTUFBSixHQUFXWCxVQUFYO0FBQXVCO0FBQUM7QUFBQzs7QUFBQSxTQUFTakYsS0FBVCxDQUFlNkYsSUFBZixFQUFvQjtBQUFDLE1BQUc7QUFBQ3pFLE9BQUQ7QUFBS3VCLFNBQUw7QUFBV29CLGVBQVcsR0FBQyxLQUF2QjtBQUE2QitCLFlBQVEsR0FBQyxLQUF0QztBQUE0Q0MsV0FBNUM7QUFBb0RqSCxhQUFwRDtBQUE4RGtGLFdBQTlEO0FBQXNFdkIsU0FBdEU7QUFBNEV1RCxVQUE1RTtBQUFtRkMsYUFBbkY7QUFBNkZDLGtCQUE3RjtBQUE0R3RFLFVBQU0sR0FBQzJDLGtCQUFuSDtBQUFzSVMsZUFBVyxHQUFDLE9BQWxKO0FBQTBKbUI7QUFBMUosTUFBdUtOLElBQTFLO0FBQUEsTUFBK0tPLEdBQUcsR0FBQyxDQUFDLEdBQUVuRyw4QkFBOEIsQ0FBQ29CLE9BQWxDLEVBQTJDd0UsSUFBM0MsRUFBZ0QsQ0FBQyxLQUFELEVBQU8sT0FBUCxFQUFlLGFBQWYsRUFBNkIsVUFBN0IsRUFBd0MsU0FBeEMsRUFBa0QsV0FBbEQsRUFBOEQsU0FBOUQsRUFBd0UsT0FBeEUsRUFBZ0YsUUFBaEYsRUFBeUYsV0FBekYsRUFBcUcsZ0JBQXJHLEVBQXNILFFBQXRILEVBQStILGFBQS9ILEVBQTZJLGFBQTdJLENBQWhELENBQW5MO0FBQWdZLE1BQUlRLElBQUksR0FBQ0QsR0FBVDtBQUFhLE1BQUkxRCxNQUFNLEdBQUNDLEtBQUssR0FBQyxZQUFELEdBQWMsV0FBOUI7O0FBQTBDLE1BQUcsWUFBVzBELElBQWQsRUFBbUI7QUFBQztBQUM1Z0IsUUFBR0EsSUFBSSxDQUFDM0QsTUFBUixFQUFlQSxNQUFNLEdBQUMyRCxJQUFJLENBQUMzRCxNQUFaLENBRDRmLENBQ3plOztBQUNsQyxXQUFPMkQsSUFBSSxDQUFDLFFBQUQsQ0FBWDtBQUF1Qjs7QUFBQSxNQUFJQyxTQUFTLEdBQUMsRUFBZDs7QUFBaUIsTUFBRy9FLGNBQWMsQ0FBQ0gsR0FBRCxDQUFqQixFQUF1QjtBQUFDLFVBQU1tRixlQUFlLEdBQUNwRixlQUFlLENBQUNDLEdBQUQsQ0FBZixHQUFxQkEsR0FBRyxDQUFDQyxPQUF6QixHQUFpQ0QsR0FBdkQ7O0FBQTJELFFBQUcsQ0FBQ21GLGVBQWUsQ0FBQ25GLEdBQXBCLEVBQXdCO0FBQUMsWUFBTSxJQUFJd0QsS0FBSixDQUFXLDhJQUE2STRCLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixlQUFmLENBQWdDLEVBQXhMLENBQU47QUFBa007O0FBQUFKLGVBQVcsR0FBQ0EsV0FBVyxJQUFFSSxlQUFlLENBQUNKLFdBQXpDO0FBQXFERyxhQUFTLEdBQUNDLGVBQWUsQ0FBQ25GLEdBQTFCOztBQUE4QixRQUFHLENBQUNzQixNQUFELElBQVNBLE1BQU0sS0FBRyxNQUFyQixFQUE0QjtBQUFDc0QsWUFBTSxHQUFDQSxNQUFNLElBQUVPLGVBQWUsQ0FBQ1AsTUFBL0I7QUFBc0N2RCxXQUFLLEdBQUNBLEtBQUssSUFBRThELGVBQWUsQ0FBQzlELEtBQTdCOztBQUFtQyxVQUFHLENBQUM4RCxlQUFlLENBQUNQLE1BQWpCLElBQXlCLENBQUNPLGVBQWUsQ0FBQzlELEtBQTdDLEVBQW1EO0FBQUMsY0FBTSxJQUFJbUMsS0FBSixDQUFXLDJKQUEwSjRCLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixlQUFmLENBQWdDLEVBQXJNLENBQU47QUFBK007QUFBQztBQUFDOztBQUFBbkYsS0FBRyxHQUFDLE9BQU9BLEdBQVAsS0FBYSxRQUFiLEdBQXNCQSxHQUF0QixHQUEwQmtGLFNBQTlCO0FBQXdDLFFBQU1JLFFBQVEsR0FBQ3JDLE1BQU0sQ0FBQzVCLEtBQUQsQ0FBckI7QUFBNkIsUUFBTWtFLFNBQVMsR0FBQ3RDLE1BQU0sQ0FBQzJCLE1BQUQsQ0FBdEI7QUFBK0IsUUFBTVksVUFBVSxHQUFDdkMsTUFBTSxDQUFDTCxPQUFELENBQXZCOztBQUFpQyxZQUF1QztBQUFDLFFBQUcsQ0FBQzVDLEdBQUosRUFBUTtBQUFDLFlBQU0sSUFBSXdELEtBQUosQ0FBVywwSEFBeUg0QixJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDaEUsYUFBRDtBQUFPdUQsY0FBUDtBQUFjaEM7QUFBZCxPQUFmLENBQXVDLEVBQTNLLENBQU47QUFBcUw7O0FBQUEsUUFBRyxDQUFDOUMsbUJBQW1CLENBQUMyRixRQUFwQixDQUE2Qm5FLE1BQTdCLENBQUosRUFBeUM7QUFBQyxZQUFNLElBQUlrQyxLQUFKLENBQVcsbUJBQWtCeEQsR0FBSSw4Q0FBNkNzQixNQUFPLHNCQUFxQnhCLG1CQUFtQixDQUFDbEMsR0FBcEIsQ0FBd0I4SCxNQUF4QixFQUFnQzFDLElBQWhDLENBQXFDLEdBQXJDLENBQTBDLEdBQXBKLENBQU47QUFBK0o7O0FBQUEsUUFBRyxPQUFPc0MsUUFBUCxLQUFrQixXQUFsQixJQUErQkssS0FBSyxDQUFDTCxRQUFELENBQXBDLElBQWdELE9BQU9DLFNBQVAsS0FBbUIsV0FBbkIsSUFBZ0NJLEtBQUssQ0FBQ0osU0FBRCxDQUF4RixFQUFvRztBQUFDLFlBQU0sSUFBSS9CLEtBQUosQ0FBVyxtQkFBa0J4RCxHQUFJLDZFQUFqQyxDQUFOO0FBQXNIOztBQUFBLFFBQUcsQ0FBQ1Ysb0JBQW9CLENBQUNtRyxRQUFyQixDQUE4QmQsT0FBOUIsQ0FBSixFQUEyQztBQUFDLFlBQU0sSUFBSW5CLEtBQUosQ0FBVyxtQkFBa0J4RCxHQUFJLCtDQUE4QzJFLE9BQVEsc0JBQXFCckYsb0JBQW9CLENBQUMxQixHQUFyQixDQUF5QjhILE1BQXpCLEVBQWlDMUMsSUFBakMsQ0FBc0MsR0FBdEMsQ0FBMkMsR0FBdkosQ0FBTjtBQUFrSzs7QUFBQSxRQUFHMEIsUUFBUSxJQUFFQyxPQUFPLEtBQUcsTUFBdkIsRUFBOEI7QUFBQyxZQUFNLElBQUluQixLQUFKLENBQVcsbUJBQWtCeEQsR0FBSSxpRkFBakMsQ0FBTjtBQUEwSDs7QUFBQSxRQUFHNEQsV0FBVyxLQUFHLE1BQWpCLEVBQXdCO0FBQUMsVUFBR3RDLE1BQU0sS0FBRyxNQUFULElBQWlCLENBQUNnRSxRQUFRLElBQUUsQ0FBWCxLQUFlQyxTQUFTLElBQUUsQ0FBMUIsSUFBNkIsSUFBakQsRUFBc0Q7QUFBQ0ssZUFBTyxDQUFDQyxJQUFSLENBQWMsbUJBQWtCN0YsR0FBSSxzR0FBcEM7QUFBNEk7O0FBQUEsVUFBRyxDQUFDK0UsV0FBSixFQUFnQjtBQUFDLGNBQU1lLGNBQWMsR0FBQyxDQUFDLE1BQUQsRUFBUSxLQUFSLEVBQWMsTUFBZCxDQUFyQixDQUFELENBQTRDOztBQUNscUUsY0FBTSxJQUFJdEMsS0FBSixDQUFXLG1CQUFrQnhELEdBQUk7QUFDdkM7QUFDQTtBQUNBLG1HQUFtRzhGLGNBQWMsQ0FBQzlDLElBQWYsQ0FBb0IsR0FBcEIsQ0FBeUI7QUFDNUg7QUFDQSxnRkFMTSxDQUFOO0FBS21GO0FBQUM7QUFBQzs7QUFBQSxNQUFJK0MsTUFBTSxHQUFDLENBQUNyQixRQUFELEtBQVlDLE9BQU8sS0FBRyxNQUFWLElBQWtCLE9BQU9BLE9BQVAsS0FBaUIsV0FBL0MsQ0FBWDs7QUFBdUUsTUFBRzNFLEdBQUcsSUFBRUEsR0FBRyxDQUFDOEQsVUFBSixDQUFlLE9BQWYsQ0FBUixFQUFnQztBQUFDO0FBQzdMbkIsZUFBVyxHQUFDLElBQVo7QUFBaUJvRCxVQUFNLEdBQUMsS0FBUDtBQUFjOztBQUFBLFFBQUssQ0FBQ0MsTUFBRCxFQUFRQyxhQUFSLElBQXVCLENBQUMsR0FBRTlHLGdCQUFnQixDQUFDK0csZUFBcEIsRUFBcUM7QUFBQ0MsY0FBVSxFQUFDLE9BQVo7QUFBb0JDLFlBQVEsRUFBQyxDQUFDTDtBQUE5QixHQUFyQyxDQUE1QjtBQUF3RyxRQUFNTSxTQUFTLEdBQUMsQ0FBQ04sTUFBRCxJQUFTRSxhQUF6QjtBQUF1QyxNQUFJSyxZQUFKO0FBQWlCLE1BQUlDLFVBQUo7QUFBZSxNQUFJQyxRQUFKO0FBQWEsTUFBSUMsUUFBUSxHQUFDLENBQUMsR0FBRTNILFNBQVMsQ0FBQ21CLE9BQWIsRUFBc0I7QUFBQ3lHLFlBQVEsRUFBQyxVQUFWO0FBQXFCQyxPQUFHLEVBQUMsQ0FBekI7QUFBMkJDLFFBQUksRUFBQyxDQUFoQztBQUFrQ0MsVUFBTSxFQUFDLENBQXpDO0FBQTJDQyxTQUFLLEVBQUMsQ0FBakQ7QUFBbURDLGFBQVMsRUFBQyxZQUE3RDtBQUEwRUMsV0FBTyxFQUFDLENBQWxGO0FBQW9GQyxVQUFNLEVBQUMsTUFBM0Y7QUFBa0dDLFVBQU0sRUFBQyxNQUF6RztBQUFnSEMsV0FBTyxFQUFDLE9BQXhIO0FBQWdJOUYsU0FBSyxFQUFDLENBQXRJO0FBQXdJdUQsVUFBTSxFQUFDLENBQS9JO0FBQWlKd0MsWUFBUSxFQUFDLE1BQTFKO0FBQWlLQyxZQUFRLEVBQUMsTUFBMUs7QUFBaUxDLGFBQVMsRUFBQyxNQUEzTDtBQUFrTUMsYUFBUyxFQUFDLE1BQTVNO0FBQW1OMUMsYUFBbk47QUFBNk5DO0FBQTdOLEdBQXRCLEVBQW1RbEIsV0FBVyxLQUFHLE1BQWQsR0FBcUI7QUFBQ3pCLFVBQU0sRUFBQyxZQUFSO0FBQXFCa0Msa0JBQWMsRUFBQyxPQUFwQztBQUE0Q0MsbUJBQWUsRUFBRSxRQUFPUyxXQUFZO0FBQWhGLEdBQXJCLEdBQTBHeEYsU0FBN1csQ0FBYjs7QUFBcVksTUFBRyxPQUFPK0YsUUFBUCxLQUFrQixXQUFsQixJQUErQixPQUFPQyxTQUFQLEtBQW1CLFdBQWxELElBQStEakUsTUFBTSxLQUFHLE1BQTNFLEVBQWtGO0FBQUM7QUFDbnJCLFVBQU1rRyxRQUFRLEdBQUNqQyxTQUFTLEdBQUNELFFBQXpCO0FBQWtDLFVBQU1tQyxVQUFVLEdBQUM5QixLQUFLLENBQUM2QixRQUFELENBQUwsR0FBZ0IsTUFBaEIsR0FBd0IsR0FBRUEsUUFBUSxHQUFDLEdBQUksR0FBeEQ7O0FBQTJELFFBQUdsRyxNQUFNLEtBQUcsWUFBWixFQUF5QjtBQUFDO0FBQ3ZIZ0Ysa0JBQVksR0FBQztBQUFDYSxlQUFPLEVBQUMsT0FBVDtBQUFpQk8sZ0JBQVEsRUFBQyxRQUExQjtBQUFtQ2hCLGdCQUFRLEVBQUMsVUFBNUM7QUFBdURLLGlCQUFTLEVBQUMsWUFBakU7QUFBOEVHLGNBQU0sRUFBQztBQUFyRixPQUFiO0FBQXFHWCxnQkFBVSxHQUFDO0FBQUNZLGVBQU8sRUFBQyxPQUFUO0FBQWlCSixpQkFBUyxFQUFDLFlBQTNCO0FBQXdDVTtBQUF4QyxPQUFYO0FBQWdFLEtBRHhFLE1BQzZFLElBQUduRyxNQUFNLEtBQUcsV0FBWixFQUF3QjtBQUFDO0FBQ25NZ0Ysa0JBQVksR0FBQztBQUFDYSxlQUFPLEVBQUMsY0FBVDtBQUF3QkUsZ0JBQVEsRUFBQyxNQUFqQztBQUF3Q0ssZ0JBQVEsRUFBQyxRQUFqRDtBQUEwRGhCLGdCQUFRLEVBQUMsVUFBbkU7QUFBOEVLLGlCQUFTLEVBQUMsWUFBeEY7QUFBcUdHLGNBQU0sRUFBQztBQUE1RyxPQUFiO0FBQTRIWCxnQkFBVSxHQUFDO0FBQUNRLGlCQUFTLEVBQUMsWUFBWDtBQUF3QkksZUFBTyxFQUFDLE9BQWhDO0FBQXdDRSxnQkFBUSxFQUFDO0FBQWpELE9BQVg7QUFBb0ViLGNBQVEsR0FBRSxlQUFjbEIsUUFBUyxhQUFZQyxTQUFVLHNEQUF2RDtBQUE4RyxLQURwSSxNQUN5SSxJQUFHakUsTUFBTSxLQUFHLE9BQVosRUFBb0I7QUFBQztBQUN4VWdGLGtCQUFZLEdBQUM7QUFBQ29CLGdCQUFRLEVBQUMsUUFBVjtBQUFtQlgsaUJBQVMsRUFBQyxZQUE3QjtBQUEwQ0ksZUFBTyxFQUFDLGNBQWxEO0FBQWlFVCxnQkFBUSxFQUFDLFVBQTFFO0FBQXFGckYsYUFBSyxFQUFDaUUsUUFBM0Y7QUFBb0dWLGNBQU0sRUFBQ1c7QUFBM0csT0FBYjtBQUFvSTtBQUFDLEdBSjJkLE1BSXRkLElBQUcsT0FBT0QsUUFBUCxLQUFrQixXQUFsQixJQUErQixPQUFPQyxTQUFQLEtBQW1CLFdBQWxELElBQStEakUsTUFBTSxLQUFHLE1BQTNFLEVBQWtGO0FBQUM7QUFDN05nRixnQkFBWSxHQUFDO0FBQUNhLGFBQU8sRUFBQyxPQUFUO0FBQWlCTyxjQUFRLEVBQUMsUUFBMUI7QUFBbUNoQixjQUFRLEVBQUMsVUFBNUM7QUFBdURDLFNBQUcsRUFBQyxDQUEzRDtBQUE2REMsVUFBSSxFQUFDLENBQWxFO0FBQW9FQyxZQUFNLEVBQUMsQ0FBM0U7QUFBNkVDLFdBQUssRUFBQyxDQUFuRjtBQUFxRkMsZUFBUyxFQUFDLFlBQS9GO0FBQTRHRyxZQUFNLEVBQUM7QUFBbkgsS0FBYjtBQUFvSSxHQURNLE1BQ0Y7QUFBQztBQUN6SSxjQUF1QztBQUFDLFlBQU0sSUFBSTFELEtBQUosQ0FBVyxtQkFBa0J4RCxHQUFJLHlFQUFqQyxDQUFOO0FBQWtIO0FBQUM7O0FBQUEsTUFBSTJILGFBQWEsR0FBQztBQUFDM0gsT0FBRyxFQUFDLGdGQUFMO0FBQXNGNkMsVUFBTSxFQUFDdEQsU0FBN0Y7QUFBdUdnQyxTQUFLLEVBQUNoQztBQUE3RyxHQUFsQjs7QUFBMEksTUFBRzhHLFNBQUgsRUFBYTtBQUFDc0IsaUJBQWEsR0FBQ2pGLGdCQUFnQixDQUFDO0FBQUMxQyxTQUFEO0FBQUsyQyxpQkFBTDtBQUFpQnJCLFlBQWpCO0FBQXdCRCxXQUFLLEVBQUNpRSxRQUE5QjtBQUF1QzFDLGFBQU8sRUFBQzRDLFVBQS9DO0FBQTBEakUsV0FBMUQ7QUFBZ0VmO0FBQWhFLEtBQUQsQ0FBOUI7QUFBeUc7O0FBQUEsU0FBTSxhQUFhekIsTUFBTSxDQUFDa0IsT0FBUCxDQUFlMkgsYUFBZixDQUE2QixLQUE3QixFQUFtQztBQUFDeEQsU0FBSyxFQUFDa0M7QUFBUCxHQUFuQyxFQUF3REMsVUFBVSxHQUFDLGFBQWF4SCxNQUFNLENBQUNrQixPQUFQLENBQWUySCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DO0FBQUN4RCxTQUFLLEVBQUNtQztBQUFQLEdBQW5DLEVBQXNEQyxRQUFRLEdBQUMsYUFBYXpILE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZTJILGFBQWYsQ0FBNkIsS0FBN0IsRUFBbUM7QUFBQ3hELFNBQUssRUFBQztBQUFDaUQsY0FBUSxFQUFDLE1BQVY7QUFBaUJGLGFBQU8sRUFBQyxPQUF6QjtBQUFpQ0QsWUFBTSxFQUFDLENBQXhDO0FBQTBDRCxZQUFNLEVBQUMsTUFBakQ7QUFBd0RELGFBQU8sRUFBQztBQUFoRSxLQUFQO0FBQTBFYSxPQUFHLEVBQUMsRUFBOUU7QUFBaUYsbUJBQWMsSUFBL0Y7QUFBb0dDLFFBQUksRUFBQyxjQUF6RztBQUF3SDlILE9BQUcsRUFBRSw2QkFBNEIsQ0FBQyxHQUFFZixPQUFPLENBQUM4SSxRQUFYLEVBQXFCdkIsUUFBckIsQ0FBK0I7QUFBeEwsR0FBbkMsQ0FBZCxHQUE2TyxJQUEzUyxDQUFkLEdBQStULElBQWpZLEVBQXNZLENBQUNILFNBQUQsSUFBWSxhQUFhdEgsTUFBTSxDQUFDa0IsT0FBUCxDQUFlMkgsYUFBZixDQUE2QixVQUE3QixFQUF3QyxJQUF4QyxFQUE2QyxhQUFhN0ksTUFBTSxDQUFDa0IsT0FBUCxDQUFlMkgsYUFBZixDQUE2QixLQUE3QixFQUFtQ0ksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFpQmhELElBQWpCLEVBQXNCdkMsZ0JBQWdCLENBQUM7QUFBQzFDLE9BQUQ7QUFBSzJDLGVBQUw7QUFBaUJyQixVQUFqQjtBQUF3QkQsU0FBSyxFQUFDaUUsUUFBOUI7QUFBdUMxQyxXQUFPLEVBQUM0QyxVQUEvQztBQUEwRGpFLFNBQTFEO0FBQWdFZjtBQUFoRSxHQUFELENBQXRDLEVBQWdIO0FBQUMwSCxZQUFRLEVBQUMsT0FBVjtBQUFrQjlELFNBQUssRUFBQ3FDLFFBQXhCO0FBQWlDL0ksYUFBUyxFQUFDQTtBQUEzQyxHQUFoSCxDQUFuQyxDQUExRCxDQUEvWixFQUFxcUIsYUFBYXFCLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZTJILGFBQWYsQ0FBNkIsS0FBN0IsRUFBbUNJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJoRCxJQUFqQixFQUFzQjBDLGFBQXRCLEVBQW9DO0FBQUNPLFlBQVEsRUFBQyxPQUFWO0FBQWtCeEssYUFBUyxFQUFDQSxTQUE1QjtBQUFzQ3lLLE9BQUcsRUFBQ0MsT0FBTyxJQUFFO0FBQUNwQyxZQUFNLENBQUNvQyxPQUFELENBQU47QUFBZ0IxRSx1QkFBaUIsQ0FBQzBFLE9BQUQsRUFBU3hFLFdBQVQsQ0FBakI7QUFBd0MsS0FBNUc7QUFBNkdRLFNBQUssRUFBQ3FDO0FBQW5ILEdBQXBDLENBQW5DLENBQWxyQixFQUF3M0IvQixRQUFRO0FBQUM7QUFBYztBQUM5ekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTNGLFFBQU0sQ0FBQ2tCLE9BQVAsQ0FBZTJILGFBQWYsQ0FBNkI1SSxLQUFLLENBQUNpQixPQUFuQyxFQUEyQyxJQUEzQyxFQUFnRCxhQUFhbEIsTUFBTSxDQUFDa0IsT0FBUCxDQUFlMkgsYUFBZixDQUE2QixNQUE3QixFQUFvQztBQUFDUyxPQUFHLEVBQUMsWUFBVVYsYUFBYSxDQUFDM0gsR0FBeEIsR0FBNEIySCxhQUFhLENBQUM5RSxNQUExQyxHQUFpRDhFLGFBQWEsQ0FBQ3BHLEtBQXBFO0FBQTBFK0csT0FBRyxFQUFDLFNBQTlFO0FBQXdGQyxNQUFFLEVBQUMsT0FBM0Y7QUFBbUdDLFFBQUksRUFBQ2IsYUFBYSxDQUFDOUUsTUFBZCxHQUFxQnRELFNBQXJCLEdBQStCb0ksYUFBYSxDQUFDM0gsR0FBckosQ0FBd0o7QUFBeEo7QUFDaEd5SSxlQUFXLEVBQUNkLGFBQWEsQ0FBQzlFLE1BRHNFLENBQ2hFO0FBRGdFO0FBRWhHNkYsY0FBVSxFQUFDZixhQUFhLENBQUNwRztBQUZ1RSxHQUFwQyxDQUE3RCxDQUwreUMsR0FPNXdDLElBUDRZLENBQW5CO0FBT2xYLEMsQ0FBQTs7O0FBQzFDLFNBQVNvSCxZQUFULENBQXNCM0ksR0FBdEIsRUFBMEI7QUFBQyxTQUFPQSxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVMsR0FBVCxHQUFhQSxHQUFHLENBQUM0SSxLQUFKLENBQVUsQ0FBVixDQUFiLEdBQTBCNUksR0FBakM7QUFBc0M7O0FBQUEsU0FBU04sV0FBVCxDQUFxQjtBQUFDNkQsTUFBRDtBQUFNdkQsS0FBTjtBQUFVcUIsT0FBVjtBQUFnQnVCO0FBQWhCLENBQXJCLEVBQThDO0FBQUM7QUFDaEgsUUFBTWlHLE1BQU0sR0FBQyxDQUFDLGFBQUQsRUFBZSxTQUFmLEVBQXlCLE9BQUt4SCxLQUE5QixDQUFiO0FBQWtELE1BQUl5SCxZQUFZLEdBQUMsRUFBakI7O0FBQW9CLE1BQUdsRyxPQUFILEVBQVc7QUFBQ2lHLFVBQU0sQ0FBQ2pILElBQVAsQ0FBWSxPQUFLZ0IsT0FBakI7QUFBMkI7O0FBQUEsTUFBR2lHLE1BQU0sQ0FBQy9HLE1BQVYsRUFBaUI7QUFBQ2dILGdCQUFZLEdBQUMsTUFBSUQsTUFBTSxDQUFDN0YsSUFBUCxDQUFZLEdBQVosQ0FBakI7QUFBbUM7O0FBQUEsU0FBTyxHQUFFTyxJQUFLLEdBQUVvRixZQUFZLENBQUMzSSxHQUFELENBQU0sR0FBRThJLFlBQWEsRUFBakQ7QUFBb0Q7O0FBQUEsU0FBU2xKLFlBQVQsQ0FBc0I7QUFBQzJELE1BQUQ7QUFBTXZELEtBQU47QUFBVXFCO0FBQVYsQ0FBdEIsRUFBdUM7QUFBQyxTQUFPLEdBQUVrQyxJQUFLLEdBQUVvRixZQUFZLENBQUMzSSxHQUFELENBQU0sWUFBV3FCLEtBQU0sRUFBbkQ7QUFBc0Q7O0FBQUEsU0FBUzFCLGdCQUFULENBQTBCO0FBQUM0RCxNQUFEO0FBQU12RCxLQUFOO0FBQVVxQixPQUFWO0FBQWdCdUI7QUFBaEIsQ0FBMUIsRUFBbUQ7QUFBQztBQUN4VyxRQUFNaUcsTUFBTSxHQUFDLENBQUMsUUFBRCxFQUFVLFNBQVYsRUFBb0IsT0FBS3hILEtBQXpCLEVBQStCLFFBQU11QixPQUFPLElBQUUsTUFBZixDQUEvQixDQUFiO0FBQW9FLE1BQUlrRyxZQUFZLEdBQUNELE1BQU0sQ0FBQzdGLElBQVAsQ0FBWSxHQUFaLElBQWlCLEdBQWxDO0FBQXNDLFNBQU8sR0FBRU8sSUFBSyxHQUFFdUYsWUFBYSxHQUFFSCxZQUFZLENBQUMzSSxHQUFELENBQU0sRUFBakQ7QUFBb0Q7O0FBQUEsU0FBU0gsYUFBVCxDQUF1QjtBQUFDMEQsTUFBRDtBQUFNdkQsS0FBTjtBQUFVcUIsT0FBVjtBQUFnQnVCO0FBQWhCLENBQXZCLEVBQWdEO0FBQUMsWUFBdUM7QUFBQyxVQUFNbUcsYUFBYSxHQUFDLEVBQXBCLENBQUQsQ0FBd0I7O0FBQzlRLFFBQUcsQ0FBQy9JLEdBQUosRUFBUStJLGFBQWEsQ0FBQ25ILElBQWQsQ0FBbUIsS0FBbkI7QUFBMEIsUUFBRyxDQUFDUCxLQUFKLEVBQVUwSCxhQUFhLENBQUNuSCxJQUFkLENBQW1CLE9BQW5COztBQUE0QixRQUFHbUgsYUFBYSxDQUFDakgsTUFBZCxHQUFxQixDQUF4QixFQUEwQjtBQUFDLFlBQU0sSUFBSTBCLEtBQUosQ0FBVyxvQ0FBbUN1RixhQUFhLENBQUMvRixJQUFkLENBQW1CLElBQW5CLENBQXlCLGdHQUErRm9DLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNyRixXQUFEO0FBQUtxQixhQUFMO0FBQVd1QjtBQUFYLE9BQWYsQ0FBb0MsRUFBMU0sQ0FBTjtBQUFvTjs7QUFBQSxRQUFHNUMsR0FBRyxDQUFDOEQsVUFBSixDQUFlLElBQWYsQ0FBSCxFQUF3QjtBQUFDLFlBQU0sSUFBSU4sS0FBSixDQUFXLHdCQUF1QnhELEdBQUksMEdBQXRDLENBQU47QUFBd0o7O0FBQUEsUUFBRyxDQUFDQSxHQUFHLENBQUM4RCxVQUFKLENBQWUsR0FBZixDQUFELElBQXNCakQsYUFBekIsRUFBdUM7QUFBQyxVQUFJbUksU0FBSjs7QUFBYyxVQUFHO0FBQUNBLGlCQUFTLEdBQUMsSUFBSUMsR0FBSixDQUFRakosR0FBUixDQUFWO0FBQXdCLE9BQTVCLENBQTRCLE9BQU1rSixHQUFOLEVBQVU7QUFBQ3RELGVBQU8sQ0FBQ3VELEtBQVIsQ0FBY0QsR0FBZDtBQUFtQixjQUFNLElBQUkxRixLQUFKLENBQVcsd0JBQXVCeEQsR0FBSSxpSUFBdEMsQ0FBTjtBQUErSzs7QUFBQSxVQUFHLENBQUNhLGFBQWEsQ0FBQzRFLFFBQWQsQ0FBdUJ1RCxTQUFTLENBQUNJLFFBQWpDLENBQUosRUFBK0M7QUFBQyxjQUFNLElBQUk1RixLQUFKLENBQVcscUJBQW9CeEQsR0FBSSxrQ0FBaUNnSixTQUFTLENBQUNJLFFBQVMsK0RBQTdFLEdBQTZJLDhFQUF2SixDQUFOO0FBQTZPO0FBQUM7QUFBQzs7QUFBQSxTQUFPLEdBQUU3RixJQUFLLFFBQU84RixrQkFBa0IsQ0FBQ3JKLEdBQUQsQ0FBTSxNQUFLcUIsS0FBTSxNQUFLdUIsT0FBTyxJQUFFLEVBQUcsRUFBekU7QUFBNEUsQzs7Ozs7Ozs7Ozs7QUMvQ3JtQzs7QUFBQWpFLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSwwQkFBQSxHQUEyQkEsMkJBQUEsR0FBNEIsS0FBSyxDQUE1RDs7QUFBOEQsTUFBTTJLLG1CQUFtQixHQUFDLE9BQU9DLElBQVAsS0FBYyxXQUFkLElBQTJCQSxJQUFJLENBQUNELG1CQUFoQyxJQUFxRCxVQUFTRSxFQUFULEVBQVk7QUFBQyxNQUFJQyxLQUFLLEdBQUNDLElBQUksQ0FBQ0MsR0FBTCxFQUFWO0FBQXFCLFNBQU9DLFVBQVUsQ0FBQyxZQUFVO0FBQUNKLE1BQUUsQ0FBQztBQUFDSyxnQkFBVSxFQUFDLEtBQVo7QUFBa0JDLG1CQUFhLEVBQUMsWUFBVTtBQUFDLGVBQU85SCxJQUFJLENBQUMrSCxHQUFMLENBQVMsQ0FBVCxFQUFXLE1BQUlMLElBQUksQ0FBQ0MsR0FBTCxLQUFXRixLQUFmLENBQVgsQ0FBUDtBQUEwQztBQUFyRixLQUFELENBQUY7QUFBNEYsR0FBeEcsRUFBeUcsQ0FBekcsQ0FBakI7QUFBOEgsQ0FBL087O0FBQWdQOUssMkJBQUEsR0FBNEIySyxtQkFBNUI7O0FBQWdELE1BQU1VLGtCQUFrQixHQUFDLE9BQU9ULElBQVAsS0FBYyxXQUFkLElBQTJCQSxJQUFJLENBQUNTLGtCQUFoQyxJQUFvRCxVQUFTQyxFQUFULEVBQVk7QUFBQyxTQUFPQyxZQUFZLENBQUNELEVBQUQsQ0FBbkI7QUFBeUIsQ0FBbkg7O0FBQW9IdEwsMEJBQUEsR0FBMkJxTCxrQkFBM0IsQzs7Ozs7Ozs7Ozs7QUNBMWU7O0FBQUFyTCxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsdUJBQUEsR0FBd0J1SCxlQUF4Qjs7QUFBd0MsSUFBSW5ILE1BQU0sR0FBQ0wsbUJBQU8sQ0FBQyxvQkFBRCxDQUFsQjs7QUFBNEIsSUFBSXlMLG9CQUFvQixHQUFDekwsbUJBQU8sQ0FBQyx5RkFBRCxDQUFoQzs7QUFBNEQsTUFBTTBMLHVCQUF1QixHQUFDLE9BQU9DLG9CQUFQLEtBQThCLFdBQTVEOztBQUF3RSxTQUFTbkUsZUFBVCxDQUF5QjtBQUFDQyxZQUFEO0FBQVlDO0FBQVosQ0FBekIsRUFBK0M7QUFBQyxRQUFNa0UsVUFBVSxHQUFDbEUsUUFBUSxJQUFFLENBQUNnRSx1QkFBNUI7QUFBb0QsUUFBTUcsU0FBUyxHQUFDLENBQUMsR0FBRXhMLE1BQU0sQ0FBQ3lMLE1BQVYsR0FBaEI7QUFBb0MsUUFBSyxDQUFDQyxPQUFELEVBQVNDLFVBQVQsSUFBcUIsQ0FBQyxHQUFFM0wsTUFBTSxDQUFDNEwsUUFBVixFQUFvQixLQUFwQixDQUExQjtBQUFxRCxRQUFNM0UsTUFBTSxHQUFDLENBQUMsR0FBRWpILE1BQU0sQ0FBQzZMLFdBQVYsRUFBdUJDLEVBQUUsSUFBRTtBQUFDLFFBQUdOLFNBQVMsQ0FBQ08sT0FBYixFQUFxQjtBQUFDUCxlQUFTLENBQUNPLE9BQVY7QUFBb0JQLGVBQVMsQ0FBQ08sT0FBVixHQUFrQnZMLFNBQWxCO0FBQTZCOztBQUFBLFFBQUcrSyxVQUFVLElBQUVHLE9BQWYsRUFBdUI7O0FBQU8sUUFBR0ksRUFBRSxJQUFFQSxFQUFFLENBQUNFLE9BQVYsRUFBa0I7QUFBQ1IsZUFBUyxDQUFDTyxPQUFWLEdBQWtCRSxPQUFPLENBQUNILEVBQUQsRUFBSXhFLFNBQVMsSUFBRUEsU0FBUyxJQUFFcUUsVUFBVSxDQUFDckUsU0FBRCxDQUFwQyxFQUFnRDtBQUFDRjtBQUFELE9BQWhELENBQXpCO0FBQXdGO0FBQUMsR0FBN08sRUFBOE8sQ0FBQ21FLFVBQUQsRUFBWW5FLFVBQVosRUFBdUJzRSxPQUF2QixDQUE5TyxDQUFiO0FBQTRSLEdBQUMsR0FBRTFMLE1BQU0sQ0FBQ2tNLFNBQVYsRUFBcUIsTUFBSTtBQUFDLFFBQUcsQ0FBQ2IsdUJBQUosRUFBNEI7QUFBQyxVQUFHLENBQUNLLE9BQUosRUFBWTtBQUFDLGNBQU1TLFlBQVksR0FBQyxDQUFDLEdBQUVmLG9CQUFvQixDQUFDYixtQkFBeEIsRUFBNkMsTUFBSW9CLFVBQVUsQ0FBQyxJQUFELENBQTNELENBQW5CO0FBQXNGLGVBQU0sTUFBSSxDQUFDLEdBQUVQLG9CQUFvQixDQUFDSCxrQkFBeEIsRUFBNENrQixZQUE1QyxDQUFWO0FBQXFFO0FBQUM7QUFBQyxHQUFqTyxFQUFrTyxDQUFDVCxPQUFELENBQWxPO0FBQTZPLFNBQU0sQ0FBQ3pFLE1BQUQsRUFBUXlFLE9BQVIsQ0FBTjtBQUF3Qjs7QUFBQSxTQUFTTyxPQUFULENBQWlCNUMsT0FBakIsRUFBeUIrQyxRQUF6QixFQUFrQ0MsT0FBbEMsRUFBMEM7QUFBQyxRQUFLO0FBQUNuQixNQUFEO0FBQUlvQixZQUFKO0FBQWFDO0FBQWIsTUFBdUJDLGNBQWMsQ0FBQ0gsT0FBRCxDQUExQztBQUFvREUsVUFBUSxDQUFDRSxHQUFULENBQWFwRCxPQUFiLEVBQXFCK0MsUUFBckI7QUFBK0JFLFVBQVEsQ0FBQ0wsT0FBVCxDQUFpQjVDLE9BQWpCO0FBQTBCLFNBQU8sU0FBU21DLFNBQVQsR0FBb0I7QUFBQ2UsWUFBUSxDQUFDRyxNQUFULENBQWdCckQsT0FBaEI7QUFBeUJpRCxZQUFRLENBQUNkLFNBQVQsQ0FBbUJuQyxPQUFuQixFQUExQixDQUFzRDs7QUFDcHJDLFFBQUdrRCxRQUFRLENBQUNJLElBQVQsS0FBZ0IsQ0FBbkIsRUFBcUI7QUFBQ0wsY0FBUSxDQUFDTSxVQUFUO0FBQXNCQyxlQUFTLENBQUNILE1BQVYsQ0FBaUJ4QixFQUFqQjtBQUFzQjtBQUFDLEdBRGdpQztBQUM5aEM7O0FBQUEsTUFBTTJCLFNBQVMsR0FBQyxJQUFJbk0sR0FBSixFQUFoQjs7QUFBMEIsU0FBUzhMLGNBQVQsQ0FBd0JILE9BQXhCLEVBQWdDO0FBQUMsUUFBTW5CLEVBQUUsR0FBQ21CLE9BQU8sQ0FBQ2pGLFVBQVIsSUFBb0IsRUFBN0I7QUFBZ0MsTUFBSTBGLFFBQVEsR0FBQ0QsU0FBUyxDQUFDdEksR0FBVixDQUFjMkcsRUFBZCxDQUFiOztBQUErQixNQUFHNEIsUUFBSCxFQUFZO0FBQUMsV0FBT0EsUUFBUDtBQUFpQjs7QUFBQSxRQUFNUCxRQUFRLEdBQUMsSUFBSTdMLEdBQUosRUFBZjtBQUF5QixRQUFNNEwsUUFBUSxHQUFDLElBQUloQixvQkFBSixDQUF5QnlCLE9BQU8sSUFBRTtBQUFDQSxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEtBQUssSUFBRTtBQUFDLFlBQU1iLFFBQVEsR0FBQ0csUUFBUSxDQUFDaEksR0FBVCxDQUFhMEksS0FBSyxDQUFDQyxNQUFuQixDQUFmO0FBQTBDLFlBQU01RixTQUFTLEdBQUMyRixLQUFLLENBQUNFLGNBQU4sSUFBc0JGLEtBQUssQ0FBQ0csaUJBQU4sR0FBd0IsQ0FBOUQ7O0FBQWdFLFVBQUdoQixRQUFRLElBQUU5RSxTQUFiLEVBQXVCO0FBQUM4RSxnQkFBUSxDQUFDOUUsU0FBRCxDQUFSO0FBQXFCO0FBQUMsS0FBaEw7QUFBbUwsR0FBdE4sRUFBdU4rRSxPQUF2TixDQUFmO0FBQStPUSxXQUFTLENBQUNKLEdBQVYsQ0FBY3ZCLEVBQWQsRUFBaUI0QixRQUFRLEdBQUM7QUFBQzVCLE1BQUQ7QUFBSW9CLFlBQUo7QUFBYUM7QUFBYixHQUExQjtBQUFrRCxTQUFPTyxRQUFQO0FBQWlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEeGlCO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUFPLDBFQUFBLENBQVlDLGtFQUFaLEVBQWlCQyx1RUFBakIsRUFBMkJDLHlFQUEzQixFQUF1Q0MsbUVBQXZDLEVBQTZDQywrRUFBN0M7QUFDQUwsMEVBQUEsQ0FBWU0sbUVBQVosRUFBaUJDLHlFQUFqQixFQUE0QkMsMEVBQTVCO0FBRUEsTUFBTS9PLE9BQU8sR0FBRztBQUNkVixXQUFTLEVBQUUseUJBREc7QUFFZEMsS0FBRyxFQUFFLHdCQUZTO0FBR2RGLE9BQUssRUFBRTtBQUhPLENBQWhCOztBQU1BLE1BQU0yUCxJQUFjLEdBQUcsTUFBTTtBQUMzQixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJFQUFEO0FBQU0sY0FBUSxFQUFFQyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLElBQVQsQ0FBY2xQLE9BQWQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUEsa0JBREY7QUFPRCxDQVJEOztBQVVBLCtEQUFlZ1AsSUFBZixFOzs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsK0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHRlcm5hbEltYWdlIGZyb20gJy4uLy4uL1VJL0V4dGVybmFsSW1hZ2UnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICB1cmw6IHN0cmluZ1xyXG4gIGltYWdlTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCBpbWFnZU5hbWUsIHVybCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0gaHJlZj17dXJsfT5cclxuICAgICAgICAgIDxFeHRlcm5hbEltYWdlIGFzcGVjdFJhdGlvPXsnNCAvIDMnfSBpbWFnZU5hbWU9e2ltYWdlTmFtZX0gLz5cclxuXHJcbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXRlZ29yaWVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vQ2F0ZWdvcnknXHJcblxyXG5jb25zdCBhcnRpY2xlcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnUHJlY28gY2VueSB0ZWxlZm9ub3Ygc3RhbGUgbmV1c3R1cGFqdScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ05vdnkgcnljaGxvdGVzdCBuYSBrb3JvbmF2aXJ1cyBvZCBzcG9sb2Nub3N0aSBCb3NjaCBwcmluYXNlIHNwb2xhaGlsdmUgdnlzbGVka3kgdXogemEgMzkgbWludXQgam9qIHRvIGplIHJ5Y2hsbyB3b3cgc3RyYXNuZSBkbGhlIGplIHRvdG8nXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgQ2F0ZWdvcmllczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxyXG4gICAgICA8Q2F0ZWdvcnkgbmFtZT17J1F1YW50YSBCTEFDSyd9IGFydGljbGVzPXthcnRpY2xlc30gLz5cclxuICAgICAgPENhdGVnb3J5IG5hbWU9eydRdWFudGEgV0hJVEUnfSAgYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxyXG4gICAgICA8Q2F0ZWdvcnkgbmFtZT17J1F1YW50YSBTTUFSVCd9ICBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFydGljbGUsIHsgUHJvcHMgYXMgQXJ0aWNsZVR5cGUgfSBmcm9tICcuL0FydGljbGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXRlZ29yeS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEhpZ2h0bGlnaHRlZCBmcm9tICcuLy4uLy4uL1VJL0hpZ2hsaWdodGVkJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICBhcnRpY2xlczogQXJ0aWNsZVR5cGVbXVxyXG4gIG5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDYXRlZ29yeTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2F0ZWdvcnl9ICR7cHJvcHMuY2xhc3NOYW1lICYmIHByb3BzLmNsYXNzTmFtZX1gfT5cclxuICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICA8SGlnaHRsaWdodGVkPntwcm9wcy5uYW1lfTwvSGlnaHRsaWdodGVkPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtgJHtwcm9wcy5jbGFzc05hbWV9ICR7c3R5bGVzLmxpc3R9YH0+XHJcbiAgICAgICAge3Byb3BzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxBcnRpY2xlIGtleT17YXJ0aWNsZS50aXRsZX0gey4uLmFydGljbGV9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXh0ZXJuYWxJbWFnZSBmcm9tICcuLy4uLy4uL1VJL0V4dGVybmFsSW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnRpY2xlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZ1xyXG4gIHVybDogc3RyaW5nXHJcbiAgaW1hZ2VOYW1lOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGl0bGUsIHVybCwgaW1hZ2VOYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGEgaHJlZj17dXJsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydpbWFnZS1jb250YWluZXInXX0+XHJcbiAgICAgICAgICA8RXh0ZXJuYWxJbWFnZSBhc3BlY3RSYXRpbz0nMSAvIDEnIGltYWdlTmFtZT17aW1hZ2VOYW1lfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuL0FydGljbGUnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HcmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGU1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlNycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGU4JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZTknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlMTAnLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IEdyaWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICBOb3Zpbmt5IHogPGEgaHJlZj17J2h0dHBzOi8vd3d3LnN0YXJ0c3RvcC5zay8nfT5TVEFSVFNUT1Auc2s8L2E+XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxBcnRpY2xlIGtleT17YXJ0aWNsZS50aXRsZX0gey4uLmFydGljbGV9IC8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnRpY2xlLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IEV4dGVybmFsSW1hZ2UgZnJvbSAnLi4vLi4vVUkvRXh0ZXJuYWxJbWFnZSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXJ0aWNsZSB7XHJcbiAgaW1hZ2VOYW1lOiBzdHJpbmdcclxuICB1cmw6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcnRpY2xlOiBBcnRpY2xlXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFydGljbGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPXthcnRpY2xlLnVybH0gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPGgyPnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RXh0ZXJuYWxJbWFnZVxyXG4gICAgICAgIGltYWdlTmFtZT17YXJ0aWNsZS5pbWFnZU5hbWV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgYXNwZWN0UmF0aW89eyczIC8gMid9XHJcbiAgICAgIC8+XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW4ubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSwgeyBBcnRpY2xlIGFzIEFydGljbGVUeXBlIH0gZnJvbSAnLi9BcnRpY2xlJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhcnRpY2xlczogQXJ0aWNsZVR5cGVbXVxyXG59XHJcblxyXG5jb25zdCBNYWluOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgIDxBcnRpY2xlIGFydGljbGU9e3Byb3BzLmFydGljbGVzWzBdfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YmdyaWR9YH0+XHJcbiAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17cHJvcHMuYXJ0aWNsZXNbMV19Lz5cclxuICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXtwcm9wcy5hcnRpY2xlc1syXX0vPlxyXG4gICAgICAgIDxBcnRpY2xlIGFydGljbGU9e3Byb3BzLmFydGljbGVzWzNdfS8+XHJcbiAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17cHJvcHMuYXJ0aWNsZXNbNF19Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYnVpbGRVcmwgfSBmcm9tICdjbG91ZGluYXJ5LWJ1aWxkLXVybCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FeHRlcm5hbEltYWdlLm1vZHVsZS5zY3NzJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpbWFnZU5hbWU6IHN0cmluZ1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIGFzcGVjdFJhdGlvPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBFeHRlcm5hbEltYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbWFnZVVybCA9IGJ1aWxkVXJsKHByb3BzLmltYWdlTmFtZSwge1xyXG4gICAgY2xvdWQ6IHtcclxuICAgICAgY2xvdWROYW1lOiAnZHBraThlenBsJyxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ltYWdlLWNvbnRhaW5lciddfSBzdHlsZT17e2FzcGVjdFJhdGlvOiBwcm9wcy5hc3BlY3RSYXRpb319PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuY2xhc3NOYW1lfSAke3N0eWxlcy5pbWFnZX1gfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlcm5hbEltYWdlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IaWdobGlnaHRlZC5tb2R1bGUuc2NzcydcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpbnZlcnNlPzogdHJ1ZVxyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5cclxuY29uc3QgSGlnaHRsaWdodGVkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1hcmsgY2xhc3NOYW1lPXtwcm9wcy5pbnZlcnNlID8gc3R5bGVzLmludmVyc2UgOiBzdHlsZXMubm9ybWFsfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9tYXJrPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGlnaHRsaWdodGVkXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIGZhU2VhcmNoLFxyXG4gIGZhcyxcclxuICBmYVBob25lQWx0LFxyXG4gIGZhQXQsXHJcbiAgZmFHcmlwSG9yaXpvbnRhbCxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhYiwgZmFUd2l0dGVyLCBmYUZhY2Vib29rIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluL01haW4nXHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9DYXRlZ29yaWVzL0NhdGVnb3JpZXMnXHJcbmltcG9ydCBHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9HcmlkL0dyaWQnXHJcblxyXG5saWJyYXJ5LmFkZChmYXMsIGZhU2VhcmNoLCBmYVBob25lQWx0LCBmYUF0LCBmYUdyaXBIb3Jpem9udGFsKVxyXG5saWJyYXJ5LmFkZChmYWIsIGZhVHdpdHRlciwgZmFGYWNlYm9vaylcclxuXHJcbmNvbnN0IGFydGljbGUgPSB7XHJcbiAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gIHRpdGxlOiAnVGl0bGUnLFxyXG59XHJcblxyXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1haW4gYXJ0aWNsZXM9e0FycmF5KDUpLmZpbGwoYXJ0aWNsZSl9IC8+XHJcbiAgICAgIDxDYXRlZ29yaWVzIC8+XHJcbiAgICAgIDxHcmlkIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXJ0aWNsZVwiOiBcIkFydGljbGVfYXJ0aWNsZV9fM2ZJZ0lcIixcblx0XCJpbWFnZS1jb250YWluZXJcIjogXCJBcnRpY2xlX2ltYWdlLWNvbnRhaW5lcl9fM1BucFpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhdGVnb3JpZXNcIjogXCJDYXRlZ29yaWVzX2NhdGVnb3JpZXNfXzE4MDR4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiQ2F0ZWdvcnlfbGlzdF9fMmhXTzhcIixcblx0XCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5X2NhdGVnb3J5X18zUTdSWlwiLFxuXHRcInRpdGxlXCI6IFwiQ2F0ZWdvcnlfdGl0bGVfXzFQQ2tjXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWFnZS1jb250YWluZXJcIjogXCJBcnRpY2xlX2ltYWdlLWNvbnRhaW5lcl9fMzNSSEJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlY3Rpb25cIjogXCJHcmlkX3NlY3Rpb25fX19zTHNuXCIsXG5cdFwiZ3JpZFwiOiBcIkdyaWRfZ3JpZF9fMllfY0pcIixcblx0XCJ0aXRsZVwiOiBcIkdyaWRfdGl0bGVfXzNIT2lvXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnRpY2xlXCI6IFwiQXJ0aWNsZV9hcnRpY2xlX19KUUZNWlwiLFxuXHRcImltYWdlXCI6IFwiQXJ0aWNsZV9pbWFnZV9fMTYzc21cIixcblx0XCJkZXRhaWxzXCI6IFwiQXJ0aWNsZV9kZXRhaWxzX18xME1lbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ3JpZFwiOiBcIk1haW5fZ3JpZF9fRnpnZ2VcIixcblx0XCJzdWJncmlkXCI6IFwiTWFpbl9zdWJncmlkX18yLUNyRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW1hZ2UtY29udGFpbmVyXCI6IFwiRXh0ZXJuYWxJbWFnZV9pbWFnZS1jb250YWluZXJfXzIyTVJ4XCIsXG5cdFwiaW1hZ2VcIjogXCJFeHRlcm5hbEltYWdlX2ltYWdlX18yZ3JSLVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW52ZXJzZVwiOiBcIkhpZ2hsaWdodGVkX2ludmVyc2VfXzMyVlF3XCIsXG5cdFwibm9ybWFsXCI6IFwiSGlnaGxpZ2h0ZWRfbm9ybWFsX19lRUNEMlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbG91ZGluYXJ5LWJ1aWxkLXVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
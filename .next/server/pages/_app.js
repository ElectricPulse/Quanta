(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
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

/***/ "./components/Layout/Content.tsx":
/*!***************************************!*\
  !*** ./components/Layout/Content.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.module.scss */ "./components/Layout/Content.module.scss");
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\Content.tsx";



const Content = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: (_Content_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/Layout/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Footer.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Layout/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/logo-white.png */ "./public/images/logo-white.png");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Highlighted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../UI/Highlighted */ "./components/UI/Highlighted.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\Footer.tsx";







const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://quanta.sk",
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__.default
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().details__text),
        children: "Quanta mapuje najnov\u0161ie trendy v \u010Diernej a bielej technike, prin\xE1\u0161a zauj\xEDmavosti o internete vec\xED, smart rie\u0161eniach, testuje nov\xE9 produkty a porad\xED v\xE1m aj pri ich v\xFDbere."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["details__contact-links"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "tel:+421950591531",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
              icon: "phone-alt"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), "tel. +421 950 591 531"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "mailto: quanta@quanta.sk",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
              icon: "at"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), "quanta@quanta.sk"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://twitter.com/quantamagazin",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
              icon: ['fab', 'twitter']
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined), "@quantamagazin"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://twitter.com/quantamagazin",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
              icon: ['fab', 'facebook']
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), "@quantamagazin"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().categories),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().categories__title),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Highlighted__WEBPACK_IMPORTED_MODULE_5__.default, {
          inverse: true,
          children: "POPUL\xC1RNE KATEG\xD3RIE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().categories__links),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://quanta.sk",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Quanta BLACK"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "335"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://quanta.sk",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Quanta SMART"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "124"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://quanta.sk",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Quanta WHITE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "43"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://quanta.sk",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Mobily"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "27"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://quanta.sk",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "Po\u010D\xEDta\u010De"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "68"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Header.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Layout/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavigationDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationDesktop */ "./components/Layout/NavigationDesktop.tsx");
/* harmony import */ var hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useMediaQuery */ "./hooks/useMediaQuery.tsx");
/* harmony import */ var _NavigationMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationMobile */ "./components/Layout/NavigationMobile.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\Header.tsx";






const Header = () => {
  const smallScreen = (0,hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default)('700px');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
    children: smallScreen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationMobile__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationDesktop__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 42
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./components/Layout/Content.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.tsx");


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\Layout.tsx";





const Layout = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Content__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/NavigationDesktop.tsx":
/*!*************************************************!*\
  !*** ./components/Layout/NavigationDesktop.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationDesktop.module.scss */ "./components/Layout/NavigationDesktop.module.scss");
/* harmony import */ var _NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_logo_black_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/logo-black.png */ "./public/images/logo-black.png");


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\NavigationDesktop.tsx";






const NavigationDesktop = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _public_images_logo_black_png__WEBPACK_IMPORTED_MODULE_4__.default,
        alt: "quanta",
        width: 272,
        height: 90,
        layout: "responsive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navigation),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().links),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "DOMOV"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "TESTY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "QUANTA WHITE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "QUANTA BLACK"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "QUANTA SMART"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "PR SPR\xC1VY"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "O N\xC1S"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
          className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["search-icon"]),
          icon: 'search'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationDesktop);

/***/ }),

/***/ "./components/Layout/NavigationMobile.tsx":
/*!************************************************!*\
  !*** ./components/Layout/NavigationMobile.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationDesktop.module.scss */ "./components/Layout/NavigationDesktop.module.scss");
/* harmony import */ var _NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/logo-white.png */ "./public/images/logo-white.png");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\Layout\\NavigationMobile.tsx";






const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().links),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "DOMOV"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "TESTY"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA WHITE"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA BLACK"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "QUANTA SMART"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "PR SPR\xC1VY"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: "O N\xC1S"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }, undefined);
};

const NavigationMobile = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navigation),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
        className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
        icon: 'grip-horizontal'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__.default,
        alt: "quanta",
        width: 272,
        height: 90,
        layout: "responsive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
        className: (_NavigationDesktop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
        icon: 'search'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationMobile);

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

/***/ "./hooks/useMediaQuery.tsx":
/*!*********************************!*\
  !*** ./hooks/useMediaQuery.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useMediaQuery = _query => {
  const query = `(max-width: ${_query})`;
  const {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);
  return matches;
};

/* harmony default export */ __webpack_exports__["default"] = (useMediaQuery);

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.tsx");

var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Quanta"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        href: "images/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/images/logo-black.png":
/*!**************************************!*\
  !*** ./public/images/logo-black.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/logo-black.bfaa70826c4c8a4ea20383af5a6e7704.png","height":90,"width":272,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AQAtLUUA+/ziANjX2Rw2Ngv9+Pj5BwMDGAABAQIMCgrnAVQ0M3w8Cgn3cPHzASL//xb6AQHxBAICA/v9/QX///8EAUozMzB5FhP7PefqAyQBAfwABAT9BwUF8PX39wr+//8OZOsoVW6w6n8AAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/logo-white.png":
/*!**************************************!*\
  !*** ./public/images/logo-white.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/logo-white.e52e1efdc256cd821f595c9a2979b78c.png","height":90,"width":230,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaElEQVR4nBXMOwqEQBBF0VdUjQwME4hg4B7UfRm5Gdem4AIMFZouv92lBje7HNr2vZYkUQZG7/0vhHCISG6w06LNtDrXun74/KvyICAFsJiZENH3aSZVzaauk6JpQMzXI1iMUZn5HfgGqCwuMGNl/UUAAAAASUVORK5CYII="});

/***/ }),

/***/ "./components/Layout/Content.module.scss":
/*!***********************************************!*\
  !*** ./components/Layout/Content.module.scss ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"content": "Content_content__3QBo3"
};


/***/ }),

/***/ "./components/Layout/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Layout/Footer.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__2_i4g",
	"logo": "Footer_logo__2MCfw",
	"details": "Footer_details__2PIaU",
	"details__contact-links": "Footer_details__contact-links__1ogMC",
	"details__text": "Footer_details__text__2U78W",
	"icon": "Footer_icon__184il",
	"categories": "Footer_categories__31qQ3",
	"categories__title": "Footer_categories__title__1uLiu",
	"categories__links": "Footer_categories__links__2-7bK"
};


/***/ }),

/***/ "./components/Layout/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Layout/Header.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__nr3vK"
};


/***/ }),

/***/ "./components/Layout/NavigationDesktop.module.scss":
/*!*********************************************************!*\
  !*** ./components/Layout/NavigationDesktop.module.scss ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"navigation": "NavigationDesktop_navigation__3lpAH",
	"logo": "NavigationDesktop_logo__1y2ce",
	"links": "NavigationDesktop_links__1Z7Kc",
	"search-icon": "NavigationDesktop_search-icon__3sWSh"
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

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL3F1YW50YS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvTGF5b3V0L0NvbnRlbnQudHN4Iiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4Iiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb25EZXNrdG9wLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0xheW91dC9OYXZpZ2F0aW9uTW9iaWxlLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL1VJL0hpZ2hsaWdodGVkLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9ob29rcy91c2VNZWRpYVF1ZXJ5LnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9xdWFudGEvLi9wdWJsaWMvaW1hZ2VzL2xvZ28tYmxhY2sucG5nIiwid2VicGFjazovL3F1YW50YS8uL3B1YmxpYy9pbWFnZXMvbG9nby13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9MYXlvdXQvQ29udGVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9xdWFudGEvLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmlnYXRpb25EZXNrdG9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3F1YW50YS8uL2NvbXBvbmVudHMvVUkvSGlnaGxpZ2h0ZWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcXVhbnRhLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vcXVhbnRhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9xdWFudGEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3F1YW50YS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJwcm9wcyIsInN0eWxlcyIsImNoaWxkcmVuIiwiRm9vdGVyIiwibG9nb1doaXRlIiwiSGVhZGVyIiwic21hbGxTY3JlZW4iLCJ1c2VNZWRpYVF1ZXJ5IiwiTGF5b3V0IiwiTmF2aWdhdGlvbkRlc2t0b3AiLCJsb2dvQmxhY2siLCJNZW51IiwiTmF2aWdhdGlvbk1vYmlsZSIsIkhpZ2h0bGlnaHRlZCIsImludmVyc2UiLCJfcXVlcnkiLCJxdWVyeSIsIm1hdGNoZXMiLCJzZXRNYXRjaGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJsaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50IiwibGVuZ3RoIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJmaWx0ZXIiLCJzIiwia2luZCIsIlNldCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7O0FBTUEsTUFBTUEsT0FBd0IsR0FBSUMsS0FBRCxJQUFXO0FBQzFDLHNCQUFPO0FBQU0sYUFBUyxFQUFFQyxxRUFBakI7QUFBQSxjQUFrQ0QsS0FBSyxDQUFDRTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLCtEQUFlSCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1JLE1BQWdCLEdBQUcsTUFBTTtBQUM3QixzQkFDRTtBQUFRLGFBQVMsRUFBRUYsbUVBQW5CO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLG9FQUFoQjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLG1CQUFSO0FBQTRCLGlCQUFTLEVBQUVBLGlFQUF2QztBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFRyxrRUFBU0E7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFB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YixDQUFmLEVBQW1EO0FBQ2pELHNCQUNFLDhEQUFDLDhEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsV0FBdEI7QUFBa0MsWUFBSSxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBQ0QsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7O0FDakJBLCtEQUFnQixDQUFDLGdKQUFnSix5T0FBeU8sRTs7Ozs7Ozs7Ozs7O0FDQTFZLCtEQUFnQixDQUFDLGdKQUFnSixpT0FBaU8sRTs7Ozs7Ozs7OztBQ0FsWTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsNEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgbG9nb1doaXRlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby13aGl0ZS5wbmcnXHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBIaWdodGxpZ2h0ZWQgZnJvbSAnLi8uLi9VSS9IaWdobGlnaHRlZCc7XHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcXVhbnRhLnNrXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvV2hpdGV9PjwvSW1hZ2U+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWydkZXRhaWxzX190ZXh0J119PlxyXG4gICAgICAgICAgUXVhbnRhIG1hcHVqZSBuYWpub3bFoWllIHRyZW5keSB2IMSNaWVybmVqIGEgYmllbGVqIHRlY2huaWtlLCBwcmluw6HFoWFcclxuICAgICAgICAgIHphdWrDrW1hdm9zdGkgbyBpbnRlcm5ldGUgdmVjw60sIHNtYXJ0IHJpZcWhZW5pYWNoLCB0ZXN0dWplIG5vdsOpIHByb2R1a3R5XHJcbiAgICAgICAgICBhIHBvcmFkw60gdsOhbSBhaiBwcmkgaWNoIHbDvWJlcmUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlc1snZGV0YWlsc19fY29udGFjdC1saW5rcyddfT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNDIxOTUwNTkxNTMxXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPVwicGhvbmUtYWx0XCIgLz5cclxuICAgICAgICAgICAgICB0ZWwuICs0MjEgOTUwIDU5MSA1MzFcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzogcXVhbnRhQHF1YW50YS5za1wiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gaWNvbj1cImF0XCIgLz5cclxuICAgICAgICAgICAgICBxdWFudGFAcXVhbnRhLnNrXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3F1YW50YW1hZ2F6aW5cIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgaWNvbj17WydmYWInLCAndHdpdHRlciddfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgQHF1YW50YW1hZ2F6aW5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vcXVhbnRhbWFnYXppblwiPlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgQHF1YW50YW1hZ2F6aW5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfT5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXNbJ2NhdGVnb3JpZXNfX3RpdGxlJ119PjxIaWdodGxpZ2h0ZWQgaW52ZXJzZSA+UE9QVUzDgVJORSBLQVRFR8OTUklFPC9IaWdodGxpZ2h0ZWQ+PC9oND5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXNbJ2NhdGVnb3JpZXNfX2xpbmtzJ119PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9xdWFudGEuc2tcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5RdWFudGEgQkxBQ0s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MzM1PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9xdWFudGEuc2tcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5RdWFudGEgU01BUlQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+MTI0PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9xdWFudGEuc2tcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5RdWFudGEgV0hJVEU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+NDM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3F1YW50YS5za1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk1vYmlseTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj4yNzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcXVhbnRhLnNrXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UG/EjcOtdGHEjWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Njg8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb25EZXNrdG9wIGZyb20gJy4vTmF2aWdhdGlvbkRlc2t0b3AnXHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ2hvb2tzL3VzZU1lZGlhUXVlcnknXHJcblxyXG5pbXBvcnQgIE5hdmlnYXRpb25Nb2JpbGUgIGZyb20gJy4vTmF2aWdhdGlvbk1vYmlsZSc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc21hbGxTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KCc3MDBweCcpXHJcblxyXG4gIHJldHVybiA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICB7c21hbGxTY3JlZW4gPyA8TmF2aWdhdGlvbk1vYmlsZS8+IDogPE5hdmlnYXRpb25EZXNrdG9wLz59XHJcbiAgPC9oZWFkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL0hlYWRlcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxDb250ZW50Pntwcm9wcy5jaGlsZHJlbn08L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb25EZXNrdG9wLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgbG9nb0JsYWNrIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby1ibGFjay5wbmcnXHJcbmNvbnN0IE5hdmlnYXRpb25EZXNrdG9wOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtsb2dvQmxhY2t9XHJcbiAgICAgICAgICBhbHQ9XCJxdWFudGFcIlxyXG4gICAgICAgICAgd2lkdGg9ezI3Mn1cclxuICAgICAgICAgIGhlaWdodD17OTB9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgICAgPGE+RE9NT1Y8L2E+XHJcbiAgICAgICAgICA8YT5URVNUWTwvYT5cclxuICAgICAgICAgIDxhPlFVQU5UQSBXSElURTwvYT5cclxuICAgICAgICAgIDxhPlFVQU5UQSBCTEFDSzwvYT5cclxuICAgICAgICAgIDxhPlFVQU5UQSBTTUFSVDwvYT5cclxuICAgICAgICAgIDxhPlBSIFNQUsOBVlk8L2E+XHJcbiAgICAgICAgICA8YT5PIE7DgVM8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXNbJ3NlYXJjaC1pY29uJ119IGljb249eydzZWFyY2gnfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkRlc2t0b3BcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbkRlc2t0b3AubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBsb2dvV2hpdGUgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLXdoaXRlLnBuZydcclxuXHJcbmNvbnN0IE1lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgIDxhPkRPTU9WPC9hPlxyXG4gICAgICAgIDxhPlRFU1RZPC9hPlxyXG4gICAgICAgIDxhPlFVQU5UQSBXSElURTwvYT5cclxuICAgICAgICA8YT5RVUFOVEEgQkxBQ0s8L2E+XHJcbiAgICAgICAgPGE+UVVBTlRBIFNNQVJUPC9hPlxyXG4gICAgICAgIDxhPlBSIFNQUsOBVlk8L2E+XHJcbiAgICAgICAgPGE+TyBOw4FTPC9hPlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uTW9iaWxlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9ufT5cclxuICAgICAgPGJ1dHRvbj5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgaWNvbj17J2dyaXAtaG9yaXpvbnRhbCd9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17bG9nb1doaXRlfVxyXG4gICAgICAgICAgYWx0PVwicXVhbnRhXCJcclxuICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICBoZWlnaHQ9ezkwfVxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9oMT5cclxuXHJcbiAgICAgIDxidXR0b24+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXsnc2VhcmNoJ30gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25Nb2JpbGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hpZ2hsaWdodGVkLm1vZHVsZS5zY3NzJ1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGludmVyc2U/OiB0cnVlXHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcblxyXG5jb25zdCBIaWdodGxpZ2h0ZWQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFyayBjbGFzc05hbWU9e3Byb3BzLmludmVyc2UgPyBzdHlsZXMuaW52ZXJzZSA6IHN0eWxlcy5ub3JtYWx9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L21hcms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdodGxpZ2h0ZWRcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgdXNlTWVkaWFRdWVyeSA9IChfcXVlcnk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBgKG1heC13aWR0aDogJHtfcXVlcnl9KWBcclxuICBjb25zdCBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpXHJcblxyXG4gICAgc2V0TWF0Y2hlcyhtZWRpYS5tYXRjaGVzKVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4gc2V0TWF0Y2hlcyhtZWRpYS5tYXRjaGVzKVxyXG5cclxuICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGxpc3RlbmVyKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBsaXN0ZW5lcilcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIG1hdGNoZXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTWVkaWFRdWVyeVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UXVhbnRhPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCJpbWFnZXMvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvbG9nby1ibGFjay5iZmFhNzA4MjZjNGM4YTRlYTIwMzgzYWY1YTZlNzcwNC5wbmdcIixcImhlaWdodFwiOjkwLFwid2lkdGhcIjoyNzIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQWJrbEVRVlI0bkFGakFKei9BUUF0TFVVQSsvemlBTmpYMlJ3Mk5ndjkrUGo1QndNREdBQUJBUUlNQ2dybkFWUTBNM3c4Q2duM2NQSHpBU0wvL3hiNkFRSHhCQUlDQS92OS9RWC8vLzhFQVVvek16QjVGaFA3UGVmcUF5UUJBZndBQkFUOUJ3VUY4UFgzOXdyKy8vOE9aT3NvVlc2dzZuOEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9sb2dvLXdoaXRlLmU1MmUxZWZkYzI1NmNkODIxZjU5NWM5YTI5NzliNzhjLnBuZ1wiLFwiaGVpZ2h0XCI6OTAsXCJ3aWR0aFwiOjIzMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQURDQVlBQUFDdXlFNUlBQUFBYUVsRVFWUjRuQlhNT3dxRVFCQkYwVmRValF3TUU0aGc0QjdVZlJtNUdkZW00QUlNRlpvdXY5MmxCamU3SE5yMnZaWWtVUVpHNy8wdmhIQ0lTRzZ3MDZMTnREclh1bjc0L0t2eUlDQUZzSmlaRU5IM2FTWlZ6YWF1azZKcFFNelhJMWlNVVpuNUhmZ0dxQ3d1TUdObC9VVUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRcIjogXCJDb250ZW50X2NvbnRlbnRfXzNRQm8zXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18yX2k0Z1wiLFxuXHRcImxvZ29cIjogXCJGb290ZXJfbG9nb19fMk1DZndcIixcblx0XCJkZXRhaWxzXCI6IFwiRm9vdGVyX2RldGFpbHNfXzJQSWFVXCIsXG5cdFwiZGV0YWlsc19fY29udGFjdC1saW5rc1wiOiBcIkZvb3Rlcl9kZXRhaWxzX19jb250YWN0LWxpbmtzX18xb2dNQ1wiLFxuXHRcImRldGFpbHNfX3RleHRcIjogXCJGb290ZXJfZGV0YWlsc19fdGV4dF9fMlU3OFdcIixcblx0XCJpY29uXCI6IFwiRm9vdGVyX2ljb25fXzE4NGlsXCIsXG5cdFwiY2F0ZWdvcmllc1wiOiBcIkZvb3Rlcl9jYXRlZ29yaWVzX18zMXFRM1wiLFxuXHRcImNhdGVnb3JpZXNfX3RpdGxlXCI6IFwiRm9vdGVyX2NhdGVnb3JpZXNfX3RpdGxlX18xdUxpdVwiLFxuXHRcImNhdGVnb3JpZXNfX2xpbmtzXCI6IFwiRm9vdGVyX2NhdGVnb3JpZXNfX2xpbmtzX18yLTdiS1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fbnIzdktcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRpb25cIjogXCJOYXZpZ2F0aW9uRGVza3RvcF9uYXZpZ2F0aW9uX18zbHBBSFwiLFxuXHRcImxvZ29cIjogXCJOYXZpZ2F0aW9uRGVza3RvcF9sb2dvX18xeTJjZVwiLFxuXHRcImxpbmtzXCI6IFwiTmF2aWdhdGlvbkRlc2t0b3BfbGlua3NfXzFaN0tjXCIsXG5cdFwic2VhcmNoLWljb25cIjogXCJOYXZpZ2F0aW9uRGVza3RvcF9zZWFyY2gtaWNvbl9fM3NXU2hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImludmVyc2VcIjogXCJIaWdobGlnaHRlZF9pbnZlcnNlX18zMlZRd1wiLFxuXHRcIm5vcm1hbFwiOiBcIkhpZ2hsaWdodGVkX25vcm1hbF9fZUVDRDJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
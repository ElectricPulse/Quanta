self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

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

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/colorify.js":
/*!***********************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/colorify.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorify": function() { return /* binding */ colorify; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@cld-apis/utils/dist/esm/constants/index.js");

var colorify = function (value, prefix) {
    if (prefix === void 0) { prefix = 'rgb:'; }
    if (!value)
        return '';
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.NamedColors).includes(value))
        return value;
    var color = value.startsWith('#') ? value.slice(1) : value;
    if (color.length < 3 || color.length > 8) {
        throw new Error('HEX Color should be 3-4 digits for RGB/RGBA, or 6-8 digits for RGB/RGBA triplet/quadruplet');
    }
    return "" + prefix + color;
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/audioCodec.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/audioCodec.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioCodecTypes": function() { return /* binding */ AudioCodecTypes; }
/* harmony export */ });
var AudioCodecTypes = {
    None: 'none',
    AAC: 'aac',
    VORBIS: 'vorbis',
    MP3: 'mp3',
    OPUS: 'opus'
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/colorSpace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/colorSpace.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorSpace": function() { return /* binding */ ColorSpace; },
/* harmony export */   "VColorSpace": function() { return /* binding */ VColorSpace; }
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ColorSpace = {
    sRGB: 'srgb',
    noCMYK: 'no_cmyk',
    keepCMYK: 'keep_cmyk'
};
var VColorSpace = __assign(__assign({}, ColorSpace), { tinySRGB: 'tinysrgb', copy: 'copy' });


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/colors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/colors.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NamedColors": function() { return /* binding */ NamedColors; }
/* harmony export */ });
var NamedColors = {
    Red: 'red',
    Orange: 'orange',
    Yellow: 'yellow',
    Green: 'green',
    Cyan: 'cyan',
    Blue: 'blue',
    Purple: 'purple',
    Pink: 'pink',
    White: 'white',
    Gray: 'gray',
    Brown: 'brown'
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/condition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/condition.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionOperators": function() { return /* binding */ ConditionOperators; }
/* harmony export */ });
var ConditionOperators = {
    equal: "eq",
    notEqual: "ne",
    lessThan: "lt",
    greaterThan: "gt",
    lessOrEqual: "lte",
    greaterOrEqual: "gte",
    include: "in",
    notInclude: "nin",
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/delivery.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/delivery.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_TYPES": function() { return /* binding */ STORAGE_TYPES; },
/* harmony export */   "RESOURCE_TYPES": function() { return /* binding */ RESOURCE_TYPES; },
/* harmony export */   "VIDEO_SOURCE_TYPES": function() { return /* binding */ VIDEO_SOURCE_TYPES; },
/* harmony export */   "ImageFormats": function() { return /* binding */ ImageFormats; }
/* harmony export */ });
var STORAGE_TYPES = {
    UPLOAD: 'upload',
    FETCH: 'fetch',
    PRIVATE: 'private',
    AUTHENTICATED: 'authenticated',
    SPRITE: 'sprite',
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    YOUTUBE: 'youtube',
    VIMEO: 'vimeo',
    MULTI: 'multi',
    INSTAGRAM: 'instagram',
    HULU: 'hulu',
    ANIMOTO: 'animoto',
    DAILYMOTION: 'dailymotion'
};
var RESOURCE_TYPES = {
    IMAGE: 'image',
    VIDEO: 'video',
    RAW: 'raw'
};
var VIDEO_SOURCE_TYPES = {
    WEBM: 'webm',
    MP4: 'mp4',
    OGV: 'ogv',
    FLV: 'flv',
    M3U8: 'm3u8',
    TS: 'ts',
    MOV: 'mov',
    MKV: 'mkv',
    MPD: 'mpd'
};
var ImageFormats = {
    GIF: "gif",
    PNG: "png",
    JPG: "jpg",
    BMP: "bmp",
    ICO: "ico",
    PDF: "pdf",
    TIFF: "tiff",
    EPS: "eps",
    JPC: "jpc",
    JP2: "jp2",
    PSD: "psd",
    WEBP: "webp",
    ZIP: "zip",
    SVG: "svg",
    WDP: "wdp",
    HDX: "hpx",
    DJVU: "djvu",
    AI: "ai",
    FLIF: "flif",
    BPG: "bpg",
    MIFF: "miff",
    TGA: "tga",
    HEIC: "heic",
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/effects.js":
/*!********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/effects.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brightness": function() { return /* binding */ Brightness; },
/* harmony export */   "Contrast": function() { return /* binding */ Contrast; },
/* harmony export */   "ColorChannel": function() { return /* binding */ ColorChannel; },
/* harmony export */   "ColorFilter": function() { return /* binding */ ColorFilter; },
/* harmony export */   "ColorAdjustment": function() { return /* binding */ ColorAdjustment; },
/* harmony export */   "Colorblind": function() { return /* binding */ Colorblind; },
/* harmony export */   "PixelateEffects": function() { return /* binding */ PixelateEffects; },
/* harmony export */   "BlurEffects": function() { return /* binding */ BlurEffects; },
/* harmony export */   "VideoEffects": function() { return /* binding */ VideoEffects; },
/* harmony export */   "ArtisticFilters": function() { return /* binding */ ArtisticFilters; }
/* harmony export */ });
var Brightness = {
    Auto: 'auto_brightness',
    Default: 'brightness',
    Hsb: 'hsb'
};
var Contrast = {
    Default: 'contrast',
    Auto: 'auto_contrast'
};
var ColorChannel = {
    Red: 'red',
    Green: 'green',
    Blue: 'blue',
};
var ColorFilter = {
    Negate: 'negate',
    Sepia: 'sepia',
    Grayscale: 'grayscale',
    Blackwhite: 'blackwhite',
    Tint: 'tint',
};
var ColorAdjustment = {
    Hue: 'hue',
    Saturation: 'saturation',
    Colorize: 'colorize',
    ReplaceColor: 'replace_color',
    Recolor: 'recolor',
    Theme: 'theme',
    Vibrance: "vibrance",
    AutoColor: 'auto_color',
    Vectorize: 'vectorize',
    Improve: 'improve',
    FillLight: 'fill_light',
    Outline: 'outline',
    CutOut: 'cut_out',
    Cartoonify: 'cartoonify',
    Fade: 'fade',
    StyleTransfer: 'style_transfer',
    Lightroom: 'lightroom',
    Art: 'art',
    ViesusCorrect: 'viesus_correct',
    Gamma: 'gamma',
    Screen: 'screen',
    Multiply: 'multiply',
    Overlay: 'overlay',
    AntiRemoval: 'anti_removal',
    Bgremoval: 'bgremoval',
    MakeTransparent: 'make_transparent',
    OpacityThreshold: 'opacity_threshold',
    Trim: 'trim',
    Shadow: 'shadow',
    Distort: 'distort',
    Shear: 'shear',
    Displace: 'displace',
    OilPaint: 'oil_paint',
    Redeye: 'redeye',
    AdvRedeye: 'adv_redeye',
    Vignette: 'vignette',
    Gradient_fade: 'gradient_fade',
    Sharpen: 'sharpen',
    UnsharpMask: 'unsharp_mask',
    OrderedDither: 'ordered_dither',
    Loop: 'loop',
};
var Colorblind = {
    Assist: 'assist_colorblind',
    Simulate: 'simulate_colorblind'
};
var PixelateEffects = {
    Default: 'pixelate',
    Region: 'pixelate_region',
    Faces: 'pixelate_faces'
};
var BlurEffects = {
    Default: 'blur',
    Region: 'blur_region',
    Faces: 'blur_faces'
};
var VideoEffects = {
    Accelerate: 'accelerate',
    Reverse: 'reverse',
    Boomerang: 'boomerang',
    Loop: 'loop',
    ProgressBar: 'progressbar',
    Transparent: 'transparent',
    Preview: 'preview',
    Transition: 'transition',
    Noise: 'noise',
    Deshake: 'deshake',
    Volume: 'volume'
};
var ArtisticFilters = {
    AlDente: 'al_dente',
    Athena: 'athena',
    Audrey: 'audrey',
    Aurora: 'aurora',
    Daguerre: 'daguerre',
    Eucalyptus: 'eucalyptus',
    Fes: 'fes',
    Frost: 'frost',
    Hairspray: 'hairspray',
    Hokusai: 'hokusai',
    Incognito: 'incognito',
    Linen: 'linen',
    Peacock: 'peacock',
    Primavera: 'primavera',
    quartz: 'quartz',
    RedRock: 'red_rock',
    Refresh: 'refresh',
    Sizzle: 'sizzle',
    Sonnet: 'sonnet',
    Ukulele: 'ukulele',
    Zorro: 'zorro'
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/flag.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/flag.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Flags": function() { return /* binding */ Flags; },
/* harmony export */   "VFlags": function() { return /* binding */ VFlags; }
/* harmony export */ });
var Flags = {
    AnyFormat: "any_format",
    Attachment: "attachment",
    AsPng: "apng",
    AsWebp: "awebp",
    Clip: "clip",
    ClipEvenodd: "clip_evenodd",
    Cutter: "cutter",
    ForceStrip: "force_strip",
    ForceIcc: "force_icc",
    GetInfo: "getinfo",
    IgnoreAspectRatio: "ignore_aspect_ratio",
    IgnoreMaskChannels: "ignore_mask_channels",
    ImmutableCache: "immutable_cache",
    KeepAttribution: "keep_attribution",
    KeepIptc: "keep_iptc",
    LayerApply: "layer_apply",
    Lossy: "lossy",
    NoOverflow: "no_overflow",
    PreserveTransparency: "preserve_transparency",
    PNG8: "png8",
    PNG24: "png24",
    PNG32: "png32",
    Progressive: "progressive",
    Rasterize: "rasterize",
    RegionRelative: "region_relative",
    Relative: 'relative',
    ReplaceImage: 'replace_image',
    Sanitize: 'sanitize',
    StripProfile: 'strip_profile',
    TextNoTrim: 'text_no_trim',
    TextDisallowOverflow: 'text_disallow_overflow',
    Tiff8LZW: 'tiff8_lzw',
    Tiled: 'tiled'
};
var VFlags = {
    Animated: "animated",
    AsWebp: "awebp",
    Attachement: "attachment",
    StreamingAttachment: "streaming_attachment",
    GetInfo: "getinfo",
    HLSV3: "hlsv3",
    KeepDar: "keep_dar",
    LayerApply: "layer_apply",
    NoStream: "no_stream",
    Mono: "mono",
    Relative: "relative",
    Splice: "splice",
    Truncate: "truncate_ts",
    Waveform: "waveform",
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/gravity.js":
/*!********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/gravity.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Compass": function() { return /* binding */ Compass; },
/* harmony export */   "Gravity": function() { return /* binding */ Gravity; }
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Compass = {
    North: "north",
    NorthEast: "north_east",
    NorthWest: "north_west",
    West: "west",
    SouthWest: "south_west",
    South: "south",
    SouthEast: "south_east",
    East: "east",
    Center: "center",
};
var Gravity = __assign({ Auto: 'auto', Subject: "auto:subject", Face: "face", Sink: "sink", FaceCenter: "face:center", MultipleFaces: "faces", MultipleFacesCenter: "faces:center" }, Compass);


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESIZE_TYPES": function() { return /* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_0__.RESIZE_TYPES; },
/* harmony export */   "ROTATION_MODES": function() { return /* reexport safe */ _rotation__WEBPACK_IMPORTED_MODULE_1__.ROTATION_MODES; },
/* harmony export */   "AudioCodecTypes": function() { return /* reexport safe */ _audioCodec__WEBPACK_IMPORTED_MODULE_2__.AudioCodecTypes; },
/* harmony export */   "ColorSpace": function() { return /* reexport safe */ _colorSpace__WEBPACK_IMPORTED_MODULE_3__.ColorSpace; },
/* harmony export */   "VColorSpace": function() { return /* reexport safe */ _colorSpace__WEBPACK_IMPORTED_MODULE_3__.VColorSpace; },
/* harmony export */   "ConditionOperators": function() { return /* reexport safe */ _condition__WEBPACK_IMPORTED_MODULE_4__.ConditionOperators; },
/* harmony export */   "STORAGE_TYPES": function() { return /* reexport safe */ _delivery__WEBPACK_IMPORTED_MODULE_5__.STORAGE_TYPES; },
/* harmony export */   "RESOURCE_TYPES": function() { return /* reexport safe */ _delivery__WEBPACK_IMPORTED_MODULE_5__.RESOURCE_TYPES; },
/* harmony export */   "VIDEO_SOURCE_TYPES": function() { return /* reexport safe */ _delivery__WEBPACK_IMPORTED_MODULE_5__.VIDEO_SOURCE_TYPES; },
/* harmony export */   "ArtisticFilters": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.ArtisticFilters; },
/* harmony export */   "Brightness": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.Brightness; },
/* harmony export */   "BlurEffects": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.BlurEffects; },
/* harmony export */   "ColorAdjustment": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.ColorAdjustment; },
/* harmony export */   "ColorChannel": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.ColorChannel; },
/* harmony export */   "ColorFilter": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.ColorFilter; },
/* harmony export */   "Colorblind": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.Colorblind; },
/* harmony export */   "Contrast": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.Contrast; },
/* harmony export */   "PixelateEffects": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.PixelateEffects; },
/* harmony export */   "VideoEffects": function() { return /* reexport safe */ _effects__WEBPACK_IMPORTED_MODULE_6__.VideoEffects; },
/* harmony export */   "Flags": function() { return /* reexport safe */ _flag__WEBPACK_IMPORTED_MODULE_7__.Flags; },
/* harmony export */   "VFlags": function() { return /* reexport safe */ _flag__WEBPACK_IMPORTED_MODULE_7__.VFlags; },
/* harmony export */   "Gravity": function() { return /* reexport safe */ _gravity__WEBPACK_IMPORTED_MODULE_8__.Gravity; },
/* harmony export */   "Compass": function() { return /* reexport safe */ _gravity__WEBPACK_IMPORTED_MODULE_8__.Compass; },
/* harmony export */   "ValueAssignable": function() { return /* reexport safe */ _variable__WEBPACK_IMPORTED_MODULE_9__.ValueAssignable; },
/* harmony export */   "VariableFormats": function() { return /* reexport safe */ _variable__WEBPACK_IMPORTED_MODULE_9__.VariableFormats; },
/* harmony export */   "NamedColors": function() { return /* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_10__.NamedColors; }
/* harmony export */ });
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "./node_modules/@cld-apis/utils/dist/esm/constants/resize.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotation */ "./node_modules/@cld-apis/utils/dist/esm/constants/rotation.js");
/* harmony import */ var _audioCodec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audioCodec */ "./node_modules/@cld-apis/utils/dist/esm/constants/audioCodec.js");
/* harmony import */ var _colorSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorSpace */ "./node_modules/@cld-apis/utils/dist/esm/constants/colorSpace.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condition */ "./node_modules/@cld-apis/utils/dist/esm/constants/condition.js");
/* harmony import */ var _delivery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery */ "./node_modules/@cld-apis/utils/dist/esm/constants/delivery.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects */ "./node_modules/@cld-apis/utils/dist/esm/constants/effects.js");
/* harmony import */ var _flag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flag */ "./node_modules/@cld-apis/utils/dist/esm/constants/flag.js");
/* harmony import */ var _gravity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gravity */ "./node_modules/@cld-apis/utils/dist/esm/constants/gravity.js");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./variable */ "./node_modules/@cld-apis/utils/dist/esm/constants/variable.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colors */ "./node_modules/@cld-apis/utils/dist/esm/constants/colors.js");













/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/resize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/resize.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESIZE_TYPES": function() { return /* binding */ RESIZE_TYPES; }
/* harmony export */ });
var RESIZE_TYPES = {
    IMAGGA_SCALE: 'imaggaScale',
    IMAGGA_CROP: 'imaggaCrop',
    CROP: 'crop',
    FILL: 'fill',
    SCALE: 'scale',
    MIN_PAD: 'minimumPad',
    FIT: 'fit',
    PAD: 'pad',
    LIMIT_FIT: 'limitFit',
    THUMBNAIL: 'thumb',
    LIMIT_FILL: 'limitFill',
    MIN_FIT: 'minimumFit',
    LIMIT_PAD: 'limitPad',
    FILL_PAD: 'fillPad'
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/rotation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/rotation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROTATION_MODES": function() { return /* binding */ ROTATION_MODES; }
/* harmony export */ });
var ROTATION_MODES = {
    AUTO_RIGHT: 'auto_right',
    AUTO_LEFT: 'auto_left',
    VERTICAL_FLIP: 'vflip',
    HORIZONTAL_FLIP: 'hflip',
    IGNORE_EXIF_DATA: 'ignore'
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/constants/variable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/constants/variable.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueAssignable": function() { return /* binding */ ValueAssignable; },
/* harmony export */   "VariableFormats": function() { return /* binding */ VariableFormats; }
/* harmony export */ });
var ValueAssignable = {
    context: "ctx",
    structureMetadata: "md"
};
var VariableFormats = {
    integer: 'integer',
    float: 'float'
};


/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioCodecTypes": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.AudioCodecTypes; },
/* harmony export */   "ArtisticFilters": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ArtisticFilters; },
/* harmony export */   "ColorAdjustment": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ColorAdjustment; },
/* harmony export */   "ColorChannel": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ColorChannel; },
/* harmony export */   "ColorFilter": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ColorFilter; },
/* harmony export */   "ColorSpace": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ColorSpace; },
/* harmony export */   "VColorSpace": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VColorSpace; },
/* harmony export */   "Colorblind": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Colorblind; },
/* harmony export */   "Compass": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Compass; },
/* harmony export */   "ConditionOperators": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ConditionOperators; },
/* harmony export */   "Contrast": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Contrast; },
/* harmony export */   "BlurEffects": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.BlurEffects; },
/* harmony export */   "Brightness": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Brightness; },
/* harmony export */   "Flags": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Flags; },
/* harmony export */   "Gravity": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.Gravity; },
/* harmony export */   "NamedColors": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NamedColors; },
/* harmony export */   "ROTATION_MODES": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ROTATION_MODES; },
/* harmony export */   "RESIZE_TYPES": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.RESIZE_TYPES; },
/* harmony export */   "RESOURCE_TYPES": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPES; },
/* harmony export */   "PixelateEffects": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PixelateEffects; },
/* harmony export */   "VFlags": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VFlags; },
/* harmony export */   "VIDEO_SOURCE_TYPES": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VIDEO_SOURCE_TYPES; },
/* harmony export */   "ValueAssignable": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ValueAssignable; },
/* harmony export */   "VariableFormats": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VariableFormats; },
/* harmony export */   "VideoEffects": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VideoEffects; },
/* harmony export */   "STORAGE_TYPES": function() { return /* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.STORAGE_TYPES; },
/* harmony export */   "toSnakeCase": function() { return /* reexport safe */ _toSnakeCase__WEBPACK_IMPORTED_MODULE_1__.toSnakeCase; },
/* harmony export */   "colorify": function() { return /* reexport safe */ _colorify__WEBPACK_IMPORTED_MODULE_2__.colorify; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@cld-apis/utils/dist/esm/constants/index.js");
/* harmony import */ var _toSnakeCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toSnakeCase */ "./node_modules/@cld-apis/utils/dist/esm/toSnakeCase.js");
/* harmony import */ var _colorify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorify */ "./node_modules/@cld-apis/utils/dist/esm/colorify.js");





/***/ }),

/***/ "./node_modules/@cld-apis/utils/dist/esm/toSnakeCase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@cld-apis/utils/dist/esm/toSnakeCase.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSnakeCase": function() { return /* binding */ toSnakeCase; }
/* harmony export */ });
var toSnakeCase = function (options) {
    if (!options)
        return {};
    var formatted = {};
    var snakeCase = __webpack_require__(/*! lodash.snakecase */ "./node_modules/lodash.snakecase/index.js");
    for (var key in options) {
        var value = options[key];
        var newKey = snakeCase(key);
        formatted[newKey] = value;
    }
    return formatted;
};


/***/ }),

/***/ "./components/ArticlePreview/ArticlePreview.tsx":
/*!******************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreview.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticlePreview.module.scss */ "./components/ArticlePreview/ArticlePreview.module.scss");
/* harmony import */ var _ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cloudinary_build_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cloudinary-build-url */ "./node_modules/cloudinary-build-url/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticlePreview\\ArticlePreview.tsx",
    _this = undefined;






var ArticlePreview = function ArticlePreview(props) {
  var _props$article = props.article,
      title = _props$article.title,
      imageName = _props$article.imageName,
      url = _props$article.url;
  var imageUrl = (0,cloudinary_build_url__WEBPACK_IMPORTED_MODULE_3__.buildUrl)(imageName, {
    cloud: {
      cloudName: 'dpki8ezpl'
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default().article),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: (_ArticlePreview_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
      layout: "fill",
      src: imageUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c = ArticlePreview;
/* harmony default export */ __webpack_exports__["default"] = (ArticlePreview);

var _c;

$RefreshReg$(_c, "ArticlePreview");

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

/***/ "./components/ArticleShowcases/ArticleGrid.tsx":
/*!*****************************************************!*\
  !*** ./components/ArticleShowcases/ArticleGrid.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ArticleGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleGrid.module.scss */ "./components/ArticleShowcases/ArticleGrid.module.scss");
/* harmony import */ var _ArticleGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ArticleGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\ArticleGrid.tsx",
    _this = undefined;




var ArticleGrid = function ArticleGrid(props) {
  var style = {
    gridTemplateColumns: props.cols,
    gridTemplateRows: props.rows
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ArticleGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["article-grid"]),
    style: style,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c = ArticleGrid;
/* harmony default export */ __webpack_exports__["default"] = (ArticleGrid);

var _c;

$RefreshReg$(_c, "ArticleGrid");

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

/***/ "./components/ArticleShowcases/MainArticles/MainArticles.tsx":
/*!*******************************************************************!*\
  !*** ./components/ArticleShowcases/MainArticles/MainArticles.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainArticles.module.scss */ "./components/ArticleShowcases/MainArticles/MainArticles.module.scss");
/* harmony import */ var _MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ArticlePreview/ArticlePreview */ "./components/ArticlePreview/ArticlePreview.tsx");
/* harmony import */ var _ArticleGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ArticleGrid */ "./components/ArticleShowcases/ArticleGrid.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\components\\ArticleShowcases\\MainArticles\\MainArticles.tsx",
    _this = undefined;





var articles = [{
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}, {
  imageName: 'maxresdefault-15_fk7kka',
  url: 'https://www.google.sk/',
  title: 'Title'
}];

var MainArticles = function MainArticles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_MainArticles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["main-articles"]),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleGrid__WEBPACK_IMPORTED_MODULE_3__.default, {
      cols: 2,
      rows: 1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
        article: articles[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_c = MainArticles;
{
  /* <ArticleGrid cols={2} rows={2}>
  <Article article={articles[1]} />
  <Article article={articles[2]} />
  <Article article={articles[3]} />
  <Article article={articles[4]} />
  </ArticleGrid> */
}
/* harmony default export */ __webpack_exports__["default"] = (MainArticles);

var _c;

$RefreshReg$(_c, "MainArticles");

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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["res.cloudinary.com"]} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
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

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
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
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    var handleLoad = function handleLoad() {
      if (!img.src.startsWith('data:')) {
        var p = 'decode' in img ? img.decode() : Promise.resolve();
        p["catch"](function () {}).then(function () {
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
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'empty' : _ref$placeholder,
      blurDataURL = _ref.blurDataURL,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  var staticSrc = '';

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"width\" or \"height\" property. These should be numeric values."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn("Image with src \"".concat(src, "\" is smaller than 40x40. Consider removing the \"placeholder='blur'\" property to improve performance."));
      }

      if (!blurDataURL) {
        var VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error("Image with src \"".concat(src, "\" has \"placeholder='blur'\" property but is missing the \"blurDataURL\" property.\n          Possible solutions:\n            - Add a \"blurDataURL\" property, the contents should be a small Data URL to represent the image\n            - Change the \"src\" property to a static import with one of the supported file types: ").concat(VALID_BLUR_EXT.join(','), "\n            - Remove the \"placeholder\" property, effectively no blur effect\n          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url"));
      }
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = (0, _extends2["default"])({
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
    objectFit: objectFit,
    objectPosition: objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

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
        paddingTop: paddingTop
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
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
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
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
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
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, !isVisible && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: function ref(element) {
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
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
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


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

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

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

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

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

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

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

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

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

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

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

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

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_ArticleShowcases_MainArticles_MainArticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArticleShowcases/MainArticles/MainArticles */ "./components/ArticleShowcases/MainArticles/MainArticles.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Hackerman\\Desktop\\Projects\\quanta\\pages\\index.tsx",
    _this = undefined;





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.fas, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch);

var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArticleShowcases_MainArticles_MainArticles__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)
  }, void 0, false);
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


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/constants/arithmetic.js":
/*!****************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/constants/arithmetic.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArithmeticExpression": function() { return /* binding */ ArithmeticExpression; },
/* harmony export */   "PredefinedVariables": function() { return /* binding */ PredefinedVariables; },
/* harmony export */   "Prefix": function() { return /* binding */ Prefix; },
/* harmony export */   "PreDefinedPatterns": function() { return /* binding */ PreDefinedPatterns; },
/* harmony export */   "AcceptNumbericVars": function() { return /* binding */ AcceptNumbericVars; }
/* harmony export */ });
var ArithmeticExpression = {
    "=": 'eq',
    "!=": 'ne',
    "<": 'lt',
    ">": 'gt',
    "<=": 'lte',
    ">=": 'gte',
    "&&": 'and',
    "||": 'or',
    "*": "mul",
    "/": "div",
    "+": "add",
    "-": "sub",
    "^": "pow",
};
var PredefinedVariables = {
    width: 'w',
    height: 'h',
    x: 'x',
    y: 'y',
    quality: 'q',
    if: 'if',
    aspectRatio: 'ar',
    rotate: 'a',
    opacity: 'o',
    radius: 'r',
    dpr: 'dpr',
    effect: 'e',
    border: 'bo',
    currentPage: 'cp',
    preview: 'preview:duration',
    duration: 'du',
    faceCount: 'fc',
    initialAspectRatio: 'iar',
    initialDuration: 'idu',
    initialHeight: 'ih',
    initialWidth: 'iw',
    pageCount: 'pc',
    pageX: 'px',
    pageY: 'py',
    tags: 'tags',
};
var Prefix = '$';
var PreDefinedPatterns = "(" + Object.keys(PredefinedVariables).join('|') + ")";
var AcceptNumbericVars = ['quality', 'if', 'rotate', 'zoom', 'opacity', 'radius', 'effect', 'dpr'];


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/constants/condition.js":
/*!***************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/constants/condition.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionalParams": function() { return /* binding */ ConditionalParams; }
/* harmony export */ });
var ConditionalParams = {
    width: 'w',
    initialWidth: 'iw',
    height: 'h',
    initialHeight: 'ih',
    aspectRatio: 'ar',
    intialAspectRatio: 'iar',
    context: 'ctx',
    metadata: 'md',
    tags: 'tags',
    trimmedAspectRatio: 'tar',
    currentPage: 'cp',
    faceCount: 'fc',
    pageCount: 'pc',
    pageXOffset: 'px',
    pageYOffset: 'py',
    initialDensity: 'idn',
    illustration: 'ils',
    pageNames: 'pgnames'
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/constants/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/constants/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEO_TYPES": function() { return /* binding */ SEO_TYPES; },
/* harmony export */   "TRANSFORMERS": function() { return /* binding */ TRANSFORMERS; }
/* harmony export */ });
var SEO_TYPES = {
    "image/upload": "images",
    "image/private": "private_images",
    "image/authenticated": "authenticated_images",
    "raw/upload": "files",
    "video/upload": "videos"
};
var TRANSFORMERS = {
    angle: 'a',
    rotate: 'a',
    background: 'b',
    color: 'co',
    colorSpace: 'cs',
    customFunction: 'fn',
    defaultImage: 'd',
    density: 'dn',
    dpr: 'dpr',
    opacity: 'o',
    format: 'f',
    gravity: 'g',
    overlay: 'l',
    page: 'pg',
    prefix: 'p',
    quality: 'q',
    radius: 'r',
    bitRate: 'br',
    keyframeInterval: 'ki',
    audioCodec: 'ac',
    audioFrequency: 'af',
    delay: 'dl',
    ocr: 'ocr',
    streamingProfile: 'sp',
    transformation: 't',
    underlay: 'u',
    videoCodec: 'vc',
    videoSampling: 'vs',
    zoom: 'z'
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/constants/variable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/constants/variable.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prefix": function() { return /* binding */ Prefix; },
/* harmony export */   "StringBound": function() { return /* binding */ StringBound; },
/* harmony export */   "ValueAssignable": function() { return /* binding */ ValueAssignable; },
/* harmony export */   "Formats": function() { return /* binding */ Formats; }
/* harmony export */ });
var Prefix = '$';
var StringBound = '!';
var ValueAssignable = {
    context: "ctx",
    structureMetadata: "md"
};
var Formats = {
    integer: 'to_i',
    float: 'to_f'
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConfig": function() { return /* binding */ getConfig; },
/* harmony export */   "setConfig": function() { return /* binding */ setConfig; },
/* harmony export */   "buildUrl": function() { return /* binding */ buildUrl; },
/* harmony export */   "buildImageUrl": function() { return /* binding */ buildImageUrl; },
/* harmony export */   "buildVideoUrl": function() { return /* binding */ buildVideoUrl; },
/* harmony export */   "extractPublicId": function() { return /* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_0__.extractPublicId; },
/* harmony export */   "Transformer": function() { return /* binding */ Transformer; }
/* harmony export */ });
/* harmony import */ var _cld_apis_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cld-apis/utils */ "./node_modules/@cld-apis/utils/dist/esm/index.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "./node_modules/cloudinary-build-url/dist/esm/url.js");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformers */ "./node_modules/cloudinary-build-url/dist/esm/transformers/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var config = {};
var getConfig = function () { return Object.freeze(config); };
var setConfig = function (options) { return config = __assign(__assign({}, config), options); };
var buildUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    var cloudConfig = __assign(__assign({}, config), cloud);
    return (0,_url__WEBPACK_IMPORTED_MODULE_0__.url)(publicId, cloudConfig, transformations);
};
var buildImageUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return buildUrl(publicId, {
        cloud: __assign(__assign({}, cloud), { resourceType: _cld_apis_utils__WEBPACK_IMPORTED_MODULE_1__.RESOURCE_TYPES.IMAGE }),
        transformations: transformations
    });
};
var buildVideoUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return buildUrl(publicId, {
        cloud: __assign(__assign({}, cloud), { resourceType: _cld_apis_utils__WEBPACK_IMPORTED_MODULE_1__.RESOURCE_TYPES.VIDEO }),
        transformations: transformations
    });
};
var Transformer = { transform: _transformers__WEBPACK_IMPORTED_MODULE_2__.transform, toString: _transformers__WEBPACK_IMPORTED_MODULE_2__.toTransformationStr };

/* harmony default export */ __webpack_exports__["default"] = (buildUrl);


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/border.js":
/*!***************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/border.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "border": function() { return /* binding */ border; }
/* harmony export */ });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js");

var border = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'solid' : _b, _c = _a.color, color = _c === void 0 ? 'black' : _c, width = _a.width;
    if (!width)
        return '';
    var formattedValue = isNaN(width) ? (0,_expression__WEBPACK_IMPORTED_MODULE_0__.convert)(width) : width + "px";
    return "bo_" + formattedValue + "_" + type + "_" + color;
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/condition.js":
/*!******************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/condition.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeCondition": function() { return /* binding */ computeCondition; },
/* harmony export */   "mapCharacteristic": function() { return /* binding */ mapCharacteristic; },
/* harmony export */   "computeConditionExpression": function() { return /* binding */ computeConditionExpression; },
/* harmony export */   "condition": function() { return /* binding */ condition; }
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./node_modules/cloudinary-build-url/dist/esm/transformers/index.js");
/* harmony import */ var _cld_apis_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cld-apis/utils */ "./node_modules/@cld-apis/utils/dist/esm/index.js");
/* harmony import */ var _constants_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/condition */ "./node_modules/cloudinary-build-url/dist/esm/constants/condition.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/cloudinary-build-url/dist/esm/utils.js");




var computeCondition = function (conditionObj) {
    var expression = conditionObj.expression ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(conditionObj.expression.map(function (exp) { return computeConditionExpression(exp); }), '_and_') : '';
    var transformations = conditionObj.transformations.map(function (transformation) { return (0,___WEBPACK_IMPORTED_MODULE_1__.toTransformationStr)((0,___WEBPACK_IMPORTED_MODULE_1__.default)(transformation)); });
    return {
        expression: expression,
        transformations: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(transformations, '/')
    };
};
var mapCharacteristic = function (expression) { return _constants_condition__WEBPACK_IMPORTED_MODULE_2__.ConditionalParams[expression] || expression; };
var computeConditionExpression = function (expression) {
    var characteristic = Array.isArray(expression.characteristic) ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(expression.characteristic.map(mapCharacteristic)) : mapCharacteristic(expression.characteristic);
    var operator = _cld_apis_utils__WEBPACK_IMPORTED_MODULE_3__.ConditionOperators[expression.operator];
    var value = isNaN(expression.value) ? "!" + expression.value + "!" : expression.value;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([characteristic, operator, value], '_');
};
var condition = function (conditionObj) {
    if (!conditionObj || !conditionObj.if || !conditionObj.if.expression)
        return '';
    var ifCondition = computeCondition(conditionObj.if);
    var elseCondition = conditionObj.else ? computeCondition(conditionObj.else) : null;
    var formattedIf = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(["if_" + ifCondition.expression, ifCondition.transformations], '/');
    var formattedElse = elseCondition ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(['if_else', elseCondition.transformations], '/') : '';
    return [(0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([formattedIf, formattedElse, 'if_end'], '/')];
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/effect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/effect.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "effect": function() { return /* binding */ effect; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/cloudinary-build-url/dist/esm/utils.js");

var effect = function (obj) {
    var isString = typeof obj === 'string';
    if (!obj || (!isString && !obj.name))
        return '';
    if (isString || !obj.value)
        return "e_" + (obj.name || obj);
    var value = Array.isArray(obj.value) ? obj.value.join(':') : obj.value;
    var effectValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([obj.name, value]);
    return "e_" + effectValue;
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatValue": function() { return /* binding */ formatValue; },
/* harmony export */   "convert": function() { return /* binding */ convert; },
/* harmony export */   "hasArithmeticExpression": function() { return /* binding */ hasArithmeticExpression; }
/* harmony export */ });
/* harmony import */ var _constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/arithmetic */ "./node_modules/cloudinary-build-url/dist/esm/constants/arithmetic.js");
/* harmony import */ var _constants_variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/variable */ "./node_modules/cloudinary-build-url/dist/esm/constants/variable.js");


var OPERATORS_REGEX = "((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))";
var mapArithmeticExpression = function (orgExpression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return orgExpression.replace(regex, function (match) { return _constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__.ArithmeticExpression[match]; });
};
var mapPredefinedVariables = function (orgExpression) {
    var regex = new RegExp(_constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__.PreDefinedPatterns, 'g');
    return orgExpression.replace(regex, function (match, p, index) { return orgExpression[index - 1] === _constants_variable__WEBPACK_IMPORTED_MODULE_1__.Prefix ? match : _constants_arithmetic__WEBPACK_IMPORTED_MODULE_0__.PredefinedVariables[match]; });
};
var formatValue = function (value) { return isNaN(value) ? convert(value) : value; };
var convert = function (expression) {
    if (!expression)
        return '';
    var mappedArithmetic = mapArithmeticExpression(expression);
    var converted = mapPredefinedVariables(mappedArithmetic);
    return converted.replace(/[ _]+/g, '_');
};
var hasArithmeticExpression = function (expression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return regex.test(expression);
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/flags.js":
/*!**************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/flags.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flags": function() { return /* binding */ flags; }
/* harmony export */ });
var flags = function (value) {
    if (!value || value.length === 0)
        return '';
    var flagValue = typeof value === 'string' ? value : value.join(':');
    return "fl_" + flagValue;
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResize": function() { return /* binding */ getResize; },
/* harmony export */   "getBorder": function() { return /* binding */ getBorder; },
/* harmony export */   "getPosition": function() { return /* binding */ getPosition; },
/* harmony export */   "getTransformations": function() { return /* binding */ getTransformations; },
/* harmony export */   "transform": function() { return /* binding */ transform; },
/* harmony export */   "toTransformationStr": function() { return /* binding */ toTransformationStr; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/cloudinary-build-url/dist/esm/constants/index.js");
/* harmony import */ var _constants_arithmetic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/arithmetic */ "./node_modules/cloudinary-build-url/dist/esm/constants/arithmetic.js");
/* harmony import */ var _condition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./condition */ "./node_modules/cloudinary-build-url/dist/esm/transformers/condition.js");
/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effect */ "./node_modules/cloudinary-build-url/dist/esm/transformers/effect.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expression */ "./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flags */ "./node_modules/cloudinary-build-url/dist/esm/transformers/flags.js");
/* harmony import */ var _rawTransformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rawTransformation */ "./node_modules/cloudinary-build-url/dist/esm/transformers/rawTransformation.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./node_modules/cloudinary-build-url/dist/esm/transformers/variables.js");
/* harmony import */ var _video_fps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video/fps */ "./node_modules/cloudinary-build-url/dist/esm/transformers/video/fps.js");
/* harmony import */ var _video_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video/offset */ "./node_modules/cloudinary-build-url/dist/esm/transformers/video/offset.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "./node_modules/cloudinary-build-url/dist/esm/transformers/resize.js");
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border */ "./node_modules/cloudinary-build-url/dist/esm/transformers/border.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position */ "./node_modules/cloudinary-build-url/dist/esm/transformers/position.js");













var getResize = function (options) {
    var hasResize = options.resize || options.width || options.height || options.aspectRatio;
    if (!hasResize)
        return '';
    return (0,_resize__WEBPACK_IMPORTED_MODULE_0__.resize)(options.resize || { width: options.width, height: options.height, type: options.crop, aspectRatio: options.aspectRatio });
};
var getBorder = function (options) {
    if (!options.border)
        return '';
    var borderModification = (typeof options.border === 'string') ? "bo_" + options.border : (0,_border__WEBPACK_IMPORTED_MODULE_1__.border)(options.border);
    return borderModification;
};
var getPosition = function (options) {
    if (!options.x && !options.y && !options.position)
        return '';
    return (0,_position__WEBPACK_IMPORTED_MODULE_2__.position)(options.position || { x: options.x, y: options.y });
};
var getTransformations = function (options) {
    var result = [];
    result.push((0,_variables__WEBPACK_IMPORTED_MODULE_3__.variables)(options.variables));
    result.push(getResize(options));
    result.push(getBorder(options));
    result.push(getPosition(options));
    result.push((0,_video_fps__WEBPACK_IMPORTED_MODULE_4__.fps)(options.fps));
    result.push((0,_video_offset__WEBPACK_IMPORTED_MODULE_5__.offset)(options.offset));
    for (var modifier in options) {
        var value = options[modifier];
        var mapping = _constants__WEBPACK_IMPORTED_MODULE_6__.TRANSFORMERS[modifier];
        if (!mapping || !value)
            continue;
        var isAcceptedNumberic = _constants_arithmetic__WEBPACK_IMPORTED_MODULE_7__.AcceptNumbericVars.includes(modifier);
        result.push(mapping + "_" + (isAcceptedNumberic ? (0,_expression__WEBPACK_IMPORTED_MODULE_8__.formatValue)(value) : value));
    }
    result.push((0,_effect__WEBPACK_IMPORTED_MODULE_9__.effect)(options.effect));
    result.push((0,_flags__WEBPACK_IMPORTED_MODULE_10__.flags)(options.flags));
    result.push((0,_rawTransformation__WEBPACK_IMPORTED_MODULE_11__.rawTransformation)(options.rawTransformation));
    result.push((0,_condition__WEBPACK_IMPORTED_MODULE_12__.condition)(options.condition));
    return result.filter(Boolean);
};
var transform = function (options) {
    var transformations = getTransformations(options);
    var chainedTransformations = options.transformation || options.chaining;
    if (chainedTransformations && Array.isArray(chainedTransformations)) {
        chainedTransformations.forEach(function (chained) {
            var chainedTransformation = getTransformations(chained);
            chainedTransformation.length > 0 && transformations.push(chainedTransformation);
        });
    }
    return transformations.filter(Boolean);
};
var toTransformationStr = function (transformations) { return transformations.reduce(function (str, transformation) {
    var isChained = Array.isArray(transformation);
    var separation = isChained ? '/' : ',';
    return "" + str + (str ? separation : '') + transformation.toString();
}, ''); };
/* harmony default export */ __webpack_exports__["default"] = (transform);


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/position.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/position.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "position": function() { return /* binding */ position; }
/* harmony export */ });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js");

var position = function (_a) {
    var x = _a.x, y = _a.y;
    var xAxis = x ? "x_" + (0,_expression__WEBPACK_IMPORTED_MODULE_0__.formatValue)(x) : '';
    var yAxis = y ? "y_" + (0,_expression__WEBPACK_IMPORTED_MODULE_0__.formatValue)(y) : '';
    return [xAxis, yAxis].filter(Boolean).join();
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/rawTransformation.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/rawTransformation.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rawTransformation": function() { return /* binding */ rawTransformation; }
/* harmony export */ });
var rawTransformation = function (value) { return value; };


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/resize.js":
/*!***************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/resize.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resize": function() { return /* binding */ resize; }
/* harmony export */ });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js");

var resize = function (_a) {
    var type = _a.type, width = _a.width, height = _a.height, aspectRatio = _a.aspectRatio;
    var w = width ? "w_" + (0,_expression__WEBPACK_IMPORTED_MODULE_0__.formatValue)(width) : '';
    var h = height ? "h_" + (0,_expression__WEBPACK_IMPORTED_MODULE_0__.formatValue)(height) : '';
    var crop = type ? "c_" + type : '';
    var ar = aspectRatio ? "ar_" + (0,_expression__WEBPACK_IMPORTED_MODULE_0__.formatValue)(aspectRatio) : '';
    return [crop, w, h, ar].filter(Boolean).join();
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/variables.js":
/*!******************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/variables.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertStringValueType": function() { return /* binding */ convertStringValueType; },
/* harmony export */   "computeVariable": function() { return /* binding */ computeVariable; },
/* harmony export */   "variables": function() { return /* binding */ variables; }
/* harmony export */ });
/* harmony import */ var _constants_variable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/variable */ "./node_modules/cloudinary-build-url/dist/esm/constants/variable.js");
/* harmony import */ var _cld_apis_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cld-apis/utils */ "./node_modules/@cld-apis/utils/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/cloudinary-build-url/dist/esm/utils.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./node_modules/cloudinary-build-url/dist/esm/transformers/expression.js");




var convertStringValueType = function (value) {
    if (!value || !value.expression)
        return '';
    var expression = Array.isArray(value.expression) ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(value.expression) : value.expression;
    var isArithmetic = (0,_expression__WEBPACK_IMPORTED_MODULE_1__.hasArithmeticExpression)(expression);
    var convertedExpression = (0,_expression__WEBPACK_IMPORTED_MODULE_1__.convert)(expression);
    var format = _constants_variable__WEBPACK_IMPORTED_MODULE_2__.Formats[value.formatAs] || '';
    var mappedExpression = convertedExpression && !isArithmetic ? "!" + convertedExpression + "!" : convertedExpression;
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([mappedExpression, format], '_');
};
var computeVariable = function (variable) {
    var name = "" + _constants_variable__WEBPACK_IMPORTED_MODULE_2__.Prefix + variable.name;
    var value = variable.value;
    if (isNaN(variable.value)) {
        if (Array.isArray(variable.value)) {
            value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(variable.value);
        }
        else {
            value = convertStringValueType(variable.value);
        }
    }
    var varValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([_cld_apis_utils__WEBPACK_IMPORTED_MODULE_3__.ValueAssignable[variable.assignFrom], value], ':');
    return varValue ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([name, varValue], '_') : '';
};
var variables = function (value) {
    if (!value)
        return '';
    if (!Array.isArray(value))
        return computeVariable(value);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)(value.map(function (variable) { return computeVariable(variable); }), ',');
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/video/fps.js":
/*!******************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/video/fps.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fps": function() { return /* binding */ fps; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/cloudinary-build-url/dist/esm/utils.js");

var fps = function (value) {
    var isObj = typeof value === 'object';
    if (!value || (isObj && !value.min))
        return '';
    var range = isObj ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toString)([value.min, value.max], '-') : value;
    return "fps_" + range;
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/transformers/video/offset.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/transformers/video/offset.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offset": function() { return /* binding */ offset; }
/* harmony export */ });
var offset = function (obj) {
    if (!obj)
        return '';
    var start = obj.start ? "so_" + obj.start : '';
    var end = obj.end ? "eo_" + obj.end : '';
    var duration = obj.duration ? "du_" + obj.duration : '';
    return [start, end, duration].filter(Boolean).join(',');
};


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/url.js":
/*!***********************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/url.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractPublicId": function() { return /* binding */ extractPublicId; },
/* harmony export */   "getSignature": function() { return /* binding */ getSignature; },
/* harmony export */   "encodePublicId": function() { return /* binding */ encodePublicId; },
/* harmony export */   "getVersion": function() { return /* binding */ getVersion; },
/* harmony export */   "getSubDomain": function() { return /* binding */ getSubDomain; },
/* harmony export */   "getPrefix": function() { return /* binding */ getPrefix; },
/* harmony export */   "getResourceType": function() { return /* binding */ getResourceType; },
/* harmony export */   "getPathToAsset": function() { return /* binding */ getPathToAsset; },
/* harmony export */   "url": function() { return /* binding */ url; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/cloudinary-build-url/dist/esm/constants/index.js");
/* harmony import */ var _cld_apis_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cld-apis/utils */ "./node_modules/@cld-apis/utils/dist/esm/index.js");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformers */ "./node_modules/cloudinary-build-url/dist/esm/transformers/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var SHARED_CDNS = ["cloudinary-a.akamaihd.net", "res.cloudinary.com"];
var CLOUDINARY_REGEX = /^.+\.cloudinary\.com\/(?:[^\/]+\/)(?:(image|video|raw)\/)?(?:(upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^\.^\s]+)(?:\.(.+))?$/;
var extractPublicId = function (link) {
    if (!link)
        return '';
    var parts = CLOUDINARY_REGEX.exec(link);
    return parts && parts.length > 2 ? parts[parts.length - 2] : link;
};
var getSignature = function (signature) {
    if (!signature)
        return '';
    var isFormatted = signature.indexOf('s--') === 0 && signature.endsWith('--');
    return isFormatted ? signature : "s--" + signature + "--";
};
var doesPathNeedVersion = function (publicId) { return !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//); };
var encodePublicId = function (publicId) { return encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/'); };
var getVersion = function (publicId, _a) {
    var _b = _a.forceVersion, forceVersion = _b === void 0 ? false : _b, _c = _a.version, version = _c === void 0 ? 1 : _c;
    var needVersion = doesPathNeedVersion(publicId) && forceVersion;
    return needVersion ? "v" + version : '';
};
var getSubDomain = function (publicId, _a) {
    var _b = _a.cdnSubdomain, cdnSubdomain = _b === void 0 ? false : _b, cname = _a.cname;
    if (!cname)
        return "res" + (cdnSubdomain ? "-" + publicId : '');
    return cdnSubdomain ? "a" + publicId + "." : '';
};
var getPrefix = function (publicId, _a) {
    var cloudName = _a.cloudName, _b = _a.privateCdn, privateCdn = _b === void 0 ? false : _b, _c = _a.cdnSubdomain, cdnSubdomain = _c === void 0 ? false : _c, secureDistribution = _a.secureDistribution, cname = _a.cname, _d = _a.secure, secure = _d === void 0 ? true : _d;
    var hasSecureDistribution = secure && secureDistribution && !SHARED_CDNS.includes(secureDistribution);
    var protocol = "http" + (secure ? 's' : '') + "://";
    var cdn = privateCdn && !hasSecureDistribution ? cloudName + "-" : '';
    var accountPath = privateCdn ? '' : "/" + cloudName;
    var subDomain = hasSecureDistribution ? '' : getSubDomain(publicId, { cdnSubdomain: cdnSubdomain, cname: cname });
    var host = hasSecureDistribution ? secureDistribution : (cname || '.cloudinary.com');
    return "" + protocol + cdn + subDomain + host + accountPath;
};
var getResourceType = function (_a) {
    var _b = _a.resourceType, resourceType = _b === void 0 ? _cld_apis_utils__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPES.IMAGE : _b, _c = _a.storageType, storageType = _c === void 0 ? _cld_apis_utils__WEBPACK_IMPORTED_MODULE_0__.STORAGE_TYPES.UPLOAD : _c, urlSuffix = _a.urlSuffix, useRootPath = _a.useRootPath, shortern = _a.shortern;
    var isUploadImage = resourceType === _cld_apis_utils__WEBPACK_IMPORTED_MODULE_0__.RESOURCE_TYPES.IMAGE && storageType === _cld_apis_utils__WEBPACK_IMPORTED_MODULE_0__.STORAGE_TYPES.UPLOAD;
    var useRootForNonUploadedImages = useRootPath && !isUploadImage;
    var shortenForUploadedImages = shortern && isUploadImage;
    var typePath = resourceType + "/" + storageType;
    if (useRootForNonUploadedImages) {
        throw new Error("Root path only supported for image/upload");
    }
    if (useRootPath)
        return "" + (shortenForUploadedImages ? 'iu' : '');
    if (urlSuffix) {
        var seo = _constants__WEBPACK_IMPORTED_MODULE_1__.SEO_TYPES[typePath];
        if (seo) {
            return seo;
        }
        throw new Error("URL Suffix only supported for " + Object.keys(_constants__WEBPACK_IMPORTED_MODULE_1__.SEO_TYPES).join(', '));
    }
    return typePath;
};
var isUrl = function (str) { return str && !!str.match(/^https?:\//); };
var getPathToAsset = function (publicId, _a) {
    var _b = _a.urlSuffix, urlSuffix = _b === void 0 ? '' : _b, _c = _a.format, format = _c === void 0 ? '' : _c;
    if (isUrl(publicId))
        return encodePublicId(publicId);
    var publicIdWithFormat = publicId.replace(/\.[^/.]+$/, format || '');
    var path = [publicIdWithFormat, urlSuffix].filter(Boolean).join('/');
    return encodePublicId(path);
};
var url = function (publicId, cloud, options) {
    if (cloud === void 0) { cloud = { cloudName: '' }; }
    if (!cloud.cloudName) {
        throw Error('cloudName is required!');
    }
    var _publicId = isUrl(publicId) ? extractPublicId(publicId) : publicId;
    var version = getVersion(_publicId, cloud);
    var prefix = getPrefix(_publicId, cloud);
    var signature = getSignature(cloud.signature);
    var typePath = getResourceType(cloud);
    var pathToAsset = getPathToAsset(_publicId, { format: options.format, urlSuffix: cloud.urlSuffix });
    var format = options.fetchFormat || options.format || 'auto';
    var $options = __assign(__assign({ quality: 'auto' }, options), { format: format });
    var trans = (0,_transformers__WEBPACK_IMPORTED_MODULE_2__.toTransformationStr)((0,_transformers__WEBPACK_IMPORTED_MODULE_2__.transform)($options));
    return [prefix, typePath, signature, trans, version, pathToAsset].filter(Boolean).join('/').replace(' ', '%20');
};
/* harmony default export */ __webpack_exports__["default"] = (url);


/***/ }),

/***/ "./node_modules/cloudinary-build-url/dist/esm/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/cloudinary-build-url/dist/esm/utils.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": function() { return /* binding */ toString; },
/* harmony export */   "cleanText": function() { return /* binding */ cleanText; }
/* harmony export */ });
var toString = function (arr, separation) {
    if (separation === void 0) { separation = ':'; }
    return arr.filter(Boolean).join(separation);
};
var cleanText = function (text) { return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1'); };


/***/ }),

/***/ "./node_modules/lodash.snakecase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.snakecase/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = snakeCase;


/***/ }),

/***/ "./components/ArticlePreview/ArticlePreview.module.scss":
/*!**************************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreview.module.scss ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./ArticlePreview.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticlePreview/ArticlePreview.module.scss");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./ArticlePreview.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticlePreview/ArticlePreview.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./ArticlePreview.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticlePreview/ArticlePreview.module.scss");

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

/***/ "./components/ArticleShowcases/ArticleGrid.module.scss":
/*!*************************************************************!*\
  !*** ./components/ArticleShowcases/ArticleGrid.module.scss ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./ArticleGrid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/ArticleGrid.module.scss");

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
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./ArticleGrid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/ArticleGrid.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./ArticleGrid.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/ArticleGrid.module.scss");

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

/***/ "./components/ArticleShowcases/MainArticles/MainArticles.module.scss":
/*!***************************************************************************!*\
  !*** ./components/ArticleShowcases/MainArticles/MainArticles.module.scss ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./MainArticles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/MainArticles/MainArticles.module.scss");

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
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./MainArticles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/MainArticles/MainArticles.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./MainArticles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/MainArticles/MainArticles.module.scss");

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticlePreview/ArticlePreview.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticlePreview/ArticlePreview.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ArticlePreview_image__nD2jN {\n  -webkit-object-fit: cover;\n          object-fit: cover;\n}\n\n.ArticlePreview_article__zFj_o {\n  position: relative;\n  width: 20rem;\n  height: 10rem;\n}", "",{"version":3,"sources":["webpack://ArticlePreview.module.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;UAAA,iBAAA;AACF;;AAEA;EACE,kBAAA;EAEA,YAAA;EACA,aAAA;AAAF","sourcesContent":[".image {\r\n  object-fit: cover;\r\n}\r\n\r\n.article {\r\n  position: relative;\r\n\r\n  width: 20rem;\r\n  height: 10rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"image": "ArticlePreview_image__nD2jN",
	"article": "ArticlePreview_article__zFj_o"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/ArticleGrid.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/ArticleGrid.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ArticleGrid_article-grid__2l-65 {\n  display: grid;\n}", "",{"version":3,"sources":["webpack://ArticleGrid.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".article-grid {\r\n    display: grid;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article-grid": "ArticleGrid_article-grid__2l-65"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/MainArticles/MainArticles.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/ArticleShowcases/MainArticles/MainArticles.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".MainArticles_main-articles__2loK5 {\n  background-color: red;\n  height: 50vh;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://MainArticles.module.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,YAAA;EACA,WAAA;AACF","sourcesContent":[".main-articles {\r\n  background-color: red;\r\n  height: 50vh;\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main-articles": "MainArticles_main-articles__2loK5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[],disableStaticImages:false};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29sb3JpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL2F1ZGlvQ29kZWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL2NvbG9yU3BhY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvY29uZGl0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZC1hcGlzL3V0aWxzL2Rpc3QvZXNtL2NvbnN0YW50cy9kZWxpdmVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvZWZmZWN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvZmxhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvZ3Jhdml0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvcm90YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL3ZhcmlhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZC1hcGlzL3V0aWxzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZC1hcGlzL3V0aWxzL2Rpc3QvZXNtL3RvU25ha2VDYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVQcmV2aWV3L0FydGljbGVQcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0FydGljbGVHcmlkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW5BcnRpY2xlcy9NYWluQXJ0aWNsZXMudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2NvbnN0YW50cy9hcml0aG1ldGljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vY29uc3RhbnRzL2NvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2NvbnN0YW50cy92YXJpYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdHJhbnNmb3JtZXJzL2JvcmRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL3RyYW5zZm9ybWVycy9jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvZWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdHJhbnNmb3JtZXJzL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvcmF3VHJhbnNmb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvcmVzaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdHJhbnNmb3JtZXJzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL3RyYW5zZm9ybWVycy92aWRlby9mcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvdmlkZW8vb2Zmc2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdXJsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2guc25ha2VjYXNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVQcmV2aWV3L0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzP2JlYmIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9BcnRpY2xlR3JpZC5tb2R1bGUuc2Nzcz83ZmE3Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbkFydGljbGVzL01haW5BcnRpY2xlcy5tb2R1bGUuc2Nzcz9kMzFmIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0FydGljbGVHcmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbkFydGljbGVzL01haW5BcnRpY2xlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlUHJldmlldyIsInByb3BzIiwiYXJ0aWNsZSIsInRpdGxlIiwiaW1hZ2VOYW1lIiwidXJsIiwiaW1hZ2VVcmwiLCJidWlsZFVybCIsImNsb3VkIiwiY2xvdWROYW1lIiwic3R5bGVzIiwiQXJ0aWNsZUdyaWQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xzIiwiZ3JpZFRlbXBsYXRlUm93cyIsInJvd3MiLCJjaGlsZHJlbiIsImFydGljbGVzIiwiTWFpbkFydGljbGVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImNvbmZpZ0RldmljZVNpemVzIiwiZGV2aWNlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsImxvYWRlciIsImNvbmZpZ1BhdGgiLCJwYXRoIiwiY29uZmlnRG9tYWlucyIsImRvbWFpbnMiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJzZXQiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJvYmoiLCJfX2VzTW9kdWxlIiwiQW1wU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiaXNJbkFtcE1vZGUiLCJ1c2VBbXAiLCJfYW1wQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiZGVmYXVsdEhlYWQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zaWRlRWZmZWN0IiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9hbXAiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY2hhclNldCIsIm5hbWUiLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaW5kZXhPZiIsImFkZCIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJjIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJzdHIiLCJ3aW5kb3ciLCJidG9hIiwibGlicmFyeSIsImZhcyIsImZhU2VhcmNoIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx3QkFBd0IsNEpBQTRKOzs7Ozs7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ZWJwYWNrL3BhZ2VzL2luZGV4LjNhYmZhZDcwZDQyYTZiZTMxNjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgeyBOYW1lZENvbG9ycyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IHZhciBjb2xvcmlmeSA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9ICdyZ2I6JzsgfVxuICAgIGlmICghdmFsdWUpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhOYW1lZENvbG9ycykuaW5jbHVkZXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgdmFyIGNvbG9yID0gdmFsdWUuc3RhcnRzV2l0aCgnIycpID8gdmFsdWUuc2xpY2UoMSkgOiB2YWx1ZTtcbiAgICBpZiAoY29sb3IubGVuZ3RoIDwgMyB8fCBjb2xvci5sZW5ndGggPiA4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSEVYIENvbG9yIHNob3VsZCBiZSAzLTQgZGlnaXRzIGZvciBSR0IvUkdCQSwgb3IgNi04IGRpZ2l0cyBmb3IgUkdCL1JHQkEgdHJpcGxldC9xdWFkcnVwbGV0Jyk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgcHJlZml4ICsgY29sb3I7XG59O1xuIiwiZXhwb3J0IHZhciBBdWRpb0NvZGVjVHlwZXMgPSB7XG4gICAgTm9uZTogJ25vbmUnLFxuICAgIEFBQzogJ2FhYycsXG4gICAgVk9SQklTOiAndm9yYmlzJyxcbiAgICBNUDM6ICdtcDMnLFxuICAgIE9QVVM6ICdvcHVzJ1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnQgdmFyIENvbG9yU3BhY2UgPSB7XG4gICAgc1JHQjogJ3NyZ2InLFxuICAgIG5vQ01ZSzogJ25vX2NteWsnLFxuICAgIGtlZXBDTVlLOiAna2VlcF9jbXlrJ1xufTtcbmV4cG9ydCB2YXIgVkNvbG9yU3BhY2UgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgQ29sb3JTcGFjZSksIHsgdGlueVNSR0I6ICd0aW55c3JnYicsIGNvcHk6ICdjb3B5JyB9KTtcbiIsImV4cG9ydCB2YXIgTmFtZWRDb2xvcnMgPSB7XG4gICAgUmVkOiAncmVkJyxcbiAgICBPcmFuZ2U6ICdvcmFuZ2UnLFxuICAgIFllbGxvdzogJ3llbGxvdycsXG4gICAgR3JlZW46ICdncmVlbicsXG4gICAgQ3lhbjogJ2N5YW4nLFxuICAgIEJsdWU6ICdibHVlJyxcbiAgICBQdXJwbGU6ICdwdXJwbGUnLFxuICAgIFBpbms6ICdwaW5rJyxcbiAgICBXaGl0ZTogJ3doaXRlJyxcbiAgICBHcmF5OiAnZ3JheScsXG4gICAgQnJvd246ICdicm93bidcbn07XG4iLCJleHBvcnQgdmFyIENvbmRpdGlvbk9wZXJhdG9ycyA9IHtcbiAgICBlcXVhbDogXCJlcVwiLFxuICAgIG5vdEVxdWFsOiBcIm5lXCIsXG4gICAgbGVzc1RoYW46IFwibHRcIixcbiAgICBncmVhdGVyVGhhbjogXCJndFwiLFxuICAgIGxlc3NPckVxdWFsOiBcImx0ZVwiLFxuICAgIGdyZWF0ZXJPckVxdWFsOiBcImd0ZVwiLFxuICAgIGluY2x1ZGU6IFwiaW5cIixcbiAgICBub3RJbmNsdWRlOiBcIm5pblwiLFxufTtcbiIsImV4cG9ydCB2YXIgU1RPUkFHRV9UWVBFUyA9IHtcbiAgICBVUExPQUQ6ICd1cGxvYWQnLFxuICAgIEZFVENIOiAnZmV0Y2gnLFxuICAgIFBSSVZBVEU6ICdwcml2YXRlJyxcbiAgICBBVVRIRU5USUNBVEVEOiAnYXV0aGVudGljYXRlZCcsXG4gICAgU1BSSVRFOiAnc3ByaXRlJyxcbiAgICBGQUNFQk9PSzogJ2ZhY2Vib29rJyxcbiAgICBUV0lUVEVSOiAndHdpdHRlcicsXG4gICAgWU9VVFVCRTogJ3lvdXR1YmUnLFxuICAgIFZJTUVPOiAndmltZW8nLFxuICAgIE1VTFRJOiAnbXVsdGknLFxuICAgIElOU1RBR1JBTTogJ2luc3RhZ3JhbScsXG4gICAgSFVMVTogJ2h1bHUnLFxuICAgIEFOSU1PVE86ICdhbmltb3RvJyxcbiAgICBEQUlMWU1PVElPTjogJ2RhaWx5bW90aW9uJ1xufTtcbmV4cG9ydCB2YXIgUkVTT1VSQ0VfVFlQRVMgPSB7XG4gICAgSU1BR0U6ICdpbWFnZScsXG4gICAgVklERU86ICd2aWRlbycsXG4gICAgUkFXOiAncmF3J1xufTtcbmV4cG9ydCB2YXIgVklERU9fU09VUkNFX1RZUEVTID0ge1xuICAgIFdFQk06ICd3ZWJtJyxcbiAgICBNUDQ6ICdtcDQnLFxuICAgIE9HVjogJ29ndicsXG4gICAgRkxWOiAnZmx2JyxcbiAgICBNM1U4OiAnbTN1OCcsXG4gICAgVFM6ICd0cycsXG4gICAgTU9WOiAnbW92JyxcbiAgICBNS1Y6ICdta3YnLFxuICAgIE1QRDogJ21wZCdcbn07XG5leHBvcnQgdmFyIEltYWdlRm9ybWF0cyA9IHtcbiAgICBHSUY6IFwiZ2lmXCIsXG4gICAgUE5HOiBcInBuZ1wiLFxuICAgIEpQRzogXCJqcGdcIixcbiAgICBCTVA6IFwiYm1wXCIsXG4gICAgSUNPOiBcImljb1wiLFxuICAgIFBERjogXCJwZGZcIixcbiAgICBUSUZGOiBcInRpZmZcIixcbiAgICBFUFM6IFwiZXBzXCIsXG4gICAgSlBDOiBcImpwY1wiLFxuICAgIEpQMjogXCJqcDJcIixcbiAgICBQU0Q6IFwicHNkXCIsXG4gICAgV0VCUDogXCJ3ZWJwXCIsXG4gICAgWklQOiBcInppcFwiLFxuICAgIFNWRzogXCJzdmdcIixcbiAgICBXRFA6IFwid2RwXCIsXG4gICAgSERYOiBcImhweFwiLFxuICAgIERKVlU6IFwiZGp2dVwiLFxuICAgIEFJOiBcImFpXCIsXG4gICAgRkxJRjogXCJmbGlmXCIsXG4gICAgQlBHOiBcImJwZ1wiLFxuICAgIE1JRkY6IFwibWlmZlwiLFxuICAgIFRHQTogXCJ0Z2FcIixcbiAgICBIRUlDOiBcImhlaWNcIixcbn07XG4iLCJleHBvcnQgdmFyIEJyaWdodG5lc3MgPSB7XG4gICAgQXV0bzogJ2F1dG9fYnJpZ2h0bmVzcycsXG4gICAgRGVmYXVsdDogJ2JyaWdodG5lc3MnLFxuICAgIEhzYjogJ2hzYidcbn07XG5leHBvcnQgdmFyIENvbnRyYXN0ID0ge1xuICAgIERlZmF1bHQ6ICdjb250cmFzdCcsXG4gICAgQXV0bzogJ2F1dG9fY29udHJhc3QnXG59O1xuZXhwb3J0IHZhciBDb2xvckNoYW5uZWwgPSB7XG4gICAgUmVkOiAncmVkJyxcbiAgICBHcmVlbjogJ2dyZWVuJyxcbiAgICBCbHVlOiAnYmx1ZScsXG59O1xuZXhwb3J0IHZhciBDb2xvckZpbHRlciA9IHtcbiAgICBOZWdhdGU6ICduZWdhdGUnLFxuICAgIFNlcGlhOiAnc2VwaWEnLFxuICAgIEdyYXlzY2FsZTogJ2dyYXlzY2FsZScsXG4gICAgQmxhY2t3aGl0ZTogJ2JsYWNrd2hpdGUnLFxuICAgIFRpbnQ6ICd0aW50Jyxcbn07XG5leHBvcnQgdmFyIENvbG9yQWRqdXN0bWVudCA9IHtcbiAgICBIdWU6ICdodWUnLFxuICAgIFNhdHVyYXRpb246ICdzYXR1cmF0aW9uJyxcbiAgICBDb2xvcml6ZTogJ2NvbG9yaXplJyxcbiAgICBSZXBsYWNlQ29sb3I6ICdyZXBsYWNlX2NvbG9yJyxcbiAgICBSZWNvbG9yOiAncmVjb2xvcicsXG4gICAgVGhlbWU6ICd0aGVtZScsXG4gICAgVmlicmFuY2U6IFwidmlicmFuY2VcIixcbiAgICBBdXRvQ29sb3I6ICdhdXRvX2NvbG9yJyxcbiAgICBWZWN0b3JpemU6ICd2ZWN0b3JpemUnLFxuICAgIEltcHJvdmU6ICdpbXByb3ZlJyxcbiAgICBGaWxsTGlnaHQ6ICdmaWxsX2xpZ2h0JyxcbiAgICBPdXRsaW5lOiAnb3V0bGluZScsXG4gICAgQ3V0T3V0OiAnY3V0X291dCcsXG4gICAgQ2FydG9vbmlmeTogJ2NhcnRvb25pZnknLFxuICAgIEZhZGU6ICdmYWRlJyxcbiAgICBTdHlsZVRyYW5zZmVyOiAnc3R5bGVfdHJhbnNmZXInLFxuICAgIExpZ2h0cm9vbTogJ2xpZ2h0cm9vbScsXG4gICAgQXJ0OiAnYXJ0JyxcbiAgICBWaWVzdXNDb3JyZWN0OiAndmllc3VzX2NvcnJlY3QnLFxuICAgIEdhbW1hOiAnZ2FtbWEnLFxuICAgIFNjcmVlbjogJ3NjcmVlbicsXG4gICAgTXVsdGlwbHk6ICdtdWx0aXBseScsXG4gICAgT3ZlcmxheTogJ292ZXJsYXknLFxuICAgIEFudGlSZW1vdmFsOiAnYW50aV9yZW1vdmFsJyxcbiAgICBCZ3JlbW92YWw6ICdiZ3JlbW92YWwnLFxuICAgIE1ha2VUcmFuc3BhcmVudDogJ21ha2VfdHJhbnNwYXJlbnQnLFxuICAgIE9wYWNpdHlUaHJlc2hvbGQ6ICdvcGFjaXR5X3RocmVzaG9sZCcsXG4gICAgVHJpbTogJ3RyaW0nLFxuICAgIFNoYWRvdzogJ3NoYWRvdycsXG4gICAgRGlzdG9ydDogJ2Rpc3RvcnQnLFxuICAgIFNoZWFyOiAnc2hlYXInLFxuICAgIERpc3BsYWNlOiAnZGlzcGxhY2UnLFxuICAgIE9pbFBhaW50OiAnb2lsX3BhaW50JyxcbiAgICBSZWRleWU6ICdyZWRleWUnLFxuICAgIEFkdlJlZGV5ZTogJ2Fkdl9yZWRleWUnLFxuICAgIFZpZ25ldHRlOiAndmlnbmV0dGUnLFxuICAgIEdyYWRpZW50X2ZhZGU6ICdncmFkaWVudF9mYWRlJyxcbiAgICBTaGFycGVuOiAnc2hhcnBlbicsXG4gICAgVW5zaGFycE1hc2s6ICd1bnNoYXJwX21hc2snLFxuICAgIE9yZGVyZWREaXRoZXI6ICdvcmRlcmVkX2RpdGhlcicsXG4gICAgTG9vcDogJ2xvb3AnLFxufTtcbmV4cG9ydCB2YXIgQ29sb3JibGluZCA9IHtcbiAgICBBc3Npc3Q6ICdhc3Npc3RfY29sb3JibGluZCcsXG4gICAgU2ltdWxhdGU6ICdzaW11bGF0ZV9jb2xvcmJsaW5kJ1xufTtcbmV4cG9ydCB2YXIgUGl4ZWxhdGVFZmZlY3RzID0ge1xuICAgIERlZmF1bHQ6ICdwaXhlbGF0ZScsXG4gICAgUmVnaW9uOiAncGl4ZWxhdGVfcmVnaW9uJyxcbiAgICBGYWNlczogJ3BpeGVsYXRlX2ZhY2VzJ1xufTtcbmV4cG9ydCB2YXIgQmx1ckVmZmVjdHMgPSB7XG4gICAgRGVmYXVsdDogJ2JsdXInLFxuICAgIFJlZ2lvbjogJ2JsdXJfcmVnaW9uJyxcbiAgICBGYWNlczogJ2JsdXJfZmFjZXMnXG59O1xuZXhwb3J0IHZhciBWaWRlb0VmZmVjdHMgPSB7XG4gICAgQWNjZWxlcmF0ZTogJ2FjY2VsZXJhdGUnLFxuICAgIFJldmVyc2U6ICdyZXZlcnNlJyxcbiAgICBCb29tZXJhbmc6ICdib29tZXJhbmcnLFxuICAgIExvb3A6ICdsb29wJyxcbiAgICBQcm9ncmVzc0JhcjogJ3Byb2dyZXNzYmFyJyxcbiAgICBUcmFuc3BhcmVudDogJ3RyYW5zcGFyZW50JyxcbiAgICBQcmV2aWV3OiAncHJldmlldycsXG4gICAgVHJhbnNpdGlvbjogJ3RyYW5zaXRpb24nLFxuICAgIE5vaXNlOiAnbm9pc2UnLFxuICAgIERlc2hha2U6ICdkZXNoYWtlJyxcbiAgICBWb2x1bWU6ICd2b2x1bWUnXG59O1xuZXhwb3J0IHZhciBBcnRpc3RpY0ZpbHRlcnMgPSB7XG4gICAgQWxEZW50ZTogJ2FsX2RlbnRlJyxcbiAgICBBdGhlbmE6ICdhdGhlbmEnLFxuICAgIEF1ZHJleTogJ2F1ZHJleScsXG4gICAgQXVyb3JhOiAnYXVyb3JhJyxcbiAgICBEYWd1ZXJyZTogJ2RhZ3VlcnJlJyxcbiAgICBFdWNhbHlwdHVzOiAnZXVjYWx5cHR1cycsXG4gICAgRmVzOiAnZmVzJyxcbiAgICBGcm9zdDogJ2Zyb3N0JyxcbiAgICBIYWlyc3ByYXk6ICdoYWlyc3ByYXknLFxuICAgIEhva3VzYWk6ICdob2t1c2FpJyxcbiAgICBJbmNvZ25pdG86ICdpbmNvZ25pdG8nLFxuICAgIExpbmVuOiAnbGluZW4nLFxuICAgIFBlYWNvY2s6ICdwZWFjb2NrJyxcbiAgICBQcmltYXZlcmE6ICdwcmltYXZlcmEnLFxuICAgIHF1YXJ0ejogJ3F1YXJ0eicsXG4gICAgUmVkUm9jazogJ3JlZF9yb2NrJyxcbiAgICBSZWZyZXNoOiAncmVmcmVzaCcsXG4gICAgU2l6emxlOiAnc2l6emxlJyxcbiAgICBTb25uZXQ6ICdzb25uZXQnLFxuICAgIFVrdWxlbGU6ICd1a3VsZWxlJyxcbiAgICBab3JybzogJ3pvcnJvJ1xufTtcbiIsImV4cG9ydCB2YXIgRmxhZ3MgPSB7XG4gICAgQW55Rm9ybWF0OiBcImFueV9mb3JtYXRcIixcbiAgICBBdHRhY2htZW50OiBcImF0dGFjaG1lbnRcIixcbiAgICBBc1BuZzogXCJhcG5nXCIsXG4gICAgQXNXZWJwOiBcImF3ZWJwXCIsXG4gICAgQ2xpcDogXCJjbGlwXCIsXG4gICAgQ2xpcEV2ZW5vZGQ6IFwiY2xpcF9ldmVub2RkXCIsXG4gICAgQ3V0dGVyOiBcImN1dHRlclwiLFxuICAgIEZvcmNlU3RyaXA6IFwiZm9yY2Vfc3RyaXBcIixcbiAgICBGb3JjZUljYzogXCJmb3JjZV9pY2NcIixcbiAgICBHZXRJbmZvOiBcImdldGluZm9cIixcbiAgICBJZ25vcmVBc3BlY3RSYXRpbzogXCJpZ25vcmVfYXNwZWN0X3JhdGlvXCIsXG4gICAgSWdub3JlTWFza0NoYW5uZWxzOiBcImlnbm9yZV9tYXNrX2NoYW5uZWxzXCIsXG4gICAgSW1tdXRhYmxlQ2FjaGU6IFwiaW1tdXRhYmxlX2NhY2hlXCIsXG4gICAgS2VlcEF0dHJpYnV0aW9uOiBcImtlZXBfYXR0cmlidXRpb25cIixcbiAgICBLZWVwSXB0YzogXCJrZWVwX2lwdGNcIixcbiAgICBMYXllckFwcGx5OiBcImxheWVyX2FwcGx5XCIsXG4gICAgTG9zc3k6IFwibG9zc3lcIixcbiAgICBOb092ZXJmbG93OiBcIm5vX292ZXJmbG93XCIsXG4gICAgUHJlc2VydmVUcmFuc3BhcmVuY3k6IFwicHJlc2VydmVfdHJhbnNwYXJlbmN5XCIsXG4gICAgUE5HODogXCJwbmc4XCIsXG4gICAgUE5HMjQ6IFwicG5nMjRcIixcbiAgICBQTkczMjogXCJwbmczMlwiLFxuICAgIFByb2dyZXNzaXZlOiBcInByb2dyZXNzaXZlXCIsXG4gICAgUmFzdGVyaXplOiBcInJhc3Rlcml6ZVwiLFxuICAgIFJlZ2lvblJlbGF0aXZlOiBcInJlZ2lvbl9yZWxhdGl2ZVwiLFxuICAgIFJlbGF0aXZlOiAncmVsYXRpdmUnLFxuICAgIFJlcGxhY2VJbWFnZTogJ3JlcGxhY2VfaW1hZ2UnLFxuICAgIFNhbml0aXplOiAnc2FuaXRpemUnLFxuICAgIFN0cmlwUHJvZmlsZTogJ3N0cmlwX3Byb2ZpbGUnLFxuICAgIFRleHROb1RyaW06ICd0ZXh0X25vX3RyaW0nLFxuICAgIFRleHREaXNhbGxvd092ZXJmbG93OiAndGV4dF9kaXNhbGxvd19vdmVyZmxvdycsXG4gICAgVGlmZjhMWlc6ICd0aWZmOF9sencnLFxuICAgIFRpbGVkOiAndGlsZWQnXG59O1xuZXhwb3J0IHZhciBWRmxhZ3MgPSB7XG4gICAgQW5pbWF0ZWQ6IFwiYW5pbWF0ZWRcIixcbiAgICBBc1dlYnA6IFwiYXdlYnBcIixcbiAgICBBdHRhY2hlbWVudDogXCJhdHRhY2htZW50XCIsXG4gICAgU3RyZWFtaW5nQXR0YWNobWVudDogXCJzdHJlYW1pbmdfYXR0YWNobWVudFwiLFxuICAgIEdldEluZm86IFwiZ2V0aW5mb1wiLFxuICAgIEhMU1YzOiBcImhsc3YzXCIsXG4gICAgS2VlcERhcjogXCJrZWVwX2RhclwiLFxuICAgIExheWVyQXBwbHk6IFwibGF5ZXJfYXBwbHlcIixcbiAgICBOb1N0cmVhbTogXCJub19zdHJlYW1cIixcbiAgICBNb25vOiBcIm1vbm9cIixcbiAgICBSZWxhdGl2ZTogXCJyZWxhdGl2ZVwiLFxuICAgIFNwbGljZTogXCJzcGxpY2VcIixcbiAgICBUcnVuY2F0ZTogXCJ0cnVuY2F0ZV90c1wiLFxuICAgIFdhdmVmb3JtOiBcIndhdmVmb3JtXCIsXG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydCB2YXIgQ29tcGFzcyA9IHtcbiAgICBOb3J0aDogXCJub3J0aFwiLFxuICAgIE5vcnRoRWFzdDogXCJub3J0aF9lYXN0XCIsXG4gICAgTm9ydGhXZXN0OiBcIm5vcnRoX3dlc3RcIixcbiAgICBXZXN0OiBcIndlc3RcIixcbiAgICBTb3V0aFdlc3Q6IFwic291dGhfd2VzdFwiLFxuICAgIFNvdXRoOiBcInNvdXRoXCIsXG4gICAgU291dGhFYXN0OiBcInNvdXRoX2Vhc3RcIixcbiAgICBFYXN0OiBcImVhc3RcIixcbiAgICBDZW50ZXI6IFwiY2VudGVyXCIsXG59O1xuZXhwb3J0IHZhciBHcmF2aXR5ID0gX19hc3NpZ24oeyBBdXRvOiAnYXV0bycsIFN1YmplY3Q6IFwiYXV0bzpzdWJqZWN0XCIsIEZhY2U6IFwiZmFjZVwiLCBTaW5rOiBcInNpbmtcIiwgRmFjZUNlbnRlcjogXCJmYWNlOmNlbnRlclwiLCBNdWx0aXBsZUZhY2VzOiBcImZhY2VzXCIsIE11bHRpcGxlRmFjZXNDZW50ZXI6IFwiZmFjZXM6Y2VudGVyXCIgfSwgQ29tcGFzcyk7XG4iLCJleHBvcnQgeyBSRVNJWkVfVFlQRVMgfSBmcm9tICcuL3Jlc2l6ZSc7XG5leHBvcnQgeyBST1RBVElPTl9NT0RFUyB9IGZyb20gJy4vcm90YXRpb24nO1xuZXhwb3J0IHsgQXVkaW9Db2RlY1R5cGVzIH0gZnJvbSAnLi9hdWRpb0NvZGVjJztcbmV4cG9ydCB7IENvbG9yU3BhY2UsIFZDb2xvclNwYWNlIH0gZnJvbSAnLi9jb2xvclNwYWNlJztcbmV4cG9ydCB7IENvbmRpdGlvbk9wZXJhdG9ycyB9IGZyb20gJy4vY29uZGl0aW9uJztcbmV4cG9ydCB7IFNUT1JBR0VfVFlQRVMsIFJFU09VUkNFX1RZUEVTLCBWSURFT19TT1VSQ0VfVFlQRVMgfSBmcm9tICcuL2RlbGl2ZXJ5JztcbmV4cG9ydCB7IEFydGlzdGljRmlsdGVycywgQnJpZ2h0bmVzcywgQmx1ckVmZmVjdHMsIENvbG9yQWRqdXN0bWVudCwgQ29sb3JDaGFubmVsLCBDb2xvckZpbHRlciwgQ29sb3JibGluZCwgQ29udHJhc3QsIFBpeGVsYXRlRWZmZWN0cywgVmlkZW9FZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzJztcbmV4cG9ydCB7IEZsYWdzLCBWRmxhZ3MgfSBmcm9tICcuL2ZsYWcnO1xuZXhwb3J0IHsgR3Jhdml0eSwgQ29tcGFzcyB9IGZyb20gJy4vZ3Jhdml0eSc7XG5leHBvcnQgeyBWYWx1ZUFzc2lnbmFibGUsIFZhcmlhYmxlRm9ybWF0cyB9IGZyb20gJy4vdmFyaWFibGUnO1xuZXhwb3J0IHsgTmFtZWRDb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XG4iLCJleHBvcnQgdmFyIFJFU0laRV9UWVBFUyA9IHtcbiAgICBJTUFHR0FfU0NBTEU6ICdpbWFnZ2FTY2FsZScsXG4gICAgSU1BR0dBX0NST1A6ICdpbWFnZ2FDcm9wJyxcbiAgICBDUk9QOiAnY3JvcCcsXG4gICAgRklMTDogJ2ZpbGwnLFxuICAgIFNDQUxFOiAnc2NhbGUnLFxuICAgIE1JTl9QQUQ6ICdtaW5pbXVtUGFkJyxcbiAgICBGSVQ6ICdmaXQnLFxuICAgIFBBRDogJ3BhZCcsXG4gICAgTElNSVRfRklUOiAnbGltaXRGaXQnLFxuICAgIFRIVU1CTkFJTDogJ3RodW1iJyxcbiAgICBMSU1JVF9GSUxMOiAnbGltaXRGaWxsJyxcbiAgICBNSU5fRklUOiAnbWluaW11bUZpdCcsXG4gICAgTElNSVRfUEFEOiAnbGltaXRQYWQnLFxuICAgIEZJTExfUEFEOiAnZmlsbFBhZCdcbn07XG4iLCJleHBvcnQgdmFyIFJPVEFUSU9OX01PREVTID0ge1xuICAgIEFVVE9fUklHSFQ6ICdhdXRvX3JpZ2h0JyxcbiAgICBBVVRPX0xFRlQ6ICdhdXRvX2xlZnQnLFxuICAgIFZFUlRJQ0FMX0ZMSVA6ICd2ZmxpcCcsXG4gICAgSE9SSVpPTlRBTF9GTElQOiAnaGZsaXAnLFxuICAgIElHTk9SRV9FWElGX0RBVEE6ICdpZ25vcmUnXG59O1xuIiwiZXhwb3J0IHZhciBWYWx1ZUFzc2lnbmFibGUgPSB7XG4gICAgY29udGV4dDogXCJjdHhcIixcbiAgICBzdHJ1Y3R1cmVNZXRhZGF0YTogXCJtZFwiXG59O1xuZXhwb3J0IHZhciBWYXJpYWJsZUZvcm1hdHMgPSB7XG4gICAgaW50ZWdlcjogJ2ludGVnZXInLFxuICAgIGZsb2F0OiAnZmxvYXQnXG59O1xuIiwiZXhwb3J0IHsgQXVkaW9Db2RlY1R5cGVzLCBBcnRpc3RpY0ZpbHRlcnMsIENvbG9yQWRqdXN0bWVudCwgQ29sb3JDaGFubmVsLCBDb2xvckZpbHRlciwgQ29sb3JTcGFjZSwgVkNvbG9yU3BhY2UsIENvbG9yYmxpbmQsIENvbXBhc3MsIENvbmRpdGlvbk9wZXJhdG9ycywgQ29udHJhc3QsIEJsdXJFZmZlY3RzLCBCcmlnaHRuZXNzLCBGbGFncywgR3Jhdml0eSwgTmFtZWRDb2xvcnMsIFJPVEFUSU9OX01PREVTLCBSRVNJWkVfVFlQRVMsIFJFU09VUkNFX1RZUEVTLCBQaXhlbGF0ZUVmZmVjdHMsIFZGbGFncywgVklERU9fU09VUkNFX1RZUEVTLCBWYWx1ZUFzc2lnbmFibGUsIFZhcmlhYmxlRm9ybWF0cywgVmlkZW9FZmZlY3RzLCBTVE9SQUdFX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHsgdG9TbmFrZUNhc2UgfSBmcm9tICcuL3RvU25ha2VDYXNlJztcbmV4cG9ydCB7IGNvbG9yaWZ5IH0gZnJvbSAnLi9jb2xvcmlmeSc7XG4iLCJleHBvcnQgdmFyIHRvU25ha2VDYXNlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB2YXIgZm9ybWF0dGVkID0ge307XG4gICAgdmFyIHNuYWtlQ2FzZSA9IHJlcXVpcmUoJ2xvZGFzaC5zbmFrZWNhc2UnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIHZhciBuZXdLZXkgPSBzbmFrZUNhc2Uoa2V5KTtcbiAgICAgICAgZm9ybWF0dGVkW25ld0tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZVByZXZpZXcubW9kdWxlLnNjc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFydGljbGU6IHtcclxuICAgIGltYWdlTmFtZTogc3RyaW5nXHJcbiAgICB1cmw6IHN0cmluZ1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IHsgYnVpbGRVcmwgfSBmcm9tICdjbG91ZGluYXJ5LWJ1aWxkLXVybCdcclxuXHJcbmNvbnN0IEFydGljbGVQcmV2aWV3OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBpbWFnZU5hbWUsIHVybCB9ID0gcHJvcHMuYXJ0aWNsZVxyXG5cclxuICBjb25zdCBpbWFnZVVybCA9IGJ1aWxkVXJsKGltYWdlTmFtZSwge1xyXG4gICAgY2xvdWQ6IHtcclxuICAgICAgY2xvdWROYW1lOiAnZHBraThlenBsJyxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgc3JjPXtpbWFnZVVybH0gLz5cclxuXHJcbiAgICAgIDxhIGhyZWY9e3VybH0+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQcmV2aWV3XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FydGljbGVHcmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb2xzOiBudW1iZXJcclxuICByb3dzOiBudW1iZXJcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGVHcmlkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHByb3BzLmNvbHMsXHJcbiAgICBncmlkVGVtcGxhdGVSb3dzOiBwcm9wcy5yb3dzLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtZ3JpZCddfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVHcmlkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluQXJ0aWNsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldydcclxuXHJcbmltcG9ydCBBcnRpY2xlR3JpZCBmcm9tICcuLi9BcnRpY2xlR3JpZCdcclxuXHJcbmNvbnN0IGFydGljbGVzID0gW1xyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgTWFpbkFydGljbGVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ21haW4tYXJ0aWNsZXMnXX0+XHJcbiAgICAgIDxBcnRpY2xlR3JpZCBjb2xzPXsyfSByb3dzPXsxfT5cclxuICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1swXX0gLz5cclxuXHJcbiAgICAgIDwvQXJ0aWNsZUdyaWQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG57LyogPEFydGljbGVHcmlkIGNvbHM9ezJ9IHJvd3M9ezJ9PlxyXG48QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1sxXX0gLz5cclxuPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZXNbMl19IC8+XHJcbjxBcnRpY2xlIGFydGljbGU9e2FydGljbGVzWzNdfSAvPlxyXG48QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1s0XX0gLz5cclxuPC9BcnRpY2xlR3JpZD4gKi99XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQXJ0aWNsZXNcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IEFtcFN0YXRlQ29udGV4dD0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7ZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQ9QW1wU3RhdGVDb250ZXh0O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWU9J0FtcFN0YXRlQ29udGV4dCc7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0luQW1wTW9kZT1pc0luQW1wTW9kZTtleHBvcnRzLnVzZUFtcD11c2VBbXA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9hbXBDb250ZXh0PXJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gaXNJbkFtcE1vZGUoe2FtcEZpcnN0PWZhbHNlLGh5YnJpZD1mYWxzZSxoYXNRdWVyeT1mYWxzZX09e30pe3JldHVybiBhbXBGaXJzdHx8aHlicmlkJiZoYXNRdWVyeTt9ZnVuY3Rpb24gdXNlQW1wKCl7Ly8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xucmV0dXJuIGlzSW5BbXBNb2RlKF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuSGVhZE1hbmFnZXJDb250ZXh0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dD0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7ZXhwb3J0cy5IZWFkTWFuYWdlckNvbnRleHQ9SGVhZE1hbmFnZXJDb250ZXh0O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWU9J0hlYWRNYW5hZ2VyQ29udGV4dCc7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0SGVhZD1kZWZhdWx0SGVhZDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NpZGVFZmZlY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7dmFyIF9hbXBDb250ZXh0PXJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO3ZhciBfaGVhZE1hbmFnZXJDb250ZXh0PXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO3ZhciBfYW1wPXJlcXVpcmUoXCIuL2FtcFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9ZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlPWZhbHNlKXtjb25zdCBoZWFkPVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7Y2hhclNldDpcInV0Zi04XCJ9KV07aWYoIWluQW1wTW9kZSl7aGVhZC5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoXCJ9KSk7fXJldHVybiBoZWFkO31mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KGxpc3QsY2hpbGQpey8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG5pZih0eXBlb2YgY2hpbGQ9PT0nc3RyaW5nJ3x8dHlwZW9mIGNoaWxkPT09J251bWJlcicpe3JldHVybiBsaXN0O30vLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG5pZihjaGlsZC50eXBlPT09X3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpe3JldHVybiBsaXN0LmNvbmNhdChfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoKGZyYWdtZW50TGlzdCxmcmFnbWVudENoaWxkKT0+e2lmKHR5cGVvZiBmcmFnbWVudENoaWxkPT09J3N0cmluZyd8fHR5cGVvZiBmcmFnbWVudENoaWxkPT09J251bWJlcicpe3JldHVybiBmcmFnbWVudExpc3Q7fXJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpO30sW10pKTt9cmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKTt9Y29uc3QgTUVUQVRZUEVTPVsnbmFtZScsJ2h0dHBFcXVpdicsJ2NoYXJTZXQnLCdpdGVtUHJvcCddOy8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL2Z1bmN0aW9uIHVuaXF1ZSgpe2NvbnN0IGtleXM9bmV3IFNldCgpO2NvbnN0IHRhZ3M9bmV3IFNldCgpO2NvbnN0IG1ldGFUeXBlcz1uZXcgU2V0KCk7Y29uc3QgbWV0YUNhdGVnb3JpZXM9e307cmV0dXJuIGg9PntsZXQgaXNVbmlxdWU9dHJ1ZTtsZXQgaGFzS2V5PWZhbHNlO2lmKGgua2V5JiZ0eXBlb2YgaC5rZXkhPT0nbnVtYmVyJyYmaC5rZXkuaW5kZXhPZignJCcpPjApe2hhc0tleT10cnVlO2NvbnN0IGtleT1oLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykrMSk7aWYoa2V5cy5oYXMoa2V5KSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7a2V5cy5hZGQoa2V5KTt9fS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbnN3aXRjaChoLnR5cGUpe2Nhc2UndGl0bGUnOmNhc2UnYmFzZSc6aWYodGFncy5oYXMoaC50eXBlKSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7dGFncy5hZGQoaC50eXBlKTt9YnJlYWs7Y2FzZSdtZXRhJzpmb3IobGV0IGk9MCxsZW49TUVUQVRZUEVTLmxlbmd0aDtpPGxlbjtpKyspe2NvbnN0IG1ldGF0eXBlPU1FVEFUWVBFU1tpXTtpZighaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpY29udGludWU7aWYobWV0YXR5cGU9PT0nY2hhclNldCcpe2lmKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXttZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTt9fWVsc2V7Y29uc3QgY2F0ZWdvcnk9aC5wcm9wc1ttZXRhdHlwZV07Y29uc3QgY2F0ZWdvcmllcz1tZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV18fG5ldyBTZXQoKTtpZigobWV0YXR5cGUhPT0nbmFtZSd8fCFoYXNLZXkpJiZjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle2NhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTttZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV09Y2F0ZWdvcmllczt9fX1icmVhazt9cmV0dXJuIGlzVW5pcXVlO307fS8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKGhlYWRFbGVtZW50cyxwcm9wcyl7cmV0dXJuIGhlYWRFbGVtZW50cy5yZWR1Y2UoKGxpc3QsaGVhZEVsZW1lbnQpPT57Y29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuKTtyZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbik7fSxbXSkucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSkuZmlsdGVyKHVuaXF1ZSgpKS5yZXZlcnNlKCkubWFwKChjLGkpPT57Y29uc3Qga2V5PWMua2V5fHxpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyYmcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTJiYhcHJvcHMuaW5BbXBNb2RlKXtpZihjLnR5cGU9PT0nbGluaycmJmMucHJvcHNbJ2hyZWYnXSYmLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG5bJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJywnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJ10uc29tZSh1cmw9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpKXtjb25zdCBuZXdQcm9wcz17Li4uKGMucHJvcHN8fHt9KX07bmV3UHJvcHNbJ2RhdGEtaHJlZiddPW5ld1Byb3BzWydocmVmJ107bmV3UHJvcHNbJ2hyZWYnXT11bmRlZmluZWQ7Ly8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xubmV3UHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ109dHJ1ZTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsbmV3UHJvcHMpO319cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLHtrZXl9KTt9KTt9LyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL2Z1bmN0aW9uIEhlYWQoe2NoaWxkcmVufSl7Y29uc3QgYW1wU3RhdGU9KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCk7Y29uc3QgaGVhZE1hbmFnZXI9KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2lkZUVmZmVjdC5kZWZhdWx0LHtyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTpyZWR1Y2VDb21wb25lbnRzLGhlYWRNYW5hZ2VyOmhlYWRNYW5hZ2VyLGluQW1wTW9kZTooMCxfYW1wLmlzSW5BbXBNb2RlKShhbXBTdGF0ZSl9LGNoaWxkcmVuKTt9dmFyIF9kZWZhdWx0PUhlYWQ7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO2NvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJztjbGFzcyBfZGVmYXVsdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLl9oYXNIZWFkTWFuYWdlcj12b2lkIDA7dGhpcy5lbWl0Q2hhbmdlPSgpPT57aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZCh0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLHRoaXMucHJvcHMpKTt9fTt0aGlzLl9oYXNIZWFkTWFuYWdlcj10aGlzLnByb3BzLmhlYWRNYW5hZ2VyJiZ0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXM7aWYoaXNTZXJ2ZXImJnRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO3RoaXMuZW1pdENoYW5nZSgpO319Y29tcG9uZW50RGlkTW91bnQoKXtpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTt9dGhpcy5lbWl0Q2hhbmdlKCk7fWNvbXBvbmVudERpZFVwZGF0ZSgpe3RoaXMuZW1pdENoYW5nZSgpO31jb21wb25lbnRXaWxsVW5tb3VudCgpe2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpO310aGlzLmVtaXRDaGFuZ2UoKTt9cmVuZGVyKCl7cmV0dXJuIG51bGw7fX1leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWRlLWVmZmVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnRvQmFzZTY0PXRvQmFzZTY0Oy8qKlxuICogSXNvbW9ycGhpYyBiYXNlNjQgdGhhdCB3b3JrcyBvbiB0aGUgc2VydmVyIGFuZCBjbGllbnRcbiAqL2Z1bmN0aW9uIHRvQmFzZTY0KHN0cil7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtyZXR1cm4gQnVmZmVyLmZyb20oc3RyKS50b1N0cmluZygnYmFzZTY0Jyk7fWVsc2V7cmV0dXJuIHdpbmRvdy5idG9hKHN0cik7fX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvLWJhc2UtNjQuanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0IHsgZmFTZWFyY2gsIGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmltcG9ydCBNYWluQXJ0aWNsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW5BcnRpY2xlcy9NYWluQXJ0aWNsZXMnXHJcblxyXG5saWJyYXJ5LmFkZChmYXMsIGZhU2VhcmNoKVxyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNYWluQXJ0aWNsZXMvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsImV4cG9ydCB2YXIgQXJpdGhtZXRpY0V4cHJlc3Npb24gPSB7XG4gICAgXCI9XCI6ICdlcScsXG4gICAgXCIhPVwiOiAnbmUnLFxuICAgIFwiPFwiOiAnbHQnLFxuICAgIFwiPlwiOiAnZ3QnLFxuICAgIFwiPD1cIjogJ2x0ZScsXG4gICAgXCI+PVwiOiAnZ3RlJyxcbiAgICBcIiYmXCI6ICdhbmQnLFxuICAgIFwifHxcIjogJ29yJyxcbiAgICBcIipcIjogXCJtdWxcIixcbiAgICBcIi9cIjogXCJkaXZcIixcbiAgICBcIitcIjogXCJhZGRcIixcbiAgICBcIi1cIjogXCJzdWJcIixcbiAgICBcIl5cIjogXCJwb3dcIixcbn07XG5leHBvcnQgdmFyIFByZWRlZmluZWRWYXJpYWJsZXMgPSB7XG4gICAgd2lkdGg6ICd3JyxcbiAgICBoZWlnaHQ6ICdoJyxcbiAgICB4OiAneCcsXG4gICAgeTogJ3knLFxuICAgIHF1YWxpdHk6ICdxJyxcbiAgICBpZjogJ2lmJyxcbiAgICBhc3BlY3RSYXRpbzogJ2FyJyxcbiAgICByb3RhdGU6ICdhJyxcbiAgICBvcGFjaXR5OiAnbycsXG4gICAgcmFkaXVzOiAncicsXG4gICAgZHByOiAnZHByJyxcbiAgICBlZmZlY3Q6ICdlJyxcbiAgICBib3JkZXI6ICdibycsXG4gICAgY3VycmVudFBhZ2U6ICdjcCcsXG4gICAgcHJldmlldzogJ3ByZXZpZXc6ZHVyYXRpb24nLFxuICAgIGR1cmF0aW9uOiAnZHUnLFxuICAgIGZhY2VDb3VudDogJ2ZjJyxcbiAgICBpbml0aWFsQXNwZWN0UmF0aW86ICdpYXInLFxuICAgIGluaXRpYWxEdXJhdGlvbjogJ2lkdScsXG4gICAgaW5pdGlhbEhlaWdodDogJ2loJyxcbiAgICBpbml0aWFsV2lkdGg6ICdpdycsXG4gICAgcGFnZUNvdW50OiAncGMnLFxuICAgIHBhZ2VYOiAncHgnLFxuICAgIHBhZ2VZOiAncHknLFxuICAgIHRhZ3M6ICd0YWdzJyxcbn07XG5leHBvcnQgdmFyIFByZWZpeCA9ICckJztcbmV4cG9ydCB2YXIgUHJlRGVmaW5lZFBhdHRlcm5zID0gXCIoXCIgKyBPYmplY3Qua2V5cyhQcmVkZWZpbmVkVmFyaWFibGVzKS5qb2luKCd8JykgKyBcIilcIjtcbmV4cG9ydCB2YXIgQWNjZXB0TnVtYmVyaWNWYXJzID0gWydxdWFsaXR5JywgJ2lmJywgJ3JvdGF0ZScsICd6b29tJywgJ29wYWNpdHknLCAncmFkaXVzJywgJ2VmZmVjdCcsICdkcHInXTtcbiIsImV4cG9ydCB2YXIgQ29uZGl0aW9uYWxQYXJhbXMgPSB7XG4gICAgd2lkdGg6ICd3JyxcbiAgICBpbml0aWFsV2lkdGg6ICdpdycsXG4gICAgaGVpZ2h0OiAnaCcsXG4gICAgaW5pdGlhbEhlaWdodDogJ2loJyxcbiAgICBhc3BlY3RSYXRpbzogJ2FyJyxcbiAgICBpbnRpYWxBc3BlY3RSYXRpbzogJ2lhcicsXG4gICAgY29udGV4dDogJ2N0eCcsXG4gICAgbWV0YWRhdGE6ICdtZCcsXG4gICAgdGFnczogJ3RhZ3MnLFxuICAgIHRyaW1tZWRBc3BlY3RSYXRpbzogJ3RhcicsXG4gICAgY3VycmVudFBhZ2U6ICdjcCcsXG4gICAgZmFjZUNvdW50OiAnZmMnLFxuICAgIHBhZ2VDb3VudDogJ3BjJyxcbiAgICBwYWdlWE9mZnNldDogJ3B4JyxcbiAgICBwYWdlWU9mZnNldDogJ3B5JyxcbiAgICBpbml0aWFsRGVuc2l0eTogJ2lkbicsXG4gICAgaWxsdXN0cmF0aW9uOiAnaWxzJyxcbiAgICBwYWdlTmFtZXM6ICdwZ25hbWVzJ1xufTtcbiIsImV4cG9ydCB2YXIgU0VPX1RZUEVTID0ge1xuICAgIFwiaW1hZ2UvdXBsb2FkXCI6IFwiaW1hZ2VzXCIsXG4gICAgXCJpbWFnZS9wcml2YXRlXCI6IFwicHJpdmF0ZV9pbWFnZXNcIixcbiAgICBcImltYWdlL2F1dGhlbnRpY2F0ZWRcIjogXCJhdXRoZW50aWNhdGVkX2ltYWdlc1wiLFxuICAgIFwicmF3L3VwbG9hZFwiOiBcImZpbGVzXCIsXG4gICAgXCJ2aWRlby91cGxvYWRcIjogXCJ2aWRlb3NcIlxufTtcbmV4cG9ydCB2YXIgVFJBTlNGT1JNRVJTID0ge1xuICAgIGFuZ2xlOiAnYScsXG4gICAgcm90YXRlOiAnYScsXG4gICAgYmFja2dyb3VuZDogJ2InLFxuICAgIGNvbG9yOiAnY28nLFxuICAgIGNvbG9yU3BhY2U6ICdjcycsXG4gICAgY3VzdG9tRnVuY3Rpb246ICdmbicsXG4gICAgZGVmYXVsdEltYWdlOiAnZCcsXG4gICAgZGVuc2l0eTogJ2RuJyxcbiAgICBkcHI6ICdkcHInLFxuICAgIG9wYWNpdHk6ICdvJyxcbiAgICBmb3JtYXQ6ICdmJyxcbiAgICBncmF2aXR5OiAnZycsXG4gICAgb3ZlcmxheTogJ2wnLFxuICAgIHBhZ2U6ICdwZycsXG4gICAgcHJlZml4OiAncCcsXG4gICAgcXVhbGl0eTogJ3EnLFxuICAgIHJhZGl1czogJ3InLFxuICAgIGJpdFJhdGU6ICdicicsXG4gICAga2V5ZnJhbWVJbnRlcnZhbDogJ2tpJyxcbiAgICBhdWRpb0NvZGVjOiAnYWMnLFxuICAgIGF1ZGlvRnJlcXVlbmN5OiAnYWYnLFxuICAgIGRlbGF5OiAnZGwnLFxuICAgIG9jcjogJ29jcicsXG4gICAgc3RyZWFtaW5nUHJvZmlsZTogJ3NwJyxcbiAgICB0cmFuc2Zvcm1hdGlvbjogJ3QnLFxuICAgIHVuZGVybGF5OiAndScsXG4gICAgdmlkZW9Db2RlYzogJ3ZjJyxcbiAgICB2aWRlb1NhbXBsaW5nOiAndnMnLFxuICAgIHpvb206ICd6J1xufTtcbiIsImV4cG9ydCB2YXIgUHJlZml4ID0gJyQnO1xuZXhwb3J0IHZhciBTdHJpbmdCb3VuZCA9ICchJztcbmV4cG9ydCB2YXIgVmFsdWVBc3NpZ25hYmxlID0ge1xuICAgIGNvbnRleHQ6IFwiY3R4XCIsXG4gICAgc3RydWN0dXJlTWV0YWRhdGE6IFwibWRcIlxufTtcbmV4cG9ydCB2YXIgRm9ybWF0cyA9IHtcbiAgICBpbnRlZ2VyOiAndG9faScsXG4gICAgZmxvYXQ6ICd0b19mJ1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBSRVNPVVJDRV9UWVBFUyB9IGZyb20gJ0BjbGQtYXBpcy91dGlscyc7XG5pbXBvcnQgeyB1cmwsIGV4dHJhY3RQdWJsaWNJZCB9IGZyb20gJy4vdXJsJztcbmltcG9ydCB7IHRyYW5zZm9ybSwgdG9UcmFuc2Zvcm1hdGlvblN0ciB9IGZyb20gJy4vdHJhbnNmb3JtZXJzJztcbnZhciBjb25maWcgPSB7fTtcbmV4cG9ydCB2YXIgZ2V0Q29uZmlnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZShjb25maWcpOyB9O1xuZXhwb3J0IHZhciBzZXRDb25maWcgPSBmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbmZpZyksIG9wdGlvbnMpOyB9O1xuZXhwb3J0IHZhciBidWlsZFVybCA9IGZ1bmN0aW9uIChwdWJsaWNJZCwgX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5jbG91ZCwgY2xvdWQgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2MgPSBfYS50cmFuc2Zvcm1hdGlvbnMsIHRyYW5zZm9ybWF0aW9ucyA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jO1xuICAgIHZhciBjbG91ZENvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb25maWcpLCBjbG91ZCk7XG4gICAgcmV0dXJuIHVybChwdWJsaWNJZCwgY2xvdWRDb25maWcsIHRyYW5zZm9ybWF0aW9ucyk7XG59O1xuZXhwb3J0IHZhciBidWlsZEltYWdlVXJsID0gZnVuY3Rpb24gKHB1YmxpY0lkLCBfYSkge1xuICAgIHZhciBfYiA9IF9hLmNsb3VkLCBjbG91ZCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLnRyYW5zZm9ybWF0aW9ucywgdHJhbnNmb3JtYXRpb25zID0gX2MgPT09IHZvaWQgMCA/IHt9IDogX2M7XG4gICAgcmV0dXJuIGJ1aWxkVXJsKHB1YmxpY0lkLCB7XG4gICAgICAgIGNsb3VkOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2xvdWQpLCB7IHJlc291cmNlVHlwZTogUkVTT1VSQ0VfVFlQRVMuSU1BR0UgfSksXG4gICAgICAgIHRyYW5zZm9ybWF0aW9uczogdHJhbnNmb3JtYXRpb25zXG4gICAgfSk7XG59O1xuZXhwb3J0IHZhciBidWlsZFZpZGVvVXJsID0gZnVuY3Rpb24gKHB1YmxpY0lkLCBfYSkge1xuICAgIHZhciBfYiA9IF9hLmNsb3VkLCBjbG91ZCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLnRyYW5zZm9ybWF0aW9ucywgdHJhbnNmb3JtYXRpb25zID0gX2MgPT09IHZvaWQgMCA/IHt9IDogX2M7XG4gICAgcmV0dXJuIGJ1aWxkVXJsKHB1YmxpY0lkLCB7XG4gICAgICAgIGNsb3VkOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2xvdWQpLCB7IHJlc291cmNlVHlwZTogUkVTT1VSQ0VfVFlQRVMuVklERU8gfSksXG4gICAgICAgIHRyYW5zZm9ybWF0aW9uczogdHJhbnNmb3JtYXRpb25zXG4gICAgfSk7XG59O1xudmFyIFRyYW5zZm9ybWVyID0geyB0cmFuc2Zvcm06IHRyYW5zZm9ybSwgdG9TdHJpbmc6IHRvVHJhbnNmb3JtYXRpb25TdHIgfTtcbmV4cG9ydCB7IGV4dHJhY3RQdWJsaWNJZCwgVHJhbnNmb3JtZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkVXJsO1xuIiwiaW1wb3J0IHsgY29udmVydCB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgdmFyIGJvcmRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLnR5cGUsIHR5cGUgPSBfYiA9PT0gdm9pZCAwID8gJ3NvbGlkJyA6IF9iLCBfYyA9IF9hLmNvbG9yLCBjb2xvciA9IF9jID09PSB2b2lkIDAgPyAnYmxhY2snIDogX2MsIHdpZHRoID0gX2Eud2lkdGg7XG4gICAgaWYgKCF3aWR0aClcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGlzTmFOKHdpZHRoKSA/IGNvbnZlcnQod2lkdGgpIDogd2lkdGggKyBcInB4XCI7XG4gICAgcmV0dXJuIFwiYm9fXCIgKyBmb3JtYXR0ZWRWYWx1ZSArIFwiX1wiICsgdHlwZSArIFwiX1wiICsgY29sb3I7XG59O1xuIiwiaW1wb3J0IHRyYW5zZm9ybSwgeyB0b1RyYW5zZm9ybWF0aW9uU3RyIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IENvbmRpdGlvbk9wZXJhdG9ycyB9IGZyb20gXCJAY2xkLWFwaXMvdXRpbHNcIjtcbmltcG9ydCB7IENvbmRpdGlvbmFsUGFyYW1zIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyB0b1N0cmluZyB9IGZyb20gXCIuLi91dGlsc1wiO1xuZXhwb3J0IHZhciBjb21wdXRlQ29uZGl0aW9uID0gZnVuY3Rpb24gKGNvbmRpdGlvbk9iaikge1xuICAgIHZhciBleHByZXNzaW9uID0gY29uZGl0aW9uT2JqLmV4cHJlc3Npb24gPyB0b1N0cmluZyhjb25kaXRpb25PYmouZXhwcmVzc2lvbi5tYXAoZnVuY3Rpb24gKGV4cCkgeyByZXR1cm4gY29tcHV0ZUNvbmRpdGlvbkV4cHJlc3Npb24oZXhwKTsgfSksICdfYW5kXycpIDogJyc7XG4gICAgdmFyIHRyYW5zZm9ybWF0aW9ucyA9IGNvbmRpdGlvbk9iai50cmFuc2Zvcm1hdGlvbnMubWFwKGZ1bmN0aW9uICh0cmFuc2Zvcm1hdGlvbikgeyByZXR1cm4gdG9UcmFuc2Zvcm1hdGlvblN0cih0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb24pKTsgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXhwcmVzc2lvbjogZXhwcmVzc2lvbixcbiAgICAgICAgdHJhbnNmb3JtYXRpb25zOiB0b1N0cmluZyh0cmFuc2Zvcm1hdGlvbnMsICcvJylcbiAgICB9O1xufTtcbmV4cG9ydCB2YXIgbWFwQ2hhcmFjdGVyaXN0aWMgPSBmdW5jdGlvbiAoZXhwcmVzc2lvbikgeyByZXR1cm4gQ29uZGl0aW9uYWxQYXJhbXNbZXhwcmVzc2lvbl0gfHwgZXhwcmVzc2lvbjsgfTtcbmV4cG9ydCB2YXIgY29tcHV0ZUNvbmRpdGlvbkV4cHJlc3Npb24gPSBmdW5jdGlvbiAoZXhwcmVzc2lvbikge1xuICAgIHZhciBjaGFyYWN0ZXJpc3RpYyA9IEFycmF5LmlzQXJyYXkoZXhwcmVzc2lvbi5jaGFyYWN0ZXJpc3RpYykgPyB0b1N0cmluZyhleHByZXNzaW9uLmNoYXJhY3RlcmlzdGljLm1hcChtYXBDaGFyYWN0ZXJpc3RpYykpIDogbWFwQ2hhcmFjdGVyaXN0aWMoZXhwcmVzc2lvbi5jaGFyYWN0ZXJpc3RpYyk7XG4gICAgdmFyIG9wZXJhdG9yID0gQ29uZGl0aW9uT3BlcmF0b3JzW2V4cHJlc3Npb24ub3BlcmF0b3JdO1xuICAgIHZhciB2YWx1ZSA9IGlzTmFOKGV4cHJlc3Npb24udmFsdWUpID8gXCIhXCIgKyBleHByZXNzaW9uLnZhbHVlICsgXCIhXCIgOiBleHByZXNzaW9uLnZhbHVlO1xuICAgIHJldHVybiB0b1N0cmluZyhbY2hhcmFjdGVyaXN0aWMsIG9wZXJhdG9yLCB2YWx1ZV0sICdfJyk7XG59O1xuZXhwb3J0IHZhciBjb25kaXRpb24gPSBmdW5jdGlvbiAoY29uZGl0aW9uT2JqKSB7XG4gICAgaWYgKCFjb25kaXRpb25PYmogfHwgIWNvbmRpdGlvbk9iai5pZiB8fCAhY29uZGl0aW9uT2JqLmlmLmV4cHJlc3Npb24pXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgaWZDb25kaXRpb24gPSBjb21wdXRlQ29uZGl0aW9uKGNvbmRpdGlvbk9iai5pZik7XG4gICAgdmFyIGVsc2VDb25kaXRpb24gPSBjb25kaXRpb25PYmouZWxzZSA/IGNvbXB1dGVDb25kaXRpb24oY29uZGl0aW9uT2JqLmVsc2UpIDogbnVsbDtcbiAgICB2YXIgZm9ybWF0dGVkSWYgPSB0b1N0cmluZyhbXCJpZl9cIiArIGlmQ29uZGl0aW9uLmV4cHJlc3Npb24sIGlmQ29uZGl0aW9uLnRyYW5zZm9ybWF0aW9uc10sICcvJyk7XG4gICAgdmFyIGZvcm1hdHRlZEVsc2UgPSBlbHNlQ29uZGl0aW9uID8gdG9TdHJpbmcoWydpZl9lbHNlJywgZWxzZUNvbmRpdGlvbi50cmFuc2Zvcm1hdGlvbnNdLCAnLycpIDogJyc7XG4gICAgcmV0dXJuIFt0b1N0cmluZyhbZm9ybWF0dGVkSWYsIGZvcm1hdHRlZEVsc2UsICdpZl9lbmQnXSwgJy8nKV07XG59O1xuIiwiaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgdmFyIGVmZmVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgaXNTdHJpbmcgPSB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbiAgICBpZiAoIW9iaiB8fCAoIWlzU3RyaW5nICYmICFvYmoubmFtZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBpZiAoaXNTdHJpbmcgfHwgIW9iai52YWx1ZSlcbiAgICAgICAgcmV0dXJuIFwiZV9cIiArIChvYmoubmFtZSB8fCBvYmopO1xuICAgIHZhciB2YWx1ZSA9IEFycmF5LmlzQXJyYXkob2JqLnZhbHVlKSA/IG9iai52YWx1ZS5qb2luKCc6JykgOiBvYmoudmFsdWU7XG4gICAgdmFyIGVmZmVjdFZhbHVlID0gdG9TdHJpbmcoW29iai5uYW1lLCB2YWx1ZV0pO1xuICAgIHJldHVybiBcImVfXCIgKyBlZmZlY3RWYWx1ZTtcbn07XG4iLCJpbXBvcnQgeyBBcml0aG1ldGljRXhwcmVzc2lvbiwgUHJlRGVmaW5lZFBhdHRlcm5zLCBQcmVkZWZpbmVkVmFyaWFibGVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FyaXRobWV0aWMnO1xuaW1wb3J0IHsgUHJlZml4IH0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhcmlhYmxlJztcbnZhciBPUEVSQVRPUlNfUkVHRVggPSBcIigoXFxcXHxcXFxcfHw+PXw8PXwmJnwhPXw+fD18PHwvfC18XFxcXCt8XFxcXCp8XFxcXF4pKD89WyBfXSkpXCI7XG52YXIgbWFwQXJpdGhtZXRpY0V4cHJlc3Npb24gPSBmdW5jdGlvbiAob3JnRXhwcmVzc2lvbikge1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoT1BFUkFUT1JTX1JFR0VYLCAnZycpO1xuICAgIHJldHVybiBvcmdFeHByZXNzaW9uLnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkgeyByZXR1cm4gQXJpdGhtZXRpY0V4cHJlc3Npb25bbWF0Y2hdOyB9KTtcbn07XG52YXIgbWFwUHJlZGVmaW5lZFZhcmlhYmxlcyA9IGZ1bmN0aW9uIChvcmdFeHByZXNzaW9uKSB7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChQcmVEZWZpbmVkUGF0dGVybnMsICdnJyk7XG4gICAgcmV0dXJuIG9yZ0V4cHJlc3Npb24ucmVwbGFjZShyZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwLCBpbmRleCkgeyByZXR1cm4gb3JnRXhwcmVzc2lvbltpbmRleCAtIDFdID09PSBQcmVmaXggPyBtYXRjaCA6IFByZWRlZmluZWRWYXJpYWJsZXNbbWF0Y2hdOyB9KTtcbn07XG5leHBvcnQgdmFyIGZvcm1hdFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBpc05hTih2YWx1ZSkgPyBjb252ZXJ0KHZhbHVlKSA6IHZhbHVlOyB9O1xuZXhwb3J0IHZhciBjb252ZXJ0ID0gZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICBpZiAoIWV4cHJlc3Npb24pXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgbWFwcGVkQXJpdGhtZXRpYyA9IG1hcEFyaXRobWV0aWNFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgIHZhciBjb252ZXJ0ZWQgPSBtYXBQcmVkZWZpbmVkVmFyaWFibGVzKG1hcHBlZEFyaXRobWV0aWMpO1xuICAgIHJldHVybiBjb252ZXJ0ZWQucmVwbGFjZSgvWyBfXSsvZywgJ18nKTtcbn07XG5leHBvcnQgdmFyIGhhc0FyaXRobWV0aWNFeHByZXNzaW9uID0gZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKE9QRVJBVE9SU19SRUdFWCwgJ2cnKTtcbiAgICByZXR1cm4gcmVnZXgudGVzdChleHByZXNzaW9uKTtcbn07XG4iLCJleHBvcnQgdmFyIGZsYWdzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgZmxhZ1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUuam9pbignOicpO1xuICAgIHJldHVybiBcImZsX1wiICsgZmxhZ1ZhbHVlO1xufTtcbiIsImltcG9ydCB7IFRSQU5TRk9STUVSUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBY2NlcHROdW1iZXJpY1ZhcnMgfSBmcm9tICcuLi9jb25zdGFudHMvYXJpdGhtZXRpYyc7XG5pbXBvcnQgeyBjb25kaXRpb24gfSBmcm9tICcuL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBlZmZlY3QgfSBmcm9tICcuL2VmZmVjdCc7XG5pbXBvcnQgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5pbXBvcnQgeyBmbGFncyB9IGZyb20gJy4vZmxhZ3MnO1xuaW1wb3J0IHsgcmF3VHJhbnNmb3JtYXRpb24gfSBmcm9tICcuL3Jhd1RyYW5zZm9ybWF0aW9uJztcbmltcG9ydCB7IHZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCB7IGZwcyB9IGZyb20gJy4vdmlkZW8vZnBzJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4vdmlkZW8vb2Zmc2V0JztcbmltcG9ydCB7IHJlc2l6ZSB9IGZyb20gJy4vcmVzaXplJztcbmltcG9ydCB7IGJvcmRlciB9IGZyb20gJy4vYm9yZGVyJztcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbic7XG5leHBvcnQgdmFyIGdldFJlc2l6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIGhhc1Jlc2l6ZSA9IG9wdGlvbnMucmVzaXplIHx8IG9wdGlvbnMud2lkdGggfHwgb3B0aW9ucy5oZWlnaHQgfHwgb3B0aW9ucy5hc3BlY3RSYXRpbztcbiAgICBpZiAoIWhhc1Jlc2l6ZSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiByZXNpemUob3B0aW9ucy5yZXNpemUgfHwgeyB3aWR0aDogb3B0aW9ucy53aWR0aCwgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCwgdHlwZTogb3B0aW9ucy5jcm9wLCBhc3BlY3RSYXRpbzogb3B0aW9ucy5hc3BlY3RSYXRpbyB9KTtcbn07XG5leHBvcnQgdmFyIGdldEJvcmRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLmJvcmRlcilcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBib3JkZXJNb2RpZmljYXRpb24gPSAodHlwZW9mIG9wdGlvbnMuYm9yZGVyID09PSAnc3RyaW5nJykgPyBcImJvX1wiICsgb3B0aW9ucy5ib3JkZXIgOiBib3JkZXIob3B0aW9ucy5ib3JkZXIpO1xuICAgIHJldHVybiBib3JkZXJNb2RpZmljYXRpb247XG59O1xuZXhwb3J0IHZhciBnZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnggJiYgIW9wdGlvbnMueSAmJiAhb3B0aW9ucy5wb3NpdGlvbilcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBwb3NpdGlvbihvcHRpb25zLnBvc2l0aW9uIHx8IHsgeDogb3B0aW9ucy54LCB5OiBvcHRpb25zLnkgfSk7XG59O1xuZXhwb3J0IHZhciBnZXRUcmFuc2Zvcm1hdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQucHVzaCh2YXJpYWJsZXMob3B0aW9ucy52YXJpYWJsZXMpKTtcbiAgICByZXN1bHQucHVzaChnZXRSZXNpemUob3B0aW9ucykpO1xuICAgIHJlc3VsdC5wdXNoKGdldEJvcmRlcihvcHRpb25zKSk7XG4gICAgcmVzdWx0LnB1c2goZ2V0UG9zaXRpb24ob3B0aW9ucykpO1xuICAgIHJlc3VsdC5wdXNoKGZwcyhvcHRpb25zLmZwcykpO1xuICAgIHJlc3VsdC5wdXNoKG9mZnNldChvcHRpb25zLm9mZnNldCkpO1xuICAgIGZvciAodmFyIG1vZGlmaWVyIGluIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1ttb2RpZmllcl07XG4gICAgICAgIHZhciBtYXBwaW5nID0gVFJBTlNGT1JNRVJTW21vZGlmaWVyXTtcbiAgICAgICAgaWYgKCFtYXBwaW5nIHx8ICF2YWx1ZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB2YXIgaXNBY2NlcHRlZE51bWJlcmljID0gQWNjZXB0TnVtYmVyaWNWYXJzLmluY2x1ZGVzKG1vZGlmaWVyKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobWFwcGluZyArIFwiX1wiICsgKGlzQWNjZXB0ZWROdW1iZXJpYyA/IGZvcm1hdFZhbHVlKHZhbHVlKSA6IHZhbHVlKSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKGVmZmVjdChvcHRpb25zLmVmZmVjdCkpO1xuICAgIHJlc3VsdC5wdXNoKGZsYWdzKG9wdGlvbnMuZmxhZ3MpKTtcbiAgICByZXN1bHQucHVzaChyYXdUcmFuc2Zvcm1hdGlvbihvcHRpb25zLnJhd1RyYW5zZm9ybWF0aW9uKSk7XG4gICAgcmVzdWx0LnB1c2goY29uZGl0aW9uKG9wdGlvbnMuY29uZGl0aW9uKSk7XG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoQm9vbGVhbik7XG59O1xuZXhwb3J0IHZhciB0cmFuc2Zvcm0gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB0cmFuc2Zvcm1hdGlvbnMgPSBnZXRUcmFuc2Zvcm1hdGlvbnMob3B0aW9ucyk7XG4gICAgdmFyIGNoYWluZWRUcmFuc2Zvcm1hdGlvbnMgPSBvcHRpb25zLnRyYW5zZm9ybWF0aW9uIHx8IG9wdGlvbnMuY2hhaW5pbmc7XG4gICAgaWYgKGNoYWluZWRUcmFuc2Zvcm1hdGlvbnMgJiYgQXJyYXkuaXNBcnJheShjaGFpbmVkVHJhbnNmb3JtYXRpb25zKSkge1xuICAgICAgICBjaGFpbmVkVHJhbnNmb3JtYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGNoYWluZWQpIHtcbiAgICAgICAgICAgIHZhciBjaGFpbmVkVHJhbnNmb3JtYXRpb24gPSBnZXRUcmFuc2Zvcm1hdGlvbnMoY2hhaW5lZCk7XG4gICAgICAgICAgICBjaGFpbmVkVHJhbnNmb3JtYXRpb24ubGVuZ3RoID4gMCAmJiB0cmFuc2Zvcm1hdGlvbnMucHVzaChjaGFpbmVkVHJhbnNmb3JtYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zZm9ybWF0aW9ucy5maWx0ZXIoQm9vbGVhbik7XG59O1xuZXhwb3J0IHZhciB0b1RyYW5zZm9ybWF0aW9uU3RyID0gZnVuY3Rpb24gKHRyYW5zZm9ybWF0aW9ucykgeyByZXR1cm4gdHJhbnNmb3JtYXRpb25zLnJlZHVjZShmdW5jdGlvbiAoc3RyLCB0cmFuc2Zvcm1hdGlvbikge1xuICAgIHZhciBpc0NoYWluZWQgPSBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWF0aW9uKTtcbiAgICB2YXIgc2VwYXJhdGlvbiA9IGlzQ2hhaW5lZCA/ICcvJyA6ICcsJztcbiAgICByZXR1cm4gXCJcIiArIHN0ciArIChzdHIgPyBzZXBhcmF0aW9uIDogJycpICsgdHJhbnNmb3JtYXRpb24udG9TdHJpbmcoKTtcbn0sICcnKTsgfTtcbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybTtcbiIsImltcG9ydCB7IGZvcm1hdFZhbHVlIH0gZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgIHZhciB4QXhpcyA9IHggPyBcInhfXCIgKyBmb3JtYXRWYWx1ZSh4KSA6ICcnO1xuICAgIHZhciB5QXhpcyA9IHkgPyBcInlfXCIgKyBmb3JtYXRWYWx1ZSh5KSA6ICcnO1xuICAgIHJldHVybiBbeEF4aXMsIHlBeGlzXS5maWx0ZXIoQm9vbGVhbikuam9pbigpO1xufTtcbiIsImV4cG9ydCB2YXIgcmF3VHJhbnNmb3JtYXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuIiwiaW1wb3J0IHsgZm9ybWF0VmFsdWUgfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5leHBvcnQgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0eXBlID0gX2EudHlwZSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0LCBhc3BlY3RSYXRpbyA9IF9hLmFzcGVjdFJhdGlvO1xuICAgIHZhciB3ID0gd2lkdGggPyBcIndfXCIgKyBmb3JtYXRWYWx1ZSh3aWR0aCkgOiAnJztcbiAgICB2YXIgaCA9IGhlaWdodCA/IFwiaF9cIiArIGZvcm1hdFZhbHVlKGhlaWdodCkgOiAnJztcbiAgICB2YXIgY3JvcCA9IHR5cGUgPyBcImNfXCIgKyB0eXBlIDogJyc7XG4gICAgdmFyIGFyID0gYXNwZWN0UmF0aW8gPyBcImFyX1wiICsgZm9ybWF0VmFsdWUoYXNwZWN0UmF0aW8pIDogJyc7XG4gICAgcmV0dXJuIFtjcm9wLCB3LCBoLCBhcl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oKTtcbn07XG4iLCJpbXBvcnQgeyBGb3JtYXRzLCBQcmVmaXggfSBmcm9tIFwiLi4vY29uc3RhbnRzL3ZhcmlhYmxlXCI7XG5pbXBvcnQgeyBWYWx1ZUFzc2lnbmFibGUgfSBmcm9tICdAY2xkLWFwaXMvdXRpbHMnO1xuaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IGNvbnZlcnQsIGhhc0FyaXRobWV0aWNFeHByZXNzaW9uIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuZXhwb3J0IHZhciBjb252ZXJ0U3RyaW5nVmFsdWVUeXBlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUuZXhwcmVzc2lvbilcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBleHByZXNzaW9uID0gQXJyYXkuaXNBcnJheSh2YWx1ZS5leHByZXNzaW9uKSA/IHRvU3RyaW5nKHZhbHVlLmV4cHJlc3Npb24pIDogdmFsdWUuZXhwcmVzc2lvbjtcbiAgICB2YXIgaXNBcml0aG1ldGljID0gaGFzQXJpdGhtZXRpY0V4cHJlc3Npb24oZXhwcmVzc2lvbik7XG4gICAgdmFyIGNvbnZlcnRlZEV4cHJlc3Npb24gPSBjb252ZXJ0KGV4cHJlc3Npb24pO1xuICAgIHZhciBmb3JtYXQgPSBGb3JtYXRzW3ZhbHVlLmZvcm1hdEFzXSB8fCAnJztcbiAgICB2YXIgbWFwcGVkRXhwcmVzc2lvbiA9IGNvbnZlcnRlZEV4cHJlc3Npb24gJiYgIWlzQXJpdGhtZXRpYyA/IFwiIVwiICsgY29udmVydGVkRXhwcmVzc2lvbiArIFwiIVwiIDogY29udmVydGVkRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gdG9TdHJpbmcoW21hcHBlZEV4cHJlc3Npb24sIGZvcm1hdF0sICdfJyk7XG59O1xuZXhwb3J0IHZhciBjb21wdXRlVmFyaWFibGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIgKyBQcmVmaXggKyB2YXJpYWJsZS5uYW1lO1xuICAgIHZhciB2YWx1ZSA9IHZhcmlhYmxlLnZhbHVlO1xuICAgIGlmIChpc05hTih2YXJpYWJsZS52YWx1ZSkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFyaWFibGUudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RyaW5nKHZhcmlhYmxlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gY29udmVydFN0cmluZ1ZhbHVlVHlwZSh2YXJpYWJsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHZhclZhbHVlID0gdG9TdHJpbmcoW1ZhbHVlQXNzaWduYWJsZVt2YXJpYWJsZS5hc3NpZ25Gcm9tXSwgdmFsdWVdLCAnOicpO1xuICAgIHJldHVybiB2YXJWYWx1ZSA/IHRvU3RyaW5nKFtuYW1lLCB2YXJWYWx1ZV0sICdfJykgOiAnJztcbn07XG5leHBvcnQgdmFyIHZhcmlhYmxlcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICByZXR1cm4gY29tcHV0ZVZhcmlhYmxlKHZhbHVlKTtcbiAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUubWFwKGZ1bmN0aW9uICh2YXJpYWJsZSkgeyByZXR1cm4gY29tcHV0ZVZhcmlhYmxlKHZhcmlhYmxlKTsgfSksICcsJyk7XG59O1xuIiwiaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmV4cG9ydCB2YXIgZnBzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGlzT2JqID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcbiAgICBpZiAoIXZhbHVlIHx8IChpc09iaiAmJiAhdmFsdWUubWluKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciByYW5nZSA9IGlzT2JqID8gdG9TdHJpbmcoW3ZhbHVlLm1pbiwgdmFsdWUubWF4XSwgJy0nKSA6IHZhbHVlO1xuICAgIHJldHVybiBcImZwc19cIiArIHJhbmdlO1xufTtcbiIsImV4cG9ydCB2YXIgb2Zmc2V0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICghb2JqKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIHN0YXJ0ID0gb2JqLnN0YXJ0ID8gXCJzb19cIiArIG9iai5zdGFydCA6ICcnO1xuICAgIHZhciBlbmQgPSBvYmouZW5kID8gXCJlb19cIiArIG9iai5lbmQgOiAnJztcbiAgICB2YXIgZHVyYXRpb24gPSBvYmouZHVyYXRpb24gPyBcImR1X1wiICsgb2JqLmR1cmF0aW9uIDogJyc7XG4gICAgcmV0dXJuIFtzdGFydCwgZW5kLCBkdXJhdGlvbl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywnKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgU0VPX1RZUEVTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNPVVJDRV9UWVBFUywgU1RPUkFHRV9UWVBFUyB9IGZyb20gJ0BjbGQtYXBpcy91dGlscyc7XG5pbXBvcnQgeyB0b1RyYW5zZm9ybWF0aW9uU3RyLCB0cmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG52YXIgU0hBUkVEX0NETlMgPSBbXCJjbG91ZGluYXJ5LWEuYWthbWFpaGQubmV0XCIsIFwicmVzLmNsb3VkaW5hcnkuY29tXCJdO1xudmFyIENMT1VESU5BUllfUkVHRVggPSAvXi4rXFwuY2xvdWRpbmFyeVxcLmNvbVxcLyg/OlteXFwvXStcXC8pKD86KGltYWdlfHZpZGVvfHJhdylcXC8pPyg/Oih1cGxvYWR8ZmV0Y2h8cHJpdmF0ZXxhdXRoZW50aWNhdGVkfHNwcml0ZXxmYWNlYm9va3x0d2l0dGVyfHlvdXR1YmV8dmltZW8pXFwvKT8oPzooPzpbXl8vXStfW14sL10rLD8pKlxcLyk/KD86dihcXGQrfFxcd3sxLDJ9KVxcLyk/KFteXFwuXlxcc10rKSg/OlxcLiguKykpPyQvO1xuZXhwb3J0IHZhciBleHRyYWN0UHVibGljSWQgPSBmdW5jdGlvbiAobGluaykge1xuICAgIGlmICghbGluaylcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBwYXJ0cyA9IENMT1VESU5BUllfUkVHRVguZXhlYyhsaW5rKTtcbiAgICByZXR1cm4gcGFydHMgJiYgcGFydHMubGVuZ3RoID4gMiA/IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdIDogbGluaztcbn07XG5leHBvcnQgdmFyIGdldFNpZ25hdHVyZSA9IGZ1bmN0aW9uIChzaWduYXR1cmUpIHtcbiAgICBpZiAoIXNpZ25hdHVyZSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBpc0Zvcm1hdHRlZCA9IHNpZ25hdHVyZS5pbmRleE9mKCdzLS0nKSA9PT0gMCAmJiBzaWduYXR1cmUuZW5kc1dpdGgoJy0tJyk7XG4gICAgcmV0dXJuIGlzRm9ybWF0dGVkID8gc2lnbmF0dXJlIDogXCJzLS1cIiArIHNpZ25hdHVyZSArIFwiLS1cIjtcbn07XG52YXIgZG9lc1BhdGhOZWVkVmVyc2lvbiA9IGZ1bmN0aW9uIChwdWJsaWNJZCkgeyByZXR1cm4gIXB1YmxpY0lkLm1hdGNoKC9edlswLTldKy8pICYmICFwdWJsaWNJZC5tYXRjaCgvXmh0dHBzPzpcXC8vKTsgfTtcbmV4cG9ydCB2YXIgZW5jb2RlUHVibGljSWQgPSBmdW5jdGlvbiAocHVibGljSWQpIHsgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChwdWJsaWNJZCkucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTJGL2csICcvJyk7IH07XG5leHBvcnQgdmFyIGdldFZlcnNpb24gPSBmdW5jdGlvbiAocHVibGljSWQsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EuZm9yY2VWZXJzaW9uLCBmb3JjZVZlcnNpb24gPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgX2MgPSBfYS52ZXJzaW9uLCB2ZXJzaW9uID0gX2MgPT09IHZvaWQgMCA/IDEgOiBfYztcbiAgICB2YXIgbmVlZFZlcnNpb24gPSBkb2VzUGF0aE5lZWRWZXJzaW9uKHB1YmxpY0lkKSAmJiBmb3JjZVZlcnNpb247XG4gICAgcmV0dXJuIG5lZWRWZXJzaW9uID8gXCJ2XCIgKyB2ZXJzaW9uIDogJyc7XG59O1xuZXhwb3J0IHZhciBnZXRTdWJEb21haW4gPSBmdW5jdGlvbiAocHVibGljSWQsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EuY2RuU3ViZG9tYWluLCBjZG5TdWJkb21haW4gPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgY25hbWUgPSBfYS5jbmFtZTtcbiAgICBpZiAoIWNuYW1lKVxuICAgICAgICByZXR1cm4gXCJyZXNcIiArIChjZG5TdWJkb21haW4gPyBcIi1cIiArIHB1YmxpY0lkIDogJycpO1xuICAgIHJldHVybiBjZG5TdWJkb21haW4gPyBcImFcIiArIHB1YmxpY0lkICsgXCIuXCIgOiAnJztcbn07XG5leHBvcnQgdmFyIGdldFByZWZpeCA9IGZ1bmN0aW9uIChwdWJsaWNJZCwgX2EpIHtcbiAgICB2YXIgY2xvdWROYW1lID0gX2EuY2xvdWROYW1lLCBfYiA9IF9hLnByaXZhdGVDZG4sIHByaXZhdGVDZG4gPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgX2MgPSBfYS5jZG5TdWJkb21haW4sIGNkblN1YmRvbWFpbiA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBzZWN1cmVEaXN0cmlidXRpb24gPSBfYS5zZWN1cmVEaXN0cmlidXRpb24sIGNuYW1lID0gX2EuY25hbWUsIF9kID0gX2Euc2VjdXJlLCBzZWN1cmUgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kO1xuICAgIHZhciBoYXNTZWN1cmVEaXN0cmlidXRpb24gPSBzZWN1cmUgJiYgc2VjdXJlRGlzdHJpYnV0aW9uICYmICFTSEFSRURfQ0ROUy5pbmNsdWRlcyhzZWN1cmVEaXN0cmlidXRpb24pO1xuICAgIHZhciBwcm90b2NvbCA9IFwiaHR0cFwiICsgKHNlY3VyZSA/ICdzJyA6ICcnKSArIFwiOi8vXCI7XG4gICAgdmFyIGNkbiA9IHByaXZhdGVDZG4gJiYgIWhhc1NlY3VyZURpc3RyaWJ1dGlvbiA/IGNsb3VkTmFtZSArIFwiLVwiIDogJyc7XG4gICAgdmFyIGFjY291bnRQYXRoID0gcHJpdmF0ZUNkbiA/ICcnIDogXCIvXCIgKyBjbG91ZE5hbWU7XG4gICAgdmFyIHN1YkRvbWFpbiA9IGhhc1NlY3VyZURpc3RyaWJ1dGlvbiA/ICcnIDogZ2V0U3ViRG9tYWluKHB1YmxpY0lkLCB7IGNkblN1YmRvbWFpbjogY2RuU3ViZG9tYWluLCBjbmFtZTogY25hbWUgfSk7XG4gICAgdmFyIGhvc3QgPSBoYXNTZWN1cmVEaXN0cmlidXRpb24gPyBzZWN1cmVEaXN0cmlidXRpb24gOiAoY25hbWUgfHwgJy5jbG91ZGluYXJ5LmNvbScpO1xuICAgIHJldHVybiBcIlwiICsgcHJvdG9jb2wgKyBjZG4gKyBzdWJEb21haW4gKyBob3N0ICsgYWNjb3VudFBhdGg7XG59O1xuZXhwb3J0IHZhciBnZXRSZXNvdXJjZVR5cGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5yZXNvdXJjZVR5cGUsIHJlc291cmNlVHlwZSA9IF9iID09PSB2b2lkIDAgPyBSRVNPVVJDRV9UWVBFUy5JTUFHRSA6IF9iLCBfYyA9IF9hLnN0b3JhZ2VUeXBlLCBzdG9yYWdlVHlwZSA9IF9jID09PSB2b2lkIDAgPyBTVE9SQUdFX1RZUEVTLlVQTE9BRCA6IF9jLCB1cmxTdWZmaXggPSBfYS51cmxTdWZmaXgsIHVzZVJvb3RQYXRoID0gX2EudXNlUm9vdFBhdGgsIHNob3J0ZXJuID0gX2Euc2hvcnRlcm47XG4gICAgdmFyIGlzVXBsb2FkSW1hZ2UgPSByZXNvdXJjZVR5cGUgPT09IFJFU09VUkNFX1RZUEVTLklNQUdFICYmIHN0b3JhZ2VUeXBlID09PSBTVE9SQUdFX1RZUEVTLlVQTE9BRDtcbiAgICB2YXIgdXNlUm9vdEZvck5vblVwbG9hZGVkSW1hZ2VzID0gdXNlUm9vdFBhdGggJiYgIWlzVXBsb2FkSW1hZ2U7XG4gICAgdmFyIHNob3J0ZW5Gb3JVcGxvYWRlZEltYWdlcyA9IHNob3J0ZXJuICYmIGlzVXBsb2FkSW1hZ2U7XG4gICAgdmFyIHR5cGVQYXRoID0gcmVzb3VyY2VUeXBlICsgXCIvXCIgKyBzdG9yYWdlVHlwZTtcbiAgICBpZiAodXNlUm9vdEZvck5vblVwbG9hZGVkSW1hZ2VzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJvb3QgcGF0aCBvbmx5IHN1cHBvcnRlZCBmb3IgaW1hZ2UvdXBsb2FkXCIpO1xuICAgIH1cbiAgICBpZiAodXNlUm9vdFBhdGgpXG4gICAgICAgIHJldHVybiBcIlwiICsgKHNob3J0ZW5Gb3JVcGxvYWRlZEltYWdlcyA/ICdpdScgOiAnJyk7XG4gICAgaWYgKHVybFN1ZmZpeCkge1xuICAgICAgICB2YXIgc2VvID0gU0VPX1RZUEVTW3R5cGVQYXRoXTtcbiAgICAgICAgaWYgKHNlbykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVUkwgU3VmZml4IG9ubHkgc3VwcG9ydGVkIGZvciBcIiArIE9iamVjdC5rZXlzKFNFT19UWVBFUykuam9pbignLCAnKSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlUGF0aDtcbn07XG52YXIgaXNVcmwgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIgJiYgISFzdHIubWF0Y2goL15odHRwcz86XFwvLyk7IH07XG5leHBvcnQgdmFyIGdldFBhdGhUb0Fzc2V0ID0gZnVuY3Rpb24gKHB1YmxpY0lkLCBfYSkge1xuICAgIHZhciBfYiA9IF9hLnVybFN1ZmZpeCwgdXJsU3VmZml4ID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2IsIF9jID0gX2EuZm9ybWF0LCBmb3JtYXQgPSBfYyA9PT0gdm9pZCAwID8gJycgOiBfYztcbiAgICBpZiAoaXNVcmwocHVibGljSWQpKVxuICAgICAgICByZXR1cm4gZW5jb2RlUHVibGljSWQocHVibGljSWQpO1xuICAgIHZhciBwdWJsaWNJZFdpdGhGb3JtYXQgPSBwdWJsaWNJZC5yZXBsYWNlKC9cXC5bXi8uXSskLywgZm9ybWF0IHx8ICcnKTtcbiAgICB2YXIgcGF0aCA9IFtwdWJsaWNJZFdpdGhGb3JtYXQsIHVybFN1ZmZpeF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gZW5jb2RlUHVibGljSWQocGF0aCk7XG59O1xuZXhwb3J0IHZhciB1cmwgPSBmdW5jdGlvbiAocHVibGljSWQsIGNsb3VkLCBvcHRpb25zKSB7XG4gICAgaWYgKGNsb3VkID09PSB2b2lkIDApIHsgY2xvdWQgPSB7IGNsb3VkTmFtZTogJycgfTsgfVxuICAgIGlmICghY2xvdWQuY2xvdWROYW1lKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdjbG91ZE5hbWUgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuICAgIHZhciBfcHVibGljSWQgPSBpc1VybChwdWJsaWNJZCkgPyBleHRyYWN0UHVibGljSWQocHVibGljSWQpIDogcHVibGljSWQ7XG4gICAgdmFyIHZlcnNpb24gPSBnZXRWZXJzaW9uKF9wdWJsaWNJZCwgY2xvdWQpO1xuICAgIHZhciBwcmVmaXggPSBnZXRQcmVmaXgoX3B1YmxpY0lkLCBjbG91ZCk7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGdldFNpZ25hdHVyZShjbG91ZC5zaWduYXR1cmUpO1xuICAgIHZhciB0eXBlUGF0aCA9IGdldFJlc291cmNlVHlwZShjbG91ZCk7XG4gICAgdmFyIHBhdGhUb0Fzc2V0ID0gZ2V0UGF0aFRvQXNzZXQoX3B1YmxpY0lkLCB7IGZvcm1hdDogb3B0aW9ucy5mb3JtYXQsIHVybFN1ZmZpeDogY2xvdWQudXJsU3VmZml4IH0pO1xuICAgIHZhciBmb3JtYXQgPSBvcHRpb25zLmZldGNoRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8ICdhdXRvJztcbiAgICB2YXIgJG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7IHF1YWxpdHk6ICdhdXRvJyB9LCBvcHRpb25zKSwgeyBmb3JtYXQ6IGZvcm1hdCB9KTtcbiAgICB2YXIgdHJhbnMgPSB0b1RyYW5zZm9ybWF0aW9uU3RyKHRyYW5zZm9ybSgkb3B0aW9ucykpO1xuICAgIHJldHVybiBbcHJlZml4LCB0eXBlUGF0aCwgc2lnbmF0dXJlLCB0cmFucywgdmVyc2lvbiwgcGF0aFRvQXNzZXRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJykucmVwbGFjZSgnICcsICclMjAnKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1cmw7XG4iLCJleHBvcnQgdmFyIHRvU3RyaW5nID0gZnVuY3Rpb24gKGFyciwgc2VwYXJhdGlvbikge1xuICAgIGlmIChzZXBhcmF0aW9uID09PSB2b2lkIDApIHsgc2VwYXJhdGlvbiA9ICc6JzsgfVxuICAgIHJldHVybiBhcnIuZmlsdGVyKEJvb2xlYW4pLmpvaW4oc2VwYXJhdGlvbik7XG59O1xuZXhwb3J0IHZhciBjbGVhblRleHQgPSBmdW5jdGlvbiAodGV4dCkgeyByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpLnJlcGxhY2UoLyUoMjN8MkN8MkZ8M0Z8NUMpL2csICclMjUkMScpOyB9O1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXG52YXIgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCcsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc0xvd2VyTWlzYyA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc1VwcGVyTWlzYyA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdExvd2VyQ29udHIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdFVwcGVyQ29udHIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc0Vtb2ppID0gJyg/OicgKyBbcnNEaW5nYmF0LCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc1NlcTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYXBvc3Ryb3BoZXMuICovXG52YXIgcmVBcG9zID0gUmVnRXhwKHJzQXBvcywgJ2cnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3NfZm9yX1N5bWJvbHMpLlxuICovXG52YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibywgJ2cnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggY29tcGxleCBvciBjb21wb3VuZCB3b3Jkcy4gKi9cbnZhciByZVVuaWNvZGVXb3JkID0gUmVnRXhwKFtcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXIgKyAnKycgKyByc09wdExvd2VyQ29udHIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlck1pc2MgKyAnKycgKyByc09wdFVwcGVyQ29udHIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyICsgcnNMb3dlck1pc2MsICckJ10uam9pbignfCcpICsgJyknLFxuICByc1VwcGVyICsgJz8nICsgcnNMb3dlck1pc2MgKyAnKycgKyByc09wdExvd2VyQ29udHIsXG4gIHJzVXBwZXIgKyAnKycgKyByc09wdFVwcGVyQ29udHIsXG4gIHJzRGlnaXRzLFxuICByc0Vtb2ppXG5dLmpvaW4oJ3wnKSwgJ2cnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3MgdGhhdCBuZWVkIGEgbW9yZSByb2J1c3QgcmVnZXhwIHRvIG1hdGNoIHdvcmRzLiAqL1xudmFyIHJlSGFzVW5pY29kZVdvcmQgPSAvW2Etel1bQS1aXXxbQS1aXXsyLH1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS87XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAnc3MnXG59O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogU3BsaXRzIGFuIEFTQ0lJIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZCkgfHwgW107XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBMYXRpbi0xIFN1cHBsZW1lbnQgYW5kIExhdGluIEV4dGVuZGVkLUFcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldHRlciBUaGUgbWF0Y2hlZCBsZXR0ZXIgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgbGV0dGVyLlxuICovXG52YXIgZGVidXJyTGV0dGVyID0gYmFzZVByb3BlcnR5T2YoZGVidXJyZWRMZXR0ZXJzKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgYSB3b3JkIGNvbXBvc2VkIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSB3b3JkIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGVXb3JkKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlV29yZC50ZXN0KHN0cmluZyk7XG59XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5jYW1lbENhc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY29tYmluZSBlYWNoIHdvcmQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb21wb3VuZGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBEZWJ1cnJzIGBzdHJpbmdgIGJ5IGNvbnZlcnRpbmdcbiAqIFtMYXRpbi0xIFN1cHBsZW1lbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluLTFfU3VwcGxlbWVudF8oVW5pY29kZV9ibG9jaykjQ2hhcmFjdGVyX3RhYmxlKVxuICogYW5kIFtMYXRpbiBFeHRlbmRlZC1BXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9FeHRlbmRlZC1BKVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzIGFuZCByZW1vdmluZ1xuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVidXJyKCdkw6lqw6AgdnUnKTtcbiAqIC8vID0+ICdkZWphIHZ1J1xuICovXG5mdW5jdGlvbiBkZWJ1cnIoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nLnJlcGxhY2UocmVMYXRpbiwgZGVidXJyTGV0dGVyKS5yZXBsYWNlKHJlQ29tYm9NYXJrLCAnJyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG9cbiAqIFtzbmFrZSBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbmFrZV9jYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc25ha2UgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNuYWtlQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKlxuICogXy5zbmFrZUNhc2UoJ2Zvb0JhcicpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKlxuICogXy5zbmFrZUNhc2UoJy0tRk9PLUJBUi0tJyk7XG4gKiAvLyA9PiAnZm9vX2JhcidcbiAqL1xudmFyIHNuYWtlQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gJ18nIDogJycpICsgd29yZC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNuYWtlQ2FzZTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZVByZXZpZXcubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZVByZXZpZXcubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZUdyaWQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlR3JpZC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlR3JpZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9NYWluQXJ0aWNsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9NYWluQXJ0aWNsZXMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vTWFpbkFydGljbGVzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcnRpY2xlUHJldmlld19pbWFnZV9fbkQyak4ge1xcbiAgLXdlYmtpdC1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5BcnRpY2xlUHJldmlld19hcnRpY2xlX196RmpfbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQXJ0aWNsZVByZXZpZXcubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmltYWdlIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpbWFnZVwiOiBcIkFydGljbGVQcmV2aWV3X2ltYWdlX19uRDJqTlwiLFxuXHRcImFydGljbGVcIjogXCJBcnRpY2xlUHJldmlld19hcnRpY2xlX196Rmpfb1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcnRpY2xlR3JpZF9hcnRpY2xlLWdyaWRfXzJsLTY1IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9BcnRpY2xlR3JpZC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXJ0aWNsZS1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYXJ0aWNsZS1ncmlkXCI6IFwiQXJ0aWNsZUdyaWRfYXJ0aWNsZS1ncmlkX18ybC02NVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5NYWluQXJ0aWNsZXNfbWFpbi1hcnRpY2xlc19fMmxvSzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9NYWluQXJ0aWNsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tYXJ0aWNsZXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW4tYXJ0aWNsZXNcIjogXCJNYWluQXJ0aWNsZXNfbWFpbi1hcnRpY2xlc19fMmxvSzVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmltYWdlQ29uZmlnRGVmYXVsdD1leHBvcnRzLlZBTElEX0xPQURFUlM9dm9pZCAwO2NvbnN0IFZBTElEX0xPQURFUlM9WydkZWZhdWx0JywnaW1naXgnLCdjbG91ZGluYXJ5JywnYWthbWFpJ107ZXhwb3J0cy5WQUxJRF9MT0FERVJTPVZBTElEX0xPQURFUlM7Y29uc3QgaW1hZ2VDb25maWdEZWZhdWx0PXtkZXZpY2VTaXplczpbNjQwLDc1MCw4MjgsMTA4MCwxMjAwLDE5MjAsMjA0OCwzODQwXSxpbWFnZVNpemVzOlsxNiwzMiw0OCw2NCw5NiwxMjgsMjU2LDM4NF0scGF0aDonL19uZXh0L2ltYWdlJyxsb2FkZXI6J2RlZmF1bHQnLGRvbWFpbnM6W10sZGlzYWJsZVN0YXRpY0ltYWdlczpmYWxzZX07ZXhwb3J0cy5pbWFnZUNvbmZpZ0RlZmF1bHQ9aW1hZ2VDb25maWdEZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UtY29uZmlnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iXSwic291cmNlUm9vdCI6IiJ9
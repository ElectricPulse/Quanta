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

/*#__PURE__*/
(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleGrid__WEBPACK_IMPORTED_MODULE_3__.default, {
  cols: 2,
  rows: 2,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
    article: articles[1]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
    article: articles[2]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
    article: articles[3]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 1
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlePreview_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__.default, {
    article: articles[4]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 1
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 58,
  columnNumber: 1
}, undefined);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29sb3JpZnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL2F1ZGlvQ29kZWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL2NvbG9yU3BhY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvY29uZGl0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZC1hcGlzL3V0aWxzL2Rpc3QvZXNtL2NvbnN0YW50cy9kZWxpdmVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvZWZmZWN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvZmxhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvZ3Jhdml0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjbGQtYXBpcy91dGlscy9kaXN0L2VzbS9jb25zdGFudHMvcm90YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AY2xkLWFwaXMvdXRpbHMvZGlzdC9lc20vY29uc3RhbnRzL3ZhcmlhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZC1hcGlzL3V0aWxzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGNsZC1hcGlzL3V0aWxzL2Rpc3QvZXNtL3RvU25ha2VDYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVQcmV2aWV3L0FydGljbGVQcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0FydGljbGVHcmlkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL01haW5BcnRpY2xlcy9NYWluQXJ0aWNsZXMudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2NvbnN0YW50cy9hcml0aG1ldGljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vY29uc3RhbnRzL2NvbmRpdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2NvbnN0YW50cy92YXJpYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdHJhbnNmb3JtZXJzL2JvcmRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL3RyYW5zZm9ybWVycy9jb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvZWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdHJhbnNmb3JtZXJzL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvcmF3VHJhbnNmb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvcmVzaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdHJhbnNmb3JtZXJzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nsb3VkaW5hcnktYnVpbGQtdXJsL2Rpc3QvZXNtL3RyYW5zZm9ybWVycy92aWRlby9mcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbG91ZGluYXJ5LWJ1aWxkLXVybC9kaXN0L2VzbS90cmFuc2Zvcm1lcnMvdmlkZW8vb2Zmc2V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdXJsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2xvdWRpbmFyeS1idWlsZC11cmwvZGlzdC9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2guc25ha2VjYXNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVQcmV2aWV3L0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzP2JlYmIiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9BcnRpY2xlR3JpZC5tb2R1bGUuc2Nzcz83ZmE3Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbkFydGljbGVzL01haW5BcnRpY2xlcy5tb2R1bGUuc2Nzcz9kMzFmIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlU2hvd2Nhc2VzL0FydGljbGVHcmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVTaG93Y2FzZXMvTWFpbkFydGljbGVzL01haW5BcnRpY2xlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlUHJldmlldyIsInByb3BzIiwiYXJ0aWNsZSIsInRpdGxlIiwiaW1hZ2VOYW1lIiwidXJsIiwiaW1hZ2VVcmwiLCJidWlsZFVybCIsImNsb3VkIiwiY2xvdWROYW1lIiwic3R5bGVzIiwiQXJ0aWNsZUdyaWQiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xzIiwiZ3JpZFRlbXBsYXRlUm93cyIsInJvd3MiLCJjaGlsZHJlbiIsImFydGljbGVzIiwiTWFpbkFydGljbGVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImNvbmZpZ0RldmljZVNpemVzIiwiZGV2aWNlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsImxvYWRlciIsImNvbmZpZ1BhdGgiLCJwYXRoIiwiY29uZmlnRG9tYWlucyIsImRvbWFpbnMiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJzZXQiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJvYmoiLCJfX2VzTW9kdWxlIiwiQW1wU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiaXNJbkFtcE1vZGUiLCJ1c2VBbXAiLCJfYW1wQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiZGVmYXVsdEhlYWQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zaWRlRWZmZWN0IiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9hbXAiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY2hhclNldCIsIm5hbWUiLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaW5kZXhPZiIsImFkZCIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJjIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJzdHIiLCJ3aW5kb3ciLCJidG9hIiwibGlicmFyeSIsImZhcyIsImZhU2VhcmNoIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHdD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx3QkFBd0IsNEpBQTRKOzs7Ozs7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LHNCQUFzQixLQUFLLG1CQUFtQjtBQUNoUztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4RUFBOEUsMEJBQTBCLGlCQUFpQixnQkFBZ0IsR0FBRyxPQUFPLHlGQUF5RixXQUFXLFVBQVUsVUFBVSx5Q0FBeUMsNEJBQTRCLG1CQUFtQixrQkFBa0IsS0FBSyx1QkFBdUI7QUFDalo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVGEsa0JBQWtCLE1BQU0sMEJBQTBCLENBQUMscUJBQXFCLFFBQVEsOERBQThELHFCQUFxQixlQUFlLDBCQUEwQixzS0FBc0ssMEJBQTBCO0FBQ3paLHdDOzs7Ozs7Ozs7O0FDREEsMkdBQStDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5MGFmMDc2YjkzMmM2MjU2ZTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgeyBOYW1lZENvbG9ycyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IHZhciBjb2xvcmlmeSA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gICAgaWYgKHByZWZpeCA9PT0gdm9pZCAwKSB7IHByZWZpeCA9ICdyZ2I6JzsgfVxuICAgIGlmICghdmFsdWUpXG4gICAgICAgIHJldHVybiAnJztcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhOYW1lZENvbG9ycykuaW5jbHVkZXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgdmFyIGNvbG9yID0gdmFsdWUuc3RhcnRzV2l0aCgnIycpID8gdmFsdWUuc2xpY2UoMSkgOiB2YWx1ZTtcbiAgICBpZiAoY29sb3IubGVuZ3RoIDwgMyB8fCBjb2xvci5sZW5ndGggPiA4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSEVYIENvbG9yIHNob3VsZCBiZSAzLTQgZGlnaXRzIGZvciBSR0IvUkdCQSwgb3IgNi04IGRpZ2l0cyBmb3IgUkdCL1JHQkEgdHJpcGxldC9xdWFkcnVwbGV0Jyk7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgcHJlZml4ICsgY29sb3I7XG59O1xuIiwiZXhwb3J0IHZhciBBdWRpb0NvZGVjVHlwZXMgPSB7XG4gICAgTm9uZTogJ25vbmUnLFxuICAgIEFBQzogJ2FhYycsXG4gICAgVk9SQklTOiAndm9yYmlzJyxcbiAgICBNUDM6ICdtcDMnLFxuICAgIE9QVVM6ICdvcHVzJ1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnQgdmFyIENvbG9yU3BhY2UgPSB7XG4gICAgc1JHQjogJ3NyZ2InLFxuICAgIG5vQ01ZSzogJ25vX2NteWsnLFxuICAgIGtlZXBDTVlLOiAna2VlcF9jbXlrJ1xufTtcbmV4cG9ydCB2YXIgVkNvbG9yU3BhY2UgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgQ29sb3JTcGFjZSksIHsgdGlueVNSR0I6ICd0aW55c3JnYicsIGNvcHk6ICdjb3B5JyB9KTtcbiIsImV4cG9ydCB2YXIgTmFtZWRDb2xvcnMgPSB7XG4gICAgUmVkOiAncmVkJyxcbiAgICBPcmFuZ2U6ICdvcmFuZ2UnLFxuICAgIFllbGxvdzogJ3llbGxvdycsXG4gICAgR3JlZW46ICdncmVlbicsXG4gICAgQ3lhbjogJ2N5YW4nLFxuICAgIEJsdWU6ICdibHVlJyxcbiAgICBQdXJwbGU6ICdwdXJwbGUnLFxuICAgIFBpbms6ICdwaW5rJyxcbiAgICBXaGl0ZTogJ3doaXRlJyxcbiAgICBHcmF5OiAnZ3JheScsXG4gICAgQnJvd246ICdicm93bidcbn07XG4iLCJleHBvcnQgdmFyIENvbmRpdGlvbk9wZXJhdG9ycyA9IHtcbiAgICBlcXVhbDogXCJlcVwiLFxuICAgIG5vdEVxdWFsOiBcIm5lXCIsXG4gICAgbGVzc1RoYW46IFwibHRcIixcbiAgICBncmVhdGVyVGhhbjogXCJndFwiLFxuICAgIGxlc3NPckVxdWFsOiBcImx0ZVwiLFxuICAgIGdyZWF0ZXJPckVxdWFsOiBcImd0ZVwiLFxuICAgIGluY2x1ZGU6IFwiaW5cIixcbiAgICBub3RJbmNsdWRlOiBcIm5pblwiLFxufTtcbiIsImV4cG9ydCB2YXIgU1RPUkFHRV9UWVBFUyA9IHtcbiAgICBVUExPQUQ6ICd1cGxvYWQnLFxuICAgIEZFVENIOiAnZmV0Y2gnLFxuICAgIFBSSVZBVEU6ICdwcml2YXRlJyxcbiAgICBBVVRIRU5USUNBVEVEOiAnYXV0aGVudGljYXRlZCcsXG4gICAgU1BSSVRFOiAnc3ByaXRlJyxcbiAgICBGQUNFQk9PSzogJ2ZhY2Vib29rJyxcbiAgICBUV0lUVEVSOiAndHdpdHRlcicsXG4gICAgWU9VVFVCRTogJ3lvdXR1YmUnLFxuICAgIFZJTUVPOiAndmltZW8nLFxuICAgIE1VTFRJOiAnbXVsdGknLFxuICAgIElOU1RBR1JBTTogJ2luc3RhZ3JhbScsXG4gICAgSFVMVTogJ2h1bHUnLFxuICAgIEFOSU1PVE86ICdhbmltb3RvJyxcbiAgICBEQUlMWU1PVElPTjogJ2RhaWx5bW90aW9uJ1xufTtcbmV4cG9ydCB2YXIgUkVTT1VSQ0VfVFlQRVMgPSB7XG4gICAgSU1BR0U6ICdpbWFnZScsXG4gICAgVklERU86ICd2aWRlbycsXG4gICAgUkFXOiAncmF3J1xufTtcbmV4cG9ydCB2YXIgVklERU9fU09VUkNFX1RZUEVTID0ge1xuICAgIFdFQk06ICd3ZWJtJyxcbiAgICBNUDQ6ICdtcDQnLFxuICAgIE9HVjogJ29ndicsXG4gICAgRkxWOiAnZmx2JyxcbiAgICBNM1U4OiAnbTN1OCcsXG4gICAgVFM6ICd0cycsXG4gICAgTU9WOiAnbW92JyxcbiAgICBNS1Y6ICdta3YnLFxuICAgIE1QRDogJ21wZCdcbn07XG5leHBvcnQgdmFyIEltYWdlRm9ybWF0cyA9IHtcbiAgICBHSUY6IFwiZ2lmXCIsXG4gICAgUE5HOiBcInBuZ1wiLFxuICAgIEpQRzogXCJqcGdcIixcbiAgICBCTVA6IFwiYm1wXCIsXG4gICAgSUNPOiBcImljb1wiLFxuICAgIFBERjogXCJwZGZcIixcbiAgICBUSUZGOiBcInRpZmZcIixcbiAgICBFUFM6IFwiZXBzXCIsXG4gICAgSlBDOiBcImpwY1wiLFxuICAgIEpQMjogXCJqcDJcIixcbiAgICBQU0Q6IFwicHNkXCIsXG4gICAgV0VCUDogXCJ3ZWJwXCIsXG4gICAgWklQOiBcInppcFwiLFxuICAgIFNWRzogXCJzdmdcIixcbiAgICBXRFA6IFwid2RwXCIsXG4gICAgSERYOiBcImhweFwiLFxuICAgIERKVlU6IFwiZGp2dVwiLFxuICAgIEFJOiBcImFpXCIsXG4gICAgRkxJRjogXCJmbGlmXCIsXG4gICAgQlBHOiBcImJwZ1wiLFxuICAgIE1JRkY6IFwibWlmZlwiLFxuICAgIFRHQTogXCJ0Z2FcIixcbiAgICBIRUlDOiBcImhlaWNcIixcbn07XG4iLCJleHBvcnQgdmFyIEJyaWdodG5lc3MgPSB7XG4gICAgQXV0bzogJ2F1dG9fYnJpZ2h0bmVzcycsXG4gICAgRGVmYXVsdDogJ2JyaWdodG5lc3MnLFxuICAgIEhzYjogJ2hzYidcbn07XG5leHBvcnQgdmFyIENvbnRyYXN0ID0ge1xuICAgIERlZmF1bHQ6ICdjb250cmFzdCcsXG4gICAgQXV0bzogJ2F1dG9fY29udHJhc3QnXG59O1xuZXhwb3J0IHZhciBDb2xvckNoYW5uZWwgPSB7XG4gICAgUmVkOiAncmVkJyxcbiAgICBHcmVlbjogJ2dyZWVuJyxcbiAgICBCbHVlOiAnYmx1ZScsXG59O1xuZXhwb3J0IHZhciBDb2xvckZpbHRlciA9IHtcbiAgICBOZWdhdGU6ICduZWdhdGUnLFxuICAgIFNlcGlhOiAnc2VwaWEnLFxuICAgIEdyYXlzY2FsZTogJ2dyYXlzY2FsZScsXG4gICAgQmxhY2t3aGl0ZTogJ2JsYWNrd2hpdGUnLFxuICAgIFRpbnQ6ICd0aW50Jyxcbn07XG5leHBvcnQgdmFyIENvbG9yQWRqdXN0bWVudCA9IHtcbiAgICBIdWU6ICdodWUnLFxuICAgIFNhdHVyYXRpb246ICdzYXR1cmF0aW9uJyxcbiAgICBDb2xvcml6ZTogJ2NvbG9yaXplJyxcbiAgICBSZXBsYWNlQ29sb3I6ICdyZXBsYWNlX2NvbG9yJyxcbiAgICBSZWNvbG9yOiAncmVjb2xvcicsXG4gICAgVGhlbWU6ICd0aGVtZScsXG4gICAgVmlicmFuY2U6IFwidmlicmFuY2VcIixcbiAgICBBdXRvQ29sb3I6ICdhdXRvX2NvbG9yJyxcbiAgICBWZWN0b3JpemU6ICd2ZWN0b3JpemUnLFxuICAgIEltcHJvdmU6ICdpbXByb3ZlJyxcbiAgICBGaWxsTGlnaHQ6ICdmaWxsX2xpZ2h0JyxcbiAgICBPdXRsaW5lOiAnb3V0bGluZScsXG4gICAgQ3V0T3V0OiAnY3V0X291dCcsXG4gICAgQ2FydG9vbmlmeTogJ2NhcnRvb25pZnknLFxuICAgIEZhZGU6ICdmYWRlJyxcbiAgICBTdHlsZVRyYW5zZmVyOiAnc3R5bGVfdHJhbnNmZXInLFxuICAgIExpZ2h0cm9vbTogJ2xpZ2h0cm9vbScsXG4gICAgQXJ0OiAnYXJ0JyxcbiAgICBWaWVzdXNDb3JyZWN0OiAndmllc3VzX2NvcnJlY3QnLFxuICAgIEdhbW1hOiAnZ2FtbWEnLFxuICAgIFNjcmVlbjogJ3NjcmVlbicsXG4gICAgTXVsdGlwbHk6ICdtdWx0aXBseScsXG4gICAgT3ZlcmxheTogJ292ZXJsYXknLFxuICAgIEFudGlSZW1vdmFsOiAnYW50aV9yZW1vdmFsJyxcbiAgICBCZ3JlbW92YWw6ICdiZ3JlbW92YWwnLFxuICAgIE1ha2VUcmFuc3BhcmVudDogJ21ha2VfdHJhbnNwYXJlbnQnLFxuICAgIE9wYWNpdHlUaHJlc2hvbGQ6ICdvcGFjaXR5X3RocmVzaG9sZCcsXG4gICAgVHJpbTogJ3RyaW0nLFxuICAgIFNoYWRvdzogJ3NoYWRvdycsXG4gICAgRGlzdG9ydDogJ2Rpc3RvcnQnLFxuICAgIFNoZWFyOiAnc2hlYXInLFxuICAgIERpc3BsYWNlOiAnZGlzcGxhY2UnLFxuICAgIE9pbFBhaW50OiAnb2lsX3BhaW50JyxcbiAgICBSZWRleWU6ICdyZWRleWUnLFxuICAgIEFkdlJlZGV5ZTogJ2Fkdl9yZWRleWUnLFxuICAgIFZpZ25ldHRlOiAndmlnbmV0dGUnLFxuICAgIEdyYWRpZW50X2ZhZGU6ICdncmFkaWVudF9mYWRlJyxcbiAgICBTaGFycGVuOiAnc2hhcnBlbicsXG4gICAgVW5zaGFycE1hc2s6ICd1bnNoYXJwX21hc2snLFxuICAgIE9yZGVyZWREaXRoZXI6ICdvcmRlcmVkX2RpdGhlcicsXG4gICAgTG9vcDogJ2xvb3AnLFxufTtcbmV4cG9ydCB2YXIgQ29sb3JibGluZCA9IHtcbiAgICBBc3Npc3Q6ICdhc3Npc3RfY29sb3JibGluZCcsXG4gICAgU2ltdWxhdGU6ICdzaW11bGF0ZV9jb2xvcmJsaW5kJ1xufTtcbmV4cG9ydCB2YXIgUGl4ZWxhdGVFZmZlY3RzID0ge1xuICAgIERlZmF1bHQ6ICdwaXhlbGF0ZScsXG4gICAgUmVnaW9uOiAncGl4ZWxhdGVfcmVnaW9uJyxcbiAgICBGYWNlczogJ3BpeGVsYXRlX2ZhY2VzJ1xufTtcbmV4cG9ydCB2YXIgQmx1ckVmZmVjdHMgPSB7XG4gICAgRGVmYXVsdDogJ2JsdXInLFxuICAgIFJlZ2lvbjogJ2JsdXJfcmVnaW9uJyxcbiAgICBGYWNlczogJ2JsdXJfZmFjZXMnXG59O1xuZXhwb3J0IHZhciBWaWRlb0VmZmVjdHMgPSB7XG4gICAgQWNjZWxlcmF0ZTogJ2FjY2VsZXJhdGUnLFxuICAgIFJldmVyc2U6ICdyZXZlcnNlJyxcbiAgICBCb29tZXJhbmc6ICdib29tZXJhbmcnLFxuICAgIExvb3A6ICdsb29wJyxcbiAgICBQcm9ncmVzc0JhcjogJ3Byb2dyZXNzYmFyJyxcbiAgICBUcmFuc3BhcmVudDogJ3RyYW5zcGFyZW50JyxcbiAgICBQcmV2aWV3OiAncHJldmlldycsXG4gICAgVHJhbnNpdGlvbjogJ3RyYW5zaXRpb24nLFxuICAgIE5vaXNlOiAnbm9pc2UnLFxuICAgIERlc2hha2U6ICdkZXNoYWtlJyxcbiAgICBWb2x1bWU6ICd2b2x1bWUnXG59O1xuZXhwb3J0IHZhciBBcnRpc3RpY0ZpbHRlcnMgPSB7XG4gICAgQWxEZW50ZTogJ2FsX2RlbnRlJyxcbiAgICBBdGhlbmE6ICdhdGhlbmEnLFxuICAgIEF1ZHJleTogJ2F1ZHJleScsXG4gICAgQXVyb3JhOiAnYXVyb3JhJyxcbiAgICBEYWd1ZXJyZTogJ2RhZ3VlcnJlJyxcbiAgICBFdWNhbHlwdHVzOiAnZXVjYWx5cHR1cycsXG4gICAgRmVzOiAnZmVzJyxcbiAgICBGcm9zdDogJ2Zyb3N0JyxcbiAgICBIYWlyc3ByYXk6ICdoYWlyc3ByYXknLFxuICAgIEhva3VzYWk6ICdob2t1c2FpJyxcbiAgICBJbmNvZ25pdG86ICdpbmNvZ25pdG8nLFxuICAgIExpbmVuOiAnbGluZW4nLFxuICAgIFBlYWNvY2s6ICdwZWFjb2NrJyxcbiAgICBQcmltYXZlcmE6ICdwcmltYXZlcmEnLFxuICAgIHF1YXJ0ejogJ3F1YXJ0eicsXG4gICAgUmVkUm9jazogJ3JlZF9yb2NrJyxcbiAgICBSZWZyZXNoOiAncmVmcmVzaCcsXG4gICAgU2l6emxlOiAnc2l6emxlJyxcbiAgICBTb25uZXQ6ICdzb25uZXQnLFxuICAgIFVrdWxlbGU6ICd1a3VsZWxlJyxcbiAgICBab3JybzogJ3pvcnJvJ1xufTtcbiIsImV4cG9ydCB2YXIgRmxhZ3MgPSB7XG4gICAgQW55Rm9ybWF0OiBcImFueV9mb3JtYXRcIixcbiAgICBBdHRhY2htZW50OiBcImF0dGFjaG1lbnRcIixcbiAgICBBc1BuZzogXCJhcG5nXCIsXG4gICAgQXNXZWJwOiBcImF3ZWJwXCIsXG4gICAgQ2xpcDogXCJjbGlwXCIsXG4gICAgQ2xpcEV2ZW5vZGQ6IFwiY2xpcF9ldmVub2RkXCIsXG4gICAgQ3V0dGVyOiBcImN1dHRlclwiLFxuICAgIEZvcmNlU3RyaXA6IFwiZm9yY2Vfc3RyaXBcIixcbiAgICBGb3JjZUljYzogXCJmb3JjZV9pY2NcIixcbiAgICBHZXRJbmZvOiBcImdldGluZm9cIixcbiAgICBJZ25vcmVBc3BlY3RSYXRpbzogXCJpZ25vcmVfYXNwZWN0X3JhdGlvXCIsXG4gICAgSWdub3JlTWFza0NoYW5uZWxzOiBcImlnbm9yZV9tYXNrX2NoYW5uZWxzXCIsXG4gICAgSW1tdXRhYmxlQ2FjaGU6IFwiaW1tdXRhYmxlX2NhY2hlXCIsXG4gICAgS2VlcEF0dHJpYnV0aW9uOiBcImtlZXBfYXR0cmlidXRpb25cIixcbiAgICBLZWVwSXB0YzogXCJrZWVwX2lwdGNcIixcbiAgICBMYXllckFwcGx5OiBcImxheWVyX2FwcGx5XCIsXG4gICAgTG9zc3k6IFwibG9zc3lcIixcbiAgICBOb092ZXJmbG93OiBcIm5vX292ZXJmbG93XCIsXG4gICAgUHJlc2VydmVUcmFuc3BhcmVuY3k6IFwicHJlc2VydmVfdHJhbnNwYXJlbmN5XCIsXG4gICAgUE5HODogXCJwbmc4XCIsXG4gICAgUE5HMjQ6IFwicG5nMjRcIixcbiAgICBQTkczMjogXCJwbmczMlwiLFxuICAgIFByb2dyZXNzaXZlOiBcInByb2dyZXNzaXZlXCIsXG4gICAgUmFzdGVyaXplOiBcInJhc3Rlcml6ZVwiLFxuICAgIFJlZ2lvblJlbGF0aXZlOiBcInJlZ2lvbl9yZWxhdGl2ZVwiLFxuICAgIFJlbGF0aXZlOiAncmVsYXRpdmUnLFxuICAgIFJlcGxhY2VJbWFnZTogJ3JlcGxhY2VfaW1hZ2UnLFxuICAgIFNhbml0aXplOiAnc2FuaXRpemUnLFxuICAgIFN0cmlwUHJvZmlsZTogJ3N0cmlwX3Byb2ZpbGUnLFxuICAgIFRleHROb1RyaW06ICd0ZXh0X25vX3RyaW0nLFxuICAgIFRleHREaXNhbGxvd092ZXJmbG93OiAndGV4dF9kaXNhbGxvd19vdmVyZmxvdycsXG4gICAgVGlmZjhMWlc6ICd0aWZmOF9sencnLFxuICAgIFRpbGVkOiAndGlsZWQnXG59O1xuZXhwb3J0IHZhciBWRmxhZ3MgPSB7XG4gICAgQW5pbWF0ZWQ6IFwiYW5pbWF0ZWRcIixcbiAgICBBc1dlYnA6IFwiYXdlYnBcIixcbiAgICBBdHRhY2hlbWVudDogXCJhdHRhY2htZW50XCIsXG4gICAgU3RyZWFtaW5nQXR0YWNobWVudDogXCJzdHJlYW1pbmdfYXR0YWNobWVudFwiLFxuICAgIEdldEluZm86IFwiZ2V0aW5mb1wiLFxuICAgIEhMU1YzOiBcImhsc3YzXCIsXG4gICAgS2VlcERhcjogXCJrZWVwX2RhclwiLFxuICAgIExheWVyQXBwbHk6IFwibGF5ZXJfYXBwbHlcIixcbiAgICBOb1N0cmVhbTogXCJub19zdHJlYW1cIixcbiAgICBNb25vOiBcIm1vbm9cIixcbiAgICBSZWxhdGl2ZTogXCJyZWxhdGl2ZVwiLFxuICAgIFNwbGljZTogXCJzcGxpY2VcIixcbiAgICBUcnVuY2F0ZTogXCJ0cnVuY2F0ZV90c1wiLFxuICAgIFdhdmVmb3JtOiBcIndhdmVmb3JtXCIsXG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydCB2YXIgQ29tcGFzcyA9IHtcbiAgICBOb3J0aDogXCJub3J0aFwiLFxuICAgIE5vcnRoRWFzdDogXCJub3J0aF9lYXN0XCIsXG4gICAgTm9ydGhXZXN0OiBcIm5vcnRoX3dlc3RcIixcbiAgICBXZXN0OiBcIndlc3RcIixcbiAgICBTb3V0aFdlc3Q6IFwic291dGhfd2VzdFwiLFxuICAgIFNvdXRoOiBcInNvdXRoXCIsXG4gICAgU291dGhFYXN0OiBcInNvdXRoX2Vhc3RcIixcbiAgICBFYXN0OiBcImVhc3RcIixcbiAgICBDZW50ZXI6IFwiY2VudGVyXCIsXG59O1xuZXhwb3J0IHZhciBHcmF2aXR5ID0gX19hc3NpZ24oeyBBdXRvOiAnYXV0bycsIFN1YmplY3Q6IFwiYXV0bzpzdWJqZWN0XCIsIEZhY2U6IFwiZmFjZVwiLCBTaW5rOiBcInNpbmtcIiwgRmFjZUNlbnRlcjogXCJmYWNlOmNlbnRlclwiLCBNdWx0aXBsZUZhY2VzOiBcImZhY2VzXCIsIE11bHRpcGxlRmFjZXNDZW50ZXI6IFwiZmFjZXM6Y2VudGVyXCIgfSwgQ29tcGFzcyk7XG4iLCJleHBvcnQgeyBSRVNJWkVfVFlQRVMgfSBmcm9tICcuL3Jlc2l6ZSc7XG5leHBvcnQgeyBST1RBVElPTl9NT0RFUyB9IGZyb20gJy4vcm90YXRpb24nO1xuZXhwb3J0IHsgQXVkaW9Db2RlY1R5cGVzIH0gZnJvbSAnLi9hdWRpb0NvZGVjJztcbmV4cG9ydCB7IENvbG9yU3BhY2UsIFZDb2xvclNwYWNlIH0gZnJvbSAnLi9jb2xvclNwYWNlJztcbmV4cG9ydCB7IENvbmRpdGlvbk9wZXJhdG9ycyB9IGZyb20gJy4vY29uZGl0aW9uJztcbmV4cG9ydCB7IFNUT1JBR0VfVFlQRVMsIFJFU09VUkNFX1RZUEVTLCBWSURFT19TT1VSQ0VfVFlQRVMgfSBmcm9tICcuL2RlbGl2ZXJ5JztcbmV4cG9ydCB7IEFydGlzdGljRmlsdGVycywgQnJpZ2h0bmVzcywgQmx1ckVmZmVjdHMsIENvbG9yQWRqdXN0bWVudCwgQ29sb3JDaGFubmVsLCBDb2xvckZpbHRlciwgQ29sb3JibGluZCwgQ29udHJhc3QsIFBpeGVsYXRlRWZmZWN0cywgVmlkZW9FZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzJztcbmV4cG9ydCB7IEZsYWdzLCBWRmxhZ3MgfSBmcm9tICcuL2ZsYWcnO1xuZXhwb3J0IHsgR3Jhdml0eSwgQ29tcGFzcyB9IGZyb20gJy4vZ3Jhdml0eSc7XG5leHBvcnQgeyBWYWx1ZUFzc2lnbmFibGUsIFZhcmlhYmxlRm9ybWF0cyB9IGZyb20gJy4vdmFyaWFibGUnO1xuZXhwb3J0IHsgTmFtZWRDb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XG4iLCJleHBvcnQgdmFyIFJFU0laRV9UWVBFUyA9IHtcbiAgICBJTUFHR0FfU0NBTEU6ICdpbWFnZ2FTY2FsZScsXG4gICAgSU1BR0dBX0NST1A6ICdpbWFnZ2FDcm9wJyxcbiAgICBDUk9QOiAnY3JvcCcsXG4gICAgRklMTDogJ2ZpbGwnLFxuICAgIFNDQUxFOiAnc2NhbGUnLFxuICAgIE1JTl9QQUQ6ICdtaW5pbXVtUGFkJyxcbiAgICBGSVQ6ICdmaXQnLFxuICAgIFBBRDogJ3BhZCcsXG4gICAgTElNSVRfRklUOiAnbGltaXRGaXQnLFxuICAgIFRIVU1CTkFJTDogJ3RodW1iJyxcbiAgICBMSU1JVF9GSUxMOiAnbGltaXRGaWxsJyxcbiAgICBNSU5fRklUOiAnbWluaW11bUZpdCcsXG4gICAgTElNSVRfUEFEOiAnbGltaXRQYWQnLFxuICAgIEZJTExfUEFEOiAnZmlsbFBhZCdcbn07XG4iLCJleHBvcnQgdmFyIFJPVEFUSU9OX01PREVTID0ge1xuICAgIEFVVE9fUklHSFQ6ICdhdXRvX3JpZ2h0JyxcbiAgICBBVVRPX0xFRlQ6ICdhdXRvX2xlZnQnLFxuICAgIFZFUlRJQ0FMX0ZMSVA6ICd2ZmxpcCcsXG4gICAgSE9SSVpPTlRBTF9GTElQOiAnaGZsaXAnLFxuICAgIElHTk9SRV9FWElGX0RBVEE6ICdpZ25vcmUnXG59O1xuIiwiZXhwb3J0IHZhciBWYWx1ZUFzc2lnbmFibGUgPSB7XG4gICAgY29udGV4dDogXCJjdHhcIixcbiAgICBzdHJ1Y3R1cmVNZXRhZGF0YTogXCJtZFwiXG59O1xuZXhwb3J0IHZhciBWYXJpYWJsZUZvcm1hdHMgPSB7XG4gICAgaW50ZWdlcjogJ2ludGVnZXInLFxuICAgIGZsb2F0OiAnZmxvYXQnXG59O1xuIiwiZXhwb3J0IHsgQXVkaW9Db2RlY1R5cGVzLCBBcnRpc3RpY0ZpbHRlcnMsIENvbG9yQWRqdXN0bWVudCwgQ29sb3JDaGFubmVsLCBDb2xvckZpbHRlciwgQ29sb3JTcGFjZSwgVkNvbG9yU3BhY2UsIENvbG9yYmxpbmQsIENvbXBhc3MsIENvbmRpdGlvbk9wZXJhdG9ycywgQ29udHJhc3QsIEJsdXJFZmZlY3RzLCBCcmlnaHRuZXNzLCBGbGFncywgR3Jhdml0eSwgTmFtZWRDb2xvcnMsIFJPVEFUSU9OX01PREVTLCBSRVNJWkVfVFlQRVMsIFJFU09VUkNFX1RZUEVTLCBQaXhlbGF0ZUVmZmVjdHMsIFZGbGFncywgVklERU9fU09VUkNFX1RZUEVTLCBWYWx1ZUFzc2lnbmFibGUsIFZhcmlhYmxlRm9ybWF0cywgVmlkZW9FZmZlY3RzLCBTVE9SQUdFX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHsgdG9TbmFrZUNhc2UgfSBmcm9tICcuL3RvU25ha2VDYXNlJztcbmV4cG9ydCB7IGNvbG9yaWZ5IH0gZnJvbSAnLi9jb2xvcmlmeSc7XG4iLCJleHBvcnQgdmFyIHRvU25ha2VDYXNlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB2YXIgZm9ybWF0dGVkID0ge307XG4gICAgdmFyIHNuYWtlQ2FzZSA9IHJlcXVpcmUoJ2xvZGFzaC5zbmFrZWNhc2UnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIHZhciBuZXdLZXkgPSBzbmFrZUNhc2Uoa2V5KTtcbiAgICAgICAgZm9ybWF0dGVkW25ld0tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZVByZXZpZXcubW9kdWxlLnNjc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFydGljbGU6IHtcclxuICAgIGltYWdlTmFtZTogc3RyaW5nXHJcbiAgICB1cmw6IHN0cmluZ1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IHsgYnVpbGRVcmwgfSBmcm9tICdjbG91ZGluYXJ5LWJ1aWxkLXVybCdcclxuXHJcbmNvbnN0IEFydGljbGVQcmV2aWV3OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBpbWFnZU5hbWUsIHVybCB9ID0gcHJvcHMuYXJ0aWNsZVxyXG5cclxuICBjb25zdCBpbWFnZVVybCA9IGJ1aWxkVXJsKGltYWdlTmFtZSwge1xyXG4gICAgY2xvdWQ6IHtcclxuICAgICAgY2xvdWROYW1lOiAnZHBraThlenBsJyxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgc3JjPXtpbWFnZVVybH0gLz5cclxuXHJcbiAgICAgIDxhIGhyZWY9e3VybH0+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQcmV2aWV3XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FydGljbGVHcmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb2xzOiBudW1iZXJcclxuICByb3dzOiBudW1iZXJcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGVHcmlkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHByb3BzLmNvbHMsXHJcbiAgICBncmlkVGVtcGxhdGVSb3dzOiBwcm9wcy5yb3dzLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtZ3JpZCddfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVHcmlkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluQXJ0aWNsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi8uLi9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlldydcclxuXHJcbmltcG9ydCBBcnRpY2xlR3JpZCBmcm9tICcuLi9BcnRpY2xlR3JpZCdcclxuXHJcbmNvbnN0IGFydGljbGVzID0gW1xyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZU5hbWU6ICdtYXhyZXNkZWZhdWx0LTE1X2ZrN2trYScsXHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5nb29nbGUuc2svJyxcclxuICAgIHRpdGxlOiAnVGl0bGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VOYW1lOiAnbWF4cmVzZGVmYXVsdC0xNV9mazdra2EnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLnNrLycsXHJcbiAgICB0aXRsZTogJ1RpdGxlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlTmFtZTogJ21heHJlc2RlZmF1bHQtMTVfZms3a2thJyxcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5zay8nLFxyXG4gICAgdGl0bGU6ICdUaXRsZScsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgTWFpbkFydGljbGVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXNbJ21haW4tYXJ0aWNsZXMnXX0+XHJcbiAgICAgIDxBcnRpY2xlR3JpZCBjb2xzPXsyfSByb3dzPXsxfT5cclxuICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1swXX0gLz5cclxuXHJcbiAgICAgIDwvQXJ0aWNsZUdyaWQ+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG48QXJ0aWNsZUdyaWQgY29scz17Mn0gcm93cz17Mn0+XHJcbjxBcnRpY2xlIGFydGljbGU9e2FydGljbGVzWzFdfSAvPlxyXG48QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlc1syXX0gLz5cclxuPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZXNbM119IC8+XHJcbjxBcnRpY2xlIGFydGljbGU9e2FydGljbGVzWzRdfSAvPlxyXG48L0FydGljbGVHcmlkPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFydGljbGVzXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBBbXBTdGF0ZUNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PUFtcFN0YXRlQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7QW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lPSdBbXBTdGF0ZUNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNJbkFtcE1vZGU9aXNJbkFtcE1vZGU7ZXhwb3J0cy51c2VBbXA9dXNlQW1wO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGlzSW5BbXBNb2RlKHthbXBGaXJzdD1mYWxzZSxoeWJyaWQ9ZmFsc2UsaGFzUXVlcnk9ZmFsc2V9PXt9KXtyZXR1cm4gYW1wRmlyc3R8fGh5YnJpZCYmaGFzUXVlcnk7fWZ1bmN0aW9uIHVzZUFtcCgpey8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbnJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBIZWFkTWFuYWdlckNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuSGVhZE1hbmFnZXJDb250ZXh0PUhlYWRNYW5hZ2VyQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7SGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lPSdIZWFkTWFuYWdlckNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdEhlYWQ9ZGVmYXVsdEhlYWQ7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zaWRlRWZmZWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lkZS1lZmZlY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyQ29udGV4dD1yZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2FtcD1yZXF1aXJlKFwiLi9hbXBcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZT1mYWxzZSl7Y29uc3QgaGVhZD1bLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse2NoYXJTZXQ6XCJ1dGYtOFwifSldO2lmKCFpbkFtcE1vZGUpe2hlYWQucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aFwifSkpO31yZXR1cm4gaGVhZDt9ZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LGNoaWxkKXsvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuaWYodHlwZW9mIGNoaWxkPT09J3N0cmluZyd8fHR5cGVvZiBjaGlsZD09PSdudW1iZXInKXtyZXR1cm4gbGlzdDt9Ly8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuaWYoY2hpbGQudHlwZT09PV9yZWFjdC5kZWZhdWx0LkZyYWdtZW50KXtyZXR1cm4gbGlzdC5jb25jYXQoX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKChmcmFnbWVudExpc3QsZnJhZ21lbnRDaGlsZCk9PntpZih0eXBlb2YgZnJhZ21lbnRDaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgZnJhZ21lbnRDaGlsZD09PSdudW1iZXInKXtyZXR1cm4gZnJhZ21lbnRMaXN0O31yZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKTt9LFtdKSk7fXJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7fWNvbnN0IE1FVEFUWVBFUz1bJ25hbWUnLCdodHRwRXF1aXYnLCdjaGFyU2V0JywnaXRlbVByb3AnXTsvKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9mdW5jdGlvbiB1bmlxdWUoKXtjb25zdCBrZXlzPW5ldyBTZXQoKTtjb25zdCB0YWdzPW5ldyBTZXQoKTtjb25zdCBtZXRhVHlwZXM9bmV3IFNldCgpO2NvbnN0IG1ldGFDYXRlZ29yaWVzPXt9O3JldHVybiBoPT57bGV0IGlzVW5pcXVlPXRydWU7bGV0IGhhc0tleT1mYWxzZTtpZihoLmtleSYmdHlwZW9mIGgua2V5IT09J251bWJlcicmJmgua2V5LmluZGV4T2YoJyQnKT4wKXtoYXNLZXk9dHJ1ZTtjb25zdCBrZXk9aC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpKzEpO2lmKGtleXMuaGFzKGtleSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle2tleXMuYWRkKGtleSk7fX0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG5zd2l0Y2goaC50eXBlKXtjYXNlJ3RpdGxlJzpjYXNlJ2Jhc2UnOmlmKHRhZ3MuaGFzKGgudHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle3RhZ3MuYWRkKGgudHlwZSk7fWJyZWFrO2Nhc2UnbWV0YSc6Zm9yKGxldCBpPTAsbGVuPU1FVEFUWVBFUy5sZW5ndGg7aTxsZW47aSsrKXtjb25zdCBtZXRhdHlwZT1NRVRBVFlQRVNbaV07aWYoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKWNvbnRpbnVlO2lmKG1ldGF0eXBlPT09J2NoYXJTZXQnKXtpZihtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7bWV0YVR5cGVzLmFkZChtZXRhdHlwZSk7fX1lbHNle2NvbnN0IGNhdGVnb3J5PWgucHJvcHNbbWV0YXR5cGVdO2NvbnN0IGNhdGVnb3JpZXM9bWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdfHxuZXcgU2V0KCk7aWYoKG1ldGF0eXBlIT09J25hbWUnfHwhaGFzS2V5KSYmY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7bWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdPWNhdGVnb3JpZXM7fX19YnJlYWs7fXJldHVybiBpc1VuaXF1ZTt9O30vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkRWxlbWVudHMscHJvcHMpe3JldHVybiBoZWFkRWxlbWVudHMucmVkdWNlKChsaXN0LGhlYWRFbGVtZW50KT0+e2NvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlbik7cmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pO30sW10pLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LFtdKS5yZXZlcnNlKCkuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYyxpKT0+e2NvbnN0IGtleT1jLmtleXx8aTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIXByb3BzLmluQW1wTW9kZSl7aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJi8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuWydodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsJ2h0dHBzOi8vdXNlLnR5cGVraXQubmV0LyddLnNvbWUodXJsPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKSl7Y29uc3QgbmV3UHJvcHM9ey4uLihjLnByb3BzfHx7fSl9O25ld1Byb3BzWydkYXRhLWhyZWYnXT1uZXdQcm9wc1snaHJlZiddO25ld1Byb3BzWydocmVmJ109dW5kZWZpbmVkOy8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3Ncbm5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddPXRydWU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLG5ld1Byb3BzKTt9fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyx7a2V5fSk7fSk7fS8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9mdW5jdGlvbiBIZWFkKHtjaGlsZHJlbn0pe2NvbnN0IGFtcFN0YXRlPSgwLF9yZWFjdC51c2VDb250ZXh0KShfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpO2NvbnN0IGhlYWRNYW5hZ2VyPSgwLF9yZWFjdC51c2VDb250ZXh0KShfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVFZmZlY3QuZGVmYXVsdCx7cmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6cmVkdWNlQ29tcG9uZW50cyxoZWFkTWFuYWdlcjpoZWFkTWFuYWdlcixpbkFtcE1vZGU6KDAsX2FtcC5pc0luQW1wTW9kZSkoYW1wU3RhdGUpfSxjaGlsZHJlbik7fXZhciBfZGVmYXVsdD1IZWFkO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTtjb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc7Y2xhc3MgX2RlZmF1bHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5faGFzSGVhZE1hbmFnZXI9dm9pZCAwO3RoaXMuZW1pdENoYW5nZT0oKT0+e2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQodGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSx0aGlzLnByb3BzKSk7fX07dGhpcy5faGFzSGVhZE1hbmFnZXI9dGhpcy5wcm9wcy5oZWFkTWFuYWdlciYmdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzO2lmKGlzU2VydmVyJiZ0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTt0aGlzLmVtaXRDaGFuZ2UoKTt9fWNvbXBvbmVudERpZE1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31jb21wb25lbnREaWRVcGRhdGUoKXt0aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXtpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKTt9dGhpcy5lbWl0Q2hhbmdlKCk7fXJlbmRlcigpe3JldHVybiBudWxsO319ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lkZS1lZmZlY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy50b0Jhc2U2ND10b0Jhc2U2NDsvKipcbiAqIElzb21vcnBoaWMgYmFzZTY0IHRoYXQgd29ya3Mgb24gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gKi9mdW5jdGlvbiB0b0Jhc2U2NChzdHIpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7cmV0dXJuIEJ1ZmZlci5mcm9tKHN0cikudG9TdHJpbmcoJ2Jhc2U2NCcpO31lbHNle3JldHVybiB3aW5kb3cuYnRvYShzdHIpO319XG4vLyMgc291cmNlTWFwcGluZ1VSTD10by1iYXNlLTY0LmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXHJcbmltcG9ydCB7IGZhU2VhcmNoLCBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5pbXBvcnQgTWFpbkFydGljbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVNob3djYXNlcy9NYWluQXJ0aWNsZXMvTWFpbkFydGljbGVzJ1xyXG5cclxubGlicmFyeS5hZGQoZmFzLCBmYVNlYXJjaClcclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWFpbkFydGljbGVzLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iLCJleHBvcnQgdmFyIEFyaXRobWV0aWNFeHByZXNzaW9uID0ge1xuICAgIFwiPVwiOiAnZXEnLFxuICAgIFwiIT1cIjogJ25lJyxcbiAgICBcIjxcIjogJ2x0JyxcbiAgICBcIj5cIjogJ2d0JyxcbiAgICBcIjw9XCI6ICdsdGUnLFxuICAgIFwiPj1cIjogJ2d0ZScsXG4gICAgXCImJlwiOiAnYW5kJyxcbiAgICBcInx8XCI6ICdvcicsXG4gICAgXCIqXCI6IFwibXVsXCIsXG4gICAgXCIvXCI6IFwiZGl2XCIsXG4gICAgXCIrXCI6IFwiYWRkXCIsXG4gICAgXCItXCI6IFwic3ViXCIsXG4gICAgXCJeXCI6IFwicG93XCIsXG59O1xuZXhwb3J0IHZhciBQcmVkZWZpbmVkVmFyaWFibGVzID0ge1xuICAgIHdpZHRoOiAndycsXG4gICAgaGVpZ2h0OiAnaCcsXG4gICAgeDogJ3gnLFxuICAgIHk6ICd5JyxcbiAgICBxdWFsaXR5OiAncScsXG4gICAgaWY6ICdpZicsXG4gICAgYXNwZWN0UmF0aW86ICdhcicsXG4gICAgcm90YXRlOiAnYScsXG4gICAgb3BhY2l0eTogJ28nLFxuICAgIHJhZGl1czogJ3InLFxuICAgIGRwcjogJ2RwcicsXG4gICAgZWZmZWN0OiAnZScsXG4gICAgYm9yZGVyOiAnYm8nLFxuICAgIGN1cnJlbnRQYWdlOiAnY3AnLFxuICAgIHByZXZpZXc6ICdwcmV2aWV3OmR1cmF0aW9uJyxcbiAgICBkdXJhdGlvbjogJ2R1JyxcbiAgICBmYWNlQ291bnQ6ICdmYycsXG4gICAgaW5pdGlhbEFzcGVjdFJhdGlvOiAnaWFyJyxcbiAgICBpbml0aWFsRHVyYXRpb246ICdpZHUnLFxuICAgIGluaXRpYWxIZWlnaHQ6ICdpaCcsXG4gICAgaW5pdGlhbFdpZHRoOiAnaXcnLFxuICAgIHBhZ2VDb3VudDogJ3BjJyxcbiAgICBwYWdlWDogJ3B4JyxcbiAgICBwYWdlWTogJ3B5JyxcbiAgICB0YWdzOiAndGFncycsXG59O1xuZXhwb3J0IHZhciBQcmVmaXggPSAnJCc7XG5leHBvcnQgdmFyIFByZURlZmluZWRQYXR0ZXJucyA9IFwiKFwiICsgT2JqZWN0LmtleXMoUHJlZGVmaW5lZFZhcmlhYmxlcykuam9pbignfCcpICsgXCIpXCI7XG5leHBvcnQgdmFyIEFjY2VwdE51bWJlcmljVmFycyA9IFsncXVhbGl0eScsICdpZicsICdyb3RhdGUnLCAnem9vbScsICdvcGFjaXR5JywgJ3JhZGl1cycsICdlZmZlY3QnLCAnZHByJ107XG4iLCJleHBvcnQgdmFyIENvbmRpdGlvbmFsUGFyYW1zID0ge1xuICAgIHdpZHRoOiAndycsXG4gICAgaW5pdGlhbFdpZHRoOiAnaXcnLFxuICAgIGhlaWdodDogJ2gnLFxuICAgIGluaXRpYWxIZWlnaHQ6ICdpaCcsXG4gICAgYXNwZWN0UmF0aW86ICdhcicsXG4gICAgaW50aWFsQXNwZWN0UmF0aW86ICdpYXInLFxuICAgIGNvbnRleHQ6ICdjdHgnLFxuICAgIG1ldGFkYXRhOiAnbWQnLFxuICAgIHRhZ3M6ICd0YWdzJyxcbiAgICB0cmltbWVkQXNwZWN0UmF0aW86ICd0YXInLFxuICAgIGN1cnJlbnRQYWdlOiAnY3AnLFxuICAgIGZhY2VDb3VudDogJ2ZjJyxcbiAgICBwYWdlQ291bnQ6ICdwYycsXG4gICAgcGFnZVhPZmZzZXQ6ICdweCcsXG4gICAgcGFnZVlPZmZzZXQ6ICdweScsXG4gICAgaW5pdGlhbERlbnNpdHk6ICdpZG4nLFxuICAgIGlsbHVzdHJhdGlvbjogJ2lscycsXG4gICAgcGFnZU5hbWVzOiAncGduYW1lcydcbn07XG4iLCJleHBvcnQgdmFyIFNFT19UWVBFUyA9IHtcbiAgICBcImltYWdlL3VwbG9hZFwiOiBcImltYWdlc1wiLFxuICAgIFwiaW1hZ2UvcHJpdmF0ZVwiOiBcInByaXZhdGVfaW1hZ2VzXCIsXG4gICAgXCJpbWFnZS9hdXRoZW50aWNhdGVkXCI6IFwiYXV0aGVudGljYXRlZF9pbWFnZXNcIixcbiAgICBcInJhdy91cGxvYWRcIjogXCJmaWxlc1wiLFxuICAgIFwidmlkZW8vdXBsb2FkXCI6IFwidmlkZW9zXCJcbn07XG5leHBvcnQgdmFyIFRSQU5TRk9STUVSUyA9IHtcbiAgICBhbmdsZTogJ2EnLFxuICAgIHJvdGF0ZTogJ2EnLFxuICAgIGJhY2tncm91bmQ6ICdiJyxcbiAgICBjb2xvcjogJ2NvJyxcbiAgICBjb2xvclNwYWNlOiAnY3MnLFxuICAgIGN1c3RvbUZ1bmN0aW9uOiAnZm4nLFxuICAgIGRlZmF1bHRJbWFnZTogJ2QnLFxuICAgIGRlbnNpdHk6ICdkbicsXG4gICAgZHByOiAnZHByJyxcbiAgICBvcGFjaXR5OiAnbycsXG4gICAgZm9ybWF0OiAnZicsXG4gICAgZ3Jhdml0eTogJ2cnLFxuICAgIG92ZXJsYXk6ICdsJyxcbiAgICBwYWdlOiAncGcnLFxuICAgIHByZWZpeDogJ3AnLFxuICAgIHF1YWxpdHk6ICdxJyxcbiAgICByYWRpdXM6ICdyJyxcbiAgICBiaXRSYXRlOiAnYnInLFxuICAgIGtleWZyYW1lSW50ZXJ2YWw6ICdraScsXG4gICAgYXVkaW9Db2RlYzogJ2FjJyxcbiAgICBhdWRpb0ZyZXF1ZW5jeTogJ2FmJyxcbiAgICBkZWxheTogJ2RsJyxcbiAgICBvY3I6ICdvY3InLFxuICAgIHN0cmVhbWluZ1Byb2ZpbGU6ICdzcCcsXG4gICAgdHJhbnNmb3JtYXRpb246ICd0JyxcbiAgICB1bmRlcmxheTogJ3UnLFxuICAgIHZpZGVvQ29kZWM6ICd2YycsXG4gICAgdmlkZW9TYW1wbGluZzogJ3ZzJyxcbiAgICB6b29tOiAneidcbn07XG4iLCJleHBvcnQgdmFyIFByZWZpeCA9ICckJztcbmV4cG9ydCB2YXIgU3RyaW5nQm91bmQgPSAnISc7XG5leHBvcnQgdmFyIFZhbHVlQXNzaWduYWJsZSA9IHtcbiAgICBjb250ZXh0OiBcImN0eFwiLFxuICAgIHN0cnVjdHVyZU1ldGFkYXRhOiBcIm1kXCJcbn07XG5leHBvcnQgdmFyIEZvcm1hdHMgPSB7XG4gICAgaW50ZWdlcjogJ3RvX2knLFxuICAgIGZsb2F0OiAndG9fZidcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgUkVTT1VSQ0VfVFlQRVMgfSBmcm9tICdAY2xkLWFwaXMvdXRpbHMnO1xuaW1wb3J0IHsgdXJsLCBleHRyYWN0UHVibGljSWQgfSBmcm9tICcuL3VybCc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0sIHRvVHJhbnNmb3JtYXRpb25TdHIgfSBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG52YXIgY29uZmlnID0ge307XG5leHBvcnQgdmFyIGdldENvbmZpZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE9iamVjdC5mcmVlemUoY29uZmlnKTsgfTtcbmV4cG9ydCB2YXIgc2V0Q29uZmlnID0gZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIGNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb25maWcpLCBvcHRpb25zKTsgfTtcbmV4cG9ydCB2YXIgYnVpbGRVcmwgPSBmdW5jdGlvbiAocHVibGljSWQsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EuY2xvdWQsIGNsb3VkID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIF9jID0gX2EudHJhbnNmb3JtYXRpb25zLCB0cmFuc2Zvcm1hdGlvbnMgPSBfYyA9PT0gdm9pZCAwID8ge30gOiBfYztcbiAgICB2YXIgY2xvdWRDb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29uZmlnKSwgY2xvdWQpO1xuICAgIHJldHVybiB1cmwocHVibGljSWQsIGNsb3VkQ29uZmlnLCB0cmFuc2Zvcm1hdGlvbnMpO1xufTtcbmV4cG9ydCB2YXIgYnVpbGRJbWFnZVVybCA9IGZ1bmN0aW9uIChwdWJsaWNJZCwgX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5jbG91ZCwgY2xvdWQgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2MgPSBfYS50cmFuc2Zvcm1hdGlvbnMsIHRyYW5zZm9ybWF0aW9ucyA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jO1xuICAgIHJldHVybiBidWlsZFVybChwdWJsaWNJZCwge1xuICAgICAgICBjbG91ZDogX19hc3NpZ24oX19hc3NpZ24oe30sIGNsb3VkKSwgeyByZXNvdXJjZVR5cGU6IFJFU09VUkNFX1RZUEVTLklNQUdFIH0pLFxuICAgICAgICB0cmFuc2Zvcm1hdGlvbnM6IHRyYW5zZm9ybWF0aW9uc1xuICAgIH0pO1xufTtcbmV4cG9ydCB2YXIgYnVpbGRWaWRlb1VybCA9IGZ1bmN0aW9uIChwdWJsaWNJZCwgX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5jbG91ZCwgY2xvdWQgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2MgPSBfYS50cmFuc2Zvcm1hdGlvbnMsIHRyYW5zZm9ybWF0aW9ucyA9IF9jID09PSB2b2lkIDAgPyB7fSA6IF9jO1xuICAgIHJldHVybiBidWlsZFVybChwdWJsaWNJZCwge1xuICAgICAgICBjbG91ZDogX19hc3NpZ24oX19hc3NpZ24oe30sIGNsb3VkKSwgeyByZXNvdXJjZVR5cGU6IFJFU09VUkNFX1RZUEVTLlZJREVPIH0pLFxuICAgICAgICB0cmFuc2Zvcm1hdGlvbnM6IHRyYW5zZm9ybWF0aW9uc1xuICAgIH0pO1xufTtcbnZhciBUcmFuc2Zvcm1lciA9IHsgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sIHRvU3RyaW5nOiB0b1RyYW5zZm9ybWF0aW9uU3RyIH07XG5leHBvcnQgeyBleHRyYWN0UHVibGljSWQsIFRyYW5zZm9ybWVyIH07XG5leHBvcnQgZGVmYXVsdCBidWlsZFVybDtcbiIsImltcG9ydCB7IGNvbnZlcnQgfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0IHZhciBib3JkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS50eXBlLCB0eXBlID0gX2IgPT09IHZvaWQgMCA/ICdzb2xpZCcgOiBfYiwgX2MgPSBfYS5jb2xvciwgY29sb3IgPSBfYyA9PT0gdm9pZCAwID8gJ2JsYWNrJyA6IF9jLCB3aWR0aCA9IF9hLndpZHRoO1xuICAgIGlmICghd2lkdGgpXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpc05hTih3aWR0aCkgPyBjb252ZXJ0KHdpZHRoKSA6IHdpZHRoICsgXCJweFwiO1xuICAgIHJldHVybiBcImJvX1wiICsgZm9ybWF0dGVkVmFsdWUgKyBcIl9cIiArIHR5cGUgKyBcIl9cIiArIGNvbG9yO1xufTtcbiIsImltcG9ydCB0cmFuc2Zvcm0sIHsgdG9UcmFuc2Zvcm1hdGlvblN0ciB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBDb25kaXRpb25PcGVyYXRvcnMgfSBmcm9tIFwiQGNsZC1hcGlzL3V0aWxzXCI7XG5pbXBvcnQgeyBDb25kaXRpb25hbFBhcmFtcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmV4cG9ydCB2YXIgY29tcHV0ZUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChjb25kaXRpb25PYmopIHtcbiAgICB2YXIgZXhwcmVzc2lvbiA9IGNvbmRpdGlvbk9iai5leHByZXNzaW9uID8gdG9TdHJpbmcoY29uZGl0aW9uT2JqLmV4cHJlc3Npb24ubWFwKGZ1bmN0aW9uIChleHApIHsgcmV0dXJuIGNvbXB1dGVDb25kaXRpb25FeHByZXNzaW9uKGV4cCk7IH0pLCAnX2FuZF8nKSA6ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1hdGlvbnMgPSBjb25kaXRpb25PYmoudHJhbnNmb3JtYXRpb25zLm1hcChmdW5jdGlvbiAodHJhbnNmb3JtYXRpb24pIHsgcmV0dXJuIHRvVHJhbnNmb3JtYXRpb25TdHIodHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uKSk7IH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGV4cHJlc3Npb246IGV4cHJlc3Npb24sXG4gICAgICAgIHRyYW5zZm9ybWF0aW9uczogdG9TdHJpbmcodHJhbnNmb3JtYXRpb25zLCAnLycpXG4gICAgfTtcbn07XG5leHBvcnQgdmFyIG1hcENoYXJhY3RlcmlzdGljID0gZnVuY3Rpb24gKGV4cHJlc3Npb24pIHsgcmV0dXJuIENvbmRpdGlvbmFsUGFyYW1zW2V4cHJlc3Npb25dIHx8IGV4cHJlc3Npb247IH07XG5leHBvcnQgdmFyIGNvbXB1dGVDb25kaXRpb25FeHByZXNzaW9uID0gZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICB2YXIgY2hhcmFjdGVyaXN0aWMgPSBBcnJheS5pc0FycmF5KGV4cHJlc3Npb24uY2hhcmFjdGVyaXN0aWMpID8gdG9TdHJpbmcoZXhwcmVzc2lvbi5jaGFyYWN0ZXJpc3RpYy5tYXAobWFwQ2hhcmFjdGVyaXN0aWMpKSA6IG1hcENoYXJhY3RlcmlzdGljKGV4cHJlc3Npb24uY2hhcmFjdGVyaXN0aWMpO1xuICAgIHZhciBvcGVyYXRvciA9IENvbmRpdGlvbk9wZXJhdG9yc1tleHByZXNzaW9uLm9wZXJhdG9yXTtcbiAgICB2YXIgdmFsdWUgPSBpc05hTihleHByZXNzaW9uLnZhbHVlKSA/IFwiIVwiICsgZXhwcmVzc2lvbi52YWx1ZSArIFwiIVwiIDogZXhwcmVzc2lvbi52YWx1ZTtcbiAgICByZXR1cm4gdG9TdHJpbmcoW2NoYXJhY3RlcmlzdGljLCBvcGVyYXRvciwgdmFsdWVdLCAnXycpO1xufTtcbmV4cG9ydCB2YXIgY29uZGl0aW9uID0gZnVuY3Rpb24gKGNvbmRpdGlvbk9iaikge1xuICAgIGlmICghY29uZGl0aW9uT2JqIHx8ICFjb25kaXRpb25PYmouaWYgfHwgIWNvbmRpdGlvbk9iai5pZi5leHByZXNzaW9uKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIGlmQ29uZGl0aW9uID0gY29tcHV0ZUNvbmRpdGlvbihjb25kaXRpb25PYmouaWYpO1xuICAgIHZhciBlbHNlQ29uZGl0aW9uID0gY29uZGl0aW9uT2JqLmVsc2UgPyBjb21wdXRlQ29uZGl0aW9uKGNvbmRpdGlvbk9iai5lbHNlKSA6IG51bGw7XG4gICAgdmFyIGZvcm1hdHRlZElmID0gdG9TdHJpbmcoW1wiaWZfXCIgKyBpZkNvbmRpdGlvbi5leHByZXNzaW9uLCBpZkNvbmRpdGlvbi50cmFuc2Zvcm1hdGlvbnNdLCAnLycpO1xuICAgIHZhciBmb3JtYXR0ZWRFbHNlID0gZWxzZUNvbmRpdGlvbiA/IHRvU3RyaW5nKFsnaWZfZWxzZScsIGVsc2VDb25kaXRpb24udHJhbnNmb3JtYXRpb25zXSwgJy8nKSA6ICcnO1xuICAgIHJldHVybiBbdG9TdHJpbmcoW2Zvcm1hdHRlZElmLCBmb3JtYXR0ZWRFbHNlLCAnaWZfZW5kJ10sICcvJyldO1xufTtcbiIsImltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IHZhciBlZmZlY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyc7XG4gICAgaWYgKCFvYmogfHwgKCFpc1N0cmluZyAmJiAhb2JqLm5hbWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgaWYgKGlzU3RyaW5nIHx8ICFvYmoudmFsdWUpXG4gICAgICAgIHJldHVybiBcImVfXCIgKyAob2JqLm5hbWUgfHwgb2JqKTtcbiAgICB2YXIgdmFsdWUgPSBBcnJheS5pc0FycmF5KG9iai52YWx1ZSkgPyBvYmoudmFsdWUuam9pbignOicpIDogb2JqLnZhbHVlO1xuICAgIHZhciBlZmZlY3RWYWx1ZSA9IHRvU3RyaW5nKFtvYmoubmFtZSwgdmFsdWVdKTtcbiAgICByZXR1cm4gXCJlX1wiICsgZWZmZWN0VmFsdWU7XG59O1xuIiwiaW1wb3J0IHsgQXJpdGhtZXRpY0V4cHJlc3Npb24sIFByZURlZmluZWRQYXR0ZXJucywgUHJlZGVmaW5lZFZhcmlhYmxlcyB9IGZyb20gJy4uL2NvbnN0YW50cy9hcml0aG1ldGljJztcbmltcG9ydCB7IFByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cy92YXJpYWJsZSc7XG52YXIgT1BFUkFUT1JTX1JFR0VYID0gXCIoKFxcXFx8XFxcXHx8Pj18PD18JiZ8IT18Pnw9fDx8L3wtfFxcXFwrfFxcXFwqfFxcXFxeKSg/PVsgX10pKVwiO1xudmFyIG1hcEFyaXRobWV0aWNFeHByZXNzaW9uID0gZnVuY3Rpb24gKG9yZ0V4cHJlc3Npb24pIHtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKE9QRVJBVE9SU19SRUdFWCwgJ2cnKTtcbiAgICByZXR1cm4gb3JnRXhwcmVzc2lvbi5yZXBsYWNlKHJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHsgcmV0dXJuIEFyaXRobWV0aWNFeHByZXNzaW9uW21hdGNoXTsgfSk7XG59O1xudmFyIG1hcFByZWRlZmluZWRWYXJpYWJsZXMgPSBmdW5jdGlvbiAob3JnRXhwcmVzc2lvbikge1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoUHJlRGVmaW5lZFBhdHRlcm5zLCAnZycpO1xuICAgIHJldHVybiBvcmdFeHByZXNzaW9uLnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcCwgaW5kZXgpIHsgcmV0dXJuIG9yZ0V4cHJlc3Npb25baW5kZXggLSAxXSA9PT0gUHJlZml4ID8gbWF0Y2ggOiBQcmVkZWZpbmVkVmFyaWFibGVzW21hdGNoXTsgfSk7XG59O1xuZXhwb3J0IHZhciBmb3JtYXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaXNOYU4odmFsdWUpID8gY29udmVydCh2YWx1ZSkgOiB2YWx1ZTsgfTtcbmV4cG9ydCB2YXIgY29udmVydCA9IGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgaWYgKCFleHByZXNzaW9uKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIG1hcHBlZEFyaXRobWV0aWMgPSBtYXBBcml0aG1ldGljRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICB2YXIgY29udmVydGVkID0gbWFwUHJlZGVmaW5lZFZhcmlhYmxlcyhtYXBwZWRBcml0aG1ldGljKTtcbiAgICByZXR1cm4gY29udmVydGVkLnJlcGxhY2UoL1sgX10rL2csICdfJyk7XG59O1xuZXhwb3J0IHZhciBoYXNBcml0aG1ldGljRXhwcmVzc2lvbiA9IGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChPUEVSQVRPUlNfUkVHRVgsICdnJyk7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZXhwcmVzc2lvbik7XG59O1xuIiwiZXhwb3J0IHZhciBmbGFncyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIGZsYWdWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IHZhbHVlLmpvaW4oJzonKTtcbiAgICByZXR1cm4gXCJmbF9cIiArIGZsYWdWYWx1ZTtcbn07XG4iLCJpbXBvcnQgeyBUUkFOU0ZPUk1FUlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWNjZXB0TnVtYmVyaWNWYXJzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FyaXRobWV0aWMnO1xuaW1wb3J0IHsgY29uZGl0aW9uIH0gZnJvbSAnLi9jb25kaXRpb24nO1xuaW1wb3J0IHsgZWZmZWN0IH0gZnJvbSAnLi9lZmZlY3QnO1xuaW1wb3J0IHsgZm9ybWF0VmFsdWUgfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuaW1wb3J0IHsgZmxhZ3MgfSBmcm9tICcuL2ZsYWdzJztcbmltcG9ydCB7IHJhd1RyYW5zZm9ybWF0aW9uIH0gZnJvbSAnLi9yYXdUcmFuc2Zvcm1hdGlvbic7XG5pbXBvcnQgeyB2YXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBmcHMgfSBmcm9tICcuL3ZpZGVvL2Zwcyc7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tICcuL3ZpZGVvL29mZnNldCc7XG5pbXBvcnQgeyByZXNpemUgfSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgeyBib3JkZXIgfSBmcm9tICcuL2JvcmRlcic7XG5pbXBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24nO1xuZXhwb3J0IHZhciBnZXRSZXNpemUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBoYXNSZXNpemUgPSBvcHRpb25zLnJlc2l6ZSB8fCBvcHRpb25zLndpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0IHx8IG9wdGlvbnMuYXNwZWN0UmF0aW87XG4gICAgaWYgKCFoYXNSZXNpemUpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gcmVzaXplKG9wdGlvbnMucmVzaXplIHx8IHsgd2lkdGg6IG9wdGlvbnMud2lkdGgsIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsIHR5cGU6IG9wdGlvbnMuY3JvcCwgYXNwZWN0UmF0aW86IG9wdGlvbnMuYXNwZWN0UmF0aW8gfSk7XG59O1xuZXhwb3J0IHZhciBnZXRCb3JkZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5ib3JkZXIpXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgYm9yZGVyTW9kaWZpY2F0aW9uID0gKHR5cGVvZiBvcHRpb25zLmJvcmRlciA9PT0gJ3N0cmluZycpID8gXCJib19cIiArIG9wdGlvbnMuYm9yZGVyIDogYm9yZGVyKG9wdGlvbnMuYm9yZGVyKTtcbiAgICByZXR1cm4gYm9yZGVyTW9kaWZpY2F0aW9uO1xufTtcbmV4cG9ydCB2YXIgZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy54ICYmICFvcHRpb25zLnkgJiYgIW9wdGlvbnMucG9zaXRpb24pXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gcG9zaXRpb24ob3B0aW9ucy5wb3NpdGlvbiB8fCB7IHg6IG9wdGlvbnMueCwgeTogb3B0aW9ucy55IH0pO1xufTtcbmV4cG9ydCB2YXIgZ2V0VHJhbnNmb3JtYXRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0LnB1c2godmFyaWFibGVzKG9wdGlvbnMudmFyaWFibGVzKSk7XG4gICAgcmVzdWx0LnB1c2goZ2V0UmVzaXplKG9wdGlvbnMpKTtcbiAgICByZXN1bHQucHVzaChnZXRCb3JkZXIob3B0aW9ucykpO1xuICAgIHJlc3VsdC5wdXNoKGdldFBvc2l0aW9uKG9wdGlvbnMpKTtcbiAgICByZXN1bHQucHVzaChmcHMob3B0aW9ucy5mcHMpKTtcbiAgICByZXN1bHQucHVzaChvZmZzZXQob3B0aW9ucy5vZmZzZXQpKTtcbiAgICBmb3IgKHZhciBtb2RpZmllciBpbiBvcHRpb25zKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbbW9kaWZpZXJdO1xuICAgICAgICB2YXIgbWFwcGluZyA9IFRSQU5TRk9STUVSU1ttb2RpZmllcl07XG4gICAgICAgIGlmICghbWFwcGluZyB8fCAhdmFsdWUpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdmFyIGlzQWNjZXB0ZWROdW1iZXJpYyA9IEFjY2VwdE51bWJlcmljVmFycy5pbmNsdWRlcyhtb2RpZmllcik7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1hcHBpbmcgKyBcIl9cIiArIChpc0FjY2VwdGVkTnVtYmVyaWMgPyBmb3JtYXRWYWx1ZSh2YWx1ZSkgOiB2YWx1ZSkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChlZmZlY3Qob3B0aW9ucy5lZmZlY3QpKTtcbiAgICByZXN1bHQucHVzaChmbGFncyhvcHRpb25zLmZsYWdzKSk7XG4gICAgcmVzdWx0LnB1c2gocmF3VHJhbnNmb3JtYXRpb24ob3B0aW9ucy5yYXdUcmFuc2Zvcm1hdGlvbikpO1xuICAgIHJlc3VsdC5wdXNoKGNvbmRpdGlvbihvcHRpb25zLmNvbmRpdGlvbikpO1xuICAgIHJldHVybiByZXN1bHQuZmlsdGVyKEJvb2xlYW4pO1xufTtcbmV4cG9ydCB2YXIgdHJhbnNmb3JtID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdHJhbnNmb3JtYXRpb25zID0gZ2V0VHJhbnNmb3JtYXRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBjaGFpbmVkVHJhbnNmb3JtYXRpb25zID0gb3B0aW9ucy50cmFuc2Zvcm1hdGlvbiB8fCBvcHRpb25zLmNoYWluaW5nO1xuICAgIGlmIChjaGFpbmVkVHJhbnNmb3JtYXRpb25zICYmIEFycmF5LmlzQXJyYXkoY2hhaW5lZFRyYW5zZm9ybWF0aW9ucykpIHtcbiAgICAgICAgY2hhaW5lZFRyYW5zZm9ybWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjaGFpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY2hhaW5lZFRyYW5zZm9ybWF0aW9uID0gZ2V0VHJhbnNmb3JtYXRpb25zKGNoYWluZWQpO1xuICAgICAgICAgICAgY2hhaW5lZFRyYW5zZm9ybWF0aW9uLmxlbmd0aCA+IDAgJiYgdHJhbnNmb3JtYXRpb25zLnB1c2goY2hhaW5lZFRyYW5zZm9ybWF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1hdGlvbnMuZmlsdGVyKEJvb2xlYW4pO1xufTtcbmV4cG9ydCB2YXIgdG9UcmFuc2Zvcm1hdGlvblN0ciA9IGZ1bmN0aW9uICh0cmFuc2Zvcm1hdGlvbnMpIHsgcmV0dXJuIHRyYW5zZm9ybWF0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgdHJhbnNmb3JtYXRpb24pIHtcbiAgICB2YXIgaXNDaGFpbmVkID0gQXJyYXkuaXNBcnJheSh0cmFuc2Zvcm1hdGlvbik7XG4gICAgdmFyIHNlcGFyYXRpb24gPSBpc0NoYWluZWQgPyAnLycgOiAnLCc7XG4gICAgcmV0dXJuIFwiXCIgKyBzdHIgKyAoc3RyID8gc2VwYXJhdGlvbiA6ICcnKSArIHRyYW5zZm9ybWF0aW9uLnRvU3RyaW5nKCk7XG59LCAnJyk7IH07XG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBmb3JtYXRWYWx1ZSB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgdmFyIHBvc2l0aW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICB2YXIgeEF4aXMgPSB4ID8gXCJ4X1wiICsgZm9ybWF0VmFsdWUoeCkgOiAnJztcbiAgICB2YXIgeUF4aXMgPSB5ID8gXCJ5X1wiICsgZm9ybWF0VmFsdWUoeSkgOiAnJztcbiAgICByZXR1cm4gW3hBeGlzLCB5QXhpc10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oKTtcbn07XG4iLCJleHBvcnQgdmFyIHJhd1RyYW5zZm9ybWF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbiIsImltcG9ydCB7IGZvcm1hdFZhbHVlIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuZXhwb3J0IHZhciByZXNpemUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdHlwZSA9IF9hLnR5cGUsIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodCwgYXNwZWN0UmF0aW8gPSBfYS5hc3BlY3RSYXRpbztcbiAgICB2YXIgdyA9IHdpZHRoID8gXCJ3X1wiICsgZm9ybWF0VmFsdWUod2lkdGgpIDogJyc7XG4gICAgdmFyIGggPSBoZWlnaHQgPyBcImhfXCIgKyBmb3JtYXRWYWx1ZShoZWlnaHQpIDogJyc7XG4gICAgdmFyIGNyb3AgPSB0eXBlID8gXCJjX1wiICsgdHlwZSA6ICcnO1xuICAgIHZhciBhciA9IGFzcGVjdFJhdGlvID8gXCJhcl9cIiArIGZvcm1hdFZhbHVlKGFzcGVjdFJhdGlvKSA6ICcnO1xuICAgIHJldHVybiBbY3JvcCwgdywgaCwgYXJdLmZpbHRlcihCb29sZWFuKS5qb2luKCk7XG59O1xuIiwiaW1wb3J0IHsgRm9ybWF0cywgUHJlZml4IH0gZnJvbSBcIi4uL2NvbnN0YW50cy92YXJpYWJsZVwiO1xuaW1wb3J0IHsgVmFsdWVBc3NpZ25hYmxlIH0gZnJvbSAnQGNsZC1hcGlzL3V0aWxzJztcbmltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBjb252ZXJ0LCBoYXNBcml0aG1ldGljRXhwcmVzc2lvbiB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmV4cG9ydCB2YXIgY29udmVydFN0cmluZ1ZhbHVlVHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgfHwgIXZhbHVlLmV4cHJlc3Npb24pXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgZXhwcmVzc2lvbiA9IEFycmF5LmlzQXJyYXkodmFsdWUuZXhwcmVzc2lvbikgPyB0b1N0cmluZyh2YWx1ZS5leHByZXNzaW9uKSA6IHZhbHVlLmV4cHJlc3Npb247XG4gICAgdmFyIGlzQXJpdGhtZXRpYyA9IGhhc0FyaXRobWV0aWNFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgIHZhciBjb252ZXJ0ZWRFeHByZXNzaW9uID0gY29udmVydChleHByZXNzaW9uKTtcbiAgICB2YXIgZm9ybWF0ID0gRm9ybWF0c1t2YWx1ZS5mb3JtYXRBc10gfHwgJyc7XG4gICAgdmFyIG1hcHBlZEV4cHJlc3Npb24gPSBjb252ZXJ0ZWRFeHByZXNzaW9uICYmICFpc0FyaXRobWV0aWMgPyBcIiFcIiArIGNvbnZlcnRlZEV4cHJlc3Npb24gKyBcIiFcIiA6IGNvbnZlcnRlZEV4cHJlc3Npb247XG4gICAgcmV0dXJuIHRvU3RyaW5nKFttYXBwZWRFeHByZXNzaW9uLCBmb3JtYXRdLCAnXycpO1xufTtcbmV4cG9ydCB2YXIgY29tcHV0ZVZhcmlhYmxlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiICsgUHJlZml4ICsgdmFyaWFibGUubmFtZTtcbiAgICB2YXIgdmFsdWUgPSB2YXJpYWJsZS52YWx1ZTtcbiAgICBpZiAoaXNOYU4odmFyaWFibGUudmFsdWUpKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhcmlhYmxlLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0cmluZyh2YXJpYWJsZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNvbnZlcnRTdHJpbmdWYWx1ZVR5cGUodmFyaWFibGUudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB2YXJWYWx1ZSA9IHRvU3RyaW5nKFtWYWx1ZUFzc2lnbmFibGVbdmFyaWFibGUuYXNzaWduRnJvbV0sIHZhbHVlXSwgJzonKTtcbiAgICByZXR1cm4gdmFyVmFsdWUgPyB0b1N0cmluZyhbbmFtZSwgdmFyVmFsdWVdLCAnXycpIDogJyc7XG59O1xuZXhwb3J0IHZhciB2YXJpYWJsZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVWYXJpYWJsZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRvU3RyaW5nKHZhbHVlLm1hcChmdW5jdGlvbiAodmFyaWFibGUpIHsgcmV0dXJuIGNvbXB1dGVWYXJpYWJsZSh2YXJpYWJsZSk7IH0pLCAnLCcpO1xufTtcbiIsImltcG9ydCB7IHRvU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5leHBvcnQgdmFyIGZwcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBpc09iaiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNPYmogJiYgIXZhbHVlLm1pbikpXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgcmFuZ2UgPSBpc09iaiA/IHRvU3RyaW5nKFt2YWx1ZS5taW4sIHZhbHVlLm1heF0sICctJykgOiB2YWx1ZTtcbiAgICByZXR1cm4gXCJmcHNfXCIgKyByYW5nZTtcbn07XG4iLCJleHBvcnQgdmFyIG9mZnNldCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoIW9iailcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBzdGFydCA9IG9iai5zdGFydCA/IFwic29fXCIgKyBvYmouc3RhcnQgOiAnJztcbiAgICB2YXIgZW5kID0gb2JqLmVuZCA/IFwiZW9fXCIgKyBvYmouZW5kIDogJyc7XG4gICAgdmFyIGR1cmF0aW9uID0gb2JqLmR1cmF0aW9uID8gXCJkdV9cIiArIG9iai5kdXJhdGlvbiA6ICcnO1xuICAgIHJldHVybiBbc3RhcnQsIGVuZCwgZHVyYXRpb25dLmZpbHRlcihCb29sZWFuKS5qb2luKCcsJyk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IFNFT19UWVBFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTT1VSQ0VfVFlQRVMsIFNUT1JBR0VfVFlQRVMgfSBmcm9tICdAY2xkLWFwaXMvdXRpbHMnO1xuaW1wb3J0IHsgdG9UcmFuc2Zvcm1hdGlvblN0ciwgdHJhbnNmb3JtIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xudmFyIFNIQVJFRF9DRE5TID0gW1wiY2xvdWRpbmFyeS1hLmFrYW1haWhkLm5ldFwiLCBcInJlcy5jbG91ZGluYXJ5LmNvbVwiXTtcbnZhciBDTE9VRElOQVJZX1JFR0VYID0gL14uK1xcLmNsb3VkaW5hcnlcXC5jb21cXC8oPzpbXlxcL10rXFwvKSg/OihpbWFnZXx2aWRlb3xyYXcpXFwvKT8oPzoodXBsb2FkfGZldGNofHByaXZhdGV8YXV0aGVudGljYXRlZHxzcHJpdGV8ZmFjZWJvb2t8dHdpdHRlcnx5b3V0dWJlfHZpbWVvKVxcLyk/KD86KD86W15fL10rX1teLC9dKyw/KSpcXC8pPyg/OnYoXFxkK3xcXHd7MSwyfSlcXC8pPyhbXlxcLl5cXHNdKykoPzpcXC4oLispKT8kLztcbmV4cG9ydCB2YXIgZXh0cmFjdFB1YmxpY0lkID0gZnVuY3Rpb24gKGxpbmspIHtcbiAgICBpZiAoIWxpbmspXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgcGFydHMgPSBDTE9VRElOQVJZX1JFR0VYLmV4ZWMobGluayk7XG4gICAgcmV0dXJuIHBhcnRzICYmIHBhcnRzLmxlbmd0aCA+IDIgPyBwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSA6IGxpbms7XG59O1xuZXhwb3J0IHZhciBnZXRTaWduYXR1cmUgPSBmdW5jdGlvbiAoc2lnbmF0dXJlKSB7XG4gICAgaWYgKCFzaWduYXR1cmUpXG4gICAgICAgIHJldHVybiAnJztcbiAgICB2YXIgaXNGb3JtYXR0ZWQgPSBzaWduYXR1cmUuaW5kZXhPZigncy0tJykgPT09IDAgJiYgc2lnbmF0dXJlLmVuZHNXaXRoKCctLScpO1xuICAgIHJldHVybiBpc0Zvcm1hdHRlZCA/IHNpZ25hdHVyZSA6IFwicy0tXCIgKyBzaWduYXR1cmUgKyBcIi0tXCI7XG59O1xudmFyIGRvZXNQYXRoTmVlZFZlcnNpb24gPSBmdW5jdGlvbiAocHVibGljSWQpIHsgcmV0dXJuICFwdWJsaWNJZC5tYXRjaCgvXnZbMC05XSsvKSAmJiAhcHVibGljSWQubWF0Y2goL15odHRwcz86XFwvLyk7IH07XG5leHBvcnQgdmFyIGVuY29kZVB1YmxpY0lkID0gZnVuY3Rpb24gKHB1YmxpY0lkKSB7IHJldHVybiBlbmNvZGVVUklDb21wb25lbnQocHVibGljSWQpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyRi9nLCAnLycpOyB9O1xuZXhwb3J0IHZhciBnZXRWZXJzaW9uID0gZnVuY3Rpb24gKHB1YmxpY0lkLCBfYSkge1xuICAgIHZhciBfYiA9IF9hLmZvcmNlVmVyc2lvbiwgZm9yY2VWZXJzaW9uID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2EudmVyc2lvbiwgdmVyc2lvbiA9IF9jID09PSB2b2lkIDAgPyAxIDogX2M7XG4gICAgdmFyIG5lZWRWZXJzaW9uID0gZG9lc1BhdGhOZWVkVmVyc2lvbihwdWJsaWNJZCkgJiYgZm9yY2VWZXJzaW9uO1xuICAgIHJldHVybiBuZWVkVmVyc2lvbiA/IFwidlwiICsgdmVyc2lvbiA6ICcnO1xufTtcbmV4cG9ydCB2YXIgZ2V0U3ViRG9tYWluID0gZnVuY3Rpb24gKHB1YmxpY0lkLCBfYSkge1xuICAgIHZhciBfYiA9IF9hLmNkblN1YmRvbWFpbiwgY2RuU3ViZG9tYWluID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIGNuYW1lID0gX2EuY25hbWU7XG4gICAgaWYgKCFjbmFtZSlcbiAgICAgICAgcmV0dXJuIFwicmVzXCIgKyAoY2RuU3ViZG9tYWluID8gXCItXCIgKyBwdWJsaWNJZCA6ICcnKTtcbiAgICByZXR1cm4gY2RuU3ViZG9tYWluID8gXCJhXCIgKyBwdWJsaWNJZCArIFwiLlwiIDogJyc7XG59O1xuZXhwb3J0IHZhciBnZXRQcmVmaXggPSBmdW5jdGlvbiAocHVibGljSWQsIF9hKSB7XG4gICAgdmFyIGNsb3VkTmFtZSA9IF9hLmNsb3VkTmFtZSwgX2IgPSBfYS5wcml2YXRlQ2RuLCBwcml2YXRlQ2RuID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2EuY2RuU3ViZG9tYWluLCBjZG5TdWJkb21haW4gPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgc2VjdXJlRGlzdHJpYnV0aW9uID0gX2Euc2VjdXJlRGlzdHJpYnV0aW9uLCBjbmFtZSA9IF9hLmNuYW1lLCBfZCA9IF9hLnNlY3VyZSwgc2VjdXJlID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZDtcbiAgICB2YXIgaGFzU2VjdXJlRGlzdHJpYnV0aW9uID0gc2VjdXJlICYmIHNlY3VyZURpc3RyaWJ1dGlvbiAmJiAhU0hBUkVEX0NETlMuaW5jbHVkZXMoc2VjdXJlRGlzdHJpYnV0aW9uKTtcbiAgICB2YXIgcHJvdG9jb2wgPSBcImh0dHBcIiArIChzZWN1cmUgPyAncycgOiAnJykgKyBcIjovL1wiO1xuICAgIHZhciBjZG4gPSBwcml2YXRlQ2RuICYmICFoYXNTZWN1cmVEaXN0cmlidXRpb24gPyBjbG91ZE5hbWUgKyBcIi1cIiA6ICcnO1xuICAgIHZhciBhY2NvdW50UGF0aCA9IHByaXZhdGVDZG4gPyAnJyA6IFwiL1wiICsgY2xvdWROYW1lO1xuICAgIHZhciBzdWJEb21haW4gPSBoYXNTZWN1cmVEaXN0cmlidXRpb24gPyAnJyA6IGdldFN1YkRvbWFpbihwdWJsaWNJZCwgeyBjZG5TdWJkb21haW46IGNkblN1YmRvbWFpbiwgY25hbWU6IGNuYW1lIH0pO1xuICAgIHZhciBob3N0ID0gaGFzU2VjdXJlRGlzdHJpYnV0aW9uID8gc2VjdXJlRGlzdHJpYnV0aW9uIDogKGNuYW1lIHx8ICcuY2xvdWRpbmFyeS5jb20nKTtcbiAgICByZXR1cm4gXCJcIiArIHByb3RvY29sICsgY2RuICsgc3ViRG9tYWluICsgaG9zdCArIGFjY291bnRQYXRoO1xufTtcbmV4cG9ydCB2YXIgZ2V0UmVzb3VyY2VUeXBlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gX2EucmVzb3VyY2VUeXBlLCByZXNvdXJjZVR5cGUgPSBfYiA9PT0gdm9pZCAwID8gUkVTT1VSQ0VfVFlQRVMuSU1BR0UgOiBfYiwgX2MgPSBfYS5zdG9yYWdlVHlwZSwgc3RvcmFnZVR5cGUgPSBfYyA9PT0gdm9pZCAwID8gU1RPUkFHRV9UWVBFUy5VUExPQUQgOiBfYywgdXJsU3VmZml4ID0gX2EudXJsU3VmZml4LCB1c2VSb290UGF0aCA9IF9hLnVzZVJvb3RQYXRoLCBzaG9ydGVybiA9IF9hLnNob3J0ZXJuO1xuICAgIHZhciBpc1VwbG9hZEltYWdlID0gcmVzb3VyY2VUeXBlID09PSBSRVNPVVJDRV9UWVBFUy5JTUFHRSAmJiBzdG9yYWdlVHlwZSA9PT0gU1RPUkFHRV9UWVBFUy5VUExPQUQ7XG4gICAgdmFyIHVzZVJvb3RGb3JOb25VcGxvYWRlZEltYWdlcyA9IHVzZVJvb3RQYXRoICYmICFpc1VwbG9hZEltYWdlO1xuICAgIHZhciBzaG9ydGVuRm9yVXBsb2FkZWRJbWFnZXMgPSBzaG9ydGVybiAmJiBpc1VwbG9hZEltYWdlO1xuICAgIHZhciB0eXBlUGF0aCA9IHJlc291cmNlVHlwZSArIFwiL1wiICsgc3RvcmFnZVR5cGU7XG4gICAgaWYgKHVzZVJvb3RGb3JOb25VcGxvYWRlZEltYWdlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb290IHBhdGggb25seSBzdXBwb3J0ZWQgZm9yIGltYWdlL3VwbG9hZFwiKTtcbiAgICB9XG4gICAgaWYgKHVzZVJvb3RQYXRoKVxuICAgICAgICByZXR1cm4gXCJcIiArIChzaG9ydGVuRm9yVXBsb2FkZWRJbWFnZXMgPyAnaXUnIDogJycpO1xuICAgIGlmICh1cmxTdWZmaXgpIHtcbiAgICAgICAgdmFyIHNlbyA9IFNFT19UWVBFU1t0eXBlUGF0aF07XG4gICAgICAgIGlmIChzZW8pIHtcbiAgICAgICAgICAgIHJldHVybiBzZW87XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVVJMIFN1ZmZpeCBvbmx5IHN1cHBvcnRlZCBmb3IgXCIgKyBPYmplY3Qua2V5cyhTRU9fVFlQRVMpLmpvaW4oJywgJykpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZVBhdGg7XG59O1xudmFyIGlzVXJsID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyICYmICEhc3RyLm1hdGNoKC9eaHR0cHM/OlxcLy8pOyB9O1xuZXhwb3J0IHZhciBnZXRQYXRoVG9Bc3NldCA9IGZ1bmN0aW9uIChwdWJsaWNJZCwgX2EpIHtcbiAgICB2YXIgX2IgPSBfYS51cmxTdWZmaXgsIHVybFN1ZmZpeCA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iLCBfYyA9IF9hLmZvcm1hdCwgZm9ybWF0ID0gX2MgPT09IHZvaWQgMCA/ICcnIDogX2M7XG4gICAgaWYgKGlzVXJsKHB1YmxpY0lkKSlcbiAgICAgICAgcmV0dXJuIGVuY29kZVB1YmxpY0lkKHB1YmxpY0lkKTtcbiAgICB2YXIgcHVibGljSWRXaXRoRm9ybWF0ID0gcHVibGljSWQucmVwbGFjZSgvXFwuW14vLl0rJC8sIGZvcm1hdCB8fCAnJyk7XG4gICAgdmFyIHBhdGggPSBbcHVibGljSWRXaXRoRm9ybWF0LCB1cmxTdWZmaXhdLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIGVuY29kZVB1YmxpY0lkKHBhdGgpO1xufTtcbmV4cG9ydCB2YXIgdXJsID0gZnVuY3Rpb24gKHB1YmxpY0lkLCBjbG91ZCwgb3B0aW9ucykge1xuICAgIGlmIChjbG91ZCA9PT0gdm9pZCAwKSB7IGNsb3VkID0geyBjbG91ZE5hbWU6ICcnIH07IH1cbiAgICBpZiAoIWNsb3VkLmNsb3VkTmFtZSkge1xuICAgICAgICB0aHJvdyBFcnJvcignY2xvdWROYW1lIGlzIHJlcXVpcmVkIScpO1xuICAgIH1cbiAgICB2YXIgX3B1YmxpY0lkID0gaXNVcmwocHVibGljSWQpID8gZXh0cmFjdFB1YmxpY0lkKHB1YmxpY0lkKSA6IHB1YmxpY0lkO1xuICAgIHZhciB2ZXJzaW9uID0gZ2V0VmVyc2lvbihfcHVibGljSWQsIGNsb3VkKTtcbiAgICB2YXIgcHJlZml4ID0gZ2V0UHJlZml4KF9wdWJsaWNJZCwgY2xvdWQpO1xuICAgIHZhciBzaWduYXR1cmUgPSBnZXRTaWduYXR1cmUoY2xvdWQuc2lnbmF0dXJlKTtcbiAgICB2YXIgdHlwZVBhdGggPSBnZXRSZXNvdXJjZVR5cGUoY2xvdWQpO1xuICAgIHZhciBwYXRoVG9Bc3NldCA9IGdldFBhdGhUb0Fzc2V0KF9wdWJsaWNJZCwgeyBmb3JtYXQ6IG9wdGlvbnMuZm9ybWF0LCB1cmxTdWZmaXg6IGNsb3VkLnVybFN1ZmZpeCB9KTtcbiAgICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mZXRjaEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCAnYXV0byc7XG4gICAgdmFyICRvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oeyBxdWFsaXR5OiAnYXV0bycgfSwgb3B0aW9ucyksIHsgZm9ybWF0OiBmb3JtYXQgfSk7XG4gICAgdmFyIHRyYW5zID0gdG9UcmFuc2Zvcm1hdGlvblN0cih0cmFuc2Zvcm0oJG9wdGlvbnMpKTtcbiAgICByZXR1cm4gW3ByZWZpeCwgdHlwZVBhdGgsIHNpZ25hdHVyZSwgdHJhbnMsIHZlcnNpb24sIHBhdGhUb0Fzc2V0XS5maWx0ZXIoQm9vbGVhbikuam9pbignLycpLnJlcGxhY2UoJyAnLCAnJTIwJyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXJsO1xuIiwiZXhwb3J0IHZhciB0b1N0cmluZyA9IGZ1bmN0aW9uIChhcnIsIHNlcGFyYXRpb24pIHtcbiAgICBpZiAoc2VwYXJhdGlvbiA9PT0gdm9pZCAwKSB7IHNlcGFyYXRpb24gPSAnOic7IH1cbiAgICByZXR1cm4gYXJyLmZpbHRlcihCb29sZWFuKS5qb2luKHNlcGFyYXRpb24pO1xufTtcbmV4cG9ydCB2YXIgY2xlYW5UZXh0ID0gZnVuY3Rpb24gKHRleHQpIHsgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KS5yZXBsYWNlKC8lKDIzfDJDfDJGfDNGfDVDKS9nLCAnJTI1JDEnKTsgfTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBMYXRpbiBVbmljb2RlIGxldHRlcnMgKGV4Y2x1ZGluZyBtYXRoZW1hdGljYWwgb3BlcmF0b3JzKS4gKi9cbnZhciByZUxhdGluID0gL1tcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx4ZmZcXHUwMTAwLVxcdTAxN2ZdL2c7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZjAnLFxuICAgIHJzRGluZ2JhdFJhbmdlID0gJ1xcXFx1MjcwMC1cXFxcdTI3YmYnLFxuICAgIHJzTG93ZXJSYW5nZSA9ICdhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmYnLFxuICAgIHJzTWF0aE9wUmFuZ2UgPSAnXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmNycsXG4gICAgcnNOb25DaGFyUmFuZ2UgPSAnXFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmJyxcbiAgICByc1B1bmN0dWF0aW9uUmFuZ2UgPSAnXFxcXHUyMDAwLVxcXFx1MjA2ZicsXG4gICAgcnNTcGFjZVJhbmdlID0gJyBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwJyxcbiAgICByc1VwcGVyUmFuZ2UgPSAnQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZicsXG4gICAgcnNCcmVha1JhbmdlID0gcnNNYXRoT3BSYW5nZSArIHJzTm9uQ2hhclJhbmdlICsgcnNQdW5jdHVhdGlvblJhbmdlICsgcnNTcGFjZVJhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib01hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNMb3dlck1pc2MgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNVcHBlck1pc2MgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRMb3dlckNvbnRyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPycsXG4gICAgcnNPcHRVcHBlckNvbnRyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86RHxMTHxNfFJFfFN8VHxWRSkpPycsXG4gICAgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRMb3dlckNvbnRyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXJNaXNjICsgJysnICsgcnNPcHRVcHBlckNvbnRyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTG93ZXJNaXNjLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXJNaXNjICsgJysnICsgcnNPcHRMb3dlckNvbnRyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRVcHBlckNvbnRyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc1VuaWNvZGVXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mix9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKiogVXNlZCB0byBtYXAgTGF0aW4gVW5pY29kZSBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuICovXG52YXIgZGVidXJyZWRMZXR0ZXJzID0ge1xuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQgYmxvY2suXG4gICdcXHhjMCc6ICdBJywgICdcXHhjMSc6ICdBJywgJ1xceGMyJzogJ0EnLCAnXFx4YzMnOiAnQScsICdcXHhjNCc6ICdBJywgJ1xceGM1JzogJ0EnLFxuICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcbiAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxuICAnXFx4ZDAnOiAnRCcsICAnXFx4ZjAnOiAnZCcsXG4gICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXG4gICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXG4gICdcXHhjYyc6ICdJJywgICdcXHhjZCc6ICdJJywgJ1xceGNlJzogJ0knLCAnXFx4Y2YnOiAnSScsXG4gICdcXHhlYyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXG4gICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcbiAgJ1xceGQyJzogJ08nLCAgJ1xceGQzJzogJ08nLCAnXFx4ZDQnOiAnTycsICdcXHhkNSc6ICdPJywgJ1xceGQ2JzogJ08nLCAnXFx4ZDgnOiAnTycsXG4gICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxuICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxuICAnXFx4ZjknOiAndScsICAnXFx4ZmEnOiAndScsICdcXHhmYic6ICd1JywgJ1xceGZjJzogJ3UnLFxuICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcbiAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcbiAgJ1xceGRlJzogJ1RoJywgJ1xceGZlJzogJ3RoJyxcbiAgJ1xceGRmJzogJ3NzJyxcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSBibG9jay5cbiAgJ1xcdTAxMDAnOiAnQScsICAnXFx1MDEwMic6ICdBJywgJ1xcdTAxMDQnOiAnQScsXG4gICdcXHUwMTAxJzogJ2EnLCAgJ1xcdTAxMDMnOiAnYScsICdcXHUwMTA1JzogJ2EnLFxuICAnXFx1MDEwNic6ICdDJywgICdcXHUwMTA4JzogJ0MnLCAnXFx1MDEwYSc6ICdDJywgJ1xcdTAxMGMnOiAnQycsXG4gICdcXHUwMTA3JzogJ2MnLCAgJ1xcdTAxMDknOiAnYycsICdcXHUwMTBiJzogJ2MnLCAnXFx1MDEwZCc6ICdjJyxcbiAgJ1xcdTAxMGUnOiAnRCcsICAnXFx1MDExMCc6ICdEJywgJ1xcdTAxMGYnOiAnZCcsICdcXHUwMTExJzogJ2QnLFxuICAnXFx1MDExMic6ICdFJywgICdcXHUwMTE0JzogJ0UnLCAnXFx1MDExNic6ICdFJywgJ1xcdTAxMTgnOiAnRScsICdcXHUwMTFhJzogJ0UnLFxuICAnXFx1MDExMyc6ICdlJywgICdcXHUwMTE1JzogJ2UnLCAnXFx1MDExNyc6ICdlJywgJ1xcdTAxMTknOiAnZScsICdcXHUwMTFiJzogJ2UnLFxuICAnXFx1MDExYyc6ICdHJywgICdcXHUwMTFlJzogJ0cnLCAnXFx1MDEyMCc6ICdHJywgJ1xcdTAxMjInOiAnRycsXG4gICdcXHUwMTFkJzogJ2cnLCAgJ1xcdTAxMWYnOiAnZycsICdcXHUwMTIxJzogJ2cnLCAnXFx1MDEyMyc6ICdnJyxcbiAgJ1xcdTAxMjQnOiAnSCcsICAnXFx1MDEyNic6ICdIJywgJ1xcdTAxMjUnOiAnaCcsICdcXHUwMTI3JzogJ2gnLFxuICAnXFx1MDEyOCc6ICdJJywgICdcXHUwMTJhJzogJ0knLCAnXFx1MDEyYyc6ICdJJywgJ1xcdTAxMmUnOiAnSScsICdcXHUwMTMwJzogJ0knLFxuICAnXFx1MDEyOSc6ICdpJywgICdcXHUwMTJiJzogJ2knLCAnXFx1MDEyZCc6ICdpJywgJ1xcdTAxMmYnOiAnaScsICdcXHUwMTMxJzogJ2knLFxuICAnXFx1MDEzNCc6ICdKJywgICdcXHUwMTM1JzogJ2onLFxuICAnXFx1MDEzNic6ICdLJywgICdcXHUwMTM3JzogJ2snLCAnXFx1MDEzOCc6ICdrJyxcbiAgJ1xcdTAxMzknOiAnTCcsICAnXFx1MDEzYic6ICdMJywgJ1xcdTAxM2QnOiAnTCcsICdcXHUwMTNmJzogJ0wnLCAnXFx1MDE0MSc6ICdMJyxcbiAgJ1xcdTAxM2EnOiAnbCcsICAnXFx1MDEzYyc6ICdsJywgJ1xcdTAxM2UnOiAnbCcsICdcXHUwMTQwJzogJ2wnLCAnXFx1MDE0Mic6ICdsJyxcbiAgJ1xcdTAxNDMnOiAnTicsICAnXFx1MDE0NSc6ICdOJywgJ1xcdTAxNDcnOiAnTicsICdcXHUwMTRhJzogJ04nLFxuICAnXFx1MDE0NCc6ICduJywgICdcXHUwMTQ2JzogJ24nLCAnXFx1MDE0OCc6ICduJywgJ1xcdTAxNGInOiAnbicsXG4gICdcXHUwMTRjJzogJ08nLCAgJ1xcdTAxNGUnOiAnTycsICdcXHUwMTUwJzogJ08nLFxuICAnXFx1MDE0ZCc6ICdvJywgICdcXHUwMTRmJzogJ28nLCAnXFx1MDE1MSc6ICdvJyxcbiAgJ1xcdTAxNTQnOiAnUicsICAnXFx1MDE1Nic6ICdSJywgJ1xcdTAxNTgnOiAnUicsXG4gICdcXHUwMTU1JzogJ3InLCAgJ1xcdTAxNTcnOiAncicsICdcXHUwMTU5JzogJ3InLFxuICAnXFx1MDE1YSc6ICdTJywgICdcXHUwMTVjJzogJ1MnLCAnXFx1MDE1ZSc6ICdTJywgJ1xcdTAxNjAnOiAnUycsXG4gICdcXHUwMTViJzogJ3MnLCAgJ1xcdTAxNWQnOiAncycsICdcXHUwMTVmJzogJ3MnLCAnXFx1MDE2MSc6ICdzJyxcbiAgJ1xcdTAxNjInOiAnVCcsICAnXFx1MDE2NCc6ICdUJywgJ1xcdTAxNjYnOiAnVCcsXG4gICdcXHUwMTYzJzogJ3QnLCAgJ1xcdTAxNjUnOiAndCcsICdcXHUwMTY3JzogJ3QnLFxuICAnXFx1MDE2OCc6ICdVJywgICdcXHUwMTZhJzogJ1UnLCAnXFx1MDE2Yyc6ICdVJywgJ1xcdTAxNmUnOiAnVScsICdcXHUwMTcwJzogJ1UnLCAnXFx1MDE3Mic6ICdVJyxcbiAgJ1xcdTAxNjknOiAndScsICAnXFx1MDE2Yic6ICd1JywgJ1xcdTAxNmQnOiAndScsICdcXHUwMTZmJzogJ3UnLCAnXFx1MDE3MSc6ICd1JywgJ1xcdTAxNzMnOiAndScsXG4gICdcXHUwMTc0JzogJ1cnLCAgJ1xcdTAxNzUnOiAndycsXG4gICdcXHUwMTc2JzogJ1knLCAgJ1xcdTAxNzcnOiAneScsICdcXHUwMTc4JzogJ1knLFxuICAnXFx1MDE3OSc6ICdaJywgICdcXHUwMTdiJzogJ1onLCAnXFx1MDE3ZCc6ICdaJyxcbiAgJ1xcdTAxN2EnOiAneicsICAnXFx1MDE3Yyc6ICd6JywgJ1xcdTAxN2UnOiAneicsXG4gICdcXHUwMTMyJzogJ0lKJywgJ1xcdTAxMzMnOiAnaWonLFxuICAnXFx1MDE1Mic6ICdPZScsICdcXHUwMTUzJzogJ29lJyxcbiAgJ1xcdTAxNDknOiBcIiduXCIsICdcXHUwMTdmJzogJ3NzJ1xufTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIGEgd29yZCBjb21wb3NlZCBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgd29yZCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlV29yZChzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZVdvcmQudGVzdChzdHJpbmcpO1xufVxuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvXG4gKiBbc25ha2UgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU25ha2VfY2FzZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNuYWtlIGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zbmFrZUNhc2UoJ0ZvbyBCYXInKTtcbiAqIC8vID0+ICdmb29fYmFyJ1xuICpcbiAqIF8uc25ha2VDYXNlKCdmb29CYXInKTtcbiAqIC8vID0+ICdmb29fYmFyJ1xuICpcbiAqIF8uc25ha2VDYXNlKCctLUZPTy1CQVItLScpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKi9cbnZhciBzbmFrZUNhc2UgPSBjcmVhdGVDb21wb3VuZGVyKGZ1bmN0aW9uKHJlc3VsdCwgd29yZCwgaW5kZXgpIHtcbiAgcmV0dXJuIHJlc3VsdCArIChpbmRleCA/ICdfJyA6ICcnKSArIHdvcmQudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcyddXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICcmJywgJ3BlYmJsZXMnXVxuICovXG5mdW5jdGlvbiB3b3JkcyhzdHJpbmcsIHBhdHRlcm4sIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHBhdHRlcm4gPSBndWFyZCA/IHVuZGVmaW5lZCA6IHBhdHRlcm47XG5cbiAgaWYgKHBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNVbmljb2RlV29yZChzdHJpbmcpID8gdW5pY29kZVdvcmRzKHN0cmluZykgOiBhc2NpaVdvcmRzKHN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzbmFrZUNhc2U7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9BcnRpY2xlUHJldmlldy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL0FydGljbGVHcmlkLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZUdyaWQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vQXJ0aWNsZUdyaWQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vTWFpbkFydGljbGVzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vTWFpbkFydGljbGVzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL01haW5BcnRpY2xlcy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXJ0aWNsZVByZXZpZXdfaW1hZ2VfX25EMmpOIHtcXG4gIC13ZWJraXQtb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uQXJ0aWNsZVByZXZpZXdfYXJ0aWNsZV9fekZqX28ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0FydGljbGVQcmV2aWV3Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWFnZSB7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaW1hZ2VcIjogXCJBcnRpY2xlUHJldmlld19pbWFnZV9fbkQyak5cIixcblx0XCJhcnRpY2xlXCI6IFwiQXJ0aWNsZVByZXZpZXdfYXJ0aWNsZV9fekZqX29cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXJ0aWNsZUdyaWRfYXJ0aWNsZS1ncmlkX18ybC02NSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQXJ0aWNsZUdyaWQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFydGljbGUtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFydGljbGUtZ3JpZFwiOiBcIkFydGljbGVHcmlkX2FydGljbGUtZ3JpZF9fMmwtNjVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTWFpbkFydGljbGVzX21haW4tYXJ0aWNsZXNfXzJsb0s1IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vTWFpbkFydGljbGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLWFydGljbGVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluLWFydGljbGVzXCI6IFwiTWFpbkFydGljbGVzX21haW4tYXJ0aWNsZXNfXzJsb0s1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pbWFnZUNvbmZpZ0RlZmF1bHQ9ZXhwb3J0cy5WQUxJRF9MT0FERVJTPXZvaWQgMDtjb25zdCBWQUxJRF9MT0FERVJTPVsnZGVmYXVsdCcsJ2ltZ2l4JywnY2xvdWRpbmFyeScsJ2FrYW1haSddO2V4cG9ydHMuVkFMSURfTE9BREVSUz1WQUxJRF9MT0FERVJTO2NvbnN0IGltYWdlQ29uZmlnRGVmYXVsdD17ZGV2aWNlU2l6ZXM6WzY0MCw3NTAsODI4LDEwODAsMTIwMCwxOTIwLDIwNDgsMzg0MF0saW1hZ2VTaXplczpbMTYsMzIsNDgsNjQsOTYsMTI4LDI1NiwzODRdLHBhdGg6Jy9fbmV4dC9pbWFnZScsbG9hZGVyOidkZWZhdWx0Jyxkb21haW5zOltdLGRpc2FibGVTdGF0aWNJbWFnZXM6ZmFsc2V9O2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLWNvbmZpZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
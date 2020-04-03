(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../utils/index.js"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["../utils/index.js", "vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../utils/index.js"), require("vue")) : factory(root["../utils/index.js"], root["vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__utils_index__, __WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/slider/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/slider/index.ts":
/*!****************************************!*\
  !*** ./src/components/slider/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/components/slider/slider.tsx\");\n/*\n * @Description: \n * @LastEditors: xhp\n * @Date: 2020-03-18 14:34:05\n * @LastEditTime: 2020-04-03 09:12:02\n * @FilePath: /mywork/myStudy/vtnt/src/components/slider/index.ts\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function install(vue) {\n    vue.component(_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cptName, _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/slider/index.ts?");

/***/ }),

/***/ "./src/components/slider/slider.scss":
/*!*******************************************!*\
  !*** ./src/components/slider/slider.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/slider/slider.scss?");

/***/ }),

/***/ "./src/components/slider/slider.tsx":
/*!******************************************!*\
  !*** ./src/components/slider/slider.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/index */ \"@/utils/index\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.scss */ \"./src/components/slider/slider.scss\");\n/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar vtntSlider = vue__WEBPACK_IMPORTED_MODULE_2___default.a.extend({\n  data: function data() {\n    return {\n      sliderWrap: undefined,\n      sliderValue: 0,\n      isTouching: false,\n      isMouse: false,\n      scrollWidth: ''\n    };\n  },\n  props: {\n    max: {\n      type: [String, Number],\n      \"default\": 100\n    },\n    min: {\n      type: [String, Number],\n      \"default\": 0\n    },\n    value: {\n      type: [String, Number],\n      \"default\": 0\n    },\n    important: Boolean,\n    bar: Boolean,\n    blockStyle: Object,\n    trackStyle: Object,\n    railStyle: Object,\n    onChange: Function,\n    onChangeEnd: Function\n  },\n  model: {\n    prop: 'value',\n    event: 'onChange'\n  },\n  computed: {\n    className: function className() {\n      return this.important ? \"label-important\" : \"label-normal\";\n    }\n  },\n  mounted: function mounted() {\n    this.sliderWrap = this.$refs.setSliderWrap;\n    this.updateScrollWidth(this.value);\n  },\n  methods: {\n    updateScrollWidth: function updateScrollWidth(value) {\n      var max = this.max;\n      var percentage = Number(value) / Number(max);\n      var scrollWidth = percentage * 100 + '%';\n      this.scrollWidth = scrollWidth;\n    },\n    handleTouchStart: function handleTouchStart(e) {\n      //TODO: e.stopImmediatePropagation() \n      e.stopPropagation();\n      Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(document.body, 'touchmove', this.handleTouchMove);\n      Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(document.body, 'touchend', this.handleEnd);\n      this.isTouching = true;\n    },\n    handleMouseDown: function handleMouseDown(e) {\n      console.log(this.value);\n      e.stopPropagation();\n      Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(document.body, 'mousemove', this.handleMouseMove);\n      Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(document.body, 'mouseup', this.handleEnd);\n      this.isMouse = true;\n    },\n    handleTouchMove: function handleTouchMove(e) {\n      var mX = e.touches[0].clientX;\n      this.handleMove(mX);\n    },\n    handleMouseMove: function handleMouseMove(e) {\n      var mX = e.clientX;\n      this.handleMove(mX);\n    },\n    handleEnd: function handleEnd() {\n      if (this.isTouching) {\n        Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"off\"])(document.body, 'touchmove', this.handleTouchMove);\n        Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"off\"])(document.body, 'touchend', this.handleEnd);\n        this.isTouching = false;\n      } else {\n        Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"off\"])(document.body, 'mousemove', this.handleMouseMove);\n        Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"off\"])(document.body, 'mouseup', this.handleEnd);\n        this.isTouching = false;\n      }\n\n      this.$emit('onChangeEnd', this.sliderValue);\n    },\n    handleMove: function handleMove(mX) {\n      var wrapLeft = this.sliderWrap.getBoundingClientRect()['left'];\n      var wrapWidth = this.sliderWrap.getBoundingClientRect()['width'];\n      var max = this.max;\n      var scroll = mX - wrapLeft;\n      scroll = scroll <= 0 ? 0 : scroll >= wrapWidth ? wrapWidth : scroll;\n      var percentage = scroll / wrapWidth;\n      var scrollWidth = percentage * 100 + '%';\n      var value = percentage * Number(max);\n      this.sliderValue = value;\n      this.scrollWidth = scrollWidth;\n      this.$emit('onChange', value);\n    },\n    handleClick: function handleClick(e) {\n      if (!this.bar) return;\n      var X = e.clientX;\n      this.handleMove(X);\n      this.$emit('onChangeEnd', this.sliderValue);\n    }\n  },\n  watch: {\n    value: function value(nv) {\n      if (!nv && (this.isTouching || this.isMouse)) return;\n      this.updateScrollWidth(this.value);\n    }\n  },\n  render: function render() {\n    var _this = this;\n\n    var h = arguments[0];\n    var bar = this.bar,\n        blockStyle = this.blockStyle,\n        railStyle = this.railStyle,\n        trackStyle = this.trackStyle,\n        scrollWidth = this.scrollWidth;\n    var barWrap = bar ? h(\"div\", {\n      \"style\": _objectSpread({}, blockStyle),\n      \"class\": \"vtnt-slider__block\",\n      \"on\": {\n        \"mousedown\": this.handleMouseDown,\n        \"touchstart\": this.handleTouchStart\n      }\n    }) : null;\n    return h(\"div\", {\n      \"style\": _objectSpread({}, trackStyle),\n      \"on\": {\n        \"click\": function click(e) {\n          return _this.handleClick(e);\n        }\n      },\n      \"class\": \"vtnt-slider__wrap\",\n      \"ref\": \"setSliderWrap\"\n    }, [h(\"div\", {\n      \"class\": \"vtnt-slider__loading-wrap\",\n      \"style\": _objectSpread({\n        width: scrollWidth\n      }, railStyle)\n    }), barWrap]);\n  }\n});\nvtntSlider.cptName = 'vtntSlider';\n/* harmony default export */ __webpack_exports__[\"default\"] = (vtntSlider);\n\n//# sourceURL=webpack:///./src/components/slider/slider.tsx?");

/***/ }),

/***/ "@/utils/index":
/*!************************************!*\
  !*** external "../utils/index.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__utils_index__;\n\n//# sourceURL=webpack:///external_%22../utils/index.js%22?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;\n\n//# sourceURL=webpack:///external_%22vue%22?");

/***/ })

/******/ });
});
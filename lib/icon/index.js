(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue")) : factory(root["vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/icon/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/iconfont/iconfont.scss":
/*!*******************************************!*\
  !*** ./src/assets/iconfont/iconfont.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/iconfont/iconfont.scss?");

/***/ }),

/***/ "./src/components/icon/icon.scss":
/*!***************************************!*\
  !*** ./src/components/icon/icon.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/icon/icon.scss?");

/***/ }),

/***/ "./src/components/icon/icon.tsx":
/*!**************************************!*\
  !*** ./src/components/icon/icon.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.scss */ \"./src/components/icon/icon.scss\");\n/* harmony import */ var _icon_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icon_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_iconfont_iconfont_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/iconfont/iconfont.scss */ \"./src/assets/iconfont/iconfont.scss\");\n/* harmony import */ var _assets_iconfont_iconfont_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_iconfont_iconfont_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar vtntIcon = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n  name: 'vtnt-icon',\n  props: {\n    iconPrefix: {\n      type: String,\n      \"default\": 'vtnt-icon'\n    },\n    size: {\n      type: [String, Number]\n    },\n    name: {\n      type: [String]\n    },\n    tag: {\n      type: String,\n      \"default\": 'i'\n    }\n  },\n  computed: {\n    iconStyle: function iconStyle() {\n      return this.size ? {\n        fontSize: this.size + 'px'\n      } : {};\n    },\n    iconName: function iconName() {\n      return this.name ? this.iconPrefix + '-' + this.name : '';\n    },\n    isInitialIconPrefix: function isInitialIconPrefix() {\n      return this.iconPrefix === 'vtnt-icon';\n    }\n  },\n  render: function render() {\n    var _class;\n\n    var h = arguments[0];\n    var tag = this.tag;\n    return h(tag, {\n      \"style\": this.iconStyle,\n      \"class\": (_class = {\n        'vtnt-icon__container': true\n      }, _defineProperty(_class, \"\".concat(this.iconName), true), _defineProperty(_class, 'vtnt-icon__container--default', this.size), _defineProperty(_class, 'vtnt-icon__container--font', this.isInitialIconPrefix), _defineProperty(_class, \"\".concat(this.iconPrefix), !this.isInitialIconPrefix && this.iconPrefix), _class)\n    });\n  }\n});\nvtntIcon.cptName = 'vtntIcon';\n/* harmony default export */ __webpack_exports__[\"default\"] = (vtntIcon);\n\n//# sourceURL=webpack:///./src/components/icon/icon.tsx?");

/***/ }),

/***/ "./src/components/icon/index.ts":
/*!**************************************!*\
  !*** ./src/components/icon/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ \"./src/components/icon/icon.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function install(vue) {\n    vue.component(_icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cptName, _icon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/icon/index.ts?");

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
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/lazy-load/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/lazy-load/index.ts":
/*!*******************************************!*\
  !*** ./src/components/lazy-load/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lazy_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-load */ \"./src/components/lazy-load/lazy-load.ts\");\n/*\n * @Description: \n * @LastEditors: xhp\n * @Date: 2020-04-13 16:16:28\n * @LastEditTime: 2020-04-17 18:21:21\n * @FilePath: /mywork/myStudy/vtnt/src/components/lazy-load/index.ts\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function install(vue) {\n    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var directName = opt.directName || 'lazy';\n    var lazy = new _lazy_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    vue.directive(directName, {\n      // 当被绑定的元素插入到 DOM 中时…… \n      bind: lazy.bind.bind(lazy),\n      unbind: lazy.unbind.bind(lazy)\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/lazy-load/index.ts?");

/***/ }),

/***/ "./src/components/lazy-load/lazy-load.ts":
/*!***********************************************!*\
  !*** ./src/components/lazy-load/lazy-load.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/index */ \"@/utils/index\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _monitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor */ \"./src/components/lazy-load/monitor.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Lazy =\n/*#__PURE__*/\nfunction () {\n  function Lazy(opt) {\n    _classCallCheck(this, Lazy);\n\n    this.opt = void 0;\n    this.queue = void 0;\n    this._triggerMonitor = void 0;\n    this.queue = [];\n    this.opt = Object.assign({\n      defaultImg: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'\n    }, opt);\n    this._triggerMonitor = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(this.triggerMonitor, 400);\n    this.init();\n  }\n\n  _createClass(Lazy, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(document, 'scroll', this._triggerMonitor.bind(this));\n      vue__WEBPACK_IMPORTED_MODULE_1___default.a.nextTick(function () {\n        _this._triggerMonitor();\n      });\n    }\n  }, {\n    key: \"triggerMonitor\",\n    value: function triggerMonitor() {\n      console.log(this.queue);\n      this.queue.forEach(function (i, k) {\n        if (i.status == 'unloaded' && i.check()) {\n          i.load();\n        }\n      });\n    }\n  }, {\n    key: \"bind\",\n    value: function bind(el, binding) {\n      var defaultImg = this.opt.defaultImg;\n      var value = binding.value;\n      var monitor = new _monitor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        el: el,\n        src: value,\n        defaultImg: defaultImg,\n        viewport: Lazy.viewport\n      });\n      this.queue.push(monitor);\n    }\n  }, {\n    key: \"unbind\",\n    value: function unbind(el) {\n      var index = this.queue.findIndex(function (i) {\n        return el.getAttribute('src') === i.src;\n      });\n      this.queue.splice(index, 1);\n\n      this._triggerMonitor();\n    }\n  }]);\n\n  return Lazy;\n}();\n\nLazy.viewport = {\n  h: window.innerHeight,\n  w: window.innerWidth\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lazy);\n\n//# sourceURL=webpack:///./src/components/lazy-load/lazy-load.ts?");

/***/ }),

/***/ "./src/components/lazy-load/monitor.ts":
/*!*********************************************!*\
  !*** ./src/components/lazy-load/monitor.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n * @Description: \n * @LastEditors: xhp\n * @Date: 2020-04-17 09:37:23\n * @LastEditTime: 2020-04-17 15:24:32\n * @FilePath: /mywork/myStudy/vtnt/src/components/lazy-load/monitor.ts\n */\nvar Monitor =\n/*#__PURE__*/\nfunction () {\n  function Monitor(opt) {\n    _classCallCheck(this, Monitor);\n\n    this.el = void 0;\n    this.src = void 0;\n    this.defaultImg = void 0;\n    this.status = void 0;\n    this.viewport = void 0;\n    this.el = opt.el;\n    this.src = opt.src;\n    this.defaultImg = opt.defaultImg;\n    this.viewport = opt.viewport;\n    this.status = 'unloaded';\n    this.init();\n  }\n\n  _createClass(Monitor, [{\n    key: \"init\",\n    value: function init() {\n      if (!this.src) return;\n      this.render(this.defaultImg);\n    }\n  }, {\n    key: \"check\",\n    value: function check() {\n      var client = this.el.getBoundingClientRect();\n      var vertical = client.top <= this.viewport.h || this.viewport.h >= client.bottom - client.height && client.bottom >= 0;\n      var level = client.left <= this.viewport.w || this.viewport.w >= client.right - client.width && client.right >= 0;\n      if (vertical && level) return true;\n      return false;\n    }\n  }, {\n    key: \"load\",\n    value: function load() {\n      this.render(this.src);\n      this.status = 'loaded';\n    }\n  }, {\n    key: \"render\",\n    value: function render(src) {\n      this.el.setAttribute('src', src);\n    }\n  }]);\n\n  return Monitor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Monitor);\n\n//# sourceURL=webpack:///./src/components/lazy-load/monitor.ts?");

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
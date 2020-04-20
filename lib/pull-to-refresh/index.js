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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/pull-to-refresh/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/pull-to-refresh/index.ts":
/*!*************************************************!*\
  !*** ./src/components/pull-to-refresh/index.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pull_to_refresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pull-to-refresh */ \"./src/components/pull-to-refresh/pull-to-refresh.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function install(vue) {\n    vue.component(_pull_to_refresh__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cptName, _pull_to_refresh__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/pull-to-refresh/index.ts?");

/***/ }),

/***/ "./src/components/pull-to-refresh/pull-to-refresh.scss":
/*!*************************************************************!*\
  !*** ./src/components/pull-to-refresh/pull-to-refresh.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/pull-to-refresh/pull-to-refresh.scss?");

/***/ }),

/***/ "./src/components/pull-to-refresh/pull-to-refresh.tsx":
/*!************************************************************!*\
  !*** ./src/components/pull-to-refresh/pull-to-refresh.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _refresh_column_refresh_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-column/refresh-column */ \"./src/components/pull-to-refresh/refresh-column/refresh-column.tsx\");\n/* harmony import */ var _pull_to_refresh_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pull-to-refresh.scss */ \"./src/components/pull-to-refresh/pull-to-refresh.scss\");\n/* harmony import */ var _pull_to_refresh_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pull_to_refresh_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar loadingTypes = {\n  initial: \"initial\",\n  ready: \"ready\",\n  loading: \"loading\",\n  finish: \"finish\"\n};\nvar vtntPullToRefresh = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n  data: function data() {\n    return {\n      loadingType: loadingTypes.initial,\n      diff: 2,\n      startY: 0,\n      defaultTips: {\n        up: {\n          initial: '上拉可以加载更多',\n          ready: '松开加载更多',\n          loading: '加载中...',\n          finish: '加载成功'\n        },\n        down: {\n          initial: '下拉可以刷新',\n          ready: '松开刷新',\n          loading: '刷新中...',\n          finish: '刷新成功'\n        }\n      }\n    };\n  },\n  components: {\n    refreshColumn: _refresh_column_refresh_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: {\n    up: {\n      type: Boolean,\n      \"default\": true\n    },\n    down: {\n      type: Boolean,\n      \"default\": false\n    },\n    distanceToRefresh: {\n      type: Number,\n      \"default\": 100\n    },\n    tips: {\n      type: Object,\n      \"default\": function _default() {\n        return {};\n      }\n    },\n    onRefresh: {\n      type: Function,\n      \"default\": function _default(callback) {\n        callback();\n      }\n    },\n    onLoad: {\n      type: Function,\n      \"default\": function _default(callback) {\n        callback();\n      }\n    }\n  },\n  methods: {\n    start: function start(e) {\n      this.startY = e.touches[0].clientY;\n    },\n    move: function move(e) {\n      var mY = e.touches[0].clientY;\n      console.log(mY);\n\n      if (this.isCanMove(mY)) {\n        var diff = mY - this.startY;\n\n        if (this.distanceToRefresh <= Math.abs(diff)) {\n          diff = diff < 0 ? -this.distanceToRefresh : this.distanceToRefresh;\n          this.loadingType = loadingTypes.ready;\n        }\n\n        this.diff = diff;\n      }\n    },\n    end: function end(e) {\n      if (this.diff === 0) return;\n\n      if (Math.abs(this.diff) < this.distanceToRefresh) {\n        return this.resetStatus();\n      }\n\n      this.loadingType = loadingTypes.loading;\n      console.log(this.onRefresh);\n      this.wrap.scrollTop === 0 ? this.onRefresh(this.onRefreshOver.bind(this)) : this.onLoad(this.onRefreshOver.bind(this));\n    },\n\n    /**\n     * @description 重置滚动参数\n     */\n    resetStatus: function resetStatus() {\n      this.loadingType = loadingTypes.finish;\n      this.setContentClass(loadingTypes.finish);\n      this.diff = 0;\n    },\n    onRefreshOver: function onRefreshOver() {\n      this.resetStatus();\n    },\n    isCanMove: function isCanMove(mY) {\n      if (this.loadingType === 'ready') return false;\n      var wrap = this.wrap;\n      var scrollHeight = wrap.scrollHeight;\n      var scrollTop = wrap.scrollTop;\n      var clinetH = wrap.clientHeight;\n      var diff = mY - this.startY;\n\n      if (scrollTop === 0 && this.down) {\n        return true; //TODO: 已触顶\n      }\n\n      if (scrollTop > 0 && this.up) {\n        console.log('上拉');\n        var curretH = Math.round(scrollHeight - scrollTop);\n\n        if (curretH === clinetH || curretH === clinetH + 1 || curretH === clinetH - 1 && diff >= 0) {\n          return true;\n        } else {\n          this.startY = mY;\n          this.diff = 0; //TODO: 修正 diff \n\n          return false;\n        }\n      }\n\n      return false;\n    },\n    setContentClass: function setContentClass(loadingTypes) {\n      if (loadingTypes === \"finish\") {\n        this.content.setAttribute(\"class\", \"vtnt-pull-to-refresh__transition\");\n      } else {\n        this.content.removeAttribute(\"class\");\n      }\n    },\n    getTipsText: function getTipsText(type, key) {\n      return this.tips[type] && this.tips[type][key] ? this.tips[type][key] : this.defaultTips[type][key];\n    }\n  },\n  computed: {\n    contentSty: function contentSty() {\n      return {\n        transform: \"translate3d(0px,\".concat(this.diff, \"px,0)\")\n      };\n    },\n    wrap: function wrap() {\n      // @ts-ignore\n      return this.$refs.wrap.parentElement;\n    },\n    content: function content() {\n      return this.$refs.content;\n    }\n  },\n  watch: {\n    diff: function diff(v) {\n      var _this = this;\n\n      if (v === 0) {\n        setTimeout(function () {\n          //过度动画结束后重置状态\n          _this.loadingType = loadingTypes.initial;\n\n          _this.setContentClass(loadingTypes.initial);\n        }, 300);\n      }\n    }\n  },\n  render: function render() {\n    var _this2 = this;\n\n    var h = arguments[0];\n    var start = this.start,\n        move = this.move,\n        end = this.end,\n        up = this.up,\n        down = this.down,\n        contentSty = this.contentSty;\n\n    var tipsWrap = function tipsWrap(type) {\n      var staus = type == 'up' ? up : down;\n      return staus && h(\"refresh-column\", {\n        \"attrs\": {\n          \"up\": type == 'up',\n          \"down\": type == 'down',\n          \"initial\": _this2.getTipsText('down', 'initial'),\n          \"ready\": _this2.getTipsText('down', 'ready'),\n          \"loading\": _this2.getTipsText('down', 'loading'),\n          \"type\": _this2.loadingType\n        }\n      });\n    };\n\n    return h(\"div\", {\n      \"class\": 'vtnt-pull-to-refresh__wrap',\n      \"ref\": \"wrap\"\n    }, [h(\"div\", {\n      \"class\": \"vtnt-pull-to-refresh__test\",\n      \"ref\": \"content\",\n      \"style\": contentSty,\n      \"on\": {\n        \"touchstart\": start,\n        \"touchmove\": move,\n        \"touchend\": end\n      }\n    }, [tipsWrap('down'), h(\"div\", {\n      \"class\": \"vtnt-pull-to-refresh__content\"\n    }, [this.$slots[\"default\"]]), tipsWrap('up')])]);\n  }\n});\nvtntPullToRefresh.cptName = 'vtntPullToRefresh';\n/* harmony default export */ __webpack_exports__[\"default\"] = (vtntPullToRefresh);\n\n//# sourceURL=webpack:///./src/components/pull-to-refresh/pull-to-refresh.tsx?");

/***/ }),

/***/ "./src/components/pull-to-refresh/refresh-column/refresh-column.scss":
/*!***************************************************************************!*\
  !*** ./src/components/pull-to-refresh/refresh-column/refresh-column.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/pull-to-refresh/refresh-column/refresh-column.scss?");

/***/ }),

/***/ "./src/components/pull-to-refresh/refresh-column/refresh-column.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/pull-to-refresh/refresh-column/refresh-column.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _refresh_column_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-column.scss */ \"./src/components/pull-to-refresh/refresh-column/refresh-column.scss\");\n/* harmony import */ var _refresh_column_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_refresh_column_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar refreshColumn = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n  props: {\n    type: {\n      type: String\n    },\n    up: {\n      type: Boolean\n    },\n    down: {\n      type: Boolean\n    },\n    initial: {\n      type: String,\n      \"default\": '上拉可以加载更多'\n    },\n    ready: {\n      type: String,\n      \"default\": '松开加载更多'\n    },\n    loading: {\n      type: String,\n      \"default\": '加载中...'\n    },\n    finish: {\n      type: String\n    }\n  },\n  computed: {\n    text: function text() {\n      var text = \"\";\n      var type = this.type;\n      if (type === \"initial\") text = this.initial;\n      if (type === \"ready\") text = this.ready;\n      if (type === \"loading\") text = this.loading;\n      if (type === \"finish\") text = this.finish;\n      return text;\n    },\n    wrapClassName: function wrapClassName() {\n      var name = 'vtnt-refresh-column__wrap';\n      return this.up ? name + '--up' : name + '--down';\n    }\n  },\n  render: function render() {\n    var h = arguments[0];\n    return h(\"div\", {\n      \"class\": ['vtnt-refresh-column__wrap', this.wrapClassName]\n    }, [h(\"span\", [this.text])]);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (refreshColumn);\n\n//# sourceURL=webpack:///./src/components/pull-to-refresh/refresh-column/refresh-column.tsx?");

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
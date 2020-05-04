(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../mixins/style.js"));
	else if(typeof define === 'function' && define.amd)
		define(["../mixins/style.js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../mixins/style.js")) : factory(root["../mixins/style.js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__mixins_style__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/picker/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/picker/index.ts":
/*!****************************************!*\
  !*** ./src/components/picker/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./src/components/picker/picker.tsx\");\n/*\n * @Description: \n * @LastEditors: xhp\n * @Date: 2020-03-18 14:34:05\n * @LastEditTime: 2020-04-24 11:11:24\n * @FilePath: /mywork/myStudy/vtnt/src/components/picker/index.ts\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function install(vue) {\n    vue.component(_picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cptName, _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/picker/index.ts?");

/***/ }),

/***/ "./src/components/picker/picker.scss":
/*!*******************************************!*\
  !*** ./src/components/picker/picker.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/picker/picker.scss?");

/***/ }),

/***/ "./src/components/picker/picker.tsx":
/*!******************************************!*\
  !*** ./src/components/picker/picker.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/style */ \"@/mixins/style\");\n/* harmony import */ var _mixins_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mixins_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _picker_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker.scss */ \"./src/components/picker/picker.scss\");\n/* harmony import */ var _picker_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_picker_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar vtntPicker = _mixins_style__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n  data: function data() {\n    return {\n      b: this.b('vtnt-picker'),\n      translationParamList: [],\n      lastTranslationParamList: [],\n      columnIndexList: [],\n      currentColmnIndex: -1,\n      startY: 0,\n      columnChildClientHeight: 0\n    };\n  },\n  props: {\n    isLink: {\n      type: Boolean,\n      \"default\": false\n    },\n    columns: {\n      type: Array,\n      \"default\": []\n    }\n  },\n  computed: {\n    columnsLen: function columnsLen() {\n      var len = 0;\n\n      if (this.isLink && this.columns.length) {\n        len = this.getLinkColumnsLen(this.columns);\n        console.log(len);\n      } else {\n        len = this.columns.length;\n      }\n\n      return len;\n    },\n    transformTime: function transformTime() {\n      return this.currentColmnIndex == -1 ? {\n        transitionDuration: '.3s',\n        transitionProperty: 'transform'\n      } : {};\n    }\n  },\n  mounted: function mounted() {\n    this.columnChildClientHeight = this.$refs.columnsList.childNodes[0].childNodes[0].childNodes[0].clientHeight;\n  },\n  methods: {\n    getLinkColumnsLen: function getLinkColumnsLen(arr) {\n      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n      var children = arr[0].children;\n\n      if (!children || !children.length) {\n        return len;\n      }\n\n      len += 1;\n      return this.getLinkColumnsLen(children, len);\n    },\n    getCoulmnStyle: function getCoulmnStyle(index) {\n      var Y = this.translationParamList[index] || 0;\n      return {\n        transform: \"translate3d(0px,\".concat(Y, \"px,0)\")\n      };\n    },\n    getCurrentBottomBoundary: function getCurrentBottomBoundary() {\n      return this.$refs.columnsList.childNodes[this.currentColmnIndex].childNodes[0].clientHeight;\n    },\n    getLinkColumns: function getLinkColumns(columns, list, index, max) {\n      var _this = this;\n\n      var h = this.$createElement;\n      if (index === max) return;\n      var li = list.map(function (i) {\n        return h(\"li\", {\n          \"class\": _this.b('__column-item')\n        }, [i.text]);\n      });\n      columns.push(h(\"div\", {\n        \"class\": this.b('__columns-wrap')\n      }, [h(\"ul\", {\n        \"style\": [this.getCoulmnStyle(index), this.transformTime],\n        \"on\": {\n          \"touchstart\": function touchstart(e) {\n            return _this.handleStart(e, index);\n          },\n          \"touchmove\": function touchmove(e) {\n            return _this.handleMove(e);\n          },\n          \"touchend\": function touchend(e) {\n            return _this.handleEnd(e);\n          }\n        },\n        \"class\": this.b('__column')\n      }, [li])]));\n      var children = list[this.columnIndexList[index]].children;\n      if (children && children.length) this.getLinkColumns(columns, children, index + 1, max);\n    },\n    resetColumnIndexList: function resetColumnIndexList() {\n      // 重置联动选择项\n      var currentIndex = this.currentColmnIndex;\n      var resetList = this.columnIndexList;\n      var resetTranslationList = this.translationParamList;\n      var resetLastTranslationList = this.lastTranslationParamList;\n\n      for (var i = 0, len = this.columnIndexList.length; i < len; i++) {\n        if (i > currentIndex) {\n          resetLastTranslationList[i] = resetTranslationList[i] = resetList[i] = 0;\n        }\n      }\n\n      this.translationParamList = resetTranslationList;\n      this.columnIndexList = resetList;\n    },\n    setDiff: function setDiff(diff, last) {\n      this.$set(this.translationParamList, this.currentColmnIndex, diff);\n      if (last) this.$set(this.lastTranslationParamList, this.currentColmnIndex, diff);\n    },\n    checkDiff: function checkDiff() {\n      var diff = this.translationParamList[this.currentColmnIndex];\n      var integerDiff = Math.abs(diff);\n\n      if (diff > 0) {\n        // 触发下拉边界\n        return {\n          diff: 0,\n          currentIndex: 0\n        };\n      }\n\n      var colmnClientHeight = this.getCurrentBottomBoundary();\n      var bottomBoundary = colmnClientHeight - this.columnChildClientHeight;\n      if (integerDiff > bottomBoundary) return {\n        diff: -bottomBoundary,\n        //触发上拉边界,\n        currentIndex: colmnClientHeight / this.columnChildClientHeight - 1\n      };\n      console.log('hhaha');\n      var current = parseInt(String(integerDiff / this.columnChildClientHeight));\n      var heightHalf = this.columnChildClientHeight / 2;\n      if (integerDiff % this.columnChildClientHeight > heightHalf) current += 1;\n      return {\n        diff: -(current * this.columnChildClientHeight),\n        currentIndex: current\n      };\n    },\n    handleStart: function handleStart(e, index) {\n      this.currentColmnIndex = index;\n      this.startY = e.touches[0].clientY;\n    },\n    handleMove: function handleMove(e) {\n      var diff = e.touches[0].clientY - this.startY;\n      var lastDiff = this.lastTranslationParamList[this.currentColmnIndex] || 0;\n      this.setDiff(lastDiff + diff);\n    },\n    handleEnd: function handleEnd(e) {\n      var params = this.checkDiff();\n      this.setDiff(params.diff, true);\n      console.log(params.currentIndex, this.columnIndexList[this.currentColmnIndex]);\n\n      if (params.currentIndex !== this.columnIndexList[this.currentColmnIndex]) {\n        this.$set(this.columnIndexList, this.currentColmnIndex, params.currentIndex);\n        if (this.isLink) this.resetColumnIndexList();\n        this.$emit('change', this.columnIndexList, this.currentColmnIndex);\n      }\n\n      this.currentColmnIndex = -1;\n    }\n  },\n  watch: {\n    columnsLen: {\n      handler: function handler(v) {\n        if (v) {\n          var arr = [];\n\n          for (var i = 0; i < v; i++) {\n            arr.push(0);\n          }\n\n          this.translationParamList = arr;\n          this.lastTranslationParamList = arr.slice(0);\n          this.columnIndexList = arr.slice(0);\n        }\n      },\n      immediate: true\n    }\n  },\n  render: function render() {\n    var _this2 = this;\n\n    var h = arguments[0];\n    var b = this.b;\n\n    var coulmn = function coulmn() {\n      var dom = [];\n      var len = _this2.columnsLen;\n\n      if (!_this2.isLink) {\n        dom = _this2.columns.map(function (i, k) {\n          var li = i.children.length ? i.children.map(function (i) {\n            return h(\"li\", {\n              \"class\": b('__column-item')\n            }, [i]);\n          }) : '';\n          return h(\"div\", {\n            \"class\": b('__columns-wrap')\n          }, [h(\"ul\", {\n            \"style\": [_this2.getCoulmnStyle(k), _this2.transformTime],\n            \"on\": {\n              \"touchstart\": function touchstart(e) {\n                return _this2.handleStart(e, k);\n              },\n              \"touchmove\": function touchmove(e) {\n                return _this2.handleMove(e);\n              },\n              \"touchend\": function touchend(e) {\n                return _this2.handleEnd(e);\n              }\n            },\n            \"class\": b('__column')\n          }, [li])]);\n        });\n      } else {\n        _this2.getLinkColumns(dom, _this2.columns, 0, len);\n      }\n\n      return dom;\n    };\n\n    return h(\"div\", {\n      \"class\": \"\".concat(b('__wrap'))\n    }, [h(\"div\", {\n      \"ref\": \"columnsList\",\n      \"class\": b('__list')\n    }, [coulmn()]), h(\"div\", {\n      \"class\": \"\".concat(b('__content'))\n    }, [h(\"div\", {\n      \"class\": 'vtnt-both-line'\n    })]), h(\"div\", {\n      \"class\": b('__mask')\n    })]);\n  }\n});\nvtntPicker.cptName = 'vtntPicker';\n/* harmony default export */ __webpack_exports__[\"default\"] = (vtntPicker);\n\n//# sourceURL=webpack:///./src/components/picker/picker.tsx?");

/***/ }),

/***/ "@/mixins/style":
/*!*************************************!*\
  !*** external "../mixins/style.js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__mixins_style__;\n\n//# sourceURL=webpack:///external_%22../mixins/style.js%22?");

/***/ })

/******/ });
});
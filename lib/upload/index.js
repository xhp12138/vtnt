(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../mixins/style.js"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["../mixins/style.js", "vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../mixins/style.js"), require("vue")) : factory(root["../mixins/style.js"], root["vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__mixins_style__, __WEBPACK_EXTERNAL_MODULE_vue__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/upload/index.ts");
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

/***/ "./src/components/upload/index.ts":
/*!****************************************!*\
  !*** ./src/components/upload/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload */ \"./src/components/upload/upload.tsx\");\n/*\n * @Description: \n * @LastEditors: xhp\n * @Date: 2020-03-21 19:29:25\n * @LastEditTime: 2020-04-03 09:13:43\n * @FilePath: /mywork/myStudy/vtnt/src/components/upload/index.ts\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function install(vue) {\n    vue.component(_upload__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cptName, _upload__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/upload/index.ts?");

/***/ }),

/***/ "./src/components/upload/upload.scss":
/*!*******************************************!*\
  !*** ./src/components/upload/upload.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/upload/upload.scss?");

/***/ }),

/***/ "./src/components/upload/upload.tsx":
/*!******************************************!*\
  !*** ./src/components/upload/upload.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/style */ \"@/mixins/style\");\n/* harmony import */ var _mixins_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mixins_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icon/icon */ \"./src/components/icon/icon.tsx\");\n/* harmony import */ var _upload_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.scss */ \"./src/components/upload/upload.scss\");\n/* harmony import */ var _upload_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upload_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\nvar vtntUpload = _mixins_style__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n  components: {\n    'vtnt-icon': _components_icon_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data: function data() {\n    return {\n      b: this.b('vtnt-upload')\n    };\n  },\n  props: {\n    beforeUpload: {\n      type: Function\n    },\n    fileList: {\n      type: Array\n    }\n  },\n  model: {\n    prop: 'fileList',\n    event: 'input'\n  },\n  methods: {\n    readFiles: function readFiles(fileList) {\n      var _this = this;\n\n      var promiseFileList = fileList.map(function (file, index) {\n        return new Promise(function (resolve, reject) {\n          var reader = new FileReader();\n\n          reader.onload = function (event) {\n            resolve({\n              result: event.target.result,\n              index: index\n            });\n          };\n\n          reader.onerror = function (error) {\n            reject({\n              result: error,\n              index: index\n            });\n          };\n\n          reader.readAsDataURL(file);\n        });\n      });\n      promiseFileList.forEach(function (item) {\n        item.then(function (res) {\n          var result = res.result,\n              index = res.index;\n          console.log(index, _this.fileList);\n          _this.fileList[index].url = result;\n          _this.fileList[index].status = 'success';\n        })[\"catch\"](function (error) {});\n      });\n    },\n    addLoadingItem: function addLoadingItem(fileList) {\n      var item = fileList.map(function (file) {\n        return {\n          url: '',\n          status: 'loading'\n        };\n      });\n      this.$emit('input', [].concat(_toConsumableArray(item), _toConsumableArray(this.fileList)));\n    },\n    handleChange: function handleChange(e) {\n      var _this2 = this;\n\n      var files = e.target.files || [];\n      var fileList = Array.prototype.slice.call(files);\n      if (!fileList.length) return;\n\n      if (this.beforeUpload) {\n        var isShop = this.beforeUpload(fileList);\n        if (!isShop) return;\n      }\n\n      if (true) {\n        this.addLoadingItem(fileList);\n        this.$nextTick(function () {\n          return _this2.readFiles(fileList);\n        });\n      }\n    }\n  },\n  render: function render() {\n    var h = arguments[0];\n    var b = this.b,\n        fileList = this.fileList;\n\n    var dialog = function dialog(status) {\n      return h(\"div\", {\n        \"class\": b('__file-mask')\n      }, [status === 'loading' ? h(\"i\") : h(\"vtnt-icon\", {\n        \"attrs\": {\n          \"name\": 'error'\n        }\n      }), h(\"span\", [status === 'loading' ? 'loading...' : '上传失败'])]);\n    };\n\n    var fileListWrap = fileList.map(function (i) {\n      return h(\"div\", {\n        \"class\": b('__file-item')\n      }, [i.url ? h(\"img\", {\n        \"class\": b('__file-img'),\n        \"attrs\": {\n          \"src\": i.url\n        }\n      }) : dialog(i.status)]);\n    });\n    return h(\"div\", {\n      \"class\": b('__wrap')\n    }, [h(\"div\", {\n      \"class\": b('__file-list')\n    }, [fileListWrap, h(\"div\", {\n      \"class\": [b('__file-item'), b('__file-item--add')]\n    }, [h(\"vtnt-icon\", {\n      \"attrs\": {\n        \"name\": 'add'\n      }\n    }), h(\"input\", {\n      \"class\": b('__input'),\n      \"attrs\": {\n        \"type\": \"file\"\n      },\n      \"directives\": [{\n        name: \"bind\",\n        value: \"$attrs\"\n      }],\n      \"on\": {\n        \"change\": this.handleChange\n      }\n    })])])]);\n  }\n});\nvtntUpload.cptName = 'vtntUpload';\n/* harmony default export */ __webpack_exports__[\"default\"] = (vtntUpload);\n\n//# sourceURL=webpack:///./src/components/upload/upload.tsx?");

/***/ }),

/***/ "@/mixins/style":
/*!*************************************!*\
  !*** external "../mixins/style.js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__mixins_style__;\n\n//# sourceURL=webpack:///external_%22../mixins/style.js%22?");

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
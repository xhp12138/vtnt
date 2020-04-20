function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export var paramResult = function paramResult() {
  var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, paramResult);

  this.l = void 0;
  this.v = void 0;
  this.l = l;
  this.v = v;
};
export var checkParam = function checkParam(param) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'array';
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var k = key.replace(/^\s+|\s+$/g, '');
  var result;

  if (type === 'array') {
    if (Array.isArray(param) && param.length > 0) {
      result = new paramResult(true, param);
    } else {
      result = new paramResult(false, []);
    }
  } else if (type === 'object.length') {
    if (isObject(param) && Object.keys(param).length > 0) {
      result = new paramResult(true, param);
    } else {
      result = new paramResult(false, {});
    }
  } else {
    if (isObject(param) && param[k] !== undefined) {
      result = new paramResult(true, param[k]);
    } else {
      result = new paramResult(false, {});
    }
  }

  return result;
};
/**
 * @description 判断是否是对象
 * @param {any} 
 * @return boolean
 */

export function isObject(target) {
  return Object.prototype.toString.call(target) === '[object Object]';
}
export function setClass(target, value) {
  if (!target) return;
  var classList = target.classList;
  if (!classList.contains(value)) classList.add(value);
}
export function removeClass(target, value) {
  if (!target) return;
  var classList = target.classList;
  if (classList.contains(value)) classList.remove(value);
}
export function isParentComponent(targetComponent, componentName) {
  var parent = targetComponent.$parent || targetComponent.$root;
  var name = parent.$options.name;

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.name;
    }
  }

  return name === componentName;
}
export function on(element, event, handler) {
  return element.addEventListener(event, handler, false);
}
export function off(element, event, handler) {
  return element.removeEventListener(event, handler, false);
}
export function throttle(fn, time) {
  var status = true;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!status) return;
    status = false;
    var self = this;
    var t = setTimeout(function () {
      fn.call.apply(fn, [self].concat(args));
      status = true;
      clearTimeout(t);
    }, time);
  };
}
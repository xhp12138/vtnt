
import { Vue } from 'vue-property-decorator';

export const checkParam = (param:object | Array<any>,type = 'array',key:string = '') => {
    const k = key.replace(/^\s+|\s+$/g,'');
    const result:any = {
        l: false,
        v: ''
    }
    console.log(param)
    if (type === 'array') {
        if (Array.isArray(param) && param.length > 0) {
            result.l = true;
            result.v = param;
        } else {
            result.v = [];
        }
    } else if (type === 'object.length') {
        if (isObject(param) && Object.keys(param).length >0) {
            result.l = true;
            result.v = param;
        }else {
            result.v = {}
        }
    } else {
        if (isObject(param) && param[k] !== undefined ) {
            result.l = true;
            result.v = param[k]
        }else {
            result.v = {}
        }
    }
    return result;
}
/**
 * @description 判断是否是对象
 * @param {any} 
 * @return boolean
 */
export function isObject(target:any) {
    return Object.prototype.toString.call(target) === '[object Object]'
}

export function setClass(target:Element,value:string) {
    if (!target) return
    const classList = target.classList
    if (!classList.contains(value)) classList.add(value)
}

export function removeClass(target:Element,value:string) {
    if (!target) return 
    const classList = target.classList;
    if (classList.contains(value)) classList.remove(value)
}

export function isParentComponent(targetComponent:Vue, componentName:string | null) {
    let parent = targetComponent.$parent || targetComponent.$root;
    let name = parent.$options.name;
    while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name ;
        }
    }
    console.log(name)
    return name === componentName
}
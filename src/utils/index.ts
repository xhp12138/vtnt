
import { Vue } from 'vue-property-decorator';

export type paramResultValue = object | Array<any>
export class paramResult {
    l:boolean
    v:paramResultValue
    constructor(l:boolean = false,v:paramResultValue = []) {
        this.l = l
        this.v = v
    }
}
export const checkParam = (param:object | Array<any>,type = 'array',key:string = '') => {
    const k = key.replace(/^\s+|\s+$/g,'');
    let result
    if (type === 'array') {
        if (Array.isArray(param) && param.length > 0) {
            result = new paramResult(true, param)
        } else {
            result = new paramResult(false,[])
        }
    } else if (type === 'object.length') {
        if (isObject(param) && Object.keys(param).length >0) {
            result = new paramResult(true,param)
        }else {
            result = new paramResult(false,{})
        }
    } else {
        if (isObject(param) && param[k] !== undefined ) {
            result = new paramResult(true,param[k])
        }else {
            result = new paramResult(false,{})
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
    return name === componentName
}

export function on(element:Node,event:string,handler:(...args:Array<any>)=> void) {
    return element.addEventListener(event,handler,false);
}
export function off(element:Node,event:string,handler:(...args:Array<any>)=> void) {
    return element.removeEventListener(event,handler,false)
}
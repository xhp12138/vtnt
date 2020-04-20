

import { on, off, throttle } from '@/utils/index';
import Vue from 'vue';
import Monitor from './monitor'
type lazyOpt = {
    defaultImg:string
}
class Lazy {
    opt: lazyOpt
    queue: Array<Monitor>
    _triggerMonitor: () => void;
    static viewport = {
        h:window.innerHeight,
        w:window.innerWidth
    } 
    constructor(opt ?: lazyOpt) {
        this.queue = []
        this.opt = Object.assign({
            defaultImg: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        }, opt)
        this._triggerMonitor = throttle(this.triggerMonitor, 400);
        this.init();
    }
    init() {
        on(document,'scroll',this._triggerMonitor.bind(this))
        Vue.nextTick(() => {
            this._triggerMonitor();
        })
    }
    triggerMonitor() {
        console.log(this.queue);
        this.queue.forEach((i: Monitor,k) => {
           if (i.status == 'unloaded' && i.check()) {
               i.load();
           }
        })
    }
    bind(el: Element, binding: any) {
        const {defaultImg} = this.opt;
        const {value} = binding;
        const monitor = new Monitor({
            el,
            src: value,
            defaultImg,
            viewport: Lazy.viewport
        })
        this.queue.push(monitor);
    }
    unbind(el:Element) {
       const index = this.queue.findIndex((i) => el.getAttribute('src') === i.src);
       this.queue.splice(index,1)
       this._triggerMonitor();
    }
}

export default Lazy
/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-04-17 09:37:23
 * @LastEditTime: 2020-05-07 23:01:26
 * @FilePath: /mywork/myStudy/vtnt/src/components/lazy-load/monitor.ts
 */
class Monitor {
    el:Element;
    src: string;
    defaultImg:string;
    status: 'unloaded' | 'loading' | 'loaded';
    viewport: {
        w:number,
        h:number
    };
    constructor(opt:{
        el:Monitor['el'],
        src:Monitor['src'],
        viewport:Monitor['viewport']
        defaultImg:Monitor['defaultImg']
    }) {
        this.el = opt.el;
        this.src = opt.src;
        this.defaultImg = opt.defaultImg
        this.viewport = opt.viewport
        this.status = 'unloaded'
        this.init();
    }
    init() {
        if (!this.src) return 
        this.render(this.defaultImg)
    }
    check() {
        const client = this.el.getBoundingClientRect();
        console.log(client)
        const vertical = (client.top <= this.viewport.h) || (this.viewport.h >= client.bottom - client.height && client.bottom >= 0)
        const level = (client.left  <= this.viewport.w) || (this.viewport.w >= client.right - client.width && client.right >=0)
        if (vertical && level) return true 
        return false 
    }
    load() {
        this.render(this.src);
        this.status = 'loaded'
    }
    render(src:string) {
        this.el.setAttribute('src',src)
    }

}
export default Monitor
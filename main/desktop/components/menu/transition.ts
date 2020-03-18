
import Vue from 'vue';
import {setClass,removeClass} from '@/utils/index.ts'
export default Vue.extend({
    functional: true,
    render(h, ctx) {
      const attr = {
        on: {
          beforeEnter(el:HTMLElement) {
            el.style.height = '0'
            setClass(el,'vtnt-submenu-enter')
          },
          enter(el:HTMLElement) {
             // TODO 通过el.scrollHeight 强制触发回流来更新height
            el.style.height = el.scrollHeight + 'px'
          },
          afterEnter(el:HTMLElement) {
            removeClass(el,'vtnt-submenu-enter')
            el.style.height = ''
          },
          beforeLeave(el:HTMLElement) {
            el.style.height = el.scrollHeight + 'px'
            // TODO 强制触发回流来更新height
            el.scrollHeight
          }, 
          leave(el:HTMLElement,done:any) {
            setClass(el,'vtnt-submenu-leave') 
            el.style.height = '0';
              setTimeout(() => {
                done()
              },300)
          },
          afterLeave(el:HTMLElement) {
            removeClass(el,'vtnt-submenu-leave')
          }
        }
      }
      return h('transition', attr ,ctx.children)
    }
  })

import { Vue, Component, Prop, Mixins,Inject } from "vue-property-decorator";
import {VNode} from 'vue'
import vntMenu from './menu'
import'./submenu.scss'; 
import transition from './transition';
import {isParentComponent} from '../../../../src/utils/index'
@Component({  
    name: 'vtnt-sub-menu',
    components: {
        'vtnt-transition':transition 
    }
})
export default class vtntSubMenu extends Vue {
    @Prop({
        type: [String,Number]
    })
    readonly index!: string ;
    @Prop({
        type: [String,Number]
    })
    readonly title!: string | number ;
    @Inject() readonly Menu!: vntMenu
    handleClick(e:MouseEvent) {
        e.stopPropagation();
        if (!this.index) return 
        this.Menu.handleSubMenu(this.index,isParentComponent(this,'vtnt-sub-menu'));
    }
    get isSelect() {
        return this.Menu.openCache.includes(this.index)
    }
    get c() {
        return 'vtnt-sub-menu'
    }
    render(): VNode { 
        const {c,isSelect,title} = this;
    const titleWrap = this.$slots.title || <span>{title}</span>
        return (<div class={
            {
                [`${c}`]:true
            } }
            onClick={(e:MouseEvent)=> this.handleClick(e)}
        >
           <div class={{
               [`${c}__title-wrap--open`]:isSelect,
               [`${c}__title-wrap`]:true
           }}>
               {titleWrap}
               <vtnt-icon name='arrow-down'></vtnt-icon>
           </div>
           <vtnt-transition>
                <div vShow={isSelect}  class={`${c}__content`}>{this.$slots.default}</div>
           </vtnt-transition>
        </div>) 
    }
}
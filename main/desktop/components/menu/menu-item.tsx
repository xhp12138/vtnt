
import { Vue, Component, Prop, Mixins,Inject } from "vue-property-decorator";
import {VNode} from 'vue'
import vntMenu from './menu'
import'./menu-item.scss';
import {RawLocation} from 'vue-router';
@Component({  
    name: 'vtnt-menu-item'
})
export default class vtntMenuItem extends Vue {
    @Prop({
        type: [String,Number]
    })
    readonly index!: string ;
    @Prop({
        type: String
    })
    readonly route!: string
    @Inject() readonly Menu!: vntMenu
    mounted() {
      this.index && this.Menu.addMenuItem(this.index,this);
    }
    handleClick(e:MouseEvent) {
        e.stopPropagation();
        this.Menu.handleMenuItem(this.index)
    } 
    get isSelect() {
        return this.index === this.Menu.activeIndexCache[0]
    }
    render(): VNode { 
        return (<div class={{
            'vtnt-menu-item': true,
            'vtnt-menu-item--active':this.isSelect
        }} onClick={this.handleClick}>
             <span>{this.$slots.default}</span>
        </div>) 
    }
}
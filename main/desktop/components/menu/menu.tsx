
import { Vue, Component, Prop, Provide, Mixins, Watch, Model } from "vue-property-decorator";
import { VNode } from 'vue'
import './menu.scss';
import menuItem from './menu-item'
type menuItemKey = string
type componentsList = {
    [key in menuItemKey]: menuItem
}
@Component({
    name: 'vtnt-menu'
})
export default class vtntMenu extends Vue {
    @Model('change', { type: [String, Number] }) readonly activeIndex!: menuItemKey
    activeIndexCache = this.activeIndex ? [] : [this.activeIndex]
    @Prop({
        type: Array
    })
    readonly activeOpen!: Array<any>;
    @Prop({
        type: Boolean
    })
    readonly uniqueOpened ?: boolean;
    @Prop({
        type: Boolean
    })
    readonly router ?: boolean;
    @Provide() Menu = this;
    componentsList: componentsList = {}
    openCache: Array<any> = this.activeOpen || []
    addMenuItem(index: menuItemKey, components: any) {
        this.componentsList[index] = components
    }
    handleMenuItem(index: menuItemKey) {
        this.$emit('change', index)
        this.activeIndexCache.splice(0, 1, index)
        if (this.router) this.handleItemRouter(index);
    }
    handleSubMenu(index: menuItemKey, hasParentSubMenu: boolean) {
        const openCache = this.openCache;
        const currentIndex = openCache.findIndex((i) => i == index)
        if (this.uniqueOpened) {
            if (!hasParentSubMenu) openCache.splice(0,openCache.length)
        }
        currentIndex === -1
            ? openCache.push(index)
            : openCache.splice(currentIndex, 1)

    }
    handleItemRouter(index: menuItemKey) {
        const itemCpt = this.componentsList[index];
        const options = itemCpt && itemCpt.route ? itemCpt.route : index
        this.$router.push(options)
    }
    @Watch('activeCache')
    onCompontsList(nv: componentsList) {
        if (nv) return
    }
    render(): VNode {
        return (<div class="vtnt-menu">
            {this.$slots.default}
        </div>)
    }
}
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import { VNode } from 'vue'
import './App.scss';
import mobileWrap from './components/mobile-wrap/index';
import components from '../../src/components/components.json';
@Component({
    components: {
        mobileWrap
    }
})

export default class App extends Vue {
    test = '1';
    render(): VNode {
        const cpt:any = components;
        const menuItem = Object.keys(cpt).map((name: any) => {
            return cpt[name].menu ? <vtnt-menu-item index={name}>{cpt[name].title}</vtnt-menu-item> : null
        })
        return (<div class="ds__wrap">
            <div class='ds__header'></div>
            <div class='ds__container'>
                <div class='ds__main-block ds__main-block--main'>
                    <div class='ds__content'>
                        222
                        <router-view />
                    </div>
                </div>
                <div class='ds__main-block ds__main-block--left'>
                    <vtnt-menu router activeIndex={this.test} vModel={this.test}>
                        {menuItem}
                    </vtnt-menu>
                </div>
                <div class='ds__main-block ds__main-block--right'>
                <vtnt-form ref="form" >
                <vtnt-form-item label='文本' ruleKey='input1'>
                    <vtnt-input></vtnt-input>
                </vtnt-form-item>
                <vtnt-form-item label='test' ruleKey='input1'>
                    <vtnt-icon name='arrow-down'></vtnt-icon>
                </vtnt-form-item>
            </vtnt-form>
                    <mobile-wrap></mobile-wrap>
                </div>
            </div>
        </div>)
    }
}
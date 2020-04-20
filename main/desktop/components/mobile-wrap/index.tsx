import * as tsx from "vue-tsx-support";
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import {VNode} from 'vue'
import'./index.scss';
@Component({ 
    name: 'mobile-wrap'
})
export default class mobileWrap extends Vue {
    get src() {
        const path = this.$store.state.path || '' ;
        return location.origin + '/mobile.html#/'  +  path
    }
    render(): VNode { 
        return (<div class="mw__wrap">
            <iframe frameborder="0" name='mobile' allowtransparency={true} scrolling='yes' src={this.src}></iframe>
        </div>) 
    }
}
import * as tsx from "vue-tsx-support";
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import {VNode} from 'vue'
import'./App.scss';
interface Props {

}
@Component
export default class App extends Vue {
    test(callback:()=>void) {
        console.log('加载')
        callback();
    }
    test1(callback:() => void) {
        console.log('刷新')
        callback()
    } 
    created() {
    }
    render(): VNode { 
        return (<div class="test">
              <router-view />
        </div>) 
    }
}
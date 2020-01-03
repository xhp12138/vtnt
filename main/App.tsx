import * as tsx from "vue-tsx-support";
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import {VNode} from 'vue'
import'./App.scss';
interface Props {

}
@Component
export default class App extends tsx.Component<Props> {
    test(callback:()=>void) {
        console.log('加载')
        callback();
    }
    test1(callback:() => void) {
        console.log('刷新')
        callback()
    }
    render(): VNode { 
        return (<div class="test">
             <pullToRefresh  down {...{props: {onRefresh:this.test,onLoad:this.test1}}}> 
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
                 <li>22222</li>
             </pullToRefresh>
        </div>) 
    }
}
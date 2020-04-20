
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import {VNode} from 'vue'
import'./App.scss';
@Component
export default class App extends Vue {
    render(): VNode { 
        return (<div class="mb__content">
              <router-view />
        </div>) 
    }
}
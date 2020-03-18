import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import './index.scss';
@Component({
    name: 'vtnt-pull-to-refresh-demo'
})
export default class vtntPullToRefreshDemo extends Vue {
    render() {
        return <div class='test'>
            <vtnt-pull-to-refresh down>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
                    <div>22222</div>
            </vtnt-pull-to-refresh>
        </div>
    }
}
import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import fontJson from '@/assets/iconfont/iconfont.json';
import './index.scss';
@Component({
    name: 'vtnt-icon-demo'
})
export default class vtntIconDemo extends Vue {

    render() {
        const fontList = fontJson.glyphs.map(i => {
            const name = i.font_class.replace("-", "");
            return <li class='icon-demo__item'>
                <div class='icon-demo__item-content'>
                    <vtnt-icon name={name}></vtnt-icon>
                    <div>{i.name}</div>
                </div>
            </li>
        })
        return <div>
            <h1>图标</h1>
            <ul class='icon-demo__list'>
                {fontList}
            </ul>
        </div>
    }
}
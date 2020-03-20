import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
@Component({
    name: 'vtnt-slider-demo'
})
export default class vtntSliderDemo extends Vue {
    num = 10
    render() { 
        return <div>
             <vtnt-slider bar={true} value={this.num}></vtnt-slider>
            </div>
    }
}
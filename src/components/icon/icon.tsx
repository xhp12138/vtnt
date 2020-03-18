import { Vue, Component, Prop, Mixins,Watch } from "vue-property-decorator";
import './icon.scss';
const classNames = require('classnames');
@Component({
    name: 'vtnt-icon'
})
export default class vtntIcon extends Vue {
    @Prop({
        type: String,
        default:'vtnt-icon'
      })
    readonly iconPrefix?: string;
    @Prop({
        type: [String, Number]
    })
    readonly size ?: string | number;
    @Prop({
        type: [String]
    })
    readonly name ?: string ;
    @Prop({
        type: String,
        default: 'i'
      })
    readonly tag?: string; 
    get iconStyle () {
        return this.size ? {fontSize:this.size + 'px'} : {}
    }
    get iconName () {
        return this.name ? this.iconPrefix + '-' + this.name : ''
    }
    get isInitialIconPrefix () {
        return this.iconPrefix === 'vtnt-icon'
    }
    render() { 
        const {tag} = this;
        const iconClass = classNames(`vtnt-icon__container ${this.iconName}`,{
            'vtnt-icon__container--default' : this.size,
            'vtnt-icon__container--font': this.isInitialIconPrefix,
            [`${this.iconPrefix}`] : !this.isInitialIconPrefix && this.iconPrefix
        });
        return <tag style={this.iconStyle} class={iconClass}></tag>
    }
}
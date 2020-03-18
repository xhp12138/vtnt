import { Vue, Component, Prop, Mixins,Watch } from "vue-property-decorator";
import './input.scss';
@Component({
    name: 'vtnt-input'
})
export default class vtntInput extends Vue {
    @Prop({
        type: String,
        default: 'http://image.bondehome.com/FkcvU1UirUc4MyO8VqFoV9_zZ2V4'
      })
    readonly icon?: string;
    @Prop({
    type: [String, Number]
    })
    readonly value?: string | number;
    @Prop({
        type: String
      })
    readonly type?: string;
    handleChange(e:Event) {
        if (!e.target) return ;
        const value = (e.target as HTMLInputElement).value;
        this.$emit("change", value);
    }
    handleFocus(e:Event) {
        const value = (e.target as HTMLInputElement).value;
        this.$emit("focus", value);
    }
    handleInput(e:Event) {
        const value = (e.target as HTMLInputElement).value;
        this.$emit("input", value);
    }
    handleBlur(e:Event) {
        const value =(e.target as HTMLInputElement).value;
        this.$emit("blur", value);
    }
    
    render() { 
        const icon = this.$slots.icon ? this.$slots.icon : this.icon ? <img src={this.icon} class='vtnt-input__icon'/> : null ;
        return <div class="vtnt-input__wrap">
                <input 
                    onFocus={this.handleFocus} 
                    onBlur={this.handleBlur} 
                    onInput={this.handleInput} 
                    onChange={this.handleChange} 
                    v-bind="$attrs"
                    type={this.type}
                    class='vtnt-input__container'>
                </input>
                {/*icon*/}
            </div> 
    }
}
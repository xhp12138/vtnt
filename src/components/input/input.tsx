import Vue from 'vue';
import './input.scss';
const vtntInput = Vue.extend({
    name:'vtnt-input',
    props: {
        icon: {
            type: String,
            default: 'http://image.bondehome.com/FkcvU1UirUc4MyO8VqFoV9_zZ2V4'
        },
        value: {
            type: [String, Number]
        },
        type: {
            type: String
        }
    },
    methods: {
        handleChange(e: Event) {
            if (!e.target) return;
            const value = (e.target as HTMLInputElement).value;
            this.$emit("change", value);
        },
        handleFocus(e: Event) {
            const value = (e.target as HTMLInputElement).value;
            this.$emit("focus", value);
        },
        handleInput(e: Event) {
            const value = (e.target as HTMLInputElement).value;
            this.$emit("input", value);
        },
        handleBlur(e: Event) {
            const value = (e.target as HTMLInputElement).value;
            this.$emit("blur", value);
        }
    },

    render() {
        const icon = this.$slots.icon ? this.$slots.icon : this.icon ? <img src={this.icon} class='vtnt-input__icon' /> : null;
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
            {icon}
        </div>
    }
})
vtntInput.cptName ='vtntInput'
export default vtntInput
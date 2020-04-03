
import Vue from 'vue';
import './icon.scss';
const vtntIcon = Vue.extend({
    name: 'vtnt-icon',
    props: {
        iconPrefix: {
            type: String,
            default: 'vtnt-icon'
        },
        size:{
            type: [String, Number]
        },
        name:{
            type: [String]
        },
        tag:{
            type: String,
            default: 'i'
        }
    },
    computed:{
        iconStyle():object {
            return this.size ? { fontSize: this.size + 'px' } : {}
        },
        iconName():string {
            return this.name ? this.iconPrefix + '-' + this.name : ''
        },
        isInitialIconPrefix():boolean {
            return this.iconPrefix === 'vtnt-icon'
        }
    },
    render() {
        const { tag } = this;
        return <tag style={this.iconStyle} class={{
            'vtnt-icon__container':true,
            [`${this.iconName}`]:true,
            'vtnt-icon__container--default': this.size,
            'vtnt-icon__container--font': this.isInitialIconPrefix,
            [`${this.iconPrefix}`]: !this.isInitialIconPrefix && this.iconPrefix
        }}></tag>
    }
})
vtntIcon.cptName ='vtntIcon'
export default vtntIcon
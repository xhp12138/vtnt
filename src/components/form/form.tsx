import Vue from 'vue';
interface data {
    formItemCpt: Array<Vue>
}
const vtntForm = Vue.extend({
    name: 'vtnt-form',
    provide() {
        return {
            form: this
        }
    },
    data(): data {
        return {
            formItemCpt: []
        }
    },
    props: {
        params: {
            type: Object
        },
        rules: {
            type: Object,
            default() {
                return {}
            }
        },
        labelWidth: {
            type: [String]
        }
    },
    created() {
        this.$on('form.addItem', (component: any) => {
            this.formItemCpt.push(component)
            component.setFormCpt(this)
        })
    },
    methods: {
        validator() {
            const promiseList = this.formItemCpt.map((i: any) => i.validator());
            console.log(promiseList)
            return Promise.all(promiseList)
        }
    },
    render() {
        return <form>
            {this.$slots.default}
        </form>
    }

})
vtntForm.cptName = 'vtntForm'
export default vtntForm;
import Vue from 'vue';
interface data {
    formItemCpt: Array<Vue>
}
const vtntForm = Vue.extend({
    name: 'vtnt-form',
    data():data {
        return {
            formItemCpt: []
        }
    },
    props: {
        params: {
            type:Object
        },
        rules: {
            type:Object,
            default() {
                return {}
            }
        }
    },
    created() {
        this.$on('form.addItem',(component:any)=> {
            this.formItemCpt.push(component)
            component.setFormCpt(this)
        })
    },
    methods: {
        validator() {
            const promiseList = this.formItemCpt.map((i:any)=> i.validator());
            console.log(promiseList)
             Promise.all(promiseList).then(res => {
                console.log('res',res);
            }).catch(error => {
                console.log('error',error)
            })
        }
    },
    render() {
        return <form>
            {this.$slots.default}
        </form>
    }

})
vtntForm.cptName ='vtntForm'
export default vtntForm;
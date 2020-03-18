import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import penetrateMixins from '@/mixins/penetrate';
@Component({
    name: 'vtnt-form'
})
export default class vtntForm extends Mixins(penetrateMixins) {
    @Prop({
        type: Object
    })
    readonly params!: object;
    @Prop({
        type: Object,
        default: function () {
            return {}
        }
    })
    readonly rules!: object;
    formItemCpt:Array<Vue> = [];
    created() {
        this.$on('form.addItem',(component:any)=> {
            this.formItemCpt.push(component)
            component.setFormCpt(this)
        })
    }
    validator() {
        const promiseList = this.formItemCpt.map((i:any)=> i.validator());
        console.log(promiseList)
         Promise.all(promiseList).then(res => {
            console.log('res',res);
        }).catch(error => {
            console.log('error',error)
        })
    }
    render() {
        return <form>
            {this.$slots.default}
        </form>
    }
}
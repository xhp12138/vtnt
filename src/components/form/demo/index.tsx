import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import { VNode } from 'vue'
@Component({
    name: 'vtnt-form-demo'
})
export default class vtntFormDemo extends Vue {
    params = {
        input1: ''
    }
    rules = {
        input1: [{
            type: 'string',
            required: true,
            message: '字段🙅‍♂️为空'
        }]
    }
    handleSubmit() {
        this.$refs.form.validator()
    }
    render(): VNode {
        const { rules, params } = this;
        return <div>
            <vtnt-form ref="form" rules={rules} params={params}>
                <vtnt-form-item label='文本' ruleKey='input1'>
                    <vtnt-input></vtnt-input>
                </vtnt-form-item>
                <vtnt-form-item label='test' ruleKey='input1'>
                    <vtnt-icon name='arrow-down'></vtnt-icon>
                </vtnt-form-item>
            </vtnt-form>
            <button onClick={() => this.handleSubmit()}>提交</button>
        </div>
    }
}
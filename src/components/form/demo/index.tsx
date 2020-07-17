import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import { VNode } from 'vue'
@Component({
    name: 'vtnt-form-demo'
})
export default class vtntFormDemo extends Vue {
    params = {
        input1: '2222'
    }
    rules = {
        input1: [{
            type: 'string',
            required: true,
            message: '字段🙅‍♂️ 2为空'
        }]
    }
    handleSubmit() {
        this.$refs.form.validator()
    }
    render(): VNode {
        const { rules, params } = this; 
        return <div>
            <vtnt-form label-width="30%" ref="form" rules={rules} params={params}>
                <vtnt-form-item  label='文本' ruleKey='input1'>
                    <vtnt-input disabled  vModel={params.input1} placeholder='请输入2文本'></vtnt-input>
                </vtnt-form-item>
                <vtnt-form-item label='test' ruleKey='input1'>
                    <vtnt-icon name='arrow-down'></vtnt-icon>
                </vtnt-form-item>
            </vtnt-form>
            <button onClick={() => this.handleSubmit()}>提交</button>
        </div>
    }
}
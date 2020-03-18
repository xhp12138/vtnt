import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import penetrateMixins from '@/mixins/penetrate';
import './form-item.scss';
import schema from 'async-validator';
import {checkParam} from '@/utils/';
const classNames = require('classnames');

@Component({
    name: 'vtnt-form-item'
})
export default class vtntFormItem extends Mixins(penetrateMixins) {
    formCpt : any = {};
    errorMsg :string = '';
    @Prop({
        type: String
    })
    readonly label!: string;
    @Prop({
        type: String,
    })
    readonly ruleKey!: string;
    @Prop({
        type: Array,
        default: function () {
            return [];
        }
    })
    readonly rule!: Array<any>;
    created() {
        this.dispatch('vtnt-form','form.addItem',this)
    }
    validator() {
        if (!this.isValidator) return;
        const ruleKey = this.ruleKey;
        const descriptor = {
            [ruleKey]: this.formItemRule.l ? this.formItemRule.v : this.formRules.v
        }
        const validator = new schema(descriptor); 
        const params = {
            [ruleKey]: this.formParamValue.v
        }
        const promise = validator.validate(params)  
        promise.catch(error => {
           if (error && error.errors && error.errors.length) this.errorMsg = error.errors[0].message || ''
        })
        return promise
    }
    hasRequire(rules: Array<any>) {
        let result = false;
        for (let i = 0, len = rules.length; i < len; i++) {
            if (rules[i].require) {
                result = true;
                break;
            }
        }
        return result;
    }
    setFormCpt(formCpt:Vue) { //parent form dispatch
        this.formCpt = formCpt
    }
    foundRequire(rules:Array<any> | {[key:number]:any}) {
        let result = false;
        const rulesKey:Array<any> = Object.keys(rules);
        for(let i=0,len = rulesKey.length;i<len;i++ ) {
            if (rules[i].required) result = true;break;
        }
        return result;
    }
    get isValidator() {
        return (this.formRules.l || this.formItemRule.l) && this.formParamValue.l
    }
    get isRequire() {
        return this.isValidator && this.foundRequire(this.rules)
    }
    get rules () {
        return this.formItemRule.l ? this.formItemRule.v : this.formRules.v
    }
    get formRules() {
        const rules = this.formCpt.rules;
        return checkParam(rules,'object',this.ruleKey);;
    }
    get formItemRule() {
        const rule = this.rule;
        return checkParam(rule,'object.length');
    }
    get formParamValue() {
        const params = this.formCpt.params;
        return checkParam(params,'object',this.ruleKey);
    }
    render() {
        const { label,errorMsg } = this;
        const require = this.isRequire && <span class='vtnt-form-item__require'>*</span>
        return  <div class='vtnt-form-item__wrap'>
                    <label class='vtnt-form-item__label'>{label}{require}</label>
                    <div class='vtnt-form-item__form'>
                        {this.$slots.default}
                        <div class='vtnt-form-item__error-tips'>{errorMsg}</div>
                    </div>
                </div>
    }
}
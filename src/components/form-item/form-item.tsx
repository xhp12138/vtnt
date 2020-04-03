import Vue from 'vue';
import penetrateMixins from '@/mixins/penetrate';
import './form-item.scss';
import schema from 'async-validator';
import { checkParam ,paramResult,paramResultValue} from '@/utils/index';
interface data {
    formCpt: any
    errorMsg: string
}
const vtntFormItem = penetrateMixins.extend({
    name: 'vtnt-form-item',
    data():data {
        return {
            formCpt: {},
            errorMsg: ''
        } 
    },
    props: {
        label: {
            type: String
        },
        ruleKey: {
            type: String,
            default: ''
        },
        rule: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    created() {
        this.dispatch('vtnt-form', 'form.addItem', this)
    },
    methods: {
        validator() {
            console.log(this);
            if (!this.isValidator) return;
            const ruleKey = this.ruleKey;
            const descriptor = {
                [ruleKey]: this.formItemRule.l ? this.formItemRule.v : this.formRules.v
            }
            
            const validator = new schema(descriptor);
            console.log(validator)
            const params = {
                [ruleKey]: this.formParamValue.v
            }
            const promise = validator.validate(params)

            promise.catch(error => {
                if (error && error.errors && error.errors.length) this.errorMsg = error.errors[0].message || ''
            })
            return promise
        },
        hasRequire(rules: Array<any>) {
            let result = false;
            for (let i = 0, len = rules.length; i < len; i++) {
                if (rules[i].require) {
                    result = true;
                    break;
                }
            }
            return result;
        },
        setFormCpt(formCpt: Vue) { //parent form dispatch
            this.formCpt = formCpt
        },
        foundRequire(rules: Array<any> | { [key: number]: any }) {
            let result = false;
            const rulesKey: Array<any> = Object.keys(rules);
            for (let i = 0, len = rulesKey.length; i < len; i++) {
                if (rules[i].required) result = true; break;
            }
            return result;
        }
    },
    computed: {
        formRules():paramResult {
            const rules = this.formCpt.rules;
            return checkParam(rules, 'object', this.ruleKey);;
        },
        formItemRule():paramResult {
            const rule = this.rule;
            return checkParam(rule, 'object.length');
        },
         formParamValue():paramResult {
            const params = this.formCpt.params;
            return checkParam(params, 'object', this.ruleKey);
        },
         isValidator():boolean{
            return (this.formRules.l || this.formItemRule.l) && this.formParamValue.l
        },
        isRequire():boolean {
            return this.isValidator && this.foundRequire(this.rules)
        },
        rules():paramResultValue {
            return this.formItemRule.l ? this.formItemRule.v : this.formRules.v
        },
    },
    render() {
        const { label, errorMsg } = this;
        const require = this.isRequire && <span class='vtnt-form-item__require'>*</span>
        return <div class='vtnt-form-item__wrap'>
            <label class='vtnt-form-item__label'>{label}{require}</label>
            <div class='vtnt-form-item__form'>
                {this.$slots.default}
                <div class='vtnt-form-item__error-tips'>{errorMsg}</div>
            </div>
        </div>
    }
})
vtntFormItem.cptName ='vtntFormItem'
export default vtntFormItem;

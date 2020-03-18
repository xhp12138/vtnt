import { Component, Prop, Vue,Watch } from 'vue-property-decorator';
@Component({})
export default class penetrateMixin  extends Vue  {
    dispatch(componentName:string, eventName:string, params:any) {
        var parent = this.$parent || this.$root;
        var name = parent.$options.name;
  
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
          if (parent) {
            name = parent.$options.name ;
          }
        }
        if (parent) {
          parent.$emit.call(parent, eventName, params);
        }
      }
}

/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-21 19:38:13
 * @LastEditTime: 2020-03-21 19:50:50
 * @FilePath: /mywork/myStudy/vtnt/src/mixins/style.ts
 */
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class styleMixin extends Vue  {
    b(key:string):(v:string)=> string {
      return function(value:string) {
         return key + value
      }
    }
}
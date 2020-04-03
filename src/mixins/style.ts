/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-21 19:38:13
 * @LastEditTime: 2020-04-02 23:04:11
 * @FilePath: /mywork/myStudy/vtnt/src/mixins/style.ts
 */
import Vue,{VueConstructor} from 'vue'
const mixins = Vue.extend({
  methods: {
    b(key:string):(v:string)=> string {
      return function(value:string) {
         return key + value
      }
    }
  }
})
export default mixins
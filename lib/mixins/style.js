/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-21 19:38:13
 * @LastEditTime: 2020-04-02 23:04:11
 * @FilePath: /mywork/myStudy/vtnt/src/mixins/style.ts
 */
import Vue from 'vue';
var mixins = Vue.extend({
  methods: {
    b: function b(key) {
      return function (value) {
        return key + value;
      };
    }
  }
});
export default mixins;
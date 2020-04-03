

import Vue from 'vue';
import './refresh-column.scss';
const refreshColumn = Vue.extend({
  props: {
    type:{
      type: String
    },
    up:{
      type:Boolean
    },
    down:{
      type:Boolean
    },
    initial:{
      type: String,
      default: '上拉可以加载更多'
    },
    ready:{
      type: String,
      default: '松开加载更多'
    },
    loading:{
      type: String, 
      default: '加载中...'
    },
    finish:{
      type: String
    }
  },
  computed: {
    text():string {
      let text = "";
      const type = this.type;
      if (type === "initial") text = this.initial;
      if (type === "ready") text = this.ready;
      if (type === "loading") text = this.loading;
      if (type === "finish") text = this.finish;
      return text;
    },
    wrapClassName():string {
      const name = 'vtnt-refresh-column__wrap'
      return this.up ? name + '--up' : name + '--down'
    }
  },
  render() {
    return <div class={['vtnt-refresh-column__wrap',this.wrapClassName]}>
      <span >{this.text}</span>
    </div>
  }
})
export default refreshColumn
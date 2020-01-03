

import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import './refresh-column.scss';
interface Props {
  type:string
}
@Component({

})
export default class refreshColumn extends tsx.Component<Props> {
  @Prop({
    type: String
  })
  readonly type!: string;
  @Prop({
    type:Boolean
  })
  readonly up!:boolean;
  @Prop({
    type:Boolean
  })
  readonly down !:boolean;
  @Prop({
    type: String,
    default: '上拉可以加载更多'
  })
  readonly initial!: string;
  @Prop({
    type: String,
    default: '松开加载更多'
  })
  readonly ready!: string;
  @Prop({
    type: String, 
    default: '加载中...'
  })
  readonly loading!: string;
  @Prop({
    type: String
  })
  readonly finish!: string;
  get text() {
    let text = "";
    const type = this.type;
    if (type === "initial") text = this.initial;
    if (type === "ready") text = this.ready;
    if (type === "loading") text = this.loading;
    if (type === "finish") text = this.finish;
    return text;
  }
  get wrapClassName() {
    const name = 'vtnt-refresh-column__wrap'
    return this.up ? name + '--up' : name + '--down'
  }
  render() {
    return <div class={['vtnt-refresh-column__wrap',this.wrapClassName]}>
      <span >{this.text}</span>
    </div>
  }
}
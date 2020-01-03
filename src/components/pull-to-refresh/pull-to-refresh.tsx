
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import { Watch } from 'vue-property-decorator';
import * as tsx from "vue-tsx-support";
import refreshColumn from "./refresh-column/refresh-column";
import './pull-to-refresh.scss';
const loadingTypes = {
  initial: "initial",
  ready: "ready",
  loading: "loading",
  finish: "finish"
};
interface Props {
}
type text = {
  initial:string,
  ready:string,
  loading:string,
  finish:string
}
interface tips {
   up : text,
   down:text
}
@Component({
  name: 'pull-to-refresh',
  components: {
    refreshColumn
  }
})
export default class pullToRefresh extends tsx.Component<Props> {
  @Prop({
    type: Boolean,
    default: true
  })
  readonly up!: boolean;
  @Prop({
    type: Boolean,
    default: false
  })
  readonly down!: boolean;
  @Prop({
    type: Number,
    default: 100
  })
  readonly distanceToRefresh!: number;
  @Prop({
    type:Object,
    default() {
      return {}
    }
  })
  readonly tips!:tips
  @Prop({
    type: Function,
    default: (callback: () => void) => {
      callback();
    }
  })
  onRefresh !: (callback: () => void) => void;
  @Prop({
    type:Function,
    default:(callback: () => void) => {
      callback();
    }
  })
  onLoad !:(callback: () => void) => void;
  loadingType: string = loadingTypes.initial;
  diff: number = 2;
  startY: number = 0;
  defaultTips:tips = {
    up: {
      initial: '上拉可以加载更多',
      ready: '松开加载更多',
      loading: '加载中...',
      finish: '加载成功'
    },
    down: {
      initial: '下拉可以刷新',
      ready: '松开刷新',
      loading: '刷新中...',
      finish: '刷新成功'
    }
  }
  mounted() {
    this.init();
  }
  init() { }
  start(e: TouchEvent) {
    this.startY = e.touches[0].clientY;
  }
  move(e: TouchEvent) { 
    const mY = e.touches[0].clientY;
    if (this.isCanMove(mY)) {
      let diff = mY - this.startY;
      if (this.distanceToRefresh <= Math.abs(diff)) {
        diff = diff < 0 ? -this.distanceToRefresh : this.distanceToRefresh;
        this.loadingType = loadingTypes.ready;
      }
      this.diff = diff;
    }
  }
  end(e: TouchEvent) {
    if (this.diff === 0) return;
    if (Math.abs(this.diff) < this.distanceToRefresh) {
      return this.resetStatus();
    }
    this.loadingType = loadingTypes.loading;
    console.log(this.onRefresh)
    this.wrap.scrollTop === 0 ? this.onRefresh(this.onRefreshOver.bind(this)) : this.onLoad(this.onRefreshOver.bind(this))
  }
  /**
   * @description 重置滚动参数
   */

  resetStatus() {
    this.loadingType = loadingTypes.finish;
    this.setContentClass(loadingTypes.finish);
    this.diff = 0;
  }
  onRefreshOver() {
    this.resetStatus();
  }
  isCanMove(mY: number): boolean {
    const wrap = this.wrap;
    const scrollHeight = wrap.scrollHeight;
    const scrollTop = wrap.scrollTop;
    const clinetH = wrap.clientHeight;
    let diff = mY - this.startY;
    if (scrollTop === 0 && this.down) {
      return true
    } 
    if (scrollTop > 0 && this.up){
      console.log('上拉')
      const curretH = Math.round(scrollHeight - scrollTop);
      if (curretH === clinetH || curretH === (clinetH + 1) || curretH === (clinetH - 1) && diff >= 0) {
        return true;
      } else {
        this.startY = mY;
        return false
      }
    }
    return false;
  }
  setContentClass(loadingTypes: string) {
    if (loadingTypes === "finish") {
      this.content.setAttribute("class", "vtnt-pull-to-refresh__transition");
    } else {
      this.content.removeAttribute("class");
    }
  }
  getTipsText(type: 'up' | 'down',key: 'initial' | 'ready' | 'loading' | 'finish') {
    return (this.tips[type] && this.tips[type][key])  ? this.tips[type][key] : this.defaultTips[type][key]
  }
  get contentSty() {
    return {
      transform: `translate3d(0px,${this.diff}px,0)`
    };
  }
  get wrap() {
    // @ts-ignore
    return this.$refs.wrap.parentElement as HTMLDivElement;
  }
  get content() {
    console.log(this.$refs.content)
    return this.$refs.content as HTMLDivElement;
  }
  @Watch("diff")
  onChildChanged(v: number) {
    if (v === 0) {
      setTimeout(() => {
        //过度动画结束后重置状态
        this.loadingType = loadingTypes.initial;
        this.setContentClass(loadingTypes.initial);
      }, 300);
    }
  }
  render() {
    const { start, move, end, up, down, contentSty } = this;
    const tipsWrap = (type: 'up' | 'down') => {
      const staus =  type == 'up' ? up : down;
      return staus &&  
        <refresh-column up={type == 'up'} down={type == 'down'}
          initial={this.getTipsText('down','initial')} 
          ready={this.getTipsText('down','ready')} 
          loading={this.getTipsText('down','loading')}
          // finish={this.getTipsText('down','finish')}
          type={this.loadingType} 
        />
    }
    return <div class='vtnt-pull-to-refresh__wrap' ref={"wrap"}>
      <div
        class="vtnt-pull-to-refresh__test"
        ref="content"
        style={contentSty}
        onTouchstart={start}
        onTouchmove={move}
        onTouchend={end}
      >
        { tipsWrap('down')}
        <div class="vtnt-pull-to-refresh__content">
          {this.$slots.default}
        </div>
        { tipsWrap('up')}
      </div >
    </div>
  }
}


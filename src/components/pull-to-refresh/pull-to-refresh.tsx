
import Vue from 'vue';
import refreshColumn from "./refresh-column/refresh-column";
import './pull-to-refresh.scss';
const loadingTypes = {
  initial: "initial",
  ready: "ready",
  loading: "loading",
  finish: "finish"
};
type text = {
  initial: string,
  ready: string,
  loading: string,
  finish: string
}
interface tips {
  up: text,
  down: text
}
const vtntPullToRefresh = Vue.extend({
  data() {
    return {
      loadingType: loadingTypes.initial,
      diff: 2,
      startY: 0,
      defaultTips: {
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
    }
  },
  components: {
    refreshColumn
  },
  props: {
    up: {
      type: Boolean,
      default: true
    },
    down: {
      type: Boolean,
      default: false
    },
    distanceToRefresh: {
      type: Number,
      default: 100
    },
    tips: {
      type: Object,
      default() {
        return {}
      }
    },
    onRefresh: {
      type: Function,
      default: (callback: () => void) => {
        callback();
      }
    },
    onLoad: {
      type: Function,
      default: (callback: () => void) => {
        callback();
      }
    }
  },
  methods: {
    start(e: TouchEvent) {
      this.startY = e.touches[0].clientY;
    },
    move(e: TouchEvent) {
      const mY = e.touches[0].clientY;
      console.log(mY);
      if (this.isCanMove(mY)) {
        let diff = mY - this.startY;
        if (this.distanceToRefresh <= Math.abs(diff)) {
          diff = diff < 0 ? -this.distanceToRefresh : this.distanceToRefresh;
          this.loadingType = loadingTypes.ready;
        }
        this.diff = diff;
      }
    },
    end(e: TouchEvent) {
      if (this.diff === 0) return;
      if (Math.abs(this.diff) < this.distanceToRefresh) {
        return this.resetStatus();
      }
      this.loadingType = loadingTypes.loading;
      console.log(this.onRefresh)
      this.wrap.scrollTop === 0 ? this.onRefresh(this.onRefreshOver.bind(this)) : this.onLoad(this.onRefreshOver.bind(this))
    },
    /**
     * @description 重置滚动参数
     */

    resetStatus() {
      this.loadingType = loadingTypes.finish;
      this.setContentClass(loadingTypes.finish);
      this.diff = 0;
    },
    onRefreshOver() {
      this.resetStatus();
    },
    isCanMove(mY: number): boolean {
      if (this.loadingType === 'ready') return false
      const wrap = this.wrap;
      const scrollHeight = wrap.scrollHeight;
      const scrollTop = wrap.scrollTop;
      const clinetH = wrap.clientHeight;
      let diff = mY - this.startY;
      if (scrollTop === 0 && this.down) {
        return true //TODO: 已触顶
      }
      if (scrollTop > 0 && this.up) {
        //console.log('上拉')
        const curretH = Math.round(scrollHeight - scrollTop);
        if (curretH === clinetH || curretH === (clinetH + 1) || curretH === (clinetH - 1) && diff >= 0) {
          return true;
        } else {
          this.startY = mY;
          this.diff = 0 //TODO: 修正 diff 
          return false
        }
      }
      return false;
    },
    setContentClass(loadingTypes: string) {
      if (loadingTypes === "finish") {
        this.content.setAttribute("class", "vtnt-pull-to-refresh__transition");
      } else {
        this.content.removeAttribute("class");
      }
    },
    getTipsText(type: 'up' | 'down', key: 'initial' | 'ready' | 'loading' | 'finish') {
      return (this.tips[type] && this.tips[type][key]) ? this.tips[type][key] : this.defaultTips[type][key]
    }
  },
  computed: {
    contentSty(): object {
      return {
        transform: `translate3d(0px,${this.diff}px,0)`
      };
    },
    wrap(): HTMLDivElement {
      // @ts-ignore
      return this.$refs.wrap.parentElement as HTMLDivElement;
    },
    content(): HTMLDivElement {
      return this.$refs.content as HTMLDivElement;
    }
  },
  watch: {
    diff(v: number) {
      if (v === 0) {
        setTimeout(() => {
          //过度动画结束后重置状态
          this.loadingType = loadingTypes.initial;
          this.setContentClass(loadingTypes.initial);
        }, 300);
      }
    }
  },
  render() {
    const { start, move, end, up, down, contentSty } = this;
    const tipsWrap = (type: 'up' | 'down') => {
      const staus = type == 'up' ? up : down;
      return staus &&
        <refresh-column up={type == 'up'} down={type == 'down'}
          initial={this.getTipsText('down', 'initial')}
          ready={this.getTipsText('down', 'ready')}
          loading={this.getTipsText('down', 'loading')}
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
        {tipsWrap('down')}
        <div class="vtnt-pull-to-refresh__content">
          {this.$slots.default}
        </div>
        {tipsWrap('up')}
      </div >
    </div>
  }
})
vtntPullToRefresh.cptName ='vtntPullToRefresh'
export default vtntPullToRefresh


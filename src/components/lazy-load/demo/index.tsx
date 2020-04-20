import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
import './index.scss';
@Component({
    name: 'vtnt-lazy-load-demo'
})
export default class vtntLazyLoadDemo extends Vue {
    num = 10
    status = false ;
    mounted() {
    }
    render() {     
        return <div>
                { !this.status ? <img key={1} class="lazy-img" v-lazy="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2200201853,563477752&fm=26&gp=0.jpg" /> :null } 
                <img key={2} class="lazy-img" v-lazy="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587118036762&di=d0020a53b94b5c3b07f439c8397cb7f6&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fa6ad7720fac14925f56aeb451ad9107658ab47d8.jpg" />
                <img key={3} class="lazy-img" v-lazy="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587118036762&di=602b5b0d4a2bcd1cf49cbc5e64012eb0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180627%2Faaacdd28f5de4b4d8922497a19b317d1.jpeg" />
                <img key={3} class="lazy-img" v-lazy="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587130357653&di=43021be042c12f5c01f6e939abd35458&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F847fe2cad0dd3193343ccda5edb0ed9e1fe6ac95.jpg" />
            </div>
    }
}
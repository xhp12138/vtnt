import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
@Component({
    name: 'vtnt-upload-demo'
})
export default class vtntUploadDemo extends Vue {
    num = 10
    fileList = []
    render() { 
        return <div>
             <vtnt-upload v-model={this.fileList}></vtnt-upload>
            </div>
    }
}
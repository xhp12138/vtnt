import styleMixin from '@/mixins/style';
import icon from '@/components/icon/icon'
import './upload.scss';
const vtntUpload = styleMixin.extend({
    components:{
        'vtnt-icon':icon
    },
    data() {
        return {
            b:this.b('vtnt-upload')
        }
    },
    props:{
        beforeUpload:{
            type: Function
        },
        fileList:{
            type:Array
        }
    },
    model:{
        prop: 'fileList',
        event: 'input'
    },
    methods: {
        readFiles(fileList: Array<File>) {
            const promiseFileList = fileList.map((file, index) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = function (event: ProgressEvent<FileReader>) {
                        resolve({
                            result: (event.target as FileReader).result,
                            index
                        });
                    }
                    reader.onerror = function (error) {
                        reject({
                            result: error,
                            index
                        })
                    }
                    reader.readAsDataURL(file);
                })
            })
            promiseFileList.forEach(item => {
                item.then((res: any) => {
                    const { result, index } = res;
                    console.log(index, this.fileList)
                    this.fileList[index].url = result
                    this.fileList[index].status = 'success'
                }).catch((error) => {
    
                })
            })
        },
        addLoadingItem(fileList: Array<File>) {
            const item = fileList.map((file) => {
                return {
                    url: '',
                    status: 'loading'
                }
            })
            this.$emit('input', [...item, ...this.fileList])
        },
        handleChange(e: Event) {
            const files = (e.target as HTMLInputElement).files || [];
            const fileList = Array.prototype.slice.call(files);
            if (!fileList.length) return
            if (this.beforeUpload) {
                const isShop = this.beforeUpload(fileList)
                if (!isShop) return
            }
            if (true) {
                this.addLoadingItem(fileList)
                this.$nextTick(() => this.readFiles(fileList))
            }
    
        }
    },
    render() {
        const { b, fileList } = this;
        const dialog = (status: string) => {
            return <div class={b('__file-mask')}>
                {
                    status === 'loading' ? <i></i> :  <vtnt-icon name='error'></vtnt-icon>
                }
                <span>{status === 'loading' ? 'loading...' : '上传失败' }</span>
            </div>
        }
        const fileListWrap = fileList.map((i: any) => {
            return <div class={b('__file-item')}>
                {i.url ?  <img class={b('__file-img')} src={i.url} />   : dialog(i.status)}
                
            </div>
        })
        return <div class={b('__wrap')}>
            <div class={b('__file-list')}>
                {fileListWrap}
                <div class={[b('__file-item'),b('__file-item--add')]}>
                    <vtnt-icon name='add'></vtnt-icon>
                    <input
                        class={b('__input')}
                        type="file"
                        v-bind="$attrs"
                        onChange={this.handleChange}
                    ></input>
                </div>
            </div>
        </div>
    }
})
vtntUpload.cptName ='vtntUpload'
export default vtntUpload;

 


import { on, off } from '@/utils/index';
import styleMixin from '@/mixins/style';
import './picker.scss';
import { VNode } from 'vue';
type linkColumnsItem = {text?:any,children:Array<linkColumnsItem>}
interface data {
    b: (v: string) => string,
    translationParamList: Array<number>,
    lastTranslationParamList: Array<number>,
    columnIndexList:Array<number>,
    currentColmnIndex: number,
    startY: number,
    columnChildClientHeight: number
}
const vtntPicker = styleMixin.extend({
    data(): data {
        return {
            b: this.b('vtnt-picker'),
            translationParamList: [],
            lastTranslationParamList: [],
            columnIndexList:[],
            currentColmnIndex: -1,
            startY: 0,
            columnChildClientHeight: 0,
        }
    },
    props: {
        isLink: {
            type: Boolean,
            default: false
        },
        columns: {
            type: Array,
            default: []
        }
    },
    computed: {
        columnsLen(): number {
            let len = 0;
            if (this.isLink && this.columns.length) {
                len = this.getLinkColumnsLen(this.columns)
                console.log(len);
            } else {
                len = this.columns.length;
            }
            return len;
        },
        transformTime():object {
            return this.currentColmnIndex == -1 ? {
                transitionDuration: '.3s',
                transitionProperty: 'transform'
            } : {}
        }
    },
    mounted() {
        this.columnChildClientHeight = this.$refs.columnsList.childNodes[0].childNodes[0].childNodes[0].clientHeight;
    },
    methods: {
        getLinkColumnsLen(arr: Array<any>,len = 1):number {
            const children = arr[0].children
            if (!children || !children.length) {
                return len
            }
            len += 1
            return this.getLinkColumnsLen(children, len);
        },
        getCoulmnStyle(index: number) {
            const Y = this.translationParamList[index] || 0
            return {
                transform: `translate3d(0px,${Y}px,0)`
            }
        },
        getCurrentBottomBoundary() {
            return (this.$refs.columnsList as Element).childNodes[this.currentColmnIndex].childNodes[0].clientHeight;
        },
        getLinkColumns(columns:Array<VNode>,list:Array<linkColumnsItem>,index:number,max:number) {
            if (index === max) return;
            const li = list.map((i:any) => <li class={this.b('__column-item')}>{i.text}</li>);
            columns.push(<div class={this.b('__columns-wrap')}>
                <ul 
                    style={[this.getCoulmnStyle(index),this.transformTime]} 
                    onTouchstart={(e) => this.handleStart(e, index)} 
                    onTouchmove={(e) => this.handleMove(e)} 
                    onTouchend={(e) => this.handleEnd(e)} 
                    class={this.b('__column')}>
                    {li}
                </ul>
            </div>)
            const children = list[this.columnIndexList[index]].children
            if(children && children.length) this.getLinkColumns(columns,children,index + 1,max)
        },
        resetColumnIndexList() { // 重置联动选择项
            const currentIndex = this.currentColmnIndex;
            const resetList = this.columnIndexList;
            const resetTranslationList = this.translationParamList;
            const resetLastTranslationList = this.lastTranslationParamList;
            for(let i=0,len=this.columnIndexList.length;i<len;i++) {
                if (i > currentIndex) {
                    resetLastTranslationList[i] = resetTranslationList[i] = resetList[i] = 0
                } 
            }
            this.translationParamList = resetTranslationList
            this.columnIndexList = resetList
        },
        setDiff(diff: number, last?: boolean) {
            this.$set(this.translationParamList, this.currentColmnIndex, diff);
            if (last) this.$set(this.lastTranslationParamList, this.currentColmnIndex, diff);
        },
        checkDiff(): {diff:number,currentIndex:number} {
            let diff = this.translationParamList[this.currentColmnIndex];
            let integerDiff = Math.abs(diff);
            if (diff > 0) { // 触发下拉边界
                return {
                    diff:0,
                    currentIndex:0
                }
            }
            const colmnClientHeight = this.getCurrentBottomBoundary();
            const bottomBoundary = colmnClientHeight - this.columnChildClientHeight;
            if (integerDiff > bottomBoundary) return  {
                diff:-(bottomBoundary), //触发上拉边界,
                currentIndex: colmnClientHeight / this.columnChildClientHeight - 1
            }
            console.log('hhaha')
            let current = parseInt(String(integerDiff / this.columnChildClientHeight));
            const heightHalf = this.columnChildClientHeight / 2;
            if (integerDiff % this.columnChildClientHeight > heightHalf) current += 1
            return {
                diff: -(current * this.columnChildClientHeight),
                currentIndex:current
            } 
        },
        handleStart(e: TouchEvent, index: number) {
            this.currentColmnIndex = index;
            this.startY = e.touches[0].clientY;
        },
        handleMove(e: TouchEvent) {
            let diff = e.touches[0].clientY - this.startY;
            let lastDiff = this.lastTranslationParamList[this.currentColmnIndex] || 0;
            this.setDiff(lastDiff + diff);
        },
        handleEnd(e: TouchEvent) {
            const params = this.checkDiff()
            this.setDiff(params.diff, true);
            console.log(params.currentIndex,this.columnIndexList[this.currentColmnIndex])
            if (params.currentIndex !== this.columnIndexList[this.currentColmnIndex]) {
                this.$set(this.columnIndexList,this.currentColmnIndex,params.currentIndex)
                if (this.isLink) this.resetColumnIndexList()
                this.$emit('change',this.columnIndexList,this.currentColmnIndex)
            }
            this.currentColmnIndex = -1
        },

    },
    watch: {
        columnsLen: {
            handler: function (v) {
                if (v) {
                    const arr = [];
                    for (let i = 0; i < v; i++) {
                        arr.push(0);
                    }
                    this.translationParamList = arr;
                    this.lastTranslationParamList = arr.slice(0);
                    this.columnIndexList = arr.slice(0);
                }
            },
            immediate: true
        }
    },
    render() {
        const { b } = this;
        const coulmn = () => {
            let dom:Array<VNode> = [];
            const len = this.columnsLen;
            if (!this.isLink) {
                dom = this.columns.map((i: any, k) => {
                    const li = i.children.length ? i.children.map((i: string) => <li class={b('__column-item')}>{i}</li>) : ''
                    return <div class={b('__columns-wrap')}>
                        <ul 
                            style={[this.getCoulmnStyle(k),this.transformTime]} 
                            onTouchstart={(e) => this.handleStart(e, k)} 
                            onTouchmove={(e) => this.handleMove(e)} 
                            onTouchend={(e) => this.handleEnd(e)} 
                            class={b('__column')}>
                            {li}
                        </ul>
                    </div>
                })
            }else {
                this.getLinkColumns(dom,this.columns as any,0,len);
            }
            return dom
        }
        return (
            <div class={`${b('__wrap')}`}>
                <div ref="columnsList" class={b('__list')}>
                    {coulmn()}
                </div>
                <div class={`${b('__content')}`}>
                    <div class='vtnt-both-line'></div>
                </div>
                <div class={b('__mask')}></div>
            </div>
        )
    }
});
vtntPicker.cptName = 'vtntPicker'
export default vtntPicker
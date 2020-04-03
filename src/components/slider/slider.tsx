

import { on, off } from '@/utils/index';
import './slider.scss';
import Vue from 'vue';
interface data {
    sliderWrap ?: HTMLDivElement,
    sliderValue:number,
    isTouching: boolean,
    isMouse:boolean, 
    scrollWidth:number | string
}
const vtntSlider = Vue.extend({
    data():data {
        return  {
            sliderWrap: undefined,
            sliderValue: 0,
            isTouching: false,
            isMouse: false,
            scrollWidth: '',
        }
    },
    props: {
        max: { type: [String, Number],  default: 100 },
        min: { type: [String, Number],  default: 0 },
        value:{type:[String,Number],default: 0},
        important: Boolean,
        bar:Boolean,
        blockStyle:Object,
        trackStyle:Object,
        railStyle:Object,
        onChange:Function,
        onChangeEnd:Function
    },
    model:{
        prop: 'value',
        event: 'onChange'
    },
    computed: {
        className(): string {
            return this.important ? "label-important" : "label-normal";
        }
    },
    mounted() {
        this.sliderWrap = this.$refs.setSliderWrap as HTMLDivElement
        this.updateScrollWidth(this.value);
    },
    methods: {
        updateScrollWidth(value: number | string) {
            const { max } = this;
            const percentage = Number(value) / Number(max);
            const scrollWidth = percentage * 100 + '%';
            this.scrollWidth = scrollWidth
        },
        handleTouchStart(e: TouchEvent) {
            //TODO: e.stopImmediatePropagation() 
            e.stopPropagation()
            on(document.body, 'touchmove', this.handleTouchMove)
            on(document.body, 'touchend', this.handleEnd)
            this.isTouching = true
        },
        handleMouseDown(e: MouseEvent) {
            console.log(this.value)
            e.stopPropagation()
            on(document.body, 'mousemove', this.handleMouseMove)
            on(document.body, 'mouseup', this.handleEnd)
            this.isMouse = true
        },
        handleTouchMove(e: TouchEvent) {
            const mX = e.touches[0].clientX;
            this.handleMove(mX)
        },
        handleMouseMove(e: MouseEvent) {
            const mX = e.clientX
            this.handleMove(mX)
        },
        handleEnd() {
            if (this.isTouching) {
                off(document.body, 'touchmove', this.handleTouchMove)
                off(document.body, 'touchend', this.handleEnd)
                this.isTouching = false
            } else {
                off(document.body, 'mousemove', this.handleMouseMove)
                off(document.body, 'mouseup', this.handleEnd)
                this.isTouching = false
            }
            this.$emit('onChangeEnd', this.sliderValue)
        },
        handleMove(mX: number) {
            const wrapLeft = (this.sliderWrap as HTMLDivElement).getBoundingClientRect()['left'];
            const wrapWidth = (this.sliderWrap as HTMLDivElement).getBoundingClientRect()['width'];
            const { max } = this;
            let scroll = mX - wrapLeft;
            scroll = scroll <= 0
                ? 0
                : scroll >= wrapWidth
                    ? wrapWidth
                    : scroll;
            const percentage = scroll / wrapWidth;
            const scrollWidth = (percentage * 100) + '%';
            const value = percentage * Number(max);
            this.sliderValue = value;
            this.scrollWidth = scrollWidth
            this.$emit('onChange', value)
        },
        handleClick(e: MouseEvent) {
            if (!this.bar) return
            const X = e.clientX;
            this.handleMove(X);
            this.$emit('onChangeEnd', this.sliderValue)
        }
    },
    watch:{
        value(nv: string | number) {
            if (!nv && (this.isTouching || this.isMouse)) return
            this.updateScrollWidth(this.value)
        }
    },
    render() {
        const { bar, blockStyle, railStyle, trackStyle, scrollWidth } = this;
        const barWrap = bar
            ? <div style={{ ...blockStyle }} class="vtnt-slider__block" onMousedown={this.handleMouseDown} onTouchstart={this.handleTouchStart} ></div>
            : null;
        return (
            <div style={{ ...trackStyle }} onClick={(e: MouseEvent) => this.handleClick(e)} class="vtnt-slider__wrap" ref="setSliderWrap">
                <div class="vtnt-slider__loading-wrap" style={{ width: scrollWidth, ...railStyle }}></div>
                {barWrap}
            </div>
        )
    }
});
vtntSlider.cptName ='vtntSlider'
export default vtntSlider
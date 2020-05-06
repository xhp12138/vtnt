import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
@Component({
    name: 'vtnt-picker-demo'
})
export default class vtntPickerDemo extends Vue {
    num = 10
    columns = [{
        children: [0,1,2,3,4,5]
    },{
        children: ['a','b','c','d','e']
    }]
    childColumns = [
      {
        text: "浙江",
        children: [
          {
            text: "杭州",
            children: []
          },
          {
            text: "温州",
            children: [{ text: "鹿城区" }, { text: "瓯海区" }]
          }
        ]
      },
      {
        text: "福建",
        children: [
          {
            text: "福州",
            children: [{ text: "鼓楼区" }, { text: "台江区" }]
          },
          {
            text: "厦门",
            children: [{ text: "思明区" }, { text: "海沧区" }]
          }
        ]
      }
    ]
    render() { 
        return <div>
             {/* <vtnt-picker columns={this.columns}></vtnt-picker> */}
             <vtnt-picker columns={this.childColumns} isLink></vtnt-picker>
            </div>
    }
}
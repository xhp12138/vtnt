
const marked = require('marked');

module.exports = function (source) {
  const htmlString = String(marked(source));
  return `
    import { Vue, Component, Prop, Mixins, Watch } from "vue-property-decorator";
    @Component
    export default class mackDoc {
      render() {
        return <div>${htmlString}</div>
      }
    }
    `;
}
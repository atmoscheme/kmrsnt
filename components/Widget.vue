<script>
import {h} from 'vue';
export default {
  name: "WidgetBase",
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data(){
    return {
      paraWidgetName: 'para',
    }
  },
  methods :{
    contentMaker(content){
      if (typeof content === 'string') {
        return content
      } else if (!content) {
        return ''
      } else if (Array.isArray(content)){
        return content.map((element)=>{
          if (typeof element === 'object'){
            return this.parser(element)
          }
          return element;
        })
      }

    },
    parser({tagName, attributes, children}){
      return h(tagName, { domProps:attributes }, this.contentMaker(children))
    }

  },
  render() {
    return this.content.widgetType === this.paraWidgetName?
      h('p',{class:'doc__text' }, this.contentMaker(this.content.bodyElements)) :
      h('h2', {class:"other-widget"},  `WidgetElement ${this.content.widgetType}`)
  }

}
</script>

<style scoped>
.other-widget{
  color: red;
  font-size: 26px;
}

</style>


<template>
  <p class=”doc__text”  v-html="getParsedContent(content.bodyElements)"/>
</template>

<script>
export default {
  name: "ParaWidget",
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data(){return{
    excludedTags:['script'],
  }},
  methods :{
    getTag(content) {
      return this.excludedTags.includes(content.tagName)?'':`
          <${content.tagName}${this.addAttrs(content.attributes)}>
              ${content.children?this.getParsedContent(content.children):''}
          </${content.tagName}>`
    },
    getParsedContent(content){
      let html = '';
      if (Array.isArray(content) ) {
        html = content.reduce((result, current )=>{
          return result + this.getParsedContent(current);
        }, '')
      } else if (typeof content === 'object' )  {
        html = this.getTag(content);
      } else {
        html = content || '';
      }
      return html;
    },
    addAttrs(attrs){
      let result = '';
      if (attrs){
        Object.keys(attrs).forEach((k)=>{
          result +=` ${k}="${attrs[k]}"`
        })
      }
      return result;
    }
  }
}
</script>

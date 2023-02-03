<template>
<div ref="page" class="page">
  <div v-for="(widget, index) in articles" :key="index" class="widget">
<!--    Знаю что использовать индексы в кач-ве ключей плохо но быстро не смог найти альтернативу-->
    <Widget :content="widget" />
  </div>
</div>
</template>

<script>
import {getDocPageData, getDocPageDataShort} from "~/services/articles";
import {docPageData} from "~/data/data";
export default {
  name: "MainPage",
  data(){
    return {
      articles: [],
      nextArticle:0,
      pageHeightBase: 4000,
      pageHeightCurrent:0,
      docPageData: {},
      docPageDataShort: {},
    }
  },
  computed:{
    docBodyElements(){
      return docPageData.data?.content?.docBodyElements
    }

  },
  destroyed () {
    this.disableScrolling();
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.docPageData = getDocPageData();
    this.docPageDataShort = getDocPageDataShort();
    this.addNextArticle()
  },

  methods:{
    addNextArticle(){
      if (this.docBodyElements[this.nextArticle]){
        this.articles.push(this.docBodyElements[this.nextArticle]);
        this.nextArticle++;
        setTimeout(()=> {
          this.pageHeightCurrent = this.$refs.page.offsetHeight;
          if (this.pageHeightCurrent<this.pageHeightBase){
            this.addNextArticle();
          }
        },0)
      } else {
        this.disableScrolling();
      }
    },
    disableScrolling(){
      window.removeEventListener('scroll', this.onScroll);
    },
    onScroll(){
      const { pageYOffset } = window;
      if (pageYOffset > this.lastScrollTop) {
        if (pageYOffset+(this.pageHeightBase/2) >this.pageHeightCurrent){
          this.addNextArticle();
        }
      }
      this.lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
    },
  }
}
</script>

<template>
<div class="page">
  <div v-for="(widget, index) in docBodyElements" :key="index" class="widget">
<!--    Знаю что использовать индексы в кач-ве ключей плохо но быстро не смог найти альтернативу-->
    <Para v-if="widget.widgetType===paraWidgetName"  :content="widget" />
    <OtherWidget v-else :type="widget.widgetType" />
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
      paraWidgetName: 'para',
      docPageData: {},
      docPageDataShort: {},
    }
  },
  computed:{
    docBodyElements(){
      return docPageData.data?.content?.docBodyElements
    }

  },
  mounted() {
    this.docPageData = getDocPageData();
    this.docPageDataShort = getDocPageDataShort();
  }
}
</script>

<template>
  <div class="other-widget">
    <h2>{{`WidgetElement ${type}`}}</h2>
  </div>

</template>

<script>
export default {
  name: "OtherWidget",
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.other-widget{
  color: red;
  font-size: 26px;
}

</style>

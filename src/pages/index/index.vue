<template>
  <div class="wrap">
    <search-bar
      :disabled="false"
      @onClick="clickHandle"
      @onClear="clearHandle"
      @onChange="changeHandle"
      @onConfirm="confirmHandle"
    ></search-bar>
  </div>
</template>

<script>
import searchBar from "@/components/home/searchBar.vue";

export default {
  components: {
    searchBar
  },
  methods: {
    clickHandle() {
      console.log("父组件收到click");
    },
    clearHandle() {
      console.log("父组件收到clear");
    },
    changeHandle(e) {
      console.log("父组件收到change:", e);
    },
    confirmHandle(e) {
      console.log("父组件收到confirm", e);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.wrap {
  height: 100px;
}
</style>

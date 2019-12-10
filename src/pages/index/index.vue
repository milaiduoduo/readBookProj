<template>
  <div class="wrap">
    <search-bar
      :disabled="false"
      @onClick="clickHandle"
      @onClear="clearHandle"
      @onChange="changeHandle"
      @onConfirm="confirmHandle"
    ></search-bar>
    <imageView
      src="https://www.youbaobao.xyz/mpvue-res/big1.jpg"
      height="100px"
      mode="scaleToFill"
      :round="true"
    ></imageView>
  </div>
</template>

<script>
import searchBar from "@/components/home/searchBar.vue";
import imageView from "@/components/base/imageView.vue";

export default {
  components: {
    searchBar,
    imageView
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
</style>

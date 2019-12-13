<template>
  <div class="wrap">
    <search-bar
      :disabled="false"
      @onClick="clickHandle"
      @onClear="clearHandle"
      @onChange="changeHandle"
      @onConfirm="confirmHandle"
    ></search-bar>
    <!-- <imageView
      src="https://www.youbaobao.xyz/mpvue-res/big.jpg"
      height="100px"
      mode="scaleToFill"
      :round="true"
    ></imageView>-->
    <homeCard></homeCard>
  </div>
</template>

<script>
import searchBar from "@/components/home/searchBar.vue";
// import imageView from "@/components/base/imageView.vue";
import homeCard from "@/components/home/homeCard.vue";
import { getSetting } from "@/api/wechat.js";

export default {
  components: {
    searchBar,
    // imageView,
    homeCard
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
    },
    getSetting() {
      getSetting(
        "userInfo",
        () => {
          console.log("获取到设置！！");
        },
        () => {
          console.log("获取设置失败！！");
        }
      );
    }
  },
  mounted() {
    this.getSetting();
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

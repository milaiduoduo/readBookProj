<template>
  <div class="wrap">
    <div v-if="authed">
      <search-bar
        :disabled="false"
        @onClick="clickHandle"
        @onClear="clearHandle"
        @onChange="changeHandle"
        @onConfirm="confirmHandle"
      ></search-bar>
      <homeCard></homeCard>
    </div>
    <auth v-else src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"></auth>
  </div>
</template>

<script>
import searchBar from "@/components/home/searchBar.vue";

import homeCard from "@/components/home/homeCard.vue";
import auth from "@/components/base/auth.vue";

import { getSetting } from "@/api/wechat.js";

export default {
  components: {
    searchBar,
    // imageView,
    homeCard,
    auth
  },
  data() {
    return {
      authed: false
    };
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

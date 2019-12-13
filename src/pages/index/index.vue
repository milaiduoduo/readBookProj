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
    <auth v-else src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" @getUserInfo="getUserInfo"></auth>
  </div>
</template>

<script>
import searchBar from "@/components/home/searchBar.vue";

import homeCard from "@/components/home/homeCard.vue";
import auth from "@/components/base/auth.vue";

import { w_getSetting, w_getuserInfo } from "@/api/wechat.js";

export default {
  components: {
    searchBar,
    // imageView,
    homeCard,
    auth
  },
  data() {
    return {
      // 是否已经授权给小程序
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
    getUserInfo() {
      console.log("正在获取用户信息:");
      // this.getSetting();
      w_getuserInfo(
        userInfo => {
          console.log("成功获取用户信息", userInfo);
        },
        () => {
          console.log("获取用户信息失败！授权失败!"); //抛出异常
        }
      );
    },
    getSetting() {
      w_getSetting(
        "userInfo",
        res => {
          this.authed = true;
          console.log("获取到设置！！", res);
          this.getUserInfo();
        },
        res => {
          this.authed = false;
          console.log("获取设置失败！！", res);
        }
      );
    }
    // init() {
    //   this.getSetting();
    // }
  },
  mounted() {
    // this.init();
    this.getSetting();
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

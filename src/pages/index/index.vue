<template>
  <div class="wrap">
    <div class="title">hello world</div>
    <van-button type="primary" @click="clickHandle">按钮</van-button>
  </div>
</template>

<script>
import { get, post } from "@/utils/request.js";
export default {
  methods: {
    clickHandle() {
      console.log("1");
      // this.$router.push("/pages/index/main");
      post("https://www.baidu.com").then(response => {
        console.log("post handle response...");
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.wrap {
  .title {
    font-size: 40px;
    color: #ff0000;
  }
}
</style>

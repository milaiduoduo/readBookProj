<template>
  <div class="authWrap">
    <div class="midPlant">
      <div class="midPlantInfo">
        <div class="logoWrap">
          <imageView :src="src" round></imageView>
        </div>
        <div class="title">登录小慕读书</div>
        <div class="subTitle">全场好书免费读</div>
      </div>
      <button class="btnAuth" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import imageView from "@/components/base/imageView.vue";
export default {
  props: {
    src: ""
  },
  components: {
    imageView
  },
  methods: {
    getUserInfo() {
      this.$emit("getUserInfo");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.authWrap {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #999;
  .midPlant {
    position: relative;
    width: 270px;
    height: 248px;
    background: #f5f5f5;
    border-radius: 18px;
    .midPlantInfo {
      display: flex;
      //   height: calc(100% - 49px);
      flex-direction: column;
      align-items: center;
      .logoWrap {
        width: 74px;
        height: 74px;
        margin-top: 22.5px;
      }
      .title {
        font-size: 13px;
        color: #999;
        margin-top: 18px;
      }
      .subTitle {
        font-size: 16px;
        color: #333;
        font-weight: 1000;
        margin-top: 3.5px;
      }
    }
    .btnAuth {
      position: absolute;
      width: 100%;
      height: 49px;
      line-height: 49px;
      bottom: 0px;
      background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
      border-radius: 0 0 18px 18px;
      font-size: 15px;
      color: #fff;
    }
  }
}
</style>

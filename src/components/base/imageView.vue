<template>
  <div class="imageViewWrap" @click="onClick">
    <img
      :class="round?'round image':'image'"
      :style="{height}"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      @load="onLoad"
      @error="onError"
      v-show="!isLoading &&!error"
    />
    <img
      :class="round?'round image':'image'"
      :style="{height}"
      src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
      :mode="mode"
      :lazy-load="lazyLoad"
      v-show="isLoading || error"
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "widthFix"
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "auto"
    }
  },
  data() {
    return {
      isLoading: true,
      error: false
    };
  },
  watch: {
    src(newValue, preValue) {}
  },
  methods: {
    // 图片点击事件
    onClick() {
      this.$emit("onClick");
    },
    // 图片加载失败事件
    onError() {
      this.isLoading = false;
      this.error = true;
      console.log("on Error...");
    },
    // 图片加载成功事件
    onLoad() {
      this.isLoading = false;
      this.error = false;
      console.log("on Load...");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.imageViewWrap {
  img {
    width: 100%;
    &.round {
      border-radius: 50%;
    }
  }
}
</style>

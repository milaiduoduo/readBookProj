<template>
  <div class="homeCardWrap">
    <div class="homeCardInner">
      <div class="userInfo">
        <div class="avatarWrap">
          <imageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round></imageView>
        </div>
        <div class="nickname">米老鼠</div>
        <div class="shelfText">书架共{{3}}本好书</div>
        <div class="roundItem"></div>
        <div class="shelfText">特别精选</div>
      </div>
      <div class="bookInfo">
        <div class="bookWrap">
          <imageView
            src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
          ></imageView>
          <imageView
            src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
          ></imageView>
          <imageView
            src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
          ></imageView>
        </div>
        <div class="arrowWrap">
          <!-- 竖排文字 -->
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
      <div class="feedbackWrap">
        <span>反馈</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import imageView from "@/components/base/imageView.vue";
export default {
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  components: {
    imageView
  },
  methods: {
    gotoShelf() {},
    onBookClick() {},
    sign() {}
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.homeCardWrap {
  //   height: 179px;
  margin: 22px 20px 20px;
  padding: 21px 17px 20px 20px;
  box-sizing: border-box;
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 30px;
  .homeCardInner {
    background: blue;
    .userInfo {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #fff;
      .avatarWrap {
        width: 20px;
        height: 20px;
        margin-right: 8.5px;
      }
      .nickname {
        margin-right: 8.5px;
      }
      .roundItem {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #a2a2a2;
        margin: 0 8.5px;
      }
      .shelfText {
        opacity: 0.7;
      }
    }
    .bookInfo {
      display: flex;
      .bookWrap {
        flex: 1;
        display: flex;
      }
      .arrowWrap {
        display: flex;
        align-items: center;
        .shelf {
          width: 11px;
          font-size: 11px;
          color: #fff;
          opacity: 0.8;
          word-break: break-word;
        }
      }
    }
    // .feedbackWrap {
    //   position: absolute;
    // }
  }
}
</style>

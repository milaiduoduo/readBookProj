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
        <div class="booksWrap">
          <div class="bookWrapper">
            <imageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            ></imageView>
          </div>
          <div class="bookWrapper">
            <imageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            ></imageView>
          </div>
          <div class="bookWrapper">
            <imageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            ></imageView>
          </div>
        </div>
        <div class="arrowWrap">
          <!-- 竖排文字 -->
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
    </div>
    <div class="feedbackWrap" @click="onFeedBackClick">反馈</div>
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
    sign() {},
    onFeedBackClick() {}
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.homeCardWrap {
  position: relative;
  //   height: 179px;
  margin: 22px 20px 20px;
  padding: 21px 17px 20px 20px;
  box-sizing: border-box;
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  .homeCardInner {
    // background: blue;
    .userInfo {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #fff;
      margin-bottom: 18.5px;
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
      .booksWrap {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-right: 17.5px;
        .bookWrapper {
          width: 72px;
          height: 101px;
        }
      }
      .arrowWrap {
        display: flex;
        align-items: center;
        margin-right: 4.5px;
        .shelf {
          width: 11px;
          font-size: 11px;
          color: #fff;
          opacity: 0.8;
          word-break: break-word;
        }
      }
    }
  }
  .feedbackWrap {
    position: absolute;
    top: 19.5px;
    right: 0;
    width: 44.5px;
    height: 23.5px;
    line-height: 23.5px;
    background: #707070;
    border-radius: 100px 0 0 100px;
    // opacity: 0.3;
    font-size: 11px;
    color: #fff;
    text-align: center;
  }
}
</style>

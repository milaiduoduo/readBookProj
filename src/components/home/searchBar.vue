<template>
  <div class="searchBarWrap">
    <div class="searchBar">
      <van-icon class="searchIcon icon" name="search" size="15px" />
      <input
        class="searchInput"
        type="number"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch"
        v-model="searchWord"
        @click="onSearchBarClick"
        @input="onChange"
        confirm-type="search"
        @confirm="onConfirm"
        placeholder-style="color:#adb4be"
      />
      <van-icon
        class="clearIcon icon"
        name="clear"
        size="15px"
        @click="onClearClick"
        v-if="searchWord.length>0"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "m-search-bar",
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: "搜索"
    }
  },
  data() {
    return {
      searchWord: ""
    };
  },
  methods: {
    onSearchBarClick() {
      this.$emit("onClick");
    },
    onClearClick() {
      this.searchWord = "";
      this.$emit("onClear");
    },
    onChange(e) {
      console.log(e);
      const { value } = e.mp.detail;
      this.$emit("onChange", value);
    },
    onConfirm(e) {
      console.log(e);
      const { value } = e.mp.detail;
      this.$emit("onConfirm", value);
    },
    setValue(v) {
      this.searchWord = v;
    },
    getValue() {
      return this.searchWord;
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.searchBarWrap {
  padding: 15px;
  .searchBar {
    height: 40px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 12px 16px;
    .searchInput {
      flex: 1;
      margin: 0px 8px;
      font-size: 15px;
    }
    .icon {
      display: flex;
      height: 100%;
      align-items: center;
    }
  }
}
</style>

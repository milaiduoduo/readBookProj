<template>
  <div class="searchBarWrap">
    <div class="searchBar">
      <van-icon class="searchIcon icon" name="search" size="15px" />
      <input class="searchInput" type="text" placeholder="搜索" />
      <van-icon class="clearIcon icon" name="clear" size="15px" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "m-search-bar"
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

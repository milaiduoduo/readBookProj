<template>
  <div class="wrap">
    <search-bar></search-bar>
  </div>
</template>

<script>
import searchBar from "@/components/home/searchBar.vue";

export default {
  components: {
    searchBar
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.wrap {
  height: 100px;
}
</style>

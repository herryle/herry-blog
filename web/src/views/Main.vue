<template>
  <div class="page-main">
    <div class="header">
      <headerinner></headerinner>
    </div>
    <div class="articles">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>


<script>
import headerinner from './header'
export default {
  components: {
    headerinner
  }
}
</script>

<style lang="scss">
.header {
  background: #fff;
  padding: 0.55rem /* 15/12 */;
  position: sticky;
  top: 0;
  z-index: 9999;
}
</style>

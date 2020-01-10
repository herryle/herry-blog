<template>
  <div class="header-inner">
    <div class="header-left">
      <div class="logo">
        <a href>
          <img src="../../assets/images/logo.png" alt />
        </a>
      </div>
      <div>
        <router-link to="/" tag="a" @click="active=1" :class="{active:active===i}">文章</router-link>
      </div>
      <div>
        <router-link to="/about" tag="a" @click="active=2" :class="{active:active===i}">关于博客</router-link>
      </div>
    </div>
    <div class="search">
      <input type="text" class="ivu-input" placeholder="搜索文章" v-model="model.id" />
      <button @click="fetch()">
        <span class="iconfont icon-sousuo"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      active: 0
    }
  },
  methods: {
    async fetch() {
      alert(this.model.id)
    }
  }
}
</script>
<style lang="scss">
.header-inner {
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  .logo {
    img {
      width: 12rem; /* 90/12 */
    }
  }
  .header-left {
    font-size: 1.166667rem /* 14/12 */;
    display: flex;
    align-items: center; /*垂直*/
    justify-content: center; /*水平*/
    vertical-align: middle;
    line-height: 1.75rem /* 21/12 */;
    a {
      margin-right: 3rem /* 30/12 */;
      text-decoration: none;
      color: #777;
    }
    .router-link-exact-active {
      color: #409eff;
    }
  }
  .search {
    .ivu-input {
      width: 16.666667rem; /* 200/12 */
      border: 1px solid #dcdee2;
      border-radius: 4px;
      padding: 4px 7px;
      font-size: 1.166667rem /* 14/12 */;
      line-height: 1.5rem;
      margin-right: 0.5rem;
    }
    input::placeholder {
      color: #c5c8ce;
    }
    button {
      padding: 6px 9px;
      background: #fff;
      border: 1px solid #dcdee2;
      border-radius: 5px;
      font-weight: 600;
    }
  }
}
</style>
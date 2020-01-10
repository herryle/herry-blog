<template>
  <div class="sidebar">
    <div class="sidebar-box">
      <div class="sider-header">
        <i class="iconfont icon-menu" style="color:#2d8cf0;padding-right:10px"></i>
        推荐
      </div>
      <div class="sider-content">
        <div v-for="(item, n) in model" :key="n">
          <a :href="item.link" target="_blank">{{ item.title }}</a>
        </div>
      </div>
    </div>
    <div class="sidebar-box">
      <div class="sider-header">
        <i class="iconfont icon-shuqian" style="color:#2d8cf0;padding-right:10px"></i>
        分类
      </div>
      <div class="sider-content">
        <div v-for="(item, n) in category" :key="n">
          <!-- <a>{{ item.name }}</a> -->
          <router-link :to="`/category/${item._id}`" tag="a" :key="$route.path">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      model: {},
      category: {}
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('ad')
      this.model = res.data
    },
    async fetchCategory() {
      const res = await this.$http.get('category')
      this.category = res.data
    }
  },
  created() {
    this.fetch()
    this.fetchCategory()
  }
}
</script>

<style lang="scss">
.sidebar {
  min-width: 18%;
  .sidebar-box {
    border-radius: 10px;
    background: #fff;
    margin-bottom: 20px;
    .sider-header {
      padding: 5px 20px;
      border-bottom: 1px solid #f6f6f6;
      font-size: 1.44rem /* 17.28/12 */;
      font-weight: 700;
      color: #515a6e;
    }
    .sider-content {
      padding: 15px 20px;
      a {
        text-decoration: none;
        color: #515a6e;
      }
      a:hover {
        color: #409eff;
      }
    }
  }
}
</style>

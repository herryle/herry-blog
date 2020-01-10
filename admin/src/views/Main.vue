<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>内容管理
            </template>
            <el-menu-item-group>
              <template slot="title">分类</template>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
              <el-menu-item index="/categories/list">分类列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">文章</template>
              <el-menu-item index="/articles/create">新建文章</el-menu-item>
              <el-menu-item index="/articles/list">文章列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">广告</template>
              <el-menu-item index="/ads/create">新建广告</el-menu-item>
              <el-menu-item index="/ads/list">广告列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="/users/create">新建用户</el-menu-item>
              <el-menu-item index="/users/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 18px;height:40px">
          <span class="el-icon-s-custom" style="margin:0  20px;"></span>
          <span>{{ username }}</span>
          <el-dropdown @command="loginOut()">
            <span>
              <i
                class="el-icon-arrow-down el-icon--right"
                style="color:#409eff"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    loginOut() {
      sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  created() {
    this.username = sessionStorage.getItem('username')
  }
}
</script>
<style>
.el-header {
  background-color: rgb(238, 241, 246);
  color: #409eff;
  line-height: 40px;
}

.el-aside {
  color: #333;
}
</style>

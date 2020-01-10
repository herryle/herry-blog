<template>
  <div class="page-login">
    <div class="bg">
      <div class="bg">
        <div class="title">博客后台管理系统</div>
        <div class="info">
          <div class="user">
            <span>用户名</span>
            <input type="text" class="ipt" v-model="model.username" />
          </div>
          <div class="password">
            <span>密码</span>
            <input type="password" class="ipt" v-model="model.password" />
          </div>
          <div class="sublogin">
            <input
              type="button"
              name="登 陆"
              value="登 陆"
              class="btn"
              @click="login"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('login', this.model)
      sessionStorage.token = res.data.token
      sessionStorage.setItem('username', this.model.username)
      this.$router.push('/')
    }
  }
}
</script>
<style>
.page-login {
  background: url('../../assets/background.png') no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg {
  background: #fff;
  opacity: 0.8;
  padding: 20px 40px;
  border-radius: 15px;
}
.bg .title {
  text-align: center;
  font-size: 2rem;
  color: #409eff;
}
.info {
  font-size: 18px;
  margin-top: 60px;
}
.user {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
}
.password {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
}

.ipt {
  border: none;
  padding: 0 40px;
  outline: none;
  font-size: 18px;
}

.btn {
  width: 349px;
  margin: 30px auto;
  background: #409eff;
  border: none;
  padding: 9px 0;
  color: #fff;
  font-size: 18px;
  outline: none;
  border-radius: 3px;
}
</style>

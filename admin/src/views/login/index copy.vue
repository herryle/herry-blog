<template>
  <div class="page-login">
    <div class="page-content">
      <div class="content-header">
        <span>
          <img src="../../assets/jbxq_logo.png" alt srcset />
        </span>
        <div class="header-title">
          <div class="title-cn">研创园水环境提升系统</div>
          <div class="title-en">Yanchuangyuan Water Environment Hoisting System</div>
        </div>
      </div>
      <!-- header -->
      <div class="content-login">
        <div class="login-form">
          <div class="login-left">
            <div class="login-user">
              <div>用户名</div>
              <div>
                <input type="text" class="ipt" />
              </div>
            </div>
            <div class="login-password">
              <div>密&emsp;码</div>
              <div>
                <input type="text" class="ipt" />
              </div>
            </div>
            <div class="submit-login">
              <button class="btn">登陆</button>
            </div>
          </div>
          <!-- login-left -->
          <div class="login-right">
            <div class="right-title">扫描二维码，下载智慧水务APP</div>
            <div class="right-qr">
              <div class="qr-left">
                <div>
                  <img src="../../assets/qr_code.png" alt />
                </div>
                <div>Android</div>
              </div>
              <div class="qr-right">
                <div>
                  <img src="../../assets/qr_code.png" alt />
                </div>
                <div>ios</div>
              </div>
            </div>
          </div>
        </div>
        <!-- login-form -->
        <div class="login-footer">
          <span>
            建议使用Chrome浏览器，以获取更佳的体验。
            <img src="../../assets/bro_icon.png" alt srcset />
            <a href>浏览器下载</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page-login {
  background: url('../../assets/background.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  position: absolute;
}
.page-content {
  margin: 5% auto;
  width: 38rem;
}

.header-title .title-cn {
  font-size: 48px;
  font-weight: 700;
}

.header-title .title-en {
  font-size: 18px;
  margin: 16px 0;
}
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  color: #fff;
}

.content-login {
  /* width: 600px; */
  background: hsla(0, 0%, 89.4%, 0.75);
  padding: 35px 30px;
  border-radius: 15px;
  margin-top: 90px;
}
.login-form {
  display: flex;
  justify-content: space-between;
}
.login-user {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #323131;
  align-items: center;
}
.login-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #323131;
  margin-top: 20px;
}
.ipt {
  background: #fff;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  padding: 0.5rem /* 8/16 */;
  margin-left: 0.9375rem /* 15/16 */;
}
.right-qr {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.submit-login {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}
.btn {
  background: #66b1ff;
  border: none;
  width: 75.5%;
  padding: 10px 0;
  border-radius: 3px;
  color: #fff;
}
.right-qr {
  text-align: center;
  font-size: 12px;
  color: #666;
}
.login-footer {
  margin-top: 20px;
}
.login-footer span img {
  width: 28px;
  vertical-align: middle;
}
</style>
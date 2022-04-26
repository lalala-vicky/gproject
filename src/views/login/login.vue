<template>
  <div class="Loginpage">
    <div class="loginName">欢迎使用新生报到管理系统</div>
    <div class="login">
      <h1 class="userLogin">用户登录</h1>
      <div class="userInput">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
          :rules="rules"
        >
          <a-form-item>
            <a-input v-model="form.userName" placeholder="请输入用户名">
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password
              v-model="form.password"
              label="Warning"
              type="password"
              placeholder="请输入密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-checkbox @change="onChange"> Remember me </a-checkbox>
            <!-- <a class="login-form-forgot" href=""> Forgot password </a> -->
            <a class="login-form-forgot" href="" @click="changeRegister">
              没有账号？去注册
            </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
              @click="handleSubmit"
            >
              登录
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      remember: "",
      rules: {
        userName: [{ required: true, message: "请输入用户名！" }],
        password: [{ required: true, message: "请输入密码！" }],
      },
    };
  },
  methods: {
    // handleLogin() {
    //   this.$axios.get("http://localhost:8080/api/user.json").then((res) => {
    //     console.log("请求返回结果", res);
    //   });
    //   this.$router.push("/index");
    // },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    changeRegister() {
      this.$router.push("/register");
    },
    handleSubmit(e) {
      e.preventDefault(); //组织默认事件发生
      this.$axios.get("http://localhost:8080/api/user.json").then((res) => {
        console.log("请求返回结果", res);
        const inputuserName = this.form.userName;
        const inputpassword = this.form.password;
        if (res.data.code === "200") {
          const user = res.data.data;
          if (
            inputuserName === user.userName &&
            inputpassword === user.password
          ) {
            // 登陆成功
            this.$message.success("登录成功");
            this.$router.push({ path: this.redirect || "/" });
          } else {
            // 用户名或密码错误
            this.$message.warning("用户名或密码错误");
          }
        } else {
          // 请求数据异常
          this.$message.error(res.error);
        }
      });
    },
  },
};
</script>
<style scoped>
/* 表单 */
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
/* 注册 */
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
/* 登陆按钮 */
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
/* background */
.Loginpage {
  background-image: url("@/assets/111.png");
  min-height: 100vh;
  background-repeat: round;
}
/* 登陆块 */
.login {
  background-color: #fff;
  width: 500px;
  height: 300px;
  position: fixed;
  top: 25%;
  left: 30%;
  border-radius: 10px;
  box-shadow: 1px 0 15px 0 rgb(122, 106, 106);
}
.loginName {
  display: inline-block;
  font-size: 30px;
  font-style: italic;
  position: fixed;
  top: 13%;
  left: 35%;
}
/* 顶部系统名称 */
.userLogin {
  display: inline-block;
  position: relative;
  top: -42%;
  left: 39%;
  font-size: 20px;
  font-style: italic;
}
/* 登录表单*/
.userInput {
  width: 300px;
  display: inline-block;
  position: relative;
  top: 30%;
  left: 5%;
  margin-top: -20px;
}
</style>

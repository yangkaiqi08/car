<template>
  <div id="login">
    <!-- 头像 -->
    <div class="login_box">
      <div class="logo_shadow">
        <img src="./../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form class="form" :model="loginform" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="loginform.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginform.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="validate">登录</el-button>
          <el-button type="info" @click="resetFields">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      //这是表单数据绑定对象
      loginform: {
        username: "admin",
        password: "123456",
      },
      //表单验证规则对象
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetFields() {
      //点击重置按钮，重置登录表单
      console.log(this);
      this.$refs.ruleForm.resetFields();
    },
    validate() {
      //登录前预校验
      console.log(this);
      this.$refs.ruleForm.validate(async (s) => {
        // console.log(s);
        if (!s) return;
        const { data: res } = await this.$http.post("login", this.loginform);
        // console.log(res);
        if (res.meta.status !== 200) return this.$message.error("err");
        this.$message.success("success");
        // console.log(res)
        //1,将登录成功之后的token，保存到客户端的sessionStorage中
        window.sessionStorage.setItem('token',res.data.token);
        //1.1项目中除了登录之外的其他接口，必须在登录之后才能访问
        //1.2token只应在当前网站打开的期间生效，所以将token保存在sessionStorage中
        //2，通过编程式导航跳转到后台主页面，路由地址/home
        this.$router.push('/home');
      });
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
#login {
  background: url('./../assets/wallhaven-r29w2m_2400x1352.png');
  height: 100%;
  .login_box {
    width: 4.5rem;
    height: 3rem;
    background: #fff;
    border-radius: 0.03rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .logo_shadow {
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      background: #fff;
      border: 0.01rem solid #eee;
      box-shadow: 0 0 0.1rem #ddd;
      padding: 0.1rem;

      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
  }
}
.form {
  position: absolute;
  padding: 0 0.2rem;
  box-sizing: border-box;
  width: 100%;
  bottom: 0;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>

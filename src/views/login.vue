<template>
  <div id="login">
    <!-- 头像 -->
    <div class="login_box">
      <div class="logo_shadow">
        <img src="./../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form class="form" :model="loginform" :rules="rules" ref="ruleForm">
        <el-form-item prop="userName">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="loginform.userName"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginform.passWord"
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
        userName: "admin",
        passWord: "tiger",
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
        console.log(s);
        if (!s) return;
        const {data:res}  = await this.axios.get("api/userLogin/authUser",{params:this.loginform});
        console.log(res)
      //   // console.log(res);
      if(res.code === 2000){
        console.log(1)
       alert(res.message)
       window.sessionStorage.setItem('token',res.data.accessToken);
       this.$router.push('/home');
      }
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

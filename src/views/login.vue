<template>
  <div class="login">
    <div class="content">
      <h2>welcome</h2>
      <h3>登陆</h3>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="padding-right: 20px"
      >
        <el-form-item label="账号" prop="user">
          <el-input
            placeholder="请输入账号"
            type="text"
            v-model="ruleForm.user"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" style="float: left"
            >记住我</el-checkbox
          >
          <el-button
            class="loginbtn"
            type="primary"
            @click.native="submitForm('ruleForm')"
            style="
              width: 200px;
              height: 50px;
              font-size: 16px;
              float: right;
              border-radius: 10px;
            "
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginApi,getusercommissionList  } from '../request/api'

export default {
  data() {
    return {
      ruleForm: {
        user: "",
        password: "",
      },
      checked: false,
      rules: {
        user: [{ required: true, message: "账号不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          getusercommissionList({
            page:1,
            pagesize: 10
          }).then(res => {
            console.log(res);
          })
           loginApi({
             password:this.ruleForm.password,
             account:this.ruleForm.user,
           }).then(res=>{
             console.log(res);
             if(res) {
               localStorage.setItem('token',res.accessToken);
               this.$router.push("/home");
             }
           })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less">
.login {
  height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .content {
    h2 {
      width: 100%;
      font-size: 74px;
      color: #000;
      font-weight: 400;
      opacity: 0.03;
      margin: 30px 0 40px;
    }
    h3 {
      position: absolute;
      left: 50px;
      top: 50px;
      font-size: 36px;
      text-align: center;
      font-weight: 600;
      color: #333;
    }
    position: relative;
    margin-top: 50vh;
    margin-left: 50vw;
    height: 399px;
    -webkit-transform: translate(-50%, -65%);
    transform: translate(-50%, -65%);
    width: 550px;
    padding: 0 40px 40px;
    overflow: hidden;
    background-color: #fff;
    -webkit-box-shadow: 0 18px 28px 0 rgba(66, 141, 215, 0.3);
    box-shadow: 0 18px 28px 0 rgba(66, 141, 215, 0.3);
    border-radius: 20px;
    .el-from-item {
      border: 1px solid #ededed;
      background: #fff;
      border-radius: 5px;
      color: #454545;
      margin: 0 0 25px 0;
      padding: 10px 20px;
      height: 52px;
    }
  }
}
</style>

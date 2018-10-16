<template>
  <el-form :model="userForm" ref="userForm" :rules="rules1" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">登录系统</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="userForm.account" autocomplete="off" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="userForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%" :loading="logining" @click.native.prevent="handleSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import {requestLogin} from '../api/api';
  import router from '../router'
  export default{
    components: {
      ElButton,
      ElCheckbox,
      ElInput,
      ElFormItem,
      ElForm
    },
    data () {
      return {
        userForm:{
          account:'admin',
          password:'123456'
        },
        checked:true,
        logining:false,
        rules1:{
          //输入时候的验证
          account:[
            {required:true,message:'请输入账号',trigger:'blur'}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'blur'}
          ]
        }
      }
    },
    methods:{
      handleSubmit() {
        console.log("1")
        this.$refs.userForm.validate((valid)=>{
            if (valid){
                this.logining = true;
                var loginParams = {username:this.userForm.account,password:this.userForm.password};
                requestLogin(loginParams).then(data =>{
//                    alert(JSON.stringify(data))
                    this.logining = false;
                    let {msg,code,user} = data;
                    if(code!= 200){
                        this.$message({
                          message:msg,
                          type:'error'
                        })
                    }else {
//                      alert(JSON.stringify(user))
                        sessionStorage.setItem('user',JSON.stringify(user));
                      this.$router.push({path:'/form'})
                    }
                });
            }else {
                console.log("error submit");
                return false;
            }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container{
    width: 300px;
    height: auto;
    border-radius: 3px;
    -webkit-boder-radius:3px;
    -moz-boder-radius:3px;
    border: 1px solid #eaeaea;
    margin: 0 auto;
    padding: 20px 30px 10px 30px;
    .title{
      text-align: center;
      color: #505458;
    }
    .remember{
      float: left;
      margin: 0px 0px 20px 0px;
    }
  }
</style>

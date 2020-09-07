<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formdata"
    >
      <h2>管理员登录</h2>
      <!--<el-form-item label="工号">
        <el-input v-model="formdata.userid"></el-input>
      </el-form-item>-->
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="handleLodin()">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      formdata: {
//    	userid:"",
        username: "",
        password: "",
      },
    };
  },
  methods:{
     handleLodin(){
         //测试版本
         if(this.formdata.username !== '' && this.formdata.password !== ''){
             this.$router.push({path:'/home'})
                //  2.提示成功
                this.$message({
                showClose: true,
                message: '登录成功',
                type: 'success'
                });
         }else {
             this.$message({
                showClose: true,
                message: '用户名和密码不能为空',
                type: 'error'
                });
         }
         //正式版本需要发送请求
         // // url是要发送请求的地址
         // this.$http.post('http://192.168.8.106:8081/user/login',this.formdata).then(res => {
         //     //请求返回来的数据
         //     console.log(res.data)
         //    //  保存token：
         //    //localStorage.setItem('token',res.data.token)
         //    //  登录成功
         //    if(res.data == "200"){
         //        //  1.跳转home页面
         //        this.$router.push({path:'/home'})
         //        //  2.提示成功
         //        this.$message({
         //        showClose: true,
         //        message: '登录成功',
         //        type: 'success'
         //        });
         //    }else { //  登录失败
         //        this.$message({
         //        showClose: true,
         //        message: '用户名或密码错误',
         //        type: 'error'
         //        });
         //    }
         // })
		 //正式版本结束
     } 
  }
};
</script>
<style scoped>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
	
.login-form .h2{
	text-align: center;
}
.login-btn {
  width: 100%;
}
</style>


<template>
<body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
        <h3 class="login_title">系统登录</h3>
        <el-form-item>
            <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input
                type="password"
                v-model="loginForm.password"
                auto-complete="off"
                placeholder="密码"
            ></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button
                type="primary"
                style="width: 100%;background: #505458;border: none"
                v-on:click="login"
            >登录</el-button>
        </el-form-item>
    </el-form>
</body>
</template>

<script>
export default {
    name: 'Login',

    data () {
        return {
            loginForm: {
                username: 'admin',
                password: '123'
            },
            responseResult: []
        }
    },
    methods: {
        login () {
            var _this = this
            this.$axios
                .post('/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(successResponse => {
                    // 后端返回的json结果赋值给successResponse.data
                    // 通过successResponse.data.code获取json中对应的code

                    console.log(successResponse.data.code)
                    if (successResponse.data.code === 200) {
                        // 将login登录页面输入的用户名密码,通过vuex.Store.commit调用./store/index.js中的login()函数保持变量到浏览器中
                        // 注意，虽然./store/index.js中定义的login()方法有两个入参,但此次只需要传递一个待保存的数据_this.loginForm即可
                        _this.$store.commit('login', _this.loginForm)
                        if (_this.$router.history.current.path === '/login') {
                            console.log('直接调用/login')
                            this.$router.replace({ path: 'index' })
                        } else {
                            var path = _this.$router.history.current.query.redirect
                            console.log('登录成功,跳转至: ' + path)
                            this.$router.replace({ path: path })
                        }
                    } else {
                        console.log('login in error:' + successResponse.data.code)
                    }
                })
                .catch(failResponse => {
                    console.log(failResponse)
                })
        }
    }
}
</script>

<style>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
#poster {
    background: url("../assets/img/bg/kwai_logo.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}
body {
    margin: 0px;
}
</style>

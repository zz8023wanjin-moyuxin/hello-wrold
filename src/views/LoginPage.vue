<template>
  <div class="loginPage">
    <div class="layui-container">
      <form class="layui-form layui-from-pane"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <validation-provider rules="required|email" name="用户名" v-slot="{ errors }">
            <div class="layui-input-block boxStyle">
                <input
                    type="text"
                    name="name"
                    v-model="name"
                    placeholder="请输入用户名"
                    autocomplete="off"
                    class="layui-input"
                />
              <span class="error layui-form-mid">{{ errors[0] }}</span>
            </div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <validation-provider rules="required" name="密码" v-slot="{ errors }">
            <div class="layui-input-block boxStyle">
              <input
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="请输入密码"
                  autocomplete="off"
                  class="layui-input"
              />
              <span class="error layui-form-mid">{{ errors[0] }}</span>
            </div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
                type="text"
                name=""
                placeholder="请输入验证码"
                autocomplete="off"
                class="layui-input"
            />
          </div>
          <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha"></div>
        </div>
        <div class="layui-form-item">
          <button type="button" class="layui-btn">立即登录</button>
          <a class="myxClass" href="http://www.layui.com">忘记密码</a>
        </div>
      </form>
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import { ValidationProvider, extend } from 'vee-validate';
  import { required, email } from 'vee-validate/dist/rules';

  extend('required', {
    ...required,
    message: '{_field_}不能为空'
  });
  extend('email', {
    ...email,
    message: '{_field_}不符合邮箱格式'
  });

  Vue.component('ValidationProvider', ValidationProvider);

  @Component
  export default class LoginPage extends Vue {
    svg = '';
    name = '';
    password = '';

    mounted () {
      this.getCaptcha();
    }

    getCaptcha () {
      axios.get("http://localhost:3000/public/getCaptcha")
        .then((res) => {
          console.log(res);

          if (res.status == 200) {
            const obj = res.data;
            if (obj.code == 200) {
              this.svg = obj.data;
            }
          }
        })
    }
  }

</script>

<style scoped lang="less">
  .loginPage {
    background: #dcdcdc;
    text-align: left;
  }
  .layui-container {
    background: #ffffff;
  }
  input {
    width: 12rem;
  }
  .myxClass {
    margin-left: 2rem;
    :hover {
      color: #009688;
    }
  }
  .layui-btn {
    margin-left: 3rem;
  }
  .svg {
    position: relative;
    top: -0.8rem;
  }
  .error {
    color: red;
    margin-left: 1rem;
  }
  .boxStyle {
    display: flex;
    align-items: center;
  }
</style>

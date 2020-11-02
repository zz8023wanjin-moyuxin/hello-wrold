<template>
  <div class="loginPage">
    登录界面
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class LoginPage extends Vue {

  }

</script>

<style scoped lang="less">
  .loginPage {
    background-image: url("../assets/login.png");
    height: 100%;
    width: 100%;
    background-size: 100%;
  }
</style>

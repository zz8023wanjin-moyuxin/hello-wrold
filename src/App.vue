<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view v-if="this.$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepAlive"></router-view>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  @Component({
    components: {Footer, Header}
  })
  export default class App extends Vue {

  }

</script>

<style lang="less">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";

// 公用样式
.svg {
  position: relative;
  top: -4px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div class="about">
    <h1>This is an Counter page</h1>
    <Counter></Counter>
  </div>
</template>
<script>
  import { Component, Vue } from 'vue-property-decorator';
  import Counter from "../components/Counter";
  @Component({
    components: {Counter}
  })
  export default class About extends Vue {

  }
</script>

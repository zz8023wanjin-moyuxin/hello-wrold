<template>
  <div class="myCash">
    <h1>This is an Cash page</h1>
    <CashRegister></CashRegister>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import CashRegister from "@/components/CashRegister";
@Component({
  components: {CashRegister}
})
export default class MyCash extends Vue {


}
</script>

<style scoped lang="less">

</style>

<template>
  <div class="cashRegister">
    <div>
      <span>单价</span>
      <el-input
          v-model="price"
          type="number"
      ></el-input>
      <span>数量</span>
      <el-input
          v-model="amount"
          type="number"
      ></el-input>
      <el-select v-model="standard" placeholder="请选择收费标准">
        <el-option
            v-for="item in standardOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="cashHandleCLick">确定</el-button>
      <el-button type="primary" @click="resetHandleCLick">重置</el-button>
    </div>
    <div class="result">
      <span>{{countResult}}</span>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import {Context, DiscountType} from "../../policyContext/Context";

@Component
export default class MyCash extends Vue {
  price = 0;
  amount = 0;
  standard = '';
  countResult = 0;
  standardOptions = [
    {
      value: '正常收费',
      label: '正常收费'
    },
    {
      value: DiscountType.FIVE_DISCOUNT,
      label: '打五折'
    },
    {
      value: DiscountType.SEVEN_DISCOUNT,
      label: '打七折'
    },
    {
      value: DiscountType.NINE_DISCOUNT,
      label: '打九折'
    },
    {
      value: DiscountType.THREE_AGAINST_ONE,
      label: '满300返100'
    },
    {
      value: DiscountType.SEVEN_AGAINST_THREE,
      label: '满700返300'
    }
  ]

  cashHandleCLick () {
    const context = new Context(this.standard, this.price, this.amount).getStrategy();
    this.countResult += context.getResult();
  }

  resetHandleCLick () {
    this.amount = 0;
    this.price = 0;
    this.standard = '';
    this.countResult = 0;
  }
}
</script>

<style scoped lang="less">
  .cashRegister {
    .el-input {
      max-width: 10rem;
      padding: 0 1rem;
    }
    .el-select {
       max-width: 10rem;
       padding: 0 1rem;
     }
  }
  .result {
    span {
      font-size: 25rem;
      color: #409EFF;
    }
  }
</style>

<template>
  <div class="Counter">
    <el-input
        type="number"
        v-model="inputValA"
    />
    <el-select v-model="operationStr" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-input
        type="number"
        v-model="inputValB"
    />
    <el-button type="primary" @click="counterHandleCLick">计算</el-button>
    <div class="result">
      <span>{{countResult}}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {OperationFactory} from "@/simpleFactory/OperationFactory";

  @Component
  export default class Counter extends Vue {
    inputValA = 0;
    inputValB = 0;
    operationStr = '+';
    countResult = 0;

    options = [
      {
        value: '+',
        label: '+'
      },
      {
        value: '-',
        label: '-'
      },
      {
        value: '*',
        label: '*'
      },
      {
        value: '/',
        label: '/'
      }
    ]

    counterHandleCLick () {
      const opera = OperationFactory.createOperation(this.operationStr);
      if (opera) {
        // todo input框会将输入的值自动转为string
        opera.numberA = Number(this.inputValA);
        opera.numberB = Number(this.inputValB);
        this.countResult = opera.getResult();
      }
      else {
        this.$message.error('暂不支持此预算符号')
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .Counter {
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

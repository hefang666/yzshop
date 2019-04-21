<template>
  <div class="container clearfix">
    <div class="step">
      <ul class="step-lists">
        <li class="step-item current">1.购物车</li>
        <li class="step-item  ">2.填写订单信息</li>
        <li class="step-item ">3.提交成功</li>
        <li class="step-item">4.在线支付</li>
      </ul>
    </div>
    <router-view></router-view>

  </div>
</template>


<style lang="less" scoped>
@import '~css/common.less';
.step-lists {
  width: 100%;
  line-height: 31px;
  height: 33px;
  background: #e6e4e5;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
  overflow: hidden;
  .step-item {
    width: 25%;
    float: left;
    position: relative;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    &:after {
      content: ' ';
      position: absolute;
      top:-1px;
      border: 16px solid transparent;
      border-left-color: #e6e4e5;
      visibility: visible;
      right: -32px;
      z-index: 10;
    }
    &.current:after {
      border-left-color: @redColor
    }
    &:before {
      right: -37px;
      top: -3px;
      content: '';
      position: absolute;
      border: 18px solid transparent;
      border-left-color: #ccc;
      z-index: 10;
    }
    &.current {
      color: #fff;
      background: @redColor;
      border-color: @redColor;
    }
  }
}

</style>

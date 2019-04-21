<template>
  <div class="product_content">
    <el-tabs v-model="activeName" >
      <el-tab-pane label="商品介绍" name="first">
        <Detail />
      </el-tab-pane>
      <el-tab-pane label="商品评价" name="second">商品评论</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import Detail from './detail.vue'
  export default {
    data () {
      return {
        activeName: 'first'
      }
    },
    components: {
      Detail
    },
  }
</script>
<style lang="stylus" scoped>
.product_content
  /deep/.el-tabs
    .el-tabs__nav-wrap
      background 999
      height 30px
      line-height 30px
      .el-tabs__item
        width 120px
        font-size 14px
        text-align center
        padding 0
        &.current, &:hover
          a
          background #b6ab8f
        a
          color: #fff
</style>
